Blockly.defineBlocksWithJsonArray([{
        "type": "pin_digital_read",
        "message0": "digital read pin %1",
        "args0": [{
            "type": "field_dropdown",
            "name": "pin",
            "options": [
                [
                    "IN1",
                    "14"
                ],
                [
                    "IN2",
                    "26"
                ],
                [
                    "IN3",
                    "2"
                ],
                [
                    "IN4",
                    "27"
                ],
                [
                    "IN5",
                    "25"
                ],
                [
                    "IN6",
                    "33"
                ],
                [
                    "IN7",
                    "32"
                ], [
                    "IN8",
                    "35"
                ], [
                    "IN9",
                    "4"
                ], [
                    "IN10",
                    "5"
                ],

            ]
        }],
        "output": [
            "Number",
            "Boolean"
        ],
        "colour": "#0925c7",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "pin_analog_read",
        "message0": "analog read  %1",
        "args0": [{
            "type": "field_dropdown",
            "name": "pin",
            "options": [

                [
                    "IN6",
                    "33"
                ],
                [
                    "IN7",
                    "32"
                ],
                [
                    "IN8",
                    "35"
                ],

            ]
        }],
        "output": "Number",
        "colour": "#0925c7",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "pin_analog_write",
        "message0": "PWM write %1 to pin %2",
        "args0": [{
                "type": "input_value",
                "name": "value",
                "check": "Number"
            },
            {
                "type": "field_dropdown",
                "name": "pin",
                "options": [

                    [
                        "OUT1",
                        "14"
                    ],
                    [
                        "OUT2",
                        "26"
                    ],
                    [
                        "OUT3",
                        "2"
                    ],
                    [
                        "OUT4",
                        "27"
                    ],
                    [
                        "OUT5",
                        "25"
                    ],
                    [
                        "OUT6",
                        "33"
                    ],
                    [
                        "OUT7",
                        "32"
                    ],
                    [
                        "OUT9",
                        "4"
                    ],
                    [
                        "OUT10",
                        "5"
                    ]
                ]
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#0925c7",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "pin_digital_write",
        "message0": "digital write %1 to pin %2",
        "args0": [{
                "type": "input_value",
                "name": "value",
                "check": [
                    "Boolean",
                    "Number"
                ]
            },
            {
                "type": "field_dropdown",
                "name": "pin",
                "options": [


                    [
                        "OUT1",
                        "14"
                    ],
                    [
                        "OUT2",
                        "26"
                    ],
                    [
                        "OUT3",
                        "2"
                    ],
                    [
                        "OUT4",
                        "27"
                    ],
                    [
                        "OUT5",
                        "25"
                    ],
                    [
                        "OUT6",
                        "33"
                    ],
                    [
                        "OUT7",
                        "32"
                    ],
                    [
                        "OUT9",
                        "4"
                    ],
                    [
                        "OUT10",
                        "5"
                    ]

                ]
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#0925c7",
        "tooltip": "",
        "helpUrl": ""
    },
]);