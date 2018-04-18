Blockly.Blocks['eeprom_read'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.EEPROM_READ);
    this.appendValueInput("address")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.EEPROM_READ_ADDRESS);
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.customFunction.HUE);
    this.setTooltip(Blockly.Msg.EEPROM_READ_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['eeprom_read'] = function(block) {
  var value_address = Blockly.Arduino.getValueForVariable(block, 'address', Blockly.Arduino.ORDER_ATOMIC);
  var value_value = Blockly.Arduino.getValueForVariable(block, 'value', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'EEPROM.read(' + value_address + ')';
  return code;
};
