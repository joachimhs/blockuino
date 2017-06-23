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
Blockly.Blocks.tools = {
  HUE: 210
};
Blockly.Blocks.customFunction = {
  HUE: 65
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

Blockly.Blocks['comment'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ARDUINO_COMMENT_LABEL)
      .appendField(new Blockly.FieldTextInput(Blockly.Msg.ARDUINO_COMMENT_DEFINE ), "COMMENT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ARDUINO_COMMENT_TOOLTIP);
    this.setHelpUrl('');
  }
};

Blockly.Arduino['comment'] = function(block) {
  var text_comment = block.getFieldValue('COMMENT');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n//' + text_comment + '\n';
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
    this.setColour(Blockly.Blocks.hardware.HUE);
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

Blockly.Blocks['arduino_tone'] = {
  init: function() {
    this.appendValueInput("PIN")
      .setCheck(null)
      .appendField(Blockly.Msg.ARDUINO_TONE_MS_DECLARE)
      .appendField(Blockly.Msg.ARDUINO_TONE_MS_PIN);
    this.appendValueInput("FREQUENCY")
      .setCheck(null)
      .appendField(Blockly.Msg.ARDUINO_TONE_MS_FREQ);
    this.setInputsInline(true);
    this.setColour(230);
    this.setTooltip(Blockly.Msg.ARDUINO_TONE_TOOLTIP);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setHelpUrl('');
  }
};

Blockly.Arduino['arduino_tone'] = function(block) {
  var value_pin = Blockly.Arduino.getValueForVariable(block, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var value_frequency = Blockly.Arduino.statementToCode(block, 'FREQUENCY', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'tone(' + value_pin + ', ' + value_frequency + ');';
  return code;
};

Blockly.Blocks['arduino_no_tone'] = {
  init: function() {
  this.appendValueInput("PIN")
    .setCheck(null)
    .appendField(Blockly.Msg.ARDUINO_NO_TONE_MS_DECLARE)
    .appendField(Blockly.Msg.ARDUINO_TONE_MS_PIN);
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setTooltip(Blockly.Msg.ARDUINO_NO_TONE_TOOLTIP);
  this.setColour(230);
  this.setTooltip('');
  this.setHelpUrl('');
}
};

Blockly.Arduino['arduino_no_tone'] = function(block) {
  var value_pin = Blockly.Arduino.getValueForVariable(block, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'noTone(' + value_pin + ');';
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
  var code = 'delay(' + value_delay + ');';
  return code;
};

Blockly.Blocks['arduino_delay_variable'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ARDUINO_DELAY_DEFINE);
    this.appendValueInput("delay")
      .setCheck(null);
    this.appendDummyInput()
      .appendField(Blockly.Msg.ARDUINO_DELAY_MS);
    this.setInputsInline(true);
    this.setColour(56);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ARDUINO_DELAY_TOOLTIP);
    this.setHelpUrl('');
  }
};

Blockly.Arduino['arduino_delay_variable'] = function(block) {
  var value_delay = Blockly.Arduino.getValueForVariable(block, "delay");

  // TODO: Assemble JavaScript into code variable.
  var code = 'delay(' + value_delay + ');';
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
      .appendField(new Blockly.FieldDropdown([["int", "int"], ["double", "double"], ["string", "string"], ["boolean", "boolean"], ["Servo", "Servo"]]), "type");
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
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ARDUINO_DECLARE_VARIABLE_DEFINE)
      .appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLES_DEFAULT_NAME), 'VAR');
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ARDUINO_DECLARE_VARIABLE_TYPE)
      .appendField(new Blockly.FieldDropdown([["int", "int"], ["double", "double"], ["float", "float"], ["string", "string"], ["boolean", "boolean"]]), "type");
    this.appendValueInput("VALUE")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ARDUINO_DECLARE_VARIABLE_VALUE);
    this.setInputsInline(false);
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
    if (variableName === 'element' || variableName == 'item') {
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
    code = '"' + text_variable_value + '"';
  }

  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Blocks['arduino_pulse_in'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Puls Inn: ");
    this.appendValueInput("PIN")
      .appendField(Blockly.Msg.ARDUINO_TONE_MS_PIN);
    this.appendValueInput("VALUE")
      .appendField("Verdi: ");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setColour(Blockly.Blocks.tools.HUE);
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
    this.appendDummyInput()
      .appendField(Blockly.Msg.ARDUINO_DECLARE_FUNCTION_VALUE)
      .appendField(new Blockly.FieldVariable("function"), "FUNCTION");
    this.appendDummyInput()
      .appendField(Blockly.Msg.ARDUINO_DECLARE_FUNCTION_RETURNS)
      .appendField(new Blockly.FieldDropdown([["void", "void"], ["int", "int"], ["string", "string"], ["double", "double"], ["boolean", "boolean"]]), "TYPE");
    this.appendStatementInput("CODE");
    this.setColour(267);
    this.setInputsInline(false);
    this.setPreviousStatement(false, null);
    this.setNextStatement(false, null);
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
  var statements_name = Blockly.Arduino.statementToCode(block, 'CODE');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n' + dropdown_type + " " + text_funktion + "() { " + statements_name + "}";
  return code;
};

