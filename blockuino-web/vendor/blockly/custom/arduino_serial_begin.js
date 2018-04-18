Blockly.Blocks['arduino_serial_begin'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ARDUINO_SERIAL_BEGIN);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(Blockly.Blocks.hardware.HUE);
    this.setHelpUrl('http://www.example.com/');
  }
};

// TODO: Assemble JavaScript into code variable.
Blockly.Arduino['arduino_serial_begin'] = function(block) {
  var code = 'Serial.begin(9600);';
  return code;
};
