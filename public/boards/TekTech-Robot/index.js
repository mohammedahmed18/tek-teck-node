addBoard({
    id: "TekTech-Robot",
    name: "TekTech-Robot",
    description: "",
    image: "images/cover.png",
    chip: "ESP32",
    script: [ 
        "../esp32-dev-board/js/field_bitmap.js",
        "../esp32-dev-board/js/field_note.js",
        "../esp32-dev-board/js/sound.js",
    ],
    css: [
        "../kidbright32/css/field_note.css",
        "../ipst-wifi/css/field_bitmap.css",
    ],
    blocks: [
        "blocks/blocks_motor.js",
        "blocks/blocks_display.js",
        "../ipst-wifi/blocks/blocks_display.js",
        "blocks/blocks_sensor.js",
        "../esp32-dev-board/blocks/blocks_rgbled.js",
       // "../ipst-wifi/blocks/blocks_switch.js",
        "blocks/blocks_ir.js",
        "blocks/blocks_pin.js",
        "../kidbright32/blocks/blocks_buzzer.js",
        "blocks/blocks_servo.js",
        "blocks/blocks_rgbled.js",
        "../kidbright32/blocks/blocks_advanced.js",
        "../esp32-dev-board/blocks/blocks_switch.js",

        "blocks/generators_motor.js",
        "blocks/generators_sensor.js",
        "../ipst-wifi/blocks/generators_display.js",
        "blocks/generators_sensor.js",
     //   "../ipst-wifi/blocks/generators_switch.js",
        "blocks/generators_ir.js",
        "../kidbright32/blocks/generators_pin.js",
        "../kidbright32/blocks/generators_buzzer.js",
        "blocks/generators_servo.js",
        "../esp32-dev-board/blocks/generators_rgbled.js",
        "blocks/generators_display.js",
        "blocks/generators_rgbled.js",
        "../esp32-dev-board/blocks/generators_switch.js",
        "../kidbright32/blocks/generators_avanced.js",
    ],
    modules: [ ],
    examples: [
        "Robot",
        {
            name: "Remote",
            files: "../esp32-dev-board/examples/Remote_control",
        },
        {
            name: "RC Car",
            files: "../esp32-dev-board/examples/RobotCar",
        },
    ],    
    firmware: [
        {
            name: "MicroPython for RC Robot  V2.0.0",
            path: "MicroPython.for.RC.Robot.V2.0.0-dirty.bin",
            version: "V1.9.0-dirty",
            date: "2021-12-30",
            board: "RC_Robot",
            cpu: "ESP32"
        },
    ],
    usb: [
        {
            vendorId: "10C4",
            productId: "EA60"
        }
    ],
    autoCompletion: { },
    level: [
        {
            name: "Beginner",
            description: "",
            icon: "../kidbright32/images/puzzle.png",
            blocks: [
                {
                    name: "Display",
                    icon: `images/display.png`,
                    color: "#e64c3c",
                    blocks: [
                        {
                            xml: `
                                <block type="display_draw_text">
                                    <value name="text">
                                        <shadow type="text">
                                            <field name="TEXT">Hello!</field>
                                        </shadow>
                                    </value>
                                    <value name="x">
                                        <shadow type="math_number">
                                            <field name="NUM">0</field>
                                        </shadow>
                                    </value>
                                    <value name="y">
                                        <shadow type="math_number">
                                            <field name="NUM">0</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                        {
                            xml: `
                                <block type="display_scroll_text">
                                    <value name="text">
                                        <shadow type="text">
                                            <field name="TEXT">Hello!</field>
                                        </shadow>
                                    </value>
                                    <value name="y">
                                        <shadow type="math_number">
                                            <field name="NUM">0</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },         
                        {
                            xml: `
                                <block type="display_draw_bitmap">
                                    <value name="x">
                                        <shadow type="math_number">
                                            <field name="NUM">0</field>
                                        </shadow>
                                    </value>
                                    <value name="y">
                                        <shadow type="math_number">
                                            <field name="NUM">0</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                        {
                            xml: `
                                <block type="display_draw_line">
                                    <value name="x1">
                                        <shadow type="math_number">
                                            <field name="NUM">0</field>
                                        </shadow>
                                    </value>
                                    <value name="y1">
                                        <shadow type="math_number">
                                            <field name="NUM">0</field>
                                        </shadow>
                                    </value>
                                    <value name="x2">
                                        <shadow type="math_number">
                                            <field name="NUM">60</field>
                                        </shadow>
                                    </value>
                                    <value name="y2">
                                        <shadow type="math_number">
                                            <field name="NUM">60</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                        {
                            xml: `
                                <block type="display_draw_rect">
                                    <value name="x">
                                        <shadow type="math_number">
                                            <field name="NUM">0</field>
                                        </shadow>
                                    </value>
                                    <value name="y">
                                        <shadow type="math_number">
                                            <field name="NUM">0</field>
                                        </shadow>
                                    </value>
                                    <value name="width">
                                        <shadow type="math_number">
                                            <field name="NUM">60</field>
                                        </shadow>
                                    </value>
                                    <value name="height">
                                        <shadow type="math_number">
                                            <field name="NUM">60</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        }, 
                        {
                            xml: `
                                <block type="display_draw_triangle">
                                    <value name="x1">
                                        <shadow type="math_number">
                                            <field name="NUM">0</field>
                                        </shadow>
                                    </value>
                                    <value name="y1">
                                        <shadow type="math_number">
                                            <field name="NUM">0</field>
                                        </shadow>
                                    </value>
                                    <value name="x2">
                                        <shadow type="math_number">
                                            <field name="NUM">0</field>
                                        </shadow>
                                    </value>
                                    <value name="y2">
                                        <shadow type="math_number">
                                            <field name="NUM">0</field>
                                        </shadow>
                                    </value>
                                    <value name="x3">
                                        <shadow type="math_number">
                                            <field name="NUM">0</field>
                                        </shadow>
                                    </value>
                                    <value name="y3">
                                        <shadow type="math_number">
                                            <field name="NUM">0</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        }, 
                        {
                            xml: `
                                <block type="display_draw_circle">
                                    <value name="x">
                                        <shadow type="math_number">
                                            <field name="NUM">0</field>
                                        </shadow>
                                    </value>
                                    <value name="y">
                                        <shadow type="math_number">
                                            <field name="NUM">0</field>
                                        </shadow>
                                    </value>
                                    <value name="r">
                                        <shadow type="math_number">
                                            <field name="NUM">30</field>
                                        </shadow>
                                    </value>
                                   
                                </block>
                            `
                        },
                        "display_Sin",
                        "display_Cos",
                        "display_fill",
                        "display_clear",
                        "display_show"
                    ]
                },        
                // {
                //     name: "Wheel",
                //     icon: `images/tire.png`,
                //     color: "#28B463",
                //     blocks: [
                //         "motor_forward",
                //         "motor_backward",
                //         {
                //             xml: `
                //                 <block type="motor_turn_left">
                //                     <value name="angle">
                //                         <shadow type="math_number">
                //                             <field name="NUM">90</field>
                //                         </shadow>
                //                     </value>
                //                 </block>
                //             `
                //         },
                //         {
                //             xml: `
                //                 <block type="motor_turn_right">
                //                     <value name="angle">
                //                         <shadow type="math_number">
                //                             <field name="NUM">90</field>
                //                         </shadow>
                //                     </value>
                //                 </block>
                //             `
                //         },
                //         "motor_stop",
                //     ]
                // },
                {
                    name: "Inputs",
                    icon: `/images/icon/input.png`,
                    color: "#fbbd5e",
                    blocks: [
                        {
                            xml: '<label text="Sensor"></label>',
                        },
                        "sensor_light_is_color",
                        "sensor_light",
                        "sensor_temp",
                        "ultrasonic",
                        {
                            xml: `
                                <block type="sensor_set_threshold">
                                    <value name="threshold">
                                        <shadow type="math_number">
                                            <field name="NUM">2000</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                       
                        {
                            xml: '<label text="Remote Control"></label>',
                        },
                        "ir_read",
                        {
                            xml: '<label text="External Input"></label>',
                        },
                        "pin_digital_read",
                        "pin_analog_read"
                    ]
                },
                {
                    name: "Output",
                    icon: `/images/icon/output.png`,
                    color: "#fbbd5e",
                    blocks: [
                        {
                            xml: '<label text="Servo"></label>',
                        },
                        {
                            xml: `
                                <block type="external_servo">
                                    <value name="angle">
                                        <shadow type="math_number">
                                            <field name="NUM">90</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                        {
                            xml: `
                                    <block type="send_into_source">
                                        <value name="value">
                                            <shadow type="math_number">
                                                <field name="NUM">33</field>
                                            </shadow>
                                        </value>
                                        <value name="source">
                                            <shadow type="text">
                                                <field name="TEXT">source1</field>
                                            </shadow>
                                        </value>
                                    </block>
                                `
                        },
                        {
                            xml: '<label text="Music"></label>',
                        },
                        {
                            xml: `
                                <block type="buzzer_tone">
                                    <value name="freq">
                                        <shadow type="math_number">
                                            <field name="NUM">2000</field>
                                        </shadow>
                                    </value>
                                    <value name="duration">
                                        <shadow type="math_number">
                                            <field name="NUM">1</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                        {
                            xml: `
                                <block type="buzzer_notes">
                                    <value name="notes">
                                        <block type="make_note">
                                            <field name="notes">C5</field>
                                        </block>
                                    </value>
                                    <field name="duration">1 / 2</field>
                                </block>
                            `
                        },
                        {
                            xml: `
                                <block type="buzzer_volume">
                                    <value name="level">
                                        <shadow type="math_number">
                                            <field name="NUM">50</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
    
                        //led 
                        {
                            xml: '<label text="Lights"></label>',
                        },
                        "rgbled_setup",
                        {
                            xml: `
                                <block type="rgbled_set_color1">
                                    <value name="n">
                                        <shadow type="math_number">
                                            <field name="NUM">0</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                        {
                            xml: `
                                <block type="rgbled_set_color2">
                                    <value name="n">
                                        <shadow type="math_number">
                                            <field name="NUM">0</field>
                                        </shadow>
                                    </value>
                                    <value name="red">
                                        <shadow type="math_number">
                                            <field name="NUM">0</field>
                                        </shadow>
                                    </value>
                                    <value name="green">
                                        <shadow type="math_number">
                                            <field name="NUM">0</field>
                                        </shadow>
                                    </value>
                                    <value name="blue">
                                        <shadow type="math_number">
                                            <field name="NUM">0</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                        "rgbled_fill_color1",
                        {
                            xml: `
                                <block type="rgbled_fill_color2">
                                    <value name="red">
                                        <shadow type="math_number">
                                            <field name="NUM">0</field>
                                        </shadow>
                                    </value>
                                    <value name="green">
                                        <shadow type="math_number">
                                            <field name="NUM">0</field>
                                        </shadow>
                                    </value>
                                    <value name="blue">
                                        <shadow type="math_number">
                                            <field name="NUM">0</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                        "rgbled_show",
                        "rgbled_clear",
                        {
                            xml: `
                                <block type="rgbled_rainbow">
                                    <value name="wait">
                                        <shadow type="math_number">
                                            <field name="NUM">30</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                        {
                            xml: `
                                <block type="rgbled_set_brightness">
                                    <value name="brightness">
                                        <shadow type="math_number">
                                            <field name="NUM">50</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                ]},
                {
                    name: "Events",
                    icon: `/images/icon/switch.png`,
                    color: "#e64c3c",
                    blocks: [
                        {
                            xml: '<label text="Switch"></label>',
                        },
                        "switch_on_press",
                        "switch_on_release",
                        "switch_is_press",
                        "switch_is_release",
                        "switch_get_value",             
                    ]
                },
                {
                    name: "Control",
                    icon: `/images/icon/process.png`,
                    color: "#fbbd5e",
                    blocks: [
                        {
                            xml: `
                                <block type="controls_wait">
                                    <value name="time">
                                        <shadow type="math_number">
                                            <field name="NUM">1</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                        "controls_forever",
                        {
                            xml: `
                                <block type="controls_repeat_ext">
                                    <value name="TIMES">
                                        <shadow type="math_number">
                                            <field name="NUM">10</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                        {
                            xml: `
                                <block type="controls_for">
                                    <field name="VAR">i</field>
                                    <value name="FROM">
                                        <shadow type="math_number">
                                            <field name="NUM">1</field>
                                        </shadow>
                                    </value>
                                    <value name="TO">
                                        <shadow type="math_number">
                                            <field name="NUM">10</field>
                                        </shadow>
                                    </value>
                                    <value name="BY">
                                        <shadow type="math_number">
                                            <field name="NUM">1</field>
                                        </shadow>
                                    </value>
                                </block>
                          `
                        },
                        "controls_if",
                        {
                            xml: `
                                <block type="controls_if">
                                    <mutation else="1"></mutation>
                                </block>
                            `
                        },
                        "controls_wait_until",
                        "controls_whileUntil",
                    ]
                },
                {
                    name: "Operators",
                    icon: `/images/icon/maths.png`,
                    color: "#293939",
                    blocks: [
                        {
                            xml: '<label text="Math"></label>',
                        },
                        {
                            xml: `
                                <block type="math_arithmetic">
                                    <value name="A">
                                        <shadow type="math_number">
                                            <field name="NUM">1</field>
                                        </shadow>
                                    </value>
                                    <field name="OP">ADD</field>
                                    <value name="B">
                                        <shadow type="math_number">
                                            <field name="NUM">1</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                        {
                            xml: `
                                <block type="math_arithmetic">
                                    <value name="A">
                                        <shadow type="math_number">
                                            <field name="NUM">1</field>
                                        </shadow>
                                    </value>
                                    <field name="OP">MINUS</field>
                                    <value name="B">
                                        <shadow type="math_number">
                                            <field name="NUM">1</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                        {
                            xml: `
                                <block type="math_arithmetic">
                                    <value name="A">
                                        <shadow type="math_number">
                                            <field name="NUM">1</field>
                                        </shadow>
                                    </value>
                                    <field name="OP">MULTIPLY</field>
                                    <value name="B">
                                        <shadow type="math_number">
                                            <field name="NUM">1</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                        {
                            xml: `
                                <block type="math_arithmetic">
                                    <value name="A">
                                        <shadow type="math_number">
                                            <field name="NUM">1</field>
                                        </shadow>
                                    </value>
                                    <field name="OP">DIVIDE</field>
                                    <value name="B">
                                        <shadow type="math_number">
                                            <field name="NUM">1</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                        {
                            xml: `
                                <block type="math_modulo">
                                    <value name="DIVIDEND">
                                        <shadow type="math_number">
                                            <field name="NUM">10</field>
                                        </shadow>
                                    </value>
                                    <value name="DIVISOR">
                                        <shadow type="math_number">
                                            <field name="NUM">2</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                        "random_seed",
                        {
                            xml: `
                                <block type="math_random_int">
                                    <value name="FROM">
                                        <shadow type="math_number">
                                            <field name="NUM">1</field>
                                        </shadow>
                                    </value>
                                    <value name="TO">
                                        <shadow type="math_number">
                                            <field name="NUM">100</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                        {
                            xml: `
                                <block type="math_trig">
                                    <value name="NUM">
                                        <shadow type="math_number">
                                            <field name="NUM">45</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                        {
                            xml: `
                                <block type="math_round">
                                    <field name="OP">ROUND</field>
                                    <value name="NUM">
                                    <shadow type="math_number">
                                        <field name="NUM">3.1</field>
                                    </shadow>
                                    </value>
                                </block>
                            `
                        },
                        {
                            xml: '<label text="Logic"></label>',
                        },
                        {
                            xml: `
                                <block type="logic_compare">
                                    <value name="A">
                                        <shadow type="math_number">
                                            <field name="NUM">5</field>
                                        </shadow>
                                    </value>
                                    <field name="OP">GT</field>
                                    <value name="B">
                                        <shadow type="math_number">
                                            <field name="NUM">5</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                        {
                            xml: `
                                <block type="logic_compare">
                                    <value name="A">
                                        <shadow type="math_number">
                                            <field name="NUM">5</field>
                                        </shadow>
                                    </value>
                                    <field name="OP">LT</field>
                                    <value name="B">
                                        <shadow type="math_number">
                                            <field name="NUM">5</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                        {
                            xml: `
                                <block type="logic_compare">
                                    <value name="A">
                                        <shadow type="math_number">
                                            <field name="NUM">5</field>
                                        </shadow>
                                    </value>
                                    <field name="OP">EQ</field>
                                    <value name="B">
                                        <shadow type="math_number">
                                            <field name="NUM">5</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                        "logic_operation",
                        "logic_negate",
                        {
                            xml: '<label text="Text"></label>',
                        },
                        "text",
                        "text_join"
                    ]
                },
                {
                    name: "Variables",
                    icon: `/images/icon/relativity.png`,
                    color: "#ac5e2e",
                    blocks: "VARIABLE"
                },
                {
                    name: "Function",
                    icon: `/images/icon/jigsaw.png`,
                    color: "#17A589",
                    blocks: "PROCEDURE"
                },
                
            ]
        }
    ]
});
