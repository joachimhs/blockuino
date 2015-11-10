Blockly.Blocks['arduino_pinmode'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Definer Pin: ")
      .appendField(new Blockly.FieldDropdown([["0", "0"], ["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"]]), "Pin");
    this.appendDummyInput()
      .appendField("som: ")
      .appendField(new Blockly.FieldDropdown([["INPUT", "INPUT"], ["OUTPUT", "OUTPUT"], ["INPUT_PULLDOWN", "INPUT_PULLDOWN"]]), "Type");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
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

Blockly.Blocks['arduino_digitalWrite'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Sett Pin: ")
      .appendField(new Blockly.FieldDropdown([["0", "0"], ["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"]]), "pin");
    this.appendDummyInput()
      .appendField("til:")
      .appendField(new Blockly.FieldDropdown([["HIGH", "HIGH"], ["LOW", "LOW"]]), "type");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['arduino_digitalWrite'] = function (block) {
  var dropdown_pin = block.getFieldValue('pin');
  var dropdown_type = block.getFieldValue('type');
  // TODO: Assemble JavaScript into code variable.
  var code = 'digitalWrite(' + dropdown_pin + ', ' + dropdown_type + ' );';
  return code;
};

Blockly.Blocks['arduino_setup'] = {
  init: function () {
    this.appendStatementInput("setup")
      .setCheck(null)
      .appendField("setup");
    this.setInputsInline(true);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['arduino_setup'] = function (block) {
  var statements_setup = Blockly.Arduino.statementToCode(block, 'setup');

  console.log('SETUP:');
  console.log(statements_setup);

  // TODO: Assemble JavaScript into code variable.
  var code = 'void setup() {' + statements_setup + '}';
  return code;
};

Blockly.Blocks['arduino_loop'] = {
  init: function () {
    this.appendStatementInput("loop")
      .setCheck(null)
      .appendField("loop");
    this.setInputsInline(true);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip('');
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
      .appendField("Vent i ")
      .appendField(new Blockly.FieldTextInput("500"), "delay")
      .appendField(" millisekunder ");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
    this.setTooltip('');
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
      .appendField("Lag ny variabel med navn: ")
      .appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLES_DEFAULT_NAME), 'VAR')
      .appendField(" og type: ")
      .appendField(new Blockly.FieldDropdown([["int", "int"], ["string", "string"], ["boolean", "boolean"]]), "type");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(260);
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

Blockly.Arduino['arduino_declare_variable'] = function (block) {
  var variable_var_name = Blockly.Arduino.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var dropdown_type = block.getFieldValue('type');
  // TODO: Assemble JavaScript into code variable.
  var code = dropdown_type + ' ' + variable_var_name + ";";
  return code;
};

Blockly.Blocks['arduino_set_variable'] = {
  init: function () {
    this.appendValueInput("VAR")
      .setCheck("String")
      .appendField("Gi variabel: ");
    this.appendValueInput("variable_value")
      .setCheck(null)
      .appendField(" verdien: ");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  },

  getVars: function () {
    return [this.getFieldValue('VAR')];
  }
};

Blockly.Arduino['arduino_set_variable'] = function (block) {
  var value_variable_name = Blockly.Arduino.statementToCode(block, 'VAR');

  var value_variable_value = Blockly.Arduino.valueToCode(block, 'variable_value');
  // TODO: Assemble JavaScript into code variable.
  var code = value_variable_name + ' =  ' + value_variable_value + ";";
  return code;
};

Blockly.Blocks['arduino_variable'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Variabel: ")
      .appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLES_DEFAULT_NAME), 'VAR');
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(260);
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

Blockly.Blocks['arduino_variable_value'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Verdi: ")
      .appendField(new Blockly.FieldTextInput(""), "variable_value");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['arduino_variable_value'] = function (block) {
  var text_variable_value = block.getFieldValue('variable_value');

  console.log(typeof text_variable_value);

  // TODO: Assemble JavaScript into code variable.
  var code = text_variable_value;

  var numberRegex = /^[0-9]+$/

  if (text_variable_value.match(numberRegex)) {
    code = parseInt(text_variable_value);
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

Blockly.Arduino['controls_repeat_ext'] = function (block) {
  // Repeat n times.
  var repeats = 0;
  console.log('repeats: ');

  if (block.getField('TIMES')) {
    // Internal number.
    console.log('internal');
    repeats = String(Number(block.getFieldValue('TIMES')));
  } else {
    // External number.
    console.log('external');
    repeats = Blockly.Arduino.valueToCode(block, 'TIMES', Blockly.Arduino.ORDER_ATOMIC) || '0';

    if (repeats === 'e') {
      repeats = Blockly.Arduino.statementToCode(block, 'TIMES', Blockly.Arduino.ORDER_ATOMIC) || '0';
    }

    if (repeats.indexOf("(") == 0 && repeats.indexOf(")") == repeats.length-1) {
      repeats = repeats.substr(1, repeats.length-2);
    }
  }

  console.log(repeats);

  var branch = Blockly.Arduino.statementToCode(block, 'DO');
  branch = Blockly.Arduino.addLoopTrap(branch, block.id);
  var code = '';
  var loopVar = Blockly.Arduino.variableDB_.getDistinctName('count', Blockly.Variables.NAME_TYPE);
  var endVar = repeats;
  /*if (!repeats.match(/^\w+$/) && !Blockly.isNumber(repeats)) {
    var endVar = Blockly.Arduino.variableDB_.getDistinctName('repeat_end', Blockly.Variables.NAME_TYPE);
    code += 'var ' + endVar + ' = ' + repeats + ';\n';
  }*/
  code += 'for (var ' + loopVar + ' = 0; ' +
  loopVar + ' < ' + endVar + '; ' +
  loopVar + '++) {\n' +
  branch + '}\n';
  return code;
};

Blockly.Blocks['arduino_declare_function'] = {
  init: function() {
    this.appendStatementInput("NAME")
      .setCheck(null)
      .appendField("Ny funksjon: ")
      .appendField(new Blockly.FieldVariable("function"), "FUNCTION")
      .appendField("som returnerer: ")
      .appendField(new Blockly.FieldDropdown([["void", "void"], ["int", "int"], ["string", "string"], ["double", "double"], ["boolean", "boolean"]]), "TYPE");
    this.setColour(20);
    this.setTooltip('');
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
  var code = dropdown_type + " function " + text_funktion + "() { " + statements_name + "}";
  return code;
};

Blockly.Blocks['arduino_function'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Function: ")
      .appendField(new Blockly.FieldVariable("function"), "FUNCTION");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip('');
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
    this.appendDummyInput()
      .appendField("Gjenta fra ");
    this.appendValueInput("FROM")
      .setCheck(null);
    this.appendDummyInput()
      .appendField("til");
    this.appendValueInput("TO");
    this.appendStatementInput("STATEMENT");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['arduino_for'] = function(block) {
  var value_from = Blockly.Arduino.valueToCode(block, 'FROM', Blockly.Arduino.ORDER_ATOMIC);

  if (value_from === 'e') {
    value_from = Blockly.Arduino.statementToCode(block, 'FROM', Blockly.Arduino.ORDER_ATOMIC);
  }

  var value_to = Blockly.Arduino.valueToCode(block, 'TO', Blockly.Arduino.ORDER_ATOMIC);

  if (value_to.length === 1) {
    value_to = Blockly.Arduino.statementToCode(block, 'TO', Blockly.Arduino.ORDER_ATOMIC);
  }

  var statements_statement = Blockly.Arduino.statementToCode(block, 'STATEMENT');
  // TODO: Assemble JavaScript into code variable.
  var code = 'for (int index = ' + value_from + "; index < " + value_to + '; index++) { ' + statements_statement + '};';
  return code;
};
