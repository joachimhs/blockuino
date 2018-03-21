Blockly.Blocks['arduino_tone'] = {
  init: function() {
    this.appendValueInput("PIN")
      .setCheck(null)
      .appendField(Blockly.Msg.ARDUINO_TONE_MS_DECLARE)
      .appendField(Blockly.Msg.ARDUINO_TONE_MS_PIN);
    this.appendValueInput("FREQUENCY")
      .setCheck(null)
      .appendField(Blockly.Msg.ARDUINO_TONE_MS_FREQ);
    this.setInputsInline(true);
    this.setColour(230);
    this.setTooltip(Blockly.Msg.ARDUINO_TONE_TOOLTIP);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setHelpUrl('');
  }
};

Blockly.Arduino['arduino_tone'] = function(block) {
  var value_pin = Blockly.Arduino.getValueForVariable(block, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var value_frequency = Blockly.Arduino.statementToCode(block, 'FREQUENCY', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'tone(' + value_pin + ', ' + value_frequency + ');';
  return code;
};
