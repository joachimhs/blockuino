Blockly.Blocks['arduino_car_variables'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.MOTOR_INIT);
    this.appendValueInput("ena")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("ena");
    this.appendValueInput("in1")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("in1");
    this.appendValueInput("in2")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("in2");
    this.appendValueInput("enb")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("enb");
    this.appendValueInput("in3")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("in3");
    this.appendValueInput("in4")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("in4");
    this.appendValueInput("motorSpeed")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.MOTOR_INIT_SPEED);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.motorHue.HUE);
    this.setTooltip(Blockly.Msg.MOTOR_INIT_TOOLTIP);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Arduino['arduino_car_variables'] = function(block) {
  var value_ena = Blockly.Arduino.getValueForVariable(block, 'ena', Blockly.Arduino.ORDER_ATOMIC);
  var value_in1 = Blockly.Arduino.getValueForVariable(block, 'in1', Blockly.Arduino.ORDER_ATOMIC);
  var value_in2 = Blockly.Arduino.getValueForVariable(block, 'in2', Blockly.Arduino.ORDER_ATOMIC);
  var value_enb = Blockly.Arduino.getValueForVariable(block, 'enb', Blockly.Arduino.ORDER_ATOMIC);
  var value_in3 = Blockly.Arduino.getValueForVariable(block, 'in3', Blockly.Arduino.ORDER_ATOMIC);
  var value_in4 = Blockly.Arduino.getValueForVariable(block, 'in4', Blockly.Arduino.ORDER_ATOMIC);
  var value_speed = Blockly.Arduino.getValueForVariable(block, 'motorSpeed', Blockly.Arduino.ORDER_ATOMIC);

  // TODO: Assemble JavaScript into code variable.
  var code = 'int ena = ' + value_ena + ';';
  code += 'int in1 = ' + value_in1 + ';';
  code += 'int in2 = ' + value_in2 + ';';
  code += 'int enb = ' + value_enb + ';';
  code += 'int in3 = ' + value_in3 + ';';
  code += 'int in4 = ' + value_in4 + ';';
  code += 'int motorSpeed = ' + value_speed + ';';

  code += '/* Functions for Arduino Car **/\n';

  code += 'void mcStop() {';
  code += 'analogWrite(ena, motorSpeed);';
  code += 'analogWrite(enb, motorSpeed);\n';

  code += 'digitalWrite(in1, LOW);';
  code += 'digitalWrite(in2, LOW);\n';

  code += 'digitalWrite(in3, LOW);';
  code += 'digitalWrite(in4, LOW);';
  code += "}";

  code += 'void mcForwards() {';
  code += 'analogWrite(ena, motorSpeed);';
  code += 'analogWrite(enb, motorSpeed);\n';

  code += 'digitalWrite(in1, HIGH);';
  code += 'digitalWrite(in2, LOW);\n';

  code += 'digitalWrite(in3, HIGH);';
  code += 'digitalWrite(in4, LOW);';
  code += "}";

  code += 'void mcBackwards() {';
  code += 'analogWrite(ena, motorSpeed);';
  code += 'analogWrite(enb, motorSpeed);\n';

  code += 'digitalWrite(in1, LOW);';
  code += 'digitalWrite(in2, HIGH);\n';

  code += 'digitalWrite(in3, LOW);';
  code += 'digitalWrite(in4, HIGH);';
  code += "}";

  code += 'void mcRotateRight() {';
  code += 'analogWrite(ena, motorSpeed);';
  code += 'analogWrite(enb, motorSpeed);\n';

  code += 'digitalWrite(in1, LOW);';
  code += 'digitalWrite(in2, HIGH);\n';

  code += 'digitalWrite(in3, HIGH);';
  code += 'digitalWrite(in4, LOW);';
  code += "}";

  code += 'void mcRotateLeft() {';
  code += 'analogWrite(ena, motorSpeed);';
  code += 'analogWrite(enb, motorSpeed);\n';

  code += 'digitalWrite(in1, HIGH);';
  code += 'digitalWrite(in2, LOW);\n';

  code += 'digitalWrite(in3, LOW);';
  code += 'digitalWrite(in4, HIGH);';
  code += "}";

  code += 'void mcAnalogSpeed(int left, int right) {';
  code += 'if (left < -255) { left = -255; }';
  code += 'if (left > 255) { left = 255; }';
  code += 'if (right < -255) { right = -255; }';
  code += 'if (right > 255) { right = 255; }';

  code += 'analogWrite(ena, abs(left));';
  code += 'analogWrite(enb, abs(right));';

  code += 'if (left < 0) { digitalWrite(in1, HIGH); digitalWrite(in2, LOW); }';
  code += 'else { digitalWrite(in1, LOW); digitalWrite(in2, HIGH); }';

  code += 'if (right < 0) { digitalWrite(in3, HIGH); digitalWrite(in4, LOW); }';
  code += 'else { digitalWrite(in3, LOW); digitalWrite(in4, HIGH); }';
  code += "}";

  code += 'void mcRfSpeed(int y, int x) {';
  code += 'int hastighetL = map(y + (x-5), 0, 9, 0, 511) - 255;';
  code += 'int hastighetR = map(y - (x-5), 0, 9, 0, 511) - 255;';

  code += '\n//If speed is little, dont run the motors\n';
  code += 'if (abs(hastighetL) < 100) {';
  code += 'hastighetL = 0;';
  code += '}';

  code += 'if (abs(hastighetR) < 100) {';
  code += 'hastighetR = 0;';
  code += '}';

  code += 'mcAnalogSpeed(hastighetL, hastighetR);';
  code += '}';

  code += '/** //Functions for Arduino Car **/\n';
  return code;
};
