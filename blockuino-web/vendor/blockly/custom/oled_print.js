Blockly.Blocks['oled_print'] = {
  init: function() {
    this.appendValueInput("text")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OLED_PRINT);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.customFunction.HUE);
    this.setTooltip(Blockly.Msg.OLED_PRINT_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['oled_print'] = function(block) {
  var value_text = Blockly.Arduino.getValueForVariable(block, 'text', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'display.print(' + value_text + ');';
  return code;
};
