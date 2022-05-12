
Blockly.Python['ultrasonic_read'] = function(block) {
  Blockly.Python.definitions_['import_ultrasonic'] = 'import Ultrasonic';

  var dropdown_trig = block.getFieldValue('trig');
  var dropdown_echo = block.getFieldValue('echo');

  var code = `Ultrasonic.read(${dropdown_trig}, ${dropdown_echo})`;
  return [code, Blockly.Python.ORDER_NONE];
};
