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

