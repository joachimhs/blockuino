Blockly.Blocks['arduino_car_backwards'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.MOTOR_BACKWARDS);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.motorHue.HUE);
    this.setTooltip(Blockly.Msg.MOTOR_BACKARDS_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['arduino_car_backwards'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'mcBackwards();';
  return code;
};
