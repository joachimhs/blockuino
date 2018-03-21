Blockly.Blocks['arduino_delay'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ARDUINO_DELAY_DEFINE)
      .appendField(new Blockly.FieldTextInput("500"), "delay")
      .appendField(Blockly.Msg.ARDUINO_DELAY_MS);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(56);
    this.setTooltip(Blockly.Msg.ARDUINO_DELAY_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['arduino_delay'] = function (block) {
  var value_delay = block.getFieldValue('delay');
  // TODO: Assemble JavaScript into code variable.
  var code = 'delay(' + value_delay + ');';
  return code;
};
