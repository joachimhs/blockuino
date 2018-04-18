Blockly.Blocks['arduino_analog_read'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ARDUINO_ANALOG_READ_DEFINE);
    this.appendValueInput("PIN")
      .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true);
    this.setColour(Blockly.Blocks.hardware.HUE);
    this.setTooltip(Blockly.Msg.ARDUINO_ANALOG_READ_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['arduino_analog_read'] = function(block) {
  var value_pin = Blockly.Arduino.getValueForVariable(block, 'PIN', Blockly.Arduino.ORDER_ATOMIC);

  console.log(block);

  // TODO: Assemble JavaScript into code variable.
  var code = 'analogRead(' + value_pin + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};
