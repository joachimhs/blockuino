var Avrgirl = require('avrgirl-arduino');
var intel_hex = require('intel-hex');

var avrgirl = new Avrgirl({
  board: 'uno',
  debug: true
});
 
console.log('loaded...');

chrome.runtime.onMessageExternal.addListener(
  function (request, sender, sendResponse) {
      console.log("Message Recived");   
	  console.log(request.hex);
	  
	  if (request.hex) {
		  var hexfileascii = intel_hex.parse(request.hex).data;
				  
		  console.log('uploading...');
		  console.log(hexfileascii);
		  
		  avrgirl.flash(new Buffer(request.hex), function (error) {
		    if (error) {
		      console.error(error);
		    } else {
		      console.info('done.');
		    }
		  });
	  };
  }
);