Blockly.Blocks.logic.HUE = 59;
Blockly.Blocks.loops.HUE = 59;
Blockly.Blocks.math.HUE = 118;
Blockly.Blocks.variables = {
  HUE: 10
};
Blockly.Blocks.hardware = {
  HUE: 230
};
Blockly.Blocks.structure = {
  HUE: 320
};

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
    this.setColour(Blockly.Blocks.hardware.HUE);
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

Blockly.Blocks['arduino_pinmode_variable'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ARDUINO_PINMODE_DEFINE);
    this.appendValueInput("PIN")
      .setCheck(null);
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

Blockly.Arduino['arduino_pinmode_variable'] = function (block) {
  var value_pin = Blockly.Arduino.getValueForVariable(block, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_type = block.getFieldValue('Type');
  // TODO: Assemble JavaScript into code variable.
  var code = 'pinMode(' + value_pin + ', ' + dropdown_type + ' );';
  return code;
};

Blockly.Blocks['arduino_digitalWrite'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ARDUINO_DIGITAL_WRITE_DEFINE)
      .appendField(new Blockly.FieldDropdown([["0", "0"], ["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"]]), "Pin");
    this.appendDummyInput()
      .appendField(Blockly.Msg.ARDUINO_TO)
      .appendField(new Blockly.FieldDropdown([["HIGH", "HIGH"], ["LOW", "LOW"]]), "type");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.hardware.HUE);
    this.setTooltip(Blockly.Msg.ARDUINO_DIGITAL_WRITE_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['arduino_digitalWrite'] = function (block) {
  var dropdown_pin = block.getFieldValue('Pin');
  var dropdown_type = block.getFieldValue('type');
  // TODO: Assemble JavaScript into code variable.
  var code = 'digitalWrite(' + dropdown_pin + ', ' + dropdown_type + ' );';
  return code;
};

Blockly.Blocks['arduino_digital_write_variable'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ARDUINO_DIGITAL_WRITE_DEFINE);
    this.appendValueInput("PIN")
      .setCheck(null);
    this.appendDummyInput()
      .appendField(Blockly.Msg.ARDUINO_TO);
    this.appendValueInput("PINTYPE");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.hardware.HUE);
    this.setTooltip(Blockly.Msg.ARDUINO_DIGITAL_WRITE_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['arduino_digital_write_variable'] = function(block) {
  var value_pin = Blockly.Arduino.getValueForVariable(block, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var value_pintype = Blockly.Arduino.getValueForVariable(block, 'PINTYPE', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'digitalWrite(' + value_pin + ', ' + value_pintype + ");";
  return code;
};

Blockly.Blocks['arduino_digital_read'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ARDUINO_DIGITAL_READ_DEFINE);
    this.appendValueInput("PIN")
      .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true);
    this.setColour(Blockly.Blocks.hardware.HUE);
    this.setTooltip(Blockly.Msg.ARDUINO_DIGITAL_READ_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['arduino_digital_read'] = function(block) {
  var value_pin = Blockly.Arduino.getValueForVariable(block, 'PIN', Blockly.Arduino.ORDER_ATOMIC);

  console.log(block);

  // TODO: Assemble JavaScript into code variable.
  var code = 'digitalRead(' + value_pin + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Blocks['arduino_analog_read'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ARDUINO_ANALOG_READ_DEFINE);
    this.appendValueInput("PIN")
      .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true);
    this.setColour(Blockly.Blocks.hardware.HUE);
    this.setTooltip(Blockly.Msg.ARDUINO_ANALOG_READ_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['arduino_analog_read'] = function(block) {
  var value_pin = Blockly.Arduino.getValueForVariable(block, 'PIN', Blockly.Arduino.ORDER_ATOMIC);

  console.log(block);

  // TODO: Assemble JavaScript into code variable.
  var code = 'analogRead(' + value_pin + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Blocks['arduino_analog_write'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ARDUINO_ANALOG_WRITE_PIN);
    this.appendValueInput("PIN")
      .setCheck(null);
    this.appendDummyInput()
      .appendField(Blockly.Msg.ARDUINO_ANALOG_WRITE_VALUE);
    this.appendValueInput("VALUE")
      .setCheck("Number");
    this.setInputsInline(false);
    this.setOutput(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.hardware.HUE);
    this.setTooltip(Blockly.Msg.ARDUINO_ANALOG_WRITE_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['arduino_analog_write'] = function(block) {
  var value_pin = Blockly.Arduino.getValueForVariable(block, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var value_value = Blockly.Arduino.getValueForVariable(block, 'VALUE', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'analogWrite(' + value_pin + ', ' + value_value + ');';
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

Blockly.Msg.ARDUINO_SERIAL_BEGIN = "Start Seriell kommunikasjon";
Blockly.Msg.ARDUINO_SERIAL_YES = "Ja";
Blockly.Msg.ARDUINO_SERIAL_NO = "Nei";
Blockly.Msg.ARDUINO_SERIAL_NEW_LINE = "Ny linje: :";
Blockly.Msg.ARDUINO_SERIAL_PRINT = "Seriell print: ";

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

Blockly.Arduino['arduino_serial_begin'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'Serial.begin(9600);';
  return code;
};


Blockly.Blocks['arduino_serial_print'] = {
  init: function() {
    this.appendValueInput("TEXT")
      .appendField(Blockly.Msg.ARDUINO_SERIAL_PRINT);
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
  // TODO: Assemble JavaScript into code variable.

  var printStatement = "print";
  if (dropdown_name === "YES") {
    printStatement = "println";
  }

  var code = 'Serial.' + printStatement + "(" + value_text.replace(/'/g, '"') + ");";
  return code;
};

Blockly.Msg.ARDUINO_MAP_DECLARE = "Oversett fra";
Blockly.Msg.ARDUINO_MAP_VARIABLE = "Variabel: ";
Blockly.Msg.ARDUINO_MAP_MIN_FROM = "Fra minimum";
Blockly.Msg.ARDUINO_MAP_MAX_FROM = "Fra maksimum";
Blockly.Msg.ARDUINO_MAP_MIN_TO = "Til minimum";
Blockly.Msg.ARDUINO_MAP_MAX_TO = "Til maximum";

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

Blockly.Msg.ARDUINO_TONE_MS_DECLARE = "Spill tone";
Blockly.Msg.ARDUINO_TONE_MS_PIN = "Fra Pin: ";
Blockly.Msg.ARDUINO_TONE_MS_FREQ = "med frekvens:";
Blockly.Msg.ARDUINO_TONE_MS_IN = "I: ";
Blockly.Msg.ARDUINO_TONE_MS_MS = "ms";
Blockly.Msg.ARDUINO_TONE_MS_TOOLTIP = "Bruk denne klossen for å spille av en tone med angitt frekvens og lengde.";

Blockly.Blocks['arduino_tone_ms'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ARDUINO_TONE_MS_DECLARE);
    this.appendValueInput("PIN")
      .appendField(Blockly.Msg.ARDUINO_TONE_MS_PIN);
    this.appendValueInput("FREQUENCY")
      .appendField(Blockly.Msg.ARDUINO_TONE_MS_FREQ);
    this.appendValueInput("MS")
      .appendField(Blockly.Msg.ARDUINO_TONE_MS_IN);
    this.appendDummyInput()
      .appendField(Blockly.Msg.ARDUINO_TONE_MS_MS);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.ARDUINO_TONE_MS_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['arduino_tone_ms'] = function(block) {
  var value_pin = Blockly.Arduino.getValueForVariable(block, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var value_frequency = Blockly.Arduino.statementToCode(block, 'FREQUENCY', Blockly.Arduino.ORDER_ATOMIC);
  var value_ms = Blockly.Arduino.getValueForVariable(block, 'MS', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'tone(' + value_pin + ', ' + value_frequency + ', ' + value_ms + ');';
  return code;
};

Blockly.Blocks['arduino_setup'] = {
  init: function () {
    this.appendStatementInput("setup")
      .setCheck(null)
      .appendField(Blockly.Msg.ARDUINO_SETUP_DEFINE);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.structure.HUE);
    this.setTooltip(Blockly.Msg.ARDUINO_SETUP_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};


Blockly.Arduino['arduino_setup'] = function (block) {
  var statements_setup = Blockly.Arduino.statementToCode(block, 'setup');

  console.log('SETUP:');
  console.log(statements_setup);
  console.log(block);

  // TODO: Assemble JavaScript into code variable.
  var code = 'void setup() {' + statements_setup + '}';
  return code;
};

Blockly.Blocks['arduino_loop'] = {
  init: function () {
    this.appendStatementInput("loop")
      .setCheck(null)
      .appendField(Blockly.Msg.ARDUINO_LOOP_DEFINE);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.structure.HUE);
    this.setTooltip(Blockly.Msg.ARDUINO_LOOP_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['arduino_loop'] = function (block) {
  var statements_setup = Blockly.Arduino.statementToCode(block, 'loop');
  // TODO: Assemble JavaScript into code variable.
  var code = 'void loop() {' + statements_setup + '}';
  return code;
};

Blockly.Blocks['arduino_delay'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ARDUINO_DELAY_DEFINE)
      .appendField(new Blockly.FieldTextInput("500"), "delay")
      .appendField(Blockly.Msg.ARDUINO_DELAY_MS);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(56);
    this.setTooltip(Blockly.Msg.ARDUINO_DELAY_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['arduino_delay'] = function (block) {
  var value_delay = block.getFieldValue('delay');
  // TODO: Assemble JavaScript into code variable.
  var code = 'delay(' + value_delay + ' );';
  return code;
};


Blockly.Blocks['arduino_set_int_variable'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Sett variabel: ")
      .appendField(new Blockly.FieldVariable("item"), "VAR")
      .appendField("til: ")
      .appendField(new Blockly.FieldTextInput(""), "var_value");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['arduino_set_int_variable'] = function (block) {
  var variable_var_name = Blockly.Arduino.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var text_var_value = block.getFieldValue('var_value');
  // TODO: Assemble JavaScript into code variable.
  var code = variable_var_name + " = " + text_var_value + ";";
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

Blockly.Blocks['arduino_declare_variable'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ARDUINO_DECLARE_VARIABLE_DEFINE)
      .appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLES_DEFAULT_NAME), 'VAR')
      .appendField(Blockly.Msg.ARDUINO_DECLARE_VARIABLE_TYPE)
      .appendField(new Blockly.FieldDropdown([["int", "int"], ["double", "double"], ["string", "string"], ["boolean", "boolean"]]), "type");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.variables.HUE);
    this.setTooltip(Blockly.Msg.ARDUINO_DECLARE_VARIABLE_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  },

  getVars: function () {
    return [this.getFieldValue('VAR')];
  },
  /**
   * Notification that a variable is renaming.
   * If the name matches one of this block's variables, rename it.
   * @param {string} oldName Previous name of variable.
   * @param {string} newName Renamed variable.
   * @this Blockly.Block
   */
  renameVar: function (oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
      this.setFieldValue(newName, 'VAR');
    }
  }
};

Blockly.Arduino['arduino_declare_variable'] = function (block) {
  var variable_var_name = Blockly.Arduino.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var dropdown_type = block.getFieldValue('type');
  // TODO: Assemble JavaScript into code variable.
  var code = dropdown_type + ' ' + variable_var_name + ";";
  return code;
};

Blockly.Blocks['arduino_declare_variable_with_value'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ARDUINO_DECLARE_VARIABLE_DEFINE)
      .appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLES_DEFAULT_NAME), 'VAR')
      .appendField(Blockly.Msg.ARDUINO_DECLARE_VARIABLE_TYPE)
      .appendField(new Blockly.FieldDropdown([["int", "int"], ["double", "double"], ["string", "string"], ["boolean", "boolean"]]), "type");
    this.appendValueInput("VALUE")
      .appendField(Blockly.Msg.ARDUINO_DECLARE_VARIABLE_VALUE);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.variables.HUE);
    this.setTooltip(Blockly.Msg.ARDUINO_DECLARE_VARIABLE_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  },

  getVars: function () {
    return [this.getFieldValue('VAR')];
  },
  /**
   * Notification that a variable is renaming.
   * If the name matches one of this block's variables, rename it.
   * @param {string} oldName Previous name of variable.
   * @param {string} newName Renamed variable.
   * @this Blockly.Block
   */
  renameVar: function (oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
      this.setFieldValue(newName, 'VAR');
    }
  }
};

Blockly.Arduino['arduino_declare_variable_with_value'] = function (block) {
  var variable_var_name = Blockly.Arduino.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var variable_value = Blockly.Arduino.getValueForVariable(block, "VALUE");
  var dropdown_type = block.getFieldValue('type');
  // TODO: Assemble JavaScript into code variable.
  var code = dropdown_type + ' ' + variable_var_name + " = " + variable_value + ";";
  return code;
};

Blockly.Blocks['arduino_set_variable'] = {
  init: function () {
    this.appendValueInput("VAR")
      .setCheck("String")
      .appendField(Blockly.Msg.ARDUINO_SET_VARIABLE_DEFINE );
    this.appendValueInput("variable_value")
      .setCheck(null)
      .appendField(Blockly.Msg.ARDUINO_SET_VARIABLE_VALUE);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.variables.HUE);
    this.setTooltip(Blockly.Msg.ARDUINO_SET_VARIABLE_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  },

  getVars: function () {
    return [this.getFieldValue('VAR')];
  }
};

Blockly.Arduino['arduino_set_variable'] = function (block) {
  var value_variable_name = Blockly.Arduino.statementToCode(block, 'VAR');

  var value_variable_value = Blockly.Arduino.getValueForVariable(block, 'variable_value');
  // TODO: Assemble JavaScript into code variable.
  var code = value_variable_name + ' =  ' + value_variable_value + ";";
  return code;
};

Blockly.Blocks['arduino_variable'] = {
  init: function () {
    this.appendDummyInput("labelInput")
      .appendField(Blockly.Msg.ARDUINO_VARIABLE_DEFINE);
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLES_DEFAULT_NAME), 'VAR');
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.variables.HUE);
    this.setTooltip(Blockly.Msg.ARDUINO_VARIABLE_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  },

  onchange: function(ev) {
    var labelInput = this.getInput("labelInput");
    var variableName = this.getFieldValue('VAR');
    console.log('valiableName: ' + variableName);
    if (variableName === 'element') {
      labelInput.setVisible(true);
    } else {
      labelInput.setVisible(false);
    }

    labelInput.sourceBlock_.render();
  },

  getVars: function () {
    return [this.getFieldValue('VAR')];
  },
  /**
   * Notification that a variable is renaming.
   * If the name matches one of this block's variables, rename it.
   * @param {string} oldName Previous name of variable.
   * @param {string} newName Renamed variable.
   * @this Blockly.Block
   */
  renameVar: function (oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
      this.setFieldValue(newName, 'VAR');
    }
  },

  customContextMenu: function (options) {
    var option = {enabled: true};
    var name = this.getFieldValue('VAR');

    option.text = this.contextMenuMsg_.replace('%1', name);
    var xmlField = goog.dom.createDom('field', null, name);
    xmlField.setAttribute('name', 'VAR');
    var xmlBlock = goog.dom.createDom('block', null, xmlField);
    xmlBlock.setAttribute('type', this.contextMenuType_);
    option.callback = Blockly.ContextMenu.callbackFactory(this, xmlBlock);
    options.push(option);
  }
};

Blockly.Arduino['arduino_variable'] = function (block) {
  var variable_variable_name = block.getFieldValue('VAR');
  // TODO: Assemble JavaScript into code variable.
  var code = variable_variable_name;
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

Blockly.Blocks['arduino_digital_port'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ARDUINO_DIGITAL_PIN)
      .appendField(new Blockly.FieldDropdown([["0", "0"], ["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"]]), "Pin")
    this.setOutput(true);
    this.setColour(Blockly.Blocks.variables.HUE);
    this.setTooltip(Blockly.Msg.ARDUINO_DIGITAL_PIN_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['arduino_digital_port'] = function(block) {
  var dropdown_name = block.getFieldValue('Pin');
  // TODO: Assemble JavaScript into code variable.
  var code = dropdown_name;
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

Blockly.Blocks['arduino_analog_port'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ARDUINO_ANALOG_PIN)
      .appendField(new Blockly.FieldDropdown([["0", "0"], ["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"]]), "Pin")
    this.setOutput(true);
    this.setColour(Blockly.Blocks.variables.HUE);
    this.setTooltip(Blockly.Msg.ARDUINO_ANALOG_PIN_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['arduino_analog_port'] = function(block) {
  var dropdown_name = block.getFieldValue('Pin');
  // TODO: Assemble JavaScript into code variable.
  var code = dropdown_name;
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

Blockly.Blocks['arduino_variable_value'] = {
  init: function () {
    this.appendDummyInput("labelInput")
      .appendField(Blockly.Msg.ARDUINO_VARIABLE_VALUE);
    this.appendDummyInput()
      .appendField(new Blockly.FieldTextInput(""), "variable_value");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.variables.HUE);
    this.setTooltip(Blockly.Msg.ARDUINO_VARIABLE_VALUE_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  },

  onchange: function(ev) {
    var labelInput = this.getInput("labelInput");
    var variableValue = this.getFieldValue('variable_value');

    console.log('variableValue: ');
    console.log(variableValue);

    if (!variableValue) {
      labelInput.setVisible(true);
    } else {
      labelInput.setVisible(false);
    }

    labelInput.sourceBlock_.render();
  }
};

Blockly.Arduino['arduino_variable_value'] = function (block) {
  var text_variable_value = block.getFieldValue('variable_value');

  console.log(typeof text_variable_value);

  // TODO: Assemble JavaScript into code variable.
  var code = text_variable_value;

  var numberRegex = /^-?\d*\.?\d*$/;

  if (text_variable_value.match(numberRegex)) {
    code = parseFloat(text_variable_value);
  } else if (text_variable_value.toLowerCase() === 'true') {
    code = true;
  } else if (text_variable_value.toLowerCase() === 'false') {
    code = false;
  } else {
    code = "'" + text_variable_value + "'";
  }

  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Blocks['arduino_pulse_in'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Puls Inn: ");
    this.appendValueInput("PIN")
      .appendField("fra Pin:");
    this.appendValueInput("VALUE")
      .appendField("Verdi: ");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['arduino_pulse_in'] = function(block) {
  var value_pin = Blockly.Arduino.getValueForVariable(block, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var value_value = Blockly.Arduino.getValueForVariable(block, 'VALUE', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'pulseIn(' + value_pin + ', ' + value_value + ')';
  return code;
};

Blockly.Blocks['arduino_declare_function'] = {
  init: function() {
    this.appendStatementInput("NAME")
      .setCheck(null)
      .appendField(Blockly.Msg.ARDUINO_DECLARE_FUNCTION_VALUE)
      .appendField(new Blockly.FieldVariable("function"), "FUNCTION")
      .appendField(Blockly.Msg.ARDUINO_DECLARE_FUNCTION_RETURNS)
      .appendField(new Blockly.FieldDropdown([["void", "void"], ["int", "int"], ["string", "string"], ["double", "double"], ["boolean", "boolean"]]), "TYPE");
    this.setColour(267);
    this.setTooltip(Blockly.Msg.ARDUINO_DECLARE_FUNCTION_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  },

  getVars: function () {
    return [this.getFieldValue('FUNCTION')];
  },
  /**
   * Notification that a variable is renaming.
   * If the name matches one of this block's variables, rename it.
   * @param {string} oldName Previous name of variable.
   * @param {string} newName Renamed variable.
   * @this Blockly.Block
   */
  renameVar: function (oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('FUNCTION'))) {
      this.setFieldValue(newName, 'FUNCTION');
    }
  }
};

Blockly.Arduino['arduino_declare_function'] = function(block) {
  var text_funktion = block.getFieldValue('FUNCTION');
  var dropdown_type = block.getFieldValue('TYPE');
  var statements_name = Blockly.Arduino.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = dropdown_type + " " + text_funktion + "() { " + statements_name + "}";
  return code;
};

Blockly.Blocks['arduino_function'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ARDUINO_USE_FUNCTION_VALUE)
      .appendField(new Blockly.FieldVariable("function"), "FUNCTION");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(267);
    this.setTooltip(Blockly.Msg.ARDUINO_USE_FUNCTION_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  },

  getVars: function () {
    return [this.getFieldValue('FUNCTION')];
  },
  /**
   * Notification that a variable is renaming.
   * If the name matches one of this block's variables, rename it.
   * @param {string} oldName Previous name of variable.
   * @param {string} newName Renamed variable.
   * @this Blockly.Block
   */
  renameVar: function (oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('FUNCTION'))) {
      this.setFieldValue(newName, 'FUNCTION');
    }
  }
};

Blockly.Arduino['arduino_function'] = function(block) {
  var variable_function = Blockly.Arduino.variableDB_.getName(block.getFieldValue('FUNCTION'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_function + "();";
  return code;
};

Blockly.Blocks['arduino_for'] = {
  init: function() {
    this.setColour(Blockly.Blocks.loops.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.ARDUINO_FOR_DECLARE);
    this.appendValueInput("FROM")
      .setCheck(null);
    this.appendValueInput("TO")
      .appendField(Blockly.Msg.ARDUINO_TO);
    this.appendDummyInput()
      .appendField(Blockly.Msg.ARDUINO_FOR_VARIABLE_NAME)
      .appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLES_DEFAULT_NAME), 'VAR')
    this.appendStatementInput("STATEMENT");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  },

  getVars: function () {
    return [this.getFieldValue('VAR')];
  },
  /**
   * Notification that a variable is renaming.
   * If the name matches one of this block's variables, rename it.
   * @param {string} oldName Previous name of variable.
   * @param {string} newName Renamed variable.
   * @this Blockly.Block
   */
  renameVar: function (oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
      this.setFieldValue(newName, 'VAR');
    }
  }
};

Blockly.Arduino['arduino_for'] = function(block) {
  var value_from = Blockly.Arduino.getValueForVariable(block, 'FROM', Blockly.Arduino.ORDER_ATOMIC);
  var value_to = Blockly.Arduino.getValueForVariable(block, 'TO', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_type = block.getFieldValue('VAR');


  var incrementSymbol = "++";
  var compareSymbol = "<";
  if (value_to < value_from) {
    incrementSymbol = "--";
    compareSymbol = ">";
  }

  var statements_statement = Blockly.Arduino.statementToCode(block, 'STATEMENT');
  // TODO: Assemble JavaScript into code variable.
  var code = 'for (int ' + dropdown_type + ' = ' + value_from + "; " + dropdown_type + ' ' + compareSymbol + ' ' + value_to + '; ' + dropdown_type + incrementSymbol + ') { ' + statements_statement + '}';
  return code;
};

Blockly.Blocks['arduino_repeat'] = {
  init: function() {
    this.setColour(Blockly.Blocks.loops.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.ARDUINO_REPEAT_DECLARE);
    this.appendValueInput("TO")
      .setCheck(null);
    this.appendDummyInput()
      .appendField(Blockly.Msg.ARDUINO_REPEAT_TIMES);
    this.appendStatementInput("STATEMENT");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.ARDUINO_REPEAT_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['arduino_repeat'] = function(block) {
  var value_to = Blockly.Arduino.getValueForVariable(block, 'TO', Blockly.Arduino.ORDER_ATOMIC);

  var statements_statement = Blockly.Arduino.statementToCode(block, 'STATEMENT');
  // TODO: Assemble JavaScript into code variable.
  var code = 'for (int index = 0; index < ' + value_to + '; index++) { ' + statements_statement + '}';
  return code;
};

Blockly.Blocks['arduino_high_low'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.ARDUINO_HIGH, "HIGH"], [Blockly.Msg.ARDUINO_LOW, "LOW"]]), "NAME");
    this.setOutput(true);
    this.setColour(Blockly.Blocks.variables.HUE);
    this.setTooltip(Blockly.Msg.ARDUINO_HIGH_LOW_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['arduino_high_low'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = dropdown_name;
  return code;
};

Blockly.Blocks['arduino_tones'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Tone: ")
      .appendField(new Blockly.FieldDropdown([["C", "C"], ["D", "D"], ["E", "E"], ["F", "F"], ["G", "G"], ["A", "A"], ["H", "H"]]), "FREQ");
    this.setOutput(true);
    this.setColour(Blockly.Blocks.variables.HUE);
    this.setTooltip(Blockly.Msg.ARDUINO_HIGH_LOW_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['arduino_tones'] = function(block) {
  var dropdown_name = block.getFieldValue('FREQ');

  if (dropdown_name == "C") {
    code = "523.25";
  } else if (dropdown_name == "D") {
    code = "587.33";
  } else if (dropdown_name == "E") {
    code = "659.25";
  } else if (dropdown_name == "F") {
    code = "698.46";
  } else if (dropdown_name == "G") {
    code = "783.99";
  } else if (dropdown_name == "A") {
    code = "880";
  } else if (dropdown_name == "H") {
    code = "987.76";
  }

  return code;
};


/* NEO PiXELS */

Blockly.Blocks['arduino_pixel_strip'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ARDUINO_LED_STRIP_DECLARE);
    this.appendValueInput("NUM_PIXELS")
      .appendField(Blockly.Msg.ARDUINO_LED_STRIP_NUM_PIXELS);
    this.appendValueInput("PIN")
      .appendField(Blockly.Msg.ARDUINO_LED_STRIP_PIN);
    this.appendDummyInput()
      .appendField(Blockly.Msg.ARDUINO_LED_STRIP_TYPE)
      .appendField(new Blockly.FieldDropdown([["GRB 800 KHz", "NEO_GRB+NEO_KHZ800"], ["RGB 800 KHz", "NEO_RGB+NEO_KHZ800"], ["GRB 400 KHz", "NEO_GRB+NEO_KHZ400"], ["RGB 400 KHz", "NEO_RGB+NEO_KHZ400"]]), "TYPE");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ARDUINO_LED_STRIP_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['arduino_pixel_strip'] = function(block) {
  var value_num_pixels = Blockly.Arduino.getValueForVariable(block, 'NUM_PIXELS', Blockly.Arduino.ORDER_ATOMIC);
  var value_pin = Blockly.Arduino.getValueForVariable(block, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_type = block.getFieldValue('TYPE');
  // TODO: Assemble JavaScript into code variable.
  var code = 'Adafruit_NeoPixel strip = Adafruit_NeoPixel(' + value_num_pixels + ', ' + value_pin + ', ' + dropdown_type + ');';

  // Adafruit_NeoPixel strip = Adafruit_NeoPixel(10, PIN, NEO_GRB + NEO_KHZ800);
  return code;
};

Blockly.Blocks['arduino_pixel_strip_begin'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ARDUINO_LED_STRIP_BEGIN);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ARDUINO_LED_STRIP_BEGIN_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['arduino_pixel_strip_begin'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'strip.begin();';
  return code;
};

Blockly.Blocks['arduino_pixel_strip_show'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ARDUINO_LED_STRIP_SHOW);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ARDUINO_LED_STRIP_SHOW_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['arduino_pixel_strip_show'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'strip.show();';
  return code;
};

Blockly.Blocks['arduino_pixel_strip_include'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ARDUINO_LED_STRIP_INCLUDE);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ARDUINO_LED_STRIP_INCLUDE_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['arduino_pixel_strip_include'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '#include <Adafruit_NeoPixel.h>\n\n';
  return code;
};

Blockly.Blocks['arduino_pixel_strip_color'] = {
  init: function() {
    this.appendValueInput("PIXEL")
      .appendField(Blockly.Msg.ARDUINO_LED_STRIP_SHOW);
    this.appendValueInput("RED")
      .appendField(Blockly.Msg.ARDUINO_LED_STRIP_COLOR_RED);
    this.appendValueInput("GREEN")
      .appendField(Blockly.Msg.ARDUINO_LED_STRIP_COLOR_GREEN);
    this.appendValueInput("BLUE")
      .appendField(Blockly.Msg.ARDUINO_LED_STRIP_COLOR_BLUE);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ARDUINO_LED_STRIP_COLOR_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};


Blockly.Arduino['arduino_pixel_strip_color'] = function(block) {
  var value_pixel = Blockly.Arduino.getValueForVariable(block, 'PIXEL', Blockly.Arduino.ORDER_ATOMIC);
  var value_red = Blockly.Arduino.getValueForVariable(block, 'RED', Blockly.Arduino.ORDER_ATOMIC);
  var value_green = Blockly.Arduino.getValueForVariable(block, 'GREEN', Blockly.Arduino.ORDER_ATOMIC);
  var value_blue = Blockly.Arduino.getValueForVariable(block, 'BLUE', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'strip.setPixelColor(' + value_pixel + ', strip.Color(' + value_red + ', ' + value_green + ', ' + value_blue + '));';

  return code;
};

/* //NEO PIXELS */


/* *** */
/* *** */
/* *** */
/* overriding the default blocks to change hue... Must be a better way */
Blockly.Arduino['controls_if'] = function (block) {
  // If/elseif/else condition.
  var n = 0;
  var argument = Blockly.Arduino.valueToCode(block, 'IF' + n, Blockly.Arduino.ORDER_NONE) || 'false';

  if (argument.length === 1) {
    argument = Blockly.Arduino.statementToCode(block, 'IF' + n, Blockly.Arduino.ORDER_NONE)
  }

  if (block.type.indexOf('arduino_') !== -1) {
    argument = Blockly.Arduino.statementToCode(block, "IF") || false;
  }

  var branch = Blockly.Arduino.statementToCode(block, 'DO' + n);
  var code = 'if (' + argument + ') {\n' + branch + '}';
  for (n = 1; n <= block.elseifCount_; n++) {
    argument = Blockly.Arduino.valueToCode(block, 'IF' + n, Blockly.Arduino.ORDER_NONE) || 'false';

    if (argument.length === 1) {
      argument = Blockly.Arduino.statementToCode(block, 'IF' + n, Blockly.Arduino.ORDER_NONE)
    }

    branch = Blockly.Arduino.statementToCode(block, 'DO' + n);
    code += ' else if (' + argument + ') {\n' + branch + '}';
  }
  if (block.elseCount_) {
    branch = Blockly.Arduino.statementToCode(block, 'ELSE');
    code += ' else {\n' + branch + '}';
  }
  return code + '\n';
};

Blockly.Arduino['logic_compare'] = function (block) {
  // Comparison operator.
  var OPERATORS = {
    'EQ': '==',
    'NEQ': '!=',
    'LT': '<',
    'LTE': '<=',
    'GT': '>',
    'GTE': '>='
  };
  var operator = OPERATORS[block.getFieldValue('OP')];
  var order = (operator == '==' || operator == '!=') ?
    Blockly.Arduino.ORDER_EQUALITY : Blockly.Arduino.ORDER_RELATIONAL;
  var argument0 = Blockly.Arduino.valueToCode(block, 'A', order) || '0';

  if (argument0.length === 1) {
    argument0 = Blockly.Arduino.statementToCode(block, 'A', order) || '0';
  }

  var argument1 = Blockly.Arduino.valueToCode(block, 'B', order) || '0';

  if (argument1.length === 1) {
    argument1 = Blockly.Arduino.statementToCode(block, 'B', order) || '0';
  }
  var code = argument0 + ' ' + operator + ' ' + argument1;
  return [code, order];
};

Blockly.Arduino['logic_operation'] = function (block) {
  // Operations 'and', 'or'.
  var operator = (block.getFieldValue('OP') == 'AND') ? '&&' : '||';
  var order = (operator == '&&') ? Blockly.Arduino.ORDER_LOGICAL_AND :
    Blockly.Arduino.ORDER_LOGICAL_OR;
  var argument0 = Blockly.Arduino.valueToCode(block, 'A', order);

  if (argument0.length === 1) {
    argument0 = Blockly.Arduino.statementToCode(block, 'A', order) || '0';
  }

  var argument1 = Blockly.Arduino.valueToCode(block, 'B', order);

  if (argument1.length === 1) {
    argument1 = Blockly.Arduino.statementToCode(block, 'B', order) || '0';
  }

  if (!argument0 && !argument1) {
    // If there are no arguments, then the return value is false.
    argument0 = 'false';
    argument1 = 'false';
  } else {
    // Single missing arguments have no effect on the return value.
    var defaultArgument = (operator == '&&') ? 'true' : 'false';
    if (!argument0) {
      argument0 = defaultArgument;
    }
    if (!argument1) {
      argument1 = defaultArgument;
    }
  }
  var code = argument0 + ' ' + operator + ' ' + argument1;
  return [code, order];
};

Blockly.Arduino['logic_negate'] = function (block) {
  // Negation.
  var order = Blockly.Arduino.ORDER_LOGICAL_NOT;
  var argument0 = Blockly.Arduino.valueToCode(block, 'BOOL', order) || 'true';

  if (argument0.length == 1) {
    var argument0 = Blockly.Arduino.statementToCode(block, 'BOOL', order) || 'true';
  }
  var code = '!' + argument0;
  return [code, order];
};

Blockly.Arduino['logic_boolean'] = function (block) {
  // Boolean values true and false.
  var code = (block.getFieldValue('BOOL') == 'TRUE') ? 'true' : 'false';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['logic_null'] = function (block) {
  // Null data type.
  return ['null', Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino['math_arithmetic'] = function(block) {
  // Basic arithmetic operators, and power.
  var OPERATORS = {
    'ADD': [' + ', Blockly.Arduino.ORDER_ADDITION],
    'MINUS': [' - ', Blockly.Arduino.ORDER_SUBTRACTION],
    'MULTIPLY': [' * ', Blockly.Arduino.ORDER_MULTIPLICATION],
    'DIVIDE': [' / ', Blockly.Arduino.ORDER_DIVISION],
    'POWER': [null, Blockly.Arduino.ORDER_COMMA]  // Handle power separately.
  };
  var tuple = OPERATORS[block.getFieldValue('OP')];
  var operator = tuple[0];
  var order = tuple[1];
  var argument0 = Blockly.Arduino.getValueForVariable(block, 'A', order) || '0';
  var argument1 = Blockly.Arduino.getValueForVariable(block, 'B', order) || '0';
  var code;
  // Power in JavaScript requires a special case since it has no operator.
  if (!operator) {
    code = 'Math.pow(' + argument0 + ', ' + argument1 + ')';
    return [code, Blockly.Arduino.ORDER_FUNCTION_CALL];
  }
  code = argument0 + operator + argument1;
  return [code, order];
};

Blockly.Blocks['logic_compare'] = {
  /**
   * Block for comparison operator.
   * @this Blockly.Block
   */
  init: function() {
    var OPERATORS = this.RTL ? [
      ['=', 'EQ'],
      ['\u2260', 'NEQ'],
      ['>', 'LT'],
      ['\u2265', 'LTE'],
      ['<', 'GT'],
      ['\u2264', 'GTE']
    ] : [
      ['=', 'EQ'],
      ['\u2260', 'NEQ'],
      ['<', 'LT'],
      ['\u2264', 'LTE'],
      ['>', 'GT'],
      ['\u2265', 'GTE']
    ];
    this.setHelpUrl(Blockly.Msg.LOGIC_COMPARE_HELPURL);
    this.setColour(Blockly.Blocks.math.HUE);
    this.setOutput(true, 'Boolean');
    this.appendValueInput('A');
    this.appendValueInput('B')
      .appendField(new Blockly.FieldDropdown(OPERATORS), 'OP');
    this.setInputsInline(true);
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function() {
      var op = thisBlock.getFieldValue('OP');
      var TOOLTIPS = {
        'EQ': Blockly.Msg.LOGIC_COMPARE_TOOLTIP_EQ,
        'NEQ': Blockly.Msg.LOGIC_COMPARE_TOOLTIP_NEQ,
        'LT': Blockly.Msg.LOGIC_COMPARE_TOOLTIP_LT,
        'LTE': Blockly.Msg.LOGIC_COMPARE_TOOLTIP_LTE,
        'GT': Blockly.Msg.LOGIC_COMPARE_TOOLTIP_GT,
        'GTE': Blockly.Msg.LOGIC_COMPARE_TOOLTIP_GTE
      };
      return TOOLTIPS[op];
    });
    this.prevBlocks_ = [null, null];
  },
  /**
   * Called whenever anything on the workspace changes.
   * Prevent mismatched types from being compared.
   * @this Blockly.Block
   */
  onchange: function() {
    var blockA = this.getInputTargetBlock('A');
    var blockB = this.getInputTargetBlock('B');
    // Disconnect blocks that existed prior to this change if they don't match.
    if (blockA && blockB &&
      !blockA.outputConnection.checkType_(blockB.outputConnection)) {
      // Mismatch between two inputs.  Disconnect previous and bump it away.
      for (var i = 0; i < this.prevBlocks_.length; i++) {
        var block = this.prevBlocks_[i];
        if (block === blockA || block === blockB) {
          block.setParent(null);
          block.bumpNeighbours_();
        }
      }
    }
    this.prevBlocks_[0] = blockA;
    this.prevBlocks_[1] = blockB;
  }
};

Blockly.Blocks['logic_operation'] = {
  /**
   * Block for logical operations: 'and', 'or'.
   * @this Blockly.Block
   */
  init: function() {
    var OPERATORS =
      [[Blockly.Msg.LOGIC_OPERATION_AND, 'AND'],
        [Blockly.Msg.LOGIC_OPERATION_OR, 'OR']];
    this.setHelpUrl(Blockly.Msg.LOGIC_OPERATION_HELPURL);
    this.setColour(Blockly.Blocks.math.HUE);
    this.setOutput(true, 'Boolean');
    this.appendValueInput('A')
      .setCheck('Boolean');
    this.appendValueInput('B')
      .setCheck('Boolean')
      .appendField(new Blockly.FieldDropdown(OPERATORS), 'OP');
    this.setInputsInline(true);
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function() {
      var op = thisBlock.getFieldValue('OP');
      var TOOLTIPS = {
        'AND': Blockly.Msg.LOGIC_OPERATION_TOOLTIP_AND,
        'OR': Blockly.Msg.LOGIC_OPERATION_TOOLTIP_OR
      };
      return TOOLTIPS[op];
    });
  }
};

Blockly.Blocks['logic_negate'] = {
  /**
   * Block for negation.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOGIC_NEGATE_TITLE,
      "args0": [
        {
          "type": "input_value",
          "name": "BOOL",
          "check": "Boolean"
        }
      ],
      "output": "Boolean",
      "colour": Blockly.Blocks.math.HUE,
      "tooltip": Blockly.Msg.LOGIC_NEGATE_TOOLTIP,
      "helpUrl": Blockly.Msg.LOGIC_NEGATE_HELPURL
    });
  }
};

Blockly.Blocks['logic_boolean'] = {
  /**
   * Block for boolean data type: true and false.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "BOOL",
          "options": [
            [Blockly.Msg.LOGIC_BOOLEAN_TRUE, "TRUE"],
            [Blockly.Msg.LOGIC_BOOLEAN_FALSE, "FALSE"]
          ]
        }
      ],
      "output": "Boolean",
      "colour": Blockly.Blocks.variables.HUE,
      "tooltip": Blockly.Msg.LOGIC_BOOLEAN_TOOLTIP,
      "helpUrl": Blockly.Msg.LOGIC_BOOLEAN_HELPURL
    });
  }
};

Blockly.Blocks['logic_null'] = {
  /**
   * Block for null data type.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOGIC_NULL,
      "output": null,
      "colour": Blockly.Blocks.variables.HUE,
      "tooltip": Blockly.Msg.LOGIC_NULL_TOOLTIP,
      "helpUrl": Blockly.Msg.LOGIC_NULL_HELPURL
    });
  }
};
