Blockly.Blocks['dht11_read_humidity'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.DHT_HUMIDITY);
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.customFunction.HUE);
    this.setTooltip(Blockly.Msg.DHT_HUMIDITY_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['dht11_read_humidity'] = function(block) {
  var value_pin= Blockly.Arduino.getValueForVariable(block, 'dhtPin', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'dht.readHumidity()';
  return code;
};