Blockly.Blocks['function_return'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ARDUINO_FUNCTION_RETURN_LABEL);
    this.appendValueInput("retVal")
      .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(267);
    this.setTooltip(Blockly.Msg.ARDUINO_FUNCTION_RETURN_TOOLTIP);
    this.setHelpUrl('');
  }
};

Blockly.Arduino['function_return'] = function(block) {
  var value_retVal = Blockly.Arduino.getValueForVariable(block, "retVal");


  // TODO: Assemble JavaScript into code variable.
  var code = 'return ' + value_retVal + ';';
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

/**
 *
 * Stepper: 28-BYJ-48 + ULN2003 driver
 *
 * @param block
 * @returns {string}
 */
Blockly.Blocks['initialize_28byj'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Initialiser 28-BYJ-48/ULN2003")
      .appendField("med navn: ")
      .appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLES_DEFAULT_NAME), 'VAR');
    this.appendValueInput("IN1")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("IN1: ");
    this.appendValueInput("IN2")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("IN2: ");
    this.appendValueInput("IN3")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("IN3: ");
    this.appendValueInput("IN4")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("IN4: ");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.customFunction.HUE);
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

Blockly.Arduino['initialize_28byj'] = function(block) {
  var dropdown_var = block.getFieldValue('VAR');
  var value_in1 = Blockly.Arduino.getValueForVariable(block, 'IN1', Blockly.Arduino.ORDER_NONE);
  var value_in2 = Blockly.Arduino.getValueForVariable(block, 'IN2', Blockly.Arduino.ORDER_NONE);
  var value_in3 = Blockly.Arduino.getValueForVariable(block, 'IN3', Blockly.Arduino.ORDER_NONE);
  var value_in4 = Blockly.Arduino.getValueForVariable(block, 'IN4', Blockly.Arduino.ORDER_NONE);

  // TODO: Assemble JavaScript into code variable.
  var code = 'int ' + dropdown_var + "_in1 = " + value_in1 + ';\n';
  code += 'int ' + dropdown_var + "_in2 = " + value_in2 + ';\n';
  code += 'int ' + dropdown_var + "_in3 = " + value_in3 + ';\n';
  code += 'int ' + dropdown_var + "_in4 = " + value_in4 + ';\n';
  code += 'int ' + dropdown_var + "_currStep = 0;\n\n";
  return code;
};

Blockly.Blocks['setup_28byj'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Setup Stepper:")
      .appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLES_DEFAULT_NAME), 'VAR');
    this.setTooltip('');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.customFunction.HUE);
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

Blockly.Arduino['setup_28byj'] = function(block) {
  var dropdown_var = block.getFieldValue('VAR');

  // TODO: Assemble JavaScript into code variable.
  var code = 'pinMode(' + dropdown_var + '_in1, OUTPUT);\n';
  code += 'pinMode(' + dropdown_var + '_in2, OUTPUT);\n';
  code += 'pinMode(' + dropdown_var + '_in3, OUTPUT);\n';
  code += 'pinMode(' + dropdown_var + '_in4, OUTPUT);\n\n';
  return code;
};

Blockly.Blocks['stepper_function'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Definer Funksjon: stepper");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.structure.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['stepper_function'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'int stepper(int in1, int in2, int in3, int in4, int currStep, boolean forward) {;\n';
  code += 'digitalWrite(in1, currStep == 0);\n';
  code += 'digitalWrite(in2, currStep == 1);\n';
  code += 'digitalWrite(in3, currStep == 2);\n';
  code += 'digitalWrite(in4, currStep == 3);\n';
  code += '\n';
  code += 'if (forward) {';
  code += '    currStep++; \n';
  code += '} else {';
  code += '    currStep--;\n';
  code += '}\n';
  code += 'if (currStep > 3) {';
  code += '    currStep = 0;\n';
  code += '}\n';
  code += 'if (currStep < 0) {';
  code += '    currStep = 3;\n';
  code += '}\n';
  code += 'return currStep;\n';
  code += '}\n\n';
  return code;
};


Blockly.Blocks['call_step_28byj'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("step med")
      .appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLES_DEFAULT_NAME), 'VAR');
    this.appendDummyInput()
      .appendField("Retning")
      .appendField(new Blockly.FieldDropdown([["fremover", "true"], ["bakover", "false"]]), "DIRECTION");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setColour(Blockly.Blocks.structure.HUE);
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

Blockly.Arduino['call_step_28byj'] = function(block) {
  var dropdown_var = block.getFieldValue('VAR');
  var dropdown_direction = block.getFieldValue('DIRECTION');


  var code = dropdown_var + "_currStep = stepper(" + dropdown_var + "_in1, " + dropdown_var + "_in2, " + dropdown_var + "_in3, " + dropdown_var + "_in4, " + dropdown_var + "_currStep, "+ dropdown_direction + ");";
  return code;
};

/**
 *
 * //Stepper 28-BYJ-48
 * @type {{init: Blockly.Blocks.arduino_for.init, getVars: Blockly.Blocks.arduino_for.getVars, renameVar: Blockly.Blocks.arduino_for.renameVar}}
 */

Blockly.Blocks['variable_decrement'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Reduser Variabel med 1:")
      .appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLES_DEFAULT_NAME), 'VAR');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.variables.HUE);
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


