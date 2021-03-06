Blockly.defineBlocksWithJsonArray([
  {
    "type": "display_draw_text",
    "message0": "Display draw text %1 at (x: %2 , y: %3 )",
    "args0": [
      {
        "type": "input_value",
        "name": "text"
      },
      {
        "type": "input_value",
        "name": "x",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "y",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#2980B9",
    "tooltip": "Draw text in buffer",
    "helpUrl": ""
  },
  {
    "type": "display_scroll_text",
    "message0": "Display scroll text %1 at y: %2 )",
    "args0": [
      {
        "type": "input_value",
        "name": "text"
      },
      {
        "type": "input_value",
        "name": "y",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#2980B9",
    "tooltip": "Draw text in buffer",
    "helpUrl": ""
  },  
  {
    "type": "display_draw_line",
    "message0": "Display draw line start at (x: %1 , y: %2 ) end at (x: %3 , y: %4 )",
    "args0": [
      {
        "type": "input_value",
        "name": "x1",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "y1",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "x2",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "y2",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#2980B9",
    "tooltip": "Draw line in buffer",
    "helpUrl": ""
  },
  {
    "type": "display_draw_rect",
    "message0": "Display draw rectangle start at (x: %1 , y: %2 ) width: %3 height: %4 fill: %5",
    "args0": [
      {
        "type": "input_value",
        "name": "x",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "y",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "width",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "height",
        "check": "Number"
      },
      {
        "type": "field_dropdown",
        "name": "fill",
        "options": [
          [
            "No",
            "0"
          ],
          [
            "Yes",
            "1"
          ]
        ]
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#2980B9",
    "tooltip": "Draw rectangle in buffer",
    "helpUrl": ""
  },
  {
    "type": "display_draw_triangle",
    "message0": "Display draw triangle side 1: (x: %1 , y: %2) side 2: (x: %3 , y: %4) side 3: (x: %5 , y: %6) fill: %7",
    "args0": [
      {
        "type": "input_value",
        "name": "x1",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "y1",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "x2",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "y2",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "x3",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "y3",
        "check": "Number"
      },
      {
        "type": "field_dropdown",
        "name": "fill",
        "options": [
          [
            "No",
            "0"
          ],
          [
            "Yes",
            "1"
          ]
        ]
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#2980B9",
    "tooltip": "Draw triangle in buffer",
    "helpUrl": ""
  },
  {
    "type": "display_draw_circle",
    "message0": "Display draw circle start at (x: %1 , y: %2 ) radius: %3 fill: %4",
    "args0": [
      {
        "type": "input_value",
        "name": "x",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "y",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "r",
        "check": "Number"
      },
      {
        "type": "field_dropdown",
        "name": "fill",
        "options": [
          [
            "No",
            "0"
          ],
          [
            "Yes",
            "1"
          ]
        ]
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#2980B9",
    "tooltip": "Draw circle in buffer",
    "helpUrl": ""
  },
  {
    "type": "display_Sin",
    "message0": "Display Sin",
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#2980B9",
    "tooltip": "Fill Sin in buffer",
    "helpUrl": ""
  },
  {
    "type": "display_Cos",
    "message0": "Display Cos",
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#2980B9",
    "tooltip": "Fill Cos in buffer",
    "helpUrl": ""
  },
  {
    "type": "display_fill",
    "message0": "Display fill",
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#2980B9",
    "tooltip": "Fill screen in buffer",
    "helpUrl": ""
  },
  {
    "type": "display_clear",
    "message0": "Display clear",
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#2980B9",
    "tooltip": "clear anythings in buffer",
    "helpUrl": ""
  },
  {
    "type": "display_show",
    "message0": "Display show",
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#2980B9",
    "tooltip": "Send buffer to screen",
    "helpUrl": ""
  },
  {
    "type": "display_draw_bitmap",
    "message0": "Display show image %1 %2 at (x: %3 , y: %4)",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_bitmap",
        "name": "image",
        "colour": "#ff0000"
      },
      {
        "type": "input_value",
        "name": "x",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "y",
        "check": "Number"
      },
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#2980B9",
    "tooltip": "Show image on screen",
    "helpUrl": ""
  }
  ]);