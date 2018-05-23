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

