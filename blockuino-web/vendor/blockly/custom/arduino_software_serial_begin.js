Blockly.Blocks['arduino_software_serial_begin'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ARDUINO_SOFT_SERIAL_BEGIN)
      .appendField(Blockly.Msg.ARDUINO_SERIAL_BAUD)
      .appendField(new Blockly.FieldDropdown([["9600", "9600"], ["19200", "19200"], ["38400", "38400"], ["57600", "57600"], ["74880", "74880"], ["115200", "115200"]]), "BAUD");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(Blockly.Blocks.hardware.HUE);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['arduino_software_serial_begin'] = function(block) {
  var value_baud = block.getFieldValue('BAUD');

  var code = 'SoftSerial.begin(' + value_baud + ');';
  return code;
};
