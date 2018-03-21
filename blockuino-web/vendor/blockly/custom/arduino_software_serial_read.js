Blockly.Blocks['arduino_software_serial_read'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ARDUINO_SOFT_SERIAL_READ);
    this.setOutput(true);
    this.setTooltip('');
    this.setColour(Blockly.Blocks.hardware.HUE);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['arduino_software_serial_read'] = function(block) {
  var value_text = Blockly.Arduino.getValueForVariable(block, 'TEXT', Blockly.Arduino.ORDER_NONE);

  var code = 'SoftSerial.read()';
  return code;
};
