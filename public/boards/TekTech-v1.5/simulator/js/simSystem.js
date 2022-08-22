const drawLine = ([, , x1, y1, x2, y2]) => {
  return `<line x1=${x1} y1=${y1} x2=${x2} y2=${y2} style="stroke: crimson;stroke-width:1" /> />`;
};

const drawRectangle = ([, fill, x, y, , , , , width, height]) => {
  if (fill) {
    return `<rect x=${x} y=${y} width=${width} height=${height} style="stroke: crimson;stroke-width:1" fill="crimson" />`;
  } else {
    return `<rect x=${x} y=${y} width=${width} height=${height} style="stroke: crimson;stroke-width:1" fill="transparent" />`;
  }
};

const drawCircle = ([, fill, x, y, , , , , r]) => {
  if (fill) {
    return `<circle cx=${x} cy=${y} r=${r} stroke="crimson" stroke-width="1" fill="crimson" />`;
  } else {
    return `<circle cx=${x} cy=${y} r=${r} stroke="crimson" stroke-width="1" fill="transparent" />`;
  }
};

const drawTriangle = ([, fill, x1, y1, x2, y2, x3, y3]) => {
  if (fill) {
    return `<polygon points="${x1},${y1} ${x2},${y2} ${x3},${y3}" style="fill:crimson;stroke:crimson;stroke-width:1" />`;
  } else {
    return `<polygon points="50,10 100,50 100,0" style="fill:transparent;stroke:crimson;stroke-width:1" />`;
  }
};

const drawAnimatedText = ([, , x1, y1, ...rest]) => {
  return `<Text x="${x1}" y="${y1}">
        hello world
        <animate
          attributeType="XML"
          attributeName="x"
          values="0;128;"
          dur="2s"
          repeatCount="indefinite"
        />
      </Text>`;
};
const drawText = ([, , x1, y1, , , , , ...rest]) => {
  return `<Text x="${x1}" y="${y1}">
        hello world
      </Text>`;
};

simSystem = {
  display: {
    setData: (data) => {
      console.alert(data);
        // TODO: text, sin, cos
      const svg = document.querySelector('#mysvg');
      // for test
      //svg.innerHTML += drawCircle([, 1, 50, 50, ,,,, 20]);
      switch (data[0]) {
        case 0:
          svg.innerHTML += drawLine(data);
          break;
        case 1:
          svg.innerHTML += drawRectangle(data);
          break;
        case 2:
          svg.innerHTML += drawCircle(data);
          break;
        case 3:
          svg.innerHTML += drawTriangle(data);
          break;
        case 4:
          svg.innerHTML += drawAnimatedText(data);
          break;
        case 5:
          svg.innerHTML += drawText(data);
          break;
        case 6:
          svg.innerHTML = '';
          break;
        default:
          svg.innerHTML = '';
      }
    },
  },
  switch: [
    {
      value: 1,
    },
    {
      value: 1,
    },
    {
      value: 1,
    },
    {
      value: 1,
    },
  ],
  buzzer: {
    setStatus: (status) => {
      /* console.log("buzzer", status); */
      let ellipseBuzzer = svgDocument.querySelector('#circle396');
      if (status) {
        ellipseBuzzer.classList.add('active');
      } else {
        ellipseBuzzer.classList.remove('active');
      }
    },
  },
  ldr: {
    getValue: (_) => simSystem.ldr.value,
    setValue: (value) => {
      simSystem.ldr.value = value;
    },
    value: 0,
  },
  RGB: {
    Lamp: (lamp, turn) => {
      // console.log("PIN Write", pin, value);
      if (lamp === 25) {
        // RED LED
        svgDocument.querySelector('#path3949').style.opacity = turn
          ? '#FF2B1C'
          : '#FFFFFF';
      }

      if (lamp === 26) {
        // GREEN LED
        svgDocument.querySelector('#path3949').style.opacity = turn
          ? '#01872D'
          : '#FFFFFF';
      }

      if (lamp === 27) {
        // BLUE LED
        svgDocument.querySelector('#path3949').style.opacity = turn
          ? '#0F13FF'
          : '#FFFFFF';
      }
    },
  },
  lm75: {
    getValue: (_) => simSystem.lm75.value,
    setValue: (value) => {
      simSystem.lm75.value = value;
    },
    value: 0,
  },
  servo: {
    getAngle: (pin) => simSystem.servo.angle[pin],
    setAngle: (pin, angle) => {
      simSystem.servo.angle[pin] = angle;
    },
    angle: [0, 0],
  },
  usb: {
    getValue: (_) => simSystem.usb.value,
    setValue: (value) => {
      simSystem.usb.value = value;
    },
    value: 0,
  },
  rtc: {
    offset: 0,
    setOn: 0,
  },
  pin: {
    digitalRead: (pin) => {
      console.warn('PIN Read', pin);
      return 0;
    },
    digitalWrite: (pin, value) => {
      // console.log("PIN Write", pin, value);
      if (pin === 25) {
        // RED LED
        svgDocument.querySelector('#path3949').style.fill =
          value == 1 ? '#FF0000' : '#FFFFFF';
      }
      if (pin === 26) {
        // GREEN LED
        svgDocument.querySelector('#path3949').style.fill =
          value == 1 ? '#7CFC00' : '#FFFFFF';
      }
      if (pin === 27) {
        // BLUE LED
        svgDocument.querySelector('#path3949').style.fill =
          value == 1 ? '#0000FF' : '#FFFFFF';
      }
    },
    touchRead: (pin) => 0,
    analogRead: (pin) => 0,
    analogWrite: (pin, value) => {
      // console.log("Analog Write", pin, value);
      if (pin === 2) {
        // WiFi LED
        svgDocument.querySelector('#path8759').style.opacity =
          ((1023 - value) / 1023) * 0.9;
      }

      if (pin === 12) {
        // IoT LED
        svgDocument.querySelector('#path8911').style.opacity =
          ((1023 - value) / 1023) * 0.9;
      }
    },
  },
  isCodeRunning: false,
  runCode: (code) => {
    processCode = code;
    runCodeAndProcess();
  },
  getCharsWaitProcass: (_) => MicroPython.charWaitProcess,
  getCharsLenWaitProcass: (_) => MicroPython.charWaitProcess.length,
  getAndPopFirstCharsWaitProcass: (_) => {
    let c = MicroPython.charWaitProcess.charCodeAt(0);
    MicroPython.charWaitProcess = MicroPython.charWaitProcess.substring(1);
    return c;
  },
  isCharsWaitProcassHasInterruptChar: (c) =>
    MicroPython.charWaitProcess.includes(String.fromCharCode(c)) ? 1 : 0,
  onREPLDataOut: (_) => 0,
};
