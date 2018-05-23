Blockly.Blocks['arduino_list_increment'] = {
  init: function() {
    this.appendValueInput("Value")
      .setCheck(null)
      .appendField(Blockly.Msg.INCREMENT_ELEMENT_BY_ONE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.FROM_LIST)
      .appendField(new Blockly.FieldVariable("item"), "VAR")
      .appendField(Blockly.Msg.WITH_ONE) ;
    this.setInputsInline(false);
    this.setColour(20);
    this.setTooltip("");
    this.setHelpUrl("");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
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

Blockly.Arduino['arduino_list_increment'] = function(block) {
  var value_name = Blockly.Arduino.getValueForVariable(block, "Value");
  var variable_name = Blockly.Arduino.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_name +'['+ value_name +']++';
  return code;
};
