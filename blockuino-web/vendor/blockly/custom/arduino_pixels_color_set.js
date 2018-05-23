Blockly.Blocks['arduino_pixels_color_set'] = {
  init: function() {
    this.appendValueInput("setPixel")
      .setCheck(null)
      .appendField("Gi pixel");
    this.appendValueInput("setColor")
      .setCheck(null)
      .appendField("fargen");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.ledPixelsHue.HUE);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Arduino['arduino_pixels_color_set'] = function(block) {
  var value_setPixel = Blockly.Arduino.getValueForVariable(block, 'setPixel', Blockly.Arduino.ORDER_ATOMIC);
  var value_setColor = Blockly.Arduino.getValueForVariable(block, 'setColor', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'strip.setPixelColor(' + value_setPixel + ',' + value_setColor + ');';
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};
