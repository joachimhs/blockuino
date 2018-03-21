Blockly.Blocks['eeprom_write'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.EEPROM_WRITE);
    this.appendValueInput("address")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.EEPROM_WRITE_ADDRESS);
    this.appendValueInput("value")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.EEPROM_WRITE_VALUE);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.customFunction.HUE);
    this.setTooltip(Blockly.Msg.EEPROM_WRITE_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['eeprom_write'] = function(block) {
  var value_address = Blockly.Arduino.getValueForVariable(block, 'address', Blockly.Arduino.ORDER_ATOMIC);
  var value_value = Blockly.Arduino.getValueForVariable(block, 'value', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'EEPROM.write(' + value_address + ',' + value_value + ');';
  return code;
};
