Blockly.Blocks['arduino_serial_print'] = {
  init: function() {
    this.appendValueInput("TEXT")
      .appendField(Blockly.Msg.ARDUINO_SERIAL_PRINT)
      .appendField(new Blockly.FieldDropdown([["print", "print"], ["write", "write"]]), "OP");
    this.appendDummyInput()
      .appendField(Blockly.Msg.ARDUINO_SERIAL_NEW_LINE)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.ARDUINO_SERIAL_YES, "YES"], [Blockly.Msg.ARDUINO_SERIAL_NO, "NO"]]), "NAME");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(Blockly.Blocks.hardware.HUE);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['arduino_serial_print'] = function(block) {
  var value_text = Blockly.Arduino.getValueForVariable(block, 'TEXT');
  var dropdown_name = block.getFieldValue('NAME');
  var value_op = block.getFieldValue('OP');
  // TODO: Assemble JavaScript into code variable.

  var printStatement = "print";
  if (dropdown_name === "YES") {
    printStatement = "println";
  }

  if (value_op === 'write') {
    printStatement = 'write';
  }

  var code = 'Serial.' + printStatement + "(" + value_text.replace(/'/g, '"') + ");";
  return code;
};

Blockly.Msg.ARDUINO_SERIAL_AVAIL = "Serial klar";
Blockly.Msg.ARDUINO_SERIAL_READ = "Les fra Serial";
