Blockly.Blocks['arduino_analog_port'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ARDUINO_ANALOG_PIN)
      .appendField(new Blockly.FieldDropdown([["0", "0"], ["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"]]), "Pin")
    this.setOutput(true);
    this.setColour(Blockly.Blocks.variables.HUE);
    this.setTooltip(Blockly.Msg.ARDUINO_ANALOG_PIN_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['arduino_analog_port'] = function(block) {
  var dropdown_name = block.getFieldValue('Pin');
  // TODO: Assemble JavaScript into code variable.
  var code = dropdown_name;
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};
