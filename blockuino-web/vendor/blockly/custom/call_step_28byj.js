Blockly.Blocks['call_step_28byj'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("step med")
      .appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLES_DEFAULT_NAME), 'VAR');
    this.appendDummyInput()
      .appendField("Retning")
      .appendField(new Blockly.FieldDropdown([["fremover", "true"], ["bakover", "false"]]), "DIRECTION");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setColour(Blockly.Blocks.structure.HUE);
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

Blockly.Arduino['call_step_28byj'] = function(block) {
  var dropdown_var = block.getFieldValue('VAR');
  var dropdown_direction = block.getFieldValue('DIRECTION');


  var code = dropdown_var + "_currStep = stepper(" + dropdown_var + "_in1, " + dropdown_var + "_in2, " + dropdown_var + "_in3, " + dropdown_var + "_in4, " + dropdown_var + "_currStep, "+ dropdown_direction + ");";
  return code;
};
