Blockly.Blocks['eeprom_include'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.EEPROM_INCLUDE);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.customFunction.HUE);
    this.setTooltip(Blockly.Msg.EEPROM_INCLUDE_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['eeprom_include'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '#include <EEPROM.h>\n';
  return code;
};

