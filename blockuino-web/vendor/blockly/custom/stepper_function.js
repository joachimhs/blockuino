Blockly.Blocks['stepper_function'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Definer Funksjon: stepper");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.structure.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['stepper_function'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'int stepper(int in1, int in2, int in3, int in4, int currStep, boolean forward) {;\n';
  code += 'digitalWrite(in1, currStep == 0);\n';
  code += 'digitalWrite(in2, currStep == 1);\n';
  code += 'digitalWrite(in3, currStep == 2);\n';
  code += 'digitalWrite(in4, currStep == 3);\n';
  code += '\n';
  code += 'if (forward) {';
  code += '    currStep++; \n';
  code += '} else {';
  code += '    currStep--;\n';
  code += '}\n';
  code += 'if (currStep > 3) {';
  code += '    currStep = 0;\n';
  code += '}\n';
  code += 'if (currStep < 0) {';
  code += '    currStep = 3;\n';
  code += '}\n';
  code += 'return currStep;\n';
  code += '}\n\n';
  return code;
};
