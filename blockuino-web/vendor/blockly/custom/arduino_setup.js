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
