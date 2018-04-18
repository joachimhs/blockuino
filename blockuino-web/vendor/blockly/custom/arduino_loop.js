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
