Blockly.Blocks['arduino_serial_available'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ARDUINO_SERIAL_AVAIL);
    this.setOutput(true);
    this.setTooltip('');
    this.setColour(Blockly.Blocks.hardware.HUE);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['arduino_serial_available'] = function(block) {
  var code = 'Serial.available()';
  return code;
};
