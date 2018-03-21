Blockly.Blocks['arduino_bil_rotate_left'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.MOTOR_ROTATE_LEFT);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.motorHue.HUE);
    this.setTooltip(Blockly.Msg.MOTOR_ROTATE_LEFT_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['arduino_bil_rotate_left'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'mcRotateLeft();';
  return code;
};
