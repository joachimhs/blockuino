Blockly.Blocks['variable_decrement'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Reduser Variabel med 1:")
      .appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLES_DEFAULT_NAME), 'VAR');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.variables.HUE);
    this.setTooltip('');
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


Blockly.Arduino['variable_decrement'] = function(block) {
  var dropdown_var = block.getFieldValue('VAR');
  // TODO: Assemble JavaScript into code variable.
  var code = dropdown_var + '--;';
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};
