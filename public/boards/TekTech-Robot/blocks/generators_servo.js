Blockly.Python['external_servo'] = function(block) {
    Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin';
    Blockly.Python.definitions_['from_machine_import_pwm'] = 'from machine import PWM';
  
    var dropdown_ch = block.getFieldValue('ch');
    var value_angle = Blockly.Python.valueToCode(block, 'angle', Blockly.Python.ORDER_ATOMIC);
    var code = `PWM(Pin(${dropdown_ch}), freq=50).duty(int(25.57 + (((${value_angle}) / 180.0) * 102.3)))\n`;
    return code;
  };