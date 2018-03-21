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
