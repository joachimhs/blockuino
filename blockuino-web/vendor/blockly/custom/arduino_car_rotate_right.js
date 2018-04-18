Blockly.Blocks['arduino_car_rotate_right'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.MOTOR_ROTATE_RIGHT);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.motorHue.HUE);
    this.setTooltip(Blockly.Msg.MOTOR_ROTATE_RIGHT_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['arduino_car_rotate_right'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'mcRotateRight();';
  return code;
};
