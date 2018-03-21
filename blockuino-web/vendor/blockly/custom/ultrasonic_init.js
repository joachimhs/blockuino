Blockly.Arduino['ultrasonic_init'] = function(block) {
  var value_trigpin = Blockly.Arduino.getValueForVariable(block, 'trigPin', Blockly.Arduino.ORDER_ATOMIC);
  var value_echopin = Blockly.Arduino.getValueForVariable(block, 'echoPin', Blockly.Arduino.ORDER_ATOMIC);


  var code = 'int trigPin = ' + value_trigpin + ";";
  code += 'int echoPin = ' + value_echopin + ";\n";

  code += 'int ultrasonicDistance() {';
  code += 'int timeMicroseconds = 0;';
  code += 'float distance = 0;';
  code += 'digitalWrite(trigPin, LOW);';
  code += 'delay(2);';
  code += 'digitalWrite(trigPin, HIGH);';
  code += 'delay(5);';
  code += 'digitalWrite(trigPin, LOW);';
  code += 'timeMicroseconds = pulseIn(echoPin, HIGH);';
  code += 'distance = (timeMicroseconds / 2) * 0.034;';
  code += 'return (int)distance;';
  code += '}';

  return code;
};

Blockly.Blocks['ultrasonic_init'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ULTRASONIC_INITIALIZE_INIT);
    this.appendValueInput("trigPin")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("trigPin");
    this.appendValueInput("echoPin")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("echoPin");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.customFunction.HUE);
    this.setTooltip(Blockly.Msg.ULTRASONIC_INITIALIZE_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};
