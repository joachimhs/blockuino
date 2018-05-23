Blockly.Blocks['arduino_blink'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ARDUINO_BLINK_PIN)
      .appendField(new Blockly.FieldDropdown([["0", "0"], ["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"]]), "Pin")
      .appendField(", ")
      .appendField(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"]]), "Antall")
      .appendField(Blockly.Msg.ARDUINO_BLINK_TIMES);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.tools.HUE);
    this.setTooltip(Blockly.Msg.ARDUINO_BLINK_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['arduino_blink'] = function (block) {
  var dropdown_pin = block.getFieldValue('Pin');
  var dropdown_antall = block.getFieldValue('Antall');
  // TODO: Assemble JavaScript into code vel:le.

  var ms = parseInt(1000 / dropdown_antall / 2);

  var code = 'digitalWrite(' + dropdown_pin + ', HIGH);';
  code += 'delay(' + ms + ');';
  code += 'digitalWrite(' + dropdown_pin + ', LOW);';
  code += 'delay(' + ms + ');';
  return code;
};
