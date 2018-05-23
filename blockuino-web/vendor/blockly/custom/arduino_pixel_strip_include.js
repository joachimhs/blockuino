Blockly.Blocks['arduino_pixel_strip_include'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ARDUINO_LED_STRIP_INCLUDE);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.ledPixelsHue.HUE);
    this.setTooltip(Blockly.Msg.ARDUINO_LED_STRIP_INCLUDE_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['arduino_pixel_strip_include'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '#include <Adafruit_NeoPixel.h>\n\n';
  return code;
};
