/* Config */
const MICROPYTHON_STACK_SIZE = 512 * 1024; // 512 kBytes (Real of ESP32)

let svgDocument;
let processCode = "";

let MicroPython = {
    charWaitProcess: "",
};

// Switch set handle
// let setupSwitchHandle = () => {
//   // S1
//   let S1 = svgDocument.querySelector("#path600");
//   S1.addEventListener("mousedown", () => {
//     // S1 on Press
//     simSystem.switch[0].value = 0;

//   });

//   S1.addEventListener("mouseup", () => {
//     // S1 on Release
//     simSystem.switch[0].value = 1;
//   });

//   // S2
//   let S2 = svgDocument.querySelector("#path574");
//   S2.addEventListener("mousedown", () => {
//     // S2 on Press
//     simSystem.switch[1].value = 0;
//   });

//   S2.addEventListener("mouseup", () => {
//     // S2 on Release
//     simSystem.switch[1].value = 1;
//   });

//   // Reset
//   let Reset = svgDocument.querySelector("#path8379");
//   Reset.addEventListener("click", () => {
//     // Reset on Click
//     runCodeAndProcess();
//   });
// };

let setupSwitchHandle = () => {
    // S1 path600
    let S1 = svgDocument.querySelector("#path600");
    S1.addEventListener("mousedown", () => {
        // S1 on Press
        simSystem.switch[0].value = 1;
    });
    S1.addEventListener("mouseup", () => {
        // S1 on Release
        simSystem.switch[0].value = 0;
    });

    S1.addEventListener("touchstart", () => {
        // S2 on Press
        simSystem.switch[0].value = 1;
        document.getElementById("path600").style.fill = "#ff0000";
    });
    S1.addEventListener("touchend", () => {
        // S2 on Release
        simSystem.switch[0].value = 0;
        document.getElementById("path600").style.fill = "black";
    });

    // ////////////////////////////////////////////////////////////

    // S2
    let S2 = svgDocument.querySelector("#path626");

    // the device is tablet / mobile

    S2.addEventListener("touchstart", () => {
        // S2 on Press
        simSystem.switch[1].value = 1;
        document.getElementById("path626").style.fill = "#ff0000";
    });
    S2.addEventListener("touchend", () => {
        // S2 on Release
        simSystem.switch[1].value = 0;
        document.getElementById("path626").style.fill = "black";
    });
    // the device is pc
    S2.addEventListener("mousedown", () => {
        // S2 on Press
        simSystem.switch[1].value = 1;
    });
    S2.addEventListener("mouseup", () => {
        // S2 on Release
        simSystem.switch[1].value = 0;
    });

    // Future development
    // let S3 = svgDocument.querySelector("#path26");
    // //S3 on press
    // S3.addEventListener("mouseup", () => {
    //   // S3 on Release
    //   simSystem.switch[2].value = 1;
    // });
    // S3.addEventListener("mouseup", () => {
    //   // S3 on Release
    //   simSystem.switch[2].value = 0;
    // });

    // let S4 = svgDocument.querySelector("#path626");
    // //S3 on press
    // S4.addEventListener("mouseup", () => {
    //   // S4 on Release
    //   simSystem.switch[3].value = 1;
    // });

    // S4.addEventListener("mouseup", () => {
    //   // S4 on Release
    //   simSystem.switch[3].value = 0;
    // });

    // Reset
    let Reset = svgDocument.querySelector("#path8379");
    Reset.addEventListener("click", () => {
        // Reset on Click
        runCodeAndProcess();
    });
};

//g8943
let setupLDRHandle = () => {
    let domLDR = svgDocument.querySelector("#g8943");

    ["click", "touchend"].forEach((event) => {
        domLDR.addEventListener(event, function () {
            if (event == "touchend") {
                document.getElementById("path8931").style.fill = "#ffff00";
                setTimeout(() => {
                    document.getElementById("path8931").style.fill = "black";
                }, 200);
            }

            createPopover(
                domLDR,
                `
        <input type="range" min="0" max="100" value="${simSystem.ldr.getValue()}">
        <div class="label">Light Level: <span class="value">${simSystem.ldr.getValue()}</span>%</div>
        `,
                (domBox) => {
                    let inputRange = domBox.querySelector(
                        "input[type='range']"
                    );
                    inputRange.addEventListener("input", function (e) {
                        domBox.querySelector(".value").innerText = this.value;
                        simSystem.ldr.setValue(+this.value);
                    });
                }
            );
        });
    });
};

let setupLM75Handle = () => {
    let domLM75 = svgDocument.querySelector("#group-LM75");

    ["click", "touchend"].forEach((event) => {
        domLM75.addEventListener(event, function () {
            if (event == "touchend") {
                document.getElementById("rect8515").style.fill = "#ffff00";
                setTimeout(() => {
                    document.getElementById("rect8515").style.fill = "black";
                }, 200);
            }
            createPopover(
                domLM75,
                `
        <input type="range" min="-25" max="100" step="0.25" value="${simSystem.lm75.getValue()}">
        <div class="label">Temperature: <span class="value">${simSystem.lm75.getValue()}</span> &#8451;</div>
        `,
                (domBox) => {
                    let inputRange = domBox.querySelector(
                        "input[type='range']"
                    );
                    inputRange.addEventListener("input", function (e) {
                        domBox.querySelector(".value").innerText = this.value;
                        simSystem.lm75.setValue(+this.value);
                    });
                }
            );
        });
    });
};

