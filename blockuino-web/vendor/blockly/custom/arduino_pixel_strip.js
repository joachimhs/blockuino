Blockly.Blocks['arduino_pixel_strip'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ARDUINO_LED_STRIP_DECLARE);
    this.appendValueInput("NUM_PIXELS")
      .appendField(Blockly.Msg.ARDUINO_LED_STRIP_NUM_PIXELS);
    this.appendValueInput("PIN")
      .appendField(Blockly.Msg.ARDUINO_LED_STRIP_PIN);
    this.appendDummyInput()
      .appendField(Blockly.Msg.ARDUINO_LED_STRIP_TYPE)
      .appendField(new Blockly.FieldDropdown([["GRB 800 KHz", "NEO_GRB+NEO_KHZ800"], ["RGB 800 KHz", "NEO_RGB+NEO_KHZ800"], ["GRB 400 KHz", "NEO_GRB+NEO_KHZ400"], ["RGB 400 KHz", "NEO_RGB+NEO_KHZ400"]]), "TYPE");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.ledPixelsHue.HUE);
    this.setTooltip(Blockly.Msg.ARDUINO_LED_STRIP_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['arduino_pixel_strip'] = function(block) {
  var value_num_pixels = Blockly.Arduino.getValueForVariable(block, 'NUM_PIXELS', Blockly.Arduino.ORDER_ATOMIC);
  var value_pin = Blockly.Arduino.getValueForVariable(block, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_type = block.getFieldValue('TYPE');
  // TODO: Assemble JavaScript into code variable.
  var code = 'Adafruit_NeoPixel strip = Adafruit_NeoPixel(' + value_num_pixels + ', ' + value_pin + ', ' + dropdown_type + ');';

  // Adafruit_NeoPixel strip = Adafruit_NeoPixel(10, PIN, NEO_GRB + NEO_KHZ800);
  return code;
};
