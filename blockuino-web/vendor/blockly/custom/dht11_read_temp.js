Blockly.Blocks['dht11_read_temp'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.DHT_TEMP);
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.customFunction.HUE);
    this.setTooltip(Blockly.Msg.DHT_TEMP_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['dht11_read_temp'] = function(block) {
  var value_pin= Blockly.Arduino.getValueForVariable(block, 'dhtPin', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'dht.readTemperature()';
  return code;
};
