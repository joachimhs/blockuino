Blockly.Blocks['arduino_digital_port'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ARDUINO_DIGITAL_PIN)
      .appendField(new Blockly.FieldDropdown([["0", "0"], ["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"]]), "Pin")
    this.setOutput(true);
    this.setColour(Blockly.Blocks.variables.HUE);
    this.setTooltip(Blockly.Msg.ARDUINO_DIGITAL_PIN_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['arduino_digital_port'] = function(block) {
  var dropdown_name = block.getFieldValue('Pin');
  // TODO: Assemble JavaScript into code variable.
  var code = dropdown_name;
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};
