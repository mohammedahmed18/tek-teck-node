const drawLine = ([x1, y1, x2, y2]) => {
  return `<line x1=${x1} y1=${y1} x2=${x2} y2=${y2} style="stroke: crimson;stroke-width:1" /> />`;
};

const drawRectangle = ([fill, x, y, width, height]) => {
  if (fill == '1') {
    return `<rect x=${x} y=${y} width=${width} height=${height} style="stroke: crimson;stroke-width:1" fill="crimson" />`;
  } else {
    return `<rect x=${x} y=${y} width=${width} height=${height} style="stroke: crimson;stroke-width:1" fill="transparent" />`;
  }
};

const drawCircle = ([fill, x, y, r]) => {
  if (fill == '1') {
    return `<circle cx=${x} cy=${y} r=${r} stroke="crimson" stroke-width="1" fill="crimson" />`;
  } else {
    return `<circle cx=${x} cy=${y} r=${r} stroke="crimson" stroke-width="1" fill="transparent" />`;
  }
};

const drawTriangle = ([fill, x1, y1, x2, y2, x3, y3]) => {
  if (fill == '1') {
    return `<polygon points="${x1},${y1} ${x2},${y2} ${x3},${y3}" style="fill:crimson;stroke:crimson;stroke-width:1" />`;
  } else {
    return `<polygon points="50,10 100,50 100,0" style="fill:transparent;stroke:crimson;stroke-width:1" />`;
  }
};

const drawAnimatedText = ([text, x, y]) => {
  text = text.slice(1, -2);
  return `<Text x="${x}" y="${y}" fill="crimson">
        ${text}
        <animate
          attributeType="XML"
          attributeName="x"
          values="0;128;"
          dur="2s"
          repeatCount="indefinite"
        />
      </Text>`;
};
const drawText = ([text, x, y]) => {
  text = text.slice(1, -2);
  return `<Text x="${x}" y="${y}" fill="crimson">
        ${text}
      </Text>`;
};

let svg;
setTimeout(() => {
  svg = document
    .querySelector('#simulator iframe')
    .contentWindow.document.querySelector('#mysvg');
}, 1000);

Blockly.Python['display_draw_text'] = function (block) {
  Blockly.Python.definitions_['import_display'] = 'import display';

  var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
  var value_x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
  var value_y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);

  var code = `display.text(str(${value_text}), ${value_x}, ${value_y}, 1)\n`;
  svg.innerHTML += drawText([value_text, value_x, value_y]);
  return code;
};
Blockly.Python['display_scroll_text'] = function (block) {
  Blockly.Python.definitions_['import_display'] = 'import display';

  var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
  var value_y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);

  var code = `display.scroll(str(${value_text}), ${value_y})\n`;
  svg.innerHTML += drawAnimatedText([value_text, 0, value_y]);
  return code;
};

Blockly.Python['display_draw_line'] = function (block) {
  Blockly.Python.definitions_['import_display'] = 'import display';

  var value_x1 = Blockly.Python.valueToCode(block, 'x1', Blockly.Python.ORDER_ATOMIC);
  var value_y1 = Blockly.Python.valueToCode(block, 'y1', Blockly.Python.ORDER_ATOMIC);
  var value_x2 = Blockly.Python.valueToCode(block, 'x2', Blockly.Python.ORDER_ATOMIC);
  var value_y2 = Blockly.Python.valueToCode(block, 'y2', Blockly.Python.ORDER_ATOMIC);

  var code = `display.line(${value_x1}, ${value_y1}, ${value_x2}, ${value_y2}, 1)\n`;
  svg.innerHTML += drawLine([value_x1, value_y1, value_x2, value_y2]);
  return code;
};

Blockly.Python['display_draw_rect'] = function (block) {
  Blockly.Python.definitions_['import_display'] = 'import display';

  var value_x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
  var value_y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
  var value_width = Blockly.Python.valueToCode(
    block,
    'width',
    Blockly.Python.ORDER_ATOMIC
  );
  var value_height = Blockly.Python.valueToCode(
    block,
    'height',
    Blockly.Python.ORDER_ATOMIC
  );
  var dropdown_fill = block.getFieldValue('fill');

  var code = `display.${
    +dropdown_fill ? 'fill_rect' : 'rect'
  }(${value_x}, ${value_y}, ${value_width}, ${value_height}, 1)\n`;
  svg.innerHTML += drawRectangle([dropdown_fill, value_x, value_y, value_width, value_y]);
  return code;
};

