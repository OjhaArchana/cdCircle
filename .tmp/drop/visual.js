var cdCircle1B3F6EED64F149D0B0D31A1085D93433_DEBUG;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 1539:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ VisualFormattingSettingsModel)
/* harmony export */ });
/* harmony import */ var powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(706);


var FormattingSettingsCard = powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .Card */ .Zb;
var FormattingSettingsModel = powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .Model */ .Hn;
/**
 * Data Point Formatting Card
 */
class DataPointCardSettings extends FormattingSettingsCard {
    defaultColor = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .ColorPicker */ .zH({
        name: "defaultColor",
        displayName: "Default color",
        value: { value: "" }
    });
    showAllDataPoints = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .ToggleSwitch */ .Zh({
        name: "showAllDataPoints",
        displayName: "Show all",
        value: true
    });
    fill = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .ColorPicker */ .zH({
        name: "fill",
        displayName: "Fill",
        value: { value: "" }
    });
    fillRule = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .ColorPicker */ .zH({
        name: "fillRule",
        displayName: "Color saturation",
        value: { value: "" }
    });
    fontSize = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .NumUpDown */ .L_({
        name: "fontSize",
        displayName: "Text Size",
        value: 12
    });
    name = "dataPoint";
    displayName = "Data colors";
    slices = [this.defaultColor, this.showAllDataPoints, this.fill, this.fillRule, this.fontSize];
}
class mapViewCardSettings extends FormattingSettingsCard {
    // defaultColor = new formattingSettings.ColorPicker({
    //     name: "defaultColor",
    //     displayName: "Default color",
    //     value: { value: "" }
    // });
    showmapView = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .ToggleSwitch */ .Zh({
        name: "showmapView",
        displayName: "ShowMap",
        value: true
    });
    // fill = new formattingSettings.ColorPicker({
    //     name: "fill",
    //     displayName: "Fill",
    //     value: { value: "" }
    // });
    // fillRule = new formattingSettings.ColorPicker({
    //     name: "fillRule",
    //     displayName: "Color saturation",
    //     value: { value: "" }
    // });
    // fontSize = new formattingSettings.NumUpDown({
    //     name: "fontSize",
    //     displayName: "Text Size",
    //     value: 12
    // });
    name = "mapView";
    displayName = "Map";
    slices = [this.showmapView];
}
class backgroundColorCardSettings extends FormattingSettingsCard {
    // defaultColor = new formattingSettings.ColorPicker({
    //     name: "defaultColor",
    //     displayName: "Default color",
    //     value: { value: "" }
    // });
    showBackground = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .ToggleSwitch */ .Zh({
        name: "showBackground",
        displayName: "Background",
        value: true
    });
    changeColor = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .ColorPicker */ .zH({
        name: "changeColor",
        displayName: "Color",
        value: { value: "#a0d1ff" }
    });
    // fill = new formattingSettings.ColorPicker({
    //     name: "fill",
    //     displayName: "Fill",
    //     value: { value: "" }
    // });
    // fillRule = new formattingSettings.ColorPicker({
    //     name: "fillRule",
    //     displayName: "Color saturation",
    //     value: { value: "" }
    // });
    // fontSize = new formattingSettings.NumUpDown({
    //     name: "fontSize",
    //     displayName: "Text Size",
    //     value: 12
    // });
    name = "backgroundColor";
    displayName = "Background";
    slices = [this.showBackground, this.changeColor];
}
/**
* visual settings model class
*
*/
class VisualFormattingSettingsModel extends FormattingSettingsModel {
    // Create formatting settings model formatting cards
    dataPointCard = new DataPointCardSettings();
    mapView = new mapViewCardSettings();
    backgroundColor = new backgroundColorCardSettings();
    cards = [this.dataPointCard, this.mapView, this.backgroundColor];
}


/***/ }),

/***/ 2773:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ statesJson)
/* harmony export */ });
const statesJson = {
    "type": "Topology",
    "bbox": [
        -57.66491068874468,
        12.97635452036684,
        957.5235629133763,
        606.5694262668667
    ],
    "transform": {
        "scale": [
            0.010151986255883769,
            0.005935990077365771
        ],
        "translate": [
            -57.66491068874468,
            12.97635452036684
        ]
    },
    "objects": {
        "states": {
            "type": "GeometryCollection",
            "geometries": [
                {
                    "type": "MultiPolygon",
                    "arcs": [
                        [
                            [
                                0
                            ]
                        ],
                        [
                            [
                                1,
                                2,
                                3,
                                4,
                                5
                            ]
                        ]
                    ],
                    "id": "01",
                    "properties": {
                        "name": "Alabama"
                    }
                },
                {
                    "type": "MultiPolygon",
                    "arcs": [
                        [
                            [
                                6
                            ]
                        ],
                        [
                            [
                                7
                            ]
                        ],
                        [
                            [
                                8
                            ]
                        ],
                        [
                            [
                                9
                            ]
                        ],
                        [
                            [
                                10
                            ]
                        ],
                        [
                            [
                                11
                            ]
                        ],
                        [
                            [
                                12
                            ]
                        ],
                        [
                            [
                                13
                            ]
                        ],
                        [
                            [
                                14
                            ]
                        ],
                        [
                            [
                                15
                            ]
                        ],
                        [
                            [
                                16
                            ]
                        ],
                        [
                            [
                                17
                            ]
                        ],
                        [
                            [
                                18
                            ]
                        ],
                        [
                            [
                                19
                            ]
                        ],
                        [
                            [
                                20
                            ]
                        ],
                        [
                            [
                                21
                            ]
                        ],
                        [
                            [
                                22
                            ]
                        ],
                        [
                            [
                                23
                            ]
                        ],
                        [
                            [
                                24
                            ]
                        ],
                        [
                            [
                                25
                            ]
                        ],
                        [
                            [
                                26
                            ]
                        ],
                        [
                            [
                                27
                            ]
                        ],
                        [
                            [
                                28
                            ]
                        ],
                        [
                            [
                                29
                            ]
                        ],
                        [
                            [
                                30
                            ]
                        ],
                        [
                            [
                                31
                            ]
                        ],
                        [
                            [
                                32
                            ]
                        ],
                        [
                            [
                                33
                            ]
                        ],
                        [
                            [
                                34
                            ]
                        ],
                        [
                            [
                                35
                            ]
                        ],
                        [
                            [
                                36
                            ]
                        ],
                        [
                            [
                                37
                            ]
                        ],
                        [
                            [
                                38
                            ]
                        ],
                        [
                            [
                                39
                            ]
                        ],
                        [
                            [
                                40
                            ]
                        ],
                        [
                            [
                                41
                            ]
                        ],
                        [
                            [
                                42
                            ]
                        ],
                        [
                            [
                                43
                            ]
                        ],
                        [
                            [
                                44
                            ]
                        ],
                        [
                            [
                                45
                            ]
                        ],
                        [
                            [
                                46
                            ]
                        ],
                        [
                            [
                                47
                            ]
                        ],
                        [
                            [
                                48
                            ]
                        ],
                        [
                            [
                                49
                            ]
                        ],
                        [
                            [
                                50
                            ]
                        ],
                        [
                            [
                                51
                            ]
                        ],
                        [
                            [
                                52
                            ]
                        ],
                        [
                            [
                                53
                            ]
                        ],
                        [
                            [
                                54
                            ]
                        ],
                        [
                            [
                                55
                            ]
                        ],
                        [
                            [
                                56
                            ]
                        ],
                        [
                            [
                                57
                            ]
                        ],
                        [
                            [
                                58
                            ]
                        ],
                        [
                            [
                                59
                            ]
                        ],
                        [
                            [
                                60
                            ]
                        ],
                        [
                            [
                                61
                            ]
                        ]
                    ],
                    "id": "02",
                    "properties": {
                        "name": "Alaska"
                    }
                },
                {
                    "type": "Polygon",
                    "arcs": [
                        [
                            62,
                            63,
                            64,
                            65,
                            66
                        ]
                    ],
                    "id": "04",
                    "properties": {
                        "name": "Arizona"
                    }
                },
                {
                    "type": "Polygon",
                    "arcs": [
                        [
                            67,
                            68,
                            69,
                            70,
                            71,
                            72
                        ]
                    ],
                    "id": "08",
                    "properties": {
                        "name": "Colorado"
                    }
                },
                {
                    "type": "MultiPolygon",
                    "arcs": [
                        [
                            [
                                73
                            ]
                        ],
                        [
                            [
                                74
                            ]
                        ],
                        [
                            [
                                75
                            ]
                        ],
                        [
                            [
                                76
                            ]
                        ],
                        [
                            [
                                77
                            ]
                        ],
                        [
                            [
                                78
                            ]
                        ],
                        [
                            [
                                79
                            ]
                        ],
                        [
                            [
                                80
                            ]
                        ],
                        [
                            [
                                81
                            ]
                        ],
                        [
                            [
                                82,
                                83,
                                -4
                            ]
                        ]
                    ],
                    "id": "12",
                    "properties": {
                        "name": "Florida"
                    }
                },
                {
                    "type": "Polygon",
                    "arcs": [
                        [
                            84,
                            85,
                            86,
                            87,
                            -83,
                            -3
                        ]
                    ],
                    "id": "13",
                    "properties": {
                        "name": "Georgia"
                    }
                },
                {
                    "type": "Polygon",
                    "arcs": [
                        [
                            88,
                            89,
                            90,
                            91,
                            92
                        ]
                    ],
                    "id": "18",
                    "properties": {
                        "name": "Indiana"
                    }
                },
                {
                    "type": "Polygon",
                    "arcs": [
                        [
                            93,
                            94,
                            95,
                            -70
                        ]
                    ],
                    "id": "20",
                    "properties": {
                        "name": "Kansas"
                    }
                },
                {
                    "type": "MultiPolygon",
                    "arcs": [
                        [
                            [
                                96
                            ]
                        ],
                        [
                            [
                                97
                            ]
                        ],
                        [
                            [
                                98
                            ]
                        ],
                        [
                            [
                                99
                            ]
                        ],
                        [
                            [
                                100
                            ]
                        ],
                        [
                            [
                                101
                            ]
                        ],
                        [
                            [
                                102
                            ]
                        ],
                        [
                            [
                                103,
                                104
                            ]
                        ]
                    ],
                    "id": "23",
                    "properties": {
                        "name": "Maine"
                    }
                },
                {
                    "type": "MultiPolygon",
                    "arcs": [
                        [
                            [
                                105
                            ]
                        ],
                        [
                            [
                                106
                            ]
                        ],
                        [
                            [
                                107,
                                108,
                                109,
                                110,
                                111,
                                112,
                                113,
                                114
                            ]
                        ]
                    ],
                    "id": "25",
                    "properties": {
                        "name": "Massachusetts"
                    }
                },
                {
                    "type": "Polygon",
                    "arcs": [
                        [
                            115,
                            116,
                            117,
                            118,
                            119
                        ]
                    ],
                    "id": "27",
                    "properties": {
                        "name": "Minnesota"
                    }
                },
                {
                    "type": "Polygon",
                    "arcs": [
                        [
                            120,
                            121,
                            122,
                            123,
                            124,
                            125,
                            126,
                            127
                        ]
                    ],
                    "id": "34",
                    "properties": {
                        "name": "New Jersey"
                    }
                },
                {
                    "type": "MultiPolygon",
                    "arcs": [
                        [
                            [
                                128
                            ]
                        ],
                        [
                            [
                                129
                            ]
                        ],
                        [
                            [
                                130,
                                131,
                                132,
                                -86,
                                133
                            ]
                        ]
                    ],
                    "id": "37",
                    "properties": {
                        "name": "North Carolina"
                    }
                },
                {
                    "type": "Polygon",
                    "arcs": [
                        [
                            134,
                            -120,
                            135,
                            136
                        ]
                    ],
                    "id": "38",
                    "properties": {
                        "name": "North Dakota"
                    }
                },
                {
                    "type": "Polygon",
                    "arcs": [
                        [
                            -71,
                            -96,
                            137,
                            138,
                            139,
                            140
                        ]
                    ],
                    "id": "40",
                    "properties": {
                        "name": "Oklahoma"
                    }
                },
                {
                    "type": "Polygon",
                    "arcs": [
                        [
                            141,
                            142,
                            -123,
                            143,
                            144,
                            145,
                            146
                        ]
                    ],
                    "id": "42",
                    "properties": {
                        "name": "Pennsylvania"
                    }
                },
                {
                    "type": "Polygon",
                    "arcs": [
                        [
                            147,
                            -136,
                            -119,
                            148,
                            149,
                            150
                        ]
                    ],
                    "id": "46",
                    "properties": {
                        "name": "South Dakota"
                    }
                },
                {
                    "type": "Polygon",
                    "arcs": [
                        [
                            -140,
                            151,
                            152,
                            153,
                            154
                        ]
                    ],
                    "id": "48",
                    "properties": {
                        "name": "Texas"
                    }
                },
                {
                    "type": "Polygon",
                    "arcs": [
                        [
                            -151,
                            155,
                            -68,
                            156,
                            157,
                            158
                        ]
                    ],
                    "id": "56",
                    "properties": {
                        "name": "Wyoming"
                    }
                },
                {
                    "type": "Polygon",
                    "arcs": [
                        [
                            -114,
                            159,
                            160,
                            161
                        ]
                    ],
                    "id": "09",
                    "properties": {
                        "name": "Connecticut"
                    }
                },
                {
                    "type": "Polygon",
                    "arcs": [
                        [
                            162,
                            163,
                            164,
                            165,
                            166,
                            167,
                            168,
                            -138,
                            -95,
                            169
                        ]
                    ],
                    "id": "29",
                    "properties": {
                        "name": "Missouri"
                    }
                },
                {
                    "type": "Polygon",
                    "arcs": [
                        [
                            170,
                            -146,
                            171,
                            172,
                            173
                        ]
                    ],
                    "id": "54",
                    "properties": {
                        "name": "West Virginia"
                    }
                },
                {
                    "type": "Polygon",
                    "arcs": [
                        [
                            174,
                            175,
                            176,
                            -93,
                            177,
                            -164
                        ]
                    ],
                    "id": "17",
                    "properties": {
                        "name": "Illinois"
                    }
                },
                {
                    "type": "Polygon",
                    "arcs": [
                        [
                            -72,
                            -141,
                            -155,
                            178,
                            -66
                        ]
                    ],
                    "id": "35",
                    "properties": {
                        "name": "New Mexico"
                    }
                },
                {
                    "type": "Polygon",
                    "arcs": [
                        [
                            -169,
                            179,
                            180,
                            181,
                            -152,
                            -139
                        ]
                    ],
                    "id": "05",
                    "properties": {
                        "name": "Arkansas"
                    }
                },
                {
                    "type": "MultiPolygon",
                    "arcs": [
                        [
                            [
                                182
                            ]
                        ],
                        [
                            [
                                183
                            ]
                        ],
                        [
                            [
                                184
                            ]
                        ],
                        [
                            [
                                185
                            ]
                        ],
                        [
                            [
                                186
                            ]
                        ],
                        [
                            [
                                187
                            ]
                        ],
                        [
                            [
                                188
                            ]
                        ],
                        [
                            [
                                189,
                                190,
                                -63,
                                191
                            ]
                        ]
                    ],
                    "id": "06",
                    "properties": {
                        "name": "California"
                    }
                },
                {
                    "type": "MultiPolygon",
                    "arcs": [
                        [
                            [
                                -128,
                                192
                            ]
                        ],
                        [
                            [
                                -144,
                                -122,
                                193,
                                194
                            ]
                        ]
                    ],
                    "id": "10",
                    "properties": {
                        "name": "Delaware"
                    }
                },
                {
                    "type": "Polygon",
                    "arcs": [
                        [
                            195,
                            196
                        ]
                    ],
                    "id": "11",
                    "properties": {
                        "name": "District of Columbia"
                    }
                },
                {
                    "type": "MultiPolygon",
                    "arcs": [
                        [
                            [
                                197
                            ]
                        ],
                        [
                            [
                                198
                            ]
                        ],
                        [
                            [
                                199
                            ]
                        ],
                        [
                            [
                                200
                            ]
                        ],
                        [
                            [
                                201
                            ]
                        ],
                        [
                            [
                                202
                            ]
                        ],
                        [
                            [
                                203
                            ]
                        ],
                        [
                            [
                                204
                            ]
                        ]
                    ],
                    "id": "15",
                    "properties": {
                        "name": "Hawaii"
                    }
                },
                {
                    "type": "Polygon",
                    "arcs": [
                        [
                            -118,
                            205,
                            -175,
                            -163,
                            206,
                            -149
                        ]
                    ],
                    "id": "19",
                    "properties": {
                        "name": "Iowa"
                    }
                },
                {
                    "type": "MultiPolygon",
                    "arcs": [
                        [
                            [
                                -178,
                                -92,
                                207,
                                -174,
                                208,
                                209,
                                -165
                            ]
                        ],
                        [
                            [
                                210,
                                -167
                            ]
                        ]
                    ],
                    "id": "21",
                    "properties": {
                        "name": "Kentucky"
                    }
                },
                {
                    "type": "MultiPolygon",
                    "arcs": [
                        [
                            [
                                211,
                                212
                            ]
                        ],
                        [
                            [
                                213
                            ]
                        ],
                        [
                            [
                                -145,
                                -195,
                                214,
                                215,
                                216,
                                217,
                                -196,
                                218,
                                -172
                            ]
                        ]
                    ],
                    "id": "24",
                    "properties": {
                        "name": "Maryland"
                    }
                },
                {
                    "type": "MultiPolygon",
                    "arcs": [
                        [
                            [
                                219
                            ]
                        ],
                        [
                            [
                                220
                            ]
                        ],
                        [
                            [
                                221
                            ]
                        ],
                        [
                            [
                                222
                            ]
                        ],
                        [
                            [
                                223
                            ]
                        ],
                        [
                            [
                                224
                            ]
                        ],
                        [
                            [
                                225
                            ]
                        ],
                        [
                            [
                                226
                            ]
                        ],
                        [
                            [
                                227,
                                228,
                                -90
                            ]
                        ],
                        [
                            [
                                229
                            ]
                        ],
                        [
                            [
                                230,
                                231
                            ]
                        ]
                    ],
                    "id": "26",
                    "properties": {
                        "name": "Michigan"
                    }
                },
                {
                    "type": "MultiPolygon",
                    "arcs": [
                        [
                            [
                                232
                            ]
                        ],
                        [
                            [
                                233
                            ]
                        ],
                        [
                            [
                                234
                            ]
                        ],
                        [
                            [
                                235
                            ]
                        ],
                        [
                            [
                                -181,
                                236,
                                -6,
                                237,
                                238
                            ]
                        ]
                    ],
                    "id": "28",
                    "properties": {
                        "name": "Mississippi"
                    }
                },
                {
                    "type": "Polygon",
                    "arcs": [
                        [
                            239,
                            -137,
                            -148,
                            -159,
                            240
                        ]
                    ],
                    "id": "30",
                    "properties": {
                        "name": "Montana"
                    }
                },
                {
                    "type": "Polygon",
                    "arcs": [
                        [
                            241,
                            -104,
                            242,
                            -109,
                            243
                        ]
                    ],
                    "id": "33",
                    "properties": {
                        "name": "New Hampshire"
                    }
                },
                {
                    "type": "MultiPolygon",
                    "arcs": [
                        [
                            [
                                244
                            ]
                        ],
                        [
                            [
                                245
                            ]
                        ],
                        [
                            [
                                246,
                                -126
                            ]
                        ],
                        [
                            [
                                247
                            ]
                        ],
                        [
                            [
                                248
                            ]
                        ],
                        [
                            [
                                249,
                                250,
                                -115,
                                -162,
                                251,
                                -124,
                                -143
                            ]
                        ]
                    ],
                    "id": "36",
                    "properties": {
                        "name": "New York"
                    }
                },
                {
                    "type": "MultiPolygon",
                    "arcs": [
                        [
                            [
                                252
                            ]
                        ],
                        [
                            [
                                253
                            ]
                        ],
                        [
                            [
                                -229,
                                254,
                                -147,
                                -171,
                                -208,
                                -91
                            ]
                        ]
                    ],
                    "id": "39",
                    "properties": {
                        "name": "Ohio"
                    }
                },
                {
                    "type": "Polygon",
                    "arcs": [
                        [
                            255,
                            256,
                            257,
                            -190,
                            258
                        ]
                    ],
                    "id": "41",
                    "properties": {
                        "name": "Oregon"
                    }
                },
                {
                    "type": "Polygon",
                    "arcs": [
                        [
                            -168,
                            -211,
                            -166,
                            -210,
                            259,
                            -134,
                            -85,
                            -2,
                            -237,
                            -180
                        ]
                    ],
                    "id": "47",
                    "properties": {
                        "name": "Tennessee"
                    }
                },
                {
                    "type": "Polygon",
                    "arcs": [
                        [
                            260,
                            -157,
                            -73,
                            -65,
                            261
                        ]
                    ],
                    "id": "49",
                    "properties": {
                        "name": "Utah"
                    }
                },
                {
                    "type": "MultiPolygon",
                    "arcs": [
                        [
                            [
                                -216,
                                262
                            ]
                        ],
                        [
                            [
                                263,
                                -212
                            ]
                        ],
                        [
                            [
                                -173,
                                -219,
                                -197,
                                -218,
                                264,
                                -131,
                                -260,
                                -209
                            ]
                        ]
                    ],
                    "id": "51",
                    "properties": {
                        "name": "Virginia"
                    }
                },
                {
                    "type": "MultiPolygon",
                    "arcs": [
                        [
                            [
                                265
                            ]
                        ],
                        [
                            [
                                266
                            ]
                        ],
                        [
                            [
                                267
                            ]
                        ],
                        [
                            [
                                268
                            ]
                        ],
                        [
                            [
                                269
                            ]
                        ],
                        [
                            [
                                270
                            ]
                        ],
                        [
                            [
                                271
                            ]
                        ],
                        [
                            [
                                272
                            ]
                        ],
                        [
                            [
                                273
                            ]
                        ],
                        [
                            [
                                274
                            ]
                        ],
                        [
                            [
                                275,
                                -256,
                                276
                            ]
                        ]
                    ],
                    "id": "53",
                    "properties": {
                        "name": "Washington"
                    }
                },
                {
                    "type": "MultiPolygon",
                    "arcs": [
                        [
                            [
                                277
                            ]
                        ],
                        [
                            [
                                278
                            ]
                        ],
                        [
                            [
                                279
                            ]
                        ],
                        [
                            [
                                280
                            ]
                        ],
                        [
                            [
                                281
                            ]
                        ],
                        [
                            [
                                282
                            ]
                        ],
                        [
                            [
                                283
                            ]
                        ],
                        [
                            [
                                284
                            ]
                        ],
                        [
                            [
                                285
                            ]
                        ],
                        [
                            [
                                286
                            ]
                        ],
                        [
                            [
                                287,
                                -232,
                                288,
                                -176,
                                -206,
                                -117
                            ]
                        ]
                    ],
                    "id": "55",
                    "properties": {
                        "name": "Wisconsin"
                    }
                },
                {
                    "type": "Polygon",
                    "arcs": [
                        [
                            -150,
                            -207,
                            -170,
                            -94,
                            -69,
                            -156
                        ]
                    ],
                    "id": "31",
                    "properties": {
                        "name": "Nebraska"
                    }
                },
                {
                    "type": "Polygon",
                    "arcs": [
                        [
                            -133,
                            289,
                            -87
                        ]
                    ],
                    "id": "45",
                    "properties": {
                        "name": "South Carolina"
                    }
                },
                {
                    "type": "Polygon",
                    "arcs": [
                        [
                            -276,
                            290,
                            -241,
                            -158,
                            -261,
                            291,
                            -257
                        ]
                    ],
                    "id": "16",
                    "properties": {
                        "name": "Idaho"
                    }
                },
                {
                    "type": "Polygon",
                    "arcs": [
                        [
                            -258,
                            -292,
                            -262,
                            -64,
                            -191
                        ]
                    ],
                    "id": "32",
                    "properties": {
                        "name": "Nevada"
                    }
                },
                {
                    "type": "Polygon",
                    "arcs": [
                        [
                            292,
                            -244,
                            -108,
                            -251
                        ]
                    ],
                    "id": "50",
                    "properties": {
                        "name": "Vermont"
                    }
                },
                {
                    "type": "MultiPolygon",
                    "arcs": [
                        [
                            [
                                293
                            ]
                        ],
                        [
                            [
                                294
                            ]
                        ],
                        [
                            [
                                295
                            ]
                        ],
                        [
                            [
                                296
                            ]
                        ],
                        [
                            [
                                297
                            ]
                        ],
                        [
                            [
                                298
                            ]
                        ],
                        [
                            [
                                299
                            ]
                        ],
                        [
                            [
                                -182,
                                -239,
                                300,
                                -153
                            ]
                        ]
                    ],
                    "id": "22",
                    "properties": {
                        "name": "Louisiana"
                    }
                },
                {
                    "type": "MultiPolygon",
                    "arcs": [
                        [
                            [
                                -111,
                                301
                            ]
                        ],
                        [
                            [
                                302
                            ]
                        ],
                        [
                            [
                                303
                            ]
                        ],
                        [
                            [
                                -160,
                                -113,
                                304
                            ]
                        ]
                    ],
                    "id": "44",
                    "properties": {
                        "name": "Rhode Island"
                    }
                }
            ]
        },
        "nation": {
            "type": "GeometryCollection",
            "geometries": [
                {
                    "type": "MultiPolygon",
                    "arcs": [
                        [
                            [
                                0
                            ]
                        ],
                        [
                            [
                                83,
                                4,
                                237,
                                300,
                                153,
                                178,
                                66,
                                191,
                                258,
                                276,
                                290,
                                239,
                                134,
                                115,
                                287,
                                230,
                                288,
                                176,
                                88,
                                227,
                                254,
                                141,
                                249,
                                292,
                                241,
                                104,
                                242,
                                109,
                                301,
                                111,
                                304,
                                160,
                                251,
                                124,
                                246,
                                126,
                                192,
                                120,
                                193,
                                214,
                                262,
                                216,
                                264,
                                131,
                                289,
                                87
                            ]
                        ],
                        [
                            [
                                6
                            ]
                        ],
                        [
                            [
                                7
                            ]
                        ],
                        [
                            [
                                8
                            ]
                        ],
                        [
                            [
                                9
                            ]
                        ],
                        [
                            [
                                10
                            ]
                        ],
                        [
                            [
                                11
                            ]
                        ],
                        [
                            [
                                12
                            ]
                        ],
                        [
                            [
                                13
                            ]
                        ],
                        [
                            [
                                14
                            ]
                        ],
                        [
                            [
                                15
                            ]
                        ],
                        [
                            [
                                16
                            ]
                        ],
                        [
                            [
                                17
                            ]
                        ],
                        [
                            [
                                18
                            ]
                        ],
                        [
                            [
                                19
                            ]
                        ],
                        [
                            [
                                20
                            ]
                        ],
                        [
                            [
                                21
                            ]
                        ],
                        [
                            [
                                22
                            ]
                        ],
                        [
                            [
                                23
                            ]
                        ],
                        [
                            [
                                24
                            ]
                        ],
                        [
                            [
                                25
                            ]
                        ],
                        [
                            [
                                26
                            ]
                        ],
                        [
                            [
                                27
                            ]
                        ],
                        [
                            [
                                28
                            ]
                        ],
                        [
                            [
                                29
                            ]
                        ],
                        [
                            [
                                30
                            ]
                        ],
                        [
                            [
                                31
                            ]
                        ],
                        [
                            [
                                32
                            ]
                        ],
                        [
                            [
                                33
                            ]
                        ],
                        [
                            [
                                34
                            ]
                        ],
                        [
                            [
                                35
                            ]
                        ],
                        [
                            [
                                36
                            ]
                        ],
                        [
                            [
                                37
                            ]
                        ],
                        [
                            [
                                38
                            ]
                        ],
                        [
                            [
                                39
                            ]
                        ],
                        [
                            [
                                40
                            ]
                        ],
                        [
                            [
                                41
                            ]
                        ],
                        [
                            [
                                42
                            ]
                        ],
                        [
                            [
                                43
                            ]
                        ],
                        [
                            [
                                44
                            ]
                        ],
                        [
                            [
                                45
                            ]
                        ],
                        [
                            [
                                46
                            ]
                        ],
                        [
                            [
                                47
                            ]
                        ],
                        [
                            [
                                48
                            ]
                        ],
                        [
                            [
                                49
                            ]
                        ],
                        [
                            [
                                50
                            ]
                        ],
                        [
                            [
                                51
                            ]
                        ],
                        [
                            [
                                52
                            ]
                        ],
                        [
                            [
                                53
                            ]
                        ],
                        [
                            [
                                54
                            ]
                        ],
                        [
                            [
                                55
                            ]
                        ],
                        [
                            [
                                56
                            ]
                        ],
                        [
                            [
                                57
                            ]
                        ],
                        [
                            [
                                58
                            ]
                        ],
                        [
                            [
                                59
                            ]
                        ],
                        [
                            [
                                60
                            ]
                        ],
                        [
                            [
                                61
                            ]
                        ],
                        [
                            [
                                73
                            ]
                        ],
                        [
                            [
                                74
                            ]
                        ],
                        [
                            [
                                75
                            ]
                        ],
                        [
                            [
                                76
                            ]
                        ],
                        [
                            [
                                77
                            ]
                        ],
                        [
                            [
                                78
                            ]
                        ],
                        [
                            [
                                79
                            ]
                        ],
                        [
                            [
                                80
                            ]
                        ],
                        [
                            [
                                81
                            ]
                        ],
                        [
                            [
                                96
                            ]
                        ],
                        [
                            [
                                97
                            ]
                        ],
                        [
                            [
                                98
                            ]
                        ],
                        [
                            [
                                99
                            ]
                        ],
                        [
                            [
                                100
                            ]
                        ],
                        [
                            [
                                101
                            ]
                        ],
                        [
                            [
                                102
                            ]
                        ],
                        [
                            [
                                105
                            ]
                        ],
                        [
                            [
                                106
                            ]
                        ],
                        [
                            [
                                128
                            ]
                        ],
                        [
                            [
                                129
                            ]
                        ],
                        [
                            [
                                182
                            ]
                        ],
                        [
                            [
                                183
                            ]
                        ],
                        [
                            [
                                184
                            ]
                        ],
                        [
                            [
                                185
                            ]
                        ],
                        [
                            [
                                186
                            ]
                        ],
                        [
                            [
                                187
                            ]
                        ],
                        [
                            [
                                188
                            ]
                        ],
                        [
                            [
                                197
                            ]
                        ],
                        [
                            [
                                198
                            ]
                        ],
                        [
                            [
                                199
                            ]
                        ],
                        [
                            [
                                200
                            ]
                        ],
                        [
                            [
                                201
                            ]
                        ],
                        [
                            [
                                202
                            ]
                        ],
                        [
                            [
                                203
                            ]
                        ],
                        [
                            [
                                204
                            ]
                        ],
                        [
                            [
                                212,
                                263
                            ]
                        ],
                        [
                            [
                                213
                            ]
                        ],
                        [
                            [
                                219
                            ]
                        ],
                        [
                            [
                                220
                            ]
                        ],
                        [
                            [
                                221
                            ]
                        ],
                        [
                            [
                                222
                            ]
                        ],
                        [
                            [
                                223
                            ]
                        ],
                        [
                            [
                                224
                            ]
                        ],
                        [
                            [
                                225
                            ]
                        ],
                        [
                            [
                                226
                            ]
                        ],
                        [
                            [
                                229
                            ]
                        ],
                        [
                            [
                                232
                            ]
                        ],
                        [
                            [
                                233
                            ]
                        ],
                        [
                            [
                                234
                            ]
                        ],
                        [
                            [
                                235
                            ]
                        ],
                        [
                            [
                                244
                            ]
                        ],
                        [
                            [
                                245
                            ]
                        ],
                        [
                            [
                                247
                            ]
                        ],
                        [
                            [
                                248
                            ]
                        ],
                        [
                            [
                                252
                            ]
                        ],
                        [
                            [
                                253
                            ]
                        ],
                        [
                            [
                                265
                            ]
                        ],
                        [
                            [
                                266
                            ]
                        ],
                        [
                            [
                                267
                            ]
                        ],
                        [
                            [
                                268
                            ]
                        ],
                        [
                            [
                                269
                            ]
                        ],
                        [
                            [
                                270
                            ]
                        ],
                        [
                            [
                                271
                            ]
                        ],
                        [
                            [
                                272
                            ]
                        ],
                        [
                            [
                                273
                            ]
                        ],
                        [
                            [
                                274
                            ]
                        ],
                        [
                            [
                                277
                            ]
                        ],
                        [
                            [
                                278
                            ]
                        ],
                        [
                            [
                                279
                            ]
                        ],
                        [
                            [
                                280
                            ]
                        ],
                        [
                            [
                                281
                            ]
                        ],
                        [
                            [
                                282
                            ]
                        ],
                        [
                            [
                                283
                            ]
                        ],
                        [
                            [
                                284
                            ]
                        ],
                        [
                            [
                                285
                            ]
                        ],
                        [
                            [
                                286
                            ]
                        ],
                        [
                            [
                                293
                            ]
                        ],
                        [
                            [
                                294
                            ]
                        ],
                        [
                            [
                                295
                            ]
                        ],
                        [
                            [
                                296
                            ]
                        ],
                        [
                            [
                                297
                            ]
                        ],
                        [
                            [
                                298
                            ]
                        ],
                        [
                            [
                                299
                            ]
                        ],
                        [
                            [
                                302
                            ]
                        ],
                        [
                            [
                                303
                            ]
                        ]
                    ]
                }
            ]
        }
    },
    "arcs": [
        [
            [
                69506,
                80772
            ],
            [
                380,
                -157
            ],
            [
                7,
                -84
            ],
            [
                101,
                130
            ],
            [
                -57,
                89
            ],
            [
                -74,
                -43
            ],
            [
                -256,
                100
            ],
            [
                -101,
                -35
            ]
        ],
        [
            [
                68880,
                62501
            ],
            [
                -7,
                -46
            ],
            [
                1414,
                -189
            ],
            [
                1042,
                -124
            ],
            [
                1847,
                -308
            ],
            [
                396,
                -61
            ]
        ],
        [
            [
                73572,
                61773
            ],
            [
                70,
                469
            ],
            [
                326,
                1939
            ],
            [
                906,
                5571
            ],
            [
                62,
                59
            ],
            [
                -19,
                125
            ],
            [
                95,
                129
            ],
            [
                64,
                485
            ],
            [
                82,
                222
            ],
            [
                132,
                204
            ],
            [
                41,
                265
            ],
            [
                67,
                105
            ],
            [
                -46,
                398
            ],
            [
                134,
                66
            ],
            [
                87,
                117
            ],
            [
                -60,
                183
            ],
            [
                -141,
                178
            ],
            [
                -78,
                187
            ],
            [
                35,
                181
            ],
            [
                6,
                285
            ],
            [
                -28,
                289
            ],
            [
                -92,
                408
            ],
            [
                70,
                398
            ],
            [
                -3,
                146
            ],
            [
                146,
                260
            ],
            [
                52,
                384
            ],
            [
                -38,
                200
            ],
            [
                20,
                139
            ],
            [
                -32,
                271
            ],
            [
                22,
                258
            ],
            [
                -42,
                80
            ],
            [
                37,
                340
            ],
            [
                156,
                271
            ],
            [
                91,
                397
            ]
        ],
        [
            [
                75694,
                76782
            ],
            [
                -1690,
                351
            ],
            [
                -1190,
                211
            ],
            [
                -1182,
                171
            ],
            [
                -870,
                144
            ],
            [
                24,
                123
            ],
            [
                -67,
                390
            ],
            [
                174,
                280
            ],
            [
                45,
                157
            ],
            [
                254,
                224
            ],
            [
                34,
                165
            ],
            [
                -79,
                476
            ],
            [
                74,
                193
            ],
            [
                89,
                89
            ],
            [
                -101,
                97
            ],
            [
                -35,
                248
            ],
            [
                -81,
                121
            ],
            [
                59,
                51
            ],
            [
                -94,
                99
            ]
        ],
        [
            [
                71058,
                80372
            ],
            [
                -260,
                157
            ],
            [
                -344,
                138
            ],
            [
                -239,
                26
            ],
            [
                45,
                -129
            ],
            [
                86,
                72
            ],
            [
                239,
                -124
            ],
            [
                16,
                -113
            ],
            [
                -189,
                -303
            ],
            [
                -123,
                -105
            ],
            [
                -67,
                -290
            ],
            [
                44,
                -199
            ],
            [
                -29,
                -297
            ],
            [
                -54,
                -152
            ],
            [
                -142,
                -85
            ],
            [
                -95,
                167
            ],
            [
                22,
                122
            ],
            [
                -71,
                405
            ],
            [
                12,
                507
            ],
            [
                -45,
                224
            ],
            [
                -105,
                29
            ],
            [
                0,
                -120
            ],
            [
                -145,
                -111
            ],
            [
                -105,
                62
            ],
            [
                -33,
                -66
            ],
            [
                -117,
                89
            ]
        ],
        [
            [
                69359,
                80276
            ],
            [
                -134,
                -1892
            ],
            [
                -235,
                -3167
            ],
            [
                -52,
                -748
            ],
            [
                28,
                -1877
            ],
            [
                54,
                -5177
            ],
            [
                39,
                -2880
            ],
            [
                26,
                -1662
            ],
            [
                -109,
                -102
            ],
            [
                -96,
                -270
            ]
        ],
        [
            [
                15941,
                90739
            ],
            [
                47,
                -223
            ],
            [
                44,
                31
            ],
            [
                -91,
                192
            ]
        ],
        [
            [
                15442,
                93819
            ],
            [
                42,
                -103
            ],
            [
                61,
                69
            ],
            [
                -2,
                -172
            ],
            [
                161,
                -206
            ],
            [
                65,
                -149
            ],
            [
                -24,
                -118
            ],
            [
                125,
                -104
            ],
            [
                -52,
                383
            ],
            [
                56,
                -94
            ],
            [
                91,
                167
            ],
            [
                61,
                -77
            ],
            [
                -34,
                266
            ],
            [
                -96,
                -86
            ],
            [
                21,
                114
            ],
            [
                -138,
                -53
            ],
            [
                -22,
                160
            ],
            [
                -134,
                106
            ],
            [
                -181,
                -103
            ]
        ],
        [
            [
                15046,
                95861
            ],
            [
                118,
                -96
            ],
            [
                59,
                144
            ],
            [
                -121,
                21
            ],
            [
                -56,
                -69
            ]
        ],
        [
            [
                14874,
                94754
            ],
            [
                65,
                -192
            ],
            [
                169,
                -201
            ],
            [
                102,
                16
            ],
            [
                39,
                195
            ],
            [
                12,
                -197
            ],
            [
                -32,
                -217
            ],
            [
                89,
                -105
            ],
            [
                62,
                78
            ],
            [
                103,
                -23
            ],
            [
                -54,
                -154
            ],
            [
                151,
                129
            ],
            [
                -76,
                -123
            ],
            [
                164,
                31
            ],
            [
                -6,
                121
            ],
            [
                73,
                -20
            ],
            [
                100,
                -147
            ],
            [
                76,
                287
            ],
            [
                -61,
                -38
            ],
            [
                -7,
                239
            ],
            [
                131,
                -34
            ],
            [
                -74,
                268
            ],
            [
                -171,
                -105
            ],
            [
                62,
                163
            ],
            [
                -90,
                160
            ],
            [
                -146,
                117
            ],
            [
                126,
                37
            ],
            [
                -146,
                104
            ],
            [
                -35,
                115
            ],
            [
                -45,
                -119
            ],
            [
                22,
                -151
            ],
            [
                -141,
                441
            ],
            [
                -92,
                126
            ],
            [
                -105,
                34
            ],
            [
                128,
                -263
            ],
            [
                -55,
                -17
            ],
            [
                72,
                -272
            ],
            [
                -209,
                417
            ],
            [
                -96,
                -196
            ],
            [
                -2,
                -257
            ],
            [
                -109,
                -143
            ],
            [
                6,
                -104
            ]
        ],
        [
            [
                14854,
                96003
            ],
            [
                119,
                -221
            ],
            [
                61,
                63
            ],
            [
                -150,
                199
            ],
            [
                -30,
                -41
            ]
        ],
        [
            [
                14435,
                96805
            ],
            [
                71,
                -113
            ],
            [
                -3,
                201
            ],
            [
                -68,
                -88
            ]
        ],
        [
            [
                12752,
                97824
            ],
            [
                9,
                -151
            ],
            [
                50,
                124
            ],
            [
                -59,
                27
            ]
        ],
        [
            [
                12678,
                97489
            ],
            [
                67,
                -76
            ],
            [
                -9,
                284
            ],
            [
                -62,
                -20
            ],
            [
                4,
                -188
            ]
        ],
        [
            [
                12397,
                97795
            ],
            [
                79,
                -153
            ],
            [
                -37,
                -93
            ],
            [
                62,
                -101
            ],
            [
                107,
                47
            ],
            [
                -29,
                107
            ],
            [
                -182,
                193
            ]
        ],
        [
            [
                12157,
                97232
            ],
            [
                72,
                -101
            ],
            [
                166,
                95
            ],
            [
                -15,
                134
            ],
            [
                -78,
                -137
            ],
            [
                -13,
                286
            ],
            [
                -67,
                -120
            ],
            [
                -52,
                93
            ],
            [
                -13,
                -250
            ]
        ],
        [
            [
                12330,
                92853
            ],
            [
                20,
                -148
            ],
            [
                159,
                -124
            ],
            [
                -98,
                298
            ],
            [
                -81,
                -26
            ]
        ],
        [
            [
                11676,
                97411
            ],
            [
                39,
                -75
            ],
            [
                105,
                122
            ],
            [
                -77,
                52
            ],
            [
                -67,
                -99
            ]
        ],
        [
            [
                11421,
                97611
            ],
            [
                92,
                -25
            ],
            [
                -51,
                170
            ],
            [
                -41,
                -145
            ]
        ],
        [
            [
                12196,
                86075
            ],
            [
                110,
                -33
            ],
            [
                3,
                101
            ],
            [
                -113,
                -68
            ]
        ],
        [
            [
                11193,
                98205
            ],
            [
                7,
                -58
            ],
            [
                201,
                186
            ],
            [
                -53,
                52
            ],
            [
                -155,
                -180
            ]
        ],
        [
            [
                10074,
                98386
            ],
            [
                132,
                -10
            ],
            [
                -14,
                76
            ],
            [
                -118,
                -66
            ]
        ],
        [
            [
                9884,
                98128
            ],
            [
                28,
                -56
            ],
            [
                93,
                143
            ],
            [
                -78,
                113
            ],
            [
                -43,
                -200
            ]
        ],
        [
            [
                9682,
                98209
            ],
            [
                113,
                -63
            ],
            [
                74,
                186
            ],
            [
                -177,
                16
            ],
            [
                -10,
                -139
            ]
        ],
        [
            [
                10033,
                90043
            ],
            [
                198,
                78
            ],
            [
                97,
                -139
            ],
            [
                133,
                6
            ],
            [
                96,
                -81
            ],
            [
                10,
                159
            ],
            [
                78,
                -4
            ],
            [
                46,
                160
            ],
            [
                9,
                450
            ],
            [
                -177,
                9
            ],
            [
                -80,
                127
            ],
            [
                -69,
                -160
            ],
            [
                -79,
                -22
            ],
            [
                -242,
                -381
            ],
            [
                -20,
                -202
            ]
        ],
        [
            [
                8760,
                99025
            ],
            [
                201,
                -102
            ],
            [
                44,
                40
            ],
            [
                207,
                -329
            ],
            [
                81,
                99
            ],
            [
                18,
                -87
            ],
            [
                -104,
                -66
            ],
            [
                -43,
                -110
            ],
            [
                68,
                -138
            ],
            [
                186,
                -32
            ],
            [
                -15,
                119
            ],
            [
                68,
                60
            ],
            [
                68,
                -133
            ],
            [
                63,
                124
            ],
            [
                -181,
                237
            ],
            [
                211,
                -121
            ],
            [
                -7,
                104
            ],
            [
                -91,
                97
            ],
            [
                -133,
                39
            ],
            [
                -116,
                210
            ],
            [
                -179,
                -40
            ],
            [
                -91,
                90
            ],
            [
                -160,
                62
            ],
            [
                -95,
                -123
            ]
        ],
        [
            [
                10675,
                82812
            ],
            [
                212,
                -149
            ],
            [
                259,
                -225
            ],
            [
                359,
                -268
            ],
            [
                208,
                -116
            ],
            [
                258,
                -84
            ],
            [
                179,
                32
            ],
            [
                3,
                186
            ],
            [
                -78,
                336
            ],
            [
                32,
                183
            ],
            [
                188,
                49
            ],
            [
                135,
                -11
            ],
            [
                107,
                107
            ],
            [
                84,
                -50
            ],
            [
                90,
                95
            ],
            [
                111,
                -270
            ],
            [
                174,
                40
            ],
            [
                -34,
                -143
            ],
            [
                -119,
                -104
            ],
            [
                -125,
                45
            ],
            [
                27,
                -218
            ],
            [
                -102,
                -299
            ],
            [
                -65,
                -31
            ],
            [
                -31,
                -168
            ],
            [
                101,
                -102
            ],
            [
                79,
                236
            ],
            [
                -30,
                174
            ],
            [
                135,
                305
            ],
            [
                80,
                -38
            ],
            [
                -150,
                -350
            ],
            [
                42,
                -213
            ],
            [
                90,
                -120
            ],
            [
                -80,
                -103
            ],
            [
                -217,
                52
            ],
            [
                -362,
                -286
            ],
            [
                11,
                -172
            ],
            [
                -42,
                -387
            ],
            [
                -325,
                -737
            ],
            [
                -149,
                -171
            ],
            [
                -58,
                -196
            ],
            [
                -145,
                -222
            ],
            [
                101,
                -35
            ],
            [
                57,
                -159
            ],
            [
                54,
                -421
            ],
            [
                247,
                104
            ],
            [
                311,
                -10
            ],
            [
                225,
                -224
            ],
            [
                99,
                -195
            ],
            [
                58,
                -394
            ],
            [
                60,
                -252
            ],
            [
                230,
                -468
            ],
            [
                124,
                -140
            ],
            [
                155,
                74
            ],
            [
                134,
                -81
            ],
            [
                172,
                -212
            ],
            [
                165,
                -284
            ],
            [
                130,
                -88
            ],
            [
                129,
                133
            ],
            [
                238,
                -92
            ],
            [
                95,
                -123
            ],
            [
                169,
                -392
            ],
            [
                73,
                -5
            ],
            [
                239,
                172
            ],
            [
                18,
                100
            ],
            [
                -124,
                170
            ],
            [
                9,
                164
            ],
            [
                76,
                21
            ],
            [
                36,
                -151
            ],
            [
                89,
                -111
            ],
            [
                39,
                -154
            ],
            [
                107,
                159
            ],
            [
                10,
                262
            ],
            [
                103,
                77
            ],
            [
                76,
                -154
            ],
            [
                171,
                -50
            ],
            [
                267,
                120
            ],
            [
                -63,
                180
            ],
            [
                15,
                104
            ],
            [
                188,
                61
            ],
            [
                -39,
                166
            ],
            [
                196,
                58
            ],
            [
                50,
                -112
            ],
            [
                143,
                -13
            ],
            [
                16,
                65
            ],
            [
                234,
                -168
            ],
            [
                186,
                129
            ],
            [
                46,
                -33
            ],
            [
                77,
                145
            ],
            [
                36,
                -63
            ],
            [
                150,
                172
            ],
            [
                144,
                34
            ],
            [
                71,
                -53
            ],
            [
                278,
                -28
            ],
            [
                134,
                149
            ],
            [
                130,
                66
            ],
            [
                89,
                -35
            ],
            [
                179,
                -246
            ],
            [
                166,
                -87
            ],
            [
                551,
                444
            ],
            [
                124,
                25
            ],
            [
                1418,
                12234
            ],
            [
                190,
                47
            ],
            [
                10,
                -122
            ],
            [
                203,
                99
            ],
            [
                84,
                -245
            ],
            [
                227,
                -110
            ],
            [
                4,
                366
            ],
            [
                81,
                102
            ],
            [
                140,
                60
            ],
            [
                56,
                170
            ],
            [
                488,
                525
            ],
            [
                126,
                408
            ],
            [
                191,
                -431
            ],
            [
                94,
                -51
            ],
            [
                20,
                -175
            ],
            [
                -40,
                -232
            ],
            [
                66,
                -31
            ],
            [
                -47,
                -166
            ],
            [
                141,
                -156
            ],
            [
                148,
                -261
            ],
            [
                221,
                220
            ],
            [
                16,
                190
            ],
            [
                72,
                162
            ],
            [
                106,
                -8
            ],
            [
                172,
                209
            ],
            [
                90,
                202
            ],
            [
                189,
                83
            ],
            [
                249,
                287
            ],
            [
                -21,
                71
            ],
            [
                168,
                240
            ],
            [
                75,
                170
            ],
            [
                120,
                154
            ],
            [
                207,
                362
            ],
            [
                194,
                296
            ],
            [
                -17,
                181
            ],
            [
                140,
                -19
            ],
            [
                14,
                241
            ],
            [
                121,
                28
            ],
            [
                67,
                249
            ],
            [
                100,
                -76
            ],
            [
                255,
                139
            ],
            [
                134,
                -28
            ],
            [
                163,
                80
            ],
            [
                44,
                114
            ],
            [
                138,
                -54
            ],
            [
                87,
                232
            ],
            [
                -10,
                219
            ],
            [
                60,
                227
            ],
            [
                143,
                342
            ],
            [
                -50,
                542
            ],
            [
                -96,
                348
            ],
            [
                -67,
                -105
            ],
            [
                -46,
                75
            ],
            [
                -181,
                -461
            ],
            [
                66,
                -185
            ],
            [
                -64,
                -302
            ],
            [
                -87,
                -260
            ],
            [
                -74,
                -60
            ],
            [
                126,
                281
            ],
            [
                34,
                394
            ],
            [
                -31,
                143
            ],
            [
                -124,
                16
            ],
            [
                -143,
                -77
            ],
            [
                -105,
                -175
            ],
            [
                23,
                -170
            ],
            [
                -52,
                -334
            ],
            [
                -1,
                316
            ],
            [
                -43,
                99
            ],
            [
                27,
                150
            ],
            [
                -112,
                -62
            ],
            [
                -45,
                -134
            ],
            [
                24,
                -199
            ],
            [
                -48,
                -275
            ],
            [
                15,
                -216
            ],
            [
                -61,
                230
            ],
            [
                44,
                113
            ],
            [
                -91,
                164
            ],
            [
                -86,
                -215
            ],
            [
                -101,
                -7
            ],
            [
                -30,
                -132
            ],
            [
                44,
                -187
            ],
            [
                80,
                -60
            ],
            [
                -58,
                -170
            ],
            [
                83,
                -8
            ],
            [
                -191,
                -138
            ],
            [
                -25,
                -161
            ],
            [
                -107,
                -53
            ],
            [
                -138,
                -197
            ],
            [
                -246,
                -69
            ],
            [
                -17,
                -242
            ],
            [
                -74,
                -272
            ],
            [
                -79,
                -23
            ],
            [
                -12,
                -118
            ],
            [
                219,
                58
            ],
            [
                -197,
                -160
            ],
            [
                -63,
                12
            ],
            [
                -197,
                -273
            ],
            [
                -56,
                -280
            ],
            [
                -14,
                125
            ],
            [
                -202,
                37
            ],
            [
                -118,
                -282
            ],
            [
                -218,
                -386
            ],
            [
                -127,
                -421
            ],
            [
                -122,
                -123
            ],
            [
                -27,
                93
            ],
            [
                136,
                181
            ],
            [
                38,
                204
            ],
            [
                156,
                360
            ],
            [
                128,
                533
            ],
            [
                -132,
                -48
            ],
            [
                -62,
                -149
            ],
            [
                -84,
                1
            ],
            [
                -99,
                114
            ],
            [
                -52,
                -307
            ],
            [
                -111,
                -222
            ],
            [
                -48,
                110
            ],
            [
                -114,
                -66
            ],
            [
                -46,
                -158
            ],
            [
                -33,
                119
            ],
            [
                -95,
                -53
            ],
            [
                -7,
                89
            ],
            [
                133,
                14
            ],
            [
                132,
                153
            ],
            [
                58,
                1
            ],
            [
                130,
                346
            ],
            [
                -120,
                172
            ],
            [
                -65,
                3
            ],
            [
                -42,
                154
            ],
            [
                -132,
                -181
            ],
            [
                -66,
                30
            ],
            [
                -218,
                -176
            ],
            [
                -178,
                -190
            ],
            [
                -18,
                -114
            ],
            [
                -174,
                -184
            ],
            [
                -149,
                -44
            ],
            [
                -131,
                -111
            ],
            [
                -217,
                -96
            ],
            [
                -195,
                -143
            ],
            [
                33,
                -152
            ],
            [
                61,
                18
            ],
            [
                -66,
                -341
            ],
            [
                9,
                -235
            ],
            [
                -56,
                319
            ],
            [
                -180,
                249
            ],
            [
                -233,
                14
            ],
            [
                -225,
                -109
            ],
            [
                45,
                -181
            ],
            [
                -124,
                91
            ],
            [
                -378,
                -50
            ],
            [
                -106,
                16
            ],
            [
                -520,
                275
            ],
            [
                -130,
                306
            ],
            [
                42,
                -206
            ],
            [
                75,
                -155
            ],
            [
                63,
                -18
            ],
            [
                -114,
                -134
            ],
            [
                -235,
                -23
            ],
            [
                60,
                -74
            ],
            [
                -91,
                -38
            ],
            [
                36,
                -191
            ],
            [
                -147,
                213
            ],
            [
                -200,
                -177
            ],
            [
                -79,
                43
            ],
            [
                77,
                -189
            ],
            [
                -140,
                182
            ],
            [
                18,
                139
            ],
            [
                -225,
                153
            ],
            [
                14,
                -275
            ],
            [
                61,
                16
            ],
            [
                238,
                -222
            ],
            [
                -52,
                -153
            ],
            [
                -98,
                142
            ],
            [
                43,
                -170
            ],
            [
                -167,
                120
            ],
            [
                -82,
                -68
            ],
            [
                187,
                -179
            ],
            [
                -137,
                77
            ],
            [
                -85,
                -183
            ],
            [
                36,
                -225
            ],
            [
                -119,
                271
            ],
            [
                -49,
                -239
            ],
            [
                -30,
                256
            ],
            [
                -69,
                86
            ],
            [
                -49,
                -100
            ],
            [
                -80,
                202
            ],
            [
                -155,
                53
            ],
            [
                54,
                -382
            ],
            [
                -81,
                19
            ],
            [
                -55,
                417
            ],
            [
                100,
                20
            ],
            [
                -67,
                366
            ],
            [
                85,
                -174
            ],
            [
                66,
                194
            ],
            [
                -57,
                288
            ],
            [
                133,
                221
            ],
            [
                -78,
                173
            ],
            [
                -83,
                21
            ],
            [
                -49,
                -271
            ],
            [
                -26,
                268
            ],
            [
                -72,
                47
            ],
            [
                -193,
                -61
            ],
            [
                -106,
                186
            ],
            [
                31,
                -165
            ],
            [
                -51,
                -198
            ],
            [
                -4,
                275
            ],
            [
                -110,
                -27
            ],
            [
                14,
                416
            ],
            [
                -118,
                -191
            ],
            [
                43,
                157
            ],
            [
                -154,
                355
            ],
            [
                -34,
                20
            ],
            [
                -54,
                -246
            ],
            [
                -11,
                222
            ],
            [
                -55,
                6
            ],
            [
                -96,
                278
            ],
            [
                -121,
                28
            ],
            [
                -42,
                -91
            ],
            [
                -70,
                163
            ],
            [
                -63,
                8
            ],
            [
                -94,
                -123
            ],
            [
                32,
                -226
            ],
            [
                144,
                -94
            ],
            [
                201,
                -416
            ],
            [
                -51,
                12
            ],
            [
                -148,
                203
            ],
            [
                -148,
                -173
            ],
            [
                58,
                -357
            ],
            [
                110,
                -270
            ],
            [
                43,
                -434
            ],
            [
                -59,
                -226
            ],
            [
                143,
                -114
            ],
            [
                236,
                -345
            ],
            [
                75,
                178
            ],
            [
                75,
                43
            ],
            [
                82,
                -148
            ],
            [
                254,
                89
            ],
            [
                -245,
                -157
            ],
            [
                -133,
                -173
            ],
            [
                129,
                -322
            ],
            [
                98,
                -94
            ],
            [
                -71,
                -54
            ],
            [
                -93,
                156
            ],
            [
                -33,
                201
            ],
            [
                -181,
                9
            ],
            [
                -69,
                -64
            ],
            [
                -137,
                170
            ],
            [
                -49,
                181
            ],
            [
                -117,
                56
            ],
            [
                -117,
                218
            ],
            [
                40,
                161
            ],
            [
                -55,
                1
            ],
            [
                -171,
                314
            ],
            [
                31,
                150
            ],
            [
                -189,
                301
            ],
            [
                66,
                136
            ],
            [
                -91,
                263
            ],
            [
                -158,
                25
            ],
            [
                83,
                47
            ],
            [
                -18,
                182
            ],
            [
                -278,
                203
            ],
            [
                13,
                145
            ],
            [
                -154,
                94
            ],
            [
                -17,
                467
            ],
            [
                38,
                -73
            ],
            [
                125,
                26
            ],
            [
                142,
                115
            ],
            [
                46,
                137
            ],
            [
                -46,
                163
            ],
            [
                -111,
                177
            ],
            [
                -89,
                7
            ],
            [
                -65,
                157
            ],
            [
                24,
                152
            ],
            [
                -87,
                322
            ],
            [
                -105,
                104
            ],
            [
                -104,
                2
            ],
            [
                -167,
                132
            ],
            [
                7,
                119
            ],
            [
                -95,
                44
            ],
            [
                7,
                143
            ],
            [
                -126,
                -77
            ],
            [
                -56,
                304
            ],
            [
                -130,
                -26
            ],
            [
                7,
                168
            ],
            [
                -79,
                -51
            ],
            [
                -148,
                237
            ],
            [
                92,
                -55
            ],
            [
                -4,
                206
            ],
            [
                -99,
                261
            ],
            [
                -140,
                18
            ],
            [
                -143,
                251
            ],
            [
                -72,
                -133
            ],
            [
                -137,
                326
            ],
            [
                -23,
                -91
            ],
            [
                -80,
                128
            ],
            [
                12,
                136
            ],
            [
                -101,
                -74
            ],
            [
                -95,
                40
            ],
            [
                -76,
                182
            ],
            [
                155,
                167
            ],
            [
                -162,
                174
            ],
            [
                -21,
                142
            ],
            [
                -59,
                -166
            ],
            [
                -5,
                187
            ],
            [
                -85,
                -70
            ],
            [
                -28,
                88
            ],
            [
                -262,
                72
            ],
            [
                -27,
                251
            ],
            [
                -96,
                114
            ],
            [
                72,
                -316
            ],
            [
                -108,
                -54
            ],
            [
                -96,
                146
            ],
            [
                -155,
                135
            ],
            [
                -73,
                160
            ],
            [
                -141,
                -94
            ],
            [
                -175,
                196
            ],
            [
                -122,
                -30
            ],
            [
                86,
                -328
            ],
            [
                -111,
                -5
            ],
            [
                -67,
                296
            ],
            [
                -97,
                212
            ],
            [
                -62,
                -41
            ],
            [
                27,
                166
            ],
            [
                -91,
                -84
            ],
            [
                -45,
                172
            ],
            [
                -96,
                -64
            ],
            [
                2,
                -270
            ],
            [
                -45,
                -80
            ],
            [
                -49,
                103
            ],
            [
                52,
                124
            ],
            [
                -12,
                221
            ],
            [
                -127,
                31
            ],
            [
                -84,
                -269
            ],
            [
                -73,
                76
            ],
            [
                74,
                152
            ],
            [
                -166,
                152
            ],
            [
                82,
                55
            ],
            [
                43,
                164
            ],
            [
                -116,
                -146
            ],
            [
                -125,
                154
            ],
            [
                -223,
                -68
            ],
            [
                -121,
                89
            ],
            [
                -18,
                84
            ],
            [
                -138,
                62
            ],
            [
                -89,
                -60
            ],
            [
                -27,
                -222
            ],
            [
                119,
                -83
            ],
            [
                89,
                -232
            ],
            [
                319,
                -170
            ],
            [
                161,
                27
            ],
            [
                77,
                247
            ],
            [
                29,
                -326
            ],
            [
                197,
                -30
            ],
            [
                156,
                -328
            ],
            [
                167,
                -282
            ],
            [
                214,
                -226
            ],
            [
                286,
                -107
            ],
            [
                156,
                5
            ],
            [
                -66,
                263
            ],
            [
                52,
                123
            ],
            [
                18,
                -196
            ],
            [
                128,
                51
            ],
            [
                88,
                147
            ],
            [
                29,
                -84
            ],
            [
                -149,
                -228
            ],
            [
                110,
                -343
            ],
            [
                266,
                -358
            ],
            [
                125,
                -86
            ],
            [
                260,
                -267
            ],
            [
                118,
                87
            ],
            [
                8,
                -256
            ],
            [
                135,
                -318
            ],
            [
                136,
                -147
            ],
            [
                168,
                -260
            ],
            [
                74,
                -747
            ],
            [
                79,
                -59
            ],
            [
                -57,
                -145
            ],
            [
                48,
                -302
            ],
            [
                170,
                -263
            ],
            [
                22,
                -219
            ],
            [
                -42,
                8
            ],
            [
                -424,
                300
            ],
            [
                -153,
                -250
            ],
            [
                32,
                -281
            ],
            [
                -120,
                168
            ],
            [
                -47,
                221
            ],
            [
                52,
                293
            ],
            [
                -84,
                115
            ],
            [
                -66,
                -54
            ],
            [
                -111,
                -471
            ],
            [
                -127,
                -245
            ],
            [
                -81,
                191
            ],
            [
                -51,
                -152
            ],
            [
                -103,
                -107
            ],
            [
                11,
                -156
            ],
            [
                -186,
                185
            ],
            [
                -249,
                181
            ],
            [
                -20,
                100
            ],
            [
                -164,
                122
            ],
            [
                -65,
                -154
            ],
            [
                79,
                -145
            ],
            [
                12,
                -260
            ],
            [
                -80,
                -424
            ],
            [
                52,
                -138
            ],
            [
                108,
                -127
            ],
            [
                -113,
                -637
            ],
            [
                -84,
                -319
            ],
            [
                -48,
                23
            ],
            [
                -19,
                190
            ],
            [
                -80,
                -6
            ],
            [
                -160,
                138
            ],
            [
                -230,
                33
            ],
            [
                -171,
                -99
            ],
            [
                -7,
                -258
            ],
            [
                -68,
                -89
            ],
            [
                -93,
                -324
            ],
            [
                -95,
                -85
            ],
            [
                -51,
                -143
            ],
            [
                78,
                -106
            ],
            [
                -157,
                -17
            ],
            [
                179,
                -244
            ],
            [
                5,
                -205
            ],
            [
                -59,
                -151
            ],
            [
                79,
                -31
            ],
            [
                -86,
                -254
            ],
            [
                -43,
                121
            ],
            [
                -68,
                -32
            ],
            [
                0,
                -240
            ],
            [
                -86,
                -117
            ],
            [
                -3,
                -116
            ],
            [
                72,
                -86
            ],
            [
                -50,
                -94
            ],
            [
                -93,
                29
            ],
            [
                21,
                -165
            ],
            [
                125,
                -7
            ],
            [
                -79,
                -221
            ],
            [
                165,
                10
            ],
            [
                -22,
                -218
            ],
            [
                51,
                -173
            ],
            [
                369,
                -634
            ],
            [
                -1,
                -135
            ],
            [
                124,
                -392
            ],
            [
                88,
                -131
            ],
            [
                104,
                -36
            ],
            [
                136,
                97
            ],
            [
                126,
                269
            ],
            [
                99,
                -9
            ],
            [
                149,
                -193
            ],
            [
                162,
                -313
            ],
            [
                81,
                71
            ],
            [
                153,
                31
            ],
            [
                160,
                -46
            ],
            [
                150,
                -336
            ],
            [
                -38,
                -433
            ],
            [
                4,
                -196
            ],
            [
                -83,
                -234
            ],
            [
                -79,
                -48
            ],
            [
                48,
                -139
            ],
            [
                123,
                64
            ],
            [
                80,
                -131
            ],
            [
                14,
                -141
            ],
            [
                -118,
                -296
            ],
            [
                -74,
                185
            ],
            [
                -95,
                -39
            ],
            [
                -176,
                110
            ],
            [
                -138,
                172
            ],
            [
                -105,
                254
            ],
            [
                -4,
                -237
            ],
            [
                -91,
                -210
            ],
            [
                -51,
                57
            ],
            [
                83,
                169
            ],
            [
                -76,
                -7
            ],
            [
                -105,
                -152
            ],
            [
                -275,
                -47
            ],
            [
                -212,
                91
            ],
            [
                -384,
                -319
            ],
            [
                -59,
                -223
            ],
            [
                43,
                -158
            ],
            [
                -74,
                -195
            ],
            [
                -40,
                -223
            ],
            [
                76,
                60
            ],
            [
                118,
                -183
            ],
            [
                -56,
                -103
            ],
            [
                -284,
                -198
            ],
            [
                -165,
                -283
            ],
            [
                -4,
                -109
            ]
        ],
        [
            [
                8131,
                99405
            ],
            [
                170,
                -218
            ],
            [
                19,
                -146
            ],
            [
                90,
                -89
            ],
            [
                116,
                59
            ],
            [
                -30,
                -111
            ],
            [
                66,
                -167
            ],
            [
                169,
                -61
            ],
            [
                90,
                94
            ],
            [
                -45,
                168
            ],
            [
                -220,
                115
            ],
            [
                -117,
                211
            ],
            [
                -337,
                186
            ],
            [
                29,
                -41
            ]
        ],
        [
            [
                8483,
                94388
            ],
            [
                117,
                58
            ],
            [
                -45,
                83
            ],
            [
                -72,
                -141
            ]
        ],
        [
            [
                7690,
                99248
            ],
            [
                115,
                -18
            ],
            [
                13,
                144
            ],
            [
                -120,
                -45
            ],
            [
                -8,
                -81
            ]
        ],
        [
            [
                8324,
                93559
            ],
            [
                119,
                -32
            ],
            [
                -70,
                110
            ],
            [
                -49,
                -78
            ]
        ],
        [
            [
                7260,
                99402
            ],
            [
                111,
                -86
            ],
            [
                -4,
                130
            ],
            [
                -97,
                42
            ],
            [
                -10,
                -86
            ]
        ],
        [
            [
                9073,
                85044
            ],
            [
                82,
                -289
            ],
            [
                23,
                154
            ],
            [
                214,
                247
            ],
            [
                170,
                -101
            ],
            [
                111,
                166
            ],
            [
                -7,
                167
            ],
            [
                156,
                236
            ],
            [
                273,
                203
            ],
            [
                -86,
                173
            ],
            [
                -177,
                -76
            ],
            [
                -129,
                242
            ],
            [
                -40,
                -211
            ],
            [
                -144,
                -347
            ],
            [
                -144,
                -241
            ],
            [
                -78,
                -48
            ],
            [
                -147,
                95
            ],
            [
                -80,
                -120
            ],
            [
                3,
                -250
            ]
        ],
        [
            [
                6374,
                99403
            ],
            [
                99,
                -80
            ],
            [
                51,
                59
            ],
            [
                -60,
                96
            ],
            [
                -90,
                -75
            ]
        ],
        [
            [
                7988,
                88764
            ],
            [
                78,
                -103
            ],
            [
                -11,
                129
            ],
            [
                204,
                374
            ],
            [
                -177,
                -152
            ],
            [
                -94,
                -248
            ]
        ],
        [
            [
                5678,
                99277
            ],
            [
                107,
                94
            ],
            [
                93,
                -16
            ],
            [
                110,
                136
            ],
            [
                185,
                96
            ],
            [
                -217,
                -19
            ],
            [
                -244,
                -168
            ],
            [
                -34,
                -123
            ]
        ],
        [
            [
                5065,
                99087
            ],
            [
                161,
                47
            ],
            [
                356,
                -23
            ],
            [
                -4,
                -141
            ],
            [
                103,
                -89
            ],
            [
                69,
                166
            ],
            [
                -126,
                114
            ],
            [
                38,
                114
            ],
            [
                -177,
                44
            ],
            [
                -154,
                -54
            ],
            [
                -266,
                -178
            ]
        ],
        [
            [
                4678,
                98790
            ],
            [
                94,
                108
            ],
            [
                -57,
                122
            ],
            [
                -56,
                -57
            ],
            [
                19,
                -173
            ]
        ],
        [
            [
                4597,
                99098
            ],
            [
                134,
                -43
            ],
            [
                -3,
                92
            ],
            [
                -110,
                44
            ],
            [
                -21,
                -93
            ]
        ],
        [
            [
                4199,
                99135
            ],
            [
                142,
                -179
            ],
            [
                46,
                -182
            ],
            [
                107,
                30
            ],
            [
                -49,
                180
            ],
            [
                139,
                41
            ],
            [
                -33,
                164
            ],
            [
                -83,
                -57
            ],
            [
                -186,
                76
            ],
            [
                -83,
                -73
            ]
        ],
        [
            [
                3893,
                98832
            ],
            [
                254,
                11
            ],
            [
                35,
                -137
            ],
            [
                64,
                76
            ],
            [
                -80,
                190
            ],
            [
                -77,
                21
            ],
            [
                -45,
                -103
            ],
            [
                -151,
                -58
            ]
        ],
        [
            [
                3705,
                98464
            ],
            [
                133,
                37
            ],
            [
                37,
                197
            ],
            [
                -113,
                200
            ],
            [
                -52,
                -176
            ],
            [
                69,
                19
            ],
            [
                -74,
                -277
            ]
        ],
        [
            [
                2703,
                97629
            ],
            [
                93,
                9
            ],
            [
                33,
                99
            ],
            [
                -101,
                71
            ],
            [
                -25,
                -179
            ]
        ],
        [
            [
                2214,
                97770
            ],
            [
                118,
                120
            ],
            [
                86,
                361
            ],
            [
                -87,
                -256
            ],
            [
                -117,
                -225
            ]
        ],
        [
            [
                1666,
                96970
            ],
            [
                161,
                -15
            ],
            [
                70,
                -133
            ],
            [
                31,
                91
            ],
            [
                -238,
                180
            ],
            [
                -24,
                -123
            ]
        ],
        [
            [
                183,
                94948
            ],
            [
                150,
                -16
            ],
            [
                -12,
                216
            ],
            [
                -138,
                -200
            ]
        ],
        [
            [
                3,
                93989
            ],
            [
                97,
                -21
            ],
            [
                195,
                194
            ],
            [
                72,
                315
            ],
            [
                -72,
                -107
            ],
            [
                -48,
                47
            ],
            [
                -122,
                -62
            ],
            [
                -49,
                -294
            ],
            [
                -73,
                -72
            ]
        ],
        [
            [
                25124,
                95090
            ],
            [
                81,
                -118
            ],
            [
                51,
                81
            ],
            [
                -51,
                118
            ],
            [
                -81,
                -81
            ]
        ],
        [
            [
                25034,
                95023
            ],
            [
                14,
                -161
            ],
            [
                -46,
                -173
            ],
            [
                92,
                49
            ],
            [
                55,
                249
            ],
            [
                -115,
                36
            ]
        ],
        [
            [
                24855,
                94663
            ],
            [
                14,
                -76
            ],
            [
                95,
                94
            ],
            [
                3,
                250
            ],
            [
                -112,
                -268
            ]
        ],
        [
            [
                24158,
                93842
            ],
            [
                17,
                -68
            ],
            [
                85,
                176
            ],
            [
                -102,
                -108
            ]
        ],
        [
            [
                24110,
                93691
            ],
            [
                33,
                -161
            ],
            [
                142,
                12
            ],
            [
                12,
                158
            ],
            [
                -80,
                94
            ],
            [
                -107,
                -103
            ]
        ],
        [
            [
                24024,
                95001
            ],
            [
                0,
                -142
            ],
            [
                132,
                -88
            ],
            [
                66,
                85
            ],
            [
                -25,
                152
            ],
            [
                -95,
                166
            ],
            [
                -7,
                -170
            ],
            [
                -71,
                -3
            ]
        ],
        [
            [
                23894,
                94360
            ],
            [
                61,
                -318
            ],
            [
                -63,
                -29
            ],
            [
                7,
                -201
            ],
            [
                181,
                -50
            ],
            [
                182,
                317
            ],
            [
                134,
                63
            ],
            [
                103,
                138
            ],
            [
                166,
                313
            ],
            [
                -134,
                -41
            ],
            [
                -16,
                137
            ],
            [
                77,
                -81
            ],
            [
                139,
                130
            ],
            [
                20,
                194
            ],
            [
                78,
                -104
            ],
            [
                28,
                94
            ],
            [
                -17,
                286
            ],
            [
                53,
                -91
            ],
            [
                72,
                293
            ],
            [
                -8,
                132
            ],
            [
                -123,
                47
            ],
            [
                -102,
                -29
            ],
            [
                52,
                -130
            ],
            [
                -141,
                -80
            ],
            [
                -37,
                -261
            ],
            [
                -58,
                78
            ],
            [
                28,
                178
            ],
            [
                -83,
                -21
            ],
            [
                -48,
                -206
            ],
            [
                -88,
                -9
            ],
            [
                184,
                397
            ],
            [
                57,
                -93
            ],
            [
                90,
                178
            ],
            [
                -71,
                -22
            ],
            [
                68,
                159
            ],
            [
                -88,
                20
            ],
            [
                -187,
                -257
            ],
            [
                -92,
                -329
            ],
            [
                -95,
                67
            ],
            [
                -24,
                -129
            ],
            [
                137,
                -203
            ],
            [
                -117,
                -158
            ],
            [
                -235,
                -176
            ],
            [
                49,
                -97
            ],
            [
                -18,
                -246
            ],
            [
                -64,
                209
            ],
            [
                -57,
                -69
            ]
        ],
        [
            [
                23676,
                94551
            ],
            [
                100,
                -32
            ],
            [
                -46,
                118
            ],
            [
                -54,
                -86
            ]
        ],
        [
            [
                23442,
                93359
            ],
            [
                39,
                -143
            ],
            [
                94,
                -32
            ],
            [
                70,
                128
            ],
            [
                -28,
                -204
            ],
            [
                -68,
                -59
            ],
            [
                50,
                -123
            ],
            [
                246,
                1
            ],
            [
                93,
                -56
            ],
            [
                130,
                212
            ],
            [
                202,
                195
            ],
            [
                -91,
                178
            ],
            [
                -141,
                25
            ],
            [
                -6,
                124
            ],
            [
                -99,
                -11
            ],
            [
                -90,
                114
            ],
            [
                -45,
                -119
            ],
            [
                6,
                641
            ],
            [
                -54,
                147
            ],
            [
                -77,
                -120
            ],
            [
                -68,
                -291
            ],
            [
                -1,
                -247
            ],
            [
                -56,
                -4
            ],
            [
                -106,
                -356
            ]
        ],
        [
            [
                22874,
                91471
            ],
            [
                120,
                122
            ],
            [
                34,
                132
            ],
            [
                50,
                -65
            ],
            [
                159,
                -33
            ],
            [
                16,
                107
            ],
            [
                173,
                287
            ],
            [
                60,
                227
            ],
            [
                -112,
                -215
            ],
            [
                -88,
                -62
            ],
            [
                55,
                162
            ],
            [
                118,
                142
            ],
            [
                86,
                314
            ],
            [
                -178,
                553
            ],
            [
                -43,
                18
            ],
            [
                -62,
                -238
            ],
            [
                37,
                -251
            ],
            [
                -86,
                -125
            ],
            [
                -96,
                -243
            ],
            [
                -14,
                -143
            ],
            [
                -169,
                -454
            ],
            [
                -60,
                -235
            ]
        ],
        [
            [
                22808,
                92958
            ],
            [
                68,
                -314
            ],
            [
                174,
                116
            ],
            [
                89,
                -32
            ],
            [
                39,
                206
            ],
            [
                202,
                624
            ],
            [
                104,
                595
            ],
            [
                8,
                134
            ],
            [
                -73,
                -59
            ],
            [
                -251,
                -492
            ],
            [
                -203,
                -158
            ],
            [
                60,
                -14
            ],
            [
                -4,
                -233
            ],
            [
                -73,
                -67
            ],
            [
                18,
                -224
            ],
            [
                -72,
                57
            ],
            [
                -86,
                -139
            ]
        ],
        [
            [
                22770,
                93146
            ],
            [
                15,
                -154
            ],
            [
                118,
                129
            ],
            [
                4,
                281
            ],
            [
                -86,
                61
            ],
            [
                14,
                -185
            ],
            [
                -65,
                -132
            ]
        ],
        [
            [
                22337,
                92395
            ],
            [
                -24,
                -198
            ],
            [
                61,
                -128
            ],
            [
                -39,
                -153
            ],
            [
                85,
                100
            ],
            [
                98,
                -88
            ],
            [
                58,
                -146
            ],
            [
                164,
                133
            ],
            [
                210,
                16
            ],
            [
                45,
                154
            ],
            [
                -74,
                88
            ],
            [
                86,
                54
            ],
            [
                122,
                380
            ],
            [
                -103,
                94
            ],
            [
                -235,
                -169
            ],
            [
                43,
                242
            ],
            [
                -34,
                181
            ],
            [
                -81,
                -17
            ],
            [
                -131,
                -193
            ],
            [
                -45,
                15
            ],
            [
                -102,
                -276
            ],
            [
                -104,
                -89
            ]
        ],
        [
            [
                17580,
                91326
            ],
            [
                38,
                -191
            ],
            [
                142,
                -287
            ],
            [
                94,
                -372
            ],
            [
                66,
                151
            ],
            [
                -184,
                481
            ],
            [
                47,
                59
            ],
            [
                -203,
                159
            ]
        ],
        [
            [
                17539,
                90713
            ],
            [
                44,
                -321
            ],
            [
                78,
                -154
            ],
            [
                -4,
                287
            ],
            [
                -41,
                296
            ],
            [
                -77,
                -108
            ]
        ],
        [
            [
                19970,
                66387
            ],
            [
                65,
                -52
            ],
            [
                134,
                60
            ],
            [
                171,
                -33
            ],
            [
                6,
                -131
            ],
            [
                139,
                -165
            ],
            [
                38,
                -233
            ],
            [
                -51,
                -496
            ],
            [
                -150,
                -33
            ],
            [
                -122,
                -91
            ],
            [
                -42,
                -247
            ],
            [
                80,
                -216
            ],
            [
                53,
                -417
            ],
            [
                -85,
                -155
            ],
            [
                84,
                -202
            ],
            [
                -29,
                -178
            ],
            [
                185,
                -31
            ],
            [
                25,
                -104
            ],
            [
                149,
                -244
            ],
            [
                71,
                -56
            ],
            [
                45,
                -484
            ],
            [
                69,
                -46
            ],
            [
                6,
                -591
            ],
            [
                57,
                -59
            ],
            [
                -30,
                -272
            ],
            [
                220,
                -292
            ],
            [
                71,
                -289
            ],
            [
                185,
                -59
            ],
            [
                135,
                -93
            ],
            [
                206,
                -263
            ],
            [
                58,
                -158
            ],
            [
                -50,
                -197
            ],
            [
                -81,
                -92
            ],
            [
                -160,
                -384
            ],
            [
                -89,
                -60
            ],
            [
                42,
                -268
            ],
            [
                -61,
                -264
            ],
            [
                18,
                -68
            ],
            [
                -40,
                -416
            ],
            [
                -121,
                -252
            ],
            [
                -31,
                -281
            ],
            [
                -69,
                -170
            ],
            [
                59,
                -487
            ]
        ],
        [
            [
                21130,
                57818
            ],
            [
                83,
                -258
            ],
            [
                -59,
                -105
            ],
            [
                129,
                -83
            ],
            [
                31,
                -125
            ],
            [
                24,
                -629
            ],
            [
                -18,
                -338
            ],
            [
                -54,
                -333
            ],
            [
                96,
                -444
            ],
            [
                -46,
                -175
            ],
            [
                -1,
                -237
            ],
            [
                36,
                -162
            ],
            [
                -7,
                -200
            ],
            [
                47,
                -176
            ],
            [
                63,
                -57
            ],
            [
                -82,
                -300
            ],
            [
                39,
                -317
            ],
            [
                -19,
                -239
            ],
            [
                42,
                -54
            ],
            [
                221,
                -26
            ],
            [
                87,
                -54
            ],
            [
                106,
                38
            ],
            [
                3,
                84
            ],
            [
                238,
                28
            ],
            [
                87,
                297
            ],
            [
                -21,
                59
            ],
            [
                113,
                209
            ],
            [
                153,
                14
            ],
            [
                218,
                -544
            ],
            [
                43,
                -39
            ],
            [
                86,
                -746
            ],
            [
                104,
                -1007
            ],
            [
                147,
                -1305
            ]
        ],
        [
            [
                23019,
                50594
            ],
            [
                855,
                279
            ],
            [
                1774,
                548
            ],
            [
                1962,
                566
            ],
            [
                1594,
                421
            ],
            [
                51,
                38
            ],
            [
                1476,
                375
            ],
            [
                1017,
                243
            ]
        ],
        [
            [
                31748,
                53064
            ],
            [
                -508,
                6249
            ],
            [
                -181,
                2264
            ],
            [
                -472,
                5802
            ],
            [
                -144,
                1799
            ],
            [
                -450,
                5498
            ]
        ],
        [
            [
                29993,
                74676
            ],
            [
                -1790,
                -441
            ],
            [
                -864,
                -222
            ],
            [
                -1155,
                -307
            ],
            [
                -3138,
                -3103
            ],
            [
                -450,
                -441
            ],
            [
                -2897,
                -2988
            ],
            [
                58,
                -202
            ],
            [
                4,
                -258
            ],
            [
                96,
                -94
            ],
            [
                113,
                -233
            ]
        ],
        [
            [
                32975,
                37767
            ],
            [
                867,
                205
            ],
            [
                1496,
                317
            ],
            [
                1947,
                389
            ],
            [
                392,
                90
            ],
            [
                819,
                151
            ],
            [
                1448,
                238
            ],
            [
                300,
                36
            ],
            [
                1037,
                155
            ]
        ],
        [
            [
                41281,
                39348
            ],
            [
                927,
                129
            ],
            [
                1118,
                143
            ],
            [
                1295,
                149
            ],
            [
                -144,
                3845
            ]
        ],
        [
            [
                44477,
                43614
            ],
            [
                -168,
                4810
            ],
            [
                -101,
                2730
            ],
            [
                -57,
                1687
            ],
            [
                -89,
                2368
            ]
        ],
        [
            [
                44062,
                55209
            ],
            [
                -1157,
                -141
            ],
            [
                -535,
                -85
            ]
        ],
        [
            [
                42370,
                54983
            ],
            [
                -2357,
                -301
            ],
            [
                -1165,
                -181
            ],
            [
                -211,
                -43
            ],
            [
                -1901,
                -326
            ],
            [
                -1175,
                -218
            ],
            [
                -11,
                -32
            ],
            [
                -1061,
                -214
            ],
            [
                -1347,
                -285
            ],
            [
                -1394,
                -319
            ]
        ],
        [
            [
                31748,
                53064
            ],
            [
                115,
                -1438
            ],
            [
                55,
                -594
            ],
            [
                196,
                -2424
            ],
            [
                2,
                -431
            ],
            [
                139,
                -1699
            ],
            [
                139,
                -1549
            ],
            [
                425,
                -5250
            ],
            [
                42,
                -454
            ],
            [
                114,
                -1458
            ]
        ],
        [
            [
                85919,
                97958
            ],
            [
                89,
                -224
            ],
            [
                40,
                97
            ],
            [
                -83,
                167
            ],
            [
                -46,
                -40
            ]
        ],
        [
            [
                85736,
                98213
            ],
            [
                57,
                -143
            ],
            [
                52,
                81
            ],
            [
                -109,
                62
            ]
        ],
        [
            [
                85214,
                98724
            ],
            [
                354,
                -394
            ],
            [
                52,
                85
            ],
            [
                -304,
                347
            ],
            [
                -102,
                -38
            ]
        ],
        [
            [
                83862,
                99608
            ],
            [
                105,
                -374
            ],
            [
                302,
                -372
            ],
            [
                157,
                -255
            ],
            [
                104,
                -106
            ],
            [
                301,
                142
            ],
            [
                41,
                160
            ],
            [
                112,
                109
            ],
            [
                -305,
                274
            ],
            [
                -30,
                -81
            ],
            [
                -193,
                68
            ],
            [
                -12,
                84
            ],
            [
                -321,
                322
            ],
            [
                -255,
                116
            ],
            [
                -6,
                -87
            ]
        ],
        [
            [
                83457,
                99810
            ],
            [
                252,
                -176
            ],
            [
                -36,
                182
            ],
            [
                -212,
                75
            ],
            [
                -4,
                -81
            ]
        ],
        [
            [
                83145,
                99811
            ],
            [
                34,
                -123
            ],
            [
                81,
                -1
            ],
            [
                -13,
                152
            ],
            [
                -102,
                -28
            ]
        ],
        [
            [
                82261,
                91868
            ],
            [
                41,
                48
            ],
            [
                195,
                645
            ],
            [
                193,
                133
            ],
            [
                47,
                -69
            ],
            [
                103,
                43
            ],
            [
                -160,
                144
            ],
            [
                -215,
                -201
            ],
            [
                -193,
                -580
            ],
            [
                -11,
                -163
            ]
        ],
        [
            [
                81555,
                99934
            ],
            [
                106,
                -66
            ],
            [
                40,
                63
            ],
            [
                -143,
                68
            ],
            [
                -3,
                -65
            ]
        ],
        [
            [
                76646,
                81241
            ],
            [
                191,
                -195
            ],
            [
                -26,
                165
            ],
            [
                -145,
                109
            ],
            [
                -20,
                -79
            ]
        ],
        [
            [
                75694,
                76782
            ],
            [
                53,
                244
            ],
            [
                101,
                173
            ],
            [
                20,
                257
            ],
            [
                64,
                242
            ],
            [
                99,
                133
            ],
            [
                2615,
                -305
            ],
            [
                707,
                -77
            ],
            [
                1759,
                -212
            ],
            [
                -32,
                100
            ],
            [
                85,
                210
            ],
            [
                3,
                234
            ],
            [
                97,
                230
            ],
            [
                232,
                -75
            ],
            [
                21,
                -453
            ],
            [
                -6,
                -326
            ],
            [
                -114,
                -328
            ],
            [
                5,
                -510
            ],
            [
                98,
                7
            ],
            [
                29,
                -197
            ],
            [
                105,
                -2
            ],
            [
                60,
                95
            ],
            [
                119,
                -19
            ],
            [
                179,
                128
            ],
            [
                129,
                -25
            ],
            [
                221,
                56
            ],
            [
                93,
                -74
            ],
            [
                91,
                39
            ]
        ],
        [
            [
                82527,
                76327
            ],
            [
                36,
                36
            ],
            [
                4,
                375
            ],
            [
                44,
                293
            ],
            [
                58,
                141
            ],
            [
                119,
                776
            ],
            [
                251,
                1112
            ],
            [
                123,
                398
            ],
            [
                40,
                274
            ],
            [
                258,
                818
            ],
            [
                312,
                873
            ],
            [
                211,
                562
            ],
            [
                634,
                1338
            ],
            [
                323,
                573
            ],
            [
                142,
                446
            ],
            [
                -104,
                217
            ],
            [
                -4,
                385
            ],
            [
                84,
                492
            ],
            [
                75,
                297
            ],
            [
                158,
                439
            ],
            [
                328,
                796
            ],
            [
                265,
                849
            ],
            [
                122,
                430
            ],
            [
                251,
                649
            ],
            [
                14,
                109
            ],
            [
                183,
                505
            ],
            [
                206,
                797
            ],
            [
                70,
                853
            ],
            [
                3,
                479
            ],
            [
                28,
                685
            ],
            [
                6,
                680
            ],
            [
                71,
                925
            ],
            [
                -7,
                675
            ],
            [
                -39,
                -205
            ],
            [
                -75,
                -65
            ],
            [
                -84,
                129
            ],
            [
                -36,
                318
            ],
            [
                -41,
                102
            ],
            [
                16,
                171
            ],
            [
                -41,
                146
            ],
            [
                7,
                255
            ],
            [
                48,
                245
            ],
            [
                43,
                40
            ],
            [
                -41,
                187
            ],
            [
                -70,
                102
            ],
            [
                28,
                114
            ],
            [
                140,
                -170
            ],
            [
                156,
                -818
            ],
            [
                -17,
                414
            ],
            [
                -179,
                782
            ],
            [
                -37,
                280
            ],
            [
                -360,
                866
            ],
            [
                -154,
                258
            ],
            [
                -26,
                -33
            ],
            [
                298,
                -616
            ],
            [
                41,
                -183
            ],
            [
                17,
                -377
            ],
            [
                -207,
                -8
            ],
            [
                -239,
                140
            ],
            [
                -155,
                196
            ],
            [
                -143,
                -108
            ],
            [
                -124,
                79
            ],
            [
                -39,
                143
            ],
            [
                -355,
                176
            ],
            [
                -139,
                -134
            ],
            [
                -83,
                -202
            ],
            [
                10,
                -425
            ],
            [
                52,
                -37
            ],
            [
                -138,
                -441
            ],
            [
                -94,
                -133
            ],
            [
                0,
                -111
            ],
            [
                -97,
                -223
            ],
            [
                -68,
                -40
            ],
            [
                -63,
                -264
            ],
            [
                -122,
                24
            ],
            [
                -96,
                -307
            ],
            [
                -179,
                -55
            ],
            [
                -342,
                -270
            ],
            [
                -118,
                201
            ],
            [
                -157,
                -372
            ],
            [
                -146,
                -452
            ],
            [
                -131,
                -756
            ],
            [
                -99,
                -298
            ],
            [
                -101,
                -160
            ],
            [
                -224,
                -187
            ],
            [
                -16,
                -142
            ],
            [
                -106,
                19
            ],
            [
                34,
                134
            ],
            [
                -94,
                61
            ],
            [
                -113,
                -560
            ],
            [
                -102,
                -144
            ],
            [
                106,
                -95
            ],
            [
                76,
                111
            ],
            [
                31,
                -533
            ],
            [
                -32,
                -276
            ],
            [
                -67,
                -30
            ],
            [
                6,
                -268
            ],
            [
                -80,
                35
            ],
            [
                -103,
                170
            ],
            [
                97,
                463
            ],
            [
                -196,
                152
            ],
            [
                -21,
                169
            ],
            [
                -25,
                -241
            ],
            [
                -52,
                -152
            ],
            [
                -150,
                -272
            ],
            [
                -235,
                -527
            ],
            [
                -87,
                -288
            ],
            [
                -232,
                -547
            ],
            [
                -286,
                -491
            ],
            [
                -131,
                -333
            ],
            [
                90,
                137
            ],
            [
                96,
                -120
            ],
            [
                107,
                -306
            ],
            [
                162,
                -617
            ],
            [
                80,
                -89
            ],
            [
                58,
                -296
            ],
            [
                -60,
                -231
            ],
            [
                -155,
                -32
            ],
            [
                65,
                358
            ],
            [
                -169,
                -59
            ],
            [
                39,
                -121
            ],
            [
                -76,
                -326
            ],
            [
                -286,
                -163
            ],
            [
                28,
                207
            ],
            [
                -70,
                108
            ],
            [
                115,
                108
            ],
            [
                86,
                -11
            ],
            [
                110,
                334
            ],
            [
                -59,
                156
            ],
            [
                0,
                266
            ],
            [
                -154,
                83
            ],
            [
                40,
                272
            ],
            [
                -52,
                60
            ],
            [
                -38,
                -351
            ],
            [
                -129,
                -295
            ],
            [
                -85,
                -98
            ],
            [
                -64,
                -231
            ],
            [
                4,
                -515
            ],
            [
                -56,
                -204
            ],
            [
                -69,
                -524
            ],
            [
                61,
                -19
            ],
            [
                24,
                301
            ],
            [
                58,
                281
            ],
            [
                60,
                8
            ],
            [
                -19,
                -271
            ],
            [
                -62,
                -90
            ],
            [
                70,
                -263
            ],
            [
                99,
                -853
            ],
            [
                -3,
                -602
            ],
            [
                -58,
                -205
            ],
            [
                -3,
                -184
            ],
            [
                -93,
                -75
            ],
            [
                16,
                -143
            ],
            [
                -91,
                -337
            ],
            [
                63,
                -229
            ],
            [
                -175,
                -321
            ],
            [
                13,
                -106
            ],
            [
                -67,
                -166
            ],
            [
                -72,
                7
            ],
            [
                2,
                -272
            ],
            [
                -47,
                -34
            ],
            [
                -333,
                3
            ],
            [
                -96,
                205
            ],
            [
                -93,
                -308
            ],
            [
                -17,
                -189
            ],
            [
                -163,
                -54
            ],
            [
                -28,
                -203
            ],
            [
                -105,
                -268
            ],
            [
                -153,
                -32
            ],
            [
                -44,
                -136
            ],
            [
                -183,
                -118
            ],
            [
                -27,
                -363
            ],
            [
                -46,
                -212
            ],
            [
                -80,
                -4
            ],
            [
                -172,
                -141
            ],
            [
                -111,
                -213
            ],
            [
                -8,
                -103
            ],
            [
                -121,
                -259
            ],
            [
                -104,
                -122
            ],
            [
                -212,
                -159
            ],
            [
                -291,
                -175
            ],
            [
                -196,
                -205
            ],
            [
                -189,
                89
            ],
            [
                -57,
                82
            ],
            [
                -222,
                -49
            ],
            [
                5,
                113
            ],
            [
                -166,
                264
            ],
            [
                85,
                309
            ],
            [
                -22,
                109
            ],
            [
                -166,
                -2
            ],
            [
                -40,
                -79
            ],
            [
                -156,
                105
            ],
            [
                -236,
                362
            ],
            [
                -43,
                8
            ],
            [
                -358,
                482
            ],
            [
                17,
                -196
            ],
            [
                -76,
                -25
            ],
            [
                -133,
                289
            ],
            [
                -248,
                46
            ],
            [
                102,
                141
            ],
            [
                17,
                124
            ],
            [
                116,
                48
            ],
            [
                391,
                -385
            ],
            [
                168,
                -312
            ],
            [
                20,
                39
            ],
            [
                -143,
                302
            ],
            [
                -490,
                503
            ],
            [
                -364,
                -278
            ],
            [
                -135,
                2
            ],
            [
                -113,
                116
            ],
            [
                -107,
                -290
            ],
            [
                -61,
                -329
            ],
            [
                47,
                -200
            ],
            [
                24,
                341
            ],
            [
                58,
                291
            ],
            [
                55,
                61
            ],
            [
                57,
                -140
            ],
            [
                -9,
                -275
            ],
            [
                -145,
                -364
            ],
            [
                -90,
                -135
            ],
            [
                -164,
                -57
            ],
            [
                -111,
                -112
            ],
            [
                -131,
                -208
            ],
            [
                -193,
                -120
            ],
            [
                -165,
                -198
            ],
            [
                -211,
                -190
            ],
            [
                -247,
                -167
            ],
            [
                -443,
                -201
            ],
            [
                -279,
                -71
            ],
            [
                -519,
                6
            ],
            [
                -225,
                54
            ],
            [
                -318,
                135
            ],
            [
                -444,
                236
            ],
            [
                -213,
                81
            ],
            [
                -54,
                -22
            ],
            [
                -419,
                231
            ]
        ],
        [
            [
                73572,
                61773
            ],
            [
                398,
                -68
            ],
            [
                802,
                -177
            ],
            [
                1113,
                -230
            ]
        ],
        [
            [
                75885,
                61298
            ],
            [
                1265,
                -269
            ],
            [
                -2,
                -21
            ],
            [
                918,
                -243
            ]
        ],
        [
            [
                78066,
                60765
            ],
            [
                -3,
                232
            ],
            [
                -194,
                300
            ],
            [
                -36,
                220
            ],
            [
                -91,
                144
            ],
            [
                -35,
                245
            ],
            [
                45,
                177
            ],
            [
                210,
                221
            ],
            [
                115,
                2
            ],
            [
                175,
                301
            ],
            [
                166,
                132
            ],
            [
                108,
                -80
            ],
            [
                154,
                75
            ],
            [
                78,
                344
            ],
            [
                80,
                76
            ],
            [
                109,
                259
            ],
            [
                57,
                339
            ],
            [
                111,
                145
            ],
            [
                87,
                228
            ],
            [
                96,
                128
            ],
            [
                95,
                301
            ],
            [
                60,
                -7
            ],
            [
                210,
                259
            ],
            [
                148,
                78
            ],
            [
                192,
                242
            ],
            [
                149,
                465
            ],
            [
                128,
                124
            ],
            [
                48,
                -32
            ],
            [
                120,
                94
            ],
            [
                136,
                266
            ],
            [
                148,
                138
            ],
            [
                -32,
                309
            ],
            [
                79,
                135
            ],
            [
                119,
                37
            ],
            [
                8,
                216
            ],
            [
                97,
                124
            ],
            [
                72,
                -31
            ],
            [
                27,
                212
            ],
            [
                122,
                136
            ],
            [
                172,
                38
            ],
            [
                92,
                135
            ],
            [
                165,
                136
            ],
            [
                3,
                270
            ],
            [
                85,
                143
            ],
            [
                -15,
                76
            ],
            [
                115,
                135
            ],
            [
                6,
                201
            ],
            [
                46,
                137
            ],
            [
                -17,
                171
            ],
            [
                79,
                183
            ],
            [
                -38,
                88
            ],
            [
                114,
                174
            ],
            [
                166,
                36
            ],
            [
                191,
                304
            ],
            [
                -15,
                117
            ],
            [
                217,
                519
            ],
            [
                -53,
                184
            ],
            [
                90,
                189
            ],
            [
                27,
                271
            ],
            [
                103,
                78
            ],
            [
                108,
                -71
            ],
            [
                170,
                185
            ],
            [
                79,
                6
            ]
        ],
        [
            [
                83114,
                71024
            ],
            [
                83,
                17
            ],
            [
                -17,
                218
            ],
            [
                -81,
                122
            ],
            [
                -74,
                -32
            ],
            [
                -23,
                167
            ],
            [
                66,
                8
            ],
            [
                -91,
                225
            ],
            [
                -142,
                -37
            ],
            [
                -3,
                188
            ],
            [
                70,
                4
            ],
            [
                -34,
                221
            ],
            [
                -101,
                206
            ],
            [
                -120,
                -9
            ],
            [
                74,
                143
            ],
            [
                55,
                -32
            ],
            [
                21,
                276
            ],
            [
                -51,
                276
            ],
            [
                -152,
                40
            ],
            [
                -10,
                94
            ],
            [
                119,
                -52
            ],
            [
                49,
                67
            ],
            [
                -139,
                619
            ],
            [
                35,
                293
            ],
            [
                -7,
                324
            ],
            [
                -39,
                4
            ],
            [
                -78,
                298
            ],
            [
                -58,
                25
            ],
            [
                1,
                455
            ],
            [
                -125,
                185
            ],
            [
                134,
                46
            ],
            [
                27,
                -89
            ],
            [
                30,
                262
            ],
            [
                -45,
                391
            ],
            [
                -1,
                266
            ],
            [
                40,
                114
            ]
        ],
        [
            [
                68755,
                36530
            ],
            [
                95,
                123
            ],
            [
                115,
                -36
            ],
            [
                -31,
                139
            ],
            [
                272,
                45
            ],
            [
                228,
                -135
            ],
            [
                292,
                -294
            ],
            [
                170,
                -224
            ]
        ],
        [
            [
                69896,
                36148
            ],
            [
                1702,
                -293
            ],
            [
                1620,
                -318
            ],
            [
                17,
                245
            ]
        ],
        [
            [
                73235,
                35782
            ],
            [
                263,
                3703
            ],
            [
                109,
                1630
            ],
            [
                113,
                1885
            ],
            [
                177,
                2707
            ]
        ],
        [
            [
                73897,
                45707
            ],
            [
                -117,
                230
            ],
            [
                114,
                214
            ],
            [
                16,
                126
            ],
            [
                -44,
                233
            ],
            [
                145,
                35
            ],
            [
                -49,
                183
            ],
            [
                30,
                207
            ],
            [
                -129,
                -14
            ],
            [
                -151,
                90
            ],
            [
                -309,
                416
            ],
            [
                -138,
                -143
            ],
            [
                -105,
                -18
            ],
            [
                -216,
                89
            ],
            [
                -30,
                162
            ],
            [
                107,
                534
            ],
            [
                -124,
                327
            ],
            [
                -180,
                146
            ],
            [
                -52,
                446
            ],
            [
                -133,
                249
            ],
            [
                -95,
                -57
            ],
            [
                -63,
                57
            ],
            [
                -25,
                213
            ],
            [
                -84,
                256
            ],
            [
                22,
                287
            ],
            [
                -14,
                226
            ],
            [
                -45,
                97
            ],
            [
                -137,
                85
            ],
            [
                -10,
                127
            ],
            [
                -127,
                -193
            ],
            [
                -122,
                30
            ],
            [
                -177,
                -186
            ],
            [
                -13,
                -271
            ],
            [
                -145,
                -198
            ],
            [
                -34,
                127
            ],
            [
                81,
                24
            ],
            [
                -126,
                210
            ],
            [
                -104,
                -34
            ],
            [
                58,
                116
            ],
            [
                -23,
                145
            ],
            [
                -111,
                49
            ],
            [
                3,
                288
            ],
            [
                41,
                139
            ],
            [
                -141,
                61
            ],
            [
                -13,
                246
            ],
            [
                -101,
                22
            ],
            [
                16,
                -203
            ],
            [
                -121,
                81
            ],
            [
                -61,
                -67
            ],
            [
                -93,
                -279
            ],
            [
                -106,
                24
            ],
            [
                -71,
                171
            ],
            [
                -220,
                189
            ],
            [
                -42,
                413
            ],
            [
                -96,
                81
            ],
            [
                -76,
                -206
            ],
            [
                -66,
                1
            ],
            [
                -329,
                -305
            ],
            [
                -124,
                -2
            ],
            [
                -98,
                150
            ],
            [
                -155,
                -246
            ],
            [
                -49,
                172
            ],
            [
                69,
                169
            ],
            [
                -26,
                211
            ],
            [
                -103,
                33
            ],
            [
                -35,
                -283
            ],
            [
                -250,
                142
            ],
            [
                -139,
                -167
            ],
            [
                -49,
                132
            ],
            [
                68,
                320
            ],
            [
                -59,
                134
            ],
            [
                -150,
                -72
            ]
        ],
        [
            [
                68662,
                51678
            ],
            [
                -138,
                -393
            ],
            [
                145,
                22
            ],
            [
                -95,
                -83
            ],
            [
                81,
                -233
            ],
            [
                -62,
                -228
            ],
            [
                124,
                -130
            ],
            [
                2,
                -128
            ],
            [
                -71,
                72
            ],
            [
                56,
                -194
            ],
            [
                67,
                -46
            ],
            [
                -111,
                -249
            ],
            [
                86,
                -356
            ],
            [
                34,
                111
            ],
            [
                41,
                -142
            ],
            [
                51,
                102
            ],
            [
                67,
                -349
            ],
            [
                44,
                -37
            ],
            [
                71,
                -304
            ],
            [
                -22,
                -107
            ],
            [
                136,
                -145
            ],
            [
                -13,
                -129
            ],
            [
                51,
                -389
            ],
            [
                40,
                -114
            ],
            [
                121,
                -134
            ],
            [
                23,
                -319
            ],
            [
                -109,
                -297
            ],
            [
                47,
                -375
            ],
            [
                -120,
                -115
            ],
            [
                -4,
                -265
            ],
            [
                -112,
                -174
            ],
            [
                -26,
                -229
            ],
            [
                102,
                -215
            ],
            [
                -61,
                -156
            ],
            [
                31,
                -312
            ],
            [
                78,
                -41
            ],
            [
                -96,
                -1779
            ],
            [
                -120,
                -2504
            ],
            [
                -168,
                -3209
            ],
            [
                -77,
                -1575
            ]
        ],
        [
            [
                44477,
                43614
            ],
            [
                1074,
                114
            ],
            [
                1741,
                156
            ],
            [
                977,
                74
            ],
            [
                1091,
                66
            ],
            [
                1033,
                52
            ],
            [
                1067,
                44
            ],
            [
                1496,
                43
            ],
            [
                1519,
                20
            ],
            [
                1435,
                -5
            ]
        ],
        [
            [
                55910,
                44178
            ],
            [
                176,
                351
            ],
            [
                108,
                38
            ],
            [
                24,
                92
            ],
            [
                154,
                30
            ],
            [
                41,
                -133
            ],
            [
                143,
                40
            ],
            [
                -22,
                108
            ],
            [
                113,
                141
            ],
            [
                -82,
                133
            ],
            [
                23,
                117
            ],
            [
                73,
                -54
            ],
            [
                -24,
                179
            ],
            [
                -122,
                -71
            ],
            [
                -25,
                229
            ],
            [
                -96,
                83
            ],
            [
                -61,
                342
            ],
            [
                -73,
                14
            ],
            [
                2,
                139
            ],
            [
                97,
                154
            ],
            [
                17,
                119
            ],
            [
                101,
                98
            ],
            [
                84,
                211
            ],
            [
                77,
                -28
            ],
            [
                -36,
                158
            ],
            [
                19,
                198
            ],
            [
                93,
                121
            ],
            [
                40,
                225
            ],
            [
                79,
                23
            ],
            [
                72,
                131
            ],
            [
                84,
                -58
            ],
            [
                44,
                99
            ],
            [
                121,
                7
            ],
            [
                -25,
                138
            ],
            [
                8,
                1969
            ],
            [
                18,
                2539
            ],
            [
                0,
                689
            ],
            [
                25,
                2987
            ]
        ],
        [
            [
                57180,
                55736
            ],
            [
                -1580,
                26
            ],
            [
                -1748,
                2
            ],
            [
                -1700,
                -30
            ],
            [
                -1265,
                -39
            ],
            [
                -1541,
                -77
            ],
            [
                -1058,
                -66
            ],
            [
                -400,
                -35
            ],
            [
                -1413,
                -101
            ],
            [
                -1205,
                -95
            ],
            [
                -1208,
                -112
            ]
        ],
        [
            [
                98249,
                17157
            ],
            [
                80,
                -70
            ],
            [
                -28,
                138
            ],
            [
                -52,
                -68
            ]
        ],
        [
            [
                98072,
                17379
            ],
            [
                -8,
                -281
            ],
            [
                189,
                209
            ],
            [
                -58,
                185
            ],
            [
                -123,
                -113
            ]
        ],
        [
            [
                97911,
                16723
            ],
            [
                18,
                -160
            ],
            [
                74,
                213
            ],
            [
                -92,
                -53
            ]
        ],
        [
            [
                97504,
                17360
            ],
            [
                72,
                -41
            ],
            [
                41,
                118
            ],
            [
                -113,
                -77
            ]
        ],
        [
            [
                97633,
                18829
            ],
            [
                27,
                -143
            ],
            [
                42,
                237
            ],
            [
                -69,
                -94
            ]
        ],
        [
            [
                97421,
                17896
            ],
            [
                20,
                -151
            ],
            [
                117,
                -211
            ],
            [
                42,
                177
            ],
            [
                116,
                210
            ],
            [
                -35,
                153
            ],
            [
                -96,
                90
            ],
            [
                -81,
                -41
            ],
            [
                -26,
                -244
            ],
            [
                -57,
                17
            ]
        ],
        [
            [
                97299,
                17401
            ],
            [
                37,
                -249
            ],
            [
                -19,
                -265
            ],
            [
                74,
                19
            ],
            [
                -9,
                490
            ],
            [
                -83,
                5
            ]
        ],
        [
            [
                95336,
                23105
            ],
            [
                -232,
                -159
            ],
            [
                -36,
                -337
            ],
            [
                -289,
                -340
            ],
            [
                -94,
                -273
            ],
            [
                -24,
                -533
            ],
            [
                -45,
                -55
            ],
            [
                -155,
                -812
            ],
            [
                -357,
                -2014
            ],
            [
                -279,
                -1518
            ],
            [
                -390,
                -2000
            ]
        ],
        [
            [
                93435,
                15064
            ],
            [
                106,
                -102
            ],
            [
                -19,
                -103
            ],
            [
                161,
                66
            ],
            [
                69,
                236
            ],
            [
                72,
                26
            ],
            [
                25,
                -300
            ],
            [
                -22,
                -239
            ],
            [
                -56,
                -114
            ],
            [
                90,
                -153
            ],
            [
                88,
                109
            ],
            [
                121,
                -29
            ],
            [
                -57,
                -208
            ],
            [
                -129,
                -118
            ],
            [
                -23,
                -98
            ],
            [
                62,
                -393
            ],
            [
                103,
                -289
            ],
            [
                215,
                -367
            ],
            [
                -86,
                -199
            ],
            [
                78,
                -262
            ],
            [
                102,
                -201
            ],
            [
                -3,
                -209
            ],
            [
                -127,
                -19
            ],
            [
                30,
                -139
            ],
            [
                -64,
                -64
            ],
            [
                37,
                -148
            ],
            [
                -54,
                -24
            ],
            [
                60,
                -356
            ],
            [
                -109,
                -124
            ],
            [
                22,
                -308
            ],
            [
                44,
                -151
            ],
            [
                -22,
                -115
            ],
            [
                72,
                -143
            ],
            [
                47,
                -222
            ],
            [
                55,
                -55
            ],
            [
                -79,
                -1065
            ],
            [
                670,
                -3350
            ],
            [
                232,
                26
            ],
            [
                52,
                -40
            ],
            [
                67,
                478
            ],
            [
                52,
                185
            ],
            [
                245,
                141
            ],
            [
                229,
                -362
            ],
            [
                85,
                -25
            ],
            [
                85,
                -134
            ],
            [
                4,
                -114
            ],
            [
                84,
                -76
            ],
            [
                211,
                -78
            ],
            [
                -38,
                -198
            ],
            [
                51,
                -92
            ],
            [
                287,
                -11
            ],
            [
                45,
                94
            ],
            [
                334,
                223
            ],
            [
                169,
                285
            ],
            [
                151,
                59
            ],
            [
                307,
                1702
            ],
            [
                219,
                1163
            ],
            [
                221,
                1226
            ],
            [
                62,
                68
            ],
            [
                -57,
                166
            ],
            [
                111,
                182
            ],
            [
                -56,
                110
            ],
            [
                80,
                460
            ],
            [
                134,
                -9
            ],
            [
                3,
                -69
            ],
            [
                140,
                190
            ],
            [
                236,
                -19
            ],
            [
                64,
                -97
            ],
            [
                116,
                336
            ],
            [
                -121,
                120
            ],
            [
                87,
                211
            ],
            [
                87,
                84
            ],
            [
                27,
                197
            ],
            [
                -44,
                253
            ],
            [
                112,
                164
            ],
            [
                97,
                217
            ],
            [
                120,
                74
            ],
            [
                49,
                -111
            ],
            [
                -16,
                -155
            ],
            [
                117,
                33
            ],
            [
                100,
                -43
            ],
            [
                163,
                283
            ],
            [
                162,
                408
            ],
            [
                103,
                76
            ],
            [
                71,
                368
            ],
            [
                -202,
                774
            ],
            [
                -115,
                150
            ],
            [
                -106,
                -280
            ],
            [
                -129,
                172
            ],
            [
                96,
                148
            ],
            [
                -39,
                172
            ],
            [
                -65,
                -11
            ],
            [
                -41,
                220
            ],
            [
                -129,
                50
            ],
            [
                30,
                103
            ],
            [
                112,
                77
            ],
            [
                -86,
                245
            ],
            [
                -98,
                -108
            ],
            [
                -66,
                -161
            ],
            [
                -106,
                210
            ],
            [
                -70,
                -167
            ],
            [
                -5,
                217
            ],
            [
                -40,
                69
            ],
            [
                -4,
                256
            ],
            [
                -96,
                7
            ],
            [
                -82,
                216
            ],
            [
                -46,
                -67
            ],
            [
                -14,
                323
            ],
            [
                -100,
                -58
            ],
            [
                -28,
                -136
            ],
            [
                -110,
                98
            ],
            [
                50,
                203
            ],
            [
                -46,
                269
            ],
            [
                74,
                74
            ],
            [
                -182,
                149
            ],
            [
                -145,
                -34
            ],
            [
                -144,
                -295
            ],
            [
                16,
                -110
            ],
            [
                104,
                -144
            ],
            [
                -56,
                -122
            ],
            [
                -37,
                147
            ],
            [
                -46,
                -141
            ],
            [
                -180,
                271
            ],
            [
                57,
                128
            ],
            [
                -9,
                155
            ],
            [
                109,
                174
            ],
            [
                10,
                148
            ],
            [
                -84,
                309
            ],
            [
                5,
                141
            ],
            [
                91,
                145
            ],
            [
                10,
                231
            ],
            [
                -79,
                75
            ],
            [
                -65,
                -257
            ],
            [
                -15,
                -196
            ],
            [
                -117,
                -94
            ],
            [
                -59,
                -192
            ],
            [
                57,
                -203
            ],
            [
                -130,
                -74
            ],
            [
                -39,
                -101
            ],
            [
                -89,
                115
            ],
            [
                -52,
                -360
            ],
            [
                34,
                -170
            ],
            [
                -68,
                -183
            ],
            [
                -68,
                327
            ],
            [
                -81,
                -73
            ],
            [
                -98,
                173
            ],
            [
                121,
                218
            ],
            [
                10,
                161
            ],
            [
                -57,
                107
            ],
            [
                -17,
                252
            ],
            [
                17,
                239
            ],
            [
                -32,
                42
            ],
            [
                33,
                302
            ],
            [
                92,
                -20
            ],
            [
                -59,
                124
            ],
            [
                76,
                128
            ],
            [
                -21,
                170
            ],
            [
                -153,
                63
            ],
            [
                -30,
                263
            ],
            [
                -83,
                44
            ],
            [
                18,
                189
            ],
            [
                -55,
                59
            ],
            [
                -9,
                -300
            ],
            [
                -56,
                -24
            ],
            [
                -65,
                179
            ],
            [
                -7,
                -219
            ],
            [
                -90,
                74
            ],
            [
                29,
                165
            ],
            [
                -67,
                161
            ],
            [
                -4,
                172
            ],
            [
                -90,
                -131
            ],
            [
                12,
                155
            ],
            [
                -63,
                141
            ],
            [
                -84,
                -49
            ],
            [
                22,
                217
            ],
            [
                -89,
                -140
            ],
            [
                -38,
                342
            ],
            [
                -132,
                220
            ],
            [
                -66,
                -251
            ],
            [
                -92,
                26
            ],
            [
                -72,
                313
            ],
            [
                -76,
                -2
            ],
            [
                -48,
                213
            ],
            [
                -92,
                7
            ],
            [
                -55,
                218
            ],
            [
                55,
                246
            ],
            [
                -32,
                123
            ],
            [
                -84,
                -58
            ],
            [
                -118,
                189
            ],
            [
                -17,
                141
            ],
            [
                70,
                194
            ],
            [
                -72,
                232
            ],
            [
                34,
                96
            ],
            [
                -171,
                178
            ],
            [
                -39,
                367
            ],
            [
                44,
                88
            ],
            [
                -21,
                358
            ],
            [
                -41,
                275
            ],
            [
                -42,
                61
            ]
        ],
        [
            [
                97059,
                29277
            ],
            [
                86,
                40
            ],
            [
                166,
                -94
            ],
            [
                91,
                -102
            ],
            [
                34,
                -256
            ],
            [
                148,
                288
            ],
            [
                -63,
                194
            ],
            [
                -169,
                63
            ],
            [
                -249,
                -65
            ],
            [
                -44,
                -68
            ]
        ],
        [
            [
                96137,
                29538
            ],
            [
                104,
                -48
            ],
            [
                63,
                -339
            ],
            [
                126,
                -264
            ],
            [
                72,
                19
            ],
            [
                57,
                186
            ],
            [
                119,
                62
            ],
            [
                34,
                -154
            ],
            [
                43,
                270
            ],
            [
                -412,
                219
            ],
            [
                -82,
                201
            ],
            [
                -124,
                -152
            ]
        ],
        [
            [
                91476,
                26056
            ],
            [
                1287,
                -471
            ]
        ],
        [
            [
                92763,
                25585
            ],
            [
                762,
                -279
            ],
            [
                1095,
                -426
            ],
            [
                50,
                -205
            ],
            [
                103,
                -27
            ],
            [
                -37,
                -194
            ],
            [
                66,
                -153
            ],
            [
                117,
                7
            ],
            [
                21,
                -220
            ],
            [
                147,
                -172
            ],
            [
                139,
                33
            ],
            [
                42,
                -65
            ]
        ],
        [
            [
                95268,
                23884
            ],
            [
                166,
                635
            ],
            [
                165,
                84
            ],
            [
                48,
                -167
            ],
            [
                96,
                71
            ],
            [
                -47,
                334
            ],
            [
                -46,
                -28
            ],
            [
                -202,
                266
            ],
            [
                -73,
                54
            ],
            [
                62,
                78
            ],
            [
                -48,
                256
            ],
            [
                -73,
                69
            ],
            [
                -48,
                201
            ],
            [
                93,
                186
            ],
            [
                -84,
                49
            ],
            [
                41,
                238
            ],
            [
                84,
                9
            ],
            [
                15,
                -132
            ],
            [
                79,
                -64
            ],
            [
                74,
                128
            ],
            [
                139,
                12
            ],
            [
                101,
                117
            ],
            [
                36,
                139
            ],
            [
                165,
                243
            ],
            [
                2,
                304
            ],
            [
                -68,
                51
            ],
            [
                107,
                137
            ],
            [
                193,
                33
            ],
            [
                86,
                243
            ],
            [
                0,
                171
            ],
            [
                144,
                150
            ],
            [
                167,
                12
            ],
            [
                137,
                -47
            ],
            [
                63,
                51
            ],
            [
                89,
                -194
            ],
            [
                240,
                -257
            ],
            [
                21,
                -94
            ],
            [
                -116,
                -427
            ],
            [
                -58,
                136
            ],
            [
                -51,
                -309
            ],
            [
                -57,
                -162
            ],
            [
                -102,
                -68
            ],
            [
                -59,
                119
            ],
            [
                -96,
                -52
            ],
            [
                78,
                -111
            ],
            [
                233,
                56
            ],
            [
                170,
                282
            ],
            [
                165,
                481
            ],
            [
                84,
                430
            ],
            [
                -3,
                287
            ],
            [
                -32,
                216
            ],
            [
                -17,
                -326
            ],
            [
                -73,
                -38
            ],
            [
                -266,
                234
            ],
            [
                -77,
                104
            ],
            [
                -152,
                41
            ],
            [
                -140,
                190
            ],
            [
                -58,
                240
            ],
            [
                -216,
                156
            ],
            [
                -197,
                459
            ],
            [
                -232,
                256
            ],
            [
                20,
                -97
            ],
            [
                184,
                -204
            ],
            [
                181,
                -414
            ],
            [
                4,
                -160
            ],
            [
                -90,
                -352
            ],
            [
                47,
                -90
            ],
            [
                -171,
                -68
            ],
            [
                29,
                189
            ],
            [
                -63,
                -8
            ],
            [
                15,
                204
            ],
            [
                -78,
                -23
            ],
            [
                17,
                118
            ],
            [
                -162,
                97
            ],
            [
                -3,
                418
            ],
            [
                -129,
                140
            ],
            [
                -129,
                49
            ]
        ],
        [
            [
                95592,
                29215
            ],
            [
                -113,
                -592
            ],
            [
                -111,
                -14
            ]
        ],
        [
            [
                95368,
                28609
            ],
            [
                -67,
                -111
            ]
        ],
        [
            [
                95301,
                28498
            ],
            [
                -83,
                -129
            ],
            [
                -122,
                -56
            ],
            [
                -86,
                -431
            ],
            [
                -65,
                50
            ],
            [
                -72,
                -467
            ],
            [
                -660,
                339
            ]
        ],
        [
            [
                94213,
                27804
            ],
            [
                -11,
                -57
            ],
            [
                -1533,
                618
            ],
            [
                0,
                132
            ],
            [
                -77,
                54
            ],
            [
                -16,
                -148
            ],
            [
                -313,
                124
            ],
            [
                -772,
                279
            ]
        ],
        [
            [
                91491,
                28806
            ],
            [
                -53,
                -123
            ],
            [
                38,
                -2627
            ]
        ],
        [
            [
                52912,
                9721
            ],
            [
                1223,
                21
            ],
            [
                1539,
                2
            ],
            [
                319,
                -5
            ],
            [
                -7,
                -1454
            ],
            [
                141,
                115
            ],
            [
                157,
                -61
            ],
            [
                145,
                165
            ],
            [
                44,
                112
            ],
            [
                82,
                653
            ],
            [
                34,
                78
            ],
            [
                106,
                812
            ],
            [
                -26,
                198
            ],
            [
                18,
                202
            ],
            [
                76,
                138
            ],
            [
                154,
                141
            ],
            [
                149,
                26
            ],
            [
                33,
                -62
            ],
            [
                226,
                39
            ],
            [
                62,
                185
            ],
            [
                325,
                13
            ],
            [
                244,
                43
            ],
            [
                61,
                221
            ],
            [
                19,
                205
            ],
            [
                223,
                -14
            ],
            [
                264,
                -119
            ],
            [
                2,
                -175
            ],
            [
                161,
                -82
            ],
            [
                11,
                -58
            ],
            [
                208,
                -70
            ],
            [
                45,
                70
            ],
            [
                289,
                -16
            ],
            [
                390,
                297
            ],
            [
                138,
                -22
            ],
            [
                1,
                165
            ],
            [
                -92,
                22
            ],
            [
                -18,
                122
            ],
            [
                86,
                95
            ],
            [
                222,
                -56
            ],
            [
                80,
                172
            ],
            [
                -16,
                187
            ],
            [
                162,
                488
            ],
            [
                147,
                -115
            ],
            [
                -61,
                -255
            ],
            [
                63,
                -150
            ],
            [
                84,
                30
            ],
            [
                226,
                -67
            ],
            [
                86,
                137
            ],
            [
                -5,
                212
            ],
            [
                76,
                118
            ],
            [
                97,
                -25
            ],
            [
                46,
                112
            ],
            [
                225,
                13
            ],
            [
                -11,
                109
            ],
            [
                134,
                269
            ],
            [
                120,
                -52
            ],
            [
                -5,
                245
            ],
            [
                116,
                -102
            ],
            [
                91,
                67
            ],
            [
                86,
                -86
            ],
            [
                180,
                -71
            ],
            [
                162,
                -261
            ],
            [
                233,
                -287
            ],
            [
                134,
                -112
            ],
            [
                70,
                17
            ],
            [
                14,
                191
            ],
            [
                90,
                93
            ],
            [
                -28,
                88
            ],
            [
                58,
                151
            ],
            [
                180,
                -37
            ],
            [
                86,
                -85
            ],
            [
                42,
                101
            ],
            [
                636,
                -124
            ],
            [
                167,
                84
            ],
            [
                93,
                257
            ],
            [
                150,
                92
            ],
            [
                73,
                -119
            ],
            [
                105,
                -43
            ],
            [
                75,
                57
            ],
            [
                183,
                18
            ],
            [
                135,
                -87
            ],
            [
                -142,
                201
            ],
            [
                -161,
                113
            ],
            [
                -137,
                205
            ],
            [
                -192,
                132
            ],
            [
                -72,
                128
            ],
            [
                -407,
                263
            ],
            [
                -123,
                113
            ],
            [
                -157,
                72
            ],
            [
                -146,
                123
            ],
            [
                -291,
                327
            ],
            [
                -193,
                275
            ],
            [
                -224,
                370
            ],
            [
                -212,
                394
            ],
            [
                -25,
                102
            ],
            [
                -243,
                528
            ],
            [
                -174,
                323
            ],
            [
                -143,
                148
            ],
            [
                -134,
                298
            ],
            [
                -57,
                39
            ],
            [
                -150,
                284
            ],
            [
                -114,
                115
            ],
            [
                -312,
                472
            ],
            [
                128,
                301
            ]
        ],
        [
            [
                60864,
                18223
            ],
            [
                -118,
                -155
            ],
            [
                -150,
                131
            ],
            [
                -15,
                240
            ],
            [
                -139,
                -22
            ],
            [
                49,
                2243
            ],
            [
                -52,
                35
            ],
            [
                -30,
                190
            ],
            [
                -134,
                -8
            ],
            [
                -53,
                188
            ],
            [
                -78,
                -38
            ],
            [
                -42,
                125
            ],
            [
                -137,
                80
            ],
            [
                -102,
                153
            ],
            [
                -86,
                264
            ],
            [
                -24,
                242
            ],
            [
                -129,
                186
            ],
            [
                -23,
                301
            ],
            [
                11,
                243
            ],
            [
                173,
                17
            ],
            [
                198,
                424
            ],
            [
                8,
                213
            ],
            [
                -71,
                242
            ],
            [
                -91,
                180
            ],
            [
                -6,
                386
            ],
            [
                42,
                311
            ],
            [
                -71,
                113
            ],
            [
                46,
                193
            ],
            [
                29,
                348
            ],
            [
                -35,
                173
            ],
            [
                19,
                197
            ],
            [
                -61,
                347
            ],
            [
                115,
                124
            ],
            [
                275,
                419
            ],
            [
                34,
                131
            ],
            [
                322,
                24
            ],
            [
                55,
                70
            ],
            [
                55,
                228
            ],
            [
                111,
                143
            ],
            [
                260,
                124
            ],
            [
                210,
                245
            ],
            [
                92,
                495
            ],
            [
                97,
                141
            ],
            [
                175,
                154
            ],
            [
                214,
                341
            ],
            [
                244,
                98
            ],
            [
                254,
                554
            ],
            [
                72,
                272
            ],
            [
                -32,
                252
            ],
            [
                10,
                362
            ],
            [
                62,
                117
            ],
            [
                -14,
                134
            ],
            [
                47,
                182
            ]
        ],
        [
            [
                62450,
                30375
            ],
            [
                -839,
                69
            ],
            [
                -1825,
                125
            ],
            [
                -1493,
                72
            ],
            [
                -1805,
                50
            ],
            [
                -1333,
                18
            ],
            [
                -1150,
                -4
            ]
        ],
        [
            [
                54005,
                30705
            ],
            [
                16,
                -4613
            ],
            [
                4,
                -2277
            ],
            [
                -56,
                -226
            ],
            [
                -201,
                -197
            ],
            [
                -104,
                -15
            ],
            [
                -74,
                -174
            ],
            [
                -44,
                -222
            ],
            [
                -151,
                -351
            ],
            [
                40,
                -174
            ],
            [
                284,
                -359
            ],
            [
                109,
                -279
            ],
            [
                32,
                -439
            ]
        ],
        [
            [
                53860,
                21379
            ],
            [
                -15,
                -392
            ],
            [
                31,
                -176
            ],
            [
                -62,
                -519
            ],
            [
                -5,
                -421
            ],
            [
                -104,
                -173
            ],
            [
                -103,
                -396
            ],
            [
                -13,
                -332
            ],
            [
                -81,
                -380
            ],
            [
                31,
                -236
            ],
            [
                -31,
                -351
            ],
            [
                38,
                -289
            ],
            [
                -65,
                -274
            ],
            [
                -1,
                -718
            ],
            [
                -22,
                -172
            ],
            [
                5,
                -512
            ],
            [
                -38,
                -298
            ],
            [
                20,
                -664
            ],
            [
                -191,
                -825
            ],
            [
                -54,
                -434
            ],
            [
                -65,
                -167
            ],
            [
                -16,
                -333
            ],
            [
                -44,
                -78
            ],
            [
                -63,
                -368
            ],
            [
                48,
                -420
            ],
            [
                -44,
                -305
            ],
            [
                25,
                -378
            ],
            [
                -27,
                -350
            ],
            [
                68,
                -302
            ],
            [
                16,
                -208
            ],
            [
                -55,
                -153
            ],
            [
                -56,
                -475
            ],
            [
                -91,
                -438
            ],
            [
                16,
                -121
            ]
        ],
        [
            [
                89327,
                39227
            ],
            [
                55,
                -243
            ]
        ],
        [
            [
                89382,
                38984
            ],
            [
                46,
                -332
            ],
            [
                56,
                -164
            ]
        ],
        [
            [
                89484,
                38488
            ],
            [
                117,
                -230
            ],
            [
                99,
                -39
            ],
            [
                183,
                -201
            ],
            [
                -3,
                -299
            ],
            [
                273,
                -539
            ],
            [
                107,
                -95
            ],
            [
                46,
                -194
            ],
            [
                69,
                -4
            ],
            [
                79,
                -188
            ],
            [
                -108,
                -175
            ],
            [
                -135,
                -86
            ],
            [
                -65,
                -152
            ],
            [
                -139,
                -115
            ],
            [
                -71,
                -207
            ],
            [
                -159,
                -14
            ],
            [
                -43,
                -138
            ],
            [
                -40,
                -328
            ],
            [
                -64,
                -77
            ],
            [
                -155,
                34
            ],
            [
                -76,
                -434
            ],
            [
                14,
                -349
            ],
            [
                60,
                -4
            ],
            [
                83,
                -427
            ],
            [
                -179,
                -316
            ],
            [
                -5,
                -77
            ],
            [
                147,
                -249
            ],
            [
                67,
                -205
            ],
            [
                -29,
                -80
            ],
            [
                127,
                -335
            ],
            [
                41,
                -463
            ],
            [
                86,
                -240
            ],
            [
                89,
                -79
            ]
        ],
        [
            [
                89900,
                32183
            ],
            [
                731,
                443
            ],
            [
                723,
                388
            ],
            [
                31,
                4
            ],
            [
                -1,
                426
            ],
            [
                -90,
                825
            ]
        ],
        [
            [
                91294,
                34269
            ],
            [
                -22,
                127
            ]
        ],
        [
            [
                91272,
                34396
            ],
            [
                -201,
                199
            ],
            [
                13,
                281
            ],
            [
                -43,
                239
            ]
        ],
        [
            [
                91041,
                35115
            ],
            [
                17,
                143
            ],
            [
                124,
                44
            ],
            [
                91,
                -99
            ],
            [
                245,
                83
            ],
            [
                7,
                -151
            ],
            [
                86,
                556
            ],
            [
                4,
                698
            ],
            [
                32,
                827
            ],
            [
                44,
                568
            ],
            [
                -37,
                307
            ],
            [
                -158,
                926
            ],
            [
                -125,
                488
            ],
            [
                -158,
                248
            ],
            [
                -120,
                321
            ],
            [
                -104,
                535
            ],
            [
                -68,
                532
            ],
            [
                -94,
                241
            ],
            [
                -110,
                89
            ],
            [
                -71,
                -19
            ],
            [
                -2,
                -240
            ],
            [
                50,
                -462
            ],
            [
                -14,
                -176
            ],
            [
                -141,
                -69
            ],
            [
                -109,
                28
            ],
            [
                -10,
                -74
            ],
            [
                -141,
                57
            ],
            [
                -28,
                132
            ],
            [
                -98,
                -203
            ],
            [
                -210,
                -106
            ],
            [
                -117,
                -189
            ],
            [
                -35,
                42
            ],
            [
                -159,
                -181
            ],
            [
                -56,
                -123
            ],
            [
                -129,
                -37
            ],
            [
                -35,
                -304
            ],
            [
                18,
                -154
            ],
            [
                -86,
                -78
            ]
        ],
        [
            [
                89344,
                39315
            ],
            [
                -17,
                -88
            ]
        ],
        [
            [
                90812,
                53263
            ],
            [
                126,
                18
            ],
            [
                105,
                211
            ],
            [
                24,
                151
            ],
            [
                -98,
                5
            ],
            [
                -5,
                -151
            ],
            [
                -152,
                -234
            ]
        ],
        [
            [
                90718,
                56718
            ],
            [
                28,
                -212
            ],
            [
                721,
                -869
            ],
            [
                -18,
                -831
            ],
            [
                -39,
                -437
            ],
            [
                -172,
                -615
            ],
            [
                61,
                90
            ],
            [
                147,
                522
            ],
            [
                34,
                449
            ],
            [
                23,
                962
            ],
            [
                -146,
                80
            ],
            [
                -260,
                282
            ],
            [
                -379,
                579
            ]
        ],
        [
            [
                80100,
                54078
            ],
            [
                536,
                -89
            ],
            [
                349,
                -82
            ],
            [
                599,
                -113
            ],
            [
                233,
                -77
            ],
            [
                725,
                -132
            ],
            [
                1372,
                -389
            ],
            [
                1757,
                -544
            ],
            [
                2781,
                -937
            ],
            [
                187,
                -92
            ],
            [
                1636,
                -588
            ]
        ],
        [
            [
                90275,
                51035
            ],
            [
                176,
                697
            ],
            [
                141,
                454
            ],
            [
                150,
                401
            ],
            [
                149,
                313
            ],
            [
                332,
                797
            ],
            [
                -58,
                -26
            ],
            [
                -222,
                -529
            ],
            [
                -74,
                -129
            ],
            [
                -83,
                -5
            ],
            [
                -133,
                -540
            ],
            [
                -160,
                -466
            ],
            [
                -64,
                -56
            ],
            [
                8,
                -135
            ],
            [
                -71,
                -277
            ],
            [
                -116,
                -219
            ],
            [
                -162,
                12
            ],
            [
                -8,
                -122
            ],
            [
                -91,
                93
            ],
            [
                63,
                182
            ],
            [
                120,
                119
            ],
            [
                64,
                -57
            ],
            [
                30,
                241
            ],
            [
                333,
                861
            ],
            [
                20,
                151
            ],
            [
                -144,
                -162
            ],
            [
                -9,
                -123
            ],
            [
                -142,
                -283
            ],
            [
                -79,
                -12
            ],
            [
                42,
                207
            ],
            [
                105,
                95
            ],
            [
                -206,
                -12
            ],
            [
                -249,
                -309
            ],
            [
                -97,
                -6
            ],
            [
                160,
                273
            ],
            [
                69,
                33
            ],
            [
                60,
                176
            ],
            [
                -197,
                174
            ],
            [
                -200,
                -171
            ],
            [
                185,
                240
            ],
            [
                -38,
                60
            ],
            [
                -460,
                -182
            ],
            [
                170,
                188
            ],
            [
                144,
                24
            ],
            [
                -36,
                78
            ],
            [
                -150,
                80
            ],
            [
                -60,
                233
            ],
            [
                -88,
                105
            ],
            [
                -117,
                36
            ],
            [
                -75,
                -94
            ],
            [
                -110,
                16
            ],
            [
                -126,
                -367
            ],
            [
                -20,
                -196
            ],
            [
                46,
                -282
            ],
            [
                -36,
                -32
            ],
            [
                -60,
                279
            ],
            [
                17,
                252
            ],
            [
                87,
                287
            ],
            [
                110,
                256
            ],
            [
                -23,
                116
            ],
            [
                59,
                95
            ],
            [
                251,
                -124
            ],
            [
                210,
                -234
            ],
            [
                82,
                137
            ],
            [
                303,
                -310
            ],
            [
                201,
                -72
            ],
            [
                101,
                104
            ],
            [
                16,
                138
            ],
            [
                -54,
                285
            ],
            [
                45,
                168
            ],
            [
                76,
                554
            ],
            [
                54,
                -62
            ],
            [
                0,
                -387
            ],
            [
                -45,
                -493
            ],
            [
                69,
                -195
            ],
            [
                -43,
                -45
            ],
            [
                161,
                -140
            ],
            [
                137,
                109
            ],
            [
                157,
                433
            ],
            [
                -3,
                160
            ],
            [
                82,
                274
            ],
            [
                -39,
                100
            ],
            [
                43,
                167
            ],
            [
                -58,
                205
            ],
            [
                -208,
                101
            ],
            [
                -131,
                434
            ],
            [
                -21,
                271
            ],
            [
                -66,
                38
            ],
            [
                6,
                132
            ],
            [
                -110,
                207
            ],
            [
                -173,
                -22
            ],
            [
                -185,
                80
            ],
            [
                -268,
                -2
            ],
            [
                -115,
                -114
            ],
            [
                -126,
                -342
            ],
            [
                192,
                -79
            ],
            [
                18,
                -159
            ],
            [
                -167,
                144
            ],
            [
                -81,
                -9
            ],
            [
                -48,
                128
            ],
            [
                81,
                166
            ],
            [
                72,
                265
            ],
            [
                -248,
                -70
            ],
            [
                -84,
                62
            ],
            [
                -139,
                -65
            ],
            [
                -208,
                -29
            ],
            [
                -165,
                -106
            ],
            [
                7,
                94
            ],
            [
                130,
                163
            ],
            [
                134,
                -31
            ],
            [
                443,
                191
            ],
            [
                301,
                -13
            ],
            [
                85,
                209
            ],
            [
                -84,
                402
            ],
            [
                8,
                169
            ],
            [
                -70,
                242
            ],
            [
                -311,
                517
            ],
            [
                -366,
                -251
            ],
            [
                35,
                207
            ],
            [
                171,
                127
            ],
            [
                249,
                59
            ],
            [
                196,
                -340
            ],
            [
                227,
                -151
            ],
            [
                21,
                -256
            ],
            [
                75,
                22
            ],
            [
                44,
                206
            ],
            [
                65,
                81
            ],
            [
                115,
                -25
            ],
            [
                -87,
                -220
            ],
            [
                149,
                61
            ],
            [
                49,
                241
            ],
            [
                -93,
                301
            ],
            [
                -106,
                80
            ],
            [
                -109,
                506
            ],
            [
                -13,
                244
            ],
            [
                -117,
                -25
            ],
            [
                -25,
                -262
            ],
            [
                -76,
                -39
            ],
            [
                40,
                263
            ],
            [
                -99,
                60
            ],
            [
                293,
                114
            ],
            [
                138,
                -548
            ],
            [
                123,
                -368
            ],
            [
                129,
                -301
            ],
            [
                221,
                -670
            ],
            [
                68,
                41
            ],
            [
                -147,
                333
            ],
            [
                -349,
                927
            ],
            [
                -135,
                531
            ],
            [
                -41,
                304
            ],
            [
                -50,
                -207
            ],
            [
                -249,
                -99
            ],
            [
                -169,
                44
            ],
            [
                -450,
                298
            ],
            [
                -293,
                321
            ],
            [
                -173,
                332
            ],
            [
                -223,
                328
            ],
            [
                -183,
                340
            ],
            [
                -229,
                579
            ],
            [
                -113,
                469
            ],
            [
                -105,
                1016
            ],
            [
                1,
                231
            ],
            [
                -87,
                8
            ],
            [
                -34,
                -105
            ],
            [
                -299,
                -5
            ],
            [
                -368,
                167
            ],
            [
                -263,
                284
            ]
        ],
        [
            [
                86724,
                62866
            ],
            [
                -1511,
                -1858
            ],
            [
                -243,
                -316
            ],
            [
                -670,
                -814
            ],
            [
                -351,
                101
            ],
            [
                -1669,
                418
            ],
            [
                -14,
                -449
            ],
            [
                -335,
                -578
            ],
            [
                -169,
                291
            ],
            [
                -41,
                -400
            ],
            [
                -1214,
                209
            ],
            [
                -672,
                126
            ],
            [
                -335,
                47
            ],
            [
                -184,
                97
            ],
            [
                -33,
                -103
            ],
            [
                -61,
                201
            ],
            [
                -94,
                4
            ],
            [
                -405,
                404
            ],
            [
                -81,
                136
            ],
            [
                -18,
                -79
            ],
            [
                -558,
                462
            ]
        ],
        [
            [
                75885,
                61298
            ],
            [
                -8,
                -920
            ],
            [
                129,
                -185
            ],
            [
                29,
                81
            ],
            [
                182,
                -53
            ],
            [
                119,
                -214
            ],
            [
                -41,
                -202
            ],
            [
                48,
                -95
            ],
            [
                -34,
                -119
            ],
            [
                42,
                -140
            ],
            [
                134,
                -177
            ],
            [
                40,
                -169
            ],
            [
                100,
                -48
            ],
            [
                85,
                -168
            ],
            [
                510,
                -137
            ],
            [
                58,
                -183
            ],
            [
                133,
                -135
            ],
            [
                49,
                -115
            ],
            [
                69,
                14
            ],
            [
                80,
                -287
            ],
            [
                97,
                -35
            ],
            [
                37,
                -145
            ],
            [
                136,
                -127
            ],
            [
                159,
                23
            ],
            [
                44,
                -73
            ],
            [
                87,
                -342
            ],
            [
                -18,
                -278
            ],
            [
                80,
                -35
            ],
            [
                63,
                91
            ],
            [
                52,
                -130
            ],
            [
                5,
                -188
            ],
            [
                235,
                -312
            ],
            [
                77,
                122
            ],
            [
                -8,
                244
            ],
            [
                98,
                29
            ],
            [
                155,
                -248
            ],
            [
                74,
                -330
            ],
            [
                188,
                -234
            ],
            [
                76,
                0
            ],
            [
                37,
                -110
            ],
            [
                133,
                -5
            ],
            [
                45,
                157
            ],
            [
                168,
                -97
            ],
            [
                161,
                -749
            ],
            [
                180,
                -264
            ],
            [
                153,
                53
            ],
            [
                -70,
                -281
            ],
            [
                56,
                -238
            ],
            [
                -41,
                -216
            ],
            [
                32,
                -250
            ]
        ],
        [
            [
                42801,
                8880
            ],
            [
                996,
                142
            ],
            [
                1716,
                212
            ],
            [
                1618,
                163
            ],
            [
                1025,
                87
            ],
            [
                1347,
                97
            ],
            [
                975,
                53
            ],
            [
                1364,
                57
            ],
            [
                1070,
                30
            ]
        ],
        [
            [
                53860,
                21379
            ],
            [
                -1176,
                -19
            ],
            [
                -1704,
                -63
            ],
            [
                -1678,
                -104
            ],
            [
                -1053,
                -81
            ],
            [
                -1941,
                -172
            ],
            [
                -861,
                -91
            ],
            [
                -1135,
                -132
            ],
            [
                -1325,
                -171
            ],
            [
                -754,
                -107
            ]
        ],
        [
            [
                42233,
                20439
            ],
            [
                81,
                -1667
            ],
            [
                182,
                -3639
            ],
            [
                103,
                -1962
            ],
            [
                21,
                -506
            ],
            [
                181,
                -3785
            ]
        ],
        [
            [
                57180,
                55736
            ],
            [
                16,
                1928
            ]
        ],
        [
            [
                57196,
                57664
            ],
            [
                63,
                768
            ],
            [
                311,
                3486
            ],
            [
                -16,
                2185
            ],
            [
                -20,
                4584
            ]
        ],
        [
            [
                57534,
                68687
            ],
            [
                -64,
                84
            ],
            [
                -123,
                -237
            ],
            [
                -110,
                40
            ],
            [
                -25,
                -87
            ],
            [
                -94,
                17
            ],
            [
                -122,
                -255
            ],
            [
                -136,
                63
            ],
            [
                -131,
                -178
            ],
            [
                -93,
                -285
            ],
            [
                -147,
                -10
            ],
            [
                -153,
                -278
            ],
            [
                -183,
                -89
            ],
            [
                -96,
                321
            ],
            [
                -229,
                47
            ],
            [
                -254,
                -51
            ],
            [
                -29,
                -198
            ],
            [
                -281,
                181
            ],
            [
                -79,
                -29
            ],
            [
                6,
                140
            ],
            [
                -87,
                -18
            ],
            [
                -79,
                86
            ],
            [
                -169,
                -185
            ],
            [
                -11,
                98
            ],
            [
                -88,
                -20
            ],
            [
                -56,
                101
            ],
            [
                -149,
                -29
            ],
            [
                -139,
                128
            ],
            [
                11,
                172
            ],
            [
                -94,
                87
            ],
            [
                -105,
                -87
            ],
            [
                -60,
                228
            ],
            [
                -61,
                90
            ],
            [
                -147,
                -344
            ],
            [
                -143,
                13
            ],
            [
                -48,
                -187
            ],
            [
                -85,
                6
            ],
            [
                -105,
                -123
            ],
            [
                83,
                -146
            ],
            [
                -166,
                -80
            ],
            [
                -29,
                228
            ],
            [
                -131,
                97
            ],
            [
                -59,
                -173
            ],
            [
                -104,
                82
            ],
            [
                -60,
                -81
            ],
            [
                -39,
                -305
            ],
            [
                -164,
                -11
            ],
            [
                15,
                242
            ],
            [
                -191,
                296
            ],
            [
                -19,
                311
            ],
            [
                -138,
                -40
            ],
            [
                -60,
                -248
            ],
            [
                73,
                -148
            ],
            [
                -22,
                -200
            ],
            [
                -57,
                -93
            ],
            [
                -86,
                201
            ],
            [
                -147,
                -40
            ],
            [
                -69,
                204
            ],
            [
                -98,
                -2
            ],
            [
                -67,
                -88
            ],
            [
                7,
                -239
            ],
            [
                -74,
                -63
            ],
            [
                -94,
                81
            ],
            [
                -82,
                -63
            ],
            [
                14,
                -153
            ],
            [
                -80,
                -109
            ],
            [
                -100,
                -24
            ],
            [
                -54,
                149
            ],
            [
                -220,
                339
            ],
            [
                -59,
                30
            ],
            [
                -215,
                -191
            ],
            [
                74,
                -349
            ],
            [
                -47,
                -67
            ],
            [
                -103,
                43
            ],
            [
                -111,
                -51
            ],
            [
                -53,
                -307
            ],
            [
                56,
                -174
            ],
            [
                -60,
                -96
            ],
            [
                -86,
                152
            ],
            [
                -239,
                -88
            ],
            [
                -116,
                -91
            ],
            [
                -103,
                281
            ],
            [
                -127,
                73
            ],
            [
                -162,
                -340
            ],
            [
                -129,
                -66
            ],
            [
                -79,
                117
            ],
            [
                -123,
                26
            ],
            [
                -90,
                -125
            ],
            [
                -186,
                -92
            ],
            [
                -130,
                -162
            ],
            [
                -115,
                69
            ],
            [
                -172,
                -91
            ],
            [
                -94,
                14
            ],
            [
                -30,
                -472
            ],
            [
                -302,
                -483
            ],
            [
                -36,
                302
            ],
            [
                -80,
                10
            ],
            [
                -137,
                -164
            ],
            [
                -114,
                -16
            ],
            [
                -40,
                159
            ],
            [
                -176,
                -36
            ],
            [
                -102,
                -162
            ],
            [
                -243,
                -529
            ],
            [
                -92,
                -103
            ],
            [
                -101,
                65
            ],
            [
                184,
                -7472
            ],
            [
                -971,
                -73
            ],
            [
                -958,
                -83
            ],
            [
                -957,
                -93
            ],
            [
                -1113,
                -123
            ],
            [
                -1335,
                -159
            ]
        ],
        [
            [
                42286,
                56906
            ],
            [
                84,
                -1923
            ]
        ],
        [
            [
                80162,
                33015
            ],
            [
                286,
                -310
            ],
            [
                257,
                -381
            ],
            [
                40,
                -212
            ],
            [
                100,
                55
            ],
            [
                187,
                -296
            ],
            [
                250,
                -320
            ]
        ],
        [
            [
                81282,
                31551
            ],
            [
                105,
                1028
            ],
            [
                1440,
                -432
            ],
            [
                450,
                -151
            ],
            [
                1240,
                -396
            ],
            [
                1144,
                -390
            ],
            [
                328,
                -123
            ],
            [
                934,
                -316
            ],
            [
                970,
                -352
            ],
            [
                616,
                -236
            ],
            [
                159,
                178
            ],
            [
                72,
                276
            ],
            [
                129,
                -91
            ],
            [
                173,
                175
            ],
            [
                -12,
                152
            ],
            [
                93,
                50
            ],
            [
                76,
                510
            ],
            [
                -38,
                55
            ],
            [
                98,
                129
            ],
            [
                115,
                286
            ],
            [
                114,
                -27
            ],
            [
                44,
                124
            ],
            [
                135,
                -64
            ],
            [
                46,
                66
            ],
            [
                80,
                -66
            ],
            [
                14,
                110
            ],
            [
                93,
                137
            ]
        ],
        [
            [
                89484,
                38488
            ],
            [
                -155,
                -66
            ],
            [
                -121,
                23
            ],
            [
                -145,
                124
            ],
            [
                -90,
                179
            ],
            [
                -72,
                272
            ]
        ],
        [
            [
                88901,
                39020
            ],
            [
                -741,
                273
            ],
            [
                -1263,
                453
            ],
            [
                -798,
                273
            ],
            [
                -1789,
                577
            ],
            [
                -1573,
                492
            ]
        ],
        [
            [
                82737,
                41088
            ],
            [
                -631,
                189
            ],
            [
                -1120,
                318
            ],
            [
                -334,
                -3491
            ]
        ],
        [
            [
                80652,
                38104
            ],
            [
                -490,
                -5089
            ]
        ],
        [
            [
                42034,
                24047
            ],
            [
                29,
                -8
            ],
            [
                63,
                -1279
            ],
            [
                107,
                -2321
            ]
        ],
        [
            [
                54005,
                30705
            ],
            [
                -235,
                -3
            ],
            [
                7,
                255
            ],
            [
                117,
                188
            ],
            [
                -8,
                290
            ],
            [
                -88,
                45
            ],
            [
                31,
                284
            ],
            [
                122,
                1
            ],
            [
                29,
                285
            ],
            [
                48,
                113
            ],
            [
                -43,
                222
            ],
            [
                -77,
                50
            ],
            [
                15,
                348
            ],
            [
                -67,
                133
            ],
            [
                -6,
                282
            ],
            [
                -146,
                317
            ],
            [
                3,
                240
            ],
            [
                151,
                196
            ],
            [
                98,
                383
            ],
            [
                -23,
                137
            ],
            [
                74,
                115
            ]
        ],
        [
            [
                54007,
                34586
            ],
            [
                -91,
                30
            ],
            [
                -49,
                -126
            ],
            [
                -118,
                40
            ],
            [
                -56,
                -183
            ],
            [
                -119,
                -217
            ],
            [
                39,
                -146
            ],
            [
                -65,
                -81
            ],
            [
                -121,
                -22
            ],
            [
                -6,
                -123
            ],
            [
                -164,
                -116
            ],
            [
                -93,
                49
            ],
            [
                -29,
                -154
            ],
            [
                -243,
                -49
            ],
            [
                -128,
                -146
            ],
            [
                -13,
                -141
            ],
            [
                -142,
                -87
            ],
            [
                -180,
                2
            ],
            [
                -37,
                72
            ],
            [
                -267,
                -51
            ],
            [
                -106,
                56
            ],
            [
                -173,
                -31
            ],
            [
                -87,
                -76
            ],
            [
                -77,
                36
            ],
            [
                -23,
                159
            ],
            [
                -103,
                179
            ],
            [
                -138,
                16
            ],
            [
                -151,
                -225
            ],
            [
                -207,
                -213
            ],
            [
                -336,
                -295
            ],
            [
                -48,
                -198
            ],
            [
                -851,
                -41
            ],
            [
                -1377,
                -85
            ],
            [
                -1237,
                -95
            ],
            [
                -1756,
                -158
            ],
            [
                -221,
                -33
            ],
            [
                -1034,
                -116
            ],
            [
                -1487,
                -191
            ],
            [
                -1051,
                -146
            ]
        ],
        [
            [
                41662,
                31680
            ],
            [
                103,
                -2136
            ],
            [
                112,
                -2227
            ],
            [
                157,
                -3270
            ]
        ],
        [
            [
                57534,
                68687
            ],
            [
                49,
                -29
            ],
            [
                4,
                180
            ],
            [
                149,
                87
            ],
            [
                36,
                120
            ],
            [
                111,
                -131
            ],
            [
                134,
                86
            ],
            [
                78,
                -154
            ],
            [
                111,
                151
            ],
            [
                38,
                -72
            ],
            [
                111,
                66
            ],
            [
                26,
                2051
            ]
        ],
        [
            [
                58381,
                71042
            ],
            [
                47,
                3919
            ],
            [
                46,
                31
            ],
            [
                81,
                245
            ],
            [
                130,
                123
            ],
            [
                69,
                272
            ],
            [
                101,
                180
            ],
            [
                -14,
                108
            ],
            [
                53,
                228
            ],
            [
                -62,
                335
            ],
            [
                42,
                169
            ],
            [
                179,
                187
            ],
            [
                -43,
                138
            ],
            [
                94,
                115
            ],
            [
                75,
                295
            ],
            [
                -44,
                194
            ],
            [
                131,
                144
            ],
            [
                43,
                362
            ],
            [
                98,
                -45
            ],
            [
                10,
                398
            ],
            [
                60,
                224
            ],
            [
                -96,
                90
            ],
            [
                83,
                234
            ],
            [
                -76,
                199
            ],
            [
                30,
                242
            ],
            [
                -120,
                323
            ],
            [
                -1,
                180
            ],
            [
                -116,
                213
            ],
            [
                8,
                157
            ],
            [
                -90,
                102
            ],
            [
                -22,
                133
            ],
            [
                51,
                79
            ],
            [
                36,
                297
            ],
            [
                -114,
                210
            ],
            [
                -12,
                206
            ],
            [
                102,
                145
            ],
            [
                -8,
                324
            ],
            [
                66,
                260
            ],
            [
                -82,
                204
            ],
            [
                57,
                130
            ],
            [
                -157,
                250
            ],
            [
                -124,
                486
            ],
            [
                -130,
                181
            ],
            [
                170,
                484
            ]
        ],
        [
            [
                58932,
                83793
            ],
            [
                1,
                44
            ],
            [
                -317,
                3
            ],
            [
                -256,
                140
            ],
            [
                -959,
                776
            ],
            [
                -122,
                140
            ],
            [
                -70,
                179
            ],
            [
                -93,
                32
            ],
            [
                23,
                -123
            ],
            [
                181,
                -323
            ],
            [
                151,
                -62
            ],
            [
                53,
                -154
            ],
            [
                139,
                23
            ],
            [
                -101,
                -177
            ],
            [
                -376,
                186
            ],
            [
                -79,
                -18
            ],
            [
                138,
                -363
            ],
            [
                28,
                -266
            ],
            [
                -8,
                -241
            ],
            [
                -118,
                -88
            ],
            [
                -114,
                97
            ],
            [
                -108,
                329
            ],
            [
                -94,
                52
            ],
            [
                -88,
                -160
            ],
            [
                -90,
                274
            ],
            [
                60,
                105
            ],
            [
                -68,
                180
            ],
            [
                72,
                165
            ],
            [
                141,
                52
            ],
            [
                -40,
                178
            ],
            [
                78,
                63
            ],
            [
                -3,
                479
            ],
            [
                -114,
                71
            ],
            [
                -283,
                451
            ],
            [
                -116,
                -58
            ],
            [
                -12,
                289
            ],
            [
                40,
                86
            ],
            [
                274,
                -362
            ],
            [
                240,
                -392
            ],
            [
                106,
                -79
            ],
            [
                26,
                -182
            ],
            [
                156,
                79
            ],
            [
                -140,
                204
            ],
            [
                -431,
                510
            ],
            [
                -192,
                311
            ],
            [
                -221,
                304
            ],
            [
                -279,
                470
            ],
            [
                -112,
                29
            ],
            [
                -730,
                746
            ],
            [
                -521,
                413
            ],
            [
                -230,
                207
            ],
            [
                -215,
                230
            ],
            [
                -172,
                227
            ],
            [
                -104,
                244
            ],
            [
                -375,
                358
            ],
            [
                -318,
                424
            ],
            [
                -188,
                301
            ],
            [
                -234,
                462
            ],
            [
                -84,
                280
            ],
            [
                -194,
                444
            ],
            [
                -146,
                455
            ],
            [
                -171,
                640
            ],
            [
                -131,
                728
            ],
            [
                -46,
                663
            ],
            [
                18,
                664
            ],
            [
                35,
                341
            ],
            [
                99,
                678
            ],
            [
                82,
                437
            ],
            [
                109,
                751
            ],
            [
                71,
                847
            ],
            [
                -48,
                -155
            ],
            [
                -34,
                -479
            ],
            [
                -158,
                -1115
            ],
            [
                -168,
                -56
            ],
            [
                125,
                -85
            ],
            [
                -160,
                -842
            ],
            [
                -21,
                -347
            ],
            [
                10,
                -849
            ],
            [
                84,
                -898
            ],
            [
                119,
                -588
            ],
            [
                141,
                -481
            ],
            [
                98,
                -225
            ],
            [
                73,
                -282
            ],
            [
                61,
                -113
            ],
            [
                -17,
                -156
            ],
            [
                96,
                -278
            ],
            [
                130,
                -122
            ],
            [
                276,
                -692
            ],
            [
                120,
                -54
            ],
            [
                58,
                -173
            ],
            [
                110,
                -5
            ],
            [
                270,
                -388
            ],
            [
                313,
                -186
            ],
            [
                -24,
                -289
            ],
            [
                -254,
                247
            ],
            [
                -78,
                129
            ],
            [
                -125,
                17
            ],
            [
                -50,
                -353
            ],
            [
                -130,
                2
            ],
            [
                -68,
                439
            ],
            [
                44,
                133
            ],
            [
                -27,
                120
            ],
            [
                -268,
                378
            ],
            [
                -182,
                -97
            ],
            [
                -18,
                -142
            ],
            [
                -232,
                195
            ],
            [
                -121,
                172
            ],
            [
                151,
                119
            ],
            [
                222,
                -206
            ],
            [
                -2,
                268
            ],
            [
                -46,
                74
            ],
            [
                -279,
                749
            ],
            [
                -76,
                -8
            ],
            [
                -49,
                -193
            ],
            [
                -148,
                28
            ],
            [
                -31,
                -60
            ],
            [
                -225,
                31
            ],
            [
                -76,
                -41
            ],
            [
                -45,
                124
            ],
            [
                84,
                105
            ],
            [
                186,
                -48
            ],
            [
                -31,
                209
            ],
            [
                49,
                158
            ],
            [
                226,
                177
            ],
            [
                -139,
                474
            ],
            [
                -92,
                457
            ],
            [
                -9,
                145
            ],
            [
                -89,
                344
            ],
            [
                -192,
                171
            ],
            [
                -76,
                -62
            ],
            [
                98,
                -65
            ],
            [
                24,
                -191
            ],
            [
                -55,
                -11
            ],
            [
                -192,
                284
            ],
            [
                -41,
                160
            ],
            [
                171,
                57
            ],
            [
                187,
                -122
            ],
            [
                55,
                20
            ],
            [
                -52,
                1027
            ],
            [
                -51,
                673
            ],
            [
                -25,
                10
            ],
            [
                60,
                751
            ],
            [
                56,
                213
            ],
            [
                5,
                275
            ],
            [
                66,
                4
            ],
            [
                196,
                800
            ],
            [
                -63,
                151
            ],
            [
                37,
                478
            ],
            [
                39,
                70
            ],
            [
                144,
                39
            ],
            [
                7,
                115
            ],
            [
                89,
                -57
            ],
            [
                9,
                404
            ],
            [
                -265,
                7
            ],
            [
                -1,
                64
            ],
            [
                -198,
                101
            ],
            [
                1,
                255
            ],
            [
                -147,
                -41
            ],
            [
                -7,
                -83
            ],
            [
                -147,
                -59
            ],
            [
                -48,
                -182
            ],
            [
                -73,
                -16
            ],
            [
                -132,
                -321
            ],
            [
                -222,
                -47
            ],
            [
                -85,
                -109
            ],
            [
                -172,
                -29
            ],
            [
                -165,
                49
            ],
            [
                -123,
                -60
            ],
            [
                -23,
                95
            ],
            [
                -74,
                -104
            ],
            [
                -143,
                65
            ],
            [
                -206,
                -98
            ],
            [
                -171,
                -252
            ],
            [
                -2,
                -109
            ],
            [
                -101,
                28
            ],
            [
                -155,
                -251
            ],
            [
                -64,
                33
            ],
            [
                -177,
                -166
            ],
            [
                -171,
                61
            ],
            [
                -168,
                -345
            ],
            [
                -69,
                -28
            ],
            [
                -68,
                -152
            ],
            [
                -135,
                43
            ],
            [
                -151,
                -162
            ],
            [
                -144,
                -64
            ],
            [
                -87,
                58
            ],
            [
                -56,
                -116
            ],
            [
                42,
                -190
            ],
            [
                -69,
                -187
            ],
            [
                -86,
                -62
            ],
            [
                -8,
                -306
            ],
            [
                -43,
                -138
            ],
            [
                -12,
                -260
            ],
            [
                -61,
                -84
            ],
            [
                -50,
                -373
            ],
            [
                -118,
                -146
            ],
            [
                17,
                -102
            ],
            [
                -113,
                -111
            ],
            [
                7,
                -150
            ],
            [
                -73,
                -169
            ],
            [
                -62,
                -26
            ],
            [
                40,
                -256
            ],
            [
                -17,
                -229
            ],
            [
                30,
                -94
            ],
            [
                -25,
                -282
            ],
            [
                -108,
                -89
            ],
            [
                7,
                -121
            ],
            [
                -86,
                -53
            ],
            [
                68,
                -80
            ],
            [
                61,
                -558
            ],
            [
                -95,
                -56
            ],
            [
                40,
                -247
            ],
            [
                -83,
                -195
            ],
            [
                -94,
                -111
            ],
            [
                -72,
                53
            ],
            [
                -57,
                -130
            ],
            [
                -71,
                14
            ],
            [
                -125,
                -302
            ],
            [
                -206,
                -271
            ],
            [
                -41,
                -249
            ],
            [
                7,
                -183
            ],
            [
                -71,
                -113
            ],
            [
                15,
                -153
            ],
            [
                -117,
                -60
            ],
            [
                -46,
                -271
            ],
            [
                -68,
                -81
            ],
            [
                -54,
                -230
            ],
            [
                -241,
                -195
            ],
            [
                -161,
                -371
            ],
            [
                14,
                -123
            ],
            [
                -111,
                -336
            ],
            [
                27,
                -151
            ],
            [
                -56,
                -136
            ],
            [
                61,
                -89
            ],
            [
                -98,
                -61
            ],
            [
                -40,
                -141
            ],
            [
                29,
                -123
            ],
            [
                -94,
                -101
            ],
            [
                4,
                -125
            ],
            [
                -103,
                -84
            ],
            [
                -6,
                -301
            ],
            [
                -47,
                -91
            ],
            [
                -21,
                -240
            ],
            [
                -46,
                -6
            ],
            [
                -53,
                -293
            ],
            [
                -58,
                -9
            ],
            [
                -19,
                -321
            ],
            [
                -62,
                -480
            ],
            [
                -171,
                -254
            ],
            [
                20,
                -82
            ],
            [
                -54,
                -202
            ],
            [
                -149,
                -138
            ],
            [
                -18,
                -110
            ],
            [
                -234,
                -254
            ],
            [
                -86,
                -352
            ],
            [
                -176,
                -86
            ],
            [
                -38,
                -147
            ],
            [
                -167,
                -101
            ],
            [
                37,
                -121
            ],
            [
                -41,
                -237
            ],
            [
                -53,
                218
            ],
            [
                -38,
                -95
            ],
            [
                3,
                -229
            ],
            [
                -97,
                -42
            ],
            [
                -82,
                -362
            ],
            [
                -113,
                -103
            ],
            [
                -113,
                51
            ],
            [
                -23,
                -127
            ],
            [
                -59,
                80
            ],
            [
                -255,
                19
            ],
            [
                -133,
                -116
            ],
            [
                -144,
                -63
            ],
            [
                -151,
                32
            ],
            [
                -84,
                -89
            ],
            [
                -149,
                80
            ],
            [
                -126,
                -41
            ],
            [
                -121,
                -219
            ],
            [
                -88,
                -1
            ],
            [
                -138,
                -146
            ],
            [
                -78,
                23
            ],
            [
                -103,
                381
            ],
            [
                -198,
                -89
            ],
            [
                -100,
                113
            ],
            [
                -49,
                -44
            ],
            [
                -243,
                120
            ],
            [
                -18,
                175
            ],
            [
                -90,
                123
            ],
            [
                -12,
                161
            ],
            [
                -56,
                10
            ],
            [
                -13,
                175
            ],
            [
                -77,
                91
            ],
            [
                -93,
                619
            ],
            [
                -71,
                9
            ],
            [
                -68,
                349
            ],
            [
                65,
                78
            ],
            [
                -98,
                183
            ],
            [
                -160,
                49
            ],
            [
                -40,
                175
            ],
            [
                -178,
                238
            ],
            [
                -41,
                272
            ],
            [
                -219,
                -52
            ],
            [
                -105,
                22
            ],
            [
                -91,
                -164
            ],
            [
                -185,
                -103
            ],
            [
                -76,
                -114
            ],
            [
                -58,
                -199
            ],
            [
                -101,
                -151
            ],
            [
                -169,
                -39
            ],
            [
                -148,
                -144
            ],
            [
                -113,
                -269
            ],
            [
                -92,
                -93
            ],
            [
                -263,
                -105
            ],
            [
                -310,
                -380
            ],
            [
                -209,
                -532
            ],
            [
                -142,
                -44
            ],
            [
                -109,
                -218
            ],
            [
                -122,
                -160
            ],
            [
                -128,
                -276
            ],
            [
                -31,
                -368
            ],
            [
                -76,
                -198
            ],
            [
                -113,
                -423
            ],
            [
                10,
                -193
            ],
            [
                -37,
                -296
            ],
            [
                50,
                -126
            ],
            [
                14,
                -359
            ],
            [
                -117,
                -486
            ],
            [
                -170,
                -370
            ],
            [
                20,
                -106
            ],
            [
                -57,
                -593
            ],
            [
                -43,
                -139
            ],
            [
                -89,
                -35
            ],
            [
                -50,
                -300
            ],
            [
                -106,
                -18
            ],
            [
                -80,
                -233
            ],
            [
                -78,
                -44
            ],
            [
                -115,
                -212
            ],
            [
                -82,
                0
            ],
            [
                -246,
                -262
            ],
            [
                2,
                -129
            ],
            [
                -277,
                -438
            ],
            [
                -67,
                -368
            ],
            [
                -78,
                -142
            ],
            [
                -225,
                -235
            ],
            [
                -154,
                -497
            ],
            [
                -113,
                -115
            ],
            [
                -29,
                -204
            ],
            [
                -90,
                -123
            ],
            [
                -141,
                -50
            ],
            [
                -221,
                -300
            ],
            [
                -58,
                -301
            ],
            [
                -60,
                -92
            ],
            [
                -29,
                -230
            ],
            [
                -118,
                -454
            ],
            [
                -125,
                -150
            ],
            [
                -75,
                49
            ],
            [
                -65,
                -146
            ]
        ],
        [
            [
                34864,
                73972
            ],
            [
                -133,
                -198
            ],
            [
                -59,
                -270
            ],
            [
                46,
                -66
            ],
            [
                31,
                -328
            ],
            [
                2231,
                404
            ],
            [
                959,
                159
            ],
            [
                1106,
                174
            ],
            [
                1140,
                164
            ],
            [
                1239,
                164
            ],
            [
                174,
                -3992
            ],
            [
                200,
                -3715
            ],
            [
                346,
                -7858
            ],
            [
                72,
                -1713
            ],
            [
                70,
                9
            ]
        ],
        [
            [
                41662,
                31680
            ],
            [
                -381,
                7668
            ]
        ],
        [
            [
                32975,
                37767
            ],
            [
                -804,
                -183
            ],
            [
                -1599,
                -394
            ],
            [
                -902,
                -254
            ],
            [
                357,
                -3817
            ]
        ],
        [
            [
                30027,
                33119
            ],
            [
                178,
                -1913
            ],
            [
                83,
                -825
            ],
            [
                611,
                -6643
            ]
        ],
        [
            [
                30899,
                23738
            ],
            [
                43,
                -573
            ],
            [
                133,
                -1424
            ],
            [
                422,
                108
            ],
            [
                121,
                74
            ],
            [
                790,
                192
            ],
            [
                142,
                7
            ],
            [
                561,
                150
            ],
            [
                1012,
                230
            ],
            [
                30,
                31
            ],
            [
                911,
                211
            ],
            [
                2140,
                455
            ],
            [
                76,
                29
            ],
            [
                1288,
                260
            ],
            [
                526,
                96
            ],
            [
                25,
                -24
            ],
            [
                1804,
                311
            ],
            [
                1111,
                176
            ]
        ],
        [
            [
                94213,
                27804
            ],
            [
                219,
                1303
            ],
            [
                118,
                899
            ],
            [
                -64,
                48
            ],
            [
                54,
                245
            ],
            [
                -36,
                112
            ]
        ],
        [
            [
                94504,
                30411
            ],
            [
                -147,
                -4
            ],
            [
                -111,
                132
            ],
            [
                -103,
                34
            ],
            [
                -69,
                111
            ],
            [
                -83,
                -56
            ],
            [
                -39,
                142
            ],
            [
                -264,
                232
            ],
            [
                -115,
                -18
            ],
            [
                -139,
                172
            ],
            [
                -48,
                -49
            ],
            [
                -163,
                75
            ],
            [
                -24,
                98
            ],
            [
                -109,
                -41
            ],
            [
                -233,
                173
            ],
            [
                -30,
                -177
            ],
            [
                -124,
                417
            ],
            [
                -61,
                2
            ],
            [
                -95,
                292
            ],
            [
                -88,
                -43
            ],
            [
                -111,
                242
            ],
            [
                -45,
                -23
            ],
            [
                -126,
                148
            ],
            [
                0,
                181
            ],
            [
                -167,
                109
            ],
            [
                -122,
                238
            ],
            [
                -40,
                -40
            ],
            [
                -71,
                148
            ]
        ],
        [
            [
                91777,
                32906
            ],
            [
                -10,
                -101
            ],
            [
                -165,
                -285
            ],
            [
                338,
                -583
            ],
            [
                -154,
                -265
            ],
            [
                -122,
                -1234
            ],
            [
                -173,
                -1632
            ]
        ],
        [
            [
                55131,
                41927
            ],
            [
                1908,
                27
            ],
            [
                910,
                -34
            ],
            [
                913,
                -65
            ],
            [
                484,
                -24
            ],
            [
                846,
                -76
            ],
            [
                1110,
                -122
            ],
            [
                616,
                -91
            ],
            [
                86,
                228
            ],
            [
                96,
                29
            ],
            [
                18,
                148
            ],
            [
                94,
                162
            ],
            [
                59,
                2
            ],
            [
                12,
                186
            ],
            [
                71,
                98
            ],
            [
                110,
                12
            ]
        ],
        [
            [
                62464,
                42407
            ],
            [
                -68,
                144
            ],
            [
                -64,
                415
            ],
            [
                5,
                418
            ],
            [
                36,
                351
            ],
            [
                140,
                408
            ],
            [
                -43,
                196
            ],
            [
                35,
                152
            ],
            [
                118,
                164
            ],
            [
                -1,
                246
            ],
            [
                227,
                364
            ],
            [
                97,
                88
            ],
            [
                71,
                223
            ],
            [
                82,
                20
            ],
            [
                117,
                338
            ],
            [
                351,
                385
            ],
            [
                205,
                326
            ],
            [
                96,
                620
            ],
            [
                -49,
                138
            ],
            [
                62,
                207
            ],
            [
                44,
                281
            ],
            [
                142,
                203
            ],
            [
                67,
                -30
            ],
            [
                148,
                -373
            ],
            [
                249,
                143
            ],
            [
                102,
                8
            ],
            [
                245,
                246
            ],
            [
                -10,
                199
            ],
            [
                -141,
                308
            ],
            [
                69,
                300
            ],
            [
                -18,
                171
            ],
            [
                -109,
                284
            ],
            [
                -47,
                398
            ],
            [
                -78,
                169
            ],
            [
                -39,
                403
            ],
            [
                44,
                259
            ],
            [
                145,
                202
            ],
            [
                61,
                168
            ],
            [
                130,
                153
            ],
            [
                73,
                20
            ],
            [
                80,
                172
            ],
            [
                50,
                -5
            ],
            [
                116,
                190
            ],
            [
                126,
                -1
            ],
            [
                -80,
                166
            ],
            [
                43,
                135
            ],
            [
                91,
                42
            ],
            [
                94,
                -149
            ],
            [
                117,
                183
            ],
            [
                74,
                23
            ],
            [
                148,
                217
            ],
            [
                -9,
                105
            ],
            [
                90,
                28
            ],
            [
                65,
                133
            ],
            [
                129,
                93
            ],
            [
                1,
                189
            ],
            [
                75,
                150
            ],
            [
                -76,
                64
            ],
            [
                15,
                175
            ],
            [
                150,
                363
            ],
            [
                40,
                187
            ],
            [
                -19,
                169
            ],
            [
                -92,
                54
            ],
            [
                -45,
                175
            ],
            [
                108,
                138
            ],
            [
                6,
                197
            ],
            [
                170,
                440
            ],
            [
                2,
                158
            ],
            [
                184,
                175
            ],
            [
                27,
                -137
            ],
            [
                -92,
                -169
            ],
            [
                85,
                12
            ],
            [
                117,
                188
            ],
            [
                17,
                121
            ],
            [
                104,
                -21
            ]
        ],
        [
            [
                66869,
                55082
            ],
            [
                61,
                60
            ],
            [
                -48,
                460
            ],
            [
                -64,
                162
            ],
            [
                115,
                121
            ],
            [
                -88,
                61
            ],
            [
                -51,
                174
            ],
            [
                80,
                183
            ],
            [
                -63,
                152
            ],
            [
                -43,
                236
            ],
            [
                -54,
                24
            ],
            [
                -132,
                -244
            ],
            [
                -84,
                73
            ],
            [
                -56,
                458
            ]
        ],
        [
            [
                66442,
                57002
            ],
            [
                -57,
                153
            ],
            [
                -63,
                -132
            ]
        ],
        [
            [
                66322,
                57023
            ],
            [
                29,
                -154
            ],
            [
                -32,
                -126
            ],
            [
                -118,
                -25
            ],
            [
                -41,
                110
            ],
            [
                66,
                204
            ]
        ],
        [
            [
                66226,
                57032
            ],
            [
                39,
                83
            ],
            [
                -40,
                161
            ],
            [
                71,
                210
            ],
            [
                -43,
                163
            ],
            [
                -130,
                4
            ],
            [
                3,
                121
            ],
            [
                142,
                133
            ],
            [
                -88,
                130
            ],
            [
                -194,
                -29
            ],
            [
                -16,
                64
            ],
            [
                164,
                200
            ],
            [
                51,
                198
            ],
            [
                -147,
                190
            ],
            [
                -35,
                319
            ],
            [
                -47,
                7
            ]
        ],
        [
            [
                65956,
                58986
            ],
            [
                -1152,
                143
            ],
            [
                92,
                -374
            ],
            [
                142,
                -206
            ],
            [
                21,
                -177
            ],
            [
                162,
                -190
            ],
            [
                70,
                -173
            ],
            [
                24,
                -330
            ],
            [
                -36,
                -166
            ],
            [
                -116,
                -79
            ],
            [
                -26,
                -281
            ],
            [
                -1731,
                168
            ],
            [
                -2103,
                161
            ],
            [
                -1452,
                86
            ],
            [
                -1388,
                59
            ],
            [
                -1267,
                37
            ]
        ],
        [
            [
                55910,
                44178
            ],
            [
                -65,
                -109
            ],
            [
                -103,
                -17
            ],
            [
                -25,
                -100
            ],
            [
                38,
                -260
            ],
            [
                -137,
                -227
            ],
            [
                16,
                -163
            ],
            [
                -147,
                -164
            ],
            [
                5,
                -79
            ],
            [
                -102,
                -88
            ],
            [
                -136,
                -598
            ],
            [
                -12,
                -138
            ],
            [
                65,
                -47
            ],
            [
                -18,
                -175
            ],
            [
                -42,
                132
            ],
            [
                -111,
                1
            ],
            [
                -5,
                -219
            ]
        ],
        [
            [
                77907,
                47475
            ],
            [
                115,
                37
            ],
            [
                203,
                -183
            ],
            [
                136,
                -72
            ],
            [
                14,
                -509
            ],
            [
                24,
                -64
            ],
            [
                146,
                -41
            ],
            [
                21,
                -100
            ],
            [
                -47,
                -325
            ],
            [
                -88,
                -330
            ],
            [
                109,
                -202
            ],
            [
                -16,
                -220
            ],
            [
                66,
                -321
            ],
            [
                122,
                -240
            ],
            [
                69,
                128
            ],
            [
                71,
                0
            ],
            [
                72,
                177
            ],
            [
                -33,
                150
            ],
            [
                73,
                87
            ],
            [
                104,
                -307
            ],
            [
                95,
                61
            ],
            [
                -46,
                -147
            ],
            [
                16,
                -167
            ],
            [
                -105,
                -272
            ],
            [
                106,
                -85
            ],
            [
                -46,
                -312
            ],
            [
                94,
                -207
            ],
            [
                19,
                -193
            ],
            [
                173,
                -12
            ],
            [
                -3,
                -277
            ],
            [
                163,
                -323
            ],
            [
                109,
                200
            ],
            [
                81,
                2
            ],
            [
                116,
                -187
            ],
            [
                79,
                -22
            ],
            [
                48,
                -188
            ],
            [
                76,
                -71
            ],
            [
                89,
                -306
            ],
            [
                196,
                -440
            ],
            [
                93,
                -73
            ],
            [
                -5,
                -231
            ],
            [
                46,
                -141
            ],
            [
                -69,
                -113
            ],
            [
                50,
                -191
            ],
            [
                -17,
                -164
            ],
            [
                49,
                -100
            ],
            [
                -41,
                -143
            ],
            [
                85,
                -65
            ],
            [
                6,
                -224
            ],
            [
                -35,
                -400
            ],
            [
                39,
                -104
            ],
            [
                -11,
                -213
            ],
            [
                55,
                -367
            ],
            [
                44,
                -78
            ],
            [
                17,
                -223
            ],
            [
                -51,
                -318
            ],
            [
                4,
                -270
            ],
            [
                -78,
                -230
            ],
            [
                -79,
                -126
            ],
            [
                38,
                -176
            ],
            [
                184,
                -140
            ]
        ],
        [
            [
                82737,
                41088
            ],
            [
                184,
                1962
            ],
            [
                75,
                -66
            ],
            [
                70,
                -211
            ],
            [
                107,
                -184
            ],
            [
                43,
                6
            ],
            [
                42,
                -237
            ],
            [
                162,
                -253
            ],
            [
                50,
                -262
            ],
            [
                111,
                -20
            ],
            [
                142,
                56
            ],
            [
                199,
                -699
            ],
            [
                -9,
                -124
            ],
            [
                113,
                49
            ],
            [
                -69,
                78
            ],
            [
                232,
                188
            ],
            [
                158,
                10
            ],
            [
                172,
                -60
            ],
            [
                45,
                -165
            ],
            [
                -41,
                -112
            ],
            [
                82,
                -12
            ],
            [
                51,
                -225
            ],
            [
                154,
                34
            ],
            [
                116,
                -339
            ],
            [
                121,
                15
            ],
            [
                197,
                247
            ],
            [
                104,
                -88
            ],
            [
                196,
                -3
            ],
            [
                10,
                114
            ],
            [
                -72,
                54
            ],
            [
                45,
                175
            ],
            [
                165,
                148
            ],
            [
                60,
                138
            ],
            [
                34,
                340
            ],
            [
                66,
                28
            ]
        ],
        [
            [
                85852,
                41670
            ],
            [
                -38,
                138
            ],
            [
                -64,
                638
            ],
            [
                -1014,
                -979
            ],
            [
                58,
                423
            ],
            [
                -93,
                406
            ],
            [
                39,
                40
            ],
            [
                -46,
                196
            ],
            [
                71,
                97
            ],
            [
                -228,
                605
            ],
            [
                42,
                41
            ],
            [
                -64,
                230
            ],
            [
                -40,
                -58
            ],
            [
                -130,
                347
            ],
            [
                -21,
                -98
            ],
            [
                -93,
                211
            ],
            [
                -88,
                506
            ],
            [
                -247,
                -265
            ],
            [
                -66,
                248
            ],
            [
                -42,
                365
            ],
            [
                17,
                163
            ],
            [
                -50,
                14
            ],
            [
                -89,
                558
            ],
            [
                5,
                122
            ],
            [
                -142,
                361
            ],
            [
                -298,
                -88
            ],
            [
                -142,
                -328
            ],
            [
                -205,
                -94
            ],
            [
                -41,
                472
            ],
            [
                34,
                157
            ],
            [
                -63,
                322
            ],
            [
                -95,
                220
            ],
            [
                49,
                132
            ],
            [
                -86,
                133
            ],
            [
                -127,
                462
            ],
            [
                41,
                84
            ],
            [
                -88,
                473
            ],
            [
                -105,
                228
            ],
            [
                -198,
                576
            ],
            [
                -47,
                224
            ],
            [
                19,
                97
            ],
            [
                -62,
                166
            ],
            [
                66,
                160
            ],
            [
                87,
                47
            ],
            [
                -162,
                295
            ],
            [
                7,
                108
            ],
            [
                84,
                -14
            ],
            [
                -20,
                105
            ],
            [
                -274,
                411
            ],
            [
                -83,
                -206
            ],
            [
                -68,
                51
            ],
            [
                -237,
                375
            ],
            [
                -104,
                116
            ],
            [
                -176,
                -176
            ],
            [
                -25,
                186
            ],
            [
                72,
                125
            ],
            [
                -77,
                146
            ],
            [
                -356,
                239
            ],
            [
                -181,
                219
            ],
            [
                -274,
                -328
            ],
            [
                -72,
                271
            ],
            [
                -55,
                24
            ],
            [
                -173,
                295
            ],
            [
                -203,
                74
            ],
            [
                -222,
                -267
            ],
            [
                -113,
                16
            ],
            [
                -176,
                -318
            ],
            [
                -16,
                -213
            ],
            [
                -120,
                -127
            ],
            [
                110,
                -174
            ],
            [
                -81,
                -71
            ]
        ],
        [
            [
                79273,
                50584
            ],
            [
                -264,
                -18
            ],
            [
                -38,
                -123
            ],
            [
                -145,
                -87
            ],
            [
                -64,
                -126
            ],
            [
                -98,
                -11
            ],
            [
                -117,
                -422
            ],
            [
                -159,
                -200
            ],
            [
                -8,
                -133
            ],
            [
                -102,
                -46
            ],
            [
                -58,
                -114
            ],
            [
                47,
                -213
            ],
            [
                -95,
                -40
            ],
            [
                -81,
                -252
            ],
            [
                -133,
                -162
            ],
            [
                -58,
                -161
            ],
            [
                56,
                -37
            ],
            [
                -23,
                -246
            ],
            [
                56,
                -122
            ],
            [
                -11,
                -200
            ],
            [
                -54,
                -100
            ],
            [
                -17,
                -296
            ]
        ],
        [
            [
                62464,
                42407
            ],
            [
                68,
                -49
            ],
            [
                12,
                -427
            ],
            [
                -76,
                -159
            ],
            [
                89,
                -266
            ],
            [
                167,
                -125
            ],
            [
                105,
                -7
            ],
            [
                102,
                -135
            ],
            [
                33,
                -375
            ],
            [
                -7,
                -172
            ],
            [
                153,
                -386
            ],
            [
                58,
                -70
            ],
            [
                21,
                -440
            ],
            [
                -14,
                -223
            ],
            [
                -79,
                -221
            ],
            [
                -88,
                -32
            ],
            [
                -129,
                -279
            ],
            [
                57,
                -253
            ],
            [
                33,
                -409
            ],
            [
                118,
                -100
            ],
            [
                76,
                42
            ],
            [
                117,
                -132
            ],
            [
                199,
                -8
            ],
            [
                134,
                -60
            ],
            [
                101,
                -205
            ],
            [
                214,
                -62
            ],
            [
                75,
                -169
            ],
            [
                112,
                -98
            ],
            [
                2,
                -354
            ],
            [
                25,
                -214
            ],
            [
                56,
                -133
            ],
            [
                145,
                -154
            ],
            [
                42,
                -403
            ],
            [
                -22,
                -209
            ],
            [
                31,
                -165
            ],
            [
                -46,
                -145
            ],
            [
                -7,
                -287
            ],
            [
                -93,
                -144
            ],
            [
                -297,
                -235
            ],
            [
                -72,
                -196
            ],
            [
                19,
                -173
            ],
            [
                -97,
                -205
            ],
            [
                -132,
                -121
            ],
            [
                -40,
                -106
            ],
            [
                -128,
                -104
            ],
            [
                1,
                -141
            ]
        ],
        [
            [
                63502,
                34098
            ],
            [
                930,
                -94
            ],
            [
                1346,
                -114
            ],
            [
                759,
                -72
            ],
            [
                1095,
                -166
            ],
            [
                515,
                -58
            ]
        ],
        [
            [
                68147,
                33594
            ],
            [
                13,
                412
            ],
            [
                -32,
                326
            ],
            [
                74,
                350
            ],
            [
                112,
                292
            ],
            [
                129,
                251
            ],
            [
                9,
                111
            ],
            [
                122,
                511
            ],
            [
                31,
                248
            ],
            [
                150,
                435
            ]
        ],
        [
            [
                68662,
                51678
            ],
            [
                -51,
                242
            ],
            [
                -97,
                126
            ],
            [
                -56,
                194
            ],
            [
                62,
                330
            ],
            [
                134,
                208
            ],
            [
                -29,
                170
            ],
            [
                -342,
                127
            ],
            [
                -137,
                216
            ],
            [
                -81,
                -80
            ],
            [
                -111,
                163
            ],
            [
                -51,
                405
            ],
            [
                134,
                294
            ],
            [
                50,
                201
            ],
            [
                -47,
                301
            ],
            [
                -151,
                35
            ],
            [
                -159,
                -176
            ],
            [
                -183,
                -65
            ],
            [
                -137,
                -155
            ],
            [
                -228,
                -122
            ],
            [
                -121,
                28
            ],
            [
                -141,
                245
            ],
            [
                -35,
                185
            ],
            [
                -72,
                125
            ],
            [
                -32,
                267
            ],
            [
                88,
                140
            ]
        ],
        [
            [
                34864,
                73972
            ],
            [
                -1680,
                -335
            ],
            [
                -1475,
                -315
            ],
            [
                -129,
                1713
            ],
            [
                -1587,
                -359
            ]
        ],
        [
            [
                65956,
                58986
            ],
            [
                30,
                122
            ],
            [
                142,
                231
            ],
            [
                -55,
                78
            ],
            [
                -71,
                -71
            ],
            [
                -88,
                67
            ],
            [
                7,
                127
            ],
            [
                110,
                143
            ],
            [
                -133,
                66
            ],
            [
                -52,
                180
            ],
            [
                -110,
                84
            ],
            [
                -54,
                -63
            ],
            [
                -77,
                88
            ],
            [
                -3,
                186
            ],
            [
                65,
                129
            ],
            [
                112,
                -66
            ],
            [
                9,
                133
            ],
            [
                -175,
                209
            ],
            [
                91,
                137
            ],
            [
                -11,
                131
            ],
            [
                -133,
                -164
            ],
            [
                -88,
                56
            ],
            [
                -10,
                170
            ],
            [
                59,
                146
            ],
            [
                -60,
                242
            ],
            [
                -28,
                -238
            ],
            [
                -92,
                0
            ],
            [
                -85,
                190
            ],
            [
                -13,
                143
            ],
            [
                80,
                25
            ],
            [
                29,
                -139
            ],
            [
                79,
                98
            ],
            [
                -50,
                312
            ],
            [
                -98,
                44
            ],
            [
                27,
                152
            ],
            [
                96,
                8
            ],
            [
                51,
                149
            ],
            [
                -75,
                99
            ],
            [
                102,
                171
            ],
            [
                -62,
                100
            ],
            [
                -72,
                -60
            ],
            [
                -60,
                68
            ],
            [
                -52,
                359
            ],
            [
                -152,
                -43
            ],
            [
                -25,
                181
            ]
        ],
        [
            [
                65061,
                62966
            ],
            [
                114,
                160
            ],
            [
                5,
                169
            ],
            [
                -157,
                197
            ],
            [
                -148,
                115
            ],
            [
                -33,
                -190
            ],
            [
                -75,
                12
            ],
            [
                49,
                227
            ],
            [
                17,
                268
            ],
            [
                -28,
                105
            ],
            [
                -82,
                -2
            ],
            [
                -9,
                -278
            ],
            [
                -87,
                273
            ],
            [
                43,
                117
            ],
            [
                129,
                -8
            ],
            [
                20,
                100
            ],
            [
                -71,
                152
            ],
            [
                -72,
                27
            ],
            [
                -16,
                -218
            ],
            [
                -63,
                74
            ],
            [
                9,
                212
            ],
            [
                86,
                293
            ],
            [
                -74,
                211
            ],
            [
                51,
                190
            ],
            [
                -24,
                94
            ],
            [
                -138,
                148
            ],
            [
                8,
                186
            ],
            [
                -65,
                25
            ],
            [
                12,
                -180
            ],
            [
                -143,
                29
            ],
            [
                46,
                221
            ],
            [
                -41,
                104
            ],
            [
                -122,
                61
            ],
            [
                -20,
                238
            ],
            [
                -111,
                -133
            ],
            [
                -46,
                115
            ],
            [
                86,
                119
            ],
            [
                131,
                -16
            ],
            [
                -31,
                177
            ],
            [
                -138,
                -94
            ],
            [
                -78,
                111
            ],
            [
                13,
                104
            ],
            [
                147,
                97
            ],
            [
                -27,
                206
            ],
            [
                -181,
                58
            ],
            [
                53,
                146
            ],
            [
                -69,
                59
            ],
            [
                -39,
                -139
            ],
            [
                -123,
                119
            ],
            [
                19,
                80
            ],
            [
                128,
                99
            ],
            [
                -103,
                236
            ],
            [
                58,
                202
            ],
            [
                103,
                100
            ],
            [
                -282,
                66
            ],
            [
                1,
                182
            ],
            [
                52,
                78
            ],
            [
                90,
                -51
            ],
            [
                67,
                161
            ],
            [
                -108,
                67
            ],
            [
                -129,
                -177
            ],
            [
                -122,
                124
            ],
            [
                172,
                186
            ],
            [
                13,
                119
            ],
            [
                -171,
                129
            ],
            [
                91,
                247
            ],
            [
                -89,
                238
            ],
            [
                120,
                -63
            ],
            [
                5,
                -174
            ],
            [
                74,
                89
            ],
            [
                -7,
                165
            ],
            [
                -130,
                63
            ],
            [
                72,
                136
            ],
            [
                96,
                -60
            ],
            [
                43,
                -229
            ],
            [
                55,
                83
            ],
            [
                -143,
                311
            ],
            [
                4,
                200
            ],
            [
                84,
                229
            ],
            [
                55,
                -194
            ],
            [
                45,
                63
            ],
            [
                -83,
                196
            ],
            [
                17,
                290
            ],
            [
                -30,
                55
            ],
            [
                -148,
                -26
            ],
            [
                -30,
                126
            ],
            [
                148,
                162
            ],
            [
                -70,
                238
            ]
        ],
        [
            [
                63736,
                70773
            ],
            [
                -1462,
                104
            ],
            [
                -504,
                29
            ],
            [
                -2150,
                89
            ],
            [
                -1239,
                47
            ]
        ],
        [
            [
                13284,
                60870
            ],
            [
                104,
                59
            ],
            [
                154,
                243
            ],
            [
                128,
                138
            ],
            [
                67,
                310
            ],
            [
                -46,
                127
            ],
            [
                -78,
                -116
            ],
            [
                -161,
                -89
            ],
            [
                -26,
                -132
            ],
            [
                34,
                -236
            ],
            [
                -119,
                -103
            ],
            [
                -57,
                -201
            ]
        ],
        [
            [
                13043,
                62541
            ],
            [
                57,
                11
            ],
            [
                104,
                480
            ],
            [
                186,
                479
            ],
            [
                -142,
                26
            ],
            [
                -102,
                -244
            ],
            [
                -103,
                -752
            ]
        ],
        [
            [
                12100,
                58185
            ],
            [
                117,
                62
            ],
            [
                -12,
                96
            ],
            [
                -110,
                -35
            ],
            [
                5,
                -123
            ]
        ],
        [
            [
                11421,
                60871
            ],
            [
                95,
                16
            ],
            [
                146,
                289
            ],
            [
                -91,
                11
            ],
            [
                -115,
                -121
            ],
            [
                -35,
                -195
            ]
        ],
        [
            [
                11257,
                57627
            ],
            [
                165,
                169
            ],
            [
                115,
                35
            ],
            [
                102,
                191
            ],
            [
                118,
                65
            ],
            [
                65,
                -104
            ],
            [
                121,
                113
            ],
            [
                -93,
                114
            ],
            [
                -188,
                -43
            ],
            [
                -118,
                53
            ],
            [
                -260,
                -196
            ],
            [
                24,
                -195
            ],
            [
                -51,
                -202
            ]
        ],
        [
            [
                10630,
                57649
            ],
            [
                146,
                40
            ],
            [
                237,
                -5
            ],
            [
                -20,
                155
            ],
            [
                105,
                92
            ],
            [
                -14,
                156
            ],
            [
                -290,
                57
            ],
            [
                -71,
                -124
            ],
            [
                -93,
                -371
            ]
        ],
        [
            [
                10292,
                57356
            ],
            [
                175,
                -64
            ],
            [
                78,
                233
            ],
            [
                -104,
                -13
            ],
            [
                -149,
                -156
            ]
        ],
        [
            [
                8891,
                24760
            ],
            [
                762,
                401
            ],
            [
                603,
                299
            ],
            [
                325,
                123
            ],
            [
                156,
                103
            ],
            [
                651,
                316
            ],
            [
                410,
                182
            ],
            [
                596,
                310
            ],
            [
                1528,
                762
            ],
            [
                1194,
                543
            ],
            [
                459,
                198
            ]
        ],
        [
            [
                15575,
                27997
            ],
            [
                -631,
                4183
            ],
            [
                -205,
                1395
            ],
            [
                -309,
                2029
            ],
            [
                -425,
                2726
            ],
            [
                -120,
                846
            ],
            [
                1130,
                2903
            ],
            [
                659,
                1703
            ],
            [
                1490,
                3831
            ],
            [
                1527,
                3937
            ],
            [
                1213,
                3121
            ],
            [
                1226,
                3147
            ]
        ],
        [
            [
                19970,
                66387
            ],
            [
                -4489,
                -908
            ],
            [
                20,
                -358
            ],
            [
                -74,
                -273
            ],
            [
                -100,
                39
            ],
            [
                40,
                -513
            ],
            [
                -27,
                -85
            ],
            [
                79,
                -175
            ],
            [
                16,
                -538
            ],
            [
                -31,
                -444
            ],
            [
                -215,
                -922
            ],
            [
                -136,
                -262
            ],
            [
                -62,
                -238
            ],
            [
                -116,
                -124
            ],
            [
                -84,
                -354
            ],
            [
                -140,
                -256
            ],
            [
                -83,
                -86
            ],
            [
                -107,
                -236
            ],
            [
                -120,
                -347
            ],
            [
                -148,
                -192
            ],
            [
                -25,
                148
            ],
            [
                -145,
                18
            ],
            [
                -254,
                -256
            ],
            [
                -14,
                -135
            ],
            [
                77,
                -86
            ],
            [
                23,
                -135
            ],
            [
                -38,
                -409
            ],
            [
                -92,
                -383
            ],
            [
                -81,
                -90
            ],
            [
                -319,
                -95
            ],
            [
                -124,
                71
            ],
            [
                -71,
                -161
            ],
            [
                -144,
                -97
            ],
            [
                -238,
                -318
            ],
            [
                -73,
                -38
            ],
            [
                -129,
                -238
            ],
            [
                -38,
                -440
            ],
            [
                -141,
                -325
            ],
            [
                -37,
                -10
            ],
            [
                -94,
                -263
            ],
            [
                -153,
                -222
            ],
            [
                -198,
                -97
            ],
            [
                -77,
                49
            ],
            [
                -140,
                -150
            ],
            [
                -145,
                -28
            ],
            [
                -209,
                -297
            ],
            [
                -228,
                -153
            ],
            [
                -288,
                -103
            ],
            [
                -310,
                -63
            ],
            [
                -28,
                -312
            ],
            [
                -204,
                -323
            ],
            [
                142,
                -379
            ],
            [
                -26,
                -266
            ],
            [
                99,
                -302
            ],
            [
                -32,
                -247
            ],
            [
                -40,
                -30
            ],
            [
                163,
                -554
            ],
            [
                20,
                -302
            ],
            [
                -135,
                -217
            ],
            [
                -49,
                50
            ],
            [
                -148,
                -251
            ],
            [
                -47,
                -187
            ],
            [
                98,
                -272
            ],
            [
                41,
                -285
            ],
            [
                -41,
                -201
            ],
            [
                -160,
                -120
            ],
            [
                -119,
                -407
            ],
            [
                -62,
                -375
            ],
            [
                -183,
                -239
            ],
            [
                -28,
                -170
            ],
            [
                11,
                -274
            ],
            [
                -164,
                -487
            ],
            [
                -2,
                -460
            ],
            [
                -102,
                -133
            ],
            [
                -48,
                -394
            ],
            [
                -102,
                -372
            ],
            [
                -143,
                -224
            ],
            [
                -88,
                -377
            ],
            [
                26,
                -244
            ],
            [
                -5,
                -418
            ],
            [
                61,
                -269
            ],
            [
                -51,
                -116
            ],
            [
                111,
                -154
            ],
            [
                40,
                150
            ],
            [
                143,
                -153
            ],
            [
                152,
                -516
            ],
            [
                -49,
                -535
            ],
            [
                -88,
                -228
            ],
            [
                -87,
                54
            ],
            [
                -226,
                -115
            ],
            [
                -135,
                -298
            ],
            [
                -106,
                -463
            ],
            [
                -52,
                -29
            ],
            [
                -17,
                -231
            ],
            [
                -50,
                -116
            ],
            [
                10,
                -207
            ],
            [
                98,
                -396
            ],
            [
                -25,
                -321
            ],
            [
                14,
                -172
            ],
            [
                -84,
                -205
            ],
            [
                136,
                -596
            ],
            [
                29,
                -365
            ],
            [
                199,
                -25
            ],
            [
                6,
                309
            ],
            [
                -46,
                88
            ],
            [
                -32,
                265
            ],
            [
                16,
                189
            ],
            [
                152,
                153
            ],
            [
                117,
                332
            ],
            [
                50,
                9
            ],
            [
                53,
                240
            ],
            [
                77,
                27
            ],
            [
                -81,
                -242
            ],
            [
                -11,
                -329
            ],
            [
                22,
                -309
            ],
            [
                -108,
                -269
            ],
            [
                27,
                -114
            ],
            [
                -130,
                -184
            ],
            [
                89,
                -213
            ],
            [
                -2,
                -234
            ],
            [
                -107,
                -70
            ],
            [
                -36,
                -230
            ],
            [
                114,
                -5
            ],
            [
                16,
                -111
            ],
            [
                116,
                44
            ],
            [
                85,
                -94
            ],
            [
                -28,
                -256
            ],
            [
                -130,
                -217
            ],
            [
                -186,
                51
            ],
            [
                -66,
                324
            ],
            [
                61,
                169
            ],
            [
                -82,
                40
            ],
            [
                -44,
                123
            ],
            [
                79,
                230
            ],
            [
                -97,
                -98
            ],
            [
                3,
                247
            ],
            [
                -97,
                6
            ],
            [
                -34,
                -148
            ],
            [
                -127,
                -274
            ],
            [
                -84,
                2
            ],
            [
                -99,
                -280
            ],
            [
                -35,
                -200
            ],
            [
                -84,
                -157
            ],
            [
                -92,
                -72
            ],
            [
                -83,
                117
            ],
            [
                -55,
                -72
            ],
            [
                153,
                -363
            ],
            [
                52,
                -180
            ],
            [
                -27,
                -292
            ],
            [
                46,
                -116
            ],
            [
                -51,
                -197
            ],
            [
                -71,
                -2
            ],
            [
                29,
                -218
            ],
            [
                -44,
                -386
            ],
            [
                -162,
                -325
            ],
            [
                -102,
                -271
            ],
            [
                -117,
                -669
            ],
            [
                -225,
                -632
            ],
            [
                -82,
                -332
            ],
            [
                2,
                -147
            ],
            [
                123,
                -208
            ],
            [
                18,
                -136
            ],
            [
                -37,
                -911
            ],
            [
                22,
                -351
            ],
            [
                69,
                -278
            ],
            [
                148,
                -352
            ],
            [
                0,
                -209
            ],
            [
                43,
                -298
            ],
            [
                -35,
                -175
            ],
            [
                35,
                -421
            ],
            [
                -71,
                -162
            ],
            [
                -6,
                -191
            ],
            [
                -104,
                -471
            ],
            [
                -61,
                -98
            ],
            [
                -1,
                -299
            ],
            [
                -107,
                -164
            ],
            [
                -198,
                -630
            ],
            [
                61,
                -185
            ],
            [
                10,
                -310
            ],
            [
                -28,
                -197
            ],
            [
                97,
                -276
            ],
            [
                150,
                -313
            ],
            [
                330,
                -589
            ],
            [
                183,
                -390
            ],
            [
                107,
                -357
            ],
            [
                -50,
                -128
            ],
            [
                51,
                -334
            ],
            [
                140,
                -276
            ],
            [
                207,
                -738
            ],
            [
                41,
                -414
            ],
            [
                -5,
                -777
            ],
            [
                -44,
                -7
            ],
            [
                -72,
                -226
            ],
            [
                145,
                -348
            ],
            [
                67,
                -409
            ]
        ],
        [
            [
                89344,
                39315
            ],
            [
                -17,
                -88
            ]
        ],
        [
            [
                89382,
                38984
            ],
            [
                -112,
                180
            ],
            [
                -15,
                218
            ],
            [
                98,
                102
            ],
            [
                -10,
                332
            ],
            [
                237,
                450
            ],
            [
                101,
                78
            ],
            [
                129,
                382
            ],
            [
                -6,
                193
            ],
            [
                72,
                361
            ],
            [
                165,
                214
            ],
            [
                41,
                235
            ],
            [
                262,
                366
            ],
            [
                108,
                57
            ],
            [
                67,
                -85
            ],
            [
                108,
                497
            ],
            [
                131,
                779
            ]
        ],
        [
            [
                90758,
                43343
            ],
            [
                -583,
                219
            ],
            [
                -512,
                160
            ],
            [
                -668,
                -4059
            ],
            [
                -94,
                -643
            ]
        ],
        [
            [
                87032,
                42793
            ],
            [
                106,
                -278
            ],
            [
                268,
                311
            ],
            [
                -174,
                459
            ]
        ],
        [
            [
                87232,
                43285
            ],
            [
                -14,
                -228
            ],
            [
                -81,
                -162
            ],
            [
                -105,
                -102
            ]
        ],
        [
            [
                35766,
                96281
            ],
            [
                15,
                -144
            ],
            [
                179,
                -286
            ],
            [
                82,
                -15
            ],
            [
                69,
                -280
            ],
            [
                121,
                -168
            ],
            [
                14,
                -226
            ],
            [
                -82,
                -164
            ],
            [
                -69,
                -255
            ],
            [
                -15,
                -226
            ],
            [
                32,
                -191
            ],
            [
                79,
                -62
            ],
            [
                224,
                147
            ],
            [
                30,
                102
            ],
            [
                167,
                144
            ],
            [
                112,
                154
            ],
            [
                88,
                -20
            ],
            [
                192,
                102
            ],
            [
                418,
                337
            ],
            [
                295,
                407
            ],
            [
                100,
                216
            ],
            [
                -17,
                427
            ],
            [
                183,
                -8
            ],
            [
                55,
                184
            ],
            [
                -5,
                187
            ],
            [
                171,
                268
            ],
            [
                188,
                152
            ],
            [
                -17,
                187
            ],
            [
                -331,
                507
            ],
            [
                -322,
                284
            ],
            [
                -152,
                60
            ],
            [
                -192,
                -19
            ],
            [
                -135,
                221
            ],
            [
                -119,
                81
            ],
            [
                -76,
                138
            ],
            [
                -110,
                55
            ],
            [
                -110,
                214
            ],
            [
                6,
                107
            ],
            [
                -98,
                315
            ],
            [
                -148,
                208
            ],
            [
                -115,
                -197
            ],
            [
                -170,
                -169
            ],
            [
                -160,
                -85
            ],
            [
                -85,
                -322
            ],
            [
                70,
                -824
            ],
            [
                -76,
                -539
            ],
            [
                -64,
                -38
            ],
            [
                -54,
                -455
            ],
            [
                -183,
                -466
            ],
            [
                15,
                -45
            ]
        ],
        [
            [
                34406,
                91804
            ],
            [
                72,
                -328
            ],
            [
                154,
                -99
            ],
            [
                97,
                106
            ],
            [
                150,
                419
            ],
            [
                187,
                -96
            ],
            [
                128,
                -117
            ],
            [
                199,
                69
            ],
            [
                0,
                53
            ],
            [
                205,
                214
            ],
            [
                36,
                129
            ],
            [
                236,
                119
            ],
            [
                35,
                277
            ],
            [
                -139,
                261
            ],
            [
                -187,
                118
            ],
            [
                -106,
                -31
            ],
            [
                -230,
                175
            ],
            [
                -158,
                30
            ],
            [
                -137,
                -134
            ],
            [
                -46,
                -638
            ],
            [
                -88,
                -67
            ],
            [
                -67,
                80
            ],
            [
                -197,
                -162
            ],
            [
                -99,
                -188
            ],
            [
                -45,
                -190
            ]
        ],
        [
            [
                34402,
                93280
            ],
            [
                264,
                -283
            ],
            [
                71,
                101
            ],
            [
                -14,
                227
            ],
            [
                -114,
                -15
            ],
            [
                -166,
                67
            ],
            [
                -41,
                -97
            ]
        ],
        [
            [
                33645,
                91867
            ],
            [
                153,
                -106
            ],
            [
                194,
                64
            ],
            [
                126,
                196
            ],
            [
                58,
                207
            ],
            [
                -60,
                170
            ],
            [
                -149,
                95
            ],
            [
                -123,
                17
            ],
            [
                -91,
                -454
            ],
            [
                -108,
                -189
            ]
        ],
        [
            [
                33124,
                91117
            ],
            [
                114,
                -264
            ],
            [
                -14,
                -189
            ],
            [
                554,
                147
            ],
            [
                76,
                -113
            ],
            [
                35,
                137
            ],
            [
                164,
                43
            ],
            [
                203,
                -59
            ],
            [
                130,
                81
            ],
            [
                -63,
                180
            ],
            [
                -132,
                168
            ],
            [
                -157,
                68
            ],
            [
                -458,
                -206
            ],
            [
                -330,
                60
            ],
            [
                -122,
                -53
            ]
        ],
        [
            [
                31100,
                89295
            ],
            [
                319,
                -28
            ],
            [
                226,
                -428
            ],
            [
                104,
                -47
            ],
            [
                93,
                317
            ],
            [
                181,
                378
            ],
            [
                -9,
                267
            ],
            [
                131,
                181
            ],
            [
                29,
                -187
            ],
            [
                88,
                8
            ],
            [
                -34,
                208
            ],
            [
                62,
                194
            ],
            [
                121,
                208
            ],
            [
                -123,
                138
            ],
            [
                -116,
                -64
            ],
            [
                -118,
                69
            ],
            [
                -144,
                -175
            ],
            [
                -192,
                -37
            ],
            [
                -275,
                51
            ],
            [
                -57,
                -273
            ],
            [
                -81,
                -117
            ],
            [
                -27,
                -166
            ],
            [
                -85,
                -151
            ],
            [
                -2,
                -199
            ],
            [
                -91,
                -147
            ]
        ],
        [
            [
                27948,
                87541
            ],
            [
                10,
                -131
            ],
            [
                81,
                -123
            ],
            [
                32,
                -160
            ],
            [
                360,
                -322
            ],
            [
                100,
                90
            ],
            [
                49,
                -98
            ],
            [
                178,
                -9
            ],
            [
                110,
                69
            ],
            [
                116,
                269
            ],
            [
                -7,
                149
            ],
            [
                -77,
                204
            ],
            [
                4,
                343
            ],
            [
                -121,
                214
            ],
            [
                -121,
                129
            ],
            [
                -64,
                -52
            ],
            [
                -267,
                -43
            ],
            [
                -135,
                -234
            ],
            [
                -203,
                -129
            ],
            [
                -45,
                -166
            ]
        ],
        [
            [
                26988,
                88208
            ],
            [
                30,
                -141
            ],
            [
                198,
                -232
            ],
            [
                52,
                -175
            ],
            [
                85,
                -29
            ],
            [
                -17,
                406
            ],
            [
                -174,
                115
            ],
            [
                -94,
                321
            ],
            [
                -91,
                -137
            ],
            [
                11,
                -128
            ]
        ],
        [
            [
                62450,
                30375
            ],
            [
                -20,
                166
            ],
            [
                57,
                157
            ],
            [
                -17,
                193
            ],
            [
                180,
                186
            ],
            [
                87,
                216
            ],
            [
                -179,
                491
            ],
            [
                14,
                357
            ],
            [
                55,
                286
            ],
            [
                9,
                220
            ],
            [
                75,
                81
            ],
            [
                93,
                550
            ],
            [
                196,
                193
            ],
            [
                359,
                131
            ],
            [
                105,
                270
            ],
            [
                38,
                226
            ]
        ],
        [
            [
                55131,
                41927
            ],
            [
                24,
                -92
            ],
            [
                -64,
                -194
            ],
            [
                -90,
                -69
            ],
            [
                -78,
                -210
            ],
            [
                78,
                -151
            ],
            [
                -8,
                -365
            ],
            [
                52,
                -54
            ],
            [
                -41,
                -232
            ],
            [
                20,
                -125
            ],
            [
                -69,
                -142
            ],
            [
                11,
                -305
            ],
            [
                -35,
                -256
            ],
            [
                66,
                -99
            ],
            [
                -110,
                -15
            ],
            [
                -33,
                -388
            ],
            [
                66,
                26
            ],
            [
                20,
                -131
            ],
            [
                -115,
                -83
            ],
            [
                41,
                -469
            ],
            [
                -137,
                -64
            ],
            [
                20,
                -153
            ],
            [
                -58,
                -112
            ],
            [
                -43,
                124
            ],
            [
                -71,
                -147
            ],
            [
                25,
                -105
            ],
            [
                -58,
                -182
            ],
            [
                31,
                -69
            ],
            [
                -33,
                -211
            ],
            [
                80,
                -420
            ],
            [
                -57,
                -53
            ],
            [
                -96,
                -341
            ],
            [
                54,
                -254
            ],
            [
                -165,
                -88
            ],
            [
                7,
                -157
            ],
            [
                -76,
                -38
            ],
            [
                8,
                -251
            ],
            [
                -124,
                -194
            ],
            [
                -22,
                -211
            ],
            [
                54,
                -56
            ],
            [
                -74,
                -303
            ],
            [
                -80,
                -166
            ],
            [
                4,
                -188
            ],
            [
                58,
                -177
            ],
            [
                -25,
                -145
            ],
            [
                -81,
                -26
            ]
        ],
        [
            [
                73897,
                45707
            ],
            [
                119,
                -187
            ],
            [
                113,
                159
            ],
            [
                149,
                72
            ],
            [
                152,
                -108
            ],
            [
                59,
                -120
            ],
            [
                65,
                61
            ],
            [
                22,
                167
            ],
            [
                149,
                51
            ],
            [
                79,
                102
            ],
            [
                42,
                188
            ],
            [
                109,
                220
            ],
            [
                61,
                328
            ],
            [
                252,
                83
            ],
            [
                154,
                -98
            ],
            [
                214,
                71
            ],
            [
                39,
                118
            ],
            [
                108,
                87
            ],
            [
                30,
                140
            ],
            [
                187,
                75
            ],
            [
                74,
                -235
            ],
            [
                156,
                -108
            ],
            [
                99,
                85
            ],
            [
                179,
                25
            ],
            [
                155,
                195
            ],
            [
                72,
                -131
            ],
            [
                167,
                -25
            ],
            [
                37,
                -190
            ],
            [
                95,
                -116
            ],
            [
                28,
                -123
            ],
            [
                88,
                -22
            ],
            [
                137,
                -152
            ],
            [
                146,
                630
            ],
            [
                75,
                71
            ],
            [
                131,
                -9
            ],
            [
                223,
                282
            ],
            [
                45,
                182
            ]
        ],
        [
            [
                79273,
                50584
            ],
            [
                -584,
                1209
            ],
            [
                -157,
                122
            ],
            [
                -164,
                194
            ],
            [
                -273,
                395
            ],
            [
                23,
                287
            ],
            [
                -93,
                166
            ],
            [
                -140,
                153
            ],
            [
                32,
                179
            ],
            [
                -25,
                164
            ],
            [
                -150,
                158
            ],
            [
                -178,
                54
            ],
            [
                -82,
                303
            ],
            [
                4,
                149
            ],
            [
                -102,
                38
            ],
            [
                -189,
                153
            ],
            [
                -192,
                215
            ],
            [
                -190,
                52
            ],
            [
                -192,
                208
            ],
            [
                -42,
                95
            ]
        ],
        [
            [
                76579,
                54878
            ],
            [
                -21,
                75
            ],
            [
                -526,
                89
            ],
            [
                -982,
                182
            ],
            [
                -531,
                74
            ],
            [
                -324,
                10
            ],
            [
                -303,
                36
            ],
            [
                -515,
                140
            ],
            [
                -609,
                86
            ],
            [
                -356,
                33
            ],
            [
                -535,
                23
            ],
            [
                -310,
                39
            ],
            [
                -95,
                90
            ],
            [
                -50,
                -65
            ],
            [
                -926,
                192
            ],
            [
                -548,
                92
            ],
            [
                -756,
                144
            ],
            [
                0,
                -118
            ],
            [
                -393,
                1
            ],
            [
                93,
                519
            ],
            [
                -29,
                173
            ],
            [
                -1387,
                166
            ],
            [
                -827,
                87
            ],
            [
                -207,
                56
            ]
        ],
        [
            [
                66322,
                57023
            ],
            [
                -96,
                9
            ]
        ],
        [
            [
                89393,
                45821
            ],
            [
                -90,
                33
            ]
        ],
        [
            [
                89303,
                45854
            ],
            [
                -29,
                -300
            ],
            [
                100,
                4
            ],
            [
                19,
                263
            ]
        ],
        [
            [
                89139,
                45236
            ],
            [
                -20,
                -259
            ],
            [
                63,
                -66
            ],
            [
                132,
                451
            ],
            [
                -175,
                -126
            ]
        ],
        [
            [
                90758,
                43343
            ],
            [
                1,
                502
            ],
            [
                -23,
                60
            ],
            [
                -49,
                870
            ],
            [
                -48,
                291
            ]
        ],
        [
            [
                90639,
                45066
            ],
            [
                -635,
                369
            ],
            [
                -57,
                193
            ]
        ],
        [
            [
                89947,
                45628
            ],
            [
                -86,
                -70
            ],
            [
                -119,
                59
            ],
            [
                -105,
                254
            ],
            [
                -68,
                -2
            ],
            [
                -24,
                -186
            ],
            [
                16,
                -243
            ],
            [
                91,
                -130
            ],
            [
                -123,
                -18
            ],
            [
                62,
                -254
            ],
            [
                -127,
                17
            ],
            [
                -64,
                133
            ],
            [
                -30,
                -281
            ],
            [
                153,
                -148
            ],
            [
                -146,
                -154
            ],
            [
                46,
                -397
            ],
            [
                -77,
                108
            ],
            [
                -48,
                386
            ],
            [
                -93,
                -197
            ],
            [
                63,
                -102
            ],
            [
                -88,
                -166
            ],
            [
                -48,
                296
            ],
            [
                50,
                76
            ],
            [
                -10,
                156
            ],
            [
                -58,
                -21
            ],
            [
                -93,
                113
            ],
            [
                -56,
                -22
            ],
            [
                -146,
                -251
            ],
            [
                -261,
                -586
            ],
            [
                118,
                -87
            ],
            [
                -75,
                -232
            ],
            [
                -1,
                -159
            ],
            [
                64,
                -98
            ],
            [
                51,
                68
            ],
            [
                61,
                -111
            ],
            [
                22,
                113
            ],
            [
                134,
                -16
            ],
            [
                117,
                50
            ],
            [
                -127,
                -182
            ],
            [
                -110,
                -8
            ],
            [
                -106,
                -95
            ],
            [
                -124,
                -214
            ],
            [
                -16,
                97
            ],
            [
                -83,
                -35
            ],
            [
                12,
                194
            ],
            [
                -46,
                -11
            ],
            [
                -18,
                -335
            ],
            [
                70,
                -336
            ],
            [
                107,
                117
            ],
            [
                39,
                -83
            ],
            [
                -67,
                -365
            ],
            [
                -54,
                -36
            ],
            [
                -85,
                188
            ],
            [
                -74,
                13
            ],
            [
                28,
                154
            ],
            [
                -70,
                80
            ],
            [
                -16,
                -344
            ],
            [
                54,
                -416
            ],
            [
                67,
                201
            ],
            [
                131,
                -10
            ],
            [
                52,
                -123
            ],
            [
                -55,
                -164
            ],
            [
                43,
                -200
            ],
            [
                -94,
                63
            ],
            [
                26,
                289
            ],
            [
                -66,
                -51
            ],
            [
                -13,
                -241
            ],
            [
                -101,
                -179
            ],
            [
                45,
                -474
            ],
            [
                49,
                -295
            ],
            [
                82,
                -187
            ],
            [
                183,
                -48
            ],
            [
                -64,
                -51
            ],
            [
                69,
                -268
            ],
            [
                -62,
                2
            ],
            [
                21,
                -420
            ],
            [
                -200,
                154
            ],
            [
                -17,
                167
            ],
            [
                117,
                149
            ],
            [
                -63,
                70
            ],
            [
                -165,
                387
            ],
            [
                -57,
                -84
            ],
            [
                22,
                -191
            ],
            [
                -56,
                -74
            ],
            [
                -19,
                330
            ],
            [
                62,
                91
            ],
            [
                -24,
                163
            ],
            [
                -76,
                -295
            ],
            [
                -94,
                -16
            ],
            [
                83,
                282
            ],
            [
                -75,
                181
            ],
            [
                77,
                46
            ],
            [
                -137,
                293
            ],
            [
                -104,
                -18
            ],
            [
                -14,
                -84
            ],
            [
                -154,
                -61
            ],
            [
                120,
                236
            ],
            [
                205,
                159
            ],
            [
                19,
                304
            ],
            [
                95,
                130
            ],
            [
                -117,
                194
            ],
            [
                55,
                239
            ],
            [
                -59,
                10
            ],
            [
                -22,
                192
            ],
            [
                61,
                75
            ],
            [
                -86,
                311
            ],
            [
                76,
                143
            ],
            [
                12,
                177
            ],
            [
                64,
                224
            ],
            [
                32,
                331
            ],
            [
                61,
                160
            ],
            [
                221,
                296
            ],
            [
                -23,
                264
            ],
            [
                -86,
                7
            ],
            [
                43,
                126
            ],
            [
                76,
                -100
            ],
            [
                55,
                40
            ],
            [
                -25,
                155
            ],
            [
                44,
                149
            ],
            [
                147,
                260
            ],
            [
                -22,
                81
            ],
            [
                67,
                277
            ],
            [
                -202,
                -174
            ],
            [
                -56,
                -197
            ],
            [
                -49,
                47
            ],
            [
                12,
                188
            ],
            [
                -105,
                -78
            ],
            [
                -64,
                -187
            ],
            [
                -76,
                -80
            ],
            [
                -151,
                -26
            ],
            [
                -212,
                65
            ],
            [
                -28,
                -163
            ],
            [
                -127,
                -262
            ],
            [
                71,
                385
            ],
            [
                -151,
                -94
            ],
            [
                -118,
                -178
            ],
            [
                -113,
                -348
            ],
            [
                -287,
                436
            ],
            [
                -83,
                -61
            ],
            [
                -85,
                -361
            ],
            [
                31,
                -287
            ],
            [
                146,
                -377
            ]
        ],
        [
            [
                87148,
                43931
            ],
            [
                -21,
                -145
            ],
            [
                133,
                -222
            ],
            [
                -28,
                -279
            ]
        ],
        [
            [
                87032,
                42793
            ],
            [
                -58,
                -98
            ],
            [
                -184,
                -22
            ],
            [
                -6,
                -133
            ],
            [
                -181,
                -107
            ],
            [
                -212,
                20
            ],
            [
                -116,
                -137
            ],
            [
                -2,
                -240
            ],
            [
                56,
                -201
            ],
            [
                -140,
                -86
            ],
            [
                -73,
                -148
            ],
            [
                -81,
                41
            ],
            [
                -183,
                -12
            ]
        ],
        [
            [
                72376,
                19856
            ],
            [
                67,
                -9
            ],
            [
                39,
                130
            ],
            [
                375,
                129
            ],
            [
                -83,
                211
            ],
            [
                -132,
                -33
            ],
            [
                -266,
                -428
            ]
        ],
        [
            [
                71033,
                20248
            ],
            [
                123,
                104
            ],
            [
                -12,
                121
            ],
            [
                -115,
                -102
            ],
            [
                4,
                -123
            ]
        ],
        [
            [
                70925,
                21159
            ],
            [
                19,
                -326
            ],
            [
                43,
                -121
            ],
            [
                -3,
                -187
            ],
            [
                103,
                3
            ],
            [
                51,
                546
            ],
            [
                -100,
                163
            ],
            [
                -113,
                -78
            ]
        ],
        [
            [
                70780,
                20656
            ],
            [
                76,
                -41
            ],
            [
                -20,
                182
            ],
            [
                -56,
                -141
            ]
        ],
        [
            [
                70569,
                21819
            ],
            [
                78,
                44
            ],
            [
                14,
                191
            ],
            [
                -92,
                -235
            ]
        ],
        [
            [
                70356,
                23024
            ],
            [
                27,
                -79
            ],
            [
                111,
                61
            ],
            [
                18,
                289
            ],
            [
                -57,
                6
            ],
            [
                -84,
                -143
            ],
            [
                -15,
                -134
            ]
        ],
        [
            [
                70242,
                23544
            ],
            [
                52,
                -156
            ],
            [
                65,
                57
            ],
            [
                -78,
                144
            ],
            [
                -39,
                -45
            ]
        ],
        [
            [
                69268,
                21380
            ],
            [
                125,
                190
            ],
            [
                -41,
                80
            ],
            [
                -84,
                -270
            ]
        ],
        [
            [
                69896,
                36148
            ],
            [
                165,
                -256
            ],
            [
                144,
                -313
            ],
            [
                170,
                -897
            ],
            [
                180,
                -557
            ],
            [
                73,
                -415
            ],
            [
                49,
                -481
            ],
            [
                15,
                -927
            ],
            [
                -61,
                -761
            ],
            [
                -49,
                -365
            ],
            [
                -106,
                -446
            ],
            [
                -226,
                -656
            ],
            [
                -179,
                -738
            ],
            [
                -80,
                -223
            ],
            [
                -48,
                -254
            ],
            [
                11,
                -130
            ],
            [
                93,
                -282
            ],
            [
                33,
                -286
            ],
            [
                -86,
                -570
            ],
            [
                -101,
                -318
            ],
            [
                121,
                -259
            ],
            [
                107,
                -519
            ],
            [
                97,
                -386
            ],
            [
                16,
                -294
            ],
            [
                -16,
                -236
            ],
            [
                26,
                -327
            ],
            [
                -72,
                -301
            ],
            [
                21,
                -227
            ],
            [
                218,
                -175
            ],
            [
                18,
                -112
            ],
            [
                -21,
                -520
            ],
            [
                136,
                -26
            ],
            [
                61,
                -252
            ],
            [
                104,
                95
            ],
            [
                96,
                -59
            ],
            [
                71,
                -403
            ],
            [
                92,
                -177
            ],
            [
                75,
                -376
            ],
            [
                117,
                -112
            ],
            [
                22,
                123
            ],
            [
                -118,
                213
            ],
            [
                93,
                246
            ],
            [
                -110,
                348
            ],
            [
                66,
                -78
            ],
            [
                20,
                244
            ],
            [
                -36,
                29
            ],
            [
                -19,
                348
            ],
            [
                53,
                237
            ],
            [
                54,
                -15
            ],
            [
                69,
                -479
            ],
            [
                -55,
                -11
            ],
            [
                51,
                -313
            ],
            [
                66,
                -78
            ],
            [
                -17,
                555
            ],
            [
                -72,
                159
            ],
            [
                -13,
                195
            ],
            [
                80,
                30
            ],
            [
                162,
                -734
            ],
            [
                -2,
                -716
            ],
            [
                -63,
                -444
            ],
            [
                18,
                -140
            ],
            [
                231,
                -376
            ],
            [
                99,
                -71
            ],
            [
                176,
                0
            ],
            [
                174,
                -157
            ],
            [
                -17,
                -107
            ],
            [
                -190,
                -20
            ],
            [
                -84,
                -138
            ],
            [
                -72,
                -340
            ],
            [
                54,
                -242
            ],
            [
                87,
                -103
            ],
            [
                94,
                -315
            ],
            [
                -121,
                -98
            ],
            [
                337,
                -17
            ],
            [
                30,
                -168
            ],
            [
                360,
                261
            ],
            [
                159,
                159
            ],
            [
                70,
                -81
            ],
            [
                132,
                -8
            ],
            [
                185,
                75
            ],
            [
                154,
                246
            ],
            [
                47,
                210
            ],
            [
                316,
                6
            ],
            [
                178,
                218
            ],
            [
                134,
                -7
            ],
            [
                208,
                187
            ],
            [
                159,
                -54
            ],
            [
                205,
                295
            ],
            [
                -42,
                98
            ],
            [
                107,
                296
            ],
            [
                75,
                114
            ],
            [
                105,
                383
            ],
            [
                -214,
                -132
            ],
            [
                -74,
                166
            ],
            [
                43,
                82
            ],
            [
                -4,
                216
            ],
            [
                93,
                169
            ],
            [
                122,
                59
            ],
            [
                46,
                185
            ],
            [
                30,
                317
            ],
            [
                47,
                113
            ],
            [
                -31,
                467
            ],
            [
                28,
                207
            ],
            [
                22,
                766
            ],
            [
                -48,
                41
            ],
            [
                -80,
                251
            ],
            [
                -131,
                25
            ],
            [
                -50,
                191
            ],
            [
                -6,
                661
            ],
            [
                -146,
                111
            ],
            [
                12,
                161
            ],
            [
                -235,
                72
            ],
            [
                -105,
                297
            ],
            [
                5,
                545
            ],
            [
                -32,
                109
            ],
            [
                94,
                281
            ],
            [
                99,
                86
            ],
            [
                47,
                -122
            ],
            [
                37,
                117
            ],
            [
                116,
                44
            ],
            [
                86,
                108
            ],
            [
                52,
                -65
            ],
            [
                135,
                -428
            ],
            [
                109,
                -109
            ],
            [
                -50,
                -156
            ],
            [
                67,
                -453
            ],
            [
                37,
                159
            ],
            [
                121,
                -229
            ],
            [
                -128,
                -71
            ],
            [
                142,
                -24
            ],
            [
                74,
                -233
            ],
            [
                126,
                -63
            ],
            [
                202,
                -177
            ],
            [
                26,
                -120
            ],
            [
                164,
                -137
            ],
            [
                210,
                133
            ],
            [
                96,
                108
            ],
            [
                129,
                379
            ],
            [
                88,
                182
            ],
            [
                63,
                339
            ],
            [
                62,
                516
            ],
            [
                150,
                605
            ],
            [
                93,
                800
            ],
            [
                99,
                453
            ],
            [
                157,
                448
            ],
            [
                -51,
                208
            ],
            [
                -6,
                461
            ],
            [
                38,
                172
            ],
            [
                -41,
                610
            ],
            [
                -113,
                256
            ],
            [
                -61,
                -10
            ],
            [
                -62,
                156
            ],
            [
                -9,
                -215
            ],
            [
                -59,
                -76
            ],
            [
                119,
                -301
            ],
            [
                -128,
                -53
            ],
            [
                -145,
                173
            ],
            [
                -23,
                152
            ],
            [
                72,
                187
            ],
            [
                -82,
                3
            ],
            [
                -51,
                184
            ],
            [
                29,
                275
            ],
            [
                -57,
                398
            ],
            [
                -217,
                184
            ],
            [
                -80,
                326
            ],
            [
                37,
                576
            ],
            [
                -84,
                104
            ],
            [
                16,
                231
            ],
            [
                -109,
                286
            ],
            [
                -89,
                75
            ],
            [
                -12,
                177
            ],
            [
                -63,
                50
            ],
            [
                -76,
                335
            ],
            [
                46,
                177
            ],
            [
                -47,
                42
            ]
        ],
        [
            [
                75446,
                35165
            ],
            [
                -1481,
                426
            ],
            [
                -730,
                191
            ]
        ],
        [
            [
                64918,
                13379
            ],
            [
                106,
                -237
            ],
            [
                496,
                -525
            ],
            [
                39,
                0
            ],
            [
                216,
                -347
            ],
            [
                159,
                -157
            ],
            [
                35,
                32
            ],
            [
                148,
                -118
            ],
            [
                -35,
                110
            ],
            [
                -179,
                324
            ],
            [
                2,
                98
            ],
            [
                -128,
                196
            ],
            [
                -335,
                265
            ],
            [
                -149,
                189
            ],
            [
                141,
                48
            ],
            [
                -310,
                277
            ],
            [
                -100,
                1
            ],
            [
                -106,
                -156
            ]
        ],
        [
            [
                63336,
                18545
            ],
            [
                380,
                -342
            ],
            [
                205,
                -132
            ],
            [
                159,
                -269
            ],
            [
                99,
                -222
            ],
            [
                86,
                -97
            ],
            [
                177,
                -76
            ],
            [
                85,
                45
            ],
            [
                158,
                -106
            ],
            [
                151,
                -26
            ],
            [
                245,
                -256
            ],
            [
                185,
                -369
            ],
            [
                200,
                -37
            ],
            [
                89,
                -182
            ],
            [
                44,
                -229
            ],
            [
                181,
                -234
            ],
            [
                152,
                -286
            ],
            [
                122,
                -94
            ],
            [
                103,
                -195
            ],
            [
                111,
                -311
            ],
            [
                344,
                -378
            ],
            [
                303,
                -126
            ],
            [
                270,
                -16
            ],
            [
                136,
                107
            ],
            [
                15,
                126
            ],
            [
                -155,
                105
            ],
            [
                -215,
                22
            ],
            [
                37,
                166
            ],
            [
                -169,
                193
            ],
            [
                -150,
                334
            ],
            [
                -73,
                36
            ],
            [
                -19,
                245
            ],
            [
                -84,
                74
            ],
            [
                -7,
                120
            ],
            [
                -80,
                123
            ],
            [
                -13,
                192
            ],
            [
                -108,
                194
            ],
            [
                -36,
                542
            ],
            [
                57,
                268
            ],
            [
                93,
                -299
            ],
            [
                199,
                -391
            ],
            [
                147,
                -162
            ],
            [
                -6,
                88
            ],
            [
                -131,
                242
            ],
            [
                -52,
                210
            ],
            [
                152,
                -298
            ],
            [
                140,
                -81
            ],
            [
                149,
                34
            ],
            [
                130,
                -33
            ],
            [
                252,
                133
            ],
            [
                21,
                127
            ],
            [
                154,
                50
            ],
            [
                64,
                101
            ],
            [
                29,
                196
            ],
            [
                100,
                146
            ],
            [
                39,
                151
            ],
            [
                102,
                155
            ],
            [
                92,
                23
            ],
            [
                43,
                321
            ],
            [
                170,
                47
            ],
            [
                231,
                -67
            ],
            [
                131,
                -165
            ],
            [
                63,
                17
            ],
            [
                57,
                199
            ],
            [
                104,
                100
            ],
            [
                105,
                -3
            ],
            [
                35,
                -159
            ],
            [
                80,
                -4
            ],
            [
                66,
                130
            ],
            [
                9,
                -230
            ],
            [
                -49,
                -167
            ],
            [
                83,
                -78
            ],
            [
                45,
                96
            ],
            [
                -19,
                186
            ],
            [
                98,
                70
            ],
            [
                160,
                -365
            ],
            [
                177,
                -133
            ],
            [
                302,
                -416
            ],
            [
                64,
                59
            ],
            [
                331,
                -199
            ],
            [
                129,
                14
            ],
            [
                319,
                -35
            ],
            [
                160,
                -52
            ],
            [
                326,
                -343
            ],
            [
                125,
                -63
            ],
            [
                169,
                -11
            ],
            [
                168,
                -78
            ],
            [
                -98,
                295
            ],
            [
                10,
                368
            ],
            [
                31,
                216
            ],
            [
                -41,
                72
            ],
            [
                75,
                165
            ],
            [
                117,
                -60
            ],
            [
                222,
                120
            ],
            [
                175,
                -195
            ],
            [
                74,
                -4
            ],
            [
                71,
                253
            ],
            [
                198,
                -140
            ],
            [
                49,
                -241
            ],
            [
                254,
                -53
            ],
            [
                34,
                -134
            ],
            [
                150,
                -18
            ],
            [
                34,
                93
            ],
            [
                -29,
                335
            ],
            [
                69,
                383
            ],
            [
                25,
                306
            ],
            [
                -155,
                41
            ],
            [
                -34,
                223
            ],
            [
                193,
                -58
            ],
            [
                47,
                103
            ],
            [
                118,
                48
            ],
            [
                -58,
                163
            ],
            [
                143,
                199
            ],
            [
                71,
                -11
            ],
            [
                127,
                113
            ],
            [
                26,
                -124
            ],
            [
                88,
                96
            ],
            [
                15,
                -218
            ],
            [
                -92,
                -180
            ],
            [
                84,
                30
            ],
            [
                207,
                -96
            ],
            [
                87,
                36
            ],
            [
                97,
                279
            ],
            [
                100,
                81
            ],
            [
                -41,
                222
            ],
            [
                -75,
                81
            ],
            [
                -157,
                -91
            ],
            [
                -168,
                88
            ],
            [
                -183,
                -98
            ],
            [
                -208,
                80
            ],
            [
                -150,
                -43
            ],
            [
                -332,
                157
            ],
            [
                -65,
                107
            ],
            [
                -181,
                -178
            ],
            [
                -70,
                86
            ],
            [
                -65,
                -228
            ],
            [
                -69,
                37
            ],
            [
                -80,
                -84
            ],
            [
                -49,
                108
            ],
            [
                26,
                201
            ],
            [
                -76,
                122
            ],
            [
                83,
                339
            ],
            [
                -66,
                81
            ],
            [
                -140,
                -112
            ],
            [
                -24,
                -96
            ],
            [
                -125,
                -99
            ],
            [
                -152,
                -260
            ],
            [
                -241,
                -124
            ],
            [
                -69,
                36
            ],
            [
                -225,
                -139
            ],
            [
                -68,
                53
            ],
            [
                -218,
                7
            ],
            [
                -112,
                254
            ],
            [
                -78,
                258
            ],
            [
                -50,
                36
            ],
            [
                -180,
                -43
            ],
            [
                -124,
                72
            ],
            [
                -32,
                183
            ],
            [
                -211,
                -120
            ],
            [
                -226,
                37
            ],
            [
                -121,
                102
            ],
            [
                -63,
                149
            ],
            [
                -36,
                452
            ],
            [
                -81,
                0
            ],
            [
                -19,
                103
            ],
            [
                -125,
                80
            ],
            [
                -32,
                176
            ],
            [
                -68,
                24
            ],
            [
                6,
                146
            ],
            [
                -62,
                38
            ],
            [
                29,
                197
            ],
            [
                -151,
                -138
            ],
            [
                -20,
                -130
            ],
            [
                74,
                -82
            ],
            [
                37,
                -313
            ],
            [
                74,
                2
            ],
            [
                68,
                -298
            ],
            [
                -27,
                -138
            ],
            [
                -67,
                -22
            ],
            [
                -83,
                263
            ],
            [
                -217,
                -64
            ],
            [
                24,
                183
            ],
            [
                -66,
                168
            ],
            [
                -16,
                187
            ],
            [
                -158,
                128
            ],
            [
                -65,
                -28
            ],
            [
                -28,
                -397
            ],
            [
                -54,
                -100
            ],
            [
                -54,
                110
            ],
            [
                19,
                396
            ],
            [
                -166,
                206
            ],
            [
                -119,
                440
            ],
            [
                -88,
                416
            ],
            [
                15,
                63
            ],
            [
                -92,
                249
            ],
            [
                -94,
                382
            ],
            [
                -198,
                572
            ],
            [
                38,
                136
            ]
        ],
        [
            [
                67974,
                23591
            ],
            [
                -114,
                -32
            ],
            [
                -129,
                -224
            ],
            [
                50,
                -493
            ],
            [
                54,
                -167
            ],
            [
                -82,
                -182
            ],
            [
                -86,
                169
            ],
            [
                -127,
                12
            ],
            [
                -69,
                -90
            ],
            [
                11,
                -222
            ],
            [
                71,
                -124
            ],
            [
                23,
                -160
            ],
            [
                -69,
                -234
            ],
            [
                51,
                18
            ],
            [
                22,
                -184
            ],
            [
                -80,
                -134
            ],
            [
                61,
                -109
            ],
            [
                -55,
                -138
            ],
            [
                -152,
                -161
            ],
            [
                -92,
                17
            ],
            [
                -57,
                -134
            ],
            [
                -151,
                59
            ],
            [
                -71,
                -118
            ],
            [
                86,
                -188
            ],
            [
                -54,
                -211
            ],
            [
                -230,
                -125
            ],
            [
                -74,
                56
            ],
            [
                -138,
                -136
            ],
            [
                -51,
                69
            ],
            [
                -151,
                -144
            ],
            [
                -150,
                29
            ],
            [
                -14,
                111
            ],
            [
                -198,
                -126
            ],
            [
                -54,
                51
            ],
            [
                -119,
                -78
            ],
            [
                -390,
                -326
            ],
            [
                -1620,
                -572
            ],
            [
                -86,
                -384
            ],
            [
                -109,
                -256
            ],
            [
                -135,
                -31
            ],
            [
                -25,
                -119
            ],
            [
                -92,
                89
            ],
            [
                -43,
                -124
            ]
        ],
        [
            [
                69164,
                80888
            ],
            [
                196,
                -33
            ],
            [
                -82,
                124
            ],
            [
                -114,
                -91
            ]
        ],
        [
            [
                68657,
                80846
            ],
            [
                107,
                -58
            ],
            [
                252,
                112
            ],
            [
                -163,
                6
            ],
            [
                -196,
                -60
            ]
        ],
        [
            [
                68245,
                81011
            ],
            [
                181,
                -55
            ],
            [
                -144,
                109
            ],
            [
                -37,
                -54
            ]
        ],
        [
            [
                67912,
                80966
            ],
            [
                144,
                -14
            ],
            [
                -40,
                127
            ],
            [
                -104,
                -113
            ]
        ],
        [
            [
                65061,
                62966
            ],
            [
                1584,
                -168
            ],
            [
                1108,
                -142
            ],
            [
                1127,
                -155
            ]
        ],
        [
            [
                69359,
                80276
            ],
            [
                -202,
                212
            ],
            [
                -65,
                -75
            ],
            [
                -85,
                58
            ],
            [
                -39,
                -93
            ],
            [
                -124,
                -4
            ],
            [
                -157,
                76
            ],
            [
                -130,
                -126
            ],
            [
                -10,
                94
            ],
            [
                -204,
                -101
            ],
            [
                -305,
                137
            ],
            [
                -389,
                297
            ],
            [
                15,
                -181
            ],
            [
                -72,
                -89
            ],
            [
                -94,
                100
            ],
            [
                77,
                180
            ],
            [
                -164,
                206
            ],
            [
                -45,
                270
            ],
            [
                -146,
                35
            ]
        ],
        [
            [
                67220,
                81272
            ],
            [
                -88,
                12
            ],
            [
                -98,
                -170
            ],
            [
                -59,
                -224
            ],
            [
                18,
                -200
            ],
            [
                -113,
                -243
            ],
            [
                -7,
                -175
            ],
            [
                -152,
                -191
            ],
            [
                -92,
                -189
            ],
            [
                -41,
                -288
            ],
            [
                -68,
                -96
            ],
            [
                36,
                -250
            ],
            [
                -13,
                -162
            ],
            [
                48,
                -101
            ],
            [
                70,
                -587
            ],
            [
                47,
                -197
            ],
            [
                -48,
                -27
            ],
            [
                -1305,
                147
            ],
            [
                -1188,
                115
            ],
            [
                -1100,
                90
            ],
            [
                134,
                -162
            ],
            [
                -9,
                -119
            ],
            [
                -115,
                -235
            ],
            [
                63,
                -177
            ],
            [
                -111,
                -206
            ],
            [
                2,
                -125
            ],
            [
                128,
                12
            ],
            [
                104,
                -63
            ],
            [
                17,
                -145
            ],
            [
                -143,
                -320
            ],
            [
                60,
                -135
            ],
            [
                61,
                236
            ],
            [
                71,
                15
            ],
            [
                10,
                -120
            ],
            [
                -84,
                -179
            ],
            [
                -13,
                -332
            ],
            [
                123,
                -43
            ],
            [
                77,
                -121
            ],
            [
                -31,
                -104
            ],
            [
                -117,
                52
            ],
            [
                -64,
                -100
            ],
            [
                34,
                -125
            ],
            [
                132,
                120
            ],
            [
                54,
                -39
            ],
            [
                -3,
                -350
            ],
            [
                76,
                -122
            ],
            [
                150,
                -28
            ],
            [
                21,
                -85
            ],
            [
                -192,
                4
            ],
            [
                41,
                -315
            ],
            [
                132,
                -18
            ],
            [
                158,
                -263
            ],
            [
                -20,
                -164
            ],
            [
                206,
                -232
            ],
            [
                -166,
                -151
            ],
            [
                60,
                -70
            ],
            [
                59,
                103
            ],
            [
                108,
                -201
            ],
            [
                54,
                -231
            ],
            [
                -86,
                -75
            ],
            [
                1,
                209
            ],
            [
                -207,
                -14
            ],
            [
                -10,
                -247
            ],
            [
                263,
                -174
            ],
            [
                54,
                81
            ],
            [
                42,
                -153
            ],
            [
                -18,
                -167
            ],
            [
                80,
                16
            ],
            [
                72,
                -151
            ],
            [
                -178,
                -75
            ],
            [
                -20,
                -199
            ],
            [
                50,
                -71
            ],
            [
                -55,
                -109
            ],
            [
                -65,
                72
            ],
            [
                -168,
                -176
            ],
            [
                23,
                -165
            ],
            [
                196,
                148
            ],
            [
                19,
                -57
            ],
            [
                -179,
                -213
            ],
            [
                137,
                -267
            ],
            [
                -46,
                -88
            ],
            [
                -40,
                155
            ],
            [
                -126,
                96
            ],
            [
                -70,
                -208
            ],
            [
                128,
                -205
            ],
            [
                41,
                -137
            ],
            [
                -192,
                -51
            ],
            [
                -14,
                -265
            ],
            [
                30,
                -127
            ],
            [
                131,
                -181
            ],
            [
                -40,
                -333
            ],
            [
                -91,
                -5
            ],
            [
                14,
                201
            ],
            [
                -35,
                100
            ],
            [
                -120,
                -99
            ],
            [
                81,
                -291
            ]
        ],
        [
            [
                25191,
                4391
            ],
            [
                1222,
                445
            ],
            [
                1212,
                407
            ],
            [
                994,
                341
            ],
            [
                998,
                311
            ],
            [
                2207,
                658
            ],
            [
                728,
                200
            ],
            [
                1157,
                300
            ],
            [
                1795,
                442
            ],
            [
                1116,
                254
            ],
            [
                1171,
                251
            ],
            [
                1418,
                281
            ],
            [
                1225,
                222
            ],
            [
                1144,
                194
            ],
            [
                1223,
                183
            ]
        ],
        [
            [
                30899,
                23738
            ],
            [
                -109,
                -106
            ],
            [
                -18,
                -168
            ],
            [
                -112,
                -206
            ],
            [
                17,
                -160
            ],
            [
                -119,
                -426
            ],
            [
                -100,
                -136
            ],
            [
                -47,
                149
            ],
            [
                -114,
                -20
            ],
            [
                5,
                165
            ],
            [
                -104,
                206
            ],
            [
                69,
                225
            ],
            [
                -54,
                31
            ],
            [
                -124,
                -124
            ],
            [
                -50,
                40
            ],
            [
                -137,
                -83
            ],
            [
                -24,
                58
            ],
            [
                -179,
                82
            ],
            [
                -56,
                -229
            ],
            [
                -183,
                54
            ],
            [
                -78,
                -62
            ],
            [
                -126,
                64
            ],
            [
                -116,
                -82
            ],
            [
                -79,
                -159
            ],
            [
                -67,
                -22
            ],
            [
                -129,
                116
            ],
            [
                -76,
                292
            ],
            [
                -122,
                -161
            ],
            [
                -49,
                51
            ],
            [
                -71,
                -106
            ],
            [
                -172,
                -55
            ],
            [
                -84,
                -98
            ],
            [
                -105,
                44
            ],
            [
                -110,
                208
            ],
            [
                18,
                179
            ],
            [
                -57,
                60
            ],
            [
                -50,
                -162
            ],
            [
                -162,
                -264
            ],
            [
                -17,
                -185
            ],
            [
                41,
                -100
            ],
            [
                -89,
                -324
            ],
            [
                55,
                -57
            ],
            [
                1,
                -227
            ],
            [
                -40,
                -82
            ],
            [
                -22,
                -300
            ],
            [
                -160,
                -245
            ],
            [
                -163,
                97
            ],
            [
                -8,
                -139
            ],
            [
                -135,
                -221
            ],
            [
                -28,
                -332
            ],
            [
                84,
                -18
            ],
            [
                28,
                -377
            ],
            [
                -92,
                -161
            ],
            [
                19,
                -80
            ],
            [
                -89,
                -80
            ],
            [
                -13,
                -248
            ],
            [
                -106,
                -278
            ],
            [
                -49,
                -294
            ],
            [
                30,
                -252
            ],
            [
                -51,
                -260
            ],
            [
                56,
                -237
            ],
            [
                -106,
                -35
            ],
            [
                77,
                -292
            ],
            [
                -124,
                -203
            ],
            [
                -110,
                -271
            ],
            [
                -55,
                27
            ],
            [
                -17,
                167
            ],
            [
                -84,
                54
            ],
            [
                -134,
                229
            ],
            [
                -97,
                49
            ],
            [
                -81,
                -63
            ],
            [
                -42,
                181
            ],
            [
                -126,
                100
            ],
            [
                -105,
                -232
            ],
            [
                -47,
                -216
            ],
            [
                -137,
                -44
            ],
            [
                38,
                -167
            ],
            [
                -21,
                -136
            ],
            [
                107,
                -77
            ],
            [
                15,
                -202
            ],
            [
                -72,
                -226
            ],
            [
                136,
                -253
            ],
            [
                137,
                43
            ],
            [
                46,
                -104
            ],
            [
                -43,
                -222
            ],
            [
                50,
                -62
            ],
            [
                -84,
                -184
            ],
            [
                -11,
                -203
            ],
            [
                71,
                -171
            ],
            [
                -81,
                -136
            ],
            [
                28,
                -156
            ],
            [
                107,
                12
            ],
            [
                3,
                -362
            ],
            [
                58,
                -17
            ],
            [
                58,
                -211
            ],
            [
                9,
                -196
            ],
            [
                93,
                -185
            ],
            [
                -16,
                -222
            ],
            [
                82,
                -9
            ],
            [
                106,
                -504
            ],
            [
                -51,
                -103
            ],
            [
                -100,
                -1
            ],
            [
                -76,
                87
            ],
            [
                -221,
                -106
            ],
            [
                -23,
                -161
            ],
            [
                44,
                -94
            ],
            [
                -104,
                -163
            ],
            [
                -121,
                127
            ],
            [
                1,
                -318
            ],
            [
                -135,
                -162
            ],
            [
                -67,
                -220
            ],
            [
                53,
                -216
            ],
            [
                -84,
                -232
            ],
            [
                -71,
                -15
            ],
            [
                -26,
                -304
            ],
            [
                -115,
                -372
            ],
            [
                -72,
                -101
            ],
            [
                -77,
                -437
            ],
            [
                -122,
                -75
            ],
            [
                -155,
                -207
            ],
            [
                -15,
                -186
            ],
            [
                -252,
                -447
            ],
            [
                170,
                -13
            ],
            [
                -59,
                -117
            ],
            [
                3,
                -163
            ],
            [
                -60,
                -128
            ],
            [
                104,
                -119
            ],
            [
                -43,
                -245
            ],
            [
                38,
                -149
            ],
            [
                -124,
                -260
            ],
            [
                -2,
                -244
            ],
            [
                -69,
                -134
            ],
            [
                -132,
                -553
            ],
            [
                -25,
                -25
            ],
            [
                474,
                -3787
            ]
        ],
        [
            [
                92968,
                16433
            ],
            [
                -28,
                -214
            ],
            [
                75,
                -267
            ],
            [
                2,
                -294
            ],
            [
                -87,
                -84
            ],
            [
                88,
                -34
            ],
            [
                115,
                -325
            ],
            [
                115,
                156
            ],
            [
                149,
                -51
            ],
            [
                38,
                -256
            ]
        ],
        [
            [
                95336,
                23105
            ],
            [
                -71,
                511
            ],
            [
                3,
                268
            ]
        ],
        [
            [
                92763,
                25585
            ],
            [
                -178,
                -247
            ],
            [
                -58,
                -278
            ],
            [
                -6,
                -275
            ],
            [
                83,
                -104
            ],
            [
                25,
                -163
            ],
            [
                -59,
                -150
            ],
            [
                17,
                -265
            ],
            [
                -53,
                -83
            ],
            [
                -27,
                -432
            ],
            [
                32,
                -230
            ],
            [
                -55,
                -173
            ],
            [
                -15,
                -443
            ],
            [
                -44,
                -119
            ],
            [
                -5,
                -248
            ],
            [
                65,
                -142
            ],
            [
                -17,
                -389
            ],
            [
                115,
                -321
            ],
            [
                -21,
                -327
            ],
            [
                82,
                -438
            ],
            [
                -49,
                -125
            ],
            [
                77,
                -417
            ],
            [
                -107,
                -343
            ],
            [
                1,
                -193
            ],
            [
                -49,
                -107
            ],
            [
                26,
                -207
            ],
            [
                187,
                -190
            ],
            [
                132,
                -86
            ],
            [
                -16,
                -102
            ],
            [
                147,
                -185
            ],
            [
                60,
                -277
            ],
            [
                88,
                -145
            ],
            [
                -60,
                -185
            ],
            [
                55,
                -65
            ],
            [
                -32,
                -250
            ],
            [
                -65,
                -79
            ],
            [
                -122,
                -316
            ],
            [
                62,
                -158
            ],
            [
                1,
                -303
            ],
            [
                58,
                -218
            ],
            [
                -109,
                -241
            ],
            [
                39,
                -133
            ]
        ],
        [
            [
                94259,
                30777
            ],
            [
                16,
                -81
            ],
            [
                139,
                -125
            ],
            [
                -101,
                193
            ],
            [
                -54,
                13
            ]
        ],
        [
            [
                94010,
                31176
            ],
            [
                83,
                -93
            ],
            [
                -47,
                166
            ],
            [
                -36,
                -73
            ]
        ],
        [
            [
                91272,
                34396
            ],
            [
                57,
                203
            ],
            [
                -100,
                332
            ],
            [
                -188,
                184
            ]
        ],
        [
            [
                86010,
                23729
            ],
            [
                65,
                -193
            ],
            [
                -5,
                156
            ],
            [
                -60,
                37
            ]
        ],
        [
            [
                85877,
                23714
            ],
            [
                49,
                -155
            ],
            [
                56,
                -2
            ],
            [
                -105,
                157
            ]
        ],
        [
            [
                81282,
                31551
            ],
            [
                171,
                -230
            ],
            [
                306,
                -532
            ],
            [
                101,
                -266
            ],
            [
                159,
                -216
            ],
            [
                143,
                -129
            ],
            [
                36,
                -245
            ],
            [
                64,
                -142
            ],
            [
                6,
                -176
            ],
            [
                191,
                -247
            ],
            [
                85,
                -209
            ],
            [
                -33,
                -214
            ],
            [
                -162,
                -397
            ],
            [
                -139,
                -71
            ],
            [
                -30,
                -300
            ],
            [
                -108,
                -20
            ],
            [
                26,
                -264
            ],
            [
                -93,
                -436
            ],
            [
                355,
                -325
            ],
            [
                301,
                -251
            ],
            [
                225,
                -138
            ],
            [
                407,
                -109
            ],
            [
                203,
                -91
            ],
            [
                206,
                -42
            ],
            [
                362,
                5
            ],
            [
                189,
                163
            ],
            [
                209,
                106
            ],
            [
                209,
                -235
            ],
            [
                438,
                -195
            ],
            [
                132,
                21
            ],
            [
                129,
                -43
            ],
            [
                67,
                -106
            ],
            [
                166,
                -128
            ],
            [
                137,
                -185
            ],
            [
                75,
                -297
            ],
            [
                298,
                -536
            ],
            [
                184,
                -26
            ],
            [
                89,
                -96
            ],
            [
                30,
                -191
            ],
            [
                -24,
                -284
            ],
            [
                -123,
                -562
            ],
            [
                -125,
                -89
            ],
            [
                40,
                -185
            ],
            [
                77,
                -62
            ],
            [
                23,
                101
            ],
            [
                102,
                -175
            ],
            [
                -32,
                -132
            ],
            [
                -130,
                -112
            ],
            [
                -113,
                90
            ],
            [
                4,
                -152
            ],
            [
                -95,
                -84
            ],
            [
                -85,
                29
            ],
            [
                -24,
                -261
            ],
            [
                45,
                -403
            ],
            [
                103,
                -55
            ],
            [
                110,
                -181
            ],
            [
                -15,
                -156
            ],
            [
                219,
                -341
            ],
            [
                128,
                -127
            ],
            [
                113,
                -294
            ],
            [
                45,
                -344
            ],
            [
                314,
                -859
            ],
            [
                331,
                -759
            ],
            [
                240,
                -340
            ],
            [
                118,
                -254
            ],
            [
                99,
                -38
            ],
            [
                110,
                -170
            ],
            [
                159,
                38
            ],
            [
                68,
                -63
            ],
            [
                540,
                -182
            ],
            [
                290,
                -114
            ],
            [
                413,
                -204
            ],
            [
                811,
                -371
            ]
        ],
        [
            [
                90152,
                17663
            ],
            [
                56,
                344
            ],
            [
                -21,
                322
            ],
            [
                86,
                96
            ],
            [
                -13,
                253
            ],
            [
                55,
                578
            ],
            [
                163,
                283
            ],
            [
                55,
                262
            ],
            [
                -29,
                233
            ],
            [
                87,
                350
            ],
            [
                -3,
                121
            ],
            [
                -76,
                241
            ],
            [
                4,
                574
            ],
            [
                51,
                50
            ],
            [
                53,
                349
            ],
            [
                85,
                197
            ],
            [
                -1,
                206
            ],
            [
                93,
                166
            ],
            [
                -49,
                557
            ],
            [
                29,
                192
            ],
            [
                53,
                37
            ],
            [
                11,
                -221
            ],
            [
                108,
                -57
            ],
            [
                29,
                140
            ],
            [
                111,
                197
            ],
            [
                127,
                1001
            ],
            [
                190,
                1589
            ],
            [
                -1,
                141
            ],
            [
                71,
                192
            ]
        ],
        [
            [
                91777,
                32906
            ],
            [
                -23,
                153
            ],
            [
                -101,
                185
            ],
            [
                20,
                260
            ],
            [
                -77,
                24
            ],
            [
                78,
                174
            ],
            [
                71,
                -327
            ],
            [
                98,
                -15
            ],
            [
                18,
                -144
            ],
            [
                207,
                -164
            ],
            [
                9,
                -116
            ],
            [
                143,
                45
            ],
            [
                -10,
                -130
            ],
            [
                93,
                70
            ],
            [
                213,
                -3
            ],
            [
                118,
                -144
            ],
            [
                -7,
                -145
            ],
            [
                160,
                -52
            ],
            [
                436,
                -197
            ],
            [
                216,
                -158
            ],
            [
                218,
                -373
            ],
            [
                151,
                -415
            ],
            [
                179,
                -143
            ],
            [
                -91,
                309
            ],
            [
                118,
                134
            ],
            [
                118,
                -14
            ],
            [
                37,
                -101
            ],
            [
                117,
                187
            ],
            [
                200,
                -302
            ],
            [
                -1,
                -93
            ],
            [
                150,
                -89
            ],
            [
                -1,
                98
            ],
            [
                -344,
                472
            ],
            [
                -398,
                593
            ],
            [
                -259,
                324
            ],
            [
                -289,
                329
            ],
            [
                -416,
                554
            ],
            [
                -232,
                238
            ],
            [
                -154,
                105
            ],
            [
                -39,
                -33
            ],
            [
                -354,
                349
            ],
            [
                -358,
                112
            ],
            [
                -246,
                290
            ],
            [
                -2,
                -130
            ],
            [
                -131,
                58
            ],
            [
                -76,
                -169
            ],
            [
                22,
                -144
            ],
            [
                -64,
                -99
            ]
        ],
        [
            [
                76665,
                35383
            ],
            [
                90,
                -78
            ],
            [
                -29,
                133
            ],
            [
                -61,
                -55
            ]
        ],
        [
            [
                76474,
                35258
            ],
            [
                -5,
                -239
            ],
            [
                90,
                37
            ],
            [
                -85,
                202
            ]
        ],
        [
            [
                75446,
                35165
            ],
            [
                21,
                96
            ],
            [
                121,
                51
            ],
            [
                76,
                -76
            ],
            [
                173,
                183
            ],
            [
                287,
                124
            ],
            [
                127,
                191
            ],
            [
                115,
                67
            ],
            [
                117,
                -160
            ],
            [
                25,
                -159
            ],
            [
                94,
                160
            ],
            [
                111,
                -32
            ],
            [
                1,
                98
            ],
            [
                201,
                295
            ],
            [
                238,
                125
            ],
            [
                183,
                -221
            ],
            [
                173,
                -73
            ],
            [
                91,
                -140
            ],
            [
                282,
                -270
            ],
            [
                129,
                61
            ],
            [
                319,
                -65
            ],
            [
                213,
                -341
            ],
            [
                219,
                -497
            ],
            [
                225,
                -398
            ],
            [
                62,
                -21
            ],
            [
                357,
                -458
            ],
            [
                174,
                -105
            ],
            [
                582,
                -585
            ]
        ],
        [
            [
                12669,
                9647
            ],
            [
                108,
                15
            ],
            [
                52,
                185
            ],
            [
                -35,
                171
            ],
            [
                65,
                175
            ],
            [
                135,
                74
            ],
            [
                197,
                -76
            ],
            [
                73,
                51
            ],
            [
                252,
                529
            ],
            [
                6,
                212
            ],
            [
                52,
                305
            ],
            [
                -14,
                364
            ],
            [
                -52,
                203
            ],
            [
                21,
                128
            ],
            [
                -68,
                457
            ],
            [
                109,
                209
            ],
            [
                276,
                294
            ],
            [
                141,
                78
            ],
            [
                56,
                138
            ],
            [
                125,
                62
            ],
            [
                116,
                -63
            ],
            [
                127,
                39
            ],
            [
                334,
                -121
            ],
            [
                85,
                -114
            ],
            [
                92,
                -10
            ],
            [
                107,
                102
            ],
            [
                324,
                24
            ],
            [
                178,
                217
            ],
            [
                103,
                0
            ],
            [
                164,
                210
            ],
            [
                10,
                262
            ],
            [
                81,
                24
            ],
            [
                93,
                -108
            ],
            [
                218,
                66
            ],
            [
                65,
                84
            ],
            [
                77,
                -78
            ],
            [
                276,
                -49
            ],
            [
                99,
                -74
            ],
            [
                110,
                79
            ],
            [
                59,
                178
            ],
            [
                154,
                73
            ],
            [
                307,
                31
            ],
            [
                81,
                -106
            ],
            [
                164,
                -18
            ],
            [
                180,
                -75
            ],
            [
                259,
                22
            ],
            [
                205,
                53
            ],
            [
                97,
                -150
            ],
            [
                89,
                -40
            ],
            [
                116,
                126
            ],
            [
                367,
                25
            ],
            [
                194,
                110
            ],
            [
                202,
                -96
            ],
            [
                44,
                -63
            ],
            [
                1301,
                537
            ],
            [
                1831,
                740
            ]
        ],
        [
            [
                22477,
                15058
            ],
            [
                37,
                321
            ],
            [
                108,
                434
            ],
            [
                103,
                25
            ],
            [
                30,
                160
            ],
            [
                108,
                55
            ],
            [
                58,
                129
            ],
            [
                -6,
                270
            ],
            [
                68,
                282
            ],
            [
                -181,
                345
            ],
            [
                -32,
                174
            ],
            [
                -61,
                55
            ],
            [
                -189,
                404
            ],
            [
                -176,
                645
            ],
            [
                -140,
                259
            ],
            [
                -97,
                111
            ],
            [
                -37,
                157
            ],
            [
                18,
                187
            ],
            [
                -231,
                496
            ],
            [
                -225,
                137
            ],
            [
                -208,
                542
            ],
            [
                -28,
                134
            ],
            [
                -135,
                136
            ],
            [
                -14,
                217
            ],
            [
                -58,
                98
            ],
            [
                52,
                262
            ],
            [
                -70,
                120
            ],
            [
                62,
                176
            ],
            [
                116,
                -33
            ],
            [
                62,
                216
            ],
            [
                120,
                23
            ],
            [
                -19,
                144
            ],
            [
                70,
                49
            ],
            [
                25,
                163
            ],
            [
                -83,
                175
            ],
            [
                -76,
                28
            ],
            [
                36,
                266
            ],
            [
                -123,
                370
            ],
            [
                -28,
                176
            ],
            [
                -64,
                10
            ],
            [
                -34,
                187
            ],
            [
                -891,
                6782
            ]
        ],
        [
            [
                20344,
                29945
            ],
            [
                -965,
                -370
            ],
            [
                -1406,
                -558
            ],
            [
                -315,
                -116
            ],
            [
                -819,
                -351
            ],
            [
                -826,
                -368
            ],
            [
                -438,
                -185
            ]
        ],
        [
            [
                8891,
                24760
            ],
            [
                -103,
                -269
            ],
            [
                -48,
                -279
            ],
            [
                36,
                -246
            ],
            [
                -32,
                -298
            ],
            [
                25,
                -314
            ],
            [
                63,
                -403
            ],
            [
                160,
                -458
            ],
            [
                19,
                -325
            ],
            [
                -47,
                -96
            ],
            [
                1,
                -228
            ],
            [
                -61,
                -49
            ],
            [
                11,
                -412
            ],
            [
                254,
                -509
            ],
            [
                112,
                -406
            ],
            [
                96,
                -226
            ],
            [
                86,
                -298
            ],
            [
                -8,
                -147
            ],
            [
                125,
                -117
            ],
            [
                141,
                -268
            ],
            [
                161,
                -401
            ],
            [
                266,
                -871
            ],
            [
                264,
                -1048
            ],
            [
                157,
                -761
            ],
            [
                125,
                -443
            ],
            [
                36,
                -220
            ],
            [
                141,
                -558
            ],
            [
                100,
                -638
            ],
            [
                97,
                -228
            ],
            [
                245,
                -852
            ],
            [
                107,
                -483
            ],
            [
                32,
                -281
            ],
            [
                69,
                -268
            ],
            [
                14,
                -228
            ],
            [
                42,
                -61
            ],
            [
                126,
                -540
            ],
            [
                35,
                -266
            ],
            [
                -36,
                -133
            ],
            [
                80,
                -259
            ],
            [
                37,
                -263
            ],
            [
                -14,
                -161
            ],
            [
                104,
                -70
            ],
            [
                35,
                -110
            ],
            [
                40,
                -404
            ],
            [
                -24,
                -441
            ],
            [
                26,
                -34
            ],
            [
                96,
                314
            ],
            [
                66,
                81
            ],
            [
                7,
                -125
            ],
            [
                173,
                -4
            ],
            [
                43,
                118
            ],
            [
                95,
                -68
            ],
            [
                69,
                47
            ],
            [
                134,
                -106
            ]
        ],
        [
            [
                76579,
                54878
            ],
            [
                704,
                -150
            ],
            [
                28,
                11
            ],
            [
                996,
                -234
            ],
            [
                1339,
                -335
            ],
            [
                13,
                -89
            ],
            [
                486,
                -108
            ],
            [
                -45,
                105
            ]
        ],
        [
            [
                25159,
                31686
            ],
            [
                238,
                100
            ],
            [
                2765,
                805
            ],
            [
                30,
                27
            ],
            [
                1083,
                301
            ],
            [
                752,
                200
            ]
        ],
        [
            [
                23019,
                50594
            ],
            [
                40,
                -393
            ],
            [
                386,
                -3395
            ],
            [
                213,
                -1895
            ],
            [
                827,
                -7291
            ],
            [
                133,
                -1140
            ],
            [
                498,
                -4382
            ],
            [
                43,
                -412
            ]
        ],
        [
            [
                90639,
                45066
            ],
            [
                -114,
                645
            ],
            [
                -46,
                106
            ],
            [
                -99,
                -29
            ],
            [
                -68,
                171
            ],
            [
                -79,
                409
            ],
            [
                -28,
                513
            ],
            [
                42,
                151
            ],
            [
                -91,
                444
            ],
            [
                50,
                26
            ],
            [
                -78,
                489
            ],
            [
                -89,
                187
            ],
            [
                29,
                184
            ],
            [
                -12,
                216
            ],
            [
                -87,
                298
            ],
            [
                -116,
                68
            ],
            [
                -30,
                120
            ],
            [
                -27,
                -248
            ],
            [
                -130,
                -347
            ],
            [
                -15,
                -289
            ],
            [
                29,
                -155
            ],
            [
                -21,
                -251
            ],
            [
                34,
                -757
            ],
            [
                117,
                -595
            ],
            [
                -40,
                -100
            ],
            [
                121,
                -104
            ],
            [
                65,
                -242
            ],
            [
                -53,
                -134
            ],
            [
                -83,
                18
            ],
            [
                127,
                -232
            ]
        ],
        [
            [
                89393,
                45821
            ],
            [
                -48,
                170
            ],
            [
                -42,
                -137
            ]
        ],
        [
            [
                87148,
                43931
            ],
            [
                -114,
                109
            ],
            [
                -75,
                -59
            ],
            [
                11,
                186
            ],
            [
                -65,
                403
            ],
            [
                -6,
                179
            ],
            [
                126,
                388
            ],
            [
                196,
                -93
            ],
            [
                123,
                -130
            ],
            [
                56,
                -147
            ],
            [
                65,
                80
            ],
            [
                -4,
                249
            ],
            [
                142,
                168
            ],
            [
                18,
                161
            ],
            [
                234,
                118
            ],
            [
                132,
                -59
            ],
            [
                79,
                87
            ],
            [
                27,
                -81
            ],
            [
                152,
                -25
            ],
            [
                40,
                137
            ],
            [
                129,
                114
            ],
            [
                53,
                151
            ],
            [
                86,
                20
            ],
            [
                113,
                144
            ],
            [
                132,
                30
            ],
            [
                210,
                154
            ],
            [
                1,
                221
            ],
            [
                -86,
                112
            ],
            [
                66,
                463
            ],
            [
                -49,
                148
            ],
            [
                91,
                46
            ],
            [
                -108,
                140
            ],
            [
                -215,
                -142
            ],
            [
                -54,
                112
            ],
            [
                -185,
                -433
            ],
            [
                -225,
                -133
            ],
            [
                -213,
                -329
            ],
            [
                -69,
                -11
            ],
            [
                -43,
                -139
            ],
            [
                -95,
                -67
            ],
            [
                4,
                102
            ],
            [
                203,
                228
            ],
            [
                168,
                327
            ],
            [
                117,
                126
            ],
            [
                104,
                8
            ],
            [
                123,
                343
            ],
            [
                96,
                106
            ],
            [
                157,
                -62
            ],
            [
                57,
                102
            ],
            [
                199,
                8
            ],
            [
                -84,
                197
            ],
            [
                65,
                73
            ],
            [
                77,
                -79
            ],
            [
                77,
                211
            ],
            [
                41,
                224
            ],
            [
                -17,
                309
            ],
            [
                -131,
                -166
            ],
            [
                -152,
                -96
            ],
            [
                -35,
                154
            ],
            [
                148,
                267
            ],
            [
                60,
                23
            ],
            [
                -237,
                181
            ],
            [
                52,
                113
            ],
            [
                130,
                -82
            ],
            [
                21,
                248
            ],
            [
                83,
                -70
            ],
            [
                118,
                131
            ],
            [
                56,
                146
            ],
            [
                -19,
                335
            ],
            [
                -69,
                -30
            ],
            [
                -99,
                242
            ],
            [
                -121,
                -212
            ],
            [
                -196,
                -127
            ],
            [
                -112,
                -126
            ],
            [
                5,
                -162
            ],
            [
                -106,
                -202
            ],
            [
                -137,
                76
            ],
            [
                -36,
                100
            ],
            [
                -80,
                -128
            ],
            [
                -116,
                1
            ],
            [
                -34,
                -73
            ],
            [
                -117,
                167
            ],
            [
                82,
                82
            ],
            [
                185,
                -47
            ],
            [
                116,
                147
            ],
            [
                57,
                -10
            ],
            [
                28,
                -210
            ],
            [
                90,
                319
            ],
            [
                -1,
                180
            ],
            [
                54,
                92
            ],
            [
                106,
                -9
            ],
            [
                207,
                228
            ],
            [
                33,
                210
            ],
            [
                164,
                -72
            ],
            [
                48,
                -109
            ],
            [
                79,
                120
            ],
            [
                -50,
                -275
            ],
            [
                100,
                -56
            ],
            [
                66,
                53
            ],
            [
                259,
                49
            ],
            [
                131,
                -134
            ],
            [
                48,
                61
            ],
            [
                143,
                538
            ],
            [
                163,
                455
            ],
            [
                80,
                287
            ]
        ],
        [
            [
                14862,
                6382
            ],
            [
                74,
                -321
            ],
            [
                94,
                -198
            ],
            [
                34,
                192
            ],
            [
                -43,
                213
            ],
            [
                83,
                114
            ],
            [
                -146,
                108
            ],
            [
                -101,
                -10
            ],
            [
                5,
                -98
            ]
        ],
        [
            [
                15406,
                1954
            ],
            [
                23,
                -124
            ],
            [
                84,
                180
            ],
            [
                -102,
                38
            ],
            [
                -5,
                -94
            ]
        ],
        [
            [
                15419,
                1242
            ],
            [
                35,
                -30
            ],
            [
                74,
                424
            ],
            [
                -70,
                -175
            ],
            [
                -39,
                -219
            ]
        ],
        [
            [
                15303,
                1766
            ],
            [
                52,
                -72
            ],
            [
                38,
                176
            ],
            [
                -91,
                66
            ],
            [
                1,
                -170
            ]
        ],
        [
            [
                15041,
                3040
            ],
            [
                217,
                -393
            ],
            [
                42,
                -164
            ],
            [
                85,
                2
            ],
            [
                0,
                229
            ],
            [
                80,
                259
            ],
            [
                -85,
                20
            ],
            [
                -50,
                -89
            ],
            [
                -212,
                227
            ],
            [
                124,
                29
            ],
            [
                36,
                161
            ],
            [
                3,
                263
            ],
            [
                -31,
                54
            ],
            [
                -3,
                338
            ],
            [
                115,
                -252
            ],
            [
                57,
                222
            ],
            [
                73,
                77
            ],
            [
                -12,
                314
            ],
            [
                -73,
                159
            ],
            [
                -67,
                -75
            ],
            [
                -15,
                -298
            ],
            [
                -121,
                24
            ],
            [
                24,
                -103
            ],
            [
                -73,
                -172
            ],
            [
                62,
                -284
            ],
            [
                2,
                -190
            ],
            [
                -92,
                -29
            ],
            [
                -86,
                -329
            ]
        ],
        [
            [
                15092,
                837
            ],
            [
                197,
                290
            ],
            [
                -144,
                -111
            ],
            [
                -53,
                -179
            ]
        ],
        [
            [
                14901,
                1109
            ],
            [
                101,
                -37
            ],
            [
                -11,
                104
            ],
            [
                -90,
                -67
            ]
        ],
        [
            [
                15060,
                0
            ],
            [
                83,
                139
            ],
            [
                -90,
                -41
            ],
            [
                7,
                -98
            ]
        ],
        [
            [
                14646,
                1390
            ],
            [
                52,
                -76
            ],
            [
                102,
                50
            ],
            [
                51,
                235
            ],
            [
                84,
                71
            ],
            [
                -52,
                -259
            ],
            [
                244,
                -242
            ],
            [
                60,
                35
            ],
            [
                160,
                276
            ],
            [
                -122,
                109
            ],
            [
                20,
                233
            ],
            [
                -44,
                189
            ],
            [
                -67,
                50
            ],
            [
                -34,
                241
            ],
            [
                -92,
                -29
            ],
            [
                -49,
                -193
            ],
            [
                -162,
                -77
            ],
            [
                -95,
                -176
            ],
            [
                -56,
                -437
            ]
        ],
        [
            [
                14656,
                1030
            ],
            [
                70,
                51
            ],
            [
                83,
                244
            ],
            [
                -153,
                -295
            ]
        ],
        [
            [
                23764,
                3862
            ],
            [
                -308,
                2316
            ],
            [
                -212,
                1520
            ],
            [
                -374,
                2878
            ],
            [
                -370,
                2808
            ],
            [
                -64,
                290
            ],
            [
                82,
                238
            ],
            [
                33,
                488
            ],
            [
                -89,
                247
            ],
            [
                15,
                411
            ]
        ],
        [
            [
                12669,
                9647
            ],
            [
                -176,
                -120
            ],
            [
                -59,
                -167
            ],
            [
                -69,
                68
            ],
            [
                -63,
                -67
            ],
            [
                -132,
                107
            ],
            [
                -46,
                -46
            ],
            [
                -71,
                -291
            ],
            [
                -48,
                -51
            ],
            [
                -121,
                130
            ],
            [
                111,
                -417
            ],
            [
                71,
                -389
            ],
            [
                70,
                -510
            ],
            [
                37,
                210
            ],
            [
                -68,
                308
            ],
            [
                -52,
                442
            ],
            [
                91,
                47
            ],
            [
                -8,
                -268
            ],
            [
                34,
                -190
            ],
            [
                53,
                107
            ],
            [
                111,
                -181
            ],
            [
                -33,
                -413
            ],
            [
                78,
                -104
            ],
            [
                162,
                -98
            ],
            [
                -67,
                -161
            ],
            [
                -51,
                67
            ],
            [
                -143,
                23
            ],
            [
                -108,
                -231
            ],
            [
                35,
                -238
            ],
            [
                7,
                -374
            ],
            [
                63,
                50
            ],
            [
                -16,
                125
            ],
            [
                197,
                -118
            ],
            [
                191,
                -2
            ],
            [
                -40,
                -114
            ],
            [
                -166,
                -162
            ],
            [
                16,
                -147
            ],
            [
                -133,
                -115
            ],
            [
                -56,
                52
            ],
            [
                -11,
                302
            ],
            [
                -93,
                21
            ],
            [
                101,
                -504
            ],
            [
                37,
                -409
            ],
            [
                14,
                -443
            ],
            [
                -76,
                -311
            ],
            [
                71,
                -718
            ],
            [
                23,
                -785
            ],
            [
                -52,
                -120
            ],
            [
                12,
                -182
            ],
            [
                -72,
                -233
            ],
            [
                -77,
                -128
            ],
            [
                -17,
                -312
            ],
            [
                67,
                -497
            ],
            [
                -17,
                -293
            ],
            [
                49,
                -31
            ],
            [
                161,
                -495
            ],
            [
                -71,
                -237
            ],
            [
                119,
                25
            ],
            [
                111,
                150
            ],
            [
                210,
                440
            ],
            [
                136,
                192
            ],
            [
                53,
                -4
            ],
            [
                168,
                268
            ],
            [
                -19,
                57
            ],
            [
                159,
                222
            ],
            [
                169,
                129
            ],
            [
                233,
                70
            ],
            [
                141,
                198
            ],
            [
                223,
                89
            ],
            [
                46,
                130
            ],
            [
                212,
                102
            ],
            [
                153,
                -121
            ],
            [
                114,
                236
            ],
            [
                15,
                163
            ],
            [
                181,
                49
            ],
            [
                -30,
                84
            ],
            [
                61,
                107
            ],
            [
                -29,
                187
            ],
            [
                56,
                5
            ],
            [
                45,
                -155
            ],
            [
                -55,
                -143
            ],
            [
                24,
                -125
            ],
            [
                188,
                -35
            ],
            [
                0,
                104
            ],
            [
                -94,
                69
            ],
            [
                24,
                183
            ],
            [
                135,
                -166
            ],
            [
                -12,
                334
            ],
            [
                -83,
                -5
            ],
            [
                38,
                213
            ],
            [
                -2,
                211
            ],
            [
                54,
                96
            ],
            [
                -133,
                11
            ],
            [
                -15,
                137
            ],
            [
                -105,
                70
            ],
            [
                -49,
                191
            ],
            [
                -119,
                203
            ],
            [
                -19,
                -72
            ],
            [
                120,
                -324
            ],
            [
                -89,
                16
            ],
            [
                -138,
                337
            ],
            [
                -148,
                163
            ],
            [
                -293,
                474
            ],
            [
                -136,
                337
            ],
            [
                181,
                110
            ],
            [
                197,
                -53
            ],
            [
                78,
                -97
            ],
            [
                -303,
                66
            ],
            [
                -78,
                -130
            ],
            [
                344,
                -596
            ],
            [
                201,
                -153
            ],
            [
                162,
                -6
            ],
            [
                61,
                -226
            ],
            [
                119,
                -187
            ],
            [
                146,
                -158
            ],
            [
                51,
                22
            ],
            [
                7,
                -324
            ],
            [
                89,
                181
            ],
            [
                -42,
                619
            ],
            [
                -94,
                -54
            ],
            [
                40,
                165
            ],
            [
                -46,
                205
            ],
            [
                -2,
                245
            ],
            [
                -92,
                84
            ],
            [
                -25,
                117
            ],
            [
                67,
                85
            ],
            [
                -77,
                125
            ],
            [
                -76,
                258
            ],
            [
                10,
                78
            ],
            [
                -89,
                183
            ],
            [
                18,
                140
            ],
            [
                -123,
                208
            ],
            [
                -98,
                -311
            ],
            [
                89,
                -284
            ],
            [
                -102,
                94
            ],
            [
                -68,
                180
            ],
            [
                11,
                166
            ],
            [
                103,
                173
            ],
            [
                -61,
                24
            ],
            [
                -78,
                228
            ],
            [
                -75,
                -208
            ],
            [
                -49,
                -382
            ],
            [
                85,
                -84
            ],
            [
                36,
                -189
            ],
            [
                -143,
                212
            ],
            [
                -1,
                244
            ],
            [
                -58,
                140
            ],
            [
                76,
                -17
            ],
            [
                22,
                234
            ],
            [
                131,
                141
            ],
            [
                108,
                -199
            ],
            [
                65,
                -9
            ],
            [
                163,
                -369
            ],
            [
                7,
                -96
            ],
            [
                100,
                246
            ],
            [
                62,
                -176
            ],
            [
                163,
                -37
            ],
            [
                27,
                -512
            ],
            [
                -30,
                -388
            ],
            [
                132,
                -67
            ],
            [
                -94,
                -242
            ],
            [
                125,
                -216
            ],
            [
                21,
                -300
            ],
            [
                99,
                -105
            ],
            [
                110,
                -351
            ],
            [
                134,
                -43
            ],
            [
                24,
                -198
            ],
            [
                -59,
                -108
            ],
            [
                -76,
                -336
            ],
            [
                42,
                -223
            ],
            [
                -24,
                -175
            ],
            [
                -84,
                -40
            ],
            [
                -60,
                131
            ],
            [
                17,
                234
            ],
            [
                77,
                311
            ],
            [
                -114,
                -327
            ],
            [
                -62,
                -44
            ],
            [
                -6,
                -200
            ],
            [
                50,
                -236
            ],
            [
                109,
                -28
            ],
            [
                72,
                109
            ],
            [
                72,
                -107
            ],
            [
                -30,
                -166
            ],
            [
                -119,
                -209
            ],
            [
                -43,
                -184
            ],
            [
                25,
                -119
            ],
            [
                -166,
                30
            ],
            [
                -38,
                -202
            ],
            [
                55,
                -176
            ],
            [
                107,
                5
            ],
            [
                60,
                81
            ],
            [
                19,
                172
            ],
            [
                96,
                32
            ],
            [
                11,
                -365
            ],
            [
                89,
                23
            ],
            [
                46,
                -94
            ],
            [
                -74,
                -258
            ],
            [
                8,
                -220
            ],
            [
                64,
                -118
            ],
            [
                -50,
                -123
            ],
            [
                -90,
                -26
            ],
            [
                -133,
                85
            ],
            [
                62,
                -130
            ],
            [
                -82,
                -88
            ],
            [
                23,
                -251
            ],
            [
                -70,
                -161
            ],
            [
                83,
                -139
            ],
            [
                -97,
                -80
            ],
            [
                125,
                -187
            ],
            [
                942,
                460
            ],
            [
                493,
                255
            ],
            [
                749,
                337
            ],
            [
                735,
                342
            ],
            [
                1027,
                463
            ],
            [
                1251,
                539
            ],
            [
                1349,
                560
            ],
            [
                1684,
                671
            ]
        ],
        [
            [
                68914,
                22457
            ],
            [
                20,
                -269
            ],
            [
                174,
                29
            ],
            [
                -99,
                338
            ],
            [
                -95,
                -98
            ]
        ],
        [
            [
                68290,
                23143
            ],
            [
                62,
                -57
            ],
            [
                22,
                205
            ],
            [
                -84,
                -148
            ]
        ],
        [
            [
                63207,
                16893
            ],
            [
                34,
                -273
            ],
            [
                63,
                -21
            ],
            [
                -19,
                246
            ],
            [
                -78,
                48
            ]
        ],
        [
            [
                63131,
                17383
            ],
            [
                115,
                -121
            ],
            [
                -23,
                124
            ],
            [
                -92,
                -3
            ]
        ],
        [
            [
                62931,
                17215
            ],
            [
                183,
                -183
            ],
            [
                -24,
                205
            ],
            [
                -134,
                46
            ],
            [
                -25,
                -68
            ]
        ],
        [
            [
                62774,
                17559
            ],
            [
                121,
                -235
            ],
            [
                6,
                63
            ],
            [
                -127,
                172
            ]
        ],
        [
            [
                62791,
                17080
            ],
            [
                85,
                170
            ],
            [
                -74,
                18
            ],
            [
                -11,
                -188
            ]
        ],
        [
            [
                62728,
                16857
            ],
            [
                189,
                -134
            ],
            [
                70,
                174
            ],
            [
                69,
                -120
            ],
            [
                17,
                143
            ],
            [
                -85,
                38
            ],
            [
                -90,
                170
            ],
            [
                -170,
                -271
            ]
        ],
        [
            [
                62735,
                17769
            ],
            [
                88,
                -67
            ],
            [
                169,
                -299
            ],
            [
                76,
                96
            ],
            [
                -160,
                124
            ],
            [
                32,
                111
            ],
            [
                -90,
                22
            ],
            [
                -107,
                133
            ],
            [
                -8,
                -120
            ]
        ],
        [
            [
                62419,
                17032
            ],
            [
                80,
                -64
            ],
            [
                -1,
                145
            ],
            [
                -79,
                -81
            ]
        ],
        [
            [
                60864,
                18223
            ],
            [
                114,
                93
            ],
            [
                188,
                -53
            ],
            [
                371,
                -286
            ],
            [
                97,
                -7
            ],
            [
                453,
                -451
            ],
            [
                64,
                74
            ],
            [
                191,
                -186
            ],
            [
                95,
                -207
            ],
            [
                81,
                31
            ],
            [
                125,
                -111
            ],
            [
                141,
                251
            ],
            [
                -65,
                254
            ],
            [
                -124,
                266
            ],
            [
                56,
                211
            ],
            [
                -91,
                165
            ],
            [
                -48,
                239
            ],
            [
                72,
                45
            ],
            [
                223,
                -260
            ],
            [
                22,
                -178
            ],
            [
                244,
                329
            ],
            [
                263,
                103
            ]
        ],
        [
            [
                67974,
                23591
            ],
            [
                -46,
                200
            ],
            [
                6,
                261
            ],
            [
                -293,
                143
            ],
            [
                -1,
                230
            ],
            [
                -104,
                261
            ],
            [
                -50,
                281
            ],
            [
                -59,
                147
            ],
            [
                -26,
                323
            ],
            [
                23,
                104
            ],
            [
                -62,
                172
            ],
            [
                64,
                97
            ],
            [
                122,
                -6
            ],
            [
                31,
                -179
            ],
            [
                140,
                -232
            ],
            [
                81,
                -61
            ],
            [
                41,
                -296
            ],
            [
                152,
                -460
            ],
            [
                262,
                -249
            ],
            [
                56,
                117
            ],
            [
                -10,
                -170
            ],
            [
                55,
                -328
            ],
            [
                131,
                -381
            ],
            [
                24,
                -333
            ],
            [
                68,
                5
            ],
            [
                113,
                -126
            ],
            [
                3,
                -254
            ],
            [
                73,
                -149
            ],
            [
                116,
                -28
            ],
            [
                12,
                303
            ],
            [
                -74,
                -12
            ],
            [
                3,
                511
            ],
            [
                -108,
                135
            ],
            [
                -19,
                179
            ],
            [
                -69,
                180
            ],
            [
                35,
                137
            ],
            [
                -64,
                140
            ],
            [
                24,
                82
            ],
            [
                -93,
                125
            ],
            [
                -50,
                170
            ],
            [
                -56,
                404
            ],
            [
                -151,
                600
            ],
            [
                -76,
                899
            ],
            [
                77,
                341
            ],
            [
                -8,
                193
            ],
            [
                -187,
                318
            ],
            [
                -99,
                879
            ],
            [
                29,
                265
            ],
            [
                50,
                158
            ],
            [
                8,
                338
            ],
            [
                -101,
                404
            ],
            [
                -20,
                455
            ],
            [
                -79,
                272
            ],
            [
                -48,
                559
            ],
            [
                65,
                299
            ],
            [
                -25,
                132
            ],
            [
                67,
                232
            ],
            [
                -40,
                130
            ],
            [
                20,
                158
            ],
            [
                84,
                206
            ],
            [
                2,
                211
            ],
            [
                50,
                201
            ],
            [
                102,
                179
            ],
            [
                -11,
                298
            ],
            [
                -43,
                363
            ],
            [
                56,
                470
            ]
        ],
        [
            [
                86724,
                62866
            ],
            [
                -293,
                292
            ],
            [
                -156,
                271
            ],
            [
                -186,
                463
            ],
            [
                -122,
                454
            ],
            [
                -82,
                220
            ],
            [
                -73,
                434
            ],
            [
                -10,
                489
            ],
            [
                18,
                309
            ],
            [
                -88,
                217
            ],
            [
                -139,
                179
            ],
            [
                -23,
                332
            ],
            [
                -119,
                4
            ],
            [
                -105,
                85
            ],
            [
                -85,
                -108
            ],
            [
                -96,
                142
            ],
            [
                -44,
                253
            ],
            [
                87,
                17
            ],
            [
                5,
                107
            ],
            [
                -198,
                277
            ],
            [
                -40,
                185
            ],
            [
                -206,
                258
            ],
            [
                -81,
                -103
            ],
            [
                -66,
                150
            ],
            [
                119,
                41
            ],
            [
                -12,
                201
            ],
            [
                -149,
                218
            ],
            [
                -35,
                141
            ],
            [
                -140,
                51
            ],
            [
                -122,
                132
            ],
            [
                -50,
                165
            ],
            [
                -46,
                -48
            ],
            [
                -207,
                361
            ],
            [
                -65,
                -52
            ],
            [
                -82,
                123
            ],
            [
                -29,
                -99
            ],
            [
                -89,
                30
            ],
            [
                -10,
                143
            ],
            [
                128,
                241
            ],
            [
                -42,
                287
            ],
            [
                -178,
                228
            ],
            [
                -119,
                103
            ],
            [
                -24,
                -133
            ],
            [
                -142,
                -94
            ],
            [
                -84,
                152
            ],
            [
                99,
                72
            ],
            [
                108,
                165
            ],
            [
                -76,
                241
            ],
            [
                -151,
                239
            ],
            [
                -83,
                62
            ],
            [
                -70,
                205
            ],
            [
                43,
                56
            ]
        ],
        [
            [
                23764,
                3862
            ],
            [
                1427,
                529
            ]
        ],
        [
            [
                25159,
                31686
            ],
            [
                -900,
                -304
            ],
            [
                -373,
                -158
            ],
            [
                -328,
                -88
            ],
            [
                -455,
                -160
            ],
            [
                -1702,
                -617
            ],
            [
                -1057,
                -414
            ]
        ],
        [
            [
                90152,
                17663
            ],
            [
                759,
                -342
            ],
            [
                827,
                -305
            ],
            [
                1230,
                -583
            ]
        ],
        [
            [
                68478,
                81607
            ],
            [
                101,
                196
            ],
            [
                44,
                242
            ],
            [
                -12,
                424
            ],
            [
                -71,
                256
            ],
            [
                53,
                -491
            ],
            [
                -17,
                -291
            ],
            [
                -98,
                -336
            ]
        ],
        [
            [
                67590,
                81695
            ],
            [
                275,
                -427
            ],
            [
                -59,
                263
            ],
            [
                111,
                185
            ],
            [
                -101,
                177
            ],
            [
                -25,
                -152
            ],
            [
                -188,
                26
            ],
            [
                -13,
                -72
            ]
        ],
        [
            [
                67119,
                83759
            ],
            [
                120,
                -47
            ],
            [
                -63,
                146
            ],
            [
                -57,
                -99
            ]
        ],
        [
            [
                65722,
                85543
            ],
            [
                62,
                -82
            ],
            [
                83,
                194
            ],
            [
                -59,
                51
            ],
            [
                -86,
                -163
            ]
        ],
        [
            [
                65368,
                85634
            ],
            [
                275,
                84
            ],
            [
                -133,
                37
            ],
            [
                -142,
                -121
            ]
        ],
        [
            [
                64997,
                85816
            ],
            [
                172,
                -79
            ],
            [
                21,
                53
            ],
            [
                -186,
                85
            ],
            [
                -7,
                -59
            ]
        ],
        [
            [
                62472,
                83979
            ],
            [
                171,
                -172
            ],
            [
                155,
                9
            ],
            [
                269,
                254
            ],
            [
                -98,
                125
            ],
            [
                -2,
                132
            ],
            [
                -151,
                54
            ],
            [
                -366,
                -331
            ],
            [
                22,
                -71
            ]
        ],
        [
            [
                67220,
                81272
            ],
            [
                -116,
                129
            ],
            [
                -60,
                -15
            ],
            [
                -109,
                197
            ],
            [
                -6,
                124
            ],
            [
                -83,
                61
            ],
            [
                27,
                129
            ],
            [
                -199,
                -36
            ],
            [
                -70,
                157
            ],
            [
                45,
                220
            ],
            [
                123,
                19
            ],
            [
                89,
                -92
            ],
            [
                -21,
                196
            ],
            [
                103,
                140
            ],
            [
                180,
                -70
            ],
            [
                33,
                -303
            ],
            [
                -18,
                -133
            ],
            [
                162,
                -196
            ],
            [
                17,
                -149
            ],
            [
                218,
                138
            ],
            [
                -112,
                123
            ],
            [
                4,
                112
            ],
            [
                106,
                44
            ],
            [
                30,
                197
            ],
            [
                99,
                -57
            ],
            [
                71,
                -279
            ],
            [
                109,
                68
            ],
            [
                -17,
                183
            ],
            [
                -95,
                14
            ],
            [
                -75,
                153
            ],
            [
                156,
                -28
            ],
            [
                -22,
                99
            ],
            [
                -245,
                128
            ],
            [
                134,
                176
            ],
            [
                76,
                -81
            ],
            [
                -46,
                200
            ],
            [
                -161,
                -103
            ],
            [
                -74,
                190
            ],
            [
                2,
                326
            ],
            [
                -61,
                25
            ],
            [
                -53,
                -278
            ],
            [
                -73,
                6
            ],
            [
                -8,
                300
            ],
            [
                -252,
                50
            ],
            [
                128,
                111
            ],
            [
                3,
                107
            ],
            [
                -165,
                -144
            ],
            [
                90,
                178
            ],
            [
                -81,
                56
            ],
            [
                95,
                218
            ],
            [
                139,
                21
            ],
            [
                85,
                141
            ],
            [
                50,
                256
            ],
            [
                248,
                -51
            ],
            [
                122,
                97
            ],
            [
                11,
                -98
            ],
            [
                151,
                280
            ],
            [
                72,
                -153
            ],
            [
                182,
                341
            ],
            [
                56,
                230
            ],
            [
                123,
                -108
            ],
            [
                49,
                129
            ],
            [
                -164,
                72
            ],
            [
                -11,
                107
            ],
            [
                113,
                -1
            ],
            [
                -46,
                177
            ],
            [
                -80,
                -69
            ],
            [
                -70,
                237
            ],
            [
                18,
                228
            ],
            [
                -153,
                -99
            ],
            [
                -3,
                -127
            ],
            [
                -71,
                -97
            ],
            [
                -202,
                478
            ],
            [
                -103,
                146
            ],
            [
                130,
                -487
            ],
            [
                63,
                -76
            ],
            [
                -12,
                -177
            ],
            [
                63,
                -85
            ],
            [
                -14,
                -166
            ],
            [
                -74,
                -68
            ],
            [
                -51,
                282
            ],
            [
                -115,
                20
            ],
            [
                -156,
                -315
            ],
            [
                -247,
                -113
            ],
            [
                -70,
                -139
            ],
            [
                -399,
                -64
            ],
            [
                -78,
                54
            ],
            [
                -323,
                507
            ],
            [
                -309,
                410
            ],
            [
                -27,
                -164
            ],
            [
                -86,
                -45
            ],
            [
                23,
                -147
            ],
            [
                -91,
                -318
            ],
            [
                -93,
                -137
            ],
            [
                -96,
                280
            ],
            [
                10,
                -251
            ],
            [
                -81,
                -175
            ],
            [
                -84,
                218
            ],
            [
                -95,
                -36
            ],
            [
                -51,
                77
            ],
            [
                -86,
                -61
            ],
            [
                22,
                190
            ],
            [
                -79,
                156
            ],
            [
                -22,
                177
            ],
            [
                -57,
                -15
            ],
            [
                -30,
                190
            ],
            [
                -58,
                -36
            ],
            [
                -142,
                166
            ],
            [
                -21,
                208
            ],
            [
                -109,
                -43
            ],
            [
                10,
                -149
            ],
            [
                -208,
                -310
            ],
            [
                -74,
                50
            ],
            [
                -185,
                -53
            ],
            [
                -72,
                -101
            ],
            [
                -138,
                -9
            ],
            [
                -157,
                -88
            ],
            [
                -115,
                -185
            ],
            [
                82,
                -55
            ],
            [
                46,
                -194
            ],
            [
                142,
                200
            ],
            [
                45,
                -79
            ],
            [
                5,
                224
            ],
            [
                100,
                49
            ],
            [
                -32,
                -340
            ],
            [
                -171,
                -197
            ],
            [
                -4,
                -138
            ],
            [
                -77,
                -14
            ],
            [
                -55,
                138
            ],
            [
                -90,
                52
            ],
            [
                5,
                -135
            ],
            [
                -66,
                28
            ],
            [
                78,
                -227
            ],
            [
                -76,
                -126
            ],
            [
                -196,
                181
            ],
            [
                -76,
                -258
            ],
            [
                -67,
                34
            ],
            [
                -54,
                -383
            ],
            [
                -185,
                11
            ],
            [
                39,
                -112
            ],
            [
                4,
                -281
            ],
            [
                -226,
                -36
            ],
            [
                -222,
                177
            ],
            [
                -53,
                -18
            ],
            [
                -1,
                -166
            ],
            [
                50,
                -138
            ],
            [
                46,
                49
            ],
            [
                -9,
                -195
            ],
            [
                -114,
                -18
            ],
            [
                -92,
                81
            ],
            [
                -66,
                -63
            ],
            [
                -11,
                133
            ],
            [
                -261,
                250
            ],
            [
                -42,
                -104
            ],
            [
                -122,
                62
            ],
            [
                65,
                199
            ],
            [
                128,
                18
            ],
            [
                -62,
                103
            ],
            [
                60,
                201
            ],
            [
                141,
                -78
            ],
            [
                -57,
                110
            ],
            [
                47,
                62
            ],
            [
                -226,
                36
            ],
            [
                -178,
                173
            ],
            [
                -138,
                40
            ],
            [
                -571,
                -171
            ],
            [
                -248,
                -125
            ],
            [
                -406,
                -308
            ],
            [
                -165,
                -97
            ],
            [
                -285,
                -116
            ],
            [
                -230,
                -6
            ],
            [
                -98,
                53
            ],
            [
                -250,
                -14
            ],
            [
                -515,
                148
            ],
            [
                -184,
                182
            ]
        ],
        [
            [
                95592,
                29215
            ],
            [
                -93,
                200
            ],
            [
                -84,
                -312
            ],
            [
                -51,
                -295
            ],
            [
                -35,
                41
            ],
            [
                85,
                503
            ],
            [
                -94,
                39
            ],
            [
                2,
                118
            ],
            [
                -97,
                21
            ],
            [
                57,
                -491
            ],
            [
                -9,
                -165
            ],
            [
                95,
                -265
            ]
        ],
        [
            [
                95164,
                29555
            ],
            [
                -30,
                -368
            ],
            [
                40,
                -17
            ],
            [
                41,
                273
            ],
            [
                -51,
                112
            ]
        ],
        [
            [
                94994,
                30830
            ],
            [
                25,
                -283
            ],
            [
                79,
                270
            ],
            [
                -104,
                13
            ]
        ],
        [
            [
                95301,
                28498
            ],
            [
                6,
                151
            ],
            [
                -60,
                167
            ],
            [
                -48,
                -240
            ],
            [
                -205,
                -230
            ],
            [
                57,
                371
            ],
            [
                -96,
                31
            ],
            [
                78,
                62
            ],
            [
                52,
                269
            ],
            [
                -66,
                66
            ],
            [
                75,
                148
            ],
            [
                34,
                232
            ],
            [
                -46,
                423
            ],
            [
                -221,
                142
            ],
            [
                -138,
                179
            ],
            [
                -206,
                192
            ],
            [
                -13,
                -50
            ]
        ]
    ]
};


/***/ }),

/***/ 3699:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ Visual)
/* harmony export */ });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8976);
/* harmony import */ var topojson__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3800);
/* harmony import */ var powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4261);
/* harmony import */ var _statesData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2773);
/* harmony import */ var powerbi_visuals_utils_tooltiputils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9472);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1539);










class Visual {
    target;
    formattingSettings;
    formattingSettingsService;
    SVG;
    width = 1000;
    height = 700;
    zoom;
    selectionManager;
    tooltipServiceWrapper;
    host;
    // private host: IvisualHost;
    path;
    g;
    constructor(options) {
        // console.log('Visual constructor', options);
        this.formattingSettingsService = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z();
        this.host = options.host;
        this.selectionManager = this.host.createSelectionManager();
        this.tooltipServiceWrapper = (0,powerbi_visuals_utils_tooltiputils__WEBPACK_IMPORTED_MODULE_5__/* .createTooltipServiceWrapper */ .p)(this.host.tooltipService, options.element);
        this.target = options.element;
        this.SVG = (0,d3__WEBPACK_IMPORTED_MODULE_0__/* .select */ .Ys)(this.target)
            .append("svg")
            .classed("SVG", true)
            .attr("width", this.width)
            // .style("display", this.formattingSettings.backgroundColor.showBackground.value ? "block" : "none")
            .attr("height", this.height);
        // let active = d3.select(null);
        // // const projection = d3.geoAlbersUsa().scale(1290).translate([this.width / 2, this.height / 2]);
        // const zoom = d3.zoom().scaleExtent([1, 8]).on("zoom", zoomed);
        // const path = d3.geoPath().projection(null);
        // this.SVG.append("rect")
        //   .attr("class", "background")
        //   .attr("width", this.width)
        //   .attr("height", this.height)
        //   .on("click", reset);
        // const g = this.SVG.append("g").style("stroke-width", "1.5px");
        // const us = statesJson;
        // const states = g
        //   .append("g")
        //   .selectAll("path")
        //   .data(topojson.feature(us, us.objects.states).features)
        //   .enter()
        //   .append("path")
        //   .attr("d", path)
        //   .attr("class", "feature")
        //   .on("click", (e, d) => clicked(d));
        // states.append("title").text((d) => d.properties.name);
        // g.append("path")
        //   .datum(topojson.mesh(us, us.objects.states, (a: any, b: any) => a !== b))
        //   .attr("class", "mesh")
        //   .attr("d", path);
        // function clicked(d) {
        //   if (active.node() === this) return reset();
        //   console.log(d);
        //   active.classed("active", false);
        //   active = d3.select(this).classed("active", true);
        //   var bounds = path.bounds(d),
        //     dx = bounds[1][0] - bounds[0][0],
        //     dy = bounds[1][1] - bounds[0][1],
        //     x = (bounds[0][0] + bounds[1][0]) / 2,
        //     y = (bounds[0][1] + bounds[1][1]) / 2,
        //     scale = Math.max(
        //       1,
        //       Math.min(8, 0.9 / Math.max(dx / this.width, dy / this.height))
        //     ),
        //     translate = [this.width / 2 - scale * x, this.height / 2 - scale * y];
        //   this.SVG.transition()
        //     .duration(750)
        //     .call(
        //       zoom.transform,
        //       d3.zoomIdentity.translate(translate[0], translate[1]).scale(scale)
        //     );
        // }
        // function reset() {
        //   active.classed("active", false);
        //   active = d3.select(null);
        //   this.SVG.transition().duration(750).call(zoom.transform, d3.zoomIdentity);
        // }
        // function zoomed(event) {
        //   g.style("stroke-width", 1.5 / event.transform.k + "px");
        //   g.attr("transform", event.transform);
        // }
        // function stopped(event) {
        //   if (event.defaultPrevented) event.stopPropagation();
        // }
    }
    update(options) {
        this.formattingSettings =
            this.formattingSettingsService.populateFormattingSettingsModel(_settings__WEBPACK_IMPORTED_MODULE_3__/* .VisualFormattingSettingsModel */ .E, options.dataViews);
        let active = d3__WEBPACK_IMPORTED_MODULE_0__/* .select */ .Ys(null);
        // const projection = d3.geoAlbersUsa().scale(1290).translate([this.width / 2, this.height / 2]);
        const zoom = d3__WEBPACK_IMPORTED_MODULE_0__/* .zoom */ .sPX().scaleExtent([1, 8]).on("zoom", zoomed);
        const path = d3__WEBPACK_IMPORTED_MODULE_0__/* .geoPath */ .l49().projection(null);
        this.SVG.append("rect")
            .attr("class", "background")
            .attr("width", this.width)
            .attr("height", this.height)
            .on("click", reset);
        const g = this.SVG.append("g").style("stroke-width", "1.5px");
        const us = _statesData__WEBPACK_IMPORTED_MODULE_2__/* .statesJson */ .O;
        const states = g
            .append("g")
            .selectAll("path")
            .classed("states", true)
            .data(topojson__WEBPACK_IMPORTED_MODULE_1__/* .feature */ .zL(us, us.objects.states).features)
            .enter()
            .append("path")
            .attr("d", path)
            .attr("class", "feature")
            .style("display", this.formattingSettings.mapView.showmapView.value ? "block" : "none")
            .on("click", (e, d) => clicked(d, category));
        states.append("title").text((d) => d.properties.name);
        g.append("path")
            .datum(topojson__WEBPACK_IMPORTED_MODULE_1__/* .mesh */ .WS(us, us.objects.states, (a, b) => a !== b))
            .attr("class", "mesh")
            .attr("d", path);
        function zoomed(event) {
            g.style("stroke-width", 1.5 / event.transform.k + "px");
            g.attr("transform", event.transform);
        }
        // function stopped(event) {
        //   if (event.defaultPrevented) event.stopPropagation();
        // }
        function getTooltipData(data) {
            let tooltipDataArray = [];
            tooltipDataArray.push({
                header: data.states,
                displayName: "Name",
                value: `${states.value}`,
            });
            return tooltipDataArray;
        }
        function handleContextMenu() {
            (0,d3__WEBPACK_IMPORTED_MODULE_0__/* .selectAll */ .td_)(".states").on("contextmenu", (event, dataPoint) => {
                const mouseEvent = event;
                this.selectionManager.showContextMenu(dataPoint ? dataPoint.selectionId : {}, {
                    x: mouseEvent.clientX,
                    y: mouseEvent.clientY,
                });
                mouseEvent.preventDefault();
            });
        }
        function syncSelectionState(Selection, selectionIds) {
            if (!Selection || !selectionIds) {
                return;
            }
            if (selectionIds.length === 0) {
                (0,d3__WEBPACK_IMPORTED_MODULE_0__/* .selectAll */ .td_)(".states").style("opacity", 1);
                return;
            }
            Selection.each((datapoint, i, e) => {
                const selectionId = datapoint.selectionId;
                const isSelected = selectionIds.some((currentSelectionId) => {
                    return currentSelectionId.includes(selectionId);
                });
                const opacity = isSelected ? 1 : 0.5;
                const currentSelection = (0,d3__WEBPACK_IMPORTED_MODULE_0__/* .select */ .Ys)(e[i]);
                currentSelection.style("opacity", opacity);
            });
        }
        const category = options.dataViews[0].categorical.categories[0];
        function clicked(d, category) {
            console.log(states);
            const stateName = d.properties.name;
            const categoryIndex = category.findIndex((el) => `${el}` === stateName);
            const categorySelectionId = this.host
                .createSelectionIdBuilder()
                .withCategory(category.us.geometries.id[0], categoryIndex)
                .createSelectionId();
            this.selectionManager.select(categorySelectionId);
            const datapoint = {
                state: d,
                selectionId: categorySelectionId,
            };
            states.data([datapoint]).on("click", (d) => {
                // console.log(d);
                this.selectionManager
                    .select(d.selectionId)
                    .then((ids) => {
                    syncSelectionState((0,d3__WEBPACK_IMPORTED_MODULE_0__/* .selectAll */ .td_)(".states"), ids);
                });
            });
            //   this.tooltipServiceWrapper.addTooltip(
            //     selectAll(".states"),
            //     (tooltipEvent: TooltipEventArgs<number>) =>
            //       getTooltipData(tooltipEvent),
            //     (tooltipEvent: any) => tooltipEvent.selectionId
            //   );
            //   handleContextMenu();
            // console.log("Visual update", options);
            ////**CLICK METHOD HERE ONWARDS**////
            // if (active.node() === this) return reset();
            // active.classed("active", false);
            // active = d3.select(this).classed("active", true);
            // var bounds = path.bounds(d),
            //   dx = bounds[1][0] - bounds[0][0],
            //   dy = bounds[1][1] - bounds[0][1],
            //   x = (bounds[0][0] + bounds[1][0]) / 2,
            //   y = (bounds[0][1] + bounds[1][1]) / 2,
            //   scale = Math.max(
            //     1,
            //     Math.min(8, 0.9 / Math.max(dx / this.width, dy / this.height))
            //   ),
            //   translate = [this.width / 2 - scale * x, this.height / 2 - scale * y];
            // this.SVG.transition()
            //   .duration(750)
            //   .call(
            //     zoom.transform,
            //     d3.zoomIdentity.translate(translate[0], translate[1]).scale(scale)
            //   );
        }
        function reset() {
            active.classed("active", false);
            active = d3__WEBPACK_IMPORTED_MODULE_0__/* .select */ .Ys(null);
            this.SVG.transition()
                .duration(750)
                .call(zoom.transform, d3__WEBPACK_IMPORTED_MODULE_0__/* .zoomIdentity */ .CRH);
        }
    }
    /**
     * Returns properties pane formatting model content hierarchies, properties and latest formatting values, Then populate properties pane.
     * This method is called once every time we open properties pane or when the user edit any format property.
     */
    getFormattingModel() {
        return this.formattingSettingsService.buildFormattingModel(this.formattingSettings);
    }
}


/***/ }),

/***/ 706:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hn: () => (/* binding */ Model),
/* harmony export */   L_: () => (/* binding */ NumUpDown),
/* harmony export */   Zb: () => (/* binding */ Card),
/* harmony export */   Zh: () => (/* binding */ ToggleSwitch),
/* harmony export */   zH: () => (/* binding */ ColorPicker)
/* harmony export */ });
/* unused harmony exports SimpleSlice, AlignmentGroup, Slider, DatePicker, ItemDropdown, AutoDropdown, DurationPicker, ErrorRangeControl, FieldPicker, ItemFlagsSelection, AutoFlagsSelection, TextInput, TextArea, FontPicker, GradientBar, ImageUpload, ListEditor, ReadOnlyText, ShapeMapSelector, CompositeSlice, FontControl, MarginPadding, Container, ContainerItem */
/* harmony import */ var _utils_FormattingSettingsUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3827);
/**
 * Powerbi utils components classes for custom visual formatting pane objects
 *
 */

class NamedEntity {
}
class Model {
}
class Card extends NamedEntity {
    getFormattingCard(objectName, group, localizationManager) {
        return {
            displayName: (localizationManager && this.displayNameKey)
                ? localizationManager.getDisplayName(this.displayNameKey) : this.displayName,
            description: (localizationManager && this.descriptionKey)
                ? localizationManager.getDisplayName(this.descriptionKey) : this.description,
            groups: [group],
            uid: objectName,
            analyticsPane: this.analyticsPane
        };
    }
}
class SimpleSlice extends NamedEntity {
    constructor(object) {
        super();
        Object.assign(this, object);
    }
    getFormattingSlice(objectName, localizationManager) {
        const controlType = this.type;
        const propertyName = this.name;
        const sliceDisplayName = (localizationManager && this.displayNameKey) ? localizationManager.getDisplayName(this.displayNameKey) : this.displayName;
        const sliceDescription = (localizationManager && this.descriptionKey) ? localizationManager.getDisplayName(this.descriptionKey) : this.description;
        const componentDisplayName = {
            displayName: sliceDisplayName,
            description: sliceDescription,
            uid: objectName + '-' + propertyName,
        };
        return Object.assign(Object.assign({}, componentDisplayName), { control: {
                type: controlType,
                properties: this.getFormattingComponent(objectName, localizationManager)
            } });
    }
    getFormattingComponent(objectName, localizationManager) {
        return {
            descriptor: _utils_FormattingSettingsUtils__WEBPACK_IMPORTED_MODULE_0__/* .getDescriptor */ .B(objectName, this),
            value: this.value,
        };
    }
    getRevertToDefaultDescriptor(objectName) {
        return [{
                objectName: objectName,
                propertyName: this.name
            }];
    }
    setPropertiesValues(dataViewObjects, objectName) {
        var _a;
        let newValue = (_a = dataViewObjects === null || dataViewObjects === void 0 ? void 0 : dataViewObjects[objectName]) === null || _a === void 0 ? void 0 : _a[this.name];
        this.value = _utils_FormattingSettingsUtils__WEBPACK_IMPORTED_MODULE_0__/* .getPropertyValue */ .S(this, newValue, this.value);
    }
}
class AlignmentGroup extends (/* unused pure expression or super */ null && (SimpleSlice)) {
    constructor(object) {
        super(object);
        this.type = "AlignmentGroup" /* visuals.FormattingComponent.AlignmentGroup */;
    }
    getFormattingComponent(objectName) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { mode: this.mode, supportsNoSelection: this.supportsNoSelection });
    }
}
class ToggleSwitch extends SimpleSlice {
    constructor(object) {
        super(object);
        this.type = "ToggleSwitch" /* visuals.FormattingComponent.ToggleSwitch */;
    }
}
class ColorPicker extends SimpleSlice {
    constructor(object) {
        super(object);
        this.type = "ColorPicker" /* visuals.FormattingComponent.ColorPicker */;
    }
    getFormattingComponent(objectName) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { defaultColor: this.defaultColor, isNoFillItemSupported: this.isNoFillItemSupported });
    }
}
class NumUpDown extends SimpleSlice {
    constructor(object) {
        super(object);
        this.type = "NumUpDown" /* visuals.FormattingComponent.NumUpDown */;
    }
    getFormattingComponent(objectName) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { options: this.options });
    }
}
class Slider extends (/* unused pure expression or super */ null && (NumUpDown)) {
    constructor() {
        super(...arguments);
        this.type = "Slider" /* visuals.FormattingComponent.Slider */;
    }
}
class DatePicker extends (/* unused pure expression or super */ null && (SimpleSlice)) {
    constructor(object) {
        super(object);
        this.type = "DatePicker" /* visuals.FormattingComponent.DatePicker */;
    }
    getFormattingComponent(objectName, localizationManager) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { placeholder: (localizationManager && this.placeholderKey) ? localizationManager.getDisplayName(this.placeholderKey) : this.placeholder, validators: this.validators });
    }
}
class ItemDropdown extends (/* unused pure expression or super */ null && (SimpleSlice)) {
    constructor(object) {
        super(object);
        this.type = "Dropdown" /* visuals.FormattingComponent.Dropdown */;
    }
    getFormattingComponent(objectName) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { items: this.items });
    }
}
class AutoDropdown extends (/* unused pure expression or super */ null && (SimpleSlice)) {
    constructor(object) {
        super(object);
        this.type = "Dropdown" /* visuals.FormattingComponent.Dropdown */;
    }
    getFormattingComponent(objectName) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { mergeValues: this.mergeValues, filterValues: this.filterValues });
    }
}
class DurationPicker extends (/* unused pure expression or super */ null && (SimpleSlice)) {
    constructor(object) {
        super(object);
        this.type = "DurationPicker" /* visuals.FormattingComponent.DurationPicker */;
    }
    getFormattingComponent(objectName) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { validators: this.validators });
    }
}
class ErrorRangeControl extends (/* unused pure expression or super */ null && (SimpleSlice)) {
    constructor(object) {
        super(object);
        this.type = "ErrorRangeControl" /* visuals.FormattingComponent.ErrorRangeControl */;
    }
    getFormattingComponent(objectName) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { validators: this.validators });
    }
}
class FieldPicker extends (/* unused pure expression or super */ null && (SimpleSlice)) {
    constructor(object) {
        super(object);
        this.type = "FieldPicker" /* visuals.FormattingComponent.FieldPicker */;
    }
    getFormattingComponent(objectName) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { validators: this.validators, allowMultipleValues: this.allowMultipleValues });
    }
}
class ItemFlagsSelection extends (/* unused pure expression or super */ null && (SimpleSlice)) {
    constructor(object) {
        super(object);
        this.type = "FlagsSelection" /* visuals.FormattingComponent.FlagsSelection */;
    }
    getFormattingComponent(objectName) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { items: this.items });
    }
}
class AutoFlagsSelection extends (/* unused pure expression or super */ null && (SimpleSlice)) {
    constructor() {
        super(...arguments);
        this.type = "FlagsSelection" /* visuals.FormattingComponent.FlagsSelection */;
    }
}
class TextInput extends (/* unused pure expression or super */ null && (SimpleSlice)) {
    constructor(object) {
        super(object);
        this.type = "TextInput" /* visuals.FormattingComponent.TextInput */;
    }
    getFormattingComponent(objectName) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { placeholder: this.placeholder });
    }
}
class TextArea extends (/* unused pure expression or super */ null && (TextInput)) {
    constructor() {
        super(...arguments);
        this.type = "TextArea" /* visuals.FormattingComponent.TextArea */;
    }
}
class FontPicker extends (/* unused pure expression or super */ null && (SimpleSlice)) {
    constructor() {
        super(...arguments);
        this.type = "FontPicker" /* visuals.FormattingComponent.FontPicker */;
    }
}
class GradientBar extends (/* unused pure expression or super */ null && (SimpleSlice)) {
    constructor() {
        super(...arguments);
        this.type = "GradientBar" /* visuals.FormattingComponent.GradientBar */;
    }
}
class ImageUpload extends (/* unused pure expression or super */ null && (SimpleSlice)) {
    constructor() {
        super(...arguments);
        this.type = "ImageUpload" /* visuals.FormattingComponent.ImageUpload */;
    }
}
class ListEditor extends (/* unused pure expression or super */ null && (SimpleSlice)) {
    constructor() {
        super(...arguments);
        this.type = "ListEditor" /* visuals.FormattingComponent.ListEditor */;
    }
}
class ReadOnlyText extends (/* unused pure expression or super */ null && (SimpleSlice)) {
    constructor() {
        super(...arguments);
        this.type = "ReadOnlyText" /* visuals.FormattingComponent.ReadOnlyText */;
    }
}
class ShapeMapSelector extends (/* unused pure expression or super */ null && (SimpleSlice)) {
    constructor(object) {
        super(object);
        this.type = "ShapeMapSelector" /* visuals.FormattingComponent.ShapeMapSelector */;
    }
    getFormattingComponent(objectName) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { isAzMapReferenceSelector: this.isAzMapReferenceSelector });
    }
}
class CompositeSlice extends (/* unused pure expression or super */ null && (NamedEntity)) {
    constructor(object) {
        super();
        Object.assign(this, object);
    }
    getFormattingSlice(objectName) {
        const controlType = this.type;
        const propertyName = this.name;
        const componentDisplayName = {
            displayName: this.displayName,
            description: this.description,
            uid: objectName + '-' + propertyName,
        };
        return Object.assign(Object.assign({}, componentDisplayName), { control: {
                type: controlType,
                properties: this.getFormattingComponent(objectName)
            } });
    }
}
class FontControl extends (/* unused pure expression or super */ null && (CompositeSlice)) {
    constructor(object) {
        super(object);
        this.type = "FontControl" /* visuals.FormattingComponent.FontControl */;
    }
    getFormattingComponent(objectName) {
        var _a, _b, _c;
        return {
            fontFamily: this.fontFamily.getFormattingComponent(objectName),
            fontSize: this.fontSize.getFormattingComponent(objectName),
            bold: (_a = this.bold) === null || _a === void 0 ? void 0 : _a.getFormattingComponent(objectName),
            italic: (_b = this.italic) === null || _b === void 0 ? void 0 : _b.getFormattingComponent(objectName),
            underline: (_c = this.underline) === null || _c === void 0 ? void 0 : _c.getFormattingComponent(objectName)
        };
    }
    getRevertToDefaultDescriptor(objectName) {
        return this.fontFamily.getRevertToDefaultDescriptor(objectName)
            .concat(this.fontSize.getRevertToDefaultDescriptor(objectName))
            .concat(this.bold ? this.bold.getRevertToDefaultDescriptor(objectName) : [])
            .concat(this.italic ? this.italic.getRevertToDefaultDescriptor(objectName) : [])
            .concat(this.underline ? this.underline.getRevertToDefaultDescriptor(objectName) : []);
    }
    setPropertiesValues(dataViewObjects, objectName) {
        var _a, _b, _c;
        this.fontFamily.setPropertiesValues(dataViewObjects, objectName);
        this.fontSize.setPropertiesValues(dataViewObjects, objectName);
        (_a = this.bold) === null || _a === void 0 ? void 0 : _a.setPropertiesValues(dataViewObjects, objectName);
        (_b = this.italic) === null || _b === void 0 ? void 0 : _b.setPropertiesValues(dataViewObjects, objectName);
        (_c = this.underline) === null || _c === void 0 ? void 0 : _c.setPropertiesValues(dataViewObjects, objectName);
    }
}
class MarginPadding extends (/* unused pure expression or super */ null && (CompositeSlice)) {
    constructor(object) {
        super(object);
        this.type = "MarginPadding" /* visuals.FormattingComponent.MarginPadding */;
    }
    getFormattingComponent(objectName) {
        return {
            left: this.left.getFormattingComponent(objectName),
            right: this.right.getFormattingComponent(objectName),
            top: this.top.getFormattingComponent(objectName),
            bottom: this.bottom.getFormattingComponent(objectName)
        };
    }
    getRevertToDefaultDescriptor(objectName) {
        return this.left.getRevertToDefaultDescriptor(objectName)
            .concat(this.right.getRevertToDefaultDescriptor(objectName))
            .concat(this.top.getRevertToDefaultDescriptor(objectName))
            .concat(this.bottom.getRevertToDefaultDescriptor(objectName));
    }
    setPropertiesValues(dataViewObjects, objectName) {
        this.left.setPropertiesValues(dataViewObjects, objectName);
        this.right.setPropertiesValues(dataViewObjects, objectName);
        this.top.setPropertiesValues(dataViewObjects, objectName);
        this.bottom.setPropertiesValues(dataViewObjects, objectName);
    }
}
class Container extends (/* unused pure expression or super */ null && (NamedEntity)) {
}
class ContainerItem extends (/* unused pure expression or super */ null && (NamedEntity)) {
}
//# sourceMappingURL=FormattingSettingsComponents.js.map

/***/ }),

/***/ 4261:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export FormattingSettingsService */
class FormattingSettingsService {
    constructor(localizationManager) {
        this.localizationManager = localizationManager;
    }
    /**
     * Build visual formatting settings model from metadata dataView
     *
     * @param dataViews metadata dataView object
     * @returns visual formatting settings model
     */
    populateFormattingSettingsModel(typeClass, dataViews) {
        var _a, _b, _c;
        let defaultSettings = new typeClass();
        let dataViewObjects = (_b = (_a = dataViews === null || dataViews === void 0 ? void 0 : dataViews[0]) === null || _a === void 0 ? void 0 : _a.metadata) === null || _b === void 0 ? void 0 : _b.objects;
        if (dataViewObjects) {
            // loop over each formatting property and set its new value if exists
            (_c = defaultSettings.cards) === null || _c === void 0 ? void 0 : _c.forEach((card) => {
                var _a, _b, _c;
                (_a = card === null || card === void 0 ? void 0 : card.slices) === null || _a === void 0 ? void 0 : _a.forEach((slice) => {
                    slice === null || slice === void 0 ? void 0 : slice.setPropertiesValues(dataViewObjects, card.name);
                });
                (_c = (_b = card === null || card === void 0 ? void 0 : card.container) === null || _b === void 0 ? void 0 : _b.containerItems) === null || _c === void 0 ? void 0 : _c.forEach((containerItem) => {
                    var _a;
                    (_a = containerItem === null || containerItem === void 0 ? void 0 : containerItem.slices) === null || _a === void 0 ? void 0 : _a.forEach((slice) => {
                        slice === null || slice === void 0 ? void 0 : slice.setPropertiesValues(dataViewObjects, card.name);
                    });
                });
            });
        }
        return defaultSettings;
    }
    /**
     * Build formatting model by parsing formatting settings model object
     *
     * @returns powerbi visual formatting model
     */
    buildFormattingModel(formattingSettingsModel) {
        var _a;
        let formattingModel = {
            cards: []
        };
        (_a = formattingSettingsModel.cards) === null || _a === void 0 ? void 0 : _a.forEach((card) => {
            if (!card)
                return;
            const objectName = card.name;
            const groupUid = card.name + "-group";
            let formattingGroup = {
                displayName: undefined,
                slices: [],
                uid: groupUid
            };
            let formattingCard = card.getFormattingCard(objectName, formattingGroup, this.localizationManager);
            formattingModel.cards.push(formattingCard);
            // In case formatting model adds data points or top categories (Like when you modify specific visual category color).
            // these categories use same object name and property name from capabilities and the generated uid will be the same for these formatting categories properties
            // Solution => Save slice names to modify each slice uid to be unique by adding counter value to the new slice uid
            const sliceNames = {};
            // Build formatting container slice for each property
            if (card.container) {
                const container = card.container;
                const containerUid = groupUid + "-container";
                const formattingContainer = {
                    displayName: (this.localizationManager && container.displayNameKey)
                        ? this.localizationManager.getDisplayName(container.displayNameKey) : container.displayName,
                    description: (this.localizationManager && container.descriptionKey)
                        ? this.localizationManager.getDisplayName(container.descriptionKey) : container.description,
                    containerItems: [],
                    uid: containerUid
                };
                container.containerItems.forEach((containerItem) => {
                    // Build formatting container item object
                    const containerIemName = containerItem.displayNameKey ? containerItem.displayNameKey : containerItem.displayName;
                    const containerItemUid = containerUid + containerIemName;
                    let formattingContainerItem = {
                        displayName: (this.localizationManager && containerItem.displayNameKey)
                            ? this.localizationManager.getDisplayName(containerItem.displayNameKey) : containerItem.displayName,
                        slices: [],
                        uid: containerItemUid
                    };
                    // Build formatting slices and add them to current formatting container item
                    this.buildFormattingSlices(containerItem.slices, objectName, sliceNames, formattingCard, formattingContainerItem.slices);
                    formattingContainer.containerItems.push(formattingContainerItem);
                });
                formattingGroup.container = formattingContainer;
            }
            if (card.slices) {
                // Build formatting slice for each property
                this.buildFormattingSlices(card.slices, objectName, sliceNames, formattingCard, formattingGroup.slices);
            }
            formattingCard.revertToDefaultDescriptors = this.getRevertToDefaultDescriptor(card);
        });
        return formattingModel;
    }
    buildFormattingSlices(slices, objectName, sliceNames, formattingCard, formattingSlices) {
        slices === null || slices === void 0 ? void 0 : slices.forEach((slice) => {
            let formattingSlice = slice === null || slice === void 0 ? void 0 : slice.getFormattingSlice(objectName, this.localizationManager);
            if (formattingSlice) {
                // Modify formatting slice uid if needed
                if (sliceNames[slice.name] === undefined) {
                    sliceNames[slice.name] = 0;
                }
                else {
                    sliceNames[slice.name]++;
                    formattingSlice.uid = `${formattingSlice.uid}-${sliceNames[slice.name]}`;
                }
                // Set as topLevelToggle if topLevelToggle boolean was set to true
                if (slice.topLevelToggle) {
                    formattingSlice.suppressDisplayName = true;
                    formattingCard.topLevelToggle = formattingSlice;
                }
                else {
                    formattingSlices.push(formattingSlice);
                }
            }
        });
    }
    getRevertToDefaultDescriptor(card) {
        var _a, _b;
        // Proceeded slice names are saved to prevent duplicated default descriptors in case of using 
        // formatting categories & selectors, since they have the same descriptor objectName and propertyName
        const sliceNames = {};
        let revertToDefaultDescriptors = [];
        let cardSlicesDefaultDescriptors = this.getSlicesRevertToDefaultDescriptor(card.name, card.slices, sliceNames);
        let cardContainerSlicesDefaultDescriptors = [];
        (_b = (_a = card.container) === null || _a === void 0 ? void 0 : _a.containerItems) === null || _b === void 0 ? void 0 : _b.forEach((containerItem) => {
            cardContainerSlicesDefaultDescriptors = cardContainerSlicesDefaultDescriptors.concat(this.getSlicesRevertToDefaultDescriptor(card.name, containerItem.slices, sliceNames));
        });
        revertToDefaultDescriptors = cardSlicesDefaultDescriptors.concat(cardContainerSlicesDefaultDescriptors);
        return revertToDefaultDescriptors;
    }
    getSlicesRevertToDefaultDescriptor(cardName, slices, sliceNames) {
        let revertToDefaultDescriptors = [];
        slices === null || slices === void 0 ? void 0 : slices.forEach((slice) => {
            if (slice && !sliceNames[slice.name]) {
                sliceNames[slice.name] = true;
                revertToDefaultDescriptors = revertToDefaultDescriptors.concat(slice.getRevertToDefaultDescriptor(cardName));
            }
        });
        return revertToDefaultDescriptors;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormattingSettingsService);
//# sourceMappingURL=FormattingSettingsService.js.map

/***/ }),

/***/ 3827:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ getDescriptor),
/* harmony export */   S: () => (/* binding */ getPropertyValue)
/* harmony export */ });
/**
 * Build and return formatting descriptor for simple slice
 *
 * @param objectName Object name from capabilities
 * @param slice formatting simple slice
 * @returns simple slice formatting descriptor
 */
function getDescriptor(objectName, slice) {
    return {
        objectName: objectName,
        propertyName: slice.name,
        selector: slice.selector,
        altConstantValueSelector: slice.altConstantSelector,
        instanceKind: slice.instanceKind
    };
}
/**
 * Get property value from dataview objects if exists
 * Else return the default value from formatting settings object
 *
 * @param value dataview object value
 * @param defaultValue formatting settings default value
 * @returns formatting property value
 */
function getPropertyValue(slice, value, defaultValue) {
    if (value == null || (typeof value === "object" && !value.solid)) {
        return defaultValue;
    }
    if (value.solid) {
        return { value: value === null || value === void 0 ? void 0 : value.solid.color };
    }
    if (slice === null || slice === void 0 ? void 0 : slice.items) {
        let itemsArray = slice.items;
        return itemsArray.find(item => item.value == value);
    }
    return value;
}
//# sourceMappingURL=FormattingSettingsUtils.js.map

/***/ }),

/***/ 8297:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ DefaultHandleTouchDelay)
/* harmony export */ });
const DefaultHandleTouchDelay = 500;
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 9472:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ createTooltipServiceWrapper)
/* harmony export */ });
/* unused harmony export TooltipServiceWrapper */
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4264);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8297);


function createTooltipServiceWrapper(tooltipService, rootElement, // this argument is deprecated and is optional now, just to maintain visuals with tooltiputils logic written for versions bellow 3.0.0
handleTouchDelay = _constants__WEBPACK_IMPORTED_MODULE_0__/* .DefaultHandleTouchDelay */ .a) {
    return new TooltipServiceWrapper({
        tooltipService: tooltipService,
        handleTouchDelay: handleTouchDelay,
    });
}
class TooltipServiceWrapper {
    constructor(options) {
        this.visualHostTooltipService = options.tooltipService;
        this.handleTouchDelay = options.handleTouchDelay;
    }
    addTooltip(selection, getTooltipInfoDelegate, getDataPointIdentity, reloadTooltipDataOnMouseMove) {
        if (!selection || !this.visualHostTooltipService.enabled()) {
            return;
        }
        const internalSelection = (0,d3_selection__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(selection.nodes());
        const callTooltip = (func, event, tooltipInfo, selectionIds) => {
            const coordinates = [event.clientX, event.clientY];
            func.call(this.visualHostTooltipService, {
                coordinates: coordinates,
                isTouchEvent: event.pointerType === "touch",
                dataItems: tooltipInfo,
                identities: selectionIds
            });
        };
        internalSelection.on("pointerover", (event, data) => {
            const tooltipInfo = getTooltipInfoDelegate(data);
            if (tooltipInfo == null) {
                return;
            }
            const selectionIds = getDataPointIdentity ? [getDataPointIdentity(data)] : [];
            if (event.pointerType === "mouse") {
                callTooltip(this.visualHostTooltipService.show, event, tooltipInfo, selectionIds);
            }
            if (event.pointerType === "touch") {
                this.handleTouchTimeoutId = window.setTimeout(() => {
                    callTooltip(this.visualHostTooltipService.show, event, tooltipInfo, selectionIds);
                    this.handleTouchTimeoutId = undefined;
                }, this.handleTouchDelay);
            }
        });
        internalSelection.on("pointerout", (event) => {
            if (event.pointerType === "mouse") {
                this.visualHostTooltipService.hide({
                    isTouchEvent: false,
                    immediately: false,
                });
            }
            if (event.pointerType === "touch") {
                this.cancelTouchTimeoutEvents();
            }
        });
        internalSelection.on("pointermove", (event, data) => {
            if (event.pointerType === "mouse") {
                let tooltipInfo;
                if (reloadTooltipDataOnMouseMove) {
                    tooltipInfo = getTooltipInfoDelegate(data);
                    if (tooltipInfo == null) {
                        return;
                    }
                }
                const selectionIds = getDataPointIdentity ? [getDataPointIdentity(data)] : [];
                callTooltip(this.visualHostTooltipService.move, event, tooltipInfo, selectionIds);
            }
        });
    }
    cancelTouchTimeoutEvents() {
        if (this.handleTouchTimeoutId) {
            clearTimeout(this.handleTouchTimeoutId);
        }
    }
    hide() {
        this.visualHostTooltipService.hide({ immediately: true, isTouchEvent: false });
    }
}
//# sourceMappingURL=tooltipService.js.map

/***/ }),

/***/ 6724:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WS: () => (/* reexport safe */ _src_mesh__WEBPACK_IMPORTED_MODULE_1__.Z),
/* harmony export */   zL: () => (/* reexport safe */ _src_feature__WEBPACK_IMPORTED_MODULE_0__.ZP)
/* harmony export */ });
/* harmony import */ var _src_feature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9986);
/* harmony import */ var _src_mesh__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5269);










/***/ }),

/***/ 9986:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ry: () => (/* binding */ object),
/* harmony export */   ZP: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export feature */
/* harmony import */ var _reverse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5126);
/* harmony import */ var _transform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2765);



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(topology, o) {
  return o.type === "GeometryCollection"
      ? {type: "FeatureCollection", features: o.geometries.map(function(o) { return feature(topology, o); })}
      : feature(topology, o);
}

function feature(topology, o) {
  var id = o.id,
      bbox = o.bbox,
      properties = o.properties == null ? {} : o.properties,
      geometry = object(topology, o);
  return id == null && bbox == null ? {type: "Feature", properties: properties, geometry: geometry}
      : bbox == null ? {type: "Feature", id: id, properties: properties, geometry: geometry}
      : {type: "Feature", id: id, bbox: bbox, properties: properties, geometry: geometry};
}

function object(topology, o) {
  var transformPoint = (0,_transform__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(topology.transform),
      arcs = topology.arcs;

  function arc(i, points) {
    if (points.length) points.pop();
    for (var a = arcs[i < 0 ? ~i : i], k = 0, n = a.length; k < n; ++k) {
      points.push(transformPoint(a[k], k));
    }
    if (i < 0) (0,_reverse__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(points, n);
  }

  function point(p) {
    return transformPoint(p);
  }

  function line(arcs) {
    var points = [];
    for (var i = 0, n = arcs.length; i < n; ++i) arc(arcs[i], points);
    if (points.length < 2) points.push(points[0]); // This should never happen per the specification.
    return points;
  }

  function ring(arcs) {
    var points = line(arcs);
    while (points.length < 4) points.push(points[0]); // This may happen if an arc has only two points.
    return points;
  }

  function polygon(arcs) {
    return arcs.map(ring);
  }

  function geometry(o) {
    var type = o.type, coordinates;
    switch (type) {
      case "GeometryCollection": return {type: type, geometries: o.geometries.map(geometry)};
      case "Point": coordinates = point(o.coordinates); break;
      case "MultiPoint": coordinates = o.coordinates.map(point); break;
      case "LineString": coordinates = line(o.arcs); break;
      case "MultiLineString": coordinates = o.arcs.map(line); break;
      case "Polygon": coordinates = polygon(o.arcs); break;
      case "MultiPolygon": coordinates = o.arcs.map(polygon); break;
      default: return null;
    }
    return {type: type, coordinates: coordinates};
  }

  return geometry(o);
}


/***/ }),

/***/ 7645:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(x) {
  return x;
}


/***/ }),

/***/ 5269:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export meshArcs */
/* harmony import */ var _feature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9986);
/* harmony import */ var _stitch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(406);



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(topology) {
  return (0,_feature__WEBPACK_IMPORTED_MODULE_0__/* .object */ .Ry)(topology, meshArcs.apply(this, arguments));
}

function meshArcs(topology, object, filter) {
  var arcs, i, n;
  if (arguments.length > 1) arcs = extractArcs(topology, object, filter);
  else for (i = 0, arcs = new Array(n = topology.arcs.length); i < n; ++i) arcs[i] = i;
  return {type: "MultiLineString", arcs: (0,_stitch__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(topology, arcs)};
}

function extractArcs(topology, object, filter) {
  var arcs = [],
      geomsByArc = [],
      geom;

  function extract0(i) {
    var j = i < 0 ? ~i : i;
    (geomsByArc[j] || (geomsByArc[j] = [])).push({i: i, g: geom});
  }

  function extract1(arcs) {
    arcs.forEach(extract0);
  }

  function extract2(arcs) {
    arcs.forEach(extract1);
  }

  function extract3(arcs) {
    arcs.forEach(extract2);
  }

  function geometry(o) {
    switch (geom = o, o.type) {
      case "GeometryCollection": o.geometries.forEach(geometry); break;
      case "LineString": extract1(o.arcs); break;
      case "MultiLineString": case "Polygon": extract2(o.arcs); break;
      case "MultiPolygon": extract3(o.arcs); break;
    }
  }

  geometry(object);

  geomsByArc.forEach(filter == null
      ? function(geoms) { arcs.push(geoms[0].i); }
      : function(geoms) { if (filter(geoms[0].g, geoms[geoms.length - 1].g)) arcs.push(geoms[0].i); });

  return arcs;
}


/***/ }),

/***/ 5126:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(array, n) {
  var t, j = array.length, i = j - n;
  while (i < --j) t = array[i], array[i++] = array[j], array[j] = t;
}


/***/ }),

/***/ 406:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(topology, arcs) {
  var stitchedArcs = {},
      fragmentByStart = {},
      fragmentByEnd = {},
      fragments = [],
      emptyIndex = -1;

  // Stitch empty arcs first, since they may be subsumed by other arcs.
  arcs.forEach(function(i, j) {
    var arc = topology.arcs[i < 0 ? ~i : i], t;
    if (arc.length < 3 && !arc[1][0] && !arc[1][1]) {
      t = arcs[++emptyIndex], arcs[emptyIndex] = i, arcs[j] = t;
    }
  });

  arcs.forEach(function(i) {
    var e = ends(i),
        start = e[0],
        end = e[1],
        f, g;

    if (f = fragmentByEnd[start]) {
      delete fragmentByEnd[f.end];
      f.push(i);
      f.end = end;
      if (g = fragmentByStart[end]) {
        delete fragmentByStart[g.start];
        var fg = g === f ? f : f.concat(g);
        fragmentByStart[fg.start = f.start] = fragmentByEnd[fg.end = g.end] = fg;
      } else {
        fragmentByStart[f.start] = fragmentByEnd[f.end] = f;
      }
    } else if (f = fragmentByStart[end]) {
      delete fragmentByStart[f.start];
      f.unshift(i);
      f.start = start;
      if (g = fragmentByEnd[start]) {
        delete fragmentByEnd[g.end];
        var gf = g === f ? f : g.concat(f);
        fragmentByStart[gf.start = g.start] = fragmentByEnd[gf.end = f.end] = gf;
      } else {
        fragmentByStart[f.start] = fragmentByEnd[f.end] = f;
      }
    } else {
      f = [i];
      fragmentByStart[f.start = start] = fragmentByEnd[f.end = end] = f;
    }
  });

  function ends(i) {
    var arc = topology.arcs[i < 0 ? ~i : i], p0 = arc[0], p1;
    if (topology.transform) p1 = [0, 0], arc.forEach(function(dp) { p1[0] += dp[0], p1[1] += dp[1]; });
    else p1 = arc[arc.length - 1];
    return i < 0 ? [p1, p0] : [p0, p1];
  }

  function flush(fragmentByEnd, fragmentByStart) {
    for (var k in fragmentByEnd) {
      var f = fragmentByEnd[k];
      delete fragmentByStart[f.start];
      delete f.start;
      delete f.end;
      f.forEach(function(i) { stitchedArcs[i < 0 ? ~i : i] = 1; });
      fragments.push(f);
    }
  }

  flush(fragmentByEnd, fragmentByStart);
  flush(fragmentByStart, fragmentByEnd);
  arcs.forEach(function(i) { if (!stitchedArcs[i < 0 ? ~i : i]) fragments.push([i]); });

  return fragments;
}


/***/ }),

/***/ 2765:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7645);


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(transform) {
  if (transform == null) return _identity__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z;
  var x0,
      y0,
      kx = transform.scale[0],
      ky = transform.scale[1],
      dx = transform.translate[0],
      dy = transform.translate[1];
  return function(input, i) {
    if (!i) x0 = y0 = 0;
    var j = 2, n = input.length, output = new Array(n);
    output[0] = (x0 += input[0]) * kx + dx;
    output[1] = (y0 += input[1]) * ky + dy;
    while (j < n) output[j] = input[j], ++j;
    return output;
  };
}


/***/ }),

/***/ 60:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _src_topology__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5443);



/***/ }),

/***/ 8129:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _join__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1818);


// Given an extracted (pre-)topology, cuts (or rotates) arcs so that all shared
// point sequences are identified. The topology can then be subsequently deduped
// to remove exact duplicate arcs.
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(topology) {
  var junctions = join(topology),
      coordinates = topology.coordinates,
      lines = topology.lines,
      rings = topology.rings,
      next,
      i, n;

  for (i = 0, n = lines.length; i < n; ++i) {
    var line = lines[i],
        lineMid = line[0],
        lineEnd = line[1];
    while (++lineMid < lineEnd) {
      if (junctions.has(coordinates[lineMid])) {
        next = {0: lineMid, 1: line[1]};
        line[1] = lineMid;
        line = line.next = next;
      }
    }
  }

  for (i = 0, n = rings.length; i < n; ++i) {
    var ring = rings[i],
        ringStart = ring[0],
        ringMid = ringStart,
        ringEnd = ring[1],
        ringFixed = junctions.has(coordinates[ringStart]);
    while (++ringMid < ringEnd) {
      if (junctions.has(coordinates[ringMid])) {
        if (ringFixed) {
          next = {0: ringMid, 1: ring[1]};
          ring[1] = ringMid;
          ring = ring.next = next;
        } else { // For the first junction, we can rotate rather than cut.
          rotateArray(coordinates, ringStart, ringEnd, ringEnd - ringMid);
          coordinates[ringEnd] = coordinates[ringStart];
          ringFixed = true;
          ringMid = ringStart; // restart; we may have skipped junctions
        }
      }
    }
  }

  return topology;
}

function rotateArray(array, start, end, offset) {
  reverse(array, start, end);
  reverse(array, start, start + offset);
  reverse(array, start + offset, end);
}

function reverse(array, start, end) {
  for (var mid = start + ((end-- - start) >> 1), t; start < mid; ++start, --end) {
    t = array[start], array[start] = array[end], array[end] = t;
  }
}


/***/ }),

/***/ 1953:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _hash_point_hash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7509);




// Given a cut topology, combines duplicate arcs.
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(topology) {
  var coordinates = topology.coordinates,
      lines = topology.lines, line,
      rings = topology.rings, ring,
      arcCount = lines.length + rings.length,
      i, n;

  delete topology.lines;
  delete topology.rings;

  // Count the number of (non-unique) arcs to initialize the hashmap safely.
  for (i = 0, n = lines.length; i < n; ++i) {
    line = lines[i]; while (line = line.next) ++arcCount;
  }
  for (i = 0, n = rings.length; i < n; ++i) {
    ring = rings[i]; while (ring = ring.next) ++arcCount;
  }

  var arcsByEnd = hashmap(arcCount * 2 * 1.4, hashPoint, equalPoint),
      arcs = topology.arcs = [];

  for (i = 0, n = lines.length; i < n; ++i) {
    line = lines[i];
    do {
      dedupLine(line);
    } while (line = line.next);
  }

  for (i = 0, n = rings.length; i < n; ++i) {
    ring = rings[i];
    if (ring.next) { // arc is no longer closed
      do {
        dedupLine(ring);
      } while (ring = ring.next);
    } else {
      dedupRing(ring);
    }
  }

  function dedupLine(arc) {
    var startPoint,
        endPoint,
        startArcs, startArc,
        endArcs, endArc,
        i, n;

    // Does this arc match an existing arc in order?
    if (startArcs = arcsByEnd.get(startPoint = coordinates[arc[0]])) {
      for (i = 0, n = startArcs.length; i < n; ++i) {
        startArc = startArcs[i];
        if (equalLine(startArc, arc)) {
          arc[0] = startArc[0];
          arc[1] = startArc[1];
          return;
        }
      }
    }

    // Does this arc match an existing arc in reverse order?
    if (endArcs = arcsByEnd.get(endPoint = coordinates[arc[1]])) {
      for (i = 0, n = endArcs.length; i < n; ++i) {
        endArc = endArcs[i];
        if (reverseEqualLine(endArc, arc)) {
          arc[1] = endArc[0];
          arc[0] = endArc[1];
          return;
        }
      }
    }

    if (startArcs) startArcs.push(arc); else arcsByEnd.set(startPoint, [arc]);
    if (endArcs) endArcs.push(arc); else arcsByEnd.set(endPoint, [arc]);
    arcs.push(arc);
  }

  function dedupRing(arc) {
    var endPoint,
        endArcs,
        endArc,
        i, n;

    // Does this arc match an existing line in order, or reverse order?
    // Rings are closed, so their start point and end point is the same.
    if (endArcs = arcsByEnd.get(endPoint = coordinates[arc[0]])) {
      for (i = 0, n = endArcs.length; i < n; ++i) {
        endArc = endArcs[i];
        if (equalRing(endArc, arc)) {
          arc[0] = endArc[0];
          arc[1] = endArc[1];
          return;
        }
        if (reverseEqualRing(endArc, arc)) {
          arc[0] = endArc[1];
          arc[1] = endArc[0];
          return;
        }
      }
    }

    // Otherwise, does this arc match an existing ring in order, or reverse order?
    if (endArcs = arcsByEnd.get(endPoint = coordinates[arc[0] + findMinimumOffset(arc)])) {
      for (i = 0, n = endArcs.length; i < n; ++i) {
        endArc = endArcs[i];
        if (equalRing(endArc, arc)) {
          arc[0] = endArc[0];
          arc[1] = endArc[1];
          return;
        }
        if (reverseEqualRing(endArc, arc)) {
          arc[0] = endArc[1];
          arc[1] = endArc[0];
          return;
        }
      }
    }

    if (endArcs) endArcs.push(arc); else arcsByEnd.set(endPoint, [arc]);
    arcs.push(arc);
  }

  function equalLine(arcA, arcB) {
    var ia = arcA[0], ib = arcB[0],
        ja = arcA[1], jb = arcB[1];
    if (ia - ja !== ib - jb) return false;
    for (; ia <= ja; ++ia, ++ib) if (!equalPoint(coordinates[ia], coordinates[ib])) return false;
    return true;
  }

  function reverseEqualLine(arcA, arcB) {
    var ia = arcA[0], ib = arcB[0],
        ja = arcA[1], jb = arcB[1];
    if (ia - ja !== ib - jb) return false;
    for (; ia <= ja; ++ia, --jb) if (!equalPoint(coordinates[ia], coordinates[jb])) return false;
    return true;
  }

  function equalRing(arcA, arcB) {
    var ia = arcA[0], ib = arcB[0],
        ja = arcA[1], jb = arcB[1],
        n = ja - ia;
    if (n !== jb - ib) return false;
    var ka = findMinimumOffset(arcA),
        kb = findMinimumOffset(arcB);
    for (var i = 0; i < n; ++i) {
      if (!equalPoint(coordinates[ia + (i + ka) % n], coordinates[ib + (i + kb) % n])) return false;
    }
    return true;
  }

  function reverseEqualRing(arcA, arcB) {
    var ia = arcA[0], ib = arcB[0],
        ja = arcA[1], jb = arcB[1],
        n = ja - ia;
    if (n !== jb - ib) return false;
    var ka = findMinimumOffset(arcA),
        kb = n - findMinimumOffset(arcB);
    for (var i = 0; i < n; ++i) {
      if (!equalPoint(coordinates[ia + (i + ka) % n], coordinates[jb - (i + kb) % n])) return false;
    }
    return true;
  }

  // Rings are rotated to a consistent, but arbitrary, start point.
  // This is necessary to detect when a ring and a rotated copy are dupes.
  function findMinimumOffset(arc) {
    var start = arc[0],
        end = arc[1],
        mid = start,
        minimum = mid,
        minimumPoint = coordinates[mid];
    while (++mid < end) {
      var point = coordinates[mid];
      if (point[0] < minimumPoint[0] || point[0] === minimumPoint[0] && point[1] < minimumPoint[1]) {
        minimum = mid;
        minimumPoint = point;
      }
    }
    return minimum - start;
  }

  return topology;
}


/***/ }),

/***/ 7509:
/***/ (() => {

// TODO if quantized, use simpler Int32 hashing?

var buffer = new ArrayBuffer(16),
    floats = new Float64Array(buffer),
    uints = new Uint32Array(buffer);

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(point) {
  floats[0] = point[0];
  floats[1] = point[1];
  var hash = uints[0] ^ uints[1];
  hash = hash << 5 ^ hash >> 7 ^ uints[2] ^ uints[3];
  return hash & 0x7fffffff;
}


/***/ }),

/***/ 1818:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _hash_point_hash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7509);





// Given an extracted (pre-)topology, identifies all of the junctions. These are
// the points at which arcs (lines or rings) will need to be cut so that each
// arc is represented uniquely.
//
// A junction is a point where at least one arc deviates from another arc going
// through the same point. For example, consider the point B. If there is a arc
// through ABC and another arc through CBA, then B is not a junction because in
// both cases the adjacent point pairs are {A,C}. However, if there is an
// additional arc ABD, then {A,D} != {A,C}, and thus B becomes a junction.
//
// For a closed ring ABCA, the first point A’s adjacent points are the second
// and last point {B,C}. For a line, the first and last point are always
// considered junctions, even if the line is closed; this ensures that a closed
// line is never rotated.
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(topology) {
  var coordinates = topology.coordinates,
      lines = topology.lines,
      rings = topology.rings,
      indexes = index(),
      visitedByIndex = new Int32Array(coordinates.length),
      leftByIndex = new Int32Array(coordinates.length),
      rightByIndex = new Int32Array(coordinates.length),
      junctionByIndex = new Int8Array(coordinates.length),
      junctionCount = 0, // upper bound on number of junctions
      i, n,
      previousIndex,
      currentIndex,
      nextIndex;

  for (i = 0, n = coordinates.length; i < n; ++i) {
    visitedByIndex[i] = leftByIndex[i] = rightByIndex[i] = -1;
  }

  for (i = 0, n = lines.length; i < n; ++i) {
    var line = lines[i],
        lineStart = line[0],
        lineEnd = line[1];
    currentIndex = indexes[lineStart];
    nextIndex = indexes[++lineStart];
    ++junctionCount, junctionByIndex[currentIndex] = 1; // start
    while (++lineStart <= lineEnd) {
      sequence(i, previousIndex = currentIndex, currentIndex = nextIndex, nextIndex = indexes[lineStart]);
    }
    ++junctionCount, junctionByIndex[nextIndex] = 1; // end
  }

  for (i = 0, n = coordinates.length; i < n; ++i) {
    visitedByIndex[i] = -1;
  }

  for (i = 0, n = rings.length; i < n; ++i) {
    var ring = rings[i],
        ringStart = ring[0] + 1,
        ringEnd = ring[1];
    previousIndex = indexes[ringEnd - 1];
    currentIndex = indexes[ringStart - 1];
    nextIndex = indexes[ringStart];
    sequence(i, previousIndex, currentIndex, nextIndex);
    while (++ringStart <= ringEnd) {
      sequence(i, previousIndex = currentIndex, currentIndex = nextIndex, nextIndex = indexes[ringStart]);
    }
  }

  function sequence(i, previousIndex, currentIndex, nextIndex) {
    if (visitedByIndex[currentIndex] === i) return; // ignore self-intersection
    visitedByIndex[currentIndex] = i;
    var leftIndex = leftByIndex[currentIndex];
    if (leftIndex >= 0) {
      var rightIndex = rightByIndex[currentIndex];
      if ((leftIndex !== previousIndex || rightIndex !== nextIndex)
        && (leftIndex !== nextIndex || rightIndex !== previousIndex)) {
        ++junctionCount, junctionByIndex[currentIndex] = 1;
      }
    } else {
      leftByIndex[currentIndex] = previousIndex;
      rightByIndex[currentIndex] = nextIndex;
    }
  }

  function index() {
    var indexByPoint = hashmap(coordinates.length * 1.4, hashIndex, equalIndex, Int32Array, -1, Int32Array),
        indexes = new Int32Array(coordinates.length);

    for (var i = 0, n = coordinates.length; i < n; ++i) {
      indexes[i] = indexByPoint.maybeSet(i, i);
    }

    return indexes;
  }

  function hashIndex(i) {
    return hashPoint(coordinates[i]);
  }

  function equalIndex(i, j) {
    return equalPoint(coordinates[i], coordinates[j]);
  }

  visitedByIndex = leftByIndex = rightByIndex = null;

  var junctionByPoint = hashset(junctionCount * 1.4, hashPoint, equalPoint), j;

  // Convert back to a standard hashset by point for caller convenience.
  for (i = 0, n = coordinates.length; i < n; ++i) {
    if (junctionByIndex[j = indexes[i]]) {
      junctionByPoint.add(coordinates[j]);
    }
  }

  return junctionByPoint;
}


/***/ }),

/***/ 5443:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _cut__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8129);
/* harmony import */ var _dedup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1953);









// Constructs the TopoJSON Topology for the specified hash of features.
// Each object in the specified hash must be a GeoJSON object,
// meaning FeatureCollection, a Feature or a geometry object.
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(objects, quantization) {
  var bbox = bounds(objects = geometry(objects)),
      transform = quantization > 0 && bbox && prequantize(objects, bbox, quantization),
      topology = dedup(cut(extract(objects))),
      coordinates = topology.coordinates,
      indexByArc = hashmap(topology.arcs.length * 1.4, hashArc, equalArc);

  objects = topology.objects; // for garbage collection
  topology.bbox = bbox;
  topology.arcs = topology.arcs.map(function(arc, i) {
    indexByArc.set(arc, i);
    return coordinates.slice(arc[0], arc[1] + 1);
  });

  delete topology.coordinates;
  coordinates = null;

  function indexGeometry(geometry) {
    if (geometry && indexGeometryType.hasOwnProperty(geometry.type)) indexGeometryType[geometry.type](geometry);
  }

  var indexGeometryType = {
    GeometryCollection: function(o) { o.geometries.forEach(indexGeometry); },
    LineString: function(o) { o.arcs = indexArcs(o.arcs); },
    MultiLineString: function(o) { o.arcs = o.arcs.map(indexArcs); },
    Polygon: function(o) { o.arcs = o.arcs.map(indexArcs); },
    MultiPolygon: function(o) { o.arcs = o.arcs.map(indexMultiArcs); }
  };

  function indexArcs(arc) {
    var indexes = [];
    do {
      var index = indexByArc.get(arc);
      indexes.push(arc[0] < arc[1] ? index : ~index);
    } while (arc = arc.next);
    return indexes;
  }

  function indexMultiArcs(arcs) {
    return arcs.map(indexArcs);
  }

  for (var key in objects) {
    indexGeometry(objects[key]);
  }

  if (transform) {
    topology.transform = transform;
    topology.arcs = delta(topology.arcs);
  }

  return topology;
}

function hashArc(arc) {
  var i = arc[0], j = arc[1], t;
  if (j < i) t = i, i = j, j = t;
  return i + 31 * j;
}

function equalArc(arcA, arcB) {
  var ia = arcA[0], ja = arcA[1],
      ib = arcB[0], jb = arcB[1], t;
  if (ja < ia) t = ia, ia = ja, ja = t;
  if (jb < ib) t = ib, ib = jb, jb = t;
  return ia === ib && ja === jb;
}


/***/ }),

/***/ 2891:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _src_spherical__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5645);











/***/ }),

/***/ 5645:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony exports sphericalRingArea, sphericalTriangleArea */
var pi = Math.PI,
    tau = 2 * pi,
    quarterPi = pi / 4,
    radians = pi / 180,
    abs = Math.abs,
    atan2 = Math.atan2,
    cos = Math.cos,
    sin = Math.sin;

function halfArea(ring, closed) {
  var i = 0,
      n = ring.length,
      sum = 0,
      point = ring[closed ? i++ : n - 1],
      lambda0, lambda1 = point[0] * radians,
      phi1 = (point[1] * radians) / 2 + quarterPi,
      cosPhi0, cosPhi1 = cos(phi1),
      sinPhi0, sinPhi1 = sin(phi1);

  for (; i < n; ++i) {
    point = ring[i];
    lambda0 = lambda1, lambda1 = point[0] * radians;
    phi1 = (point[1] * radians) / 2 + quarterPi;
    cosPhi0 = cosPhi1, cosPhi1 = cos(phi1);
    sinPhi0 = sinPhi1, sinPhi1 = sin(phi1);

    // Spherical excess E for a spherical triangle with vertices: south pole,
    // previous point, current point.  Uses a formula derived from Cagnoli’s
    // theorem.  See Todhunter, Spherical Trig. (1871), Sec. 103, Eq. (2).
    // See https://github.com/d3/d3-geo/blob/master/README.md#geoArea
    var dLambda = lambda1 - lambda0,
        sdLambda = dLambda >= 0 ? 1 : -1,
        adLambda = sdLambda * dLambda,
        k = sinPhi0 * sinPhi1,
        u = cosPhi0 * cosPhi1 + k * cos(adLambda),
        v = k * sdLambda * sin(adLambda);
    sum += atan2(v, u);
  }

  return sum;
}

function sphericalRingArea(ring, interior) {
  var sum = halfArea(ring, true);
  if (interior) sum *= -1;
  return (sum < 0 ? tau + sum : sum) * 2;
}

function sphericalTriangleArea(t) {
  return abs(halfArea(t, false)) * 2;
}


/***/ }),

/***/ 3800:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WS: () => (/* reexport safe */ topojson_client__WEBPACK_IMPORTED_MODULE_0__.WS),
/* harmony export */   zL: () => (/* reexport safe */ topojson_client__WEBPACK_IMPORTED_MODULE_0__.zL)
/* harmony export */ });
/* harmony import */ var topojson_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6724);
/* harmony import */ var topojson_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60);
/* harmony import */ var topojson_simplify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2891);





/***/ }),

/***/ 266:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dU: () => (/* binding */ Adder)
/* harmony export */ });
/* unused harmony exports fsum, fcumsum */
// https://github.com/python/cpython/blob/a74eea238f5baba15797e2e8b570d153bc8690a7/Modules/mathmodule.c#L1423
class Adder {
  constructor() {
    this._partials = new Float64Array(32);
    this._n = 0;
  }
  add(x) {
    const p = this._partials;
    let i = 0;
    for (let j = 0; j < this._n && j < 32; j++) {
      const y = p[j],
        hi = x + y,
        lo = Math.abs(x) < Math.abs(y) ? x - (hi - y) : y - (hi - x);
      if (lo) p[i++] = lo;
      x = hi;
    }
    p[i] = x;
    this._n = i + 1;
    return this;
  }
  valueOf() {
    const p = this._partials;
    let n = this._n, x, y, lo, hi = 0;
    if (n > 0) {
      hi = p[--n];
      while (n > 0) {
        x = hi;
        y = p[--n];
        hi = x + y;
        lo = y - (hi - x);
        if (lo) break;
      }
      if (n > 0 && ((lo < 0 && p[n - 1] < 0) || (lo > 0 && p[n - 1] > 0))) {
        y = lo * 2;
        x = hi + y;
        if (y == x - hi) hi = x;
      }
    }
    return hi;
  }
}

function fsum(values, valueof) {
  const adder = new Adder();
  if (valueof === undefined) {
    for (let value of values) {
      if (value = +value) {
        adder.add(value);
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if (value = +valueof(value, ++index, values)) {
        adder.add(value);
      }
    }
  }
  return +adder;
}

function fcumsum(values, valueof) {
  const adder = new Adder();
  let index = -1;
  return Float64Array.from(values, valueof === undefined
      ? v => adder.add(+v || 0)
      : v => adder.add(+valueof(v, ++index, values) || 0)
  );
}


/***/ }),

/***/ 3137:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony exports brushSelection, brushX, brushY */
/* harmony import */ var d3_transition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3399);









var MODE_DRAG = {name: "drag"},
    MODE_SPACE = {name: "space"},
    MODE_HANDLE = {name: "handle"},
    MODE_CENTER = {name: "center"};

const {abs, max, min} = Math;

function number1(e) {
  return [+e[0], +e[1]];
}

function number2(e) {
  return [number1(e[0]), number1(e[1])];
}

var X = {
  name: "x",
  handles: ["w", "e"].map(type),
  input: function(x, e) { return x == null ? null : [[+x[0], e[0][1]], [+x[1], e[1][1]]]; },
  output: function(xy) { return xy && [xy[0][0], xy[1][0]]; }
};

var Y = {
  name: "y",
  handles: ["n", "s"].map(type),
  input: function(y, e) { return y == null ? null : [[e[0][0], +y[0]], [e[1][0], +y[1]]]; },
  output: function(xy) { return xy && [xy[0][1], xy[1][1]]; }
};

var XY = {
  name: "xy",
  handles: ["n", "w", "e", "s", "nw", "ne", "sw", "se"].map(type),
  input: function(xy) { return xy == null ? null : number2(xy); },
  output: function(xy) { return xy; }
};

var cursors = {
  overlay: "crosshair",
  selection: "move",
  n: "ns-resize",
  e: "ew-resize",
  s: "ns-resize",
  w: "ew-resize",
  nw: "nwse-resize",
  ne: "nesw-resize",
  se: "nwse-resize",
  sw: "nesw-resize"
};

var flipX = {
  e: "w",
  w: "e",
  nw: "ne",
  ne: "nw",
  se: "sw",
  sw: "se"
};

var flipY = {
  n: "s",
  s: "n",
  nw: "sw",
  ne: "se",
  se: "ne",
  sw: "nw"
};

var signsX = {
  overlay: +1,
  selection: +1,
  n: null,
  e: +1,
  s: null,
  w: -1,
  nw: -1,
  ne: +1,
  se: +1,
  sw: -1
};

var signsY = {
  overlay: +1,
  selection: +1,
  n: -1,
  e: null,
  s: +1,
  w: null,
  nw: -1,
  ne: -1,
  se: +1,
  sw: +1
};

function type(t) {
  return {type: t};
}

// Ignore right-click, since that should open the context menu.
function defaultFilter(event) {
  return !event.ctrlKey && !event.button;
}

function defaultExtent() {
  var svg = this.ownerSVGElement || this;
  if (svg.hasAttribute("viewBox")) {
    svg = svg.viewBox.baseVal;
    return [[svg.x, svg.y], [svg.x + svg.width, svg.y + svg.height]];
  }
  return [[0, 0], [svg.width.baseVal.value, svg.height.baseVal.value]];
}

function defaultTouchable() {
  return navigator.maxTouchPoints || ("ontouchstart" in this);
}

// Like d3.local, but with the name “__brush” rather than auto-generated.
function local(node) {
  while (!node.__brush) if (!(node = node.parentNode)) return;
  return node.__brush;
}

function empty(extent) {
  return extent[0][0] === extent[1][0]
      || extent[0][1] === extent[1][1];
}

function brushSelection(node) {
  var state = node.__brush;
  return state ? state.dim.output(state.selection) : null;
}

function brushX() {
  return brush(X);
}

function brushY() {
  return brush(Y);
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return brush(XY);
}

function brush(dim) {
  var extent = defaultExtent,
      filter = defaultFilter,
      touchable = defaultTouchable,
      keys = true,
      listeners = dispatch("start", "brush", "end"),
      handleSize = 6,
      touchending;

  function brush(group) {
    var overlay = group
        .property("__brush", initialize)
      .selectAll(".overlay")
      .data([type("overlay")]);

    overlay.enter().append("rect")
        .attr("class", "overlay")
        .attr("pointer-events", "all")
        .attr("cursor", cursors.overlay)
      .merge(overlay)
        .each(function() {
          var extent = local(this).extent;
          select(this)
              .attr("x", extent[0][0])
              .attr("y", extent[0][1])
              .attr("width", extent[1][0] - extent[0][0])
              .attr("height", extent[1][1] - extent[0][1]);
        });

    group.selectAll(".selection")
      .data([type("selection")])
      .enter().append("rect")
        .attr("class", "selection")
        .attr("cursor", cursors.selection)
        .attr("fill", "#777")
        .attr("fill-opacity", 0.3)
        .attr("stroke", "#fff")
        .attr("shape-rendering", "crispEdges");

    var handle = group.selectAll(".handle")
      .data(dim.handles, function(d) { return d.type; });

    handle.exit().remove();

    handle.enter().append("rect")
        .attr("class", function(d) { return "handle handle--" + d.type; })
        .attr("cursor", function(d) { return cursors[d.type]; });

    group
        .each(redraw)
        .attr("fill", "none")
        .attr("pointer-events", "all")
        .on("mousedown.brush", started)
      .filter(touchable)
        .on("touchstart.brush", started)
        .on("touchmove.brush", touchmoved)
        .on("touchend.brush touchcancel.brush", touchended)
        .style("touch-action", "none")
        .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }

  brush.move = function(group, selection, event) {
    if (group.tween) {
      group
          .on("start.brush", function(event) { emitter(this, arguments).beforestart().start(event); })
          .on("interrupt.brush end.brush", function(event) { emitter(this, arguments).end(event); })
          .tween("brush", function() {
            var that = this,
                state = that.__brush,
                emit = emitter(that, arguments),
                selection0 = state.selection,
                selection1 = dim.input(typeof selection === "function" ? selection.apply(this, arguments) : selection, state.extent),
                i = interpolate(selection0, selection1);

            function tween(t) {
              state.selection = t === 1 && selection1 === null ? null : i(t);
              redraw.call(that);
              emit.brush();
            }

            return selection0 !== null && selection1 !== null ? tween : tween(1);
          });
    } else {
      group
          .each(function() {
            var that = this,
                args = arguments,
                state = that.__brush,
                selection1 = dim.input(typeof selection === "function" ? selection.apply(that, args) : selection, state.extent),
                emit = emitter(that, args).beforestart();

            interrupt(that);
            state.selection = selection1 === null ? null : selection1;
            redraw.call(that);
            emit.start(event).brush(event).end(event);
          });
    }
  };

  brush.clear = function(group, event) {
    brush.move(group, null, event);
  };

  function redraw() {
    var group = select(this),
        selection = local(this).selection;

    if (selection) {
      group.selectAll(".selection")
          .style("display", null)
          .attr("x", selection[0][0])
          .attr("y", selection[0][1])
          .attr("width", selection[1][0] - selection[0][0])
          .attr("height", selection[1][1] - selection[0][1]);

      group.selectAll(".handle")
          .style("display", null)
          .attr("x", function(d) { return d.type[d.type.length - 1] === "e" ? selection[1][0] - handleSize / 2 : selection[0][0] - handleSize / 2; })
          .attr("y", function(d) { return d.type[0] === "s" ? selection[1][1] - handleSize / 2 : selection[0][1] - handleSize / 2; })
          .attr("width", function(d) { return d.type === "n" || d.type === "s" ? selection[1][0] - selection[0][0] + handleSize : handleSize; })
          .attr("height", function(d) { return d.type === "e" || d.type === "w" ? selection[1][1] - selection[0][1] + handleSize : handleSize; });
    }

    else {
      group.selectAll(".selection,.handle")
          .style("display", "none")
          .attr("x", null)
          .attr("y", null)
          .attr("width", null)
          .attr("height", null);
    }
  }

  function emitter(that, args, clean) {
    var emit = that.__brush.emitter;
    return emit && (!clean || !emit.clean) ? emit : new Emitter(that, args, clean);
  }

  function Emitter(that, args, clean) {
    this.that = that;
    this.args = args;
    this.state = that.__brush;
    this.active = 0;
    this.clean = clean;
  }

  Emitter.prototype = {
    beforestart: function() {
      if (++this.active === 1) this.state.emitter = this, this.starting = true;
      return this;
    },
    start: function(event, mode) {
      if (this.starting) this.starting = false, this.emit("start", event, mode);
      else this.emit("brush", event);
      return this;
    },
    brush: function(event, mode) {
      this.emit("brush", event, mode);
      return this;
    },
    end: function(event, mode) {
      if (--this.active === 0) delete this.state.emitter, this.emit("end", event, mode);
      return this;
    },
    emit: function(type, event, mode) {
      var d = select(this.that).datum();
      listeners.call(
        type,
        this.that,
        new BrushEvent(type, {
          sourceEvent: event,
          target: brush,
          selection: dim.output(this.state.selection),
          mode,
          dispatch: listeners
        }),
        d
      );
    }
  };

  function started(event) {
    if (touchending && !event.touches) return;
    if (!filter.apply(this, arguments)) return;

    var that = this,
        type = event.target.__data__.type,
        mode = (keys && event.metaKey ? type = "overlay" : type) === "selection" ? MODE_DRAG : (keys && event.altKey ? MODE_CENTER : MODE_HANDLE),
        signX = dim === Y ? null : signsX[type],
        signY = dim === X ? null : signsY[type],
        state = local(that),
        extent = state.extent,
        selection = state.selection,
        W = extent[0][0], w0, w1,
        N = extent[0][1], n0, n1,
        E = extent[1][0], e0, e1,
        S = extent[1][1], s0, s1,
        dx = 0,
        dy = 0,
        moving,
        shifting = signX && signY && keys && event.shiftKey,
        lockX,
        lockY,
        points = Array.from(event.touches || [event], t => {
          const i = t.identifier;
          t = pointer(t, that);
          t.point0 = t.slice();
          t.identifier = i;
          return t;
        });

    interrupt(that);
    var emit = emitter(that, arguments, true).beforestart();

    if (type === "overlay") {
      if (selection) moving = true;
      const pts = [points[0], points[1] || points[0]];
      state.selection = selection = [[
          w0 = dim === Y ? W : min(pts[0][0], pts[1][0]),
          n0 = dim === X ? N : min(pts[0][1], pts[1][1])
        ], [
          e0 = dim === Y ? E : max(pts[0][0], pts[1][0]),
          s0 = dim === X ? S : max(pts[0][1], pts[1][1])
        ]];
      if (points.length > 1) move(event);
    } else {
      w0 = selection[0][0];
      n0 = selection[0][1];
      e0 = selection[1][0];
      s0 = selection[1][1];
    }

    w1 = w0;
    n1 = n0;
    e1 = e0;
    s1 = s0;

    var group = select(that)
        .attr("pointer-events", "none");

    var overlay = group.selectAll(".overlay")
        .attr("cursor", cursors[type]);

    if (event.touches) {
      emit.moved = moved;
      emit.ended = ended;
    } else {
      var view = select(event.view)
          .on("mousemove.brush", moved, true)
          .on("mouseup.brush", ended, true);
      if (keys) view
          .on("keydown.brush", keydowned, true)
          .on("keyup.brush", keyupped, true)

      dragDisable(event.view);
    }

    redraw.call(that);
    emit.start(event, mode.name);

    function moved(event) {
      for (const p of event.changedTouches || [event]) {
        for (const d of points)
          if (d.identifier === p.identifier) d.cur = pointer(p, that);
      }
      if (shifting && !lockX && !lockY && points.length === 1) {
        const point = points[0];
        if (abs(point.cur[0] - point[0]) > abs(point.cur[1] - point[1]))
          lockY = true;
        else
          lockX = true;
      }
      for (const point of points)
        if (point.cur) point[0] = point.cur[0], point[1] = point.cur[1];
      moving = true;
      noevent(event);
      move(event);
    }

    function move(event) {
      const point = points[0], point0 = point.point0;
      var t;

      dx = point[0] - point0[0];
      dy = point[1] - point0[1];

      switch (mode) {
        case MODE_SPACE:
        case MODE_DRAG: {
          if (signX) dx = max(W - w0, min(E - e0, dx)), w1 = w0 + dx, e1 = e0 + dx;
          if (signY) dy = max(N - n0, min(S - s0, dy)), n1 = n0 + dy, s1 = s0 + dy;
          break;
        }
        case MODE_HANDLE: {
          if (points[1]) {
            if (signX) w1 = max(W, min(E, points[0][0])), e1 = max(W, min(E, points[1][0])), signX = 1;
            if (signY) n1 = max(N, min(S, points[0][1])), s1 = max(N, min(S, points[1][1])), signY = 1;
          } else {
            if (signX < 0) dx = max(W - w0, min(E - w0, dx)), w1 = w0 + dx, e1 = e0;
            else if (signX > 0) dx = max(W - e0, min(E - e0, dx)), w1 = w0, e1 = e0 + dx;
            if (signY < 0) dy = max(N - n0, min(S - n0, dy)), n1 = n0 + dy, s1 = s0;
            else if (signY > 0) dy = max(N - s0, min(S - s0, dy)), n1 = n0, s1 = s0 + dy;
          }
          break;
        }
        case MODE_CENTER: {
          if (signX) w1 = max(W, min(E, w0 - dx * signX)), e1 = max(W, min(E, e0 + dx * signX));
          if (signY) n1 = max(N, min(S, n0 - dy * signY)), s1 = max(N, min(S, s0 + dy * signY));
          break;
        }
      }

      if (e1 < w1) {
        signX *= -1;
        t = w0, w0 = e0, e0 = t;
        t = w1, w1 = e1, e1 = t;
        if (type in flipX) overlay.attr("cursor", cursors[type = flipX[type]]);
      }

      if (s1 < n1) {
        signY *= -1;
        t = n0, n0 = s0, s0 = t;
        t = n1, n1 = s1, s1 = t;
        if (type in flipY) overlay.attr("cursor", cursors[type = flipY[type]]);
      }

      if (state.selection) selection = state.selection; // May be set by brush.move!
      if (lockX) w1 = selection[0][0], e1 = selection[1][0];
      if (lockY) n1 = selection[0][1], s1 = selection[1][1];

      if (selection[0][0] !== w1
          || selection[0][1] !== n1
          || selection[1][0] !== e1
          || selection[1][1] !== s1) {
        state.selection = [[w1, n1], [e1, s1]];
        redraw.call(that);
        emit.brush(event, mode.name);
      }
    }

    function ended(event) {
      nopropagation(event);
      if (event.touches) {
        if (event.touches.length) return;
        if (touchending) clearTimeout(touchending);
        touchending = setTimeout(function() { touchending = null; }, 500); // Ghost clicks are delayed!
      } else {
        dragEnable(event.view, moving);
        view.on("keydown.brush keyup.brush mousemove.brush mouseup.brush", null);
      }
      group.attr("pointer-events", "all");
      overlay.attr("cursor", cursors.overlay);
      if (state.selection) selection = state.selection; // May be set by brush.move (on start)!
      if (empty(selection)) state.selection = null, redraw.call(that);
      emit.end(event, mode.name);
    }

    function keydowned(event) {
      switch (event.keyCode) {
        case 16: { // SHIFT
          shifting = signX && signY;
          break;
        }
        case 18: { // ALT
          if (mode === MODE_HANDLE) {
            if (signX) e0 = e1 - dx * signX, w0 = w1 + dx * signX;
            if (signY) s0 = s1 - dy * signY, n0 = n1 + dy * signY;
            mode = MODE_CENTER;
            move(event);
          }
          break;
        }
        case 32: { // SPACE; takes priority over ALT
          if (mode === MODE_HANDLE || mode === MODE_CENTER) {
            if (signX < 0) e0 = e1 - dx; else if (signX > 0) w0 = w1 - dx;
            if (signY < 0) s0 = s1 - dy; else if (signY > 0) n0 = n1 - dy;
            mode = MODE_SPACE;
            overlay.attr("cursor", cursors.selection);
            move(event);
          }
          break;
        }
        default: return;
      }
      noevent(event);
    }

    function keyupped(event) {
      switch (event.keyCode) {
        case 16: { // SHIFT
          if (shifting) {
            lockX = lockY = shifting = false;
            move(event);
          }
          break;
        }
        case 18: { // ALT
          if (mode === MODE_CENTER) {
            if (signX < 0) e0 = e1; else if (signX > 0) w0 = w1;
            if (signY < 0) s0 = s1; else if (signY > 0) n0 = n1;
            mode = MODE_HANDLE;
            move(event);
          }
          break;
        }
        case 32: { // SPACE
          if (mode === MODE_SPACE) {
            if (event.altKey) {
              if (signX) e0 = e1 - dx * signX, w0 = w1 + dx * signX;
              if (signY) s0 = s1 - dy * signY, n0 = n1 + dy * signY;
              mode = MODE_CENTER;
            } else {
              if (signX < 0) e0 = e1; else if (signX > 0) w0 = w1;
              if (signY < 0) s0 = s1; else if (signY > 0) n0 = n1;
              mode = MODE_HANDLE;
            }
            overlay.attr("cursor", cursors[type]);
            move(event);
          }
          break;
        }
        default: return;
      }
      noevent(event);
    }
  }

  function touchmoved(event) {
    emitter(this, arguments).moved(event);
  }

  function touchended(event) {
    emitter(this, arguments).ended(event);
  }

  function initialize() {
    var state = this.__brush || {selection: null};
    state.extent = number2(extent.apply(this, arguments));
    state.dim = dim;
    return state;
  }

  brush.extent = function(_) {
    return arguments.length ? (extent = typeof _ === "function" ? _ : constant(number2(_)), brush) : extent;
  };

  brush.filter = function(_) {
    return arguments.length ? (filter = typeof _ === "function" ? _ : constant(!!_), brush) : filter;
  };

  brush.touchable = function(_) {
    return arguments.length ? (touchable = typeof _ === "function" ? _ : constant(!!_), brush) : touchable;
  };

  brush.handleSize = function(_) {
    return arguments.length ? (handleSize = +_, brush) : handleSize;
  };

  brush.keyModifiers = function(_) {
    return arguments.length ? (keys = !!_, brush) : keys;
  };

  brush.on = function() {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? brush : value;
  };

  return brush;
}


/***/ }),

/***/ 9961:
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _brush_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3137);



/***/ }),

/***/ 4447:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B8: () => (/* binding */ rgb),
/* harmony export */   ZP: () => (/* binding */ color)
/* harmony export */ });
/* unused harmony exports Color, darker, brighter, rgbConvert, Rgb, hslConvert, hsl */
/* harmony import */ var _define_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9531);


function Color() {}

var darker = 0.7;
var brighter = 1 / darker;

var reI = "\\s*([+-]?\\d+)\\s*",
    reN = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
    reP = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
    reHex = /^#([0-9a-f]{3,8})$/,
    reRgbInteger = new RegExp(`^rgb\\(${reI},${reI},${reI}\\)$`),
    reRgbPercent = new RegExp(`^rgb\\(${reP},${reP},${reP}\\)$`),
    reRgbaInteger = new RegExp(`^rgba\\(${reI},${reI},${reI},${reN}\\)$`),
    reRgbaPercent = new RegExp(`^rgba\\(${reP},${reP},${reP},${reN}\\)$`),
    reHslPercent = new RegExp(`^hsl\\(${reN},${reP},${reP}\\)$`),
    reHslaPercent = new RegExp(`^hsla\\(${reN},${reP},${reP},${reN}\\)$`);

var named = {
  aliceblue: 0xf0f8ff,
  antiquewhite: 0xfaebd7,
  aqua: 0x00ffff,
  aquamarine: 0x7fffd4,
  azure: 0xf0ffff,
  beige: 0xf5f5dc,
  bisque: 0xffe4c4,
  black: 0x000000,
  blanchedalmond: 0xffebcd,
  blue: 0x0000ff,
  blueviolet: 0x8a2be2,
  brown: 0xa52a2a,
  burlywood: 0xdeb887,
  cadetblue: 0x5f9ea0,
  chartreuse: 0x7fff00,
  chocolate: 0xd2691e,
  coral: 0xff7f50,
  cornflowerblue: 0x6495ed,
  cornsilk: 0xfff8dc,
  crimson: 0xdc143c,
  cyan: 0x00ffff,
  darkblue: 0x00008b,
  darkcyan: 0x008b8b,
  darkgoldenrod: 0xb8860b,
  darkgray: 0xa9a9a9,
  darkgreen: 0x006400,
  darkgrey: 0xa9a9a9,
  darkkhaki: 0xbdb76b,
  darkmagenta: 0x8b008b,
  darkolivegreen: 0x556b2f,
  darkorange: 0xff8c00,
  darkorchid: 0x9932cc,
  darkred: 0x8b0000,
  darksalmon: 0xe9967a,
  darkseagreen: 0x8fbc8f,
  darkslateblue: 0x483d8b,
  darkslategray: 0x2f4f4f,
  darkslategrey: 0x2f4f4f,
  darkturquoise: 0x00ced1,
  darkviolet: 0x9400d3,
  deeppink: 0xff1493,
  deepskyblue: 0x00bfff,
  dimgray: 0x696969,
  dimgrey: 0x696969,
  dodgerblue: 0x1e90ff,
  firebrick: 0xb22222,
  floralwhite: 0xfffaf0,
  forestgreen: 0x228b22,
  fuchsia: 0xff00ff,
  gainsboro: 0xdcdcdc,
  ghostwhite: 0xf8f8ff,
  gold: 0xffd700,
  goldenrod: 0xdaa520,
  gray: 0x808080,
  green: 0x008000,
  greenyellow: 0xadff2f,
  grey: 0x808080,
  honeydew: 0xf0fff0,
  hotpink: 0xff69b4,
  indianred: 0xcd5c5c,
  indigo: 0x4b0082,
  ivory: 0xfffff0,
  khaki: 0xf0e68c,
  lavender: 0xe6e6fa,
  lavenderblush: 0xfff0f5,
  lawngreen: 0x7cfc00,
  lemonchiffon: 0xfffacd,
  lightblue: 0xadd8e6,
  lightcoral: 0xf08080,
  lightcyan: 0xe0ffff,
  lightgoldenrodyellow: 0xfafad2,
  lightgray: 0xd3d3d3,
  lightgreen: 0x90ee90,
  lightgrey: 0xd3d3d3,
  lightpink: 0xffb6c1,
  lightsalmon: 0xffa07a,
  lightseagreen: 0x20b2aa,
  lightskyblue: 0x87cefa,
  lightslategray: 0x778899,
  lightslategrey: 0x778899,
  lightsteelblue: 0xb0c4de,
  lightyellow: 0xffffe0,
  lime: 0x00ff00,
  limegreen: 0x32cd32,
  linen: 0xfaf0e6,
  magenta: 0xff00ff,
  maroon: 0x800000,
  mediumaquamarine: 0x66cdaa,
  mediumblue: 0x0000cd,
  mediumorchid: 0xba55d3,
  mediumpurple: 0x9370db,
  mediumseagreen: 0x3cb371,
  mediumslateblue: 0x7b68ee,
  mediumspringgreen: 0x00fa9a,
  mediumturquoise: 0x48d1cc,
  mediumvioletred: 0xc71585,
  midnightblue: 0x191970,
  mintcream: 0xf5fffa,
  mistyrose: 0xffe4e1,
  moccasin: 0xffe4b5,
  navajowhite: 0xffdead,
  navy: 0x000080,
  oldlace: 0xfdf5e6,
  olive: 0x808000,
  olivedrab: 0x6b8e23,
  orange: 0xffa500,
  orangered: 0xff4500,
  orchid: 0xda70d6,
  palegoldenrod: 0xeee8aa,
  palegreen: 0x98fb98,
  paleturquoise: 0xafeeee,
  palevioletred: 0xdb7093,
  papayawhip: 0xffefd5,
  peachpuff: 0xffdab9,
  peru: 0xcd853f,
  pink: 0xffc0cb,
  plum: 0xdda0dd,
  powderblue: 0xb0e0e6,
  purple: 0x800080,
  rebeccapurple: 0x663399,
  red: 0xff0000,
  rosybrown: 0xbc8f8f,
  royalblue: 0x4169e1,
  saddlebrown: 0x8b4513,
  salmon: 0xfa8072,
  sandybrown: 0xf4a460,
  seagreen: 0x2e8b57,
  seashell: 0xfff5ee,
  sienna: 0xa0522d,
  silver: 0xc0c0c0,
  skyblue: 0x87ceeb,
  slateblue: 0x6a5acd,
  slategray: 0x708090,
  slategrey: 0x708090,
  snow: 0xfffafa,
  springgreen: 0x00ff7f,
  steelblue: 0x4682b4,
  tan: 0xd2b48c,
  teal: 0x008080,
  thistle: 0xd8bfd8,
  tomato: 0xff6347,
  turquoise: 0x40e0d0,
  violet: 0xee82ee,
  wheat: 0xf5deb3,
  white: 0xffffff,
  whitesmoke: 0xf5f5f5,
  yellow: 0xffff00,
  yellowgreen: 0x9acd32
};

(0,_define_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(Color, color, {
  copy(channels) {
    return Object.assign(new this.constructor, this, channels);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: color_formatHex, // Deprecated! Use color.formatHex.
  formatHex: color_formatHex,
  formatHex8: color_formatHex8,
  formatHsl: color_formatHsl,
  formatRgb: color_formatRgb,
  toString: color_formatRgb
});

function color_formatHex() {
  return this.rgb().formatHex();
}

function color_formatHex8() {
  return this.rgb().formatHex8();
}

function color_formatHsl() {
  return hslConvert(this).formatHsl();
}

function color_formatRgb() {
  return this.rgb().formatRgb();
}

function color(format) {
  var m, l;
  format = (format + "").trim().toLowerCase();
  return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) // #ff0000
      : l === 3 ? new Rgb((m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), ((m & 0xf) << 4) | (m & 0xf), 1) // #f00
      : l === 8 ? rgba(m >> 24 & 0xff, m >> 16 & 0xff, m >> 8 & 0xff, (m & 0xff) / 0xff) // #ff000000
      : l === 4 ? rgba((m >> 12 & 0xf) | (m >> 8 & 0xf0), (m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), (((m & 0xf) << 4) | (m & 0xf)) / 0xff) // #f000
      : null) // invalid hex
      : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
      : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
      : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
      : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
      : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
      : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
      : named.hasOwnProperty(format) ? rgbn(named[format]) // eslint-disable-line no-prototype-builtins
      : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0)
      : null;
}

function rgbn(n) {
  return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
}

function rgba(r, g, b, a) {
  if (a <= 0) r = g = b = NaN;
  return new Rgb(r, g, b, a);
}

function rgbConvert(o) {
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Rgb;
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}

function rgb(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}

function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}

(0,_define_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(Rgb, rgb, (0,_define_js__WEBPACK_IMPORTED_MODULE_0__/* .extend */ .l)(Color, {
  brighter(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Rgb(clampi(this.r), clampi(this.g), clampi(this.b), clampa(this.opacity));
  },
  displayable() {
    return (-0.5 <= this.r && this.r < 255.5)
        && (-0.5 <= this.g && this.g < 255.5)
        && (-0.5 <= this.b && this.b < 255.5)
        && (0 <= this.opacity && this.opacity <= 1);
  },
  hex: rgb_formatHex, // Deprecated! Use color.formatHex.
  formatHex: rgb_formatHex,
  formatHex8: rgb_formatHex8,
  formatRgb: rgb_formatRgb,
  toString: rgb_formatRgb
}));

function rgb_formatHex() {
  return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}`;
}

function rgb_formatHex8() {
  return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}${hex((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}

function rgb_formatRgb() {
  const a = clampa(this.opacity);
  return `${a === 1 ? "rgb(" : "rgba("}${clampi(this.r)}, ${clampi(this.g)}, ${clampi(this.b)}${a === 1 ? ")" : `, ${a})`}`;
}

function clampa(opacity) {
  return isNaN(opacity) ? 1 : Math.max(0, Math.min(1, opacity));
}

function clampi(value) {
  return Math.max(0, Math.min(255, Math.round(value) || 0));
}

function hex(value) {
  value = clampi(value);
  return (value < 16 ? "0" : "") + value.toString(16);
}

function hsla(h, s, l, a) {
  if (a <= 0) h = s = l = NaN;
  else if (l <= 0 || l >= 1) h = s = NaN;
  else if (s <= 0) h = NaN;
  return new Hsl(h, s, l, a);
}

function hslConvert(o) {
  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Hsl;
  if (o instanceof Hsl) return o;
  o = o.rgb();
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      min = Math.min(r, g, b),
      max = Math.max(r, g, b),
      h = NaN,
      s = max - min,
      l = (max + min) / 2;
  if (s) {
    if (r === max) h = (g - b) / s + (g < b) * 6;
    else if (g === max) h = (b - r) / s + 2;
    else h = (r - g) / s + 4;
    s /= l < 0.5 ? max + min : 2 - max - min;
    h *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl(h, s, l, o.opacity);
}

function hsl(h, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}

function Hsl(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

(0,_define_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(Hsl, hsl, (0,_define_js__WEBPACK_IMPORTED_MODULE_0__/* .extend */ .l)(Color, {
  brighter(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb() {
    var h = this.h % 360 + (this.h < 0) * 360,
        s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
        l = this.l,
        m2 = l + (l < 0.5 ? l : 1 - l) * s,
        m1 = 2 * l - m2;
    return new Rgb(
      hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
      hsl2rgb(h, m1, m2),
      hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
      this.opacity
    );
  },
  clamp() {
    return new Hsl(clamph(this.h), clampt(this.s), clampt(this.l), clampa(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s))
        && (0 <= this.l && this.l <= 1)
        && (0 <= this.opacity && this.opacity <= 1);
  },
  formatHsl() {
    const a = clampa(this.opacity);
    return `${a === 1 ? "hsl(" : "hsla("}${clamph(this.h)}, ${clampt(this.s) * 100}%, ${clampt(this.l) * 100}%${a === 1 ? ")" : `, ${a})`}`;
  }
}));

function clamph(value) {
  value = (value || 0) % 360;
  return value < 0 ? value + 360 : value;
}

function clampt(value) {
  return Math.max(0, Math.min(1, value || 0));
}

/* From FvD 13.37, CSS Color Module Level 3 */
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60
      : h < 180 ? m2
      : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60
      : m1) * 255;
}


/***/ }),

/***/ 9531:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   l: () => (/* binding */ extend)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
}

function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition) prototype[key] = definition[key];
  return prototype;
}


/***/ }),

/***/ 6057:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var noop = {value: () => {}};

function dispatch() {
  for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
    if (!(t = arguments[i] + "") || (t in _) || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
    _[t] = [];
  }
  return new Dispatch(_);
}

function Dispatch(_) {
  this._ = _;
}

function parseTypenames(typenames, types) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    return {type: t, name: name};
  });
}

Dispatch.prototype = dispatch.prototype = {
  constructor: Dispatch,
  on: function(typename, callback) {
    var _ = this._,
        T = parseTypenames(typename + "", _),
        t,
        i = -1,
        n = T.length;

    // If no callback was specified, return the callback of the given type and name.
    if (arguments.length < 2) {
      while (++i < n) if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name))) return t;
      return;
    }

    // If a type was specified, set the callback for the given type and name.
    // Otherwise, if a null callback was specified, remove callbacks of the given name.
    if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
    while (++i < n) {
      if (t = (typename = T[i]).type) _[t] = set(_[t], typename.name, callback);
      else if (callback == null) for (t in _) _[t] = set(_[t], typename.name, null);
    }

    return this;
  },
  copy: function() {
    var copy = {}, _ = this._;
    for (var t in _) copy[t] = _[t].slice();
    return new Dispatch(copy);
  },
  call: function(type, that) {
    if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) args[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  },
  apply: function(type, that, args) {
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (var t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  }
};

function get(type, name) {
  for (var i = 0, n = type.length, c; i < n; ++i) {
    if ((c = type[i]).name === name) {
      return c.value;
    }
  }
}

function set(type, name, callback) {
  for (var i = 0, n = type.length; i < n; ++i) {
    if (type[i].name === name) {
      type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
      break;
    }
  }
  if (callback != null) type.push({name: name, value: callback});
  return type;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dispatch);


/***/ }),

/***/ 2718:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ yesdrag),
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3838);
/* harmony import */ var _noevent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9611);



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(view) {
  var root = view.document.documentElement,
      selection = (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(view).on("dragstart.drag", _noevent_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP, _noevent_js__WEBPACK_IMPORTED_MODULE_1__/* .nonpassivecapture */ .Dd);
  if ("onselectstart" in root) {
    selection.on("selectstart.drag", _noevent_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP, _noevent_js__WEBPACK_IMPORTED_MODULE_1__/* .nonpassivecapture */ .Dd);
  } else {
    root.__noselect = root.style.MozUserSelect;
    root.style.MozUserSelect = "none";
  }
}

function yesdrag(view, noclick) {
  var root = view.document.documentElement,
      selection = (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(view).on("dragstart.drag", null);
  if (noclick) {
    selection.on("click.drag", _noevent_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP, _noevent_js__WEBPACK_IMPORTED_MODULE_1__/* .nonpassivecapture */ .Dd);
    setTimeout(function() { selection.on("click.drag", null); }, 0);
  }
  if ("onselectstart" in root) {
    selection.on("selectstart.drag", null);
  } else {
    root.style.MozUserSelect = root.__noselect;
    delete root.__noselect;
  }
}


/***/ }),

/***/ 9611:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dd: () => (/* binding */ nonpassivecapture),
/* harmony export */   ZP: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports nonpassive, nopropagation */
// These are typically used in conjunction with noevent to ensure that we can
// preventDefault on the event.
const nonpassive = {passive: false};
const nonpassivecapture = {capture: true, passive: false};

function nopropagation(event) {
  event.stopImmediatePropagation();
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(event) {
  event.preventDefault();
  event.stopImmediatePropagation();
}


/***/ }),

/***/ 2067:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   tw: () => (/* binding */ cubicInOut)
/* harmony export */ });
/* unused harmony exports cubicIn, cubicOut */
function cubicIn(t) {
  return t * t * t;
}

function cubicOut(t) {
  return --t * t * t + 1;
}

function cubicInOut(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}


/***/ }),

/***/ 8026:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (x => x);


/***/ }),

/***/ 3150:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l4: () => (/* reexport safe */ _path_index_js__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _path_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9963);






 // DEPRECATED! Use d3.geoIdentity().clipExtent(…).





























/***/ }),

/***/ 5432:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BZ: () => (/* binding */ tau),
/* harmony export */   Wn: () => (/* binding */ abs),
/* harmony export */   _b: () => (/* binding */ sqrt)
/* harmony export */ });
/* unused harmony exports epsilon, epsilon2, pi, halfPi, quarterPi, degrees, radians, atan, atan2, cos, ceil, exp, floor, hypot, log, pow, sin, sign, tan, acos, asin, haversin */
var epsilon = 1e-6;
var epsilon2 = 1e-12;
var pi = Math.PI;
var halfPi = pi / 2;
var quarterPi = pi / 4;
var tau = pi * 2;

var degrees = 180 / pi;
var radians = pi / 180;

var abs = Math.abs;
var atan = Math.atan;
var atan2 = Math.atan2;
var cos = Math.cos;
var ceil = Math.ceil;
var exp = Math.exp;
var floor = Math.floor;
var hypot = Math.hypot;
var log = Math.log;
var pow = Math.pow;
var sin = Math.sin;
var sign = Math.sign || function(x) { return x > 0 ? 1 : x < 0 ? -1 : 0; };
var sqrt = Math.sqrt;
var tan = Math.tan;

function acos(x) {
  return x > 1 ? 0 : x < -1 ? pi : Math.acos(x);
}

function asin(x) {
  return x > 1 ? halfPi : x < -1 ? -halfPi : Math.asin(x);
}

function haversin(x) {
  return (x = sin(x / 2)) * x;
}


/***/ }),

/***/ 6957:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ noop)
/* harmony export */ });
function noop() {}


/***/ }),

/***/ 6713:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(266);
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5432);
/* harmony import */ var _noop_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6957);




var areaSum = new d3_array__WEBPACK_IMPORTED_MODULE_0__/* .Adder */ .dU(),
    areaRingSum = new d3_array__WEBPACK_IMPORTED_MODULE_0__/* .Adder */ .dU(),
    x00,
    y00,
    x0,
    y0;

var areaStream = {
  point: _noop_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
  lineStart: _noop_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
  lineEnd: _noop_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
  polygonStart: function() {
    areaStream.lineStart = areaRingStart;
    areaStream.lineEnd = areaRingEnd;
  },
  polygonEnd: function() {
    areaStream.lineStart = areaStream.lineEnd = areaStream.point = _noop_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z;
    areaSum.add((0,_math_js__WEBPACK_IMPORTED_MODULE_2__/* .abs */ .Wn)(areaRingSum));
    areaRingSum = new d3_array__WEBPACK_IMPORTED_MODULE_0__/* .Adder */ .dU();
  },
  result: function() {
    var area = areaSum / 2;
    areaSum = new d3_array__WEBPACK_IMPORTED_MODULE_0__/* .Adder */ .dU();
    return area;
  }
};

function areaRingStart() {
  areaStream.point = areaPointFirst;
}

function areaPointFirst(x, y) {
  areaStream.point = areaPoint;
  x00 = x0 = x, y00 = y0 = y;
}

function areaPoint(x, y) {
  areaRingSum.add(y0 * x - x0 * y);
  x0 = x, y0 = y;
}

function areaRingEnd() {
  areaPoint(x00, y00);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (areaStream);


/***/ }),

/***/ 6133:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _noop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6957);


var x0 = Infinity,
    y0 = x0,
    x1 = -x0,
    y1 = x1;

var boundsStream = {
  point: boundsPoint,
  lineStart: _noop_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z,
  lineEnd: _noop_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z,
  polygonStart: _noop_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z,
  polygonEnd: _noop_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z,
  result: function() {
    var bounds = [[x0, y0], [x1, y1]];
    x1 = y1 = -(y0 = x0 = Infinity);
    return bounds;
  }
};

function boundsPoint(x, y) {
  if (x < x0) x0 = x;
  if (x > x1) x1 = x;
  if (y < y0) y0 = y;
  if (y > y1) y1 = y;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (boundsStream);


/***/ }),

/***/ 2434:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5432);


// TODO Enforce positive area for exterior, negative area for interior?

var X0 = 0,
    Y0 = 0,
    Z0 = 0,
    X1 = 0,
    Y1 = 0,
    Z1 = 0,
    X2 = 0,
    Y2 = 0,
    Z2 = 0,
    x00,
    y00,
    x0,
    y0;

var centroidStream = {
  point: centroidPoint,
  lineStart: centroidLineStart,
  lineEnd: centroidLineEnd,
  polygonStart: function() {
    centroidStream.lineStart = centroidRingStart;
    centroidStream.lineEnd = centroidRingEnd;
  },
  polygonEnd: function() {
    centroidStream.point = centroidPoint;
    centroidStream.lineStart = centroidLineStart;
    centroidStream.lineEnd = centroidLineEnd;
  },
  result: function() {
    var centroid = Z2 ? [X2 / Z2, Y2 / Z2]
        : Z1 ? [X1 / Z1, Y1 / Z1]
        : Z0 ? [X0 / Z0, Y0 / Z0]
        : [NaN, NaN];
    X0 = Y0 = Z0 =
    X1 = Y1 = Z1 =
    X2 = Y2 = Z2 = 0;
    return centroid;
  }
};

function centroidPoint(x, y) {
  X0 += x;
  Y0 += y;
  ++Z0;
}

function centroidLineStart() {
  centroidStream.point = centroidPointFirstLine;
}

function centroidPointFirstLine(x, y) {
  centroidStream.point = centroidPointLine;
  centroidPoint(x0 = x, y0 = y);
}

function centroidPointLine(x, y) {
  var dx = x - x0, dy = y - y0, z = (0,_math_js__WEBPACK_IMPORTED_MODULE_0__/* .sqrt */ ._b)(dx * dx + dy * dy);
  X1 += z * (x0 + x) / 2;
  Y1 += z * (y0 + y) / 2;
  Z1 += z;
  centroidPoint(x0 = x, y0 = y);
}

function centroidLineEnd() {
  centroidStream.point = centroidPoint;
}

function centroidRingStart() {
  centroidStream.point = centroidPointFirstRing;
}

function centroidRingEnd() {
  centroidPointRing(x00, y00);
}

function centroidPointFirstRing(x, y) {
  centroidStream.point = centroidPointRing;
  centroidPoint(x00 = x0 = x, y00 = y0 = y);
}

function centroidPointRing(x, y) {
  var dx = x - x0,
      dy = y - y0,
      z = (0,_math_js__WEBPACK_IMPORTED_MODULE_0__/* .sqrt */ ._b)(dx * dx + dy * dy);

  X1 += z * (x0 + x) / 2;
  Y1 += z * (y0 + y) / 2;
  Z1 += z;

  z = y0 * x - x0 * y;
  X2 += z * (x0 + x);
  Y2 += z * (y0 + y);
  Z2 += z * 3;
  centroidPoint(x0 = x, y0 = y);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (centroidStream);


/***/ }),

/***/ 2979:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ PathContext)
/* harmony export */ });
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5432);
/* harmony import */ var _noop_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6957);



function PathContext(context) {
  this._context = context;
}

PathContext.prototype = {
  _radius: 4.5,
  pointRadius: function(_) {
    return this._radius = _, this;
  },
  polygonStart: function() {
    this._line = 0;
  },
  polygonEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line === 0) this._context.closePath();
    this._point = NaN;
  },
  point: function(x, y) {
    switch (this._point) {
      case 0: {
        this._context.moveTo(x, y);
        this._point = 1;
        break;
      }
      case 1: {
        this._context.lineTo(x, y);
        break;
      }
      default: {
        this._context.moveTo(x + this._radius, y);
        this._context.arc(x, y, this._radius, 0, _math_js__WEBPACK_IMPORTED_MODULE_0__/* .tau */ .BZ);
        break;
      }
    }
  },
  result: _noop_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z
};


/***/ }),

/***/ 9963:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8026);
/* harmony import */ var _stream_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9378);
/* harmony import */ var _area_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6713);
/* harmony import */ var _bounds_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6133);
/* harmony import */ var _centroid_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2434);
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2979);
/* harmony import */ var _measure_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2159);
/* harmony import */ var _string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6916);









/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(projection, context) {
  let digits = 3,
      pointRadius = 4.5,
      projectionStream,
      contextStream;

  function path(object) {
    if (object) {
      if (typeof pointRadius === "function") contextStream.pointRadius(+pointRadius.apply(this, arguments));
      (0,_stream_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(object, projectionStream(contextStream));
    }
    return contextStream.result();
  }

  path.area = function(object) {
    (0,_stream_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(object, projectionStream(_area_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z));
    return _area_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.result();
  };

  path.measure = function(object) {
    (0,_stream_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(object, projectionStream(_measure_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z));
    return _measure_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.result();
  };

  path.bounds = function(object) {
    (0,_stream_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(object, projectionStream(_bounds_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z));
    return _bounds_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.result();
  };

  path.centroid = function(object) {
    (0,_stream_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(object, projectionStream(_centroid_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z));
    return _centroid_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.result();
  };

  path.projection = function(_) {
    if (!arguments.length) return projection;
    projectionStream = _ == null ? (projection = null, _identity_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z) : (projection = _).stream;
    return path;
  };

  path.context = function(_) {
    if (!arguments.length) return context;
    contextStream = _ == null ? (context = null, new _string_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z(digits)) : new _context_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z(context = _);
    if (typeof pointRadius !== "function") contextStream.pointRadius(pointRadius);
    return path;
  };

  path.pointRadius = function(_) {
    if (!arguments.length) return pointRadius;
    pointRadius = typeof _ === "function" ? _ : (contextStream.pointRadius(+_), +_);
    return path;
  };

  path.digits = function(_) {
    if (!arguments.length) return digits;
    if (_ == null) digits = null;
    else {
      const d = Math.floor(_);
      if (!(d >= 0)) throw new RangeError(`invalid digits: ${_}`);
      digits = d;
    }
    if (context === null) contextStream = new _string_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z(digits);
    return path;
  };

  return path.projection(projection).digits(digits).context(context);
}


/***/ }),

/***/ 2159:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(266);
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5432);
/* harmony import */ var _noop_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6957);




var lengthSum = new d3_array__WEBPACK_IMPORTED_MODULE_0__/* .Adder */ .dU(),
    lengthRing,
    x00,
    y00,
    x0,
    y0;

var lengthStream = {
  point: _noop_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
  lineStart: function() {
    lengthStream.point = lengthPointFirst;
  },
  lineEnd: function() {
    if (lengthRing) lengthPoint(x00, y00);
    lengthStream.point = _noop_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z;
  },
  polygonStart: function() {
    lengthRing = true;
  },
  polygonEnd: function() {
    lengthRing = null;
  },
  result: function() {
    var length = +lengthSum;
    lengthSum = new d3_array__WEBPACK_IMPORTED_MODULE_0__/* .Adder */ .dU();
    return length;
  }
};

function lengthPointFirst(x, y) {
  lengthStream.point = lengthPoint;
  x00 = x0 = x, y00 = y0 = y;
}

function lengthPoint(x, y) {
  x0 -= x, y0 -= y;
  lengthSum.add((0,_math_js__WEBPACK_IMPORTED_MODULE_2__/* .sqrt */ ._b)(x0 * x0 + y0 * y0));
  x0 = x, y0 = y;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (lengthStream);


/***/ }),

/***/ 6916:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ PathString)
/* harmony export */ });
// Simple caching for constant-radius points.
let cacheDigits, cacheAppend, cacheRadius, cacheCircle;

class PathString {
  constructor(digits) {
    this._append = digits == null ? append : appendRound(digits);
    this._radius = 4.5;
    this._ = "";
  }
  pointRadius(_) {
    this._radius = +_;
    return this;
  }
  polygonStart() {
    this._line = 0;
  }
  polygonEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    if (this._line === 0) this._ += "Z";
    this._point = NaN;
  }
  point(x, y) {
    switch (this._point) {
      case 0: {
        this._append`M${x},${y}`;
        this._point = 1;
        break;
      }
      case 1: {
        this._append`L${x},${y}`;
        break;
      }
      default: {
        this._append`M${x},${y}`;
        if (this._radius !== cacheRadius || this._append !== cacheAppend) {
          const r = this._radius;
          const s = this._;
          this._ = ""; // stash the old string so we can cache the circle path fragment
          this._append`m0,${r}a${r},${r} 0 1,1 0,${-2 * r}a${r},${r} 0 1,1 0,${2 * r}z`;
          cacheRadius = r;
          cacheAppend = this._append;
          cacheCircle = this._;
          this._ = s;
        }
        this._ += cacheCircle;
        break;
      }
    }
  }
  result() {
    const result = this._;
    this._ = "";
    return result.length ? result : null;
  }
}

function append(strings) {
  let i = 1;
  this._ += strings[0];
  for (const j = strings.length; i < j; ++i) {
    this._ += arguments[i] + strings[i];
  }
}

function appendRound(digits) {
  const d = Math.floor(digits);
  if (!(d >= 0)) throw new RangeError(`invalid digits: ${digits}`);
  if (d > 15) return append;
  if (d !== cacheDigits) {
    const k = 10 ** d;
    cacheDigits = d;
    cacheAppend = function append(strings) {
      let i = 1;
      this._ += strings[0];
      for (const j = strings.length; i < j; ++i) {
        this._ += Math.round(arguments[i] * k) / k + strings[i];
      }
    };
  }
  return cacheAppend;
}


/***/ }),

/***/ 9378:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function streamGeometry(geometry, stream) {
  if (geometry && streamGeometryType.hasOwnProperty(geometry.type)) {
    streamGeometryType[geometry.type](geometry, stream);
  }
}

var streamObjectType = {
  Feature: function(object, stream) {
    streamGeometry(object.geometry, stream);
  },
  FeatureCollection: function(object, stream) {
    var features = object.features, i = -1, n = features.length;
    while (++i < n) streamGeometry(features[i].geometry, stream);
  }
};

var streamGeometryType = {
  Sphere: function(object, stream) {
    stream.sphere();
  },
  Point: function(object, stream) {
    object = object.coordinates;
    stream.point(object[0], object[1], object[2]);
  },
  MultiPoint: function(object, stream) {
    var coordinates = object.coordinates, i = -1, n = coordinates.length;
    while (++i < n) object = coordinates[i], stream.point(object[0], object[1], object[2]);
  },
  LineString: function(object, stream) {
    streamLine(object.coordinates, stream, 0);
  },
  MultiLineString: function(object, stream) {
    var coordinates = object.coordinates, i = -1, n = coordinates.length;
    while (++i < n) streamLine(coordinates[i], stream, 0);
  },
  Polygon: function(object, stream) {
    streamPolygon(object.coordinates, stream);
  },
  MultiPolygon: function(object, stream) {
    var coordinates = object.coordinates, i = -1, n = coordinates.length;
    while (++i < n) streamPolygon(coordinates[i], stream);
  },
  GeometryCollection: function(object, stream) {
    var geometries = object.geometries, i = -1, n = geometries.length;
    while (++i < n) streamGeometry(geometries[i], stream);
  }
};

function streamLine(coordinates, stream, closed) {
  var i = -1, n = coordinates.length - closed, coordinate;
  stream.lineStart();
  while (++i < n) coordinate = coordinates[i], stream.point(coordinate[0], coordinate[1], coordinate[2]);
  stream.lineEnd();
}

function streamPolygon(coordinates, stream) {
  var i = -1, n = coordinates.length;
  stream.polygonStart();
  while (++i < n) streamLine(coordinates[i], stream, 1);
  stream.polygonEnd();
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(object, stream) {
  if (object && streamObjectType.hasOwnProperty(object.type)) {
    streamObjectType[object.type](object, stream);
  } else {
    streamGeometry(object, stream);
  }
}


/***/ }),

/***/ 7265:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   t: () => (/* binding */ basis)
/* harmony export */ });
function basis(t1, v0, v1, v2, v3) {
  var t2 = t1 * t1, t3 = t2 * t1;
  return ((1 - 3 * t1 + 3 * t2 - t3) * v0
      + (4 - 6 * t2 + 3 * t3) * v1
      + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2
      + t3 * v3) / 6;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(values) {
  var n = values.length - 1;
  return function(t) {
    var i = t <= 0 ? (t = 0) : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n),
        v1 = values[i],
        v2 = values[i + 1],
        v0 = i > 0 ? values[i - 1] : 2 * v1 - v2,
        v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
}


/***/ }),

/***/ 6068:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _basis_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7265);


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(values) {
  var n = values.length;
  return function(t) {
    var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n),
        v0 = values[(i + n - 1) % n],
        v1 = values[i % n],
        v2 = values[(i + 1) % n],
        v3 = values[(i + 2) % n];
    return (0,_basis_js__WEBPACK_IMPORTED_MODULE_0__/* .basis */ .t)((t - i / n) * n, v0, v1, v2, v3);
  };
}


/***/ }),

/***/ 8280:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (/* binding */ nogamma),
/* harmony export */   yi: () => (/* binding */ gamma)
/* harmony export */ });
/* unused harmony export hue */
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2954);


function linear(a, d) {
  return function(t) {
    return a + t * d;
  };
}

function exponential(a, b, y) {
  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
    return Math.pow(a + t * b, y);
  };
}

function hue(a, b) {
  var d = b - a;
  return d ? linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : constant(isNaN(a) ? b : a);
}

function gamma(y) {
  return (y = +y) === 1 ? nogamma : function(a, b) {
    return b - a ? exponential(a, b, y) : (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(isNaN(a) ? b : a);
  };
}

function nogamma(a, b) {
  var d = b - a;
  return d ? linear(a, d) : (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(isNaN(a) ? b : a);
}


/***/ }),

/***/ 2954:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (x => () => x);


/***/ }),

/***/ 8063:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a, b) {
  return a = +a, b = +b, function(t) {
    return a * (1 - t) + b * t;
  };
}


/***/ }),

/***/ 6354:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports rgbBasis, rgbBasisClosed */
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4447);
/* harmony import */ var _basis_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7265);
/* harmony import */ var _basisClosed_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6068);
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8280);





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function rgbGamma(y) {
  var color = (0,_color_js__WEBPACK_IMPORTED_MODULE_0__/* .gamma */ .yi)(y);

  function rgb(start, end) {
    var r = color((start = (0,d3_color__WEBPACK_IMPORTED_MODULE_1__/* .rgb */ .B8)(start)).r, (end = (0,d3_color__WEBPACK_IMPORTED_MODULE_1__/* .rgb */ .B8)(end)).r),
        g = color(start.g, end.g),
        b = color(start.b, end.b),
        opacity = (0,_color_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)(start.opacity, end.opacity);
    return function(t) {
      start.r = r(t);
      start.g = g(t);
      start.b = b(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }

  rgb.gamma = rgbGamma;

  return rgb;
})(1));

function rgbSpline(spline) {
  return function(colors) {
    var n = colors.length,
        r = new Array(n),
        g = new Array(n),
        b = new Array(n),
        i, color;
    for (i = 0; i < n; ++i) {
      color = (0,d3_color__WEBPACK_IMPORTED_MODULE_1__/* .rgb */ .B8)(colors[i]);
      r[i] = color.r || 0;
      g[i] = color.g || 0;
      b[i] = color.b || 0;
    }
    r = spline(r);
    g = spline(g);
    b = spline(b);
    color.opacity = 1;
    return function(t) {
      color.r = r(t);
      color.g = g(t);
      color.b = b(t);
      return color + "";
    };
  };
}

var rgbBasis = rgbSpline(_basis_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);
var rgbBasisClosed = rgbSpline(_basisClosed_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z);


/***/ }),

/***/ 6773:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8063);


var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
    reB = new RegExp(reA.source, "g");

function zero(b) {
  return function() {
    return b;
  };
}

function one(b) {
  return function(t) {
    return b(t) + "";
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0, // scan index for next number in b
      am, // current match in a
      bm, // current match in b
      bs, // string preceding current number in b, if any
      i = -1, // index in s
      s = [], // string constants and placeholders
      q = []; // number interpolators

  // Coerce inputs to strings.
  a = a + "", b = b + "";

  // Interpolate pairs of numbers in a & b.
  while ((am = reA.exec(a))
      && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) { // a string precedes the next number in b
      bs = b.slice(bi, bs);
      if (s[i]) s[i] += bs; // coalesce with previous string
      else s[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) { // numbers in a & b match
      if (s[i]) s[i] += bm; // coalesce with previous string
      else s[++i] = bm;
    } else { // interpolate non-matching numbers
      s[++i] = null;
      q.push({i: i, x: (0,_number_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(am, bm)});
    }
    bi = reB.lastIndex;
  }

  // Add remains of b.
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i]) s[i] += bs; // coalesce with previous string
    else s[++i] = bs;
  }

  // Special optimization for only a single match.
  // Otherwise, interpolate each of the numbers and rejoin the string.
  return s.length < 2 ? (q[0]
      ? one(q[0].x)
      : zero(b))
      : (b = q.length, function(t) {
          for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
          return s.join("");
        });
}


/***/ }),

/***/ 8569:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   y: () => (/* binding */ identity)
/* harmony export */ });
var degrees = 180 / Math.PI;

var identity = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a, b, c, d, e, f) {
  var scaleX, scaleY, skewX;
  if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
  if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
  if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
  if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
  return {
    translateX: e,
    translateY: f,
    rotate: Math.atan2(b, a) * degrees,
    skewX: Math.atan(skewX) * degrees,
    scaleX: scaleX,
    scaleY: scaleY
  };
}


/***/ }),

/***/ 3465:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ interpolateTransformCss),
/* harmony export */   w: () => (/* binding */ interpolateTransformSvg)
/* harmony export */ });
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8063);
/* harmony import */ var _parse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5821);



function interpolateTransform(parse, pxComma, pxParen, degParen) {

  function pop(s) {
    return s.length ? s.pop() + " " : "";
  }

  function translate(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push("translate(", null, pxComma, null, pxParen);
      q.push({i: i - 4, x: (0,_number_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(xa, xb)}, {i: i - 2, x: (0,_number_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(ya, yb)});
    } else if (xb || yb) {
      s.push("translate(" + xb + pxComma + yb + pxParen);
    }
  }

  function rotate(a, b, s, q) {
    if (a !== b) {
      if (a - b > 180) b += 360; else if (b - a > 180) a += 360; // shortest path
      q.push({i: s.push(pop(s) + "rotate(", null, degParen) - 2, x: (0,_number_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(a, b)});
    } else if (b) {
      s.push(pop(s) + "rotate(" + b + degParen);
    }
  }

  function skewX(a, b, s, q) {
    if (a !== b) {
      q.push({i: s.push(pop(s) + "skewX(", null, degParen) - 2, x: (0,_number_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(a, b)});
    } else if (b) {
      s.push(pop(s) + "skewX(" + b + degParen);
    }
  }

  function scale(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push(pop(s) + "scale(", null, ",", null, ")");
      q.push({i: i - 4, x: (0,_number_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(xa, xb)}, {i: i - 2, x: (0,_number_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(ya, yb)});
    } else if (xb !== 1 || yb !== 1) {
      s.push(pop(s) + "scale(" + xb + "," + yb + ")");
    }
  }

  return function(a, b) {
    var s = [], // string constants and placeholders
        q = []; // number interpolators
    a = parse(a), b = parse(b);
    translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
    rotate(a.rotate, b.rotate, s, q);
    skewX(a.skewX, b.skewX, s, q);
    scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
    a = b = null; // gc
    return function(t) {
      var i = -1, n = q.length, o;
      while (++i < n) s[(o = q[i]).i] = o.x(t);
      return s.join("");
    };
  };
}

var interpolateTransformCss = interpolateTransform(_parse_js__WEBPACK_IMPORTED_MODULE_1__/* .parseCss */ .z, "px, ", "px)", "deg)");
var interpolateTransformSvg = interpolateTransform(_parse_js__WEBPACK_IMPORTED_MODULE_1__/* .parseSvg */ .X, ", ", ")", ")");


/***/ }),

/***/ 5821:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ parseSvg),
/* harmony export */   z: () => (/* binding */ parseCss)
/* harmony export */ });
/* harmony import */ var _decompose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8569);


var svgNode;

/* eslint-disable no-undef */
function parseCss(value) {
  const m = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
  return m.isIdentity ? _decompose_js__WEBPACK_IMPORTED_MODULE_0__/* .identity */ .y : (0,_decompose_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(m.a, m.b, m.c, m.d, m.e, m.f);
}

function parseSvg(value) {
  if (value == null) return _decompose_js__WEBPACK_IMPORTED_MODULE_0__/* .identity */ .y;
  if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode.setAttribute("transform", value);
  if (!(value = svgNode.transform.baseVal.consolidate())) return _decompose_js__WEBPACK_IMPORTED_MODULE_0__/* .identity */ .y;
  value = value.matrix;
  return (0,_decompose_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(value.a, value.b, value.c, value.d, value.e, value.f);
}


/***/ }),

/***/ 8167:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var epsilon2 = 1e-12;

function cosh(x) {
  return ((x = Math.exp(x)) + 1 / x) / 2;
}

function sinh(x) {
  return ((x = Math.exp(x)) - 1 / x) / 2;
}

function tanh(x) {
  return ((x = Math.exp(2 * x)) - 1) / (x + 1);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function zoomRho(rho, rho2, rho4) {

  // p0 = [ux0, uy0, w0]
  // p1 = [ux1, uy1, w1]
  function zoom(p0, p1) {
    var ux0 = p0[0], uy0 = p0[1], w0 = p0[2],
        ux1 = p1[0], uy1 = p1[1], w1 = p1[2],
        dx = ux1 - ux0,
        dy = uy1 - uy0,
        d2 = dx * dx + dy * dy,
        i,
        S;

    // Special case for u0 ≅ u1.
    if (d2 < epsilon2) {
      S = Math.log(w1 / w0) / rho;
      i = function(t) {
        return [
          ux0 + t * dx,
          uy0 + t * dy,
          w0 * Math.exp(rho * t * S)
        ];
      }
    }

    // General case.
    else {
      var d1 = Math.sqrt(d2),
          b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1),
          b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1),
          r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0),
          r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
      S = (r1 - r0) / rho;
      i = function(t) {
        var s = t * S,
            coshr0 = cosh(r0),
            u = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s + r0) - sinh(r0));
        return [
          ux0 + u * dx,
          uy0 + u * dy,
          w0 * coshr0 / cosh(rho * s + r0)
        ];
      }
    }

    i.duration = S * 1000 * rho / Math.SQRT2;

    return i;
  }

  zoom.rho = function(_) {
    var _1 = Math.max(1e-3, +_), _2 = _1 * _1, _4 = _2 * _2;
    return zoomRho(_1, _2, _4);
  };

  return zoom;
})(Math.SQRT2, 2, 4));


/***/ }),

/***/ 9898:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ array)
/* harmony export */ });
// Given something array like (or null), returns something that is strictly an
// array. This is used to ensure that array-like objects passed to d3.selectAll
// or selection.selectAll are converted into proper arrays when creating a
// selection; we don’t ever want to create a selection backed by a live
// HTMLCollection or NodeList. However, note that selection.selectAll will use a
// static NodeList as a group, since it safely derived from querySelectorAll.
function array(x) {
  return x == null ? [] : Array.isArray(x) ? x : Array.from(x);
}


/***/ }),

/***/ 364:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(x) {
  return function() {
    return x;
  };
}


/***/ }),

/***/ 4708:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _namespace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1663);
/* harmony import */ var _namespaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1226);



function creatorInherit(name) {
  return function() {
    var document = this.ownerDocument,
        uri = this.namespaceURI;
    return uri === _namespaces_js__WEBPACK_IMPORTED_MODULE_0__/* .xhtml */ .P && document.documentElement.namespaceURI === _namespaces_js__WEBPACK_IMPORTED_MODULE_0__/* .xhtml */ .P
        ? document.createElement(name)
        : document.createElementNS(uri, name);
  };
}

function creatorFixed(fullname) {
  return function() {
    return this.ownerDocument.createElementNS(fullname.space, fullname.local);
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name) {
  var fullname = (0,_namespace_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(name);
  return (fullname.local
      ? creatorFixed
      : creatorInherit)(fullname);
}


/***/ }),

/***/ 3950:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ys: () => (/* reexport safe */ _select_js__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   td: () => (/* reexport safe */ _selectAll_js__WEBPACK_IMPORTED_MODULE_1__.Z)
/* harmony export */ });
/* harmony import */ var _select_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3838);
/* harmony import */ var _selectAll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4264);

















/***/ }),

/***/ 4421:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ childMatcher),
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(selector) {
  return function() {
    return this.matches(selector);
  };
}

function childMatcher(selector) {
  return function(node) {
    return node.matches(selector);
  };
}



/***/ }),

/***/ 1663:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _namespaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1226);


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name) {
  var prefix = name += "", i = prefix.indexOf(":");
  if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
  return _namespaces_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.hasOwnProperty(prefix) ? {space: _namespaces_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z[prefix], local: name} : name; // eslint-disable-line no-prototype-builtins
}


/***/ }),

/***/ 1226:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ xhtml),
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var xhtml = "http://www.w3.org/1999/xhtml";

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  svg: "http://www.w3.org/2000/svg",
  xhtml: xhtml,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
});


/***/ }),

/***/ 3109:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sourceEvent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9439);


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(event, node) {
  event = (0,_sourceEvent_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(event);
  if (node === undefined) node = event.currentTarget;
  if (node) {
    var svg = node.ownerSVGElement || node;
    if (svg.createSVGPoint) {
      var point = svg.createSVGPoint();
      point.x = event.clientX, point.y = event.clientY;
      point = point.matrixTransform(node.getScreenCTM().inverse());
      return [point.x, point.y];
    }
    if (node.getBoundingClientRect) {
      var rect = node.getBoundingClientRect();
      return [event.clientX - rect.left - node.clientLeft, event.clientY - rect.top - node.clientTop];
    }
  }
  return [event.pageX, event.pageY];
}


/***/ }),

/***/ 3838:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _selection_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8390);


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(selector) {
  return typeof selector === "string"
      ? new _selection_index_js__WEBPACK_IMPORTED_MODULE_0__/* .Selection */ .Y1([[document.querySelector(selector)]], [document.documentElement])
      : new _selection_index_js__WEBPACK_IMPORTED_MODULE_0__/* .Selection */ .Y1([[selector]], _selection_index_js__WEBPACK_IMPORTED_MODULE_0__/* .root */ .Jz);
}


/***/ }),

/***/ 4264:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9898);
/* harmony import */ var _selection_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8390);



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(selector) {
  return typeof selector === "string"
      ? new _selection_index_js__WEBPACK_IMPORTED_MODULE_0__/* .Selection */ .Y1([document.querySelectorAll(selector)], [document.documentElement])
      : new _selection_index_js__WEBPACK_IMPORTED_MODULE_0__/* .Selection */ .Y1([(0,_array_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(selector)], _selection_index_js__WEBPACK_IMPORTED_MODULE_0__/* .root */ .Jz);
}


/***/ }),

/***/ 7911:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _creator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4708);


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name) {
  var create = typeof name === "function" ? name : (0,_creator_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(name);
  return this.select(function() {
    return this.appendChild(create.apply(this, arguments));
  });
}


/***/ }),

/***/ 7405:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _namespace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1663);


function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}

function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attrConstant(name, value) {
  return function() {
    this.setAttribute(name, value);
  };
}

function attrConstantNS(fullname, value) {
  return function() {
    this.setAttributeNS(fullname.space, fullname.local, value);
  };
}

function attrFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttribute(name);
    else this.setAttribute(name, v);
  };
}

function attrFunctionNS(fullname, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttributeNS(fullname.space, fullname.local);
    else this.setAttributeNS(fullname.space, fullname.local, v);
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, value) {
  var fullname = (0,_namespace_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(name);

  if (arguments.length < 2) {
    var node = this.node();
    return fullname.local
        ? node.getAttributeNS(fullname.space, fullname.local)
        : node.getAttribute(fullname);
  }

  return this.each((value == null
      ? (fullname.local ? attrRemoveNS : attrRemove) : (typeof value === "function"
      ? (fullname.local ? attrFunctionNS : attrFunction)
      : (fullname.local ? attrConstantNS : attrConstant)))(fullname, value));
}


/***/ }),

/***/ 5772:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var callback = arguments[0];
  arguments[0] = this;
  callback.apply(null, arguments);
  return this;
}


/***/ }),

/***/ 5016:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function classArray(string) {
  return string.trim().split(/^|\s+/);
}

function classList(node) {
  return node.classList || new ClassList(node);
}

function ClassList(node) {
  this._node = node;
  this._names = classArray(node.getAttribute("class") || "");
}

ClassList.prototype = {
  add: function(name) {
    var i = this._names.indexOf(name);
    if (i < 0) {
      this._names.push(name);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  remove: function(name) {
    var i = this._names.indexOf(name);
    if (i >= 0) {
      this._names.splice(i, 1);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  contains: function(name) {
    return this._names.indexOf(name) >= 0;
  }
};

function classedAdd(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.add(names[i]);
}

function classedRemove(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.remove(names[i]);
}

function classedTrue(names) {
  return function() {
    classedAdd(this, names);
  };
}

function classedFalse(names) {
  return function() {
    classedRemove(this, names);
  };
}

function classedFunction(names, value) {
  return function() {
    (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, value) {
  var names = classArray(name + "");

  if (arguments.length < 2) {
    var list = classList(this.node()), i = -1, n = names.length;
    while (++i < n) if (!list.contains(names[i])) return false;
    return true;
  }

  return this.each((typeof value === "function"
      ? classedFunction : value
      ? classedTrue
      : classedFalse)(names, value));
}


/***/ }),

/***/ 5122:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function selection_cloneShallow() {
  var clone = this.cloneNode(false), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}

function selection_cloneDeep() {
  var clone = this.cloneNode(true), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(deep) {
  return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
}


/***/ }),

/***/ 4764:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8390);
/* harmony import */ var _enter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2270);
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(364);




function bindIndex(parent, group, enter, update, exit, data) {
  var i = 0,
      node,
      groupLength = group.length,
      dataLength = data.length;

  // Put any non-null nodes that fit into update.
  // Put any null nodes into enter.
  // Put any remaining data into enter.
  for (; i < dataLength; ++i) {
    if (node = group[i]) {
      node.__data__ = data[i];
      update[i] = node;
    } else {
      enter[i] = new _enter_js__WEBPACK_IMPORTED_MODULE_0__/* .EnterNode */ .F(parent, data[i]);
    }
  }

  // Put any non-null nodes that don’t fit into exit.
  for (; i < groupLength; ++i) {
    if (node = group[i]) {
      exit[i] = node;
    }
  }
}

function bindKey(parent, group, enter, update, exit, data, key) {
  var i,
      node,
      nodeByKeyValue = new Map,
      groupLength = group.length,
      dataLength = data.length,
      keyValues = new Array(groupLength),
      keyValue;

  // Compute the key for each node.
  // If multiple nodes have the same key, the duplicates are added to exit.
  for (i = 0; i < groupLength; ++i) {
    if (node = group[i]) {
      keyValues[i] = keyValue = key.call(node, node.__data__, i, group) + "";
      if (nodeByKeyValue.has(keyValue)) {
        exit[i] = node;
      } else {
        nodeByKeyValue.set(keyValue, node);
      }
    }
  }

  // Compute the key for each datum.
  // If there a node associated with this key, join and add it to update.
  // If there is not (or the key is a duplicate), add it to enter.
  for (i = 0; i < dataLength; ++i) {
    keyValue = key.call(parent, data[i], i, data) + "";
    if (node = nodeByKeyValue.get(keyValue)) {
      update[i] = node;
      node.__data__ = data[i];
      nodeByKeyValue.delete(keyValue);
    } else {
      enter[i] = new _enter_js__WEBPACK_IMPORTED_MODULE_0__/* .EnterNode */ .F(parent, data[i]);
    }
  }

  // Add any remaining nodes that were not bound to data to exit.
  for (i = 0; i < groupLength; ++i) {
    if ((node = group[i]) && (nodeByKeyValue.get(keyValues[i]) === node)) {
      exit[i] = node;
    }
  }
}

function datum(node) {
  return node.__data__;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value, key) {
  if (!arguments.length) return Array.from(this, datum);

  var bind = key ? bindKey : bindIndex,
      parents = this._parents,
      groups = this._groups;

  if (typeof value !== "function") value = (0,_constant_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(value);

  for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
    var parent = parents[j],
        group = groups[j],
        groupLength = group.length,
        data = arraylike(value.call(parent, parent && parent.__data__, j, parents)),
        dataLength = data.length,
        enterGroup = enter[j] = new Array(dataLength),
        updateGroup = update[j] = new Array(dataLength),
        exitGroup = exit[j] = new Array(groupLength);

    bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);

    // Now connect the enter nodes to their following update node, such that
    // appendChild can insert the materialized enter node before this node,
    // rather than at the end of the parent node.
    for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
      if (previous = enterGroup[i0]) {
        if (i0 >= i1) i1 = i0 + 1;
        while (!(next = updateGroup[i1]) && ++i1 < dataLength);
        previous._next = next || null;
      }
    }
  }

  update = new _index_js__WEBPACK_IMPORTED_MODULE_2__/* .Selection */ .Y1(update, parents);
  update._enter = enter;
  update._exit = exit;
  return update;
}

// Given some data, this returns an array-like view of it: an object that
// exposes a length property and allows numeric indexing. Note that unlike
// selectAll, this isn’t worried about “live” collections because the resulting
// array will only be used briefly while data is being bound. (It is possible to
// cause the data to change while iterating by using a key function, but please
// don’t; we’d rather avoid a gratuitous copy.)
function arraylike(data) {
  return typeof data === "object" && "length" in data
    ? data // Array, TypedArray, NodeList, array-like
    : Array.from(data); // Map, Set, iterable, string, or anything else
}


/***/ }),

/***/ 5667:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value) {
  return arguments.length
      ? this.property("__data__", value)
      : this.node().__data__;
}


/***/ }),

/***/ 3790:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _window_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9920);


function dispatchEvent(node, type, params) {
  var window = (0,_window_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(node),
      event = window.CustomEvent;

  if (typeof event === "function") {
    event = new event(type, params);
  } else {
    event = window.document.createEvent("Event");
    if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
    else event.initEvent(type, false, false);
  }

  node.dispatchEvent(event);
}

function dispatchConstant(type, params) {
  return function() {
    return dispatchEvent(this, type, params);
  };
}

function dispatchFunction(type, params) {
  return function() {
    return dispatchEvent(this, type, params.apply(this, arguments));
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(type, params) {
  return this.each((typeof params === "function"
      ? dispatchFunction
      : dispatchConstant)(type, params));
}


/***/ }),

/***/ 6347:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(callback) {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i]) callback.call(node, node.__data__, i, group);
    }
  }

  return this;
}


/***/ }),

/***/ 7844:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return !this.node();
}


/***/ }),

/***/ 2270:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ EnterNode),
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sparse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1586);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8390);



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return new _index_js__WEBPACK_IMPORTED_MODULE_0__/* .Selection */ .Y1(this._enter || this._groups.map(_sparse_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z), this._parents);
}

function EnterNode(parent, datum) {
  this.ownerDocument = parent.ownerDocument;
  this.namespaceURI = parent.namespaceURI;
  this._next = null;
  this._parent = parent;
  this.__data__ = datum;
}

EnterNode.prototype = {
  constructor: EnterNode,
  appendChild: function(child) { return this._parent.insertBefore(child, this._next); },
  insertBefore: function(child, next) { return this._parent.insertBefore(child, next); },
  querySelector: function(selector) { return this._parent.querySelector(selector); },
  querySelectorAll: function(selector) { return this._parent.querySelectorAll(selector); }
};


/***/ }),

/***/ 6790:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sparse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1586);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8390);



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return new _index_js__WEBPACK_IMPORTED_MODULE_0__/* .Selection */ .Y1(this._exit || this._groups.map(_sparse_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z), this._parents);
}


/***/ }),

/***/ 5777:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8390);
/* harmony import */ var _matcher_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4421);



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(match) {
  if (typeof match !== "function") match = (0,_matcher_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(match);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_1__/* .Selection */ .Y1(subgroups, this._parents);
}


/***/ }),

/***/ 655:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function htmlRemove() {
  this.innerHTML = "";
}

function htmlConstant(value) {
  return function() {
    this.innerHTML = value;
  };
}

function htmlFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.innerHTML = v == null ? "" : v;
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value) {
  return arguments.length
      ? this.each(value == null
          ? htmlRemove : (typeof value === "function"
          ? htmlFunction
          : htmlConstant)(value))
      : this.node().innerHTML;
}


/***/ }),

/***/ 8390:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Jz: () => (/* binding */ root),
/* harmony export */   Y1: () => (/* binding */ Selection),
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _select_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(486);
/* harmony import */ var _selectAll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6932);
/* harmony import */ var _selectChild_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4735);
/* harmony import */ var _selectChildren_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(467);
/* harmony import */ var _filter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5777);
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4764);
/* harmony import */ var _enter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2270);
/* harmony import */ var _exit_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6790);
/* harmony import */ var _join_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1474);
/* harmony import */ var _merge_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6359);
/* harmony import */ var _order_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4729);
/* harmony import */ var _sort_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9548);
/* harmony import */ var _call_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5772);
/* harmony import */ var _nodes_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(426);
/* harmony import */ var _node_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(838);
/* harmony import */ var _size_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6909);
/* harmony import */ var _empty_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(7844);
/* harmony import */ var _each_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(6347);
/* harmony import */ var _attr_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(7405);
/* harmony import */ var _style_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(2627);
/* harmony import */ var _property_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(9714);
/* harmony import */ var _classed_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(5016);
/* harmony import */ var _text_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(8386);
/* harmony import */ var _html_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(655);
/* harmony import */ var _raise_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(1903);
/* harmony import */ var _lower_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(6017);
/* harmony import */ var _append_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(7911);
/* harmony import */ var _insert_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(2504);
/* harmony import */ var _remove_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(8349);
/* harmony import */ var _clone_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(5122);
/* harmony import */ var _datum_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(5667);
/* harmony import */ var _on_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(2017);
/* harmony import */ var _dispatch_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(3790);
/* harmony import */ var _iterator_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(3536);



































var root = [null];

function Selection(groups, parents) {
  this._groups = groups;
  this._parents = parents;
}

function selection() {
  return new Selection([[document.documentElement]], root);
}

function selection_selection() {
  return this;
}

Selection.prototype = selection.prototype = {
  constructor: Selection,
  select: _select_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z,
  selectAll: _selectAll_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
  selectChild: _selectChild_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
  selectChildren: _selectChildren_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
  filter: _filter_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
  data: _data_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
  enter: _enter_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
  exit: _exit_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
  join: _join_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
  merge: _merge_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
  selection: selection_selection,
  order: _order_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z,
  sort: _sort_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,
  call: _call_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z,
  nodes: _nodes_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z,
  node: _node_js__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z,
  size: _size_js__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z,
  empty: _empty_js__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z,
  each: _each_js__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z,
  attr: _attr_js__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z,
  style: _style_js__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z,
  property: _property_js__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z,
  classed: _classed_js__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z,
  text: _text_js__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z,
  html: _html_js__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z,
  raise: _raise_js__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z,
  lower: _lower_js__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z,
  append: _append_js__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z,
  insert: _insert_js__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z,
  remove: _remove_js__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z,
  clone: _clone_js__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z,
  datum: _datum_js__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .Z,
  on: _on_js__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Z,
  dispatch: _dispatch_js__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .Z,
  [Symbol.iterator]: _iterator_js__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .Z
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (selection);


/***/ }),

/***/ 2504:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _creator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4708);
/* harmony import */ var _selector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3010);



function constantNull() {
  return null;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, before) {
  var create = typeof name === "function" ? name : (0,_creator_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(name),
      select = before == null ? constantNull : typeof before === "function" ? before : (0,_selector_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(before);
  return this.select(function() {
    return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
  });
}


/***/ }),

/***/ 3536:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function* __WEBPACK_DEFAULT_EXPORT__() {
  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i]) yield node;
    }
  }
}


/***/ }),

/***/ 1474:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(onenter, onupdate, onexit) {
  var enter = this.enter(), update = this, exit = this.exit();
  if (typeof onenter === "function") {
    enter = onenter(enter);
    if (enter) enter = enter.selection();
  } else {
    enter = enter.append(onenter + "");
  }
  if (onupdate != null) {
    update = onupdate(update);
    if (update) update = update.selection();
  }
  if (onexit == null) exit.remove(); else onexit(exit);
  return enter && update ? enter.merge(update).order() : update;
}


/***/ }),

/***/ 6017:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function lower() {
  if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return this.each(lower);
}


/***/ }),

/***/ 6359:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8390);


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(context) {
  var selection = context.selection ? context.selection() : context;

  for (var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_0__/* .Selection */ .Y1(merges, this._parents);
}


/***/ }),

/***/ 838:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
      var node = group[i];
      if (node) return node;
    }
  }

  return null;
}


/***/ }),

/***/ 426:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return Array.from(this);
}


/***/ }),

/***/ 2017:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function contextListener(listener) {
  return function(event) {
    listener.call(this, event, this.__data__);
  };
}

function parseTypenames(typenames) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    return {type: t, name: name};
  });
}

function onRemove(typename) {
  return function() {
    var on = this.__on;
    if (!on) return;
    for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
      if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.options);
      } else {
        on[++i] = o;
      }
    }
    if (++i) on.length = i;
    else delete this.__on;
  };
}

function onAdd(typename, value, options) {
  return function() {
    var on = this.__on, o, listener = contextListener(value);
    if (on) for (var j = 0, m = on.length; j < m; ++j) {
      if ((o = on[j]).type === typename.type && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.options);
        this.addEventListener(o.type, o.listener = listener, o.options = options);
        o.value = value;
        return;
      }
    }
    this.addEventListener(typename.type, listener, options);
    o = {type: typename.type, name: typename.name, value: value, listener: listener, options: options};
    if (!on) this.__on = [o];
    else on.push(o);
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(typename, value, options) {
  var typenames = parseTypenames(typename + ""), i, n = typenames.length, t;

  if (arguments.length < 2) {
    var on = this.node().__on;
    if (on) for (var j = 0, m = on.length, o; j < m; ++j) {
      for (i = 0, o = on[j]; i < n; ++i) {
        if ((t = typenames[i]).type === o.type && t.name === o.name) {
          return o.value;
        }
      }
    }
    return;
  }

  on = value ? onAdd : onRemove;
  for (i = 0; i < n; ++i) this.each(on(typenames[i], value, options));
  return this;
}


/***/ }),

/***/ 4729:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {

  for (var groups = this._groups, j = -1, m = groups.length; ++j < m;) {
    for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;) {
      if (node = group[i]) {
        if (next && node.compareDocumentPosition(next) ^ 4) next.parentNode.insertBefore(node, next);
        next = node;
      }
    }
  }

  return this;
}


/***/ }),

/***/ 9714:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function propertyRemove(name) {
  return function() {
    delete this[name];
  };
}

function propertyConstant(name, value) {
  return function() {
    this[name] = value;
  };
}

function propertyFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) delete this[name];
    else this[name] = v;
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, value) {
  return arguments.length > 1
      ? this.each((value == null
          ? propertyRemove : typeof value === "function"
          ? propertyFunction
          : propertyConstant)(name, value))
      : this.node()[name];
}


/***/ }),

/***/ 1903:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function raise() {
  if (this.nextSibling) this.parentNode.appendChild(this);
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return this.each(raise);
}


/***/ }),

/***/ 8349:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function remove() {
  var parent = this.parentNode;
  if (parent) parent.removeChild(this);
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return this.each(remove);
}


/***/ }),

/***/ 486:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8390);
/* harmony import */ var _selector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3010);



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(select) {
  if (typeof select !== "function") select = (0,_selector_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(select);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
      }
    }
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_1__/* .Selection */ .Y1(subgroups, this._parents);
}


/***/ }),

/***/ 6932:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8390);
/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9898);
/* harmony import */ var _selectorAll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9701);




function arrayAll(select) {
  return function() {
    return (0,_array_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(select.apply(this, arguments));
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(select) {
  if (typeof select === "function") select = arrayAll(select);
  else select = (0,_selectorAll_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(select);

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        subgroups.push(select.call(node, node.__data__, i, group));
        parents.push(node);
      }
    }
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_2__/* .Selection */ .Y1(subgroups, parents);
}


/***/ }),

/***/ 4735:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _matcher_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4421);


var find = Array.prototype.find;

function childFind(match) {
  return function() {
    return find.call(this.children, match);
  };
}

function childFirst() {
  return this.firstElementChild;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(match) {
  return this.select(match == null ? childFirst
      : childFind(typeof match === "function" ? match : (0,_matcher_js__WEBPACK_IMPORTED_MODULE_0__/* .childMatcher */ .P)(match)));
}


/***/ }),

/***/ 467:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _matcher_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4421);


var filter = Array.prototype.filter;

function children() {
  return Array.from(this.children);
}

function childrenFilter(match) {
  return function() {
    return filter.call(this.children, match);
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(match) {
  return this.selectAll(match == null ? children
      : childrenFilter(typeof match === "function" ? match : (0,_matcher_js__WEBPACK_IMPORTED_MODULE_0__/* .childMatcher */ .P)(match)));
}


/***/ }),

/***/ 6909:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  let size = 0;
  for (const node of this) ++size; // eslint-disable-line no-unused-vars
  return size;
}


/***/ }),

/***/ 9548:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8390);


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(compare) {
  if (!compare) compare = ascending;

  function compareNode(a, b) {
    return a && b ? compare(a.__data__, b.__data__) : !a - !b;
  }

  for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        sortgroup[i] = node;
      }
    }
    sortgroup.sort(compareNode);
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_0__/* .Selection */ .Y1(sortgroups, this._parents).order();
}

function ascending(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}


/***/ }),

/***/ 1586:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(update) {
  return new Array(update.length);
}


/***/ }),

/***/ 2627:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ styleValue),
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _window_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9920);


function styleRemove(name) {
  return function() {
    this.style.removeProperty(name);
  };
}

function styleConstant(name, value, priority) {
  return function() {
    this.style.setProperty(name, value, priority);
  };
}

function styleFunction(name, value, priority) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.style.removeProperty(name);
    else this.style.setProperty(name, v, priority);
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, value, priority) {
  return arguments.length > 1
      ? this.each((value == null
            ? styleRemove : typeof value === "function"
            ? styleFunction
            : styleConstant)(name, value, priority == null ? "" : priority))
      : styleValue(this.node(), name);
}

function styleValue(node, name) {
  return node.style.getPropertyValue(name)
      || (0,_window_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(node).getComputedStyle(node, null).getPropertyValue(name);
}


/***/ }),

/***/ 8386:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function textRemove() {
  this.textContent = "";
}

function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}

function textFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.textContent = v == null ? "" : v;
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value) {
  return arguments.length
      ? this.each(value == null
          ? textRemove : (typeof value === "function"
          ? textFunction
          : textConstant)(value))
      : this.node().textContent;
}


/***/ }),

/***/ 3010:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function none() {}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(selector) {
  return selector == null ? none : function() {
    return this.querySelector(selector);
  };
}


/***/ }),

/***/ 9701:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function empty() {
  return [];
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(selector) {
  return selector == null ? empty : function() {
    return this.querySelectorAll(selector);
  };
}


/***/ }),

/***/ 9439:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(event) {
  let sourceEvent;
  while (sourceEvent = event.sourceEvent) event = sourceEvent;
  return event;
}


/***/ }),

/***/ 9920:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(node) {
  return (node.ownerDocument && node.ownerDocument.defaultView) // node is a Node
      || (node.document && node) // node is a Window
      || node.defaultView; // node is a Document
}


/***/ }),

/***/ 6084:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _timer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1739);


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(callback, delay, time) {
  var t = new _timer_js__WEBPACK_IMPORTED_MODULE_0__/* .Timer */ .B7;
  delay = delay == null ? 0 : +delay;
  t.restart(elapsed => {
    t.stop();
    callback(elapsed + delay);
  }, delay, time);
  return t;
}


/***/ }),

/***/ 1739:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B7: () => (/* binding */ Timer),
/* harmony export */   HT: () => (/* binding */ timer),
/* harmony export */   zO: () => (/* binding */ now)
/* harmony export */ });
/* unused harmony export timerFlush */
var frame = 0, // is an animation frame pending?
    timeout = 0, // is a timeout pending?
    interval = 0, // are any timers active?
    pokeDelay = 1000, // how frequently we check for clock skew
    taskHead,
    taskTail,
    clockLast = 0,
    clockNow = 0,
    clockSkew = 0,
    clock = typeof performance === "object" && performance.now ? performance : Date,
    setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) { setTimeout(f, 17); };

function now() {
  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}

function clearNow() {
  clockNow = 0;
}

function Timer() {
  this._call =
  this._time =
  this._next = null;
}

Timer.prototype = timer.prototype = {
  constructor: Timer,
  restart: function(callback, delay, time) {
    if (typeof callback !== "function") throw new TypeError("callback is not a function");
    time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
    if (!this._next && taskTail !== this) {
      if (taskTail) taskTail._next = this;
      else taskHead = this;
      taskTail = this;
    }
    this._call = callback;
    this._time = time;
    sleep();
  },
  stop: function() {
    if (this._call) {
      this._call = null;
      this._time = Infinity;
      sleep();
    }
  }
};

function timer(callback, delay, time) {
  var t = new Timer;
  t.restart(callback, delay, time);
  return t;
}

function timerFlush() {
  now(); // Get the current time, if not already set.
  ++frame; // Pretend we’ve set an alarm, if we haven’t already.
  var t = taskHead, e;
  while (t) {
    if ((e = clockNow - t._time) >= 0) t._call.call(undefined, e);
    t = t._next;
  }
  --frame;
}

function wake() {
  clockNow = (clockLast = clock.now()) + clockSkew;
  frame = timeout = 0;
  try {
    timerFlush();
  } finally {
    frame = 0;
    nap();
    clockNow = 0;
  }
}

function poke() {
  var now = clock.now(), delay = now - clockLast;
  if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
}

function nap() {
  var t0, t1 = taskHead, t2, time = Infinity;
  while (t1) {
    if (t1._call) {
      if (time > t1._time) time = t1._time;
      t0 = t1, t1 = t1._next;
    } else {
      t2 = t1._next, t1._next = null;
      t1 = t0 ? t0._next = t2 : taskHead = t2;
    }
  }
  taskTail = t0;
  sleep(time);
}

function sleep(time) {
  if (frame) return; // Soonest alarm already set, or will be.
  if (timeout) timeout = clearTimeout(timeout);
  var delay = time - clockNow; // Strictly less than if we recomputed clockNow.
  if (delay > 24) {
    if (time < Infinity) timeout = setTimeout(wake, time - clock.now() - clockSkew);
    if (interval) interval = clearInterval(interval);
  } else {
    if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
    frame = 1, setFrame(wake);
  }
}


/***/ }),

/***/ 3399:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e1: () => (/* reexport safe */ _interrupt_js__WEBPACK_IMPORTED_MODULE_1__.Z)
/* harmony export */ });
/* harmony import */ var _selection_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5781);
/* harmony import */ var _interrupt_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8640);






/***/ }),

/***/ 8640:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _transition_schedule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9882);


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(node, name) {
  var schedules = node.__transition,
      schedule,
      active,
      empty = true,
      i;

  if (!schedules) return;

  name = name == null ? null : name + "";

  for (i in schedules) {
    if ((schedule = schedules[i]).name !== name) { empty = false; continue; }
    active = schedule.state > _transition_schedule_js__WEBPACK_IMPORTED_MODULE_0__/* .STARTING */ .KE && schedule.state < _transition_schedule_js__WEBPACK_IMPORTED_MODULE_0__/* .ENDING */ .wS;
    schedule.state = _transition_schedule_js__WEBPACK_IMPORTED_MODULE_0__/* .ENDED */ .Ku;
    schedule.timer.stop();
    schedule.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule.index, schedule.group);
    delete schedules[i];
  }

  if (empty) delete node.__transition;
}


/***/ }),

/***/ 5781:
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8390);
/* harmony import */ var _interrupt_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1689);
/* harmony import */ var _transition_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7207);




d3_selection__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.prototype.interrupt = _interrupt_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z;
d3_selection__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.prototype.transition = _transition_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z;


/***/ }),

/***/ 1689:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _interrupt_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8640);


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name) {
  return this.each(function() {
    (0,_interrupt_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(this, name);
  });
}


/***/ }),

/***/ 7207:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _transition_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6365);
/* harmony import */ var _transition_schedule_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9882);
/* harmony import */ var d3_ease__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2067);
/* harmony import */ var d3_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1739);





var defaultTiming = {
  time: null, // Set on use.
  delay: 0,
  duration: 250,
  ease: d3_ease__WEBPACK_IMPORTED_MODULE_0__/* .cubicInOut */ .tw
};

function inherit(node, id) {
  var timing;
  while (!(timing = node.__transition) || !(timing = timing[id])) {
    if (!(node = node.parentNode)) {
      throw new Error(`transition ${id} not found`);
    }
  }
  return timing;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name) {
  var id,
      timing;

  if (name instanceof _transition_index_js__WEBPACK_IMPORTED_MODULE_1__/* .Transition */ .uT) {
    id = name._id, name = name._name;
  } else {
    id = (0,_transition_index_js__WEBPACK_IMPORTED_MODULE_1__/* .newId */ .pZ)(), (timing = defaultTiming).time = (0,d3_timer__WEBPACK_IMPORTED_MODULE_2__/* .now */ .zO)(), name = name == null ? null : name + "";
  }

  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        (0,_transition_schedule_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP)(node, name, id, i, group, timing || inherit(node, id));
      }
    }
  }

  return new _transition_index_js__WEBPACK_IMPORTED_MODULE_1__/* .Transition */ .uT(groups, this._parents, name, id);
}


/***/ }),

/***/ 5114:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3465);
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1663);
/* harmony import */ var _tween_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9040);
/* harmony import */ var _interpolate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4548);





function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}

function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attrConstant(name, interpolate, value1) {
  var string00,
      string1 = value1 + "",
      interpolate0;
  return function() {
    var string0 = this.getAttribute(name);
    return string0 === string1 ? null
        : string0 === string00 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, value1);
  };
}

function attrConstantNS(fullname, interpolate, value1) {
  var string00,
      string1 = value1 + "",
      interpolate0;
  return function() {
    var string0 = this.getAttributeNS(fullname.space, fullname.local);
    return string0 === string1 ? null
        : string0 === string00 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, value1);
  };
}

function attrFunction(name, interpolate, value) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null) return void this.removeAttribute(name);
    string0 = this.getAttribute(name);
    string1 = value1 + "";
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}

function attrFunctionNS(fullname, interpolate, value) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
    string0 = this.getAttributeNS(fullname.space, fullname.local);
    string1 = value1 + "";
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, value) {
  var fullname = (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(name), i = fullname === "transform" ? d3_interpolate__WEBPACK_IMPORTED_MODULE_1__/* .interpolateTransformSvg */ .w : _interpolate_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z;
  return this.attrTween(name, typeof value === "function"
      ? (fullname.local ? attrFunctionNS : attrFunction)(fullname, i, (0,_tween_js__WEBPACK_IMPORTED_MODULE_3__/* .tweenValue */ .x)(this, "attr." + name, value))
      : value == null ? (fullname.local ? attrRemoveNS : attrRemove)(fullname)
      : (fullname.local ? attrConstantNS : attrConstant)(fullname, i, value));
}


/***/ }),

/***/ 8061:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1663);


function attrInterpolate(name, i) {
  return function(t) {
    this.setAttribute(name, i.call(this, t));
  };
}

function attrInterpolateNS(fullname, i) {
  return function(t) {
    this.setAttributeNS(fullname.space, fullname.local, i.call(this, t));
  };
}

function attrTweenNS(fullname, value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && attrInterpolateNS(fullname, i);
    return t0;
  }
  tween._value = value;
  return tween;
}

function attrTween(name, value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && attrInterpolate(name, i);
    return t0;
  }
  tween._value = value;
  return tween;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, value) {
  var key = "attr." + name;
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error;
  var fullname = (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(name);
  return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
}


/***/ }),

/***/ 6882:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9882);


function delayFunction(id, value) {
  return function() {
    (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__/* .init */ .S1)(this, id).delay = +value.apply(this, arguments);
  };
}

function delayConstant(id, value) {
  return value = +value, function() {
    (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__/* .init */ .S1)(this, id).delay = value;
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value) {
  var id = this._id;

  return arguments.length
      ? this.each((typeof value === "function"
          ? delayFunction
          : delayConstant)(id, value))
      : (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__/* .get */ .U2)(this.node(), id).delay;
}


/***/ }),

/***/ 4786:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9882);


function durationFunction(id, value) {
  return function() {
    (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__/* .set */ .t8)(this, id).duration = +value.apply(this, arguments);
  };
}

function durationConstant(id, value) {
  return value = +value, function() {
    (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__/* .set */ .t8)(this, id).duration = value;
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value) {
  var id = this._id;

  return arguments.length
      ? this.each((typeof value === "function"
          ? durationFunction
          : durationConstant)(id, value))
      : (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__/* .get */ .U2)(this.node(), id).duration;
}


/***/ }),

/***/ 3353:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9882);


function easeConstant(id, value) {
  if (typeof value !== "function") throw new Error;
  return function() {
    (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__/* .set */ .t8)(this, id).ease = value;
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value) {
  var id = this._id;

  return arguments.length
      ? this.each(easeConstant(id, value))
      : (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__/* .get */ .U2)(this.node(), id).ease;
}


/***/ }),

/***/ 5778:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9882);


function easeVarying(id, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (typeof v !== "function") throw new Error;
    (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__/* .set */ .t8)(this, id).ease = v;
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value) {
  if (typeof value !== "function") throw new Error;
  return this.each(easeVarying(this._id, value));
}


/***/ }),

/***/ 5355:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9882);


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var on0, on1, that = this, id = that._id, size = that.size();
  return new Promise(function(resolve, reject) {
    var cancel = {value: reject},
        end = {value: function() { if (--size === 0) resolve(); }};

    that.each(function() {
      var schedule = (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__/* .set */ .t8)(this, id),
          on = schedule.on;

      // If this node shared a dispatch with the previous node,
      // just assign the updated shared dispatch and we’re done!
      // Otherwise, copy-on-write.
      if (on !== on0) {
        on1 = (on0 = on).copy();
        on1._.cancel.push(cancel);
        on1._.interrupt.push(cancel);
        on1._.end.push(end);
      }

      schedule.on = on1;
    });

    // The selection was empty, resolve end immediately
    if (size === 0) resolve();
  });
}


/***/ }),

/***/ 9579:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4421);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6365);



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(match) {
  if (typeof match !== "function") match = (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(match);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_1__/* .Transition */ .uT(subgroups, this._parents, this._name, this._id);
}


/***/ }),

/***/ 6365:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pZ: () => (/* binding */ newId),
/* harmony export */   uT: () => (/* binding */ Transition)
/* harmony export */ });
/* unused harmony export default */
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8390);
/* harmony import */ var _attr_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5114);
/* harmony import */ var _attrTween_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8061);
/* harmony import */ var _delay_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(6882);
/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(4786);
/* harmony import */ var _ease_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(3353);
/* harmony import */ var _easeVarying_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(5778);
/* harmony import */ var _filter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9579);
/* harmony import */ var _merge_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9858);
/* harmony import */ var _on_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7349);
/* harmony import */ var _remove_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9935);
/* harmony import */ var _select_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4417);
/* harmony import */ var _selectAll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5174);
/* harmony import */ var _selection_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3836);
/* harmony import */ var _style_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8508);
/* harmony import */ var _styleTween_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5109);
/* harmony import */ var _text_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5699);
/* harmony import */ var _textTween_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4987);
/* harmony import */ var _transition_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4085);
/* harmony import */ var _tween_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(9040);
/* harmony import */ var _end_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(5355);






















var id = 0;

function Transition(groups, parents, name, id) {
  this._groups = groups;
  this._parents = parents;
  this._name = name;
  this._id = id;
}

function transition(name) {
  return (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)().transition(name);
}

function newId() {
  return ++id;
}

var selection_prototype = d3_selection__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.prototype;

Transition.prototype = transition.prototype = {
  constructor: Transition,
  select: _select_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
  selectAll: _selectAll_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
  selectChild: selection_prototype.selectChild,
  selectChildren: selection_prototype.selectChildren,
  filter: _filter_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
  merge: _merge_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
  selection: _selection_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
  transition: _transition_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
  call: selection_prototype.call,
  nodes: selection_prototype.nodes,
  node: selection_prototype.node,
  size: selection_prototype.size,
  empty: selection_prototype.empty,
  each: selection_prototype.each,
  on: _on_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
  attr: _attr_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
  attrTween: _attrTween_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
  style: _style_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z,
  styleTween: _styleTween_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,
  text: _text_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z,
  textTween: _textTween_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z,
  remove: _remove_js__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z,
  tween: _tween_js__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z,
  delay: _delay_js__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z,
  duration: _duration_js__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z,
  ease: _ease_js__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z,
  easeVarying: _easeVarying_js__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z,
  end: _end_js__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z,
  [Symbol.iterator]: selection_prototype[Symbol.iterator]
};


/***/ }),

/***/ 4548:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4447);
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8063);
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6354);
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6773);



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a, b) {
  var c;
  return (typeof b === "number" ? d3_interpolate__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z
      : b instanceof d3_color__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP ? d3_interpolate__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP
      : (c = (0,d3_color__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)(b)) ? (b = c, d3_interpolate__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)
      : d3_interpolate__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(a, b);
}


/***/ }),

/***/ 9858:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6365);


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(transition) {
  if (transition._id !== this._id) throw new Error;

  for (var groups0 = this._groups, groups1 = transition._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_0__/* .Transition */ .uT(merges, this._parents, this._name, this._id);
}


/***/ }),

/***/ 7349:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9882);


function start(name) {
  return (name + "").trim().split(/^|\s+/).every(function(t) {
    var i = t.indexOf(".");
    if (i >= 0) t = t.slice(0, i);
    return !t || t === "start";
  });
}

function onFunction(id, name, listener) {
  var on0, on1, sit = start(name) ? _schedule_js__WEBPACK_IMPORTED_MODULE_0__/* .init */ .S1 : _schedule_js__WEBPACK_IMPORTED_MODULE_0__/* .set */ .t8;
  return function() {
    var schedule = sit(this, id),
        on = schedule.on;

    // If this node shared a dispatch with the previous node,
    // just assign the updated shared dispatch and we’re done!
    // Otherwise, copy-on-write.
    if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);

    schedule.on = on1;
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, listener) {
  var id = this._id;

  return arguments.length < 2
      ? (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__/* .get */ .U2)(this.node(), id).on.on(name)
      : this.each(onFunction(id, name, listener));
}


/***/ }),

/***/ 9935:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function removeFunction(id) {
  return function() {
    var parent = this.parentNode;
    for (var i in this.__transition) if (+i !== id) return;
    if (parent) parent.removeChild(this);
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return this.on("end.remove", removeFunction(this._id));
}


/***/ }),

/***/ 9882:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KE: () => (/* binding */ STARTING),
/* harmony export */   Ku: () => (/* binding */ ENDED),
/* harmony export */   S1: () => (/* binding */ init),
/* harmony export */   U2: () => (/* binding */ get),
/* harmony export */   ZP: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   t8: () => (/* binding */ set),
/* harmony export */   wS: () => (/* binding */ ENDING)
/* harmony export */ });
/* unused harmony exports CREATED, SCHEDULED, STARTED, RUNNING */
/* harmony import */ var d3_dispatch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6057);
/* harmony import */ var d3_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1739);
/* harmony import */ var d3_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6084);



var emptyOn = (0,d3_dispatch__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("start", "end", "cancel", "interrupt");
var emptyTween = [];

var CREATED = 0;
var SCHEDULED = 1;
var STARTING = 2;
var STARTED = 3;
var RUNNING = 4;
var ENDING = 5;
var ENDED = 6;

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(node, name, id, index, group, timing) {
  var schedules = node.__transition;
  if (!schedules) node.__transition = {};
  else if (id in schedules) return;
  create(node, id, {
    name: name,
    index: index, // For context during callback.
    group: group, // For context during callback.
    on: emptyOn,
    tween: emptyTween,
    time: timing.time,
    delay: timing.delay,
    duration: timing.duration,
    ease: timing.ease,
    timer: null,
    state: CREATED
  });
}

function init(node, id) {
  var schedule = get(node, id);
  if (schedule.state > CREATED) throw new Error("too late; already scheduled");
  return schedule;
}

function set(node, id) {
  var schedule = get(node, id);
  if (schedule.state > STARTED) throw new Error("too late; already running");
  return schedule;
}

function get(node, id) {
  var schedule = node.__transition;
  if (!schedule || !(schedule = schedule[id])) throw new Error("transition not found");
  return schedule;
}

function create(node, id, self) {
  var schedules = node.__transition,
      tween;

  // Initialize the self timer when the transition is created.
  // Note the actual delay is not known until the first callback!
  schedules[id] = self;
  self.timer = (0,d3_timer__WEBPACK_IMPORTED_MODULE_1__/* .timer */ .HT)(schedule, 0, self.time);

  function schedule(elapsed) {
    self.state = SCHEDULED;
    self.timer.restart(start, self.delay, self.time);

    // If the elapsed delay is less than our first sleep, start immediately.
    if (self.delay <= elapsed) start(elapsed - self.delay);
  }

  function start(elapsed) {
    var i, j, n, o;

    // If the state is not SCHEDULED, then we previously errored on start.
    if (self.state !== SCHEDULED) return stop();

    for (i in schedules) {
      o = schedules[i];
      if (o.name !== self.name) continue;

      // While this element already has a starting transition during this frame,
      // defer starting an interrupting transition until that transition has a
      // chance to tick (and possibly end); see d3/d3-transition#54!
      if (o.state === STARTED) return (0,d3_timer__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(start);

      // Interrupt the active transition, if any.
      if (o.state === RUNNING) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("interrupt", node, node.__data__, o.index, o.group);
        delete schedules[i];
      }

      // Cancel any pre-empted transitions.
      else if (+i < id) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("cancel", node, node.__data__, o.index, o.group);
        delete schedules[i];
      }
    }

    // Defer the first tick to end of the current frame; see d3/d3#1576.
    // Note the transition may be canceled after start and before the first tick!
    // Note this must be scheduled before the start event; see d3/d3-transition#16!
    // Assuming this is successful, subsequent callbacks go straight to tick.
    (0,d3_timer__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(function() {
      if (self.state === STARTED) {
        self.state = RUNNING;
        self.timer.restart(tick, self.delay, self.time);
        tick(elapsed);
      }
    });

    // Dispatch the start event.
    // Note this must be done before the tween are initialized.
    self.state = STARTING;
    self.on.call("start", node, node.__data__, self.index, self.group);
    if (self.state !== STARTING) return; // interrupted
    self.state = STARTED;

    // Initialize the tween, deleting null tween.
    tween = new Array(n = self.tween.length);
    for (i = 0, j = -1; i < n; ++i) {
      if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) {
        tween[++j] = o;
      }
    }
    tween.length = j + 1;
  }

  function tick(elapsed) {
    var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1),
        i = -1,
        n = tween.length;

    while (++i < n) {
      tween[i].call(node, t);
    }

    // Dispatch the end event.
    if (self.state === ENDING) {
      self.on.call("end", node, node.__data__, self.index, self.group);
      stop();
    }
  }

  function stop() {
    self.state = ENDED;
    self.timer.stop();
    delete schedules[id];
    for (var i in schedules) return; // eslint-disable-line no-unused-vars
    delete node.__transition;
  }
}


/***/ }),

/***/ 4417:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3010);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6365);
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9882);




/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(select) {
  var name = this._name,
      id = this._id;

  if (typeof select !== "function") select = (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(select);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
        (0,_schedule_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)(subgroup[i], name, id, i, subgroup, (0,_schedule_js__WEBPACK_IMPORTED_MODULE_1__/* .get */ .U2)(node, id));
      }
    }
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_2__/* .Transition */ .uT(subgroups, this._parents, name, id);
}


/***/ }),

/***/ 5174:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9701);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6365);
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9882);




/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(select) {
  var name = this._name,
      id = this._id;

  if (typeof select !== "function") select = (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(select);

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        for (var children = select.call(node, node.__data__, i, group), child, inherit = (0,_schedule_js__WEBPACK_IMPORTED_MODULE_1__/* .get */ .U2)(node, id), k = 0, l = children.length; k < l; ++k) {
          if (child = children[k]) {
            (0,_schedule_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)(child, name, id, k, children, inherit);
          }
        }
        subgroups.push(children);
        parents.push(node);
      }
    }
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_2__/* .Transition */ .uT(subgroups, parents, name, id);
}


/***/ }),

/***/ 3836:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8390);


var Selection = d3_selection__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.prototype.constructor;

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return new Selection(this._groups, this._parents);
}


/***/ }),

/***/ 8508:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3465);
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2627);
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9882);
/* harmony import */ var _tween_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9040);
/* harmony import */ var _interpolate_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4548);






function styleNull(name, interpolate) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0 = (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__/* .styleValue */ .S)(this, name),
        string1 = (this.style.removeProperty(name), (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__/* .styleValue */ .S)(this, name));
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, string10 = string1);
  };
}

function styleRemove(name) {
  return function() {
    this.style.removeProperty(name);
  };
}

function styleConstant(name, interpolate, value1) {
  var string00,
      string1 = value1 + "",
      interpolate0;
  return function() {
    var string0 = (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__/* .styleValue */ .S)(this, name);
    return string0 === string1 ? null
        : string0 === string00 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, value1);
  };
}

function styleFunction(name, interpolate, value) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0 = (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__/* .styleValue */ .S)(this, name),
        value1 = value(this),
        string1 = value1 + "";
    if (value1 == null) string1 = value1 = (this.style.removeProperty(name), (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__/* .styleValue */ .S)(this, name));
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}

function styleMaybeRemove(id, name) {
  var on0, on1, listener0, key = "style." + name, event = "end." + key, remove;
  return function() {
    var schedule = (0,_schedule_js__WEBPACK_IMPORTED_MODULE_1__/* .set */ .t8)(this, id),
        on = schedule.on,
        listener = schedule.value[key] == null ? remove || (remove = styleRemove(name)) : undefined;

    // If this node shared a dispatch with the previous node,
    // just assign the updated shared dispatch and we’re done!
    // Otherwise, copy-on-write.
    if (on !== on0 || listener0 !== listener) (on1 = (on0 = on).copy()).on(event, listener0 = listener);

    schedule.on = on1;
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, value, priority) {
  var i = (name += "") === "transform" ? d3_interpolate__WEBPACK_IMPORTED_MODULE_2__/* .interpolateTransformCss */ .Y : _interpolate_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z;
  return value == null ? this
      .styleTween(name, styleNull(name, i))
      .on("end.style." + name, styleRemove(name))
    : typeof value === "function" ? this
      .styleTween(name, styleFunction(name, i, (0,_tween_js__WEBPACK_IMPORTED_MODULE_4__/* .tweenValue */ .x)(this, "style." + name, value)))
      .each(styleMaybeRemove(this._id, name))
    : this
      .styleTween(name, styleConstant(name, i, value), priority)
      .on("end.style." + name, null);
}


/***/ }),

/***/ 5109:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function styleInterpolate(name, i, priority) {
  return function(t) {
    this.style.setProperty(name, i.call(this, t), priority);
  };
}

function styleTween(name, value, priority) {
  var t, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t = (i0 = i) && styleInterpolate(name, i, priority);
    return t;
  }
  tween._value = value;
  return tween;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, value, priority) {
  var key = "style." + (name += "");
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error;
  return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
}


/***/ }),

/***/ 5699:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tween_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9040);


function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}

function textFunction(value) {
  return function() {
    var value1 = value(this);
    this.textContent = value1 == null ? "" : value1;
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value) {
  return this.tween("text", typeof value === "function"
      ? textFunction((0,_tween_js__WEBPACK_IMPORTED_MODULE_0__/* .tweenValue */ .x)(this, "text", value))
      : textConstant(value == null ? "" : value + ""));
}


/***/ }),

/***/ 4987:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function textInterpolate(i) {
  return function(t) {
    this.textContent = i.call(this, t);
  };
}

function textTween(value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && textInterpolate(i);
    return t0;
  }
  tween._value = value;
  return tween;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value) {
  var key = "text";
  if (arguments.length < 1) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error;
  return this.tween(key, textTween(value));
}


/***/ }),

/***/ 4085:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6365);
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9882);



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var name = this._name,
      id0 = this._id,
      id1 = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__/* .newId */ .pZ)();

  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        var inherit = (0,_schedule_js__WEBPACK_IMPORTED_MODULE_1__/* .get */ .U2)(node, id0);
        (0,_schedule_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)(node, name, id1, i, group, {
          time: inherit.time + inherit.delay + inherit.duration,
          delay: 0,
          duration: inherit.duration,
          ease: inherit.ease
        });
      }
    }
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_0__/* .Transition */ .uT(groups, this._parents, name, id1);
}


/***/ }),

/***/ 9040:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   x: () => (/* binding */ tweenValue)
/* harmony export */ });
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9882);


function tweenRemove(id, name) {
  var tween0, tween1;
  return function() {
    var schedule = (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__/* .set */ .t8)(this, id),
        tween = schedule.tween;

    // If this node shared tween with the previous node,
    // just assign the updated shared tween and we’re done!
    // Otherwise, copy-on-write.
    if (tween !== tween0) {
      tween1 = tween0 = tween;
      for (var i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1 = tween1.slice();
          tween1.splice(i, 1);
          break;
        }
      }
    }

    schedule.tween = tween1;
  };
}

function tweenFunction(id, name, value) {
  var tween0, tween1;
  if (typeof value !== "function") throw new Error;
  return function() {
    var schedule = (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__/* .set */ .t8)(this, id),
        tween = schedule.tween;

    // If this node shared tween with the previous node,
    // just assign the updated shared tween and we’re done!
    // Otherwise, copy-on-write.
    if (tween !== tween0) {
      tween1 = (tween0 = tween).slice();
      for (var t = {name: name, value: value}, i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1[i] = t;
          break;
        }
      }
      if (i === n) tween1.push(t);
    }

    schedule.tween = tween1;
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, value) {
  var id = this._id;

  name += "";

  if (arguments.length < 2) {
    var tween = (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__/* .get */ .U2)(this.node(), id).tween;
    for (var i = 0, n = tween.length, t; i < n; ++i) {
      if ((t = tween[i]).name === name) {
        return t.value;
      }
    }
    return null;
  }

  return this.each((value == null ? tweenRemove : tweenFunction)(id, name, value));
}

function tweenValue(transition, name, value) {
  var id = transition._id;

  transition.each(function() {
    var schedule = (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__/* .set */ .t8)(this, id);
    (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
  });

  return function(node) {
    return (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__/* .get */ .U2)(node, id).value[name];
  };
}


/***/ }),

/***/ 2509:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (x => () => x);


/***/ }),

/***/ 7610:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ ZoomEvent)
/* harmony export */ });
function ZoomEvent(type, {
  sourceEvent,
  target,
  transform,
  dispatch
}) {
  Object.defineProperties(this, {
    type: {value: type, enumerable: true, configurable: true},
    sourceEvent: {value: sourceEvent, enumerable: true, configurable: true},
    target: {value: target, enumerable: true, configurable: true},
    transform: {value: transform, enumerable: true, configurable: true},
    _: {value: dispatch}
  });
}


/***/ }),

/***/ 5180:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CR: () => (/* reexport safe */ _transform_js__WEBPACK_IMPORTED_MODULE_1__.yR),
/* harmony export */   sP: () => (/* reexport safe */ _zoom_js__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _zoom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1395);
/* harmony import */ var _transform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2714);




/***/ }),

/***/ 4603:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   r: () => (/* binding */ nopropagation)
/* harmony export */ });
function nopropagation(event) {
  event.stopImmediatePropagation();
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(event) {
  event.preventDefault();
  event.stopImmediatePropagation();
}


/***/ }),

/***/ 2714:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   wx: () => (/* binding */ Transform),
/* harmony export */   yR: () => (/* binding */ identity)
/* harmony export */ });
/* unused harmony export default */
function Transform(k, x, y) {
  this.k = k;
  this.x = x;
  this.y = y;
}

Transform.prototype = {
  constructor: Transform,
  scale: function(k) {
    return k === 1 ? this : new Transform(this.k * k, this.x, this.y);
  },
  translate: function(x, y) {
    return x === 0 & y === 0 ? this : new Transform(this.k, this.x + this.k * x, this.y + this.k * y);
  },
  apply: function(point) {
    return [point[0] * this.k + this.x, point[1] * this.k + this.y];
  },
  applyX: function(x) {
    return x * this.k + this.x;
  },
  applyY: function(y) {
    return y * this.k + this.y;
  },
  invert: function(location) {
    return [(location[0] - this.x) / this.k, (location[1] - this.y) / this.k];
  },
  invertX: function(x) {
    return (x - this.x) / this.k;
  },
  invertY: function(y) {
    return (y - this.y) / this.k;
  },
  rescaleX: function(x) {
    return x.copy().domain(x.range().map(this.invertX, this).map(x.invert, x));
  },
  rescaleY: function(y) {
    return y.copy().domain(y.range().map(this.invertY, this).map(y.invert, y));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};

var identity = new Transform(1, 0, 0);

transform.prototype = Transform.prototype;

function transform(node) {
  while (!node.__zoom) if (!(node = node.parentNode)) return identity;
  return node.__zoom;
}


/***/ }),

/***/ 1395:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_dispatch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6057);
/* harmony import */ var d3_drag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2718);
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8167);
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3838);
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3109);
/* harmony import */ var d3_transition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3399);
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2509);
/* harmony import */ var _event_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7610);
/* harmony import */ var _transform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2714);
/* harmony import */ var _noevent_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4603);










// Ignore right-click, since that should open the context menu.
// except for pinch-to-zoom, which is sent as a wheel+ctrlKey event
function defaultFilter(event) {
  return (!event.ctrlKey || event.type === 'wheel') && !event.button;
}

function defaultExtent() {
  var e = this;
  if (e instanceof SVGElement) {
    e = e.ownerSVGElement || e;
    if (e.hasAttribute("viewBox")) {
      e = e.viewBox.baseVal;
      return [[e.x, e.y], [e.x + e.width, e.y + e.height]];
    }
    return [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]];
  }
  return [[0, 0], [e.clientWidth, e.clientHeight]];
}

function defaultTransform() {
  return this.__zoom || _transform_js__WEBPACK_IMPORTED_MODULE_1__/* .identity */ .yR;
}

function defaultWheelDelta(event) {
  return -event.deltaY * (event.deltaMode === 1 ? 0.05 : event.deltaMode ? 1 : 0.002) * (event.ctrlKey ? 10 : 1);
}

function defaultTouchable() {
  return navigator.maxTouchPoints || ("ontouchstart" in this);
}

function defaultConstrain(transform, extent, translateExtent) {
  var dx0 = transform.invertX(extent[0][0]) - translateExtent[0][0],
      dx1 = transform.invertX(extent[1][0]) - translateExtent[1][0],
      dy0 = transform.invertY(extent[0][1]) - translateExtent[0][1],
      dy1 = transform.invertY(extent[1][1]) - translateExtent[1][1];
  return transform.translate(
    dx1 > dx0 ? (dx0 + dx1) / 2 : Math.min(0, dx0) || Math.max(0, dx1),
    dy1 > dy0 ? (dy0 + dy1) / 2 : Math.min(0, dy0) || Math.max(0, dy1)
  );
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var filter = defaultFilter,
      extent = defaultExtent,
      constrain = defaultConstrain,
      wheelDelta = defaultWheelDelta,
      touchable = defaultTouchable,
      scaleExtent = [0, Infinity],
      translateExtent = [[-Infinity, -Infinity], [Infinity, Infinity]],
      duration = 250,
      interpolate = d3_interpolate__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
      listeners = (0,d3_dispatch__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)("start", "zoom", "end"),
      touchstarting,
      touchfirst,
      touchending,
      touchDelay = 500,
      wheelDelay = 150,
      clickDistance2 = 0,
      tapDistance = 10;

  function zoom(selection) {
    selection
        .property("__zoom", defaultTransform)
        .on("wheel.zoom", wheeled, {passive: false})
        .on("mousedown.zoom", mousedowned)
        .on("dblclick.zoom", dblclicked)
      .filter(touchable)
        .on("touchstart.zoom", touchstarted)
        .on("touchmove.zoom", touchmoved)
        .on("touchend.zoom touchcancel.zoom", touchended)
        .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }

  zoom.transform = function(collection, transform, point, event) {
    var selection = collection.selection ? collection.selection() : collection;
    selection.property("__zoom", defaultTransform);
    if (collection !== selection) {
      schedule(collection, transform, point, event);
    } else {
      selection.interrupt().each(function() {
        gesture(this, arguments)
          .event(event)
          .start()
          .zoom(null, typeof transform === "function" ? transform.apply(this, arguments) : transform)
          .end();
      });
    }
  };

  zoom.scaleBy = function(selection, k, p, event) {
    zoom.scaleTo(selection, function() {
      var k0 = this.__zoom.k,
          k1 = typeof k === "function" ? k.apply(this, arguments) : k;
      return k0 * k1;
    }, p, event);
  };

  zoom.scaleTo = function(selection, k, p, event) {
    zoom.transform(selection, function() {
      var e = extent.apply(this, arguments),
          t0 = this.__zoom,
          p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p,
          p1 = t0.invert(p0),
          k1 = typeof k === "function" ? k.apply(this, arguments) : k;
      return constrain(translate(scale(t0, k1), p0, p1), e, translateExtent);
    }, p, event);
  };

  zoom.translateBy = function(selection, x, y, event) {
    zoom.transform(selection, function() {
      return constrain(this.__zoom.translate(
        typeof x === "function" ? x.apply(this, arguments) : x,
        typeof y === "function" ? y.apply(this, arguments) : y
      ), extent.apply(this, arguments), translateExtent);
    }, null, event);
  };

  zoom.translateTo = function(selection, x, y, p, event) {
    zoom.transform(selection, function() {
      var e = extent.apply(this, arguments),
          t = this.__zoom,
          p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p;
      return constrain(_transform_js__WEBPACK_IMPORTED_MODULE_1__/* .identity */ .yR.translate(p0[0], p0[1]).scale(t.k).translate(
        typeof x === "function" ? -x.apply(this, arguments) : -x,
        typeof y === "function" ? -y.apply(this, arguments) : -y
      ), e, translateExtent);
    }, p, event);
  };

  function scale(transform, k) {
    k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], k));
    return k === transform.k ? transform : new _transform_js__WEBPACK_IMPORTED_MODULE_1__/* .Transform */ .wx(k, transform.x, transform.y);
  }

  function translate(transform, p0, p1) {
    var x = p0[0] - p1[0] * transform.k, y = p0[1] - p1[1] * transform.k;
    return x === transform.x && y === transform.y ? transform : new _transform_js__WEBPACK_IMPORTED_MODULE_1__/* .Transform */ .wx(transform.k, x, y);
  }

  function centroid(extent) {
    return [(+extent[0][0] + +extent[1][0]) / 2, (+extent[0][1] + +extent[1][1]) / 2];
  }

  function schedule(transition, transform, point, event) {
    transition
        .on("start.zoom", function() { gesture(this, arguments).event(event).start(); })
        .on("interrupt.zoom end.zoom", function() { gesture(this, arguments).event(event).end(); })
        .tween("zoom", function() {
          var that = this,
              args = arguments,
              g = gesture(that, args).event(event),
              e = extent.apply(that, args),
              p = point == null ? centroid(e) : typeof point === "function" ? point.apply(that, args) : point,
              w = Math.max(e[1][0] - e[0][0], e[1][1] - e[0][1]),
              a = that.__zoom,
              b = typeof transform === "function" ? transform.apply(that, args) : transform,
              i = interpolate(a.invert(p).concat(w / a.k), b.invert(p).concat(w / b.k));
          return function(t) {
            if (t === 1) t = b; // Avoid rounding error on end.
            else { var l = i(t), k = w / l[2]; t = new _transform_js__WEBPACK_IMPORTED_MODULE_1__/* .Transform */ .wx(k, p[0] - l[0] * k, p[1] - l[1] * k); }
            g.zoom(null, t);
          };
        });
  }

  function gesture(that, args, clean) {
    return (!clean && that.__zooming) || new Gesture(that, args);
  }

  function Gesture(that, args) {
    this.that = that;
    this.args = args;
    this.active = 0;
    this.sourceEvent = null;
    this.extent = extent.apply(that, args);
    this.taps = 0;
  }

  Gesture.prototype = {
    event: function(event) {
      if (event) this.sourceEvent = event;
      return this;
    },
    start: function() {
      if (++this.active === 1) {
        this.that.__zooming = this;
        this.emit("start");
      }
      return this;
    },
    zoom: function(key, transform) {
      if (this.mouse && key !== "mouse") this.mouse[1] = transform.invert(this.mouse[0]);
      if (this.touch0 && key !== "touch") this.touch0[1] = transform.invert(this.touch0[0]);
      if (this.touch1 && key !== "touch") this.touch1[1] = transform.invert(this.touch1[0]);
      this.that.__zoom = transform;
      this.emit("zoom");
      return this;
    },
    end: function() {
      if (--this.active === 0) {
        delete this.that.__zooming;
        this.emit("end");
      }
      return this;
    },
    emit: function(type) {
      var d = (0,d3_selection__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(this.that).datum();
      listeners.call(
        type,
        this.that,
        new _event_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z(type, {
          sourceEvent: this.sourceEvent,
          target: zoom,
          type,
          transform: this.that.__zoom,
          dispatch: listeners
        }),
        d
      );
    }
  };

  function wheeled(event, ...args) {
    if (!filter.apply(this, arguments)) return;
    var g = gesture(this, args).event(event),
        t = this.__zoom,
        k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], t.k * Math.pow(2, wheelDelta.apply(this, arguments)))),
        p = (0,d3_selection__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(event);

    // If the mouse is in the same location as before, reuse it.
    // If there were recent wheel events, reset the wheel idle timeout.
    if (g.wheel) {
      if (g.mouse[0][0] !== p[0] || g.mouse[0][1] !== p[1]) {
        g.mouse[1] = t.invert(g.mouse[0] = p);
      }
      clearTimeout(g.wheel);
    }

    // If this wheel event won’t trigger a transform change, ignore it.
    else if (t.k === k) return;

    // Otherwise, capture the mouse point and location at the start.
    else {
      g.mouse = [p, t.invert(p)];
      (0,d3_transition__WEBPACK_IMPORTED_MODULE_0__/* .interrupt */ .e1)(this);
      g.start();
    }

    (0,_noevent_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(event);
    g.wheel = setTimeout(wheelidled, wheelDelay);
    g.zoom("mouse", constrain(translate(scale(t, k), g.mouse[0], g.mouse[1]), g.extent, translateExtent));

    function wheelidled() {
      g.wheel = null;
      g.end();
    }
  }

  function mousedowned(event, ...args) {
    if (touchending || !filter.apply(this, arguments)) return;
    var currentTarget = event.currentTarget,
        g = gesture(this, args, true).event(event),
        v = (0,d3_selection__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(event.view).on("mousemove.zoom", mousemoved, true).on("mouseup.zoom", mouseupped, true),
        p = (0,d3_selection__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(event, currentTarget),
        x0 = event.clientX,
        y0 = event.clientY;

    (0,d3_drag__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(event.view);
    (0,_noevent_js__WEBPACK_IMPORTED_MODULE_7__/* .nopropagation */ .r)(event);
    g.mouse = [p, this.__zoom.invert(p)];
    (0,d3_transition__WEBPACK_IMPORTED_MODULE_0__/* .interrupt */ .e1)(this);
    g.start();

    function mousemoved(event) {
      (0,_noevent_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(event);
      if (!g.moved) {
        var dx = event.clientX - x0, dy = event.clientY - y0;
        g.moved = dx * dx + dy * dy > clickDistance2;
      }
      g.event(event)
       .zoom("mouse", constrain(translate(g.that.__zoom, g.mouse[0] = (0,d3_selection__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(event, currentTarget), g.mouse[1]), g.extent, translateExtent));
    }

    function mouseupped(event) {
      v.on("mousemove.zoom mouseup.zoom", null);
      (0,d3_drag__WEBPACK_IMPORTED_MODULE_8__/* .yesdrag */ .D)(event.view, g.moved);
      (0,_noevent_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(event);
      g.event(event).end();
    }
  }

  function dblclicked(event, ...args) {
    if (!filter.apply(this, arguments)) return;
    var t0 = this.__zoom,
        p0 = (0,d3_selection__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(event.changedTouches ? event.changedTouches[0] : event, this),
        p1 = t0.invert(p0),
        k1 = t0.k * (event.shiftKey ? 0.5 : 2),
        t1 = constrain(translate(scale(t0, k1), p0, p1), extent.apply(this, args), translateExtent);

    (0,_noevent_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(event);
    if (duration > 0) (0,d3_selection__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(this).transition().duration(duration).call(schedule, t1, p0, event);
    else (0,d3_selection__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(this).call(zoom.transform, t1, p0, event);
  }

  function touchstarted(event, ...args) {
    if (!filter.apply(this, arguments)) return;
    var touches = event.touches,
        n = touches.length,
        g = gesture(this, args, event.changedTouches.length === n).event(event),
        started, i, t, p;

    (0,_noevent_js__WEBPACK_IMPORTED_MODULE_7__/* .nopropagation */ .r)(event);
    for (i = 0; i < n; ++i) {
      t = touches[i], p = (0,d3_selection__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(t, this);
      p = [p, this.__zoom.invert(p), t.identifier];
      if (!g.touch0) g.touch0 = p, started = true, g.taps = 1 + !!touchstarting;
      else if (!g.touch1 && g.touch0[2] !== p[2]) g.touch1 = p, g.taps = 0;
    }

    if (touchstarting) touchstarting = clearTimeout(touchstarting);

    if (started) {
      if (g.taps < 2) touchfirst = p[0], touchstarting = setTimeout(function() { touchstarting = null; }, touchDelay);
      (0,d3_transition__WEBPACK_IMPORTED_MODULE_0__/* .interrupt */ .e1)(this);
      g.start();
    }
  }

  function touchmoved(event, ...args) {
    if (!this.__zooming) return;
    var g = gesture(this, args).event(event),
        touches = event.changedTouches,
        n = touches.length, i, t, p, l;

    (0,_noevent_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(event);
    for (i = 0; i < n; ++i) {
      t = touches[i], p = (0,d3_selection__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(t, this);
      if (g.touch0 && g.touch0[2] === t.identifier) g.touch0[0] = p;
      else if (g.touch1 && g.touch1[2] === t.identifier) g.touch1[0] = p;
    }
    t = g.that.__zoom;
    if (g.touch1) {
      var p0 = g.touch0[0], l0 = g.touch0[1],
          p1 = g.touch1[0], l1 = g.touch1[1],
          dp = (dp = p1[0] - p0[0]) * dp + (dp = p1[1] - p0[1]) * dp,
          dl = (dl = l1[0] - l0[0]) * dl + (dl = l1[1] - l0[1]) * dl;
      t = scale(t, Math.sqrt(dp / dl));
      p = [(p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2];
      l = [(l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2];
    }
    else if (g.touch0) p = g.touch0[0], l = g.touch0[1];
    else return;

    g.zoom("touch", constrain(translate(t, p, l), g.extent, translateExtent));
  }

  function touchended(event, ...args) {
    if (!this.__zooming) return;
    var g = gesture(this, args).event(event),
        touches = event.changedTouches,
        n = touches.length, i, t;

    (0,_noevent_js__WEBPACK_IMPORTED_MODULE_7__/* .nopropagation */ .r)(event);
    if (touchending) clearTimeout(touchending);
    touchending = setTimeout(function() { touchending = null; }, touchDelay);
    for (i = 0; i < n; ++i) {
      t = touches[i];
      if (g.touch0 && g.touch0[2] === t.identifier) delete g.touch0;
      else if (g.touch1 && g.touch1[2] === t.identifier) delete g.touch1;
    }
    if (g.touch1 && !g.touch0) g.touch0 = g.touch1, delete g.touch1;
    if (g.touch0) g.touch0[1] = this.__zoom.invert(g.touch0[0]);
    else {
      g.end();
      // If this was a dbltap, reroute to the (optional) dblclick.zoom handler.
      if (g.taps === 2) {
        t = (0,d3_selection__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(t, this);
        if (Math.hypot(touchfirst[0] - t[0], touchfirst[1] - t[1]) < tapDistance) {
          var p = (0,d3_selection__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(this).on("dblclick.zoom");
          if (p) p.apply(this, arguments);
        }
      }
    }
  }

  zoom.wheelDelta = function(_) {
    return arguments.length ? (wheelDelta = typeof _ === "function" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(+_), zoom) : wheelDelta;
  };

  zoom.filter = function(_) {
    return arguments.length ? (filter = typeof _ === "function" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(!!_), zoom) : filter;
  };

  zoom.touchable = function(_) {
    return arguments.length ? (touchable = typeof _ === "function" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(!!_), zoom) : touchable;
  };

  zoom.extent = function(_) {
    return arguments.length ? (extent = typeof _ === "function" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)([[+_[0][0], +_[0][1]], [+_[1][0], +_[1][1]]]), zoom) : extent;
  };

  zoom.scaleExtent = function(_) {
    return arguments.length ? (scaleExtent[0] = +_[0], scaleExtent[1] = +_[1], zoom) : [scaleExtent[0], scaleExtent[1]];
  };

  zoom.translateExtent = function(_) {
    return arguments.length ? (translateExtent[0][0] = +_[0][0], translateExtent[1][0] = +_[1][0], translateExtent[0][1] = +_[0][1], translateExtent[1][1] = +_[1][1], zoom) : [[translateExtent[0][0], translateExtent[0][1]], [translateExtent[1][0], translateExtent[1][1]]];
  };

  zoom.constrain = function(_) {
    return arguments.length ? (constrain = _, zoom) : constrain;
  };

  zoom.duration = function(_) {
    return arguments.length ? (duration = +_, zoom) : duration;
  };

  zoom.interpolate = function(_) {
    return arguments.length ? (interpolate = _, zoom) : interpolate;
  };

  zoom.on = function() {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? zoom : value;
  };

  zoom.clickDistance = function(_) {
    return arguments.length ? (clickDistance2 = (_ = +_) * _, zoom) : Math.sqrt(clickDistance2);
  };

  zoom.tapDistance = function(_) {
    return arguments.length ? (tapDistance = +_, zoom) : tapDistance;
  };

  return zoom;
}


/***/ }),

/***/ 8976:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CRH: () => (/* reexport safe */ d3_zoom__WEBPACK_IMPORTED_MODULE_4__.CR),
/* harmony export */   Ys: () => (/* reexport safe */ d3_selection__WEBPACK_IMPORTED_MODULE_2__.Ys),
/* harmony export */   l49: () => (/* reexport safe */ d3_geo__WEBPACK_IMPORTED_MODULE_1__.l4),
/* harmony export */   sPX: () => (/* reexport safe */ d3_zoom__WEBPACK_IMPORTED_MODULE_4__.sP),
/* harmony export */   td_: () => (/* reexport safe */ d3_selection__WEBPACK_IMPORTED_MODULE_2__.td)
/* harmony export */ });
/* harmony import */ var d3_brush__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9961);
/* harmony import */ var d3_geo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3150);
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3950);
/* harmony import */ var d3_transition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3399);
/* harmony import */ var d3_zoom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5180);
































/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_visual__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3699);

var powerbiKey = "powerbi";
var powerbi = window[powerbiKey];
var cdCircle1B3F6EED64F149D0B0D31A1085D93433_DEBUG = {
    name: 'cdCircle1B3F6EED64F149D0B0D31A1085D93433_DEBUG',
    displayName: 'cdCircle',
    class: 'Visual',
    apiVersion: '5.3.0',
    create: (options) => {
        if (_src_visual__WEBPACK_IMPORTED_MODULE_0__/* .Visual */ .u) {
            return new _src_visual__WEBPACK_IMPORTED_MODULE_0__/* .Visual */ .u(options);
        }
        throw 'Visual instance not found';
    },
    createModalDialog: (dialogId, options, initialState) => {
        const dialogRegistry = globalThis.dialogRegistry;
        if (dialogId in dialogRegistry) {
            new dialogRegistry[dialogId](options, initialState);
        }
    },
    custom: true
};
if (typeof powerbi !== "undefined") {
    powerbi.visuals = powerbi.visuals || {};
    powerbi.visuals.plugins = powerbi.visuals.plugins || {};
    powerbi.visuals.plugins["cdCircle1B3F6EED64F149D0B0D31A1085D93433_DEBUG"] = cdCircle1B3F6EED64F149D0B0D31A1085D93433_DEBUG;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cdCircle1B3F6EED64F149D0B0D31A1085D93433_DEBUG);

})();

cdCircle1B3F6EED64F149D0B0D31A1085D93433_DEBUG = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=https://localhost:8080/assets/visual.js.map