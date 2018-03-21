Blockly.Blocks['arduino_raw_thermistor_to_temp_function'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ARDUINO_RAW_THERMISTOR_FUNCTION);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.customFunction.HUE);
    this.setColour(Blockly.Blocks.tools.HUE);
    this.setTooltip(Blockly.Msg.ARDUINO_RAW_THERMISTOR_FUNCTION_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['arduino_raw_thermistor_to_temp_function'] = function(block) {

  // TODO: Assemble JavaScript into code variable.
  var code = "// See http://en.wikipedia.org/wiki/Thermistor for explanation of formula\n\n";
  code += 'int thermistorTemp(int rawADC, boolean invertInput) {\n\n';
  code += "if (invertInput) { rawADC = 1024 - rawADC; }\n\n";
  code += "double temp = log(((10240000/rawADC) - 10000));";
  code += "temp = 1 / (0.001129148 + (0.000234125 * temp) + (0.0000000876741 * temp * temp * temp));";
  code += "temp = temp - 273.15;           // Convert Kelvin to Celcius\n\n";
  code += "return temp;";
  code += "}\n\n";
  return code;
};
