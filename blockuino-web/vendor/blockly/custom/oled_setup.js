Blockly.Blocks['oled_setup'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.OLED_SETUP);
    this.setColour(Blockly.Blocks.customFunction.HUE);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.OLED_SETUP_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['oled_setup'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '// initialize with the I2C addr 0x3C (for the 128x32)\n';
  code += 'display.begin(SSD1306_SWITCHCAPVCC, 0x3C);';
  code += 'display.setTextSize(1);';
  code += 'display.setTextColor(WHITE);';

  code += 'display.clearDisplay();';
  return code;
};
