Blockly.Arduino['controls_if'] = function (block) {
  // If/elseif/else condition.
  var n = 0;
  var argument = Blockly.Arduino.valueToCode(block, 'IF' + n, Blockly.Arduino.ORDER_NONE) || 'false';

  if (argument.length === 1) {
    argument = Blockly.Arduino.statementToCode(block, 'IF' + n, Blockly.Arduino.ORDER_NONE)
  }

  if (block.type.indexOf('arduino_') !== -1) {
    argument = Blockly.Arduino.statementToCode(block, "IF") || false;
  }

  var branch = Blockly.Arduino.statementToCode(block, 'DO' + n);
  var code = 'if (' + argument + ') {' + branch + '}';
  for (n = 1; n <= block.elseifCount_; n++) {
    argument = Blockly.Arduino.valueToCode(block, 'IF' + n, Blockly.Arduino.ORDER_NONE) || 'false';

    if (argument.length === 1) {
      argument = Blockly.Arduino.statementToCode(block, 'IF' + n, Blockly.Arduino.ORDER_NONE)
    }

    branch = Blockly.Arduino.statementToCode(block, 'DO' + n);
    code += ' else if (' + argument + ') {' + branch + '}';
  }
  if (block.elseCount_) {
    branch = Blockly.Arduino.statementToCode(block, 'ELSE');
    code += ' else {' + branch + '}';
  }
  return code + '\n';
};
