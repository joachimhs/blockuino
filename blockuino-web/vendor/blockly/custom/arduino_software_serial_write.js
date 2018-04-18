Blockly.Blocks['arduino_software_serial_write'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ARDUINO_SOFT_SERIAL_WRITE);
    this.appendValueInput("TEXT")
      .appendField(Blockly.Msg.ARDUINO_TEXT);
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([["write", "write"], ["print", "print"]]), "OP");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(Blockly.Blocks.hardware.HUE);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['arduino_software_serial_write'] = function(block) {
  var value_text = Blockly.Arduino.getValueForVariable(block, 'TEXT', Blockly.Arduino.ORDER_NONE);
  var value_op = block.getFieldValue('OP');

  var code = 'SoftSerial.' + value_op + '(' + value_text + ');';
  return code;
};
