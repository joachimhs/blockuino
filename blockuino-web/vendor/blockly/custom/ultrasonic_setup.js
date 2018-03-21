Blockly.Blocks['ultrasonic_setup'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ULTRASONIC_SETUP);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.customFunction.HUE);
    this.setTooltip(Blockly.Msg.ULTRASONIC_SETUP_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['ultrasonic_setup'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'pinMode(trigPin, OUTPUT);';
  code += 'pinMode(echoPin, INPUT);';
  return code;
};
