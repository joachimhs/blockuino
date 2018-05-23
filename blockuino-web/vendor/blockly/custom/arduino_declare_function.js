Blockly.Blocks['arduino_declare_function'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ARDUINO_DECLARE_FUNCTION_VALUE)
      .appendField(new Blockly.FieldVariable("function"), "FUNCTION");
    this.appendDummyInput()
      .appendField(Blockly.Msg.ARDUINO_DECLARE_FUNCTION_RETURNS)
      .appendField(new Blockly.FieldDropdown([["void", "void"], ["int", "int"], ["String", "String"], ["double", "double"], ["boolean", "boolean"]]), "TYPE");
    this.appendStatementInput("CODE");
    this.setColour(267);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ARDUINO_DECLARE_FUNCTION_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  },


  getVars: function () {
    return [this.getFieldValue('FUNCTION')];
  },
  /**
   * Notification that a variable is renaming.
   * If the name matches one of this block's variables, rename it.
   * @param {string} oldName Previous name of variable.
   * @param {string} newName Renamed variable.
   * @this Blockly.Block
   */
  renameVar: function (oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('FUNCTION'))) {
      this.setFieldValue(newName, 'FUNCTION');
    }
  }
};

Blockly.Arduino['arduino_declare_function'] = function(block) {
  var text_funktion = block.getFieldValue('FUNCTION');
  var dropdown_type = block.getFieldValue('TYPE');
  var statements_name = Blockly.Arduino.statementToCode(block, 'CODE');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n' + dropdown_type + " " + text_funktion + "() { " + statements_name + "}";
  return code;
};
