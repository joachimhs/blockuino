Blockly.Blocks['arduino_pixel_strip_show'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ARDUINO_LED_STRIP_SHOW);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.ledPixelsHue.HUE);
    this.setTooltip(Blockly.Msg.ARDUINO_LED_STRIP_SHOW_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['arduino_pixel_strip_show'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'strip.show();';
  return code;
};
