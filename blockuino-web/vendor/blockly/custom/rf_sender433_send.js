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
