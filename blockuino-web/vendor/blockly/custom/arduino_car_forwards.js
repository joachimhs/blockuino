Blockly.Blocks['arduino_car_forwards'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.MOTOR_FORWARDS);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.motorHue.HUE);
    this.setTooltip(Blockly.Msg.MOTOR_FORWARDS_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['arduino_car_forwards'] = function(block) {
  // TODO: Assemble JavaScript into code variable.

  var code = 'mcForwards();';
  return code;
};
