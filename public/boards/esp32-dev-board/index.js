addBoard({
    id: "esp32-dev-board",
    name: "TekTech",
    description: "",
    image: "images/cover.jfif",
    script: [
        "../esp32-dev-board/js/field_bitmap.js",
        "../esp32-dev-board/js/field_note.js",
        "../esp32-dev-board/js/sound.js",

        // "js/field_bitmap.js",
    ],
    css: [
        "../esp32-dev-board/css/field_bitmap.css",
        "../esp32-dev-board/css/field_note.css",
        // "css/field_bitmap.css",
    ],
    blocks: [
        "blocks/blocks_pin.js",
        "blocks/blocks_advanced.js",
        "blocks/blocks_buzzer.js",
        "blocks/blocks_display.js",
        "blocks/blocks_sensor.js",
        "blocks/blocks_rgbled.js",
        "blocks/blocks_switch.js",
        "blocks/blocks_touch.js",
        "blocks/blocks_initialize.js",
        

        "blocks/generators_pin.js",
        "blocks/generators_avanced.js",
        "blocks/generators_buzzer.js",
        "blocks/generators_display.js",
        "blocks/generators_sensor.js",
        "blocks/generators_rgbled.js",
        "blocks/generators_switch.js",
        "blocks/generators_touch.js",
        "blocks/generators_initialize.js",

    ],
    modules: [],
    examples: [
        "Basic",
        {
            name: "Blink",
            files: "../esp32-dev-board/examples/blink",
        },
        {
            name: "Digital Read (IN1)",
            files: "../esp32-dev-board/examples/digital-read",
        },
        {
            name: "Analog Read (IN1)",
            files: "../esp32-dev-board/examples/analog-read",
        },
        "Screen ",
        {
            name: "Text scroll",
            files: "../esp32-dev-board/examples/oled-scroll",
        },
        "Sound",
        {
            name: "Beep",
            files: "../esp32-dev-board/examples/beep",
        },
        {
            name: "Play music",
            files: "../esp32-dev-board/examples/play-music",
        },
        "Project",
        {
            name: "Light Always Here",
            files: "../esp32-dev-board/examples/Light-always-here",
        },
        {
            name: "Hot OR Cold",
            files: "../esp32-dev-board/examples/hot-or-cold",
        },
        {
            name: "Sad OR Happy",
            files: "../esp32-dev-board/examples/sad-or-happy",
        },        
        {
            name: "Random",
            files: "../esp32-dev-board/examples/random",
        },
        {
            name: "Counter",
            files: "../esp32-dev-board/examples/counter",
        },
        {
            name: "Countdown",
            files: "../esp32-dev-board/examples/countdown",
        },
    ],    
    firmware: [{
        name: "MicroPython for TekTech RC Dev Board V2.0.0",
        path: "firmware/MicroPython_for_TekTech_RC_Dev_Board_V2_0_0.bin",
        version: "V1.6.0",
        date: "2021-1-30",
        board: "ESP32 Dev Board",
        cpu: "ESP32"
    }],
    usb: [{ // CP2104
        vendorId: "10C4",
        productId: "EA60"
    }],
    autoCompletion: {
        sensor: {
            light: __Function,
            temperature: __Function
        },
        switch: {
            S1: __Number,
            S2: __Number,
            S3: __Number,
            S4: __Number,
            value: __Function,
            press: __Function,
            release: __Function
        },
        touch: {
            touched: __Function,
            value: __Function
        },
        buzzer: {
            tone: __Function,
            on: __Function,
            off: __Function,
            note: __Function
        },
    },
    level: [{
        name: "Beginner",
        description: "",
        icon: "../kidbright32/images/puzzle.png",
        blocks: [
            {
                name: "Most used",
                icon: "/images/icon/most_used.png",
                color: "#ed3467",
                blocks: [                  
                    {
                        xml: '<label text="Input"></label>',
                    },                
                    {
                        xml: `
                                <block type="pin_digital_read">
                                    <value name="pin">
                                        <shadow type="math_number">
                                            <field name="NUM">12</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                    },

                    {
                        xml: `
                                <block type="pin_analog_read">
                                    <value name="pin">
                                        <shadow type="math_number">
                                            <field name="NUM">34</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                    },
                    {
                        xml: '<label text="Sensors"></label>',
                    },
                    "sensor_light",
                    "sensor_temp",
                    {
                        xml: '<label text="Output"></label>',
                    },


                    {
                        xml: `
                                <block type="pin_digital_write">
                                    <value name="value">
                                        <shadow type="math_number">
                                            <field name="NUM">1</field>
                                        </shadow>
                                    </value>
                                    <value name="pin">
                                        <shadow type="math_number">
                                            <field name="NUM">12</field>
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
      
                    "rgbled_fill_color1",
                   
                    "rgbled_show",
                    "rgbled_clear",
                    {
                        xml: '<label text="Initialize"></label>',
                    },
                    "initialize",
//end of led

                ]
            },

            {
                name: "Inputs",
                icon: "/images/icon/input.png",
                color: "#ed3467",
                blocks: [
                   
                    {
                        xml: '<label text="Input"></label>',
                    },

                   
                    {
                        xml: `
                                <block type="pin_digital_read">
                                    <value name="pin">
                                        <shadow type="math_number">
                                            <field name="NUM">12</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                    },

                    {
                        xml: `
                                <block type="pin_analog_read">
                                    <value name="pin">
                                        <shadow type="math_number">
                                            <field name="NUM">34</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                    },
                    {
                        xml: '<label text="Sensors"></label>',
                    },
                    "sensor_light",
                    "sensor_temp",
                   
//end of led

                ]
            },

            {
                name: "Outputs",
                icon: "/images/icon/output.png",
                color: "#ed3467",
                blocks: [
                   
                   
                    {
                        xml: '<label text="Output"></label>',
                    },


                    {
                        xml: `
                                <block type="pin_digital_write">
                                    <value name="value">
                                        <shadow type="math_number">
                                            <field name="NUM">1</field>
                                        </shadow>
                                    </value>
                                    <value name="pin">
                                        <shadow type="math_number">
                                            <field name="NUM">12</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                    },
                    {
                        xml: `
                                <block type="pin_analog_write">
                                    <value name="value">
                                        <shadow type="math_number">
                                            <field name="NUM">1023</field>
                                        </shadow>
                                    </value>
                                    <value name="pin">
                                        <shadow type="math_number">
                                            <field name="NUM">12</field>
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
//end of led

                ]
            },

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
        {
            name: "Events",
            icon: `/images/icon/switch.png`,
            color: "#e64c3c",
            blocks: [
                {
                    xml: '<label text="Switch"></label>',
                },
		        "switch_on_release",
                "switch_on_press",
                "switch_is_press",
                "switch_is_release",
                "switch_get_value",
                {
                    xml: '<label text="Touch"></label>',
                },               
                "touch_on_press",
                "touch_get_value",
            ]
        },
        
            
        {
            name: "Control",
            icon: `/images/icon/process.png`,
            color: "#ed3467",
            blocks: [{
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
            color: "#ed3467",
            blocks: [{
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
            color: "#ed3467",
            blocks: "VARIABLE"
        },
        {
            name: "Function",
            icon: `/images/icon/jigsaw.png`,
            color: "#ed3467",
            blocks: "PROCEDURE"
        },
        ]
    }]
});
