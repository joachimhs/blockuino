Blockly.Blocks['arduino_pixel_strip_begin'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ARDUINO_LED_STRIP_BEGIN);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.ledPixelsHue.HUE);
    this.setTooltip(Blockly.Msg.ARDUINO_LED_STRIP_BEGIN_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['arduino_pixel_strip_begin'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'strip.begin();';
  return code;
};
