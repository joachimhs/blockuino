Blockly.Blocks['arduino_map'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ARDUINO_MAP_DECLARE);
    this.appendValueInput("VAR")
      .appendField(Blockly.Msg.ARDUINO_MAP_VARIABLE);
    this.appendValueInput("min_from")
      .setCheck("Number")
      .appendField(Blockly.Msg.ARDUINO_MAP_MIN_FROM);
    this.appendValueInput("max_from")
      .setCheck("Number")
      .appendField(Blockly.Msg.ARDUINO_MAP_MAX_FROM);
    this.appendValueInput("min_to")
      .setCheck("Number")
      .appendField(Blockly.Msg.ARDUINO_MAP_MIN_TO);
    this.appendValueInput("max_to")
      .setCheck("Number")
      .appendField(Blockly.Msg.ARDUINO_MAP_MAX_TO);
    this.setInputsInline(false);
    this.setOutput(true);
    this.setColour(Blockly.Blocks.tools.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['arduino_map'] = function(block) {
  var value_var = Blockly.Arduino.getValueForVariable(block, 'VAR', Blockly.Arduino.ORDER_ATOMIC);
  var value_min_from = Blockly.Arduino.valueToCode(block, 'min_from', Blockly.Arduino.ORDER_ATOMIC);
  var value_max_from = Blockly.Arduino.valueToCode(block, 'max_from', Blockly.Arduino.ORDER_ATOMIC);
  var value_min_to = Blockly.Arduino.valueToCode(block, 'min_to', Blockly.Arduino.ORDER_ATOMIC);
  var value_max_to = Blockly.Arduino.valueToCode(block, 'max_to', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble Arduino into code variable.
  var code = 'map(' + value_var + ', ' + value_min_from + ', ' + value_max_from + ', ' + value_min_to + ', ' + value_max_to + ')';
  return code;
};
