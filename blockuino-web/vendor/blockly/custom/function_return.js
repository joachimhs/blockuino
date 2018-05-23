Blockly.Blocks['function_return'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ARDUINO_FUNCTION_RETURN_LABEL);
    this.appendValueInput("retVal")
      .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(267);
    this.setTooltip(Blockly.Msg.ARDUINO_FUNCTION_RETURN_TOOLTIP);
    this.setHelpUrl('');
  }
};

Blockly.Arduino['function_return'] = function(block) {
  var value_retVal = Blockly.Arduino.getValueForVariable(block, "retVal");


  // TODO: Assemble JavaScript into code variable.
  var code = 'return ' + value_retVal + ';';
  return code;
};