Blockly.Arduino['variable_decrement'] = function(block) {
  var dropdown_var = block.getFieldValue('VAR');
  // TODO: Assemble JavaScript into code variable.
  var code = dropdown_var + '--;';
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

Blockly.Blocks['variable_increment'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Øk Variabel med 1:")
      .appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLES_DEFAULT_NAME), 'VAR');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.variables.HUE);
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


Blockly.Arduino['variable_increment'] = function(block) {
  var dropdown_var = block.getFieldValue('VAR');
  // TODO: Assemble JavaScript into code variable.
  var code = dropdown_var + '++;';
  // TODO: Change ORDER_NONE to the correct strength.
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
      .appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLES_DEFAULT_NAME), 'VAR');
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
  var value_from = Blockly.Arduino.getValueForVariable(block, 'FROM', Blockly.Arduino.ORDER_NONE);
  var value_to = Blockly.Arduino.getValueForVariable(block, 'TO', Blockly.Arduino.ORDER_NONE);
  var dropdown_type = block.getFieldValue('VAR');

  var isNumbers = true;
  var parsedValueTo = parseInt(value_to);
  if (!parsedValueTo) {
    isNumbers = false;
  }

  var incrementSymbol = "++";
  var compareSymbol = "<";
  if (isNumbers && parseInt(value_to) < parseInt(value_from)) {
    incrementSymbol = "--";
    compareSymbol = ">";
  } else if (!isNumbers) {
    compareSymbol = "<=";
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

Blockly.Blocks['arduino_random'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ARDUINO_RANDOM);
    this.appendValueInput("from")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ARDUINO_RANDOM_FROM);
    this.appendValueInput("to")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ARDUINO_RANDOM_TO);
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(118);
    this.setTooltip(Blockly.Msg.ARDUINO_RANDOM_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['arduino_random'] = function(block) {
  var value_from = Blockly.Arduino.getValueForVariable(block, 'from', Blockly.Arduino.ORDER_ATOMIC);
  var value_to = Blockly.Arduino.getValueForVariable(block, 'to', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'random(' + value_from + ',' + value_to + ')';
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
    this.setColour(Blockly.Blocks.customFunction.HUE);
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
    this.setColour(Blockly.Blocks.customFunction.HUE);
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
    this.setColour(Blockly.Blocks.customFunction.HUE);
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
    this.setColour(Blockly.Blocks.customFunction.HUE);
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
    this.setPreviousStatement(true, null)
    this.setColour(Blockly.Blocks.customFunction.HUE);;
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
  var code = 'if (' + argument + ') {' + branch + '}';
  for (n = 1; n <= block.elseifCount_; n++) {
    argument = Blockly.Arduino.valueToCode(block, 'IF' + n, Blockly.Arduino.ORDER_NONE) || 'false';

    if (argument.length === 1) {
      argument = Blockly.Arduino.statementToCode(block, 'IF' + n, Blockly.Arduino.ORDER_NONE)
    }

    branch = Blockly.Arduino.statementToCode(block, 'DO' + n);
    code += ' else if (' + argument + ') {' + branch + '}';
  }
  if (block.elseCount_) {
    branch = Blockly.Arduino.statementToCode(block, 'ELSE');
    code += ' else {' + branch + '}';
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

/** ARDUINO BIL **/

Blockly.Blocks['arduino_car_variables'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.MOTOR_INIT);
    this.appendValueInput("ena")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("ena");
    this.appendValueInput("in1")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("in1");
    this.appendValueInput("in2")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("in2");
    this.appendValueInput("enb")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("enb");
    this.appendValueInput("in3")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("in3");
    this.appendValueInput("in4")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("in4");
    this.appendValueInput("motorSpeed")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.MOTOR_INIT_SPEED);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.customFunction.HUE);
    this.setTooltip(Blockly.Msg.MOTOR_INIT_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['arduino_car_variables'] = function(block) {
  var value_ena = Blockly.Arduino.getValueForVariable(block, 'ena', Blockly.Arduino.ORDER_ATOMIC);
  var value_in1 = Blockly.Arduino.getValueForVariable(block, 'in1', Blockly.Arduino.ORDER_ATOMIC);
  var value_in2 = Blockly.Arduino.getValueForVariable(block, 'in2', Blockly.Arduino.ORDER_ATOMIC);
  var value_enb = Blockly.Arduino.getValueForVariable(block, 'enb', Blockly.Arduino.ORDER_ATOMIC);
  var value_in3 = Blockly.Arduino.getValueForVariable(block, 'in3', Blockly.Arduino.ORDER_ATOMIC);
  var value_in4 = Blockly.Arduino.getValueForVariable(block, 'in4', Blockly.Arduino.ORDER_ATOMIC);
  var value_speed = Blockly.Arduino.getValueForVariable(block, 'motorSpeed', Blockly.Arduino.ORDER_ATOMIC);

  // TODO: Assemble JavaScript into code variable.
  var code = 'int ena = ' + value_ena + ';';
  code += 'int in1 = ' + value_in1 + ';';
  code += 'int in2 = ' + value_in2 + ';';
  code += 'int enb = ' + value_enb + ';';
  code += 'int in3 = ' + value_in3 + ';';
  code += 'int in4 = ' + value_in4 + ';';
  code += 'int motorSpeed = ' + value_speed + ';';

  code += '/* Functions for Arduino Car **/\n';

  code += 'void mcStop() {';
  code += 'analogWrite(ena, motorSpeed);';
  code += 'analogWrite(enb, motorSpeed);\n';

  code += 'digitalWrite(in1, LOW);';
  code += 'digitalWrite(in2, LOW);\n';

  code += 'digitalWrite(in3, LOW);';
  code += 'digitalWrite(in4, LOW);';
  code += "}";

  code += 'void mcForwards() {';
  code += 'analogWrite(ena, motorSpeed);';
  code += 'analogWrite(enb, motorSpeed);\n';

  code += 'digitalWrite(in1, HIGH);';
  code += 'digitalWrite(in2, LOW);\n';

  code += 'digitalWrite(in3, HIGH);';
  code += 'digitalWrite(in4, LOW);';
  code += "}";

  code += 'void mcBackwards() {';
  code += 'analogWrite(ena, motorSpeed);';
  code += 'analogWrite(enb, motorSpeed);\n';

  code += 'digitalWrite(in1, LOW);';
  code += 'digitalWrite(in2, HIGH);\n';

  code += 'digitalWrite(in3, LOW);';
  code += 'digitalWrite(in4, HIGH);';
  code += "}";

  code += 'void mcRotateRight() {';
  code += 'analogWrite(ena, motorSpeed);';
  code += 'analogWrite(enb, motorSpeed);\n';

  code += 'digitalWrite(in1, LOW);';
  code += 'digitalWrite(in2, HIGH);\n';

  code += 'digitalWrite(in3, HIGH);';
  code += 'digitalWrite(in4, LOW);';
  code += "}";

  code += 'void mcRotateLeft() {';
  code += 'analogWrite(ena, motorSpeed);';
  code += 'analogWrite(enb, motorSpeed);\n';

  code += 'digitalWrite(in1, HIGH);';
  code += 'digitalWrite(in2, LOW);\n';

  code += 'digitalWrite(in3, LOW);';
  code += 'digitalWrite(in4, HIGH);';
  code += "}";

  code += 'void mcAnalogSpeed(int left, int right) {';
  code += 'if (left < -255) { left = -255; }';
  code += 'if (left > 255) { left = 255; }';
  code += 'if (right < -255) { right = -255; }';
  code += 'if (right > 255) { right = 255; }';

  code += 'analogWrite(ena, abs(left));';
  code += 'analogWrite(enb, abs(right));';

  code += 'if (left < 0) { digitalWrite(in1, HIGH); digitalWrite(in2, LOW); }';
  code += 'else { digitalWrite(in1, LOW); digitalWrite(in2, HIGH); }'

  code += 'if (right < 0) { digitalWrite(in3, HIGH); digitalWrite(in4, LOW); }';
  code += 'else { digitalWrite(in3, LOW); digitalWrite(in4, HIGH); }'
  code += "}";

  code += '/** //Functions for Arduino Car **/\n';
  return code;
};

Blockly.Blocks['arduino_car_setup'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.MOTOR_SETUP);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.customFunction.HUE);
    this.setTooltip(Blockly.Msg.MOTOR_SETUP_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['arduino_car_setup'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
  var code = 'pinMode(ena, OUTPUT);';
  code += 'pinMode(in1, OUTPUT);';
  code += 'pinMode(in2, OUTPUT);';
  code += 'pinMode(enb, OUTPUT);';
  code += 'pinMode(in3, OUTPUT);';
  code += 'pinMode(in4, OUTPUT);';
  return code;
};

Blockly.Blocks['arduino_car_stop'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.MOTOR_STOP);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.customFunction.HUE);
    this.setTooltip(Blockly.Msg.MOTOR_STOP_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['arduino_car_stop'] = function(block) {
  // TODO: Assemble JavaScript into code variable.

  var code = 'mcStop();';
  return code;
};

Blockly.Blocks['arduino_car_forwards'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.MOTOR_FORWARDS);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.customFunction.HUE);
    this.setTooltip(Blockly.Msg.MOTOR_FORWARDS_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['arduino_car_forwards'] = function(block) {
  // TODO: Assemble JavaScript into code variable.

  var code = 'mcForwards();';
  return code;
};

Blockly.Blocks['arduino_car_backwards'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.MOTOR_BACKWARDS);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.customFunction.HUE);
    this.setTooltip(Blockly.Msg.MOTOR_BACKARDS_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['arduino_car_backwards'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'mcBackwards();';
  return code;
};

Blockly.Blocks['arduino_car_rotate_right'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.MOTOR_ROTATE_RIGHT);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.customFunction.HUE);
    this.setTooltip(Blockly.Msg.MOTOR_ROTATE_RIGHT_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['arduino_car_rotate_right'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'mcRotateRight();';
  return code;
};

Blockly.Blocks['arduino_bil_rotate_left'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.MOTOR_ROTATE_LEFT);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.customFunction.HUE);
    this.setTooltip(Blockly.Msg.MOTOR_ROTATE_LEFT_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['arduino_bil_rotate_left'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'mcRotateLeft();';
  return code;
};

Blockly.Blocks['arduino_car_analog_speed'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.MOTOR_SPEED);
    this.appendValueInput("LEFT_SIDE")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.MOTOR_LEFT);
    this.appendValueInput("RIGHT_SIDE")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.MOTOR_RIGHT);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.customFunction.HUE);
    this.setTooltip(Blockly.Msg.MOTOR_SPEED_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['arduino_car_analog_speed'] = function(block) {
  var value_left_side = Blockly.Arduino.getValueForVariable(block, 'LEFT_SIDE', Blockly.Arduino.ORDER_ATOMIC);
  var value_right_side = Blockly.Arduino.getValueForVariable(block, 'RIGHT_SIDE', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'mcAnalogSpeed(' + value_left_side + ',' + value_right_side + ');';
  return code;
};

Blockly.Blocks['arduino_car_set_speed'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.MOTOR_SPEED);
    this.appendValueInput("speed")
      .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.customFunction.HUE);
    this.setTooltip(Blockly.Msg.MOTOR_SPEED_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['arduino_car_set_speed'] = function(block) {
  var value_speed = Blockly.Arduino.getValueForVariable(block, 'speed', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'mcSetSpeed(' + value_speed + ');';
  return code;
};

//** //ARDUINO BIL **/

//** Ultrasonic Sensor **/
Blockly.Arduino['ultrasonic_init'] = function(block) {
  var value_trigpin = Blockly.Arduino.getValueForVariable(block, 'trigPin', Blockly.Arduino.ORDER_ATOMIC);
  var value_echopin = Blockly.Arduino.getValueForVariable(block, 'echoPin', Blockly.Arduino.ORDER_ATOMIC);


  var code = 'int trigPin = ' + value_trigpin + ";";
  code += 'int echoPin = ' + value_echopin + ";\n";

  code += 'int ultrasonicDistance() {';
  code += 'int timeMicroseconds = 0;';
  code += 'float distance = 0;';
  code += 'digitalWrite(trigPin, LOW);';
  code += 'delay(2);';
  code += 'digitalWrite(trigPin, HIGH);';
  code += 'delay(5);';
  code += 'digitalWrite(trigPin, LOW);';
  code += 'timeMicroseconds = pulseIn(echoPin, HIGH);';
  code += 'distance = (timeMicroseconds / 2) * 0.034;';
  code += 'return (int)distance;';
  code += '}';

  return code;
};

Blockly.Blocks['ultrasonic_init'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ULTRASONIC_INITIALIZE_INIT);
    this.appendValueInput("trigPin")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("trigPin");
    this.appendValueInput("echoPin")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("echoPin");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.customFunction.HUE);
    this.setTooltip(Blockly.Msg.ULTRASONIC_INITIALIZE_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['ultrasonic_setup'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ULTRASONIC_SETUP);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.customFunction.HUE);
    this.setTooltip(Blockly.Msg.ULTRASONIC_SETUP_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['ultrasonic_setup'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'pinMode(trigPin, OUTPUT);';
  code += 'pinMode(echoPin, INPUT);';
  return code;
};

Blockly.Blocks['ultrasonic_distance'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ULTRASONIC_DISTANCE);
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.customFunction.HUE);
    this.setTooltip(Blockly.Msg.ULTRASONIC_DISTANCE_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['ultrasonic_distance'] = function(block) {
  var code = 'ultrasonicDistance()';
  return code;
};

//** //Ultrasonic Sensor **/

//** Servo **/
Blockly.Blocks['servo_include'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.SERVO_INCLUDE);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.customFunction.HUE);
    this.setTooltip(Blockly.Msg.SERVO_INCLUDE_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['servo_include'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '#include <Servo.h>\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

Blockly.Blocks['servo_attach'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.SERVO_ATTACH)
      .appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLES_DEFAULT_NAME), 'VAR');
    this.appendValueInput("VALUE")
      .appendField(Blockly.Msg.SERVO_ATTACH_TO_PIN);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.customFunction.HUE);
    this.setTooltip(Blockly.Msg.SERVO_ATTACH_TOOLTIP);
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

Blockly.Arduino['servo_attach'] = function (block) {
  var variable_var_name = Blockly.Arduino.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var variable_value = Blockly.Arduino.getValueForVariable(block, "VALUE");

  // TODO: Assemble JavaScript into code variable.
  var code = variable_var_name + '.attach(' + variable_value + ");";
  return code;
};

Blockly.Blocks['servo_write'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.SERVO_WRITE);
    this.appendValueInput("servo")
      .setCheck(null);
    this.appendValueInput("angle")
      .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.customFunction.HUE);
    this.setTooltip(Blockly.Msg.SERVO_WRITE_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};


