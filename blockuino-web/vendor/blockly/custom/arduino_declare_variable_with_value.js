Blockly.Blocks['arduino_declare_variable_with_value'] = {
  init: function () {
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ARDUINO_DECLARE_VARIABLE_DEFINE)
      .appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLES_DEFAULT_NAME), 'VAR');
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ARDUINO_DECLARE_VARIABLE_TYPE)
      .appendField(new Blockly.FieldDropdown([["int", "int"], ["double", "double"], ["float", "float"], ["String", "String"], ["boolean", "boolean"]]), "type");
    this.appendValueInput("VALUE")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ARDUINO_DECLARE_VARIABLE_VALUE);
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.variables.HUE);
    this.setTooltip(Blockly.Msg.ARDUINO_DECLARE_VARIABLE_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  },

  getVars: function () {
    return [this.getFieldValue('VAR')];
  },
  /**
   * Notification that a variable is renaming.
   * If the name matches one of this block's variables, rename it.
   * @param {string} oldName Previous name of variable.
   * @param {string} newName Renamed variable.
   * @this Blockly.Block
   */
  renameVar: function (oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
      this.setFieldValue(newName, 'VAR');
    }
  }
};

Blockly.Arduino['arduino_declare_variable_with_value'] = function (block) {
  var variable_var_name = Blockly.Arduino.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var variable_value = Blockly.Arduino.getValueForVariable(block, "VALUE");
  var dropdown_type = block.getFieldValue('type');
  // TODO: Assemble JavaScript into code variable.
  var code = dropdown_type + ' ' + variable_var_name + " = " + variable_value + ";";
  return code;
};
