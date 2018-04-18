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

Blockly.Blocks.ledPixelsHue = {
  HUE: 165
};

Blockly.Blocks.motorHue = {
  HUE: 270
};

Blockly.Blocks['arduino_array_create'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Lag liste med navn")
      .appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLES_DEFAULT_NAME), 'VAR');
    this.appendValueInput("LENGTH")
      .appendField("med antall elementer");
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ARDUINO_DECLARE_VARIABLE_TYPE)
      .appendField(new Blockly.FieldDropdown([["int", "int"], ["double", "double"], ["float", "float"], ["String", "String"], ["boolean", "boolean"]]), "type");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.variables.HUE);
    this.setTooltip("");
    this.setHelpUrl("");
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

Blockly.Arduino['arduino_array_create'] = function (block) {
  var variable_var_name = Blockly.Arduino.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var variable_length = Blockly.Arduino.getValueForVariable(block, "LENGTH");
  var dropdown_type = block.getFieldValue('type');

  var code = dropdown_type + ' ' + variable_var_name + "[" + variable_length + "];\n\n";
  return code;
};

Blockly.Blocks['arduino_array_set'] = {
  init: function() {
    this.appendValueInput("INDEX")
      .appendField("Sett liste element nummer:");
    this.appendDummyInput()
      .appendField("for liste: ")
      .appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLES_DEFAULT_NAME), 'VAR');
    this.appendValueInput("VALUE")
      .appendField("til verdi: ");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.variables.HUE);
    this.setTooltip("");
    this.setHelpUrl("");
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

Blockly.Arduino['arduino_array_set'] = function (block) {
  var variable_var_name = Blockly.Arduino.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var variable_index= Blockly.Arduino.getValueForVariable(block, "INDEX");
  var variable_value = Blockly.Arduino.getValueForVariable(block, "VALUE");

  var code = variable_var_name + "[" + variable_index + "] = " + variable_value + ";\n\n";
  return code;
};

Blockly.Blocks['arduino_declare_function_one_parameter'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ARDUINO_DECLARE_FUNCTION_VALUE)
      .appendField(new Blockly.FieldVariable("function"), "FUNCTION");
    this.appendDummyInput()
      .appendField("med parameter")
      .appendField(new Blockly.FieldVariable("param1_name"), "PARAM1_NAME")
      .appendField(new Blockly.FieldDropdown([["int","int"], ["string","string"], ["double", "double"], ["boolean","boolean"]]), "PARAM1_TYPE");
    this.appendDummyInput()
      .appendField(Blockly.Msg.ARDUINO_DECLARE_FUNCTION_RETURNS)
      .appendField(new Blockly.FieldDropdown([["void", "void"], ["int", "int"], ["String", "String"], ["double", "double"], ["boolean", "boolean"]]), "TYPE");
    this.appendStatementInput("CODE");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(267);
    this.setTooltip("");
    this.setHelpUrl("");
  },


  getVars: function () {
    return [this.getFieldValue('FUNCTION'), this.getFieldValue("PARAM1_NAME")];
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

    if (Blockly.Names.equals(oldName, this.getFieldValue('PARAM1_NAME'))) {
      this.setFieldValue(newName, 'PARAM1_NAME');
    }
  }
};

Blockly.Arduino['arduino_declare_function_one_parameter'] = function(block) {
  var text_funktion = block.getFieldValue('FUNCTION');
  var dropdown_type = block.getFieldValue('TYPE');
  var param1Name = block.getFieldValue('PARAM1_NAME');
  var param1Type = block.getFieldValue('PARAM1_TYPE');
  var statements_name = Blockly.Arduino.statementToCode(block, 'CODE');

  var code = '\n' + dropdown_type + " " + text_funktion + "(" + param1Type + " " + param1Name + ") { " + statements_name + "}";
  return code;
};


Blockly.Blocks['arduino_function_one_param'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ARDUINO_USE_FUNCTION_VALUE)
      .appendField(new Blockly.FieldVariable("function"), "FUNCTION");
    this.appendValueInput("PARAM_ONE")
      .setCheck(null)
      .appendField("med parameter:");
    this.setInputsInline(false);
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
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

Blockly.Arduino['arduino_function_one_param'] = function(block) {
  var variable_function = Blockly.Arduino.variableDB_.getName(block.getFieldValue('FUNCTION'), Blockly.Variables.NAME_TYPE);
  var param1Name = Blockly.Arduino.getValueForVariable(block, 'PARAM_ONE', Blockly.Arduino.ORDER_NONE);
  // param1Name
  var code = variable_function + "(" + param1Name + ")";
  return code;
};

