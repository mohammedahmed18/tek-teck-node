Blockly.defineBlocksWithJsonArray([
    {
        "type": "touch_on_press",
        "message0": "When %1 Touched %2 %3",
        "args0": [
            {
            "type": "field_dropdown",
            "name": "pin",
            "options": [
                [
                    "C1",
                    "1"
                ],
                [
                    "C3",
                    "3"
                ],
                [
                    "C4",
                    "4"
                ],
                [
                    "C6",
                    "6"
                ],
                [
                    "C7",
                    "7"
                ],
                [
                    "C9",
                    "9"
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
    "type": "touch_get_value",
    "message0": "Get touch %1 value",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "n",
        "options": [
            [
                "C1",
                "1"
            ],
            [
                "C3",
                "3"
            ],
            [
                "C4",
                "4"
            ],
            [
                "C6",
                "6"
            ],
            [
                "C7",
                "7"
            ],
            [
                "C9",
                "9"
            ]
        ]
      }
    ],
    "output": null,
    "colour": "#1d5599",
    "tooltip": "",
    "helpUrl": ""
    }    
    ]);