Blockly.Python['display_draw_circle'] = function (block) {
  Blockly.Python.definitions_['import_display'] = 'import display';

  var value_x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
  var value_y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
  var value_r = Blockly.Python.valueToCode(block, 'r', Blockly.Python.ORDER_ATOMIC);
  var dropdown_fill = block.getFieldValue('fill');

  var code = `display.${
    +dropdown_fill ? 'fill_circle' : 'circle'
  }(${value_x}, ${value_y}, ${value_r}, 1)\n`;
  svg.innerHTML += drawCircle([dropdown_fill, value_x, value_y, value_r]);

  return code;
};

Blockly.Python['display_draw_triangle'] = function (block) {
  Blockly.Python.definitions_['import_display'] = 'import display';

  var value_x1 = Blockly.Python.valueToCode(block, 'x1', Blockly.Python.ORDER_ATOMIC);
  var value_y1 = Blockly.Python.valueToCode(block, 'y1', Blockly.Python.ORDER_ATOMIC);
  var value_x2 = Blockly.Python.valueToCode(block, 'x2', Blockly.Python.ORDER_ATOMIC);
  var value_y2 = Blockly.Python.valueToCode(block, 'y2', Blockly.Python.ORDER_ATOMIC);
  var value_x3 = Blockly.Python.valueToCode(block, 'x3', Blockly.Python.ORDER_ATOMIC);
  var value_y3 = Blockly.Python.valueToCode(block, 'y3', Blockly.Python.ORDER_ATOMIC);

  var dropdown_fill = block.getFieldValue('fill');

  var code = `display.${
    +dropdown_fill ? 'fill_triangle' : 'triangle'
  }(${value_x1}, ${value_y1}, ${value_x2}, ${value_y2}, ${value_x3}, ${value_y3}, 1)\n`;
  svg.innerHTML += drawTriangle([
    dropdown_fill,
    value_x1,
    value_y1,
    value_x2,
    value_y2,
    value_x3,
    value_y3,
  ]);
  return code;
};

Blockly.Python['display_Sin'] = function (block) {
  Blockly.Python.definitions_['import_display'] = 'import display';
  var code = `display.Draw_Sin()\n`;
  return code;
};

Blockly.Python['display_Cos'] = function (block) {
  Blockly.Python.definitions_['import_display'] = 'import display';
  var code = `display.Draw_Cos()\n`;
  return code;
};

Blockly.Python['display_fill'] = function (block) {
  Blockly.Python.definitions_['import_display'] = 'import display';

  var code = 'display.fill(1)\n';
  svg.innerHTML = `<rect
            style="fill:crimson;stroke-width:1.65493"
            id="rect541"
            width="241.88977"
            height="120.94489"
            x="0"
            y="0"
            inkscape:transform-center-x="-0.92508296"
            inkscape:transform-center-y="-4.3782609" />`;
  return code;
};

Blockly.Python['display_clear'] = function (block) {
  Blockly.Python.definitions_['import_display'] = 'import display';

  var code = 'display.fill(0)\n';
  svg.innerHTML = `<rect
            style="fill:#ffffff;stroke-width:1.65493"
            id="rect541"
            width="241.88977"
            height="120.94489"
            x="0"
            y="0"
            inkscape:transform-center-x="-0.92508296"
            inkscape:transform-center-y="-4.3782609" />`;
  return code;
};

Blockly.Python['display_show'] = function (block) {
  Blockly.Python.definitions_['import_display'] = 'import display';

  var code = 'display.show()\n';
  return code;
};

Blockly.Python['display_draw_bitmap'] = function (block) {
  Blockly.Python.definitions_['import_display'] = 'import display';
  Blockly.Python.definitions_['import_framebuf'] = 'import framebuf';

  var bitmap_image = block.getFieldValue('image');
  var value_x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
  var value_y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);

  var code = `display.image(b"${bitmap_image}", ${value_x}, ${value_y})\n`;
  return code;
};
