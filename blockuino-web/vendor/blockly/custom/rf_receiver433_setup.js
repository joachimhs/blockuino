Blockly.Blocks['rf_receiver433_setup'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.RF_RECEIVER_433_SETUP);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.customFunction.HUE);
    this.setTooltip(Blockly.Msg.RF_RECEIVER_433_SETUP_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['rf_receiver433_setup'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '\nreceiver.begin();';
  return code;
};
