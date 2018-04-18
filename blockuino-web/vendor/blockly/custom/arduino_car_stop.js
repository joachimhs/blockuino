Blockly.Blocks['arduino_car_stop'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.MOTOR_STOP);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.motorHue.HUE);
    this.setTooltip(Blockly.Msg.MOTOR_STOP_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['arduino_car_stop'] = function(block) {
  // TODO: Assemble JavaScript into code variable.

  var code = 'mcStop();';
  return code;
};
