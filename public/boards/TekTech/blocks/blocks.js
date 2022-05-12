Blockly.defineBlocksWithJsonArray([
  {
    "type": "ultrasonic_read",
    "message0": "Ultrasonic trig pin: %1 echo pin: %2 read distance (cm)",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "trig",
        "options": [
          [
            "OUT2",
            "32"
          ],
          [
            "OUT3",
            "33"
          ],
          [
            "OUT4",
            "13"
          ],
          [
            "OUT5",
            "15"
          ],
          [
            "OUT6",
            "2"
          ]
        ]
      },
      {
        "type": "field_dropdown",
        "name": "echo",
        "options": [
          [
            "IN1",
            "35"
          ],
          [
            "IN2",
            "32"
          ],
          [
            "IN3",
            "33"
          ],
          [
            "IN4",
            "13"
          ],
          [
            "IN5",
            "15"
          ],
          [
            "IN6",
            "2"
          ]
        ]
      }
    ],
    "output": "Number",
    "colour": "#004098",
    "tooltip": "Attach your Ultrasonic to Input, Output Pins",
    "helpUrl": "www.tektech.org"
  }
  ]);
  