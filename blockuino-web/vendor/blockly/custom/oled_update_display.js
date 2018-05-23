Blockly.Blocks['oled_update_display'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.OLED_UPDATE_DISPLAY);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.customFunction.HUE);
    this.setTooltip(Blockly.Msg.OLED_UPDATE_DISPLAY_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['oled_update_display'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'display.display();';
  return code;
};
