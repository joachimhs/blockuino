Blockly.Blocks['servo_include'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.SERVO_INCLUDE);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.customFunction.HUE);
    this.setTooltip(Blockly.Msg.SERVO_INCLUDE_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['servo_include'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '#include <Servo.h>\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};
