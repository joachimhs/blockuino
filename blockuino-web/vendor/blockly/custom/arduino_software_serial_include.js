Blockly.Blocks['arduino_software_serial_include'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ARDUINO_SOFT_SERIAL);
    this.appendValueInput("RX")
      .appendField(Blockly.Msg.ARDUINO_SERIAL_RX_PIN);
    this.appendValueInput("TX")
      .appendField(Blockly.Msg.ARDUINO_SERIAL_TX_PIN);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(Blockly.Blocks.hardware.HUE);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['arduino_software_serial_include'] = function(block) {
  var value_rx = Blockly.Arduino.getValueForVariable(block, 'RX', Blockly.Arduino.ORDER_NONE);
  var value_tx = Blockly.Arduino.getValueForVariable(block, 'TX', Blockly.Arduino.ORDER_NONE);

  var code = '\n#include <SoftwareSerial.h>\n\n';
  code += 'SoftwareSerial SoftSerial(' + value_rx + ', ' + value_tx + '); // RX | TX\n\n';
  return code;
};
