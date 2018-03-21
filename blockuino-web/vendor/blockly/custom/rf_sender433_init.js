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
