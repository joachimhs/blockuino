Blockly.Blocks['arduino_software_serial_available'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ARDUINO_SOFT_SERIAL_AVAIL);
    this.setOutput(true);
    this.setTooltip('');
    this.setColour(Blockly.Blocks.hardware.HUE);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['arduino_software_serial_available'] = function(block) {
  var code = 'SoftSerial.available()';
  return code;
};