Blockly.Arduino['servo_write'] = function(block) {
  var value_servo = Blockly.Arduino.getValueForVariable(block, 'servo', Blockly.Arduino.ORDER_ATOMIC);
  var value_angle = Blockly.Arduino.getValueForVariable(block, 'angle', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_servo + '.write(' + value_angle + ');';
  return code;
};
//** //Servo **/

//** OLED **/

Blockly.Blocks['oled_include'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.OLED_INCLUDE);
    this.setColour(Blockly.Blocks.customFunction.HUE);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.OLED_INCLUDE_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['oled_include'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '#include <SPI.h>\n\n';
  code += '#include <Wire.h>\n\n';
  code += '#include <Adafruit_GFX.h>\n\n';
  code += '#include <Adafruit_SSD1306.h>\n\n';

  code += '#define OLED_RESET 4\n\n';
  code += 'Adafruit_SSD1306 display(OLED_RESET);\n';
  return code;
};

Blockly.Blocks['oled_setup'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.OLED_SETUP);
    this.setColour(Blockly.Blocks.customFunction.HUE);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.OLED_SETUP_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['oled_setup'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '// initialize with the I2C addr 0x3C (for the 128x32)\n';
  code += 'display.begin(SSD1306_SWITCHCAPVCC, 0x3C);';
  code += 'display.setTextSize(1);';
  code += 'display.setTextColor(WHITE);';

  code += 'display.clearDisplay();';
  return code;
};

Blockly.Blocks['oled_draw_pixel'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.OLED_DRAW_PIXEL);
    this.appendValueInput("x")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("X:");
    this.appendValueInput("y")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Y:");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.customFunction.HUE);
    this.setTooltip(Blockly.Msg.OLED_DRAW_PIXEL_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['oled_draw_pixel'] = function(block) {
  var value_x = Blockly.Arduino.getValueForVariable(block, 'x', Blockly.Arduino.ORDER_ATOMIC);
  var value_y = Blockly.Arduino.getValueForVariable(block, 'y', Blockly.Arduino.ORDER_ATOMIC);

  // TODO: Assemble JavaScript into code variable.
  var code = 'display.drawPixel(' + value_x + ', ' + value_y + ', WHITE);';
  return code;
};

Blockly.Blocks['oled_set_cursor'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.OLED_SET_CURSOR);
    this.appendValueInput("x")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("X:");
    this.appendValueInput("y")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Y:");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.customFunction.HUE);
    this.setTooltip(Blockly.Msg.OLED_SET_CURSOR_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['oled_set_cursor'] = function(block) {
  var value_x = Blockly.Arduino.getValueForVariable(block, 'x', Blockly.Arduino.ORDER_ATOMIC);
  var value_y = Blockly.Arduino.getValueForVariable(block, 'y', Blockly.Arduino.ORDER_ATOMIC);

  // TODO: Assemble JavaScript into code variable.
  var code = 'display.setCursor(' + value_x + ', ' + value_y + ');';
  return code;
};

Blockly.Blocks['oled_print'] = {
  init: function() {
    this.appendValueInput("text")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OLED_PRINT);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.customFunction.HUE);
    this.setTooltip(Blockly.Msg.OLED_PRINT_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['oled_print'] = function(block) {
  var value_text = Blockly.Arduino.getValueForVariable(block, 'text', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'display.print(' + value_text + ');';
  return code;
};

Blockly.Blocks['oled_update_display'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.OLED_UPDATE_DISPLAY);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.customFunction.HUE);
    this.setTooltip(Blockly.Msg.OLED_UPDATE_DISPLAY_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['oled_update_display'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'display.display();';
  return code;
};

Blockly.Blocks['oled_clear_display'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.OLED_CLEAR_DISPLAY);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.customFunction.HUE);
    this.setTooltip(Blockly.Msg.OLED_CLEAR_DISPLAY_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['oled_clear_display'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'display.clearDisplay();';
  return code;
};

//** //OLED **/

//** EEPRPOM **/

Blockly.Blocks['eeprom_include'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.EEPROM_INCLUDE);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.customFunction.HUE);
    this.setTooltip(Blockly.Msg.EEPROM_INCLUDE_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['eeprom_include'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '#include <EEPROM.h>\n';
  return code;
};


Blockly.Blocks['eeprom_write'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.EEPROM_WRITE);
    this.appendValueInput("address")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.EEPROM_WRITE_ADDRESS);
    this.appendValueInput("value")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.EEPROM_WRITE_VALUE);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.customFunction.HUE);
    this.setTooltip(Blockly.Msg.EEPROM_WRITE_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['eeprom_write'] = function(block) {
  var value_address = Blockly.Arduino.getValueForVariable(block, 'address', Blockly.Arduino.ORDER_ATOMIC);
  var value_value = Blockly.Arduino.getValueForVariable(block, 'value', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'EEPROM.write(' + value_address + ',' + value_value + ');';
  return code;
};

Blockly.Blocks['eeprom_update'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.EEPROM_UPDATE);
    this.appendValueInput("address")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.EEPROM_WRITE_ADDRESS);
    this.appendValueInput("value")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.EEPROM_WRITE_VALUE);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.customFunction.HUE);
    this.setTooltip(Blockly.Msg.EEPROM_UPDATE_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['eeprom_update'] = function(block) {
  var value_address = Blockly.Arduino.getValueForVariable(block, 'address', Blockly.Arduino.ORDER_ATOMIC);
  var value_value = Blockly.Arduino.getValueForVariable(block, 'value', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'EEPROM.update(' + value_address + ',' + value_value + ');';
  return code;
};

Blockly.Blocks['eeprom_read'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.EEPROM_READ);
    this.appendValueInput("address")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.EEPROM_READ_ADDRESS);
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.customFunction.HUE);
    this.setTooltip(Blockly.Msg.EEPROM_READ_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['eeprom_read'] = function(block) {
  var value_address = Blockly.Arduino.getValueForVariable(block, 'address', Blockly.Arduino.ORDER_ATOMIC);
  var value_value = Blockly.Arduino.getValueForVariable(block, 'value', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'EEPROM.read(' + value_address + ')';
  return code;
};

Blockly.Blocks['eeprom_length'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.EEPROM_LENGTH);
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.customFunction.HUE);
    this.setTooltip(Blockly.Msg.EEPROM_LENGTH_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['eeprom_length'] = function(block) {
  var value_address = Blockly.Arduino.getValueForVariable(block, 'address', Blockly.Arduino.ORDER_ATOMIC);
  var value_value = Blockly.Arduino.getValueForVariable(block, 'value', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'EEPROM.length()';
  return code;
};

//** //EEPROM **/

//** 433 Mhz **/
Blockly.Msg.RF_RECEIVER_433_INIT = "Initialiser 433MHz biblioteket for å motta signal";
Blockly.Msg.RF_SENDER_433_INIT = "Initialiser 433MHz biblioteket for å sende signal";
Blockly.Msg.RF_PIN = "RF Pin";
Blockly.Msg.RF_NODE_ID = "RF Node Id";
Blockly.Msg.RF_SENDER_433_SEND = "Send data via radio";
Blockly.Msg.RF_TEXT = "Tekst";
Blockly.Msg.RF_TALL_1 = "Tall 1";
Blockly.Msg.RF_TALL_2 = "Tall 2";
Blockly.Msg.RF_RECEIVER_433_TOOLTIP = "Bruk denne klossen for å inkludere bibliotek for å bruke 433 MHz modulen";
Blockly.Msg.RF_RECEIVER_433_SETUP = "RF 433 MHz setup";
Blockly.Msg.RF_RECEIVER_433_SETUP_TOOLTIP = "Plasser denne klossen i setup for å bruke 433 MHz senderen";
Blockly.Msg.RF_RECEIVER_433_READ= "Les fra RF 433 og lagre i variabel";
Blockly.Msg.RF_RECEIVER_433_READ_TOOLTIP= "Bruk denne klossen for å lese fra RF433";


Blockly.Blocks['rf_receiver433_init'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.RF_RECEIVER_433_INIT);
    this.appendValueInput("rfPin")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.RF_PIN);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.customFunction.HUE);
    this.setTooltip(Blockly.Msg.RF_RECEIVER_433_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['rf_receiver433_init'] = function(block) {
  var value_pin= Blockly.Arduino.getValueForVariable(block, 'rfPin', Blockly.Arduino.ORDER_NONE);

  // TODO: Assemble JavaScript into code variable.
  var code = '\n#include <RFReceiver.h>\n\n';
  code += '\n#include <PinChangeInterruptHandler.h>\n\n';
  code += 'RFReceiver receiver(' + value_pin + ');\n\n';

  /*
   char msg[MAX_PACKAGE_SIZE];
   byte senderId = 0;
   byte packageId = 0;
   byte len = receiver.recvPackage((byte *)msg, &senderId, &packageId);
   */

  return code;
};


Blockly.Blocks['rf_sender433_init'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.RF_SENDER_433_INIT);
    this.appendValueInput("rfPin")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.RF_PIN);
    this.appendValueInput("nodeId")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.RF_NODE_ID);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.customFunction.HUE);
    this.setTooltip(Blockly.Msg.RF_RECEIVER_433_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['rf_sender433_init'] = function(block) {
  var value_pin = Blockly.Arduino.getValueForVariable(block, 'rfPin', Blockly.Arduino.ORDER_NONE);
  var node_id = Blockly.Arduino.getValueForVariable(block, 'nodeId', Blockly.Arduino.ORDER_NONE);

  // TODO: Assemble JavaScript into code variable.
  var code = '\n#include <RFTransmitter.h>\n\n';
  code += 'RFTransmitter transmitter(' + value_pin + ', ' + node_id + ', 100, 100, 0);';

  return code;
};

Blockly.Blocks['rf_sender433_send'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.RF_SENDER_433_SEND);
    this.appendValueInput("tekst")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.RF_TEXT);
    this.appendValueInput("tall1")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.RF_NUMBER_1);
    this.appendValueInput("tall2")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.RF_NUMBER_2);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.customFunction.HUE);
    this.setTooltip(Blockly.Msg.RF_RECEIVER_433_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['rf_sender433_send'] = function(block) {
  var tekst = Blockly.Arduino.getValueForVariable(block, 'tekst', Blockly.Arduino.ORDER_NONE);
  var tall1 = Blockly.Arduino.getValueForVariable(block, 'tall1', Blockly.Arduino.ORDER_NONE);
  var tall2 = Blockly.Arduino.getValueForVariable(block, 'tall2', Blockly.Arduino.ORDER_NONE);

  // TODO: Assemble JavaScript into code variable.

  var packetLength = tekst.length - 2 + (tall1 + "").length + (tall2 + "").length;

  var code = "char radiopacket[" + packetLength + "];";
  code += 'sprintf(radiopacket, "%s%d%d", ' + tekst + ', ' + tall1 + ', ' + tall2 + ');';
  code += "transmitter.send((byte *)radiopacket, strlen(radiopacket) + 1);";

  return code;
};

Blockly.Blocks['rf_receiver433_setup'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.RF_RECEIVER_433_SETUP);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.customFunction.HUE);
    this.setTooltip(Blockly.Msg.RF_RECEIVER_433_SETUP_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['rf_receiver433_setup'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '\nreceiver.begin();';
  return code;
};

Blockly.Blocks['rf_receiver433_read'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.RF_RECEIVER_433_READ);
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLES_DEFAULT_NAME), 'VAR');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.customFunction.HUE);
    this.setTooltip(Blockly.Msg.RF_RECEIVER_433_SETUP_TOOLTIP);
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



