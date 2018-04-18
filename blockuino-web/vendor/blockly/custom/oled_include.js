Blockly.Blocks['oled_include'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.OLED_INCLUDE);
    this.setColour(Blockly.Blocks.customFunction.HUE);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.OLED_INCLUDE_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['oled_include'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '#include <SPI.h>\n\n';
  code += '#include <Wire.h>\n\n';
  code += '#include <Adafruit_GFX.h>\n\n';
  code += '#include <Adafruit_SSD1306.h>\n\n';

  code += '#define OLED_RESET 4\n\n';
  code += 'Adafruit_SSD1306 display(OLED_RESET);\n';
  return code;
};
