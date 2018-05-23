Blockly.Blocks['arduino_variable_value'] = {
  init: function () {
    this.appendDummyInput("labelInput")
      .appendField(Blockly.Msg.ARDUINO_VARIABLE_VALUE);
    this.appendDummyInput()
      .appendField(new Blockly.FieldTextInput(""), "variable_value");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.variables.HUE);
    this.setTooltip(Blockly.Msg.ARDUINO_VARIABLE_VALUE_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  },

  onchange: function(ev) {
    var labelInput = this.getInput("labelInput");
    var variableValue = this.getFieldValue('variable_value');

    console.log('variableValue: ');
    console.log(variableValue);

    if (!variableValue) {
      labelInput.setVisible(true);
    } else {
      labelInput.setVisible(false);
    }

    labelInput.sourceBlock_.render();
  }
};

Blockly.Arduino['arduino_variable_value'] = function (block) {
  var text_variable_value = block.getFieldValue('variable_value');

  console.log(typeof text_variable_value);

  // TODO: Assemble JavaScript into code variable.
  var code = text_variable_value;

  var numberRegex = /^-?\d*\.?\d*$/;

  if (text_variable_value.length == 0) {
    code = '""';
  } else if (text_variable_value.match(numberRegex)) {
    code = parseFloat(text_variable_value);
  } else if (text_variable_value.toLowerCase() === 'true') {
    code = true;
  } else if (text_variable_value.toLowerCase() === 'false') {
    code = false;
  } else {
    code = '"' + text_variable_value + '"';
  }

  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};
