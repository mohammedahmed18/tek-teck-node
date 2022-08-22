Blockly.Python['ir_read'] = function(block) {
  Blockly.Python.definitions_['import_IR'] = 'import IR';

  var dropdown_pin = block.getFieldValue('pin');

  var code = `IR.read(${dropdown_pin})`;
  return [code, Blockly.Python.ORDER_NONE];
};
