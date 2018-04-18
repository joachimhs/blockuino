Blockly.Blocks['arduino_pixels_color_rgb'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Farge: ");
    this.appendValueInput("Red")
      .setCheck(null)
      .appendField("Red: ");
    this.appendValueInput("Green")
      .setCheck(null)
      .appendField("Green: ");
    this.appendValueInput("Blue")
      .setCheck(null)
      .appendField("Blue: ");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.ledPixelsHue.HUE);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Arduino['arduino_pixels_color_rgb'] = function(block) {
  var value_red = Blockly.Arduino.getValueForVariable(block, 'Red', Blockly.Arduino.ORDER_ATOMIC);
  var value_green = Blockly.Arduino.getValueForVariable(block, 'Green', Blockly.Arduino.ORDER_ATOMIC);
  var value_blue = Blockly.Arduino.getValueForVariable(block, 'Blue', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'strip.Color(' + value_red + ', ' + value_green + ', ' + value_blue + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};
