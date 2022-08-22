Blockly.Python['motor_forward'] = function(block) {
  Blockly.Python.definitions_['import_motor'] = 'import motor';

  var code = `motor.forward()\n`;
  return code;
};

Blockly.Python['motor_backward'] = function(block) {
  Blockly.Python.definitions_['import_motor'] = 'import motor';


  var code = `motor.backward()\n`;
  return code;
};

Blockly.Python['motor_turn_left'] = function(block) {
  Blockly.Python.definitions_['import_motor'] = 'import motor';
  var value_angle = Blockly.Python.valueToCode(block, 'angle', Blockly.Python.ORDER_ATOMIC);
  
  var code = `motor.turn_left(${value_angle})\n`;
  return code;
};

Blockly.Python['motor_turn_right'] = function(block) {
  Blockly.Python.definitions_['import_motor'] = 'import motor';
  var value_angle = Blockly.Python.valueToCode(block, 'angle', Blockly.Python.ORDER_ATOMIC);

  var code = `motor.turn_right(${value_angle})\n`;
  return code;
};



Blockly.Python['motor_stop'] = function(block) {
  Blockly.Python.definitions_['import_motor'] = 'import motor';

  var code = `motor.stop()\n`;
  return code;
};