Blockly.Blocks['arduino_raw_thermistor_to_temp'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ARDUINO_RAW_THERMISTOR_TEMP);
    this.appendValueInput("analogPin")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ARDUINO_RAW_THERMISTOR_TEMP_VALUE);
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ARDUINO_RAW_THERMISTOR_TEMP_INVERT)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.ARDUINO_SERIAL_NO, "false"], [Blockly.Msg.ARDUINO_SERIAL_YES, "true"]]), "invert");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(267);
    this.setColour(Blockly.Blocks.tools.HUE);
    this.setTooltip(Blockly.Msg.ARDUINO_RAW_THERMISTOR_TEMP_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['arduino_raw_thermistor_to_temp'] = function(block) {
  var value_analog_pin = Blockly.Arduino.getValueForVariable(block, 'analogPin', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_name = block.getFieldValue('invert');

  // TODO: Assemble JavaScript into code variable.
  var code = 'thermistorTemp(' + value_analog_pin + "," + dropdown_name + ')';
  return code;
};
