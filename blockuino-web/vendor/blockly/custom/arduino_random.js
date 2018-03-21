Blockly.Blocks['arduino_random'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ARDUINO_RANDOM);
    this.appendValueInput("from")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ARDUINO_RANDOM_FROM);
    this.appendValueInput("to")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ARDUINO_RANDOM_TO);
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(118);
    this.setTooltip(Blockly.Msg.ARDUINO_RANDOM_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['arduino_random'] = function(block) {
  var value_from = Blockly.Arduino.getValueForVariable(block, 'from', Blockly.Arduino.ORDER_ATOMIC);
  var value_to = Blockly.Arduino.getValueForVariable(block, 'to', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'random(' + value_from + ',' + value_to + ')';
  return code;
};