Blockly.Arduino['rf_receiver433_read'] = function(block) {
  var variable_var_name = Blockly.Arduino.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var variable_value = Blockly.Arduino.getValueForVariable(block, "VALUE");

  // TODO: Assemble JavaScript into code variable.
  code = '\tchar ' + variable_var_name + '[MAX_PACKAGE_SIZE];';
  code += "\tbyte " + variable_var_name + "_senderId = 0;";
  code += "\tbyte " + variable_var_name + "_packageId = 0;";
  code += "\tbyte len = receiver.recvPackage((byte *)" + variable_var_name + ", &" + variable_var_name + "_senderId, &" + variable_var_name + "_packageId);";
  return code;
};


Blockly.Blocks['extract_from_array'] = {
  init: function() {
    this.appendValueInput("number")
      .setCheck(null)
      .appendField("hent element nummer");
    this.appendDummyInput()
      .appendField("fra liste");
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLES_DEFAULT_NAME), 'VAR');
    this.setOutput(true, null);
    this.setInputsInline(true);
    this.setColour(Blockly.Blocks.variables.HUE);
    this.setTooltip('');
    this.setHelpUrl('');
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


Blockly.Arduino['extract_from_array'] = function(block) {
  var value_name = Blockly.Arduino.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var value_number = Blockly.Arduino.getValueForVariable(block, "number");

  // TODO: Assemble JavaScript into code variable.
  var code = value_name + "[" + value_number + "]";
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

Blockly.Blocks['char_to_int'] = {
  init: function() {
    this.appendValueInput("input")
      .setCheck(null)
      .appendField("konverter char til int");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(267);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Arduino['char_to_int'] = function(block) {
  var value_name = Blockly.Arduino.statementToCode(block, 'input');

  // TODO: Assemble JavaScript into code variable.
  var code = value_name + " - '0'";
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};
/** //433 MHz **/

//** DHT11/22 **/

Blockly.Blocks['dht11_init'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.DHT_INIT);
    this.appendValueInput("dhtPin")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.DHT_INIT_PORT);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.customFunction.HUE);
    this.setTooltip(Blockly.Msg.DHT_INIT_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['dht11_init'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.DHT_INIT);
    this.appendValueInput("dhtPin")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.DHT_INIT_PORT);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.customFunction.HUE);
    this.setTooltip(Blockly.Msg.DHT_INIT_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};

