Blockly.Blocks['extract_from_array'] = {
  init: function() {
    this.appendValueInput("number")
      .setCheck(null)
      .appendField("hent element nummer");
    this.appendDummyInput()
      .appendField("fra liste");
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLES_DEFAULT_NAME), 'VAR');
    this.setOutput(true, null);
    this.setInputsInline(true);
    this.setColour(Blockly.Blocks.variables.HUE);
    this.setTooltip('');
    this.setHelpUrl('');
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


Blockly.Arduino['extract_from_array'] = function(block) {
  var value_name = Blockly.Arduino.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var value_number = Blockly.Arduino.getValueForVariable(block, "number");

  // TODO: Assemble JavaScript into code variable.
  var code = value_name + "[" + value_number + "]";
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};
