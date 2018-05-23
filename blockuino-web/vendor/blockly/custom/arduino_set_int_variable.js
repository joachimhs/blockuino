Blockly.Blocks['arduino_set_int_variable'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Sett variabel: ")
      .appendField(new Blockly.FieldVariable("item"), "VAR")
      .appendField("til: ")
      .appendField(new Blockly.FieldTextInput(""), "var_value");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['arduino_set_int_variable'] = function (block) {
  var variable_var_name = Blockly.Arduino.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var text_var_value = block.getFieldValue('var_value');
  // TODO: Assemble JavaScript into code variable.
  var code = variable_var_name + " = " + text_var_value + ";";
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};
