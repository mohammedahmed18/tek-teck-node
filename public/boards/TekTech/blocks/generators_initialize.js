Blockly.Python['initialize'] = function(block) {
    Blockly.Python.definitions_['import_initialize'] = 'import initialize';
     var code = `initialize.start()\n`;
    return code;
  };