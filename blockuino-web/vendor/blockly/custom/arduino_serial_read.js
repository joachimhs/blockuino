Blockly.Blocks['arduino_serial_read'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ARDUINO_SERIAL_READ);
    this.setOutput(true);
    this.setTooltip('');
    this.setColour(Blockly.Blocks.hardware.HUE);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['arduino_serial_read'] = function(block) {
  var value_text = Blockly.Arduino.getValueForVariable(block, 'TEXT', Blockly.Arduino.ORDER_NONE);

  var code = 'Serial.read()';
  return code;
};
