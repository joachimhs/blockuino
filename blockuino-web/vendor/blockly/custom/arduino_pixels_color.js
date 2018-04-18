Blockly.Blocks['arduino_pixels_color'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Farge:")
      .appendField(new Blockly.FieldDropdown([["Red","r"], ["Green","g"], ["Blue","b"], ["Yellow","y"], ["Turquoise","t"], ["Purple","p"]]), "color");
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.ledPixelsHue.HUE);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Arduino['arduino_pixels_color'] = function(block) {
  var dropdown_color = block.getFieldValue('color');

  // TODO: Assemble JavaScript into code variable.
  var code = '';
  if(dropdown_color === 'r') {
    code = 'strip.Color(100, 0, 0)'
  }
  else if(dropdown_color === 'g') {
    code = 'strip.Color(0, 100, 0)'
  }

  else if(dropdown_color === 'b'){
    code = 'strip.Color(0, 0, 100)'
  }

  else if(dropdown_color === 'y'){
    code = 'strip.Color(255, 255, 0)'
  }

  else if(dropdown_color === 't'){
    code = 'strip.Color(0, 255, 255)'
  }

  else if(dropdown_color === 'p'){
    code = 'strip.Color(204, 204, 0)'
  }
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};
