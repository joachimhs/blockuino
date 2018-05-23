Blockly.Blocks['ultrasonic_distance'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ULTRASONIC_DISTANCE);
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.customFunction.HUE);
    this.setTooltip(Blockly.Msg.ULTRASONIC_DISTANCE_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['ultrasonic_distance'] = function(block) {
  var code = 'ultrasonicDistance()';
  return code;
};
