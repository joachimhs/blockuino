Blockly.Blocks['arduino_repeat'] = {
  init: function() {
    this.setColour(Blockly.Blocks.loops.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.ARDUINO_REPEAT_DECLARE);
    this.appendValueInput("TO")
      .setCheck(null);
    this.appendDummyInput()
      .appendField(Blockly.Msg.ARDUINO_REPEAT_TIMES);
    this.appendStatementInput("STATEMENT");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.ARDUINO_REPEAT_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['arduino_repeat'] = function(block) {
  var value_to = Blockly.Arduino.getValueForVariable(block, 'TO', Blockly.Arduino.ORDER_ATOMIC);

  var statements_statement = Blockly.Arduino.statementToCode(block, 'STATEMENT');
  // TODO: Assemble JavaScript into code variable.
  var code = 'for (int index = 0; index < ' + value_to + '; index++) { ' + statements_statement + '}';
  return code;
};
