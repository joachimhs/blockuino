Blockly.Blocks['arduino_car_analog_speed'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.MOTOR_SPEED);
    this.appendValueInput("LEFT_SIDE")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.MOTOR_LEFT);
    this.appendValueInput("RIGHT_SIDE")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.MOTOR_RIGHT);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.motorHue.HUE);
    this.setTooltip(Blockly.Msg.MOTOR_SPEED_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['arduino_car_analog_speed'] = function(block) {
  var value_left_side = Blockly.Arduino.getValueForVariable(block, 'LEFT_SIDE', Blockly.Arduino.ORDER_NONE);
  var value_right_side = Blockly.Arduino.getValueForVariable(block, 'RIGHT_SIDE', Blockly.Arduino.ORDER_NONE);
  // TODO: Assemble JavaScript into code variable.
  var code = 'mcAnalogSpeed(' + value_left_side + ',' + value_right_side + ');';
  return code;
};
