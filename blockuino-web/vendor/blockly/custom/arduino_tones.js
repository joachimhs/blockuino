Blockly.Blocks['arduino_tones'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Tone: ")
      .appendField(new Blockly.FieldDropdown([["C", "C"], ["D", "D"], ["E", "E"], ["F", "F"], ["G", "G"], ["A", "A"], ["H", "H"]]), "FREQ");
    this.setOutput(true);
    this.setColour(Blockly.Blocks.variables.HUE);
    this.setTooltip(Blockly.Msg.ARDUINO_HIGH_LOW_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['arduino_tones'] = function(block) {
  var dropdown_name = block.getFieldValue('FREQ');

  if (dropdown_name == "C") {
    code = "523.25";
  } else if (dropdown_name == "D") {
    code = "587.33";
  } else if (dropdown_name == "E") {
    code = "659.25";
  } else if (dropdown_name == "F") {
    code = "698.46";
  } else if (dropdown_name == "G") {
    code = "783.99";
  } else if (dropdown_name == "A") {
    code = "880";
  } else if (dropdown_name == "H") {
    code = "987.76";
  }

  return code;
};
