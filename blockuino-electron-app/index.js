const setupEvents = require('./installers/setupEvents')
 if (setupEvents.handleSquirrelEvent()) {
    // squirrel event handled and app will exit in 1000ms, so don't do anything else
    return;
 }
 
 var { app, ipcMain, globalShortcut, Menu } = require('electron');
var menubar = require('menubar');
var mb = menubar({ dir: __dirname + '/app', width: 440, height: 270, icon: __dirname + '/app/icon.png', preloadWindow: true, windowPosition: 'topRight' });
var isDev = require('electron-is-dev');
var http = require('http');
var Avrgirl = require('avrgirl-arduino');
var intel_hex = require('intel-hex');
var SerialPort = require("serialport").SerialPort
var body = [];
var retVal = {};
var serialDataCache = "";
var selectedSerialPort = null;

var avrgirl = new Avrgirl({
    board: 'uno',
    debug: true
});

var avrgirlNano = new Avrgirl({
    board: "nano",
    debug: true
});

console.log('loaded...');
console.log(avrgirl);

mb.on('show', function () {
  mb.window.webContents.send('show');
});

mb.app.on('will-quit', function () {
  globalShortcut.unregisterAll();
});

mb.app.on('activate', function () {
  mb.showWindow();
});

// when receive the abort message, close the app
ipcMain.on('abort', function () {
  mb.hideWindow();
});

// update shortcuts when preferences change
ipcMain.on('update-preference', function (evt, pref, initialization) {
  
});

ipcMain.on('asynchronous-message', (event, arg) => {
    console.log('arg: ' + arg);
    if (arg === 'doQuit') {
        console.log('quitting app...');
        mb.app.quit();
    }
});

var template = [
  
];

mb.on('ready', function ready () {
  console.log('app ready')
  // Build default menu for text editing and devtools. (gone since electron 0.25.2)
  var menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)
});

app.on('ready', function ready () {
  console.log('app ready');
  console.log('creating server...');
    var server = http.createServer(function(req, res) {
        //console.log('>>> Got HTTP Request!');
        //console.log(req);

        var allowOrigin = 'http://blockuino.no';
        if (req.headers.origin === 'http://dev.blockuino.no:4567' || req.headers.origin === 'http://test.blockuino.no' || req.headers.origin === 'http://blockuino.no') {
            allowOrigin = req.headers.origin;
        }

        //console.log(req.headers.origin);
        req.on('data', function(chunk) {
            body.push(chunk);
            retVal = {};
        }).on('end', function() {
            //console.log('REQUEST BODY');

            res.writeHead(200, {'Content-Type': 'application/json', "Access-Control-Allow-Origin": allowOrigin});

            var content = Buffer.concat(body).toString();
            //console.log(content);
            body = [];

            var action = getAction(content);

            if (action === 'initialize') {
                console.log('INITIALIZING');
                res.write('{"result": "initialized"}');
                req.pipe(res);
            } else if (action === 'hex') {
                var hexInput = getHex(content);
                var arduino = getRequestArduino(content);
                var hexfileascii = intel_hex.parse(hexInput).data;

                console.log('uploading...');
                console.log(hexfileascii);

                var responseMessage = {
                    usbPort: null,
                    error: null
                };

                var useAvrgirl = avrgirl;

                if (arduino === 'uno') {
                    useAvrgirl = avrgirl;
                } else if (arduino === 'nanoatmega328') {
                    useAvrgirl = avrgirlNano;
                }

                useAvrgirl.flash(new Buffer(hexInput), function (error) {
                    if (error) {
                        console.error(JSON.stringify(error));
                        console.error(JSON.stringify(error.message));
                        console.error(JSON.stringify(error.name));
                        responseMessage.error = error.message;
                    } else {
                        console.info('done.');
                        responseMessage.usbPort = useAvrgirl.protocol.serialPort.path;
                    }

                    res.write(JSON.stringify(responseMessage));
                    req.pipe(res);
                });
            } else if (action === 'serialports_list') {
                console.log('serialports_list');

                var portsReturn = [];

                avrgirl.list(function (err, ports) {
                    console.log(ports);
                    ports.forEach(function (port) {
                        var board = port.manufacturer;

                        if (port && port.vendorId === '0x2341' && port.productId === '0x43') {
                            board = 'Arduino Uno';
                        } else if (port && (port.productId === '0x6001' || port.productId === '0x7523')) {
                            board = 'Arduino Nano';
                        }

                        portsReturn.push({
                            comName: port.comName,
                            pnpId: port.pnpId,
                            manufacturer: board
                        });
                    });

                    res.write(JSON.stringify(portsReturn));
                    req.pipe(res);
                });
            } else if (action === "serialports_open") {
                if (selectedSerialPort) {
                    selectedSerialPort.close();
                }

                console.log('serialdata_open');
                var port = getPort(content);
                console.log('port: ' + port);

                if (port) {
                    var serialPort = new SerialPort(port, {
                        baudrate: 9600,
                        openImmediately: false
                    }); // this is the openImmediately flag [default is true]

                    selectedSerialPort = serialPort;
                    serialPort.open(function (error) {
                        if (error) {
                            console.log('failed to open: ' + error);
                        }
                    });
                    serialPort.on('data', function (data) {
                        //console.log('data received: ' + data);
                        serialDataCache = serialDataCache.concat(data);
                    });
                }

                res.write(JSON.stringify({}));
                req.pipe(res);
            } else if (action === 'serialports_read_serial') {
                var returnObj = {
                    data: serialDataCache
                };
                serialDataCache = "";

                res.write(JSON.stringify(returnObj));
                req.pipe(res);
            } else if (action === 'serialports_write_serial') {
                var jsonBody = getJsonBody(content);

                if (selectedSerialPort) {
                    if (jsonBody.serialMessage) {
                        console.log('Serial write: !' + jsonBody.serialMessage + "!");

                        selectedSerialPort.write(jsonBody.serialMessage + "\r\n", function(err) {
                            if (err) {
                                return console.log('Error on write: ', err.message);
                            }
                        });
                    }
                }
            } else if (action === "serialports_close") {
                if (selectedSerialPort) {
                    selectedSerialPort.close();
                }

                res.write(JSON.stringify({}));
                req.pipe(res);
            }

        });

        return true;
    });

    console.log('listening to 12344');
    server.listen(12344);
});

function getJsonBody(data) {
    return JSON.parse(data);
}

function getAction(body) {
    var action = null;

    if (body) {
        var jsonObject = getJsonBody(body);
        if (jsonObject && jsonObject.action) {
            action = jsonObject.action;
        } else if (jsonObject && jsonObject.hex) {
            action = 'hex';
        }
    }

    return action;
}

function getPort(body) {
    var port = null;

    if (body) {
        var jsonObject = getJsonBody(body);
        if (jsonObject && jsonObject.port) {
            port = jsonObject.port;
        }
    }

    return port;
}

function getHex(body) {
    console.log(body);
    var jsonObject = getJsonBody(body);
    return jsonObject.hex;
}

function getRequestArduino(body) {
    console.log(body);
    var jsonObject = getJsonBody(body);
    return jsonObject.arduino;
}

function quitBlockuino() {
    console.log('quitBlockuino!!');
    mb.app.quit();
}