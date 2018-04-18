Blockly.Blocks['servo_attach'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.SERVO_ATTACH)
      .appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLES_DEFAULT_NAME), 'VAR');
    this.appendValueInput("VALUE")
      .appendField(Blockly.Msg.SERVO_ATTACH_TO_PIN);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.customFunction.HUE);
    this.setTooltip(Blockly.Msg.SERVO_ATTACH_TOOLTIP);
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

Blockly.Arduino['servo_attach'] = function (block) {
  var variable_var_name = Blockly.Arduino.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var variable_value = Blockly.Arduino.getValueForVariable(block, "VALUE");

  // TODO: Assemble JavaScript into code variable.
  var code = variable_var_name + '.attach(' + variable_value + ");";
  return code;
};
