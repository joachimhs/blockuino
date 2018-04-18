Blockly.Blocks['arduino_high_low'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.ARDUINO_HIGH, "HIGH"], [Blockly.Msg.ARDUINO_LOW, "LOW"]]), "NAME");
    this.setOutput(true);
    this.setColour(Blockly.Blocks.variables.HUE);
    this.setTooltip(Blockly.Msg.ARDUINO_HIGH_LOW_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['arduino_high_low'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = dropdown_name;
  return code;
};
