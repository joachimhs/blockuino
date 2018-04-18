Blockly.Blocks['arduino_tone_ms'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ARDUINO_TONE_MS_DECLARE);
    this.appendValueInput("PIN")
      .appendField(Blockly.Msg.ARDUINO_TONE_MS_PIN);
    this.appendValueInput("FREQUENCY")
      .appendField(Blockly.Msg.ARDUINO_TONE_MS_FREQ);
    this.appendValueInput("MS")
      .appendField(Blockly.Msg.ARDUINO_TONE_MS_IN);
    this.appendDummyInput()
      .appendField(Blockly.Msg.ARDUINO_TONE_MS_MS);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.hardware.HUE);
    this.setTooltip(Blockly.Msg.ARDUINO_TONE_MS_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }

};

Blockly.Arduino['arduino_tone_ms'] = function(block) {
  var value_pin = Blockly.Arduino.getValueForVariable(block, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var value_frequency = Blockly.Arduino.statementToCode(block, 'FREQUENCY', Blockly.Arduino.ORDER_ATOMIC);
  var value_ms = Blockly.Arduino.getValueForVariable(block, 'MS', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'tone(' + value_pin + ', ' + value_frequency + ', ' + value_ms + ');';
  return code;
};
