Blockly.Blocks['arduino_car_setup'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.MOTOR_SETUP);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.motorHue.HUE);
    this.setTooltip(Blockly.Msg.MOTOR_SETUP_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['arduino_car_setup'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'pinMode(ena, OUTPUT);';
  code += 'pinMode(in1, OUTPUT);';
  code += 'pinMode(in2, OUTPUT);';
  code += 'pinMode(enb, OUTPUT);';
  code += 'pinMode(in3, OUTPUT);';
  code += 'pinMode(in4, OUTPUT);';
  return code;
};
