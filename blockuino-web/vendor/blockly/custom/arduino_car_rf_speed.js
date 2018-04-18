Blockly.Blocks['arduino_car_rf_speed'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.MOTOR_RF_SPEED);
    this.appendValueInput("X_DIR")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.JOYSTICK_X);
    this.appendValueInput("Y_DIR")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.JOYSTICK_Y);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.motorHue.HUE);
    this.setTooltip(Blockly.Msg.MOTOR_SPEED_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['arduino_car_rf_speed'] = function(block) {
  var value_x_dir = Blockly.Arduino.getValueForVariable(block, 'X_DIR');
  var value_y_dir = Blockly.Arduino.getValueForVariable(block, 'Y_DIR');
  // TODO: Assemble JavaScript into code variable.
  var code = 'mcRfSpeed(' + value_x_dir + ',' + value_y_dir + ');';
  return code;
};
