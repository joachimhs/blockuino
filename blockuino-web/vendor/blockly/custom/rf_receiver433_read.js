Blockly.Blocks['rf_receiver433_read'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.RF_RECEIVER_433_READ);
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLES_DEFAULT_NAME), 'VAR');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.customFunction.HUE);
    this.setTooltip(Blockly.Msg.RF_RECEIVER_433_SETUP_TOOLTIP);
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



Blockly.Arduino['rf_receiver433_read'] = function(block) {
  var variable_var_name = Blockly.Arduino.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var variable_value = Blockly.Arduino.getValueForVariable(block, "VALUE");

  // TODO: Assemble JavaScript into code variable.
  code = '\tchar ' + variable_var_name + '[MAX_PACKAGE_SIZE];';
  code += "\tbyte " + variable_var_name + "_senderId = 0;";
  code += "\tbyte " + variable_var_name + "_packageId = 0;";
  code += "\tbyte len = receiver.recvPackage((byte *)" + variable_var_name + ", &" + variable_var_name + "_senderId, &" + variable_var_name + "_packageId);";
  return code;
};

