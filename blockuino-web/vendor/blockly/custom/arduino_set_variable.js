Blockly.Blocks['arduino_set_variable'] = {
  init: function () {
    this.appendValueInput("VAR")
      .setCheck("String")
      .appendField(Blockly.Msg.ARDUINO_SET_VARIABLE_DEFINE );
    this.appendValueInput("variable_value")
      .setCheck(null)
      .appendField(Blockly.Msg.ARDUINO_SET_VARIABLE_VALUE);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.variables.HUE);
    this.setTooltip(Blockly.Msg.ARDUINO_SET_VARIABLE_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  },

  getVars: function () {
    return [this.getFieldValue('VAR')];
  }
};

Blockly.Arduino['arduino_set_variable'] = function (block) {
  var value_variable_name = Blockly.Arduino.statementToCode(block, 'VAR');

  var value_variable_value = Blockly.Arduino.getValueForVariable(block, 'variable_value');
  // TODO: Assemble JavaScript into code variable.
  var code = value_variable_name + ' =  ' + value_variable_value + ";";
  return code;
};
