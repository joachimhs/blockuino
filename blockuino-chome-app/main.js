var Avrgirl = require('avrgirl-arduino');
var intel_hex = require('intel-hex');
var SerialPort = require("browser-serialport").SerialPort

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
window.avrgirl1 = avrgirl;
window.serialDataCache = "";
window.selectedSerialPort = null;

chrome.runtime.onMessageExternal.addListener(
    function (request, sender, sendResponse) {
        if (request.hex) {
            var hexfileascii = intel_hex.parse(request.hex).data;
            var arduino = request.arduino;

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

            useAvrgirl.flash(new Buffer(request.hex), function (error) {
                if (error) {
                    console.error(JSON.stringify(error));
                    console.error(JSON.stringify(error.message));
                    console.error(JSON.stringify(error.name));
                    responseMessage.error = error.message;
                } else {
                    console.info('done.');
                    responseMessage.usbPort = window.avrgirl1.protocol.serialPort.path;
                }

                sendResponse(JSON.stringify(responseMessage));
            });

        } else if (request.action === "initialize") {
            sendResponse('initialized');
        } else if (request.action === "serialports_list") {
            console.log('serialdata_list');

            var portsReturn = [];

            avrgirl.list(function (err, ports) {
                console.log(ports);
                ports.forEach(function (port) {
                    var board = port.manufacturer;

                    if (port && port.vendorId === '0x2341' && port.productId === '0x43') {
                        board = 'Arduino Uno'
                    } else if (port && (port.productId === '0x6001' || port.productId === '0x7523')) {
                        board = 'Arduino Nano';
                    }

                    portsReturn.push({
                        comName: port.comName,
                        pnpId: port.pnpId,
                        manufacturer: board
                    });
                });

                sendResponse(JSON.stringify(portsReturn));
            });
        } else if (request.action === "serialports_open") {
            console.log('serialdata_open');
            console.log('port: ' + request.port);

            if (window.selectedSerialPort) {
                window.selectedSerialPort.close();
            }

            if (request.port) {
                var serialPort = new SerialPort(request.port, {
                    baudrate: 9600
                }, false); // this is the openImmediately flag [default is true]

                window.selectedSerialPort = serialPort;
                serialPort.open(function (error) {
                    if (error) {
                        console.log('failed to open: ' + error);
                    } else {
                        console.log('open');
                        serialPort.on('data', function (data) {
                            console.log('data received: ' + data);
                            window.serialDataCache = window.serialDataCache.concat(data);
                        });
                    }
                });
            }

            sendResponse('{}');
        } else if (request.action === 'serialports_write_serial') {

            if (selectedSerialPort) {
                if (request.serialMessage) {
                    console.log('Serial write: !' + request.serialMessage + "!");

                    selectedSerialPort.write(request.serialMessage + "\r\n", function (err) {
                        if (err) {
                            return console.log('Error on write: ', err.message);
                        }
                    });
                }
            }
        } else if (request.action === "serialports_read_serial") {
            var returnObj = {
                data: window.serialDataCache
            };
            window.serialDataCache = "";

            sendResponse(JSON.stringify(returnObj));
        } else if (request.action === "serialports_close") {
            if (window.selectedSerialPort) {
                window.selectedSerialPort.close();
                window.selectedSerialPort = null;
            }
            sendResponse(JSON.stringify('{}'));
        }

        return true;
    }
);