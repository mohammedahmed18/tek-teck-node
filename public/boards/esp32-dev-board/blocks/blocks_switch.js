Blockly.defineBlocksWithJsonArray([
{
  "type": "switch_is_press",
  "message0": "Is %1 pressed ?",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "n",
      "options": [
        [
          "B1",
          "S1"
        ],
        [
          "B2",
          "S2"
        ],
        [
          "B3",
          "S3"
        ],
        [
          "B4",
          "S4"
        ]
      ]
    }
  ],
  "output": null,
  "colour": "#1d5599",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "switch_is_release",
  "message0": "Is %1 released ?",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "n",
      "options": [
        [
          "B1",
          "S1"
        ],
        [
          "B2",
          "S2"
        ],
        [
          "B3",
          "S3"
        ],
        [
          "B4",
          "S4"
        ]
      ]
    }
  ],
  "output": null,
  "colour": "#1d5599",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "switch_get_value",
  "message0": "Get %1 value",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "n",
      "options": [
        [
          "B1",
          "S1"
        ],
        [
          "B2",
          "S2"
        ],
        [
          "B3",
          "S3"
        ],
        [
          "B4",
          "S4"
        ]
      ]
    }
  ],
  "output": null,
  "colour": "#1d5599",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "switch_on_press",
  "message0": "When %1 pressed %2 %3",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "pin",
      "options": [
        [
          "B1",
          "S1"
        ],
        [
          "B2",
          "S2"
        ],
        [
          "B3",
          "S3"
        ],
        [
          "B4",
          "S4"
        ],
        [
          "B1+B4",
          "S14"
        ],
        [
          "B2+B3",
          "S23"
        ]        
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "callback"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#1d5599",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "switch_on_release",
  "message0": "When %1 released %2 %3",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "pin",
      "options": [
        [
          "B1",
          "S1"
        ],
        [
          "B2",
          "S2"
        ],
        [
          "B3",
          "S3"
        ],
        [
          "B4",
          "S4"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "callback"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#1d5599",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "switch_on_pressed",
  "message0": "switch %1 pressed %2 %3",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "pin",
      "options": [
        [
          "B1",
          "S1"
        ],
        [
          "B2",
          "S2"
        ],
        [
          "B3",
          "S3"
        ],
        [
          "B4",
          "S4"
        ],
        [
          "B1+B4",
          "S14"
        ],
        [
          "B2+B3",
          "S23"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "callback"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#1d5599",
  "tooltip": "",
  "helpUrl": ""
},
]);