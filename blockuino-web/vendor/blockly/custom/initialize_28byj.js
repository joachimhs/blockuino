Blockly.Blocks['initialize_28byj'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Initialiser 28-BYJ-48/ULN2003")
      .appendField("med navn: ")
      .appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLES_DEFAULT_NAME), 'VAR');
    this.appendValueInput("IN1")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("IN1: ");
    this.appendValueInput("IN2")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("IN2: ");
    this.appendValueInput("IN3")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("IN3: ");
    this.appendValueInput("IN4")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("IN4: ");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.customFunction.HUE);
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

Blockly.Arduino['initialize_28byj'] = function(block) {
  var dropdown_var = block.getFieldValue('VAR');
  var value_in1 = Blockly.Arduino.getValueForVariable(block, 'IN1', Blockly.Arduino.ORDER_NONE);
  var value_in2 = Blockly.Arduino.getValueForVariable(block, 'IN2', Blockly.Arduino.ORDER_NONE);
  var value_in3 = Blockly.Arduino.getValueForVariable(block, 'IN3', Blockly.Arduino.ORDER_NONE);
  var value_in4 = Blockly.Arduino.getValueForVariable(block, 'IN4', Blockly.Arduino.ORDER_NONE);

  // TODO: Assemble JavaScript into code variable.
  var code = 'int ' + dropdown_var + "_in1 = " + value_in1 + ';\n';
  code += 'int ' + dropdown_var + "_in2 = " + value_in2 + ';\n';
  code += 'int ' + dropdown_var + "_in3 = " + value_in3 + ';\n';
  code += 'int ' + dropdown_var + "_in4 = " + value_in4 + ';\n';
  code += 'int ' + dropdown_var + "_currStep = 0;\n\n";
  return code;
};
