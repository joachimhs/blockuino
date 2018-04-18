Blockly.Blocks['eeprom_length'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.EEPROM_LENGTH);
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.customFunction.HUE);
    this.setTooltip(Blockly.Msg.EEPROM_LENGTH_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['eeprom_length'] = function(block) {
  var value_address = Blockly.Arduino.getValueForVariable(block, 'address', Blockly.Arduino.ORDER_ATOMIC);
  var value_value = Blockly.Arduino.getValueForVariable(block, 'value', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'EEPROM.length()';
  return code;
};
