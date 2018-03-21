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
