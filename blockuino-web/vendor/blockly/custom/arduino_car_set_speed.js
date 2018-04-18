Blockly.Blocks['arduino_car_set_speed'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.MOTOR_SPEED);
    this.appendValueInput("speed")
      .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.motorHue.HUE);
    this.setTooltip(Blockly.Msg.MOTOR_SPEED_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['arduino_car_set_speed'] = function(block) {
  var value_speed = Blockly.Arduino.getValueForVariable(block, 'speed', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'mcSetSpeed(' + value_speed + ');';
  return code;
};
