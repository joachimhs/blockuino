Blockly.Blocks['array_element'] = {
  init: function() {
    this.appendValueInput("index")
      .setCheck(null)
      .appendField("Helt element ");
    this.appendValueInput("list")
      .setCheck(null)
      .appendField("Fra liste");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Arduino['array_element'] = function(block) {
  var value_index = Blockly.Arduino.valueToCode(block, 'index', Blockly.Arduino.ORDER_ATOMIC);
  var value_list = Blockly.Arduino.getValueForVariable(block, 'list', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_list + '[' + value_index + ']';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};

