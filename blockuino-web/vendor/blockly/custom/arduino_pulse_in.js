Blockly.Blocks['arduino_pulse_in'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Puls Inn: ");
    this.appendValueInput("PIN")
      .appendField(Blockly.Msg.ARDUINO_TONE_MS_PIN);
    this.appendValueInput("VALUE")
      .appendField("Verdi: ");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setColour(Blockly.Blocks.tools.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['arduino_pulse_in'] = function(block) {
  var value_pin = Blockly.Arduino.getValueForVariable(block, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var value_value = Blockly.Arduino.getValueForVariable(block, 'VALUE', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'pulseIn(' + value_pin + ', ' + value_value + ')';
  return code;
};
