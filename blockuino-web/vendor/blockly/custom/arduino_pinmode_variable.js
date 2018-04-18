Blockly.Blocks['arduino_pinmode_variable'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ARDUINO_PINMODE_DEFINE);
    this.appendValueInput("PIN")
      .setCheck(null);
    this.appendDummyInput()
      .appendField(Blockly.Msg.ARDUINO_PINMODE_AS)
      .appendField(new Blockly.FieldDropdown([["INPUT", "INPUT"], ["OUTPUT", "OUTPUT"], ["INPUT_PULLUP", "INPUT_PULLUP"]]), "Type");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.hardware.HUE);
    this.setTooltip(Blockly.Msg.ARDUINO_PINMODE_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['arduino_pinmode_variable'] = function (block) {
  var value_pin = Blockly.Arduino.getValueForVariable(block, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_type = block.getFieldValue('Type');
  // TODO: Assemble JavaScript into code variable.
  var code = 'pinMode(' + value_pin + ', ' + dropdown_type + ' );';
  return code;
};
