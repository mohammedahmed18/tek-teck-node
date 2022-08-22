Blockly.defineBlocksWithJsonArray([
{
  "type": "sensor_light_is_color",
  "message0": "%1 is detect %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "sensor",
      "options": [
        [
          "Sensor1",
          "1"
        ],
        [
          "Sensor2",
          "2"
        ],
        [
          "Sensor3",
          "3"
        ]
      ]
    },
    {
      "type": "field_dropdown",
      "name": "color",
      "options": [
        [
          "Black",
          "black"
        ],
        [
          "White",
          "white"
        ]
      ]
    }
  ],
  "output": "Boolean",
  "colour": "#E67E22",
  "tooltip": "Return true if sensor found color",
  "helpUrl": ""
},
{
  "type": "sensor_set_threshold",
  "message0": "set %1 threshold to %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "color",
      "options": [
        [
          "Black",
          "black"
        ],
        [
          "White",
          "white"
        ]
      ]
    },
    {
      "type": "input_value",
      "name": "threshold",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#E67E22",
  "tooltip": "Set Black & White threshold",
  "helpUrl": ""
},
{
  "type": "sensor_light",
  "message0": "light level (%%)",
  "output": "Number",
  "colour": "#E67E22",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "sensor_temp",
  "message0": "temperature (°C)",
  "output": "Number",
  "colour": "#E67E22",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "ultrasonic",
  "message0": "Ultrsonic in  %1 The Distance is (cm)",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "pin",
      "options": [
          [
              "S3",
              "35"
          ]   
    ]}
  ],
  "output": "Number",
  "colour": "#E67E22",
  "tooltip": "Read distance in cm",
  "helpUrl": ""
}
]);