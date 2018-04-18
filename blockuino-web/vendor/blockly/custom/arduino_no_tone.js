Blockly.Blocks['arduino_no_tone'] = {
  init: function() {
    this.appendValueInput("PIN")
      .setCheck(null)
      .appendField(Blockly.Msg.ARDUINO_NO_TONE_MS_DECLARE)
      .appendField(Blockly.Msg.ARDUINO_TONE_MS_PIN);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ARDUINO_NO_TONE_TOOLTIP);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Arduino['arduino_no_tone'] = function(block) {
  var value_pin = Blockly.Arduino.getValueForVariable(block, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'noTone(' + value_pin + ');';
  return code;
};
