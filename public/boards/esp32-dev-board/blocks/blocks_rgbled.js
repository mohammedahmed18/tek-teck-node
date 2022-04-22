Blockly.defineBlocksWithJsonArray(
[{
  "type": "rgbled_setup",
  "message0": "Start Lights setup",
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#40a18a",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "rgbled_set_color1",
  "message0": "Lights number %1 set color %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "n",
      "options": [
        [
          "1",
          "0"
        ],
        [
          "2",
          "1"
        ]
      ]
    },
    {
      "type": "field_colour",
      "name": "color",
      "colour": "#ff0000"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#40a18a",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "rgbled_set_color2",
  "message0": "Lights number %1 set color Red: %2 Green: %3 Blue: %4",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "n",
      "options": [
        [
          "1",
          "0"
        ],
        [
          "2",
          "1"
        ]
      ]
    },
    {
      "type": "input_value",
      "name": "red",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "green",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "blue",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#40a18a",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "rgbled_fill_color1",
  "message0": "Lights both color %1",
  "args0": [
    {
      "type": "field_colour",
      "name": "color",
      "colour": "#ff0000"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#40a18a",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "rgbled_fill_color2",
  "message0": "Lights fill color Red: %1 Green: %2 Blue: %3",
  "args0": [
    {
      "type": "input_value",
      "name": "red",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "green",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "blue",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#40a18a",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "rgbled_show",
  "message0": "Lights show",
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#40a18a",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "rgbled_clear",
  "message0": "Lights clear",
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#40a18a",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "rgbled_rainbow",
  "message0": "Lights rainbow with wait %1 ms",
  "args0": [
    {
      "type": "input_value",
      "name": "wait",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#40a18a",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "rgbled_set_brightness",
  "message0": "Lights set brightness %1 %%",
  "args0": [
    {
      "type": "input_value",
      "name": "brightness",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#40a18a",
  "tooltip": "",
  "helpUrl": ""
}]
);