//** // 433 MHz **/

//** DHT11/22 **/

Blockly.Arduino['dht11_init'] = function(block) {
  var value_pin= Blockly.Arduino.getValueForVariable(block, 'dhtPin', Blockly.Arduino.ORDER_NONE);
  // TODO: Assemble JavaScript into code variable.
  var code = '\n#include <DHT.h>\n\n';
  code += '#define DHTPIN ' + value_pin + '\n\n';
  code += '#define DHTTYPE DHT11\n\n';
  code += '// Initialiser sensor for bruk med 16MHz Arduino\n';
  code += 'DHT dht(DHTPIN, DHTTYPE);\n\n';
  return code;
};

Blockly.Blocks['dht11_setup'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.DHT_SETUP);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.customFunction.HUE);
    this.setTooltip(Blockly.Msg.DHT_SETUP_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['dht11_setup'] = function(block) {
  var value_pin= Blockly.Arduino.getValueForVariable(block, 'dhtPin', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'dht.begin();';
  return code;
};

Blockly.Blocks['dht11_read_temp'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.DHT_TEMP);
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.customFunction.HUE);
    this.setTooltip(Blockly.Msg.DHT_TEMP_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['dht11_read_temp'] = function(block) {
  var value_pin= Blockly.Arduino.getValueForVariable(block, 'dhtPin', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'dht.readTemperature()';
  return code;
};

Blockly.Blocks['dht11_read_humidity'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.DHT_HUMIDITY);
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.customFunction.HUE);
    this.setTooltip(Blockly.Msg.DHT_HUMIDITY_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['dht11_read_humidity'] = function(block) {
  var value_pin= Blockly.Arduino.getValueForVariable(block, 'dhtPin', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'dht.readHumidity()';
  return code;
};

//** //DHT11/22 **/

/** Custom Functions **/
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

/*
 double thermistorTemp(int RawADC, boolean invertInput) {
 double temp;
 // See http://en.wikipedia.org/wiki/Thermistor for explanation of formula
 temp = log(((10240000/RawADC) - 10000));
 temp = 1 / (0.001129148 + (0.000234125 * temp) + (0.0000000876741 * temp * temp * temp));
 temp = temp - 273.15;           // Convert Kelvin to Celcius
 return temp;
 }
 */

//** //Custom Functions **/

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
