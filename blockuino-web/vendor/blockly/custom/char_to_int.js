Blockly.Blocks['char_to_int'] = {
  init: function() {
    this.appendValueInput("input")
      .setCheck(null)
      .appendField("konverter char til int");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(267);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Arduino['char_to_int'] = function(block) {
  var value_name = Blockly.Arduino.getValueForVariable(block, 'input');

  // TODO: Assemble JavaScript into code variable.
  var code = '(' + value_name + " - '0')";
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};
