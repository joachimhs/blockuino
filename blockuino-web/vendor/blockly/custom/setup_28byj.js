Blockly.Blocks['setup_28byj'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Setup Stepper:")
      .appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLES_DEFAULT_NAME), 'VAR');
    this.setTooltip('');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.customFunction.HUE);
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

Blockly.Arduino['setup_28byj'] = function(block) {
  var dropdown_var = block.getFieldValue('VAR');

  // TODO: Assemble JavaScript into code variable.
  var code = 'pinMode(' + dropdown_var + '_in1, OUTPUT);\n';
  code += 'pinMode(' + dropdown_var + '_in2, OUTPUT);\n';
  code += 'pinMode(' + dropdown_var + '_in3, OUTPUT);\n';
  code += 'pinMode(' + dropdown_var + '_in4, OUTPUT);\n\n';
  return code;
};
