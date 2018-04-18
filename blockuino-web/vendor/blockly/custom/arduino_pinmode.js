Blockly.Blocks['arduino_pinmode'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ARDUINO_PINMODE_DEFINE)
      .appendField(new Blockly.FieldDropdown([["0", "0"], ["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"]]), "Pin");
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

Blockly.Arduino['arduino_pinmode'] = function (block) {
  var dropdown_pin = block.getFieldValue('Pin');
  var dropdown_type = block.getFieldValue('Type');
  // TODO: Assemble JavaScript into code variable.
  var code = 'pinMode(' + dropdown_pin + ', ' + dropdown_type + ' );';
  return code;
};
