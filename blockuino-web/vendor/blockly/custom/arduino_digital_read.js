Blockly.Blocks['arduino_digital_read'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ARDUINO_DIGITAL_READ_DEFINE);
    this.appendValueInput("PIN")
      .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true);
    this.setColour(Blockly.Blocks.hardware.HUE);
    this.setTooltip(Blockly.Msg.ARDUINO_DIGITAL_READ_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['arduino_digital_read'] = function(block) {
  var value_pin = Blockly.Arduino.getValueForVariable(block, 'PIN', Blockly.Arduino.ORDER_ATOMIC);

  console.log(block);

  // TODO: Assemble JavaScript into code variable.
  var code = 'digitalRead(' + value_pin + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};
