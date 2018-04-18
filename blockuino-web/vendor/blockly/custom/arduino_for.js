Blockly.Blocks['arduino_for'] = {
  init: function() {
    this.setColour(Blockly.Blocks.loops.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.ARDUINO_FOR_DECLARE);
    this.appendValueInput("FROM")
      .setCheck(null);
    this.appendValueInput("TO")
      .appendField(Blockly.Msg.ARDUINO_TO);
    this.appendDummyInput()
      .appendField(Blockly.Msg.ARDUINO_FOR_VARIABLE_NAME)
      .appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLES_DEFAULT_NAME), 'VAR');
    this.appendStatementInput("STATEMENT");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
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

Blockly.Arduino['arduino_for'] = function(block) {
  var value_from = Blockly.Arduino.getValueForVariable(block, 'FROM', Blockly.Arduino.ORDER_NONE);
  var value_to = Blockly.Arduino.getValueForVariable(block, 'TO', Blockly.Arduino.ORDER_NONE);
  var dropdown_type = block.getFieldValue('VAR');

  var isNumbers = true;
  var parsedValueTo = parseInt(value_to);
  if (!parsedValueTo) {
    isNumbers = false;
  }

  var incrementSymbol = "++";
  var compareSymbol = "<";
  if (isNumbers && parseInt(value_to) < parseInt(value_from)) {
    incrementSymbol = "--";
    compareSymbol = ">";
  } else if (!isNumbers) {
    compareSymbol = "<=";
  }

  var statements_statement = Blockly.Arduino.statementToCode(block, 'STATEMENT');
  // TODO: Assemble JavaScript into code variable.
  var code = 'for (int ' + dropdown_type + ' = ' + value_from + "; " + dropdown_type + ' ' + compareSymbol + ' ' + value_to + '; ' + dropdown_type + incrementSymbol + ') { ' + statements_statement + '}';
  return code;
};
