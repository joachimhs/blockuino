Blockly.Blocks['arduino_pixel_strip_color'] = {
  init: function() {
    this.appendValueInput("PIXEL")
      .appendField(Blockly.Msg.ARDUINO_LED_STRIP_SHOW);
    this.appendValueInput("RED")
      .appendField(Blockly.Msg.ARDUINO_LED_STRIP_COLOR_RED);
    this.appendValueInput("GREEN")
      .appendField(Blockly.Msg.ARDUINO_LED_STRIP_COLOR_GREEN);
    this.appendValueInput("BLUE")
      .appendField(Blockly.Msg.ARDUINO_LED_STRIP_COLOR_BLUE);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null)
    this.setColour(Blockly.Blocks.ledPixelsHue.HUE);;
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ARDUINO_LED_STRIP_COLOR_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};


Blockly.Arduino['arduino_pixel_strip_color'] = function(block) {
  var value_pixel = Blockly.Arduino.getValueForVariable(block, 'PIXEL', Blockly.Arduino.ORDER_ATOMIC);
  var value_red = Blockly.Arduino.getValueForVariable(block, 'RED', Blockly.Arduino.ORDER_ATOMIC);
  var value_green = Blockly.Arduino.getValueForVariable(block, 'GREEN', Blockly.Arduino.ORDER_ATOMIC);
  var value_blue = Blockly.Arduino.getValueForVariable(block, 'BLUE', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'strip.setPixelColor(' + value_pixel + ', strip.Color(' + value_red + ', ' + value_green + ', ' + value_blue + '));';

  return code;
};
