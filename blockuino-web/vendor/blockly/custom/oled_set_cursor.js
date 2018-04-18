Blockly.Blocks['oled_set_cursor'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.OLED_SET_CURSOR);
    this.appendValueInput("x")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("X:");
    this.appendValueInput("y")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Y:");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.customFunction.HUE);
    this.setTooltip(Blockly.Msg.OLED_SET_CURSOR_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['oled_set_cursor'] = function(block) {
  var value_x = Blockly.Arduino.getValueForVariable(block, 'x', Blockly.Arduino.ORDER_ATOMIC);
  var value_y = Blockly.Arduino.getValueForVariable(block, 'y', Blockly.Arduino.ORDER_ATOMIC);

  // TODO: Assemble JavaScript into code variable.
  var code = 'display.setCursor(' + value_x + ', ' + value_y + ');';
  return code;
};
