Blockly.Msg.ARDUINO_VARIABLE_CHAR = "char: ";

Blockly.Blocks['arduino_variable_char'] = {
  init: function () {
    this.appendDummyInput("labelInput")
      .appendField(Blockly.Msg.ARDUINO_VARIABLE_CHAR);
    this.appendDummyInput()
      .appendField(new Blockly.FieldTextInput(""), "variable_value");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.variables.HUE);
    this.setTooltip(Blockly.Msg.ARDUINO_VARIABLE_VALUE_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['arduino_variable_char'] = function (block) {
  var text_variable_value = block.getFieldValue('variable_value');
  var code = "'" + text_variable_value + "'";

  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};