let createPopover = (domOrigin, content, newCb, closeCb) => {
    let originInfo = domOrigin.getBoundingClientRect();
    let domBox = document.createElement("div");
    domBox.id = `PopoverId${+new Date()}`;
    domBox.classList.add("Popover");
    domBox.style.top = originInfo.y - 20 + "px";
    domBox.style.left = originInfo.x + originInfo.width + "px";
    domBox.innerHTML = `
        <a href="" class="close"><i class="fas fa-times"></i></a>
        <div class="content">${content}</div>
    `;
    document.querySelector("body").appendChild(domBox);

    domBox.querySelector(".close").addEventListener("click", (e) => {
        e.preventDefault();

        domBox.remove();
        if (closeCb) closeCb();
    });

    if (newCb) {
        newCb(domBox);
    }

    return domBox;
};

// Load SVG
(async () => {
    let svgContent = await fetch("image/TekTech_1.5.0.svg");
    svgContent = await svgContent.text();
    // console.log(svgContent);
    document.querySelector(".main-view").innerHTML = svgContent;

    svgDocument = document.querySelector(".main-view svg");

    let panZoomTiger = svgPanZoom(svgDocument, {
        dblClickZoomEnabled: false,
    });

    setupSwitchHandle();
    setupLDRHandle();
    setupLM75Handle();
})();

simSystem.codeStop = () => {
    simSystem.writeToREPL(3);
};

simSystem.writeToREPL = (data) => {
    if (typeof data === "number") {
        data = String.fromCharCode(data);
    }

    MicroPython.charWaitProcess += data;
};

let runCodeAndProcess = (_) => {
    let codeEncode = JSON.stringify(processCode);
    codeEncode = codeEncode.replace(
        /[\u007F-\uFFFF]/g,
        (chr) => "\\u" + ("0000" + chr.charCodeAt(0).toString(16)).substr(-4)
    );
    // let codeSend = `\x03exec(${codeEncode})\r\n`;
    let codeSend = `\x03\x05${processCode.replace(/\r?\n/g, "\r")}\x04`;
    simSystem.writeToREPL(codeSend);
};

// Setup Terminal
let term, fitAddon;
(() => {
    term = new Terminal();
    fitAddon = new FitAddon.FitAddon();
    term.loadAddon(fitAddon);
    term.open(document.querySelector("#terminal > section"));
    try {
        fitAddon.fit();
    } catch (e) {}

    window.addEventListener("resize", (_) => fitAddon.fit());
})();

// Setup Move bar
((_) => {
    let domTerminalTesizeBar = document.querySelector("#terminal-resize-bar");
    let moveBarMouseDownFlag = false;
    domTerminalTesizeBar.addEventListener("mousedown", function (event) {
        domTerminalTesizeBar.classList.add("active");
        moveBarMouseDownFlag = true;
    });

    document.addEventListener("mousemove", function (event) {
        if (moveBarMouseDownFlag) {
            domTerminalTesizeBar.style.top = event.pageY + "px";
            // console.log(event.pageY + "px");
        }
    });

    document.addEventListener("mouseup", function (event) {
        if (!moveBarMouseDownFlag) return;

        moveBarMouseDownFlag = false;

        domTerminalTesizeBar.classList.remove("active");

        let top = event.pageY;
        domTerminalTesizeBar.style.top = top + "px";
        top += 6;
        document.querySelector(
            "#terminal"
        ).style.height = `calc(100% - ${top}px)`;
        document.querySelector(".main-view").style.height = `${top}px`;

        /* localStorage.setItem("terminal_sim_size", $("#terminal").width()); */
        if (fitAddon) {
            setTimeout(() => {
                fitAddon.fit();
                fitAddon.fit();
            }, 10);
        }
    });

    domTerminalTesizeBar.style.top =
        document.querySelector(".main-view").clientHeight - 6 + "px";
})();

var Module = typeof Module !== "undefined" ? Module : {};

(() => {
    let mp_js_stdout = document.querySelector("#mp_js_stdout");
    mp_js_stdout.addEventListener(
        "print",
        (e) => {
            // console.log(e.data);
            term.write(e.data);
            simSystem.onREPLDataOut(e.data);
        },
        false
    );

    term.onData((data) => {
        simSystem.writeToREPL(data);
    });

    // Setup MicroPython
    MP_JS_EPOCH = new Date().getTime();
})();

Module["onRuntimeInitialized"] = async () => {
    // on MicroPython Ready
    MicroPython = typeof MicroPython !== "undefined" ? MicroPython : {};

    if (window.parent) {
        let callback = window.parent.simulatorReadyCallback;
        if (callback) {
            callback();
        }
    }
};