Blockly.Blocks['arduino_pixel_matrix_pixel_number'] = {
  init: function() {
    this.appendValueInput("pixel")
      .setCheck(null)
      .appendField("LED panel pixel:");
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.ledPixelsHue.HUE);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Arduino['arduino_pixel_matrix_pixel_number'] = function(block) {
  var pixel = Blockly.Arduino.getValueForVariable(block, 'pixel', Blockly.Arduino.ORDER_ATOMIC);

  var code = 'pixel_matrixPixel(' + pixel + ')';

  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

Blockly.Blocks['arduino_pixel_matrix_move_dir'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Flytt ")
      .appendField(new Blockly.FieldDropdown([["Oppover", "Up"], ["Nedover", "Down"], ["Høyre", "Right"], ["Venstre", "Left"]]), "DIRECTION");
    this.appendValueInput("pixel")
      .setCheck(null)
      .appendField(" fra posisjon:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.ledPixelsHue.HUE);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Arduino['arduino_pixel_matrix_move_dir'] = function(block) {
  var pixel = Blockly.Arduino.getValueForVariable(block, 'pixel', Blockly.Arduino.ORDER_ATOMIC);
  var dir = block.getFieldValue('DIRECTION');

  var functionName = 'move' + dir;

  var code = pixel + ' = pixel_' + functionName + '(' + pixel + ');';

  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

Blockly.Blocks['arduino_pixel_random_color'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Tilfeldig farge ");
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.variables.HUE);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Arduino['arduino_pixel_random_color'] = function(block) {
  var pixel = Blockly.Arduino.getValueForVariable(block, 'pixel', Blockly.Arduino.ORDER_ATOMIC);
  var dir = block.getFieldValue('DIRECTION');

  var code = 'pixel_random_color()';

  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

Blockly.Blocks['arduino_pixel_matrix_move_up'] = {
  init: function() {
    this.appendValueInput("pixel")
      .setCheck(null)
      .appendField("Flytt oppover fra posisjon:");
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.ledPixelsHue.HUE);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Arduino['arduino_pixel_matrix_move_up'] = function(block) {
  var pixel = Blockly.Arduino.getValueForVariable(block, 'pixel', Blockly.Arduino.ORDER_ATOMIC);

  var code = 'pixel_moveUp(' + pixel + ')';

  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

Blockly.Blocks['arduino_pixel_matrix_move_down'] = {
  init: function() {
    this.appendValueInput("pixel")
      .setCheck(null)
      .appendField("Flytt nedover fra posisjon:");
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.ledPixelsHue.HUE);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Arduino['arduino_pixel_matrix_move_down'] = function(block) {
  var pixel = Blockly.Arduino.getValueForVariable(block, 'pixel', Blockly.Arduino.ORDER_ATOMIC);

  var code = 'pixel_moveDown(' + pixel + ')';

  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

Blockly.Blocks['arduino_pixel_matrix_move_left'] = {
  init: function() {
    this.appendValueInput("pixel")
      .setCheck(null)
      .appendField("Flytt til venstre fra posisjon:");
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.ledPixelsHue.HUE);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Arduino['arduino_pixel_matrix_move_left'] = function(block) {
  var pixel = Blockly.Arduino.getValueForVariable(block, 'pixel', Blockly.Arduino.ORDER_ATOMIC);

  var code = 'pixel_moveLeft(' + pixel + ')';

  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

Blockly.Blocks['arduino_pixel_matrix_move_right'] = {
  init: function() {
    this.appendValueInput("pixel")
      .setCheck(null)
      .appendField("Flytt til høyre fra posisjon:");
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.ledPixelsHue.HUE);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Arduino['arduino_pixel_matrix_move_right'] = function(block) {
  var pixel = Blockly.Arduino.getValueForVariable(block, 'pixel', Blockly.Arduino.ORDER_ATOMIC);

  var code = 'pixel_moveRight(' + pixel + ')';

  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

Blockly.Blocks['arduino_pixel_clear'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Slå av alle pixels");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.ledPixelsHue.HUE);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Arduino['arduino_pixel_clear'] = function(block) {
  var pixel = Blockly.Arduino.getValueForVariable(block, 'pixel', Blockly.Arduino.ORDER_ATOMIC);

  var code = 'pixel_clear();';

  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

Blockly.Blocks.math_arithmetic = {
  init: function () {
    var a = [[Blockly.Msg.MATH_ADDITION_SYMBOL, "ADD"], [Blockly.Msg.MATH_SUBTRACTION_SYMBOL, "MINUS"], [Blockly.Msg.MATH_MULTIPLICATION_SYMBOL, "MULTIPLY"], [Blockly.Msg.MATH_DIVISION_SYMBOL, "DIVIDE"], [Blockly.Msg.MATH_POWER_SYMBOL, "POWER"], [Blockly.Msg.MATH_MODULUS, "MODULUS"]];
    this.setHelpUrl(Blockly.Msg.MATH_ARITHMETIC_HELPURL);
    this.setColour(Blockly.Blocks.math.HUE);
    this.setOutput(!0, "Number");
    this.appendValueInput("A").setCheck("Number");
    this.appendValueInput("B").setCheck("Number").appendField(new Blockly.FieldDropdown(a),
      "OP");
    this.setInputsInline(!0);
    var b = this;
    this.setTooltip(function () {
      var a = b.getFieldValue("OP");
      return {
        ADD: Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_ADD,
        MINUS: Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_MINUS,
        MULTIPLY: Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_MULTIPLY,
        DIVIDE: Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_DIVIDE,
        POWER: Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_POWER
      }[a]
    })
  }
};
