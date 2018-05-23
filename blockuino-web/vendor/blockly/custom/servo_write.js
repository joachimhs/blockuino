Blockly.Blocks['servo_write'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.SERVO_WRITE);
    this.appendValueInput("servo")
      .setCheck(null);
    this.appendValueInput("angle")
      .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.customFunction.HUE);
    this.setTooltip(Blockly.Msg.SERVO_WRITE_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};


Blockly.Arduino['servo_write'] = function(block) {
  var value_servo = Blockly.Arduino.getValueForVariable(block, 'servo', Blockly.Arduino.ORDER_ATOMIC);
  var value_angle = Blockly.Arduino.getValueForVariable(block, 'angle', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_servo + '.write(' + value_angle + ');';
  return code;
};
