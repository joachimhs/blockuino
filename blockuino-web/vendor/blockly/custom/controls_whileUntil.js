Blockly.Arduino['controls_whileUntil'] = function(block) {
  // Do while/until loop.
  var until = block.getFieldValue('MODE') == 'UNTIL';
  var argument0 = Blockly.Arduino.valueToCode(block, 'BOOL', until ? Blockly.Arduino.ORDER_LOGICAL_NOT :  Blockly.Arduino.ORDER_NONE) || 'false';
  var value_analog_pin = Blockly.Arduino.getValueForVariable(block, 'BOOL', Blockly.Arduino.ORDER_ATOMIC);


  var branch = Blockly.Arduino.statementToCode(block, 'DO');
  branch = Blockly.Arduino.addLoopTrap(branch, block.id);
  if (until) {
    argument0 = '!' + argument0;
  }
  return 'while (' + value_analog_pin + ') {\n' + branch + '}\n';
};
