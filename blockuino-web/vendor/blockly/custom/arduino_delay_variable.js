Blockly.Blocks['arduino_delay_variable'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ARDUINO_DELAY_DEFINE);
    this.appendValueInput("delay")
      .setCheck(null);
    this.appendDummyInput()
      .appendField(Blockly.Msg.ARDUINO_DELAY_MS);
    this.setInputsInline(true);
    this.setColour(56);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ARDUINO_DELAY_TOOLTIP);
    this.setHelpUrl('');
  }
};

Blockly.Arduino['arduino_delay_variable'] = function(block) {
  var value_delay = Blockly.Arduino.getValueForVariable(block, "delay");

  // TODO: Assemble JavaScript into code variable.
  var code = 'delay(' + value_delay + ');';
  return code;
};
