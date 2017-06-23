var Avrgirl = require('avrgirl-arduino');
var intel_hex = require('intel-hex');
var SerialPort = require("browser-serialport").SerialPort

var avrgirl = new Avrgirl({
    board: 'uno',
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

            console.log('uploading...');
            console.log(hexfileascii);

            var responseMessage = {
                usbPort: null,
                error: null
            };

            avrgirl.flash(new Buffer(request.hex), function (error) {
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
            sendResponse("initialized");
        } else if (request.action === "serialports_list") {
            console.log('serialdata_list');

            var portsReturn = [];

            avrgirl.list(function (err, ports) {
                console.log(ports);
                ports.forEach(function (port) {
                    var board = port.manufacturer;

                    if (port && port.vendorId === '0x2341' && port.productId === '0x43') {
                        board = 'Arduino Uno'
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
        } else if (request.action === "serialports_read_serial") {
            var returnObj = {
                data: window.serialDataCache
            };
            window.serialDataCache = "";

            sendResponse(JSON.stringify(returnObj));
        } else if (request.action === "serialports_close") {
            if (window.selectedSerialPort) {
                window.selectedSerialPort.close();
            }
            sendResponse(JSON.stringify('{}'));
        }

        return true;
    }
);