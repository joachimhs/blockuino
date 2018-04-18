Blockly.Blocks['dht11_setup'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.DHT_SETUP);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.customFunction.HUE);
    this.setTooltip(Blockly.Msg.DHT_SETUP_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['dht11_setup'] = function(block) {
  var value_pin= Blockly.Arduino.getValueForVariable(block, 'dhtPin', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'dht.begin();';
  return code;
};
