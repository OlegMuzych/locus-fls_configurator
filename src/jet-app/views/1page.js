webix.ui.fullScreen();
import {JetView} from "webix-jet";
import llsModel from "../models/lls-model";


export default class Page9View extends JetView {
    config() {

        // return screen > 1210 ? "wide" : (screen > 1060 ? "mid" : "small");

        var left_menu = {
            view: "scrollview",
            scroll: "y",
            id: "1",
            body: {
                id: "style_left_cols",
                css: "style_left_cols",
                rows: [
                    {
                        view: "button",
                        type: "image",
                        image: "assets/images/model_101.svg",
                        width: 180,
                        height: 200,
                        css: "left_menu_button",
                        id: "left_menu_button_1"
                    },
                    {
                        view: "button",
                        type: "image",
                        image: "assets/images/model_201.svg",
                        width: 180,
                        height: 200,
                        css: "left_menu_button",
                        id: "left_menu_button_2"
                    },
                    {
                        view: "button",
                        type: "image",
                        image: "assets/images/MODEL_301_BLE.svg",
                        width: 180,
                        height: 200,
                        css: "left_menu_button",
                        id: "left_menu_button_3"
                    },
                    {
                        height: 55,
                    },

                    {
                        view: "button",
                        type: "image",
                        image: "assets/images/Back.svg",
                        width: 180,
                        height: 120,
                        id: "button_back",
                        css: "left_menu_button_reference",
                    },
                    {
                        height: 1,
                    },
                    {
                        view: "button",
                        type: "image",
                        image: "assets/images/info.svg",
                        width: 180,
                        height: 200,
                        id: "button_reference",
                        css: "left_menu_button_reference",
                    },
                    {

                    }

                ]
            }
        };



        var central_menu_button = {
            paddingY: 0,
            minWidth: 500,
            maxWidth: 890,
            rows: [
                {
                    css: "central_cols_button",
                    id: "central_cols_button",
                    cols: [
                        {

                            view: "button",
                            label: "Основные настройки",
                            maxWidth: 300,
                            minWidth: 120,
                            height: 100,
                            css: "button_central_menu",
                            id: "general",
                            value: "Save",
                        },
                        {
                            view: "button",
                            label: "Тарировка",
                            maxWidth: 300,
                            minWidth: 120,
                            height: 100,
                            css: "button_central_menu",
                            id: "calibration",
                            value: "Save",
                        },
                        {
                            view: "button",
                            label: "Фильтрация",
                            maxWidth: 300,
                            minWidth: 120,
                            height: 100,
                            css: "button_central_menu",
                            id: "filtering",
                            value: "Save",
                        },
                    ]
                },

            ]


        };

        var general_config = {
            minWidth: 500,
            maxWidth: 890,
            // view:"scrollview",
            // scroll: "y",
            // maxHeight: 860,
            // body: {
            id: "central_menu_button_1",
            rows: [
                {
                    cols: [
                        {

                        },
                        {
                            rows: [
                                {
                                    rows: [
                                        {
                                            view: "text",
                                            height: 100,
                                            label: '<p style="text-align: center; position: relative; top: -20px; left: 54px; font-size: 18px; font-weight: 100; ">Серийный номер</p>',
                                            labelWidth: 400,
                                            css: "window_type_1",
                                            id: "window_type_1",
                                            inputAlign: "center",
                                            readonly: true
                                        },

                                    ]
                                },

                                {height: 20,},
                                {
                                    view: "text",
                                    width: 850,
                                    height: 100,
                                    label: '<p style="text-align: center; position: relative; top: -20px; left: 64px; font-size: 18px; font-weight: 100; ">Сетевой адрес</p>',
                                    labelWidth: 400,
                                    css: "window_type_2",
                                    inputAlign: "center",
                                    id: "window_type_2_1",
                                },
                                {height: 20},
                                {
                                    view: "text",
                                    width: 850,
                                    height: 100,
                                    label: '<p style="text-align: center; position: relative; top: -20px; left: 30px; font-size: 18px; font-weight: 100; ">Минимальный уровень</p>',
                                    labelWidth: 400,
                                    css: "window_type_2",
                                    inputAlign: "center",
                                    id: "window_type_2_2"
                                },
                                {
                                    view: "text",
                                    width: 850,
                                    height: 100,
                                    label: '<p style="text-align: center; position: relative; top: -20px; left: 30px; font-size: 18px; font-weight: 100; ">Максимальный уровень</p>',
                                    labelWidth: 400,
                                    css: "window_type_2",
                                    inputAlign: "center",
                                    id: "window_type_2_3"
                                },
                                {height: 20},
                                {
                                    view: "text",
                                    width: 850,
                                    height: 100,
                                    label: '<p style="text-align: center; position: relative; top: -20px; left: 30px; font-size: 18px; font-weight: 100; ">Скорость подключения</p>',
                                    labelWidth: 400,
                                    css: "window_type_2",
                                    inputAlign: "center",
                                    id: "window_type_2_4"
                                },
                                {height: 20},
                                {
                                    view: "text",
                                    width: 850,
                                    height: 100,
                                    label: '<p style="text-align: center; position: relative; top: -20px; left: -10px; font-size: 18px; font-weight: 100; ">Автоматическая выдача данных</p>',
                                    labelWidth: 400,
                                    css: "window_type_2 ",
                                    inputAlign: "center",
                                    id: "window_type_2_5"
                                },
                                {height: 20,},
                                {
                                    // width: 900,
                                    css: "window_type_2",
                                    id: "window_type_2_6",
                                    rows: [
                                        {
                                            cols: [

                                                {
                                                    view: "label",
                                                    label: "<p style='font-size: 18px; font-weight: 100; position: relative; top: -20px; left: 75px;'>Температурная компенсация</p>",
                                                    width: 400,
                                                    height: 100,
                                                },
                                                {view: "switch", value: 0, id: "temp_compensation", width: 68,},
                                                {
                                                    width: 100,
                                                },
                                                {view: "switch", value: 0, id: "temp_compensation_2", width: 68,}
                                            ]
                                        },
                                    ]
                                },
                            ]
                        },
                        {

                        }
                    ]
                },
            ]
        };

        var calibration = {
            id: "central_menu_button_2",
            cols: [
                {
                    width: 20,
                },
                {
                    rows: [
                        {
                            rows: [
                                {
                                    view: "multitext",
                                    inputWidth: 200,
                                    value: "Susan Way, Dirk Gently, Clark Kent",
                                    tooltip: function (obj) {
                                        return "Guests: " + $$(obj.id).getValueHere();
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        };

        var filtering = {
            minWidth: 500,
            maxWidth: 890,
                id: "central_menu_button_3",
                rows: [
                    {
                        height: 100,
                        cols: [
                            {
                                view: "label",
                                label: "<p style='font-size: 18px; font-weight: 100; position: relative; top: -20px; left: 105px;'>Фильтрация</p>",
                                css:"text_color_filter",
                                id:"text_color_filter_1_0",
                            },
                            {
                                width: 30,
                            },
                            {
                                view: "switch",
                                value: 1,
                                css: "filter_toggle",
                                id: "filtering_switch_top",
                                width: 70,
                            },
                            {

                            }
                        ]
                    },
                    {
                        height: 20,
                    },
                    {
                        id: "degree of filtration",
                        rows: [
                            {
                                cols: [
                                    {
                                        view: "label",
                                        label: "<p style='font-size: 18px; font-weight: 100; position: relative; top: -20px; left: 30px;'>Степень фильтрации</p>",
                                        width: 300,
                                        height: 50,
                                        css:"text_color_filter",
                                        id:"text_color_filter_1_1",
                                    },
                                ]
                            }
                        ]
                    },
                    {
                        id: "degree_of_filtration",
                        rows: [
                            {
                                cols: [
                                    {

                                    },
                                    {
                                        view: "button",
                                        type: "image",
                                        image: "assets/images/filtr_Karier.svg",
                                        width: 240,
                                        label: "Карьерная техника",
                                        css: "image_button_filter",
                                        id:"image_button_filter_1"
                                    },
                                    {width: 35,},
                                    {
                                        view: "button",
                                        type: "image",
                                        image: "assets/images/filtr_Stroit.svg",
                                        width: 240,
                                        height: 300,
                                        css: "image_button_filter",
                                        id:"image_button_filter_2"
                                    },
                                    {width: 35,},
                                    {
                                        view: "button",
                                        type: "image",
                                        image: "assets/images/filtr_Rovn.svg",
                                        width: 240,
                                        height: 300,
                                        css: "image_button_filter",
                                        id:"image_button_filter_3"
                                    },
                                    {

                                    }
                                ]
                            }
                        ]
                    },
                    {
                        height: 0,
                    },
                    {
                        height: 320,
                        css: "filters_rows",
                        id: "degree_of_filtration_2",
                        rows: [
                            {
                                rows: [
                                    {
                                        width:100,
                                        height: 20,
                                    },
                                    {
                                            cols: [
                                            {
                                                width: 124,
                                            },
                                            {
                                                view: "label",
                                                label: "<p style='font-size: 18px; font-weight: 100; position: relative; top:-20px;'>Тип фильтрации</p>",
                                                width: 250,
                                                css:"text_color_filter",
                                                id:"text_color_filter_1",
                                            },
                                            {
                                                width: 1,
                                            },
                                            {
                                                view: "text",
                                                value: "Квадратичная",
                                                width: 200,
                                                inputAlign: "center",
                                                inputHeight: 54,
                                                css: "full_window_text",
                                                readonly: true,
                                                id:"filter_open_windows"
                                            },
                                            {
                                                width: 114,
                                            },
                                            {
                                                view: "toolbar",
                                                css:"toolbar_button",
                                                elements: [{
                                                    view: "button",
                                                    css: "button_filter_set",
                                                    label: 'Выбрать',
                                                    popup: "my_pop",
                                                    width:150,
                                                    height:54,

                                                }]
                                            },
                                            {
                                                width: 10,
                                            }
                                        ]
                                    },
                                ]
                            },
                            {
                                    height: 2,
                            },
                            {
                                id: "degree_of_filtration_3",
                                rows: [
                                    {
                                        height: 100,
                                        cols: [
                                            {
                                                view: "label",
                                                label: "<p style='font-size: 18px; font-weight: 100; position: relative; left: 30px;'>Время усреднения (0...21) с</p>",
                                                width: 300,
                                                css:"text_color_filter",
                                                id:"text_color_filter_2",
                                            },
                                            {
                                                width: 10,
                                            },
                                            {
                                                paddingY: 41,
                                                rows:[
                                                    {
                                                        view: "slider",
                                                        value: "0",
                                                        name: "s1",
                                                        width: 300,
                                                        min: 0,
                                                        max: 21,
                                                        css: "slider_1",
                                                        id: "slider_filter_1",
                                                        title: webix.template("#value#"),
                                                    }
                                                ]
                                            },
                                            {
                                                paddingY: 45,
                                                rows:[
                                                    {
                                                        view: "text",
                                                        value: "0",
                                                        name: "s1",
                                                        width: 50,
                                                        inputAlign: "center",
                                                        inputHeight: 50,
                                                        css: "full_window_text",
                                                        id: "window_text_time",
                                                        readonly: true,
                                                        height:50,
                                                    },
                                                ]
                                            },
                                            {
                                                width: 30,
                                            },
                                            {
                                                view: "button",
                                                type: "label",
                                                label: "Применить",
                                                width: 150,
                                                id: "button_slider_gen_value_1",
                                                css: "button_slider_gen_value"
                                            },
                                            {

                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                id: "degree_of_filtration_4",
                                rows: [
                                    {
                                        height: 100,
                                        cols: [
                                            {
                                                view: "label",
                                                label: "<p style='font-size: 18px; font-weight: 100; position: relative; left: 78px;'>Длина медианы (0...7) </p>",
                                                width: 300,
                                                css:"text_color_filter",
                                                id:"text_color_filter_3",
                                            },
                                            {
                                                width: 10,
                                            },
                                            {
                                                paddingY: 41,
                                                rows:[
                                                    {
                                                        view: "slider",
                                                        value: "0",
                                                        name: "s2",
                                                        width: 300,
                                                        min: 0,
                                                        max: 7,
                                                        css: "slider_1",
                                                        title: webix.template("#value#"),
                                                        id:"slider_filter_2",
                                                    }
                                                ]
                                            },
                                            {
                                                paddingY: 45,
                                                rows:[
                                                    {
                                                        view: "text",
                                                        value: "0",
                                                        name: "s1",
                                                        width: 50,
                                                        inputAlign: "center",
                                                        inputHeight: 50,
                                                        css: "full_window_text",
                                                        id:"window_text_mediana",
                                                        readonly: true,
                                                        height:50,
                                                    },
                                                ]
                                            },
                                            {
                                                width: 30,
                                            },
                                            {
                                                view: "button",
                                                type: "label",
                                                label: "Применить",
                                                width: 150,
                                                id: "button_slider_gen_value_2",
                                                css: "button_slider_gen_value"
                                            },
                                            {

                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
        };


        var right_menu_button={
            height: 95,
            rows:[

                 {
                     //Кнопки сверху в правом меню-----------------------//
                     paddingY: 20,
                     cols: [
                         {

                         },
                         {view: "button", width: 250, height: 70, label: "Сервис",  popup: "my_pop_2", css: "button_right_menu_top_1", id:"button_right_menu_top_1"},
                         {
                             width: 10,
                         },
                          {view: "button", width: 250, height: 70, label: "Пароль", css: "button_right_menu_top_1", id:"button_right_menu_top_2"},
                       {

                        }
                       ]
                    }
                ]
        };



        var right_menu_status={
            css:"right_menu_status",
            id:"right_menu_status",
                    rows:[
                        {
                            height: 20,

                        },
                        {
                            cols:[
                                {width: 70,},
                                {view:"button", width: 30, height: 30, css:"rows_level_right_menu_switch", id:"button_define_define_1"},
                                {view:"button", width: 30, height: 30, css:"rows_level_right_menu_switch_define", id:"button_define_1",},
                                {width: 20,},
                                {view:"label", label:"Датчик подключен", height: 30, css:"rows_level_right_menu_info", id:"rows_level_right_menu_info_1"}
                            ]
                        },
                        {
                            height: 10,
                        },
                        {
                            cols:[
                                {width: 70,},
                                {view:"button", width: 30, height: 30, css:"rows_level_right_menu_switch", id:"button_define_define_2",},
                                {view:"button", width: 30, height: 30, css:"rows_level_right_menu_switch_define", id:"button_define_2",},
                                {width: 20,},
                                {view:"label", label:"Топливо стабильно", height: 30, css:"rows_level_right_menu_info", id:"rows_level_right_menu_info_2"}
                            ]
                        },
                        {
                            height: 10,
                        },
                        {
                            cols:[
                                {width: 70,},
                                {view:"button", width: 30, height: 30, css:"rows_level_right_menu_switch", id:"button_define_define_3"},
                                {view:"button", width: 30, height: 30, css:"rows_level_right_menu_switch_define", id:"button_define_3",},
                                {width: 20,},
                                {view:"label", label:"Калибровка не требуется", height: 30, css:"rows_level_right_menu_info", id:"rows_level_right_menu_info_3"}
                            ]
                        },
                        {
                            height: 10,
                        },
                        {
                            cols:[
                                {width: 70,},
                                {view:"button", width: 30, height: 30, css:"rows_level_right_menu_switch", id:"button_define_4_base", },
                                {view:"button", width: 30, height: 30, css:"rows_level_right_menu_switch_define", id:"button_define_4",},
                                {width: 20,},
                                {view:"label", label:"Термокомпенсация", height: 30, width:200, css:"rows_level_right_menu_info", id:"rows_level_right_menu_info_4"},
                                {
                                    width:50,
                                },
                                {view:"button", type:"image", image:"assets/images/temperature.png", width:30, height:30, css:"thermometer_image",},
                                {view:"text", width: 60, height:30, css:"window_temp", id:"window_temp", readonly:true, value:"25°"},

                            ]
                        },
                        {
                            height: 20,
                        }
                    ]

        };




        var right_menu_setup={
            css:"right_menu_status",
            id:"right_menu_setup",
            height: 650,
                    rows:[
                        {
                            cols:[
                                {
                                    width: 50,
                                },
                                {view:"label", label:"<p style='font-size: 18px; font-weight: 100; position: relative; top: -20px; left: 30px; '>Колибровка с топливом</p>", width: 300, height:100, css:"right_menu_status_text", id:"right_menu_status_text"},
                                {
                                    width: 50,
                                },
                                {view: "switch", value: "1", css:"filter_toggle", id:"calibration_fuel", height: 100,},
                            ],

                        },
                        {
                            rows:[
                                {
                                    cols:[
                                        {
                                            width: 40,
                                        },
                                        {view:"button", type:"label", label:"Откалибровать", width: 460, height: 50, css:"auto_calibration", id:"auto_calibration"}
                                    ]
                                }
                            ]
                        },
                        {
                            height: 50,
                        },
                        {

                            cols:[
                                {
                                    width: 30,
                                },
                                {view:"bullet", layout:"y", id:"progress_bar", css:"progress_bar", value:0, labelHeight:30, width: 120,  minRange:0, maxRange:10, stroke:40,
                                    scale: {
                                        step: 10,
                                        template: "#value#%"
                                    },
                                    bands:[
                                        { value:10, color:"#628cbb", css:"test345"},
                                        // { value:0, color:"#628cbb"},
                                    ],
                                    color:"#f8f8f8",
                                },
                                {
                                    width: 150,
                                },
                                {
                                    rows:[
                                        {
                                            cols:[
                                                {

                                                    rows:[
                                                        {view:"text", width: 200, height: 50, css:"full_window_text", readonly:false, id:"auto_calibration_set_1"},
                                                        {view:"button", type:"label", label:"Полный", width: 200, height: 50, css:"auto_calibration", id:"auto_calibration_1"},
                                                        {
                                                            height: 130,
                                                        },
                                                        {view:"text", width: 200, height: 50, css:"full_window_text", readonly:false, id:"auto_calibration_set_2"},
                                                        {view:"button", type:"label", label:"Пустой", width: 200, height: 50, css:"auto_calibration", id:"auto_calibration_2"},
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            height: 50,
                        },
                        {

                            rows:[
                                {
                                    cols:[
                                        {
                                            width: 40,
                                        },
                                        {view:"button", type:"label", label:"Редактировать значения", width: 460, height: 50, css:"edit_values"}
                                    ]
                                }
                            ]
                        }
                    ]


        };

        var right_menu_filter={
            css:"right_menu_status",
            id:"right_menu_filter",
            height: 650,
            rows:[
                {
                    cols:[
                        {
                            height: 100,
                        }
                    ],

                },
                {
                    rows:[
                        {
                            cols:[
                                {
                                    height: 20,
                                }
                            ]
                        }
                    ]
                },
                {
                    height: 50,
                },
                {

                    cols:[
                        {
                            width: 30,
                        },
                        {view:"bullet", layout:"y", id:"progress_bar", css:"progress_bar", value:0, labelHeight:30, width: 120,  minRange:0, maxRange:10, stroke:40,
                            scale: {
                                step: 10,
                                template: "#value#%"
                            },
                            bands:[
                                { value:120, color:"#b6c7dd"},
                                { value:80, color:"#b6c7dd"},
                                { value:60, color:"#b6c7dd"},
                            ],
                            color:"#f8f8f8",
                        },
                        {
                            width: 150,
                        },
                        {
                            rows:[
                                {
                                    cols:[
                                        {

                                            id:"right_menu_setup_disabled",
                                            rows:[
                                                {view:"text", width: 200, height: 50, css:"full_window_text", readonly:true, inputAlign:"center", id:"auto_calibration_set_3"},
                                                {view:"button", type:"label", label:"Полный", width: 200, height: 50, css:"auto_calibration", id:"auto_calibration_3",},
                                                {
                                                    height: 130,
                                                },
                                                {view:"text", width: 200, height: 50, css:"full_window_text", readonly:true, inputAlign:"center",id:"auto_calibration_set_4"},
                                                {view:"button", type:"label", label:"Пустой", width: 200, height: 50, css:"auto_calibration", id:"auto_calibration_4"},
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    height: 50,
                },
                {

                    rows:[
                        {
                            cols:[
                                {
                                    height:20,
                                }
                            ]
                        }
                    ]
                }
            ]
        }

        var right_menu_calibration = {
            id:"right_menu_calibration_button",
            cols: [
                {

                },
                {view: "button", width: 254, height: 70, label: "Слив", css: "button_type_calibration_1", id:"button_type_calibration_1" },
                {view: "button", width: 254, height: 70, label: "Залив", css: "button_type_calibration_2", id:"button_type_calibration_2"},
                {

                }
            ]

        };

        var right_menu_calibration_setup={
            id:"right_menu_calibration_setup",
            css:"rows_right_menu_calibration_2",
            height: 570,
                    rows:[
                {
                    height: 50,
                },
                {
                    cols:[
                        {

                        },
                        {view:"label", label:"<p style='font-size: 18px; color:#000; font-weight:100; position: relative; top:-20px;'>Паспортный объем бака, л</p>", width: 190, height: 50,},
                        {

                        },
                        {view:"text", css:"full_window_text", width: 200, id:"manual_volume_fuel_1"},
                        {

                        }
                    ]
                },
                {
                    cols:[
                        {

                        },
                        {view: "label", label:"<p style='font-size: 18px; color:#000; font-weight:100; position: relative; top:-20px;'>Начальный объем, л</p>",width: 190, height: 50, },
                        {

                        },
                        {view:"text", css:"full_window_text", width: 200, id:"initial_volume_fuel_1"},
                        {

                        }
                    ]

                },
                {
                    cols:[
                        {

                        },
                        {view: "label", label:"<p style='font-size: 18px; color:#000; font-weight:100; position: relative; top:-20px;'>Шаг, л</p>", width: 190, height: 50,},
                        {

                        },
                        {view:"text", css:"full_window_text", width: 200, id:"step_liters_1"},
                        {

                        }
                    ]
                },
                {
                    height: 100,
                },
                {
                    cols:[
                        {

                        },
                        {view: "button", label:"Продолжить", width: 480, height:50, id:"central_menu_and_right_menu_calibration_next_window_button", css:"button_next_drain_window_1_2"},
                        {

                        }
                    ]
                }
             ]
        };

        var right_menu_calibration_drain_2={
            id:"right_menu_calibration_drain_2",
            css:"rows_right_menu_calibration_2",
            height: 570,
                    rows:[
                {
                    height: 50,
                },
                {
                    cols:[
                        {

                        },
                        {view:"label", label:"<p style='font-size: 18px; color:#000; font-weight:100; position: relative; top:-20px;'>Паспортный объем бака, л</p>", width: 190, height: 50,},
                        {

                        },
                        {view:"text", width: 200, css:"full_window_text", readonly:true, id:"manual_volume_fuel_2" },
                        {

                        }
                    ]
                },
                {
                    cols:[
                        {

                        },
                        {view: "label", label:"<p style='font-size: 18px; color:#000; font-weight:100; position: relative; top:-20px;'>Начальный объем, л</p>",width: 190, height: 50, },
                        {

                        },
                        {view:"text", width: 200, css:"full_window_text", readonly:true, id:"initial_volume_fuel_2"},
                        {

                        }
                    ]

                },
                {
                    cols:[
                        {

                        },
                        {view: "label", label:"<p style='font-size: 18px; color:#000; font-weight:100; position: relative; top:-20px;'>Шаг, л</p>", width: 190, height: 50,},
                        {

                        },
                        {view:"text", width: 200, css:"full_window_text", readonly:true, id:"step_liters_2"},
                        {

                        }
                    ]
                },
                {
                    height: 30,
                },
                {
                    cols:[
                        {

                        },
                        {view: "label", label:"<p style='font-size: 18px; color:#000; font-weight:100; position: relative; top:-20px;'>Количество шагов</p>", width: 190, height: 50, },
                        {

                        },
                        {view:"text", width: 200, css:"full_window_text", readonly:true, id:"counts_step"},
                        {

                        }
                    ]
                },
                {
                    height: 20,
                },
                {
                    cols:[
                        {

                        },
                        {view: "button", label:"Добавить шаг", width: 480, height: 50, css:"set_step_drain_button_2", id:"button_add_step_1"},
                        {

                        }

                    ]
                },
                {
                    height: 10,
                },
                {
                    cols:[
                        {

                        },
                        {view: "button", label:"Удалить шаг", width: 480, height: 50, css:"set_step_drain_button_2", id:"button_add_step_2"},
                        {

                        }

                    ]
                },
                {
                    height: 60,
                },
                {
                    cols:[
                        {

                        },
                        {view: "button", label:"Очистить таблицу", width: 480, height: 50, css:"clear_table_drain_button_2"},
                        {

                        }

                    ]
                },
                {
                    height: 10,
                },
                {
                    cols:[
                        {

                        },
                        {view: "button", label:"Завершить тарировку", width: 480, height: 50, id:"closed_calibration_button_window_2", css:"button_next_drain_window_1_2"},
                        {

                        }

                    ]
                }


            ]
        };


        var fuel_filling ={
            id:"fuel_filling",
            css:"rows_right_menu_calibration_2",
            height: 570,
            rows:[
                {
                    height: 50,
                },
                {
                    cols:[
                        {

                        },
                        {view:"label", label:"<p style='font-size: 18px; color:#000; font-weight:100; position: relative; top:-20px;'>Паспортный объем бака, л</p>", width: 190, height: 50,},
                        {

                        },
                        {view:"text", css:"full_window_text", width: 200, id:"manual_volume_fuel_fuel_filling_1"},
                        {

                        }
                    ]
                },
                {
                    cols:[
                        {

                        },
                        {view: "label", label:"<p style='font-size: 18px; color:#000; font-weight:100; position: relative; top:-20px;'>Шаг, л</p>", width: 190, height: 50,},
                        {

                        },
                        {view:"text", css:"full_window_text", width: 200, id:"step_liters_fuel_filling_1"},
                        {

                        }
                    ]
                },
                {
                    height: 149,
                },
                {
                    cols:[
                        {

                        },
                        {view: "button", label:"Продолжить", width: 480, height:50, id:"fuel_filling_button_next", css:"button_next_drain_window_1_2"},
                        {

                        }
                    ]
                }
            ]
        };

        var fuel_filling_2 ={
            id:"fuel_filling_2",
            css:"rows_right_menu_calibration_2",
            height: 570,
            rows:[
                {
                    height: 50,
                },
                {
                    cols:[
                        {

                        },
                        {view:"label", label:"<p style='font-size: 18px; color:#000; font-weight:100; position: relative; top:-20px;'>Паспортный объем бака, л</p>", width: 190, height: 50,},
                        {

                        },
                        {view:"text", width: 200, css:"full_window_text", readonly:true, id:"manual_volume_fuel_fuel_filling_2" },
                        {

                        }
                    ]
                },
                {
                    cols:[
                        {

                        },
                        {view: "label", label:"<p style='font-size: 18px; color:#000; font-weight:100; position: relative; top:-20px;'>Шаг, л</p>", width: 190, height: 50,},
                        {

                        },
                        {view:"text", width: 200, css:"full_window_text", readonly:true, id:"step_liters_fuel_filling_2"},
                        {

                        }
                    ]
                },
                {
                    height: 30,
                },
                {
                    cols:[
                        {

                        },
                        {view: "label", label:"<p style='font-size: 18px; color:#000; font-weight:100; position: relative; top:-20px;'>Количество шагов</p>", width: 190, height: 50, },
                        {

                        },
                        {view:"text", width: 200, css:"full_window_text", readonly:true, id:"counts_step_fuel_filling"},
                        {

                        }
                    ]
                },
                {
                    height: 70,
                },
                {
                    cols:[
                        {

                        },
                        {view: "button", label:"Добавить шаг", width: 480, height: 50, css:"set_step_drain_button_2", id:"button_add_step_3"},
                        {

                        }

                    ]
                },
                {
                    height: 10,
                },
                {
                    cols:[
                        {

                        },
                        {view: "button", label:"Удалить шаг", width: 480, height: 50, css:"set_step_drain_button_2", id:"button_add_step_4"},
                        {

                        }

                    ]
                },
                {
                    height: 60,
                },
                {
                    cols:[
                        {

                        },
                        {view: "button", label:"Очистить таблицу", width: 480, height: 50, css:"clear_table_drain_button_2"},
                        {

                        }

                    ]
                },
                {
                    height: 10,
                },
                {
                    cols:[
                        {

                        },
                        {view: "button", label:"Завершить тарировку", width: 480, height: 50, id:"fuel_filling_2_button_closed", css:"button_next_drain_window_1_2"},
                        {

                        }

                    ]
                }


            ]
        };



// Кнопка Сервис -------------------------------//
        webix.ui({
            view:"popup",
            id:"my_pop_2",
            css:"service_button",
            width:245,
            height: 400,
            body:{
                view:"list",
                data:[
                    {id:"11",  location: "Обновить прошивку", name:""},
                    {id:"22",  location:"Сброс всех настроек", name:""},
                ],
                template:"#name# - #location#",
                autoheight:true,
                select:true
            }
        });



// Кнопка выбрать в окне фильтрация -------------------------------//
        webix.ui({
            view:"popup",
            multi:true,
            id:"my_pop",
            css:"service_button",
            width:300,
            height: 400,
            body:{
                view:"list",
                data:[
                    {id:"1",  location: "Квадратичная", name:"1"},
                    {id:"2",  location:"Усреднение", name:"2"},
                    {id:"3",  location:"Интерполяция", name:"3"},
                ],
                template:"#name# - #location#",
                autoheight:true,
                select:true
            }
        });



        return {
            view:"scrollview",
            scroll: "y",
            maxHeight: 1000,
            css:"style_body",
            id:"dark",
            body: {
                cols: [
                    {
                        rows: [
                            left_menu
                        ]
                    },
                    {
                        id:"style_left_cols_2",
                        css:"style_left_cols",
                        width: 10,
                    },
                    {
                        id:"style_general_rows_1",
                        css:"style_general_rows",
                        rows: [
                                 central_menu_button,
                            {
                                height: 40,
                            },

                            {
                                rows:[
                                   general_config
                                ]
                            },
                            {
                                rows:[
                                    filtering
                                ]
                            },
                            {
                                rows:[
                                    calibration
                                ]
                            }
                        ]

                    },
                    {
                        css:"rows_right",
                        id:"rows_right_1",
                        width: 50,
                    },
                    {
                        css:"rows_right",
                        id:"rows_right_2",
                        rows: [
                            {
                                rows:[
                                    right_menu_button,
                                ]
                            },
                            {
                                height: 20,
                            },
                            {
                                rows:[
                                    right_menu_status,
                                ]
                            },
                            {
                                height: 20,
                            },
                            {
                                rows:[
                                    right_menu_setup
                                ]
                            },
                            {
                                height: 1,
                            },
                            {
                                rows:[
                                    right_menu_filter
                                ]
                            },
                            {

                                rows:[
                                    right_menu_calibration,
                                    right_menu_calibration_setup,
                                    right_menu_calibration_drain_2,
                                    fuel_filling,
                                    fuel_filling_2,
                                ]
                            }
                        ]
                    },
                    {
                        css:"rows_right",
                        id:"rows_right_3",
                        width: 50,
                    }
                ]
            }


        }
    }

    destroy() {
        super.destroy();
        llsModel.clearOnShortData(this.listener1)
    }

    listener1 = (shortData)=>{
        console.log(shortData);
        $$("window_temp").setValue(shortData.temperature.toString());
        $$("window_type_2_1").setValue(shortData.llsAdr.toString());

    }

    init(view){

        llsModel.onShortData(this.listener1);

        $$("button_back").attachEvent("onItemClick", (id, e)=>{
            this.show("win");
        });


        $$("general").attachEvent("onAfterSelect", function(id){
            var item = this.getItem(id);
            $$("central_menu_button_1").setValues(item);
        });


        //Кнопки в правом меню статус ( красные/зеленые )------------------------//
        $$("button_define_1").show()
        $$("button_define_2").hide()
        $$("button_define_3").show()
        $$("button_define_4").hide()
        $$("button_define_define_1").hide()
        $$("button_define_define_3").hide()
        $$("auto_calibration_3").disable()
        $$("auto_calibration_4").disable()



        //Дефолтные значения при загрузке стр на главном меню------------------//
        // $$("general").focus()
        $$("central_menu_button_1").show()
        $$("right_menu_setup").show()
        $$("central_menu_button_2").hide()
        $$("central_menu_button_3").hide()
        $$("right_menu_filter").hide()
        $$("right_menu_calibration_button").hide()
        $$("right_menu_calibration_setup").hide()
        $$("right_menu_calibration_drain_2").hide()



        //Основные настройки-----------------------------------------------//
        $$("general").attachEvent("onItemClick", (id, e)=>{
            $$("central_menu_button_1").show()
            $$("right_menu_setup").show()
            $$("central_menu_button_2").hide()
            $$("central_menu_button_3").hide()
            $$("right_menu_filter").hide()
            $$("right_menu_calibration_button").hide()
            $$("right_menu_calibration_setup").hide()
            $$("right_menu_calibration_drain_2").hide()
            $$("fuel_filling").hide()
            $$("fuel_filling_2").hide()
        });


        //Тарировка---------------------------------------------------//
        $$("calibration").attachEvent("onItemClick", (id, e)=>{
            $$("central_menu_button_3").hide()
            $$("central_menu_button_1").hide()
            $$("central_menu_button_2").show()
            $$("right_menu_setup").hide()
            $$("right_menu_filter").hide()
            $$("right_menu_calibration_button").show()
            $$("right_menu_calibration_setup").show()
            $$("right_menu_calibration_drain_2").hide()
            $$("fuel_filling").hide()
            $$("fuel_filling_2").hide()
            $$("calibration").focus()

        });


        //Фильтрация-----------------------------------------------//
        $$('filtering').attachEvent("onItemClick", (id, e)=>{
            $$("central_menu_button_3").show()
            $$("right_menu_filter").show()
            $$("central_menu_button_1").hide()
            $$("central_menu_button_2").hide()
            $$("right_menu_setup").hide()
            $$("right_menu_calibration_button").hide()
            $$("right_menu_calibration_setup").hide()
            $$("right_menu_calibration_drain_2").hide()
            $$("fuel_filling").hide()
            $$("fuel_filling_2").hide()

        });



        //Правое меню Тарировки "ЗАЛИВ" -----------------------------------------------//
        $$("fuel_filling").hide()
        $$("fuel_filling_2").hide()
        $$("button_type_calibration_2").attachEvent("onItemClick", (id, e)=>{
            $$("fuel_filling").show()
            $$("button_type_calibration_2").focus()

        });

        $$("fuel_filling_button_next").attachEvent("onItemClick", (id, e)=>{
            $$("fuel_filling").hide()
            $$("fuel_filling_2").show()
            $$("general").disable()
            $$("filtering").disable()
            $$("calibration").disable()
            $$("button_type_calibration_1").disable()
            $$("button_type_calibration_2").disable()

        });

        $$("fuel_filling_2_button_closed").attachEvent("onItemClick", (id, e)=>{
            $$("fuel_filling_2").hide()
            $$("fuel_filling").show()
            $$("general").enable()
            $$("filtering").enable()
            $$("calibration").enable()
            $$("button_type_calibration_1").enable()
            $$("button_type_calibration_2").enable()
            $$("button_type_calibration_2").focus()
        });



        //Правое меню Тарировки "СЛИВ"-----------------------------------------------//

        $$("central_menu_and_right_menu_calibration_next_window_button").attachEvent("onItemClick", (id, e)=>{
            $$("right_menu_calibration_setup").hide()
            $$("right_menu_calibration_drain_2").show()
            $$("general").disable()
            $$("filtering").disable()
            $$("calibration").disable()
            $$("button_type_calibration_2").disable()
            $$("button_type_calibration_1").disable()


            $$("closed_calibration_button_window_2").attachEvent("onItemClick", (id, e)=>{
                $$("right_menu_calibration_setup").show()
                $$("right_menu_calibration_drain_2").hide()
                $$("general").enable()
                $$("filtering").enable()
                $$("calibration").enable()
                $$("button_type_calibration_2").enable()
                $$("button_type_calibration_1").enable()
                $$("button_type_calibration_1").focus()
            });
        });



        $$("button_type_calibration_2").attachEvent("onItemClick", (id, e)=>{
            $$("right_menu_calibration_setup").hide()

        });


        $$("button_type_calibration_1").attachEvent("onItemClick", (id, e)=>{
            $$("right_menu_calibration_setup").show()
            $$("fuel_filling").hide()
            $$("fuel_filling_2").hide()
        });



        // button_right_menu_top_1

        $$("button_right_menu_top_1").attachEvent("onItemClick", (id, e)=>{
            if ($$("button_right_menu_top_1").getValue()== 0) {
                $$("button_right_menu_top_1").focus()
            } else {if
                ($$("11").getValue()== 0) {
                    $$("button_right_menu_top_1").focus()
                }



            }
        });



        $$("filtering_switch_top").attachEvent("onItemClick", function(){
            if ($$("filtering_switch_top").getValue()== 1) {

                $$("degree_of_filtration").enable()
                $$("degree_of_filtration_2").enable()
                $$("degree_of_filtration_3").enable()
                $$("degree_of_filtration_4").enable()

                    } else {

                $$("degree_of_filtration").disable()
                $$("degree_of_filtration_2").disable()
                $$("degree_of_filtration_3").disable()
                $$("degree_of_filtration_4").disable()

                    }

                });

        $$("temp_compensation").attachEvent("onItemClick", function(){
            if ($$("temp_compensation").getValue()== 1) {
                $$("button_define_4_base").hide()
                $$("button_define_4").show()
            } else{
                $$("button_define_4").hide()
                $$("button_define_4_base").show()
            }
        });




        $$("auto_calibration").disable()
        $$("calibration_fuel").attachEvent("onItemClick", function(){
            if ($$("calibration_fuel").getValue()== 1) {

                $$("auto_calibration_set_2").enable()
                $$("auto_calibration_set_1").enable()
                $$("auto_calibration_2").enable()
                $$("auto_calibration_1").enable()
                $$("auto_calibration").disable()
            } else {
                $$("auto_calibration_set_2").disable()
                $$("auto_calibration_set_1").disable()
                $$("auto_calibration_2").disable()
                $$("auto_calibration_1").disable()
                $$("auto_calibration").enable()
            }
        });


        setInterval(function(){
            var value = Math.floor(Math.random()*10);
            $$("progress_bar").setValue(value);
            $$("progress_bar").setValue(10-value);
        }, 2000)




        var image = $$("temp_compensation_2").attachEvent("onItemClick", function() {
            console.log($$("temp_compensation_2").getValue());

            if ($$("temp_compensation_2").getValue() == 0) {

                $$("left_menu_button_1").define("image", "assets/images//MODEL_101.svg")
                $$("left_menu_button_2").define("image", "assets/images//MODEL_201.svg")
                $$("left_menu_button_3").define("image", "assets/images//MODEL_301_BLE.svg")
                $$("button_back").define("image", "assets/images//back.svg")
                $$("button_reference").define("image", "assets/images//info.svg")
                $$("left_menu_button_1").refresh();
                $$("left_menu_button_2").refresh();
                $$("left_menu_button_3").refresh();
                $$("button_back").refresh();
                $$("button_reference").refresh();
            }
         else {
                $$("left_menu_button_1").define("image", "assets/images/MODEL_101_inverse.svg")
                $$("left_menu_button_2").define("image", "assets/images/MODEL_201_inverse.svg")
                $$("left_menu_button_3").define("image", "assets/images/MODEL_301_BLE_inverse.svg")
                $$("button_back").define("image", "assets/images//back_inverse.svg")
                $$("button_reference").define("image", "assets/images/info_inverse.svg")
                $$("left_menu_button_1").refresh();
                $$("left_menu_button_2").refresh();
                $$("left_menu_button_3").refresh();
                $$("button_back").refresh();
                $$("button_reference").refresh();
            }
        });



















        var color = $$("temp_compensation_2").attachEvent("onItemClick", function() {
            console.log($$("temp_compensation_2").getValue());

            if ($$("temp_compensation_2").getValue()== 1) {

                setColor("white","white");

            } else {
                setColor("dark","black");

            }
        });


        function setColor(id, color)
        {
            webix.html.removeCss( $$("dark").getNode(), "style_body");
            webix.html.removeCss( $$("style_left_cols").getNode(), "style_left_cols");
            webix.html.removeCss( $$("style_left_cols_2").getNode(), "style_left_cols");
            webix.html.removeCss( $$("style_general_rows_1").getNode(), "style_general_rows");
            webix.html.removeCss( $$("left_menu_button_1").getNode(), "left_menu_button");
            webix.html.removeCss( $$("left_menu_button_2").getNode(), "left_menu_button");
            webix.html.removeCss( $$("left_menu_button_3").getNode(), "left_menu_button");
            webix.html.removeCss( $$("general").getNode(), "button_central_menu");
            webix.html.removeCss( $$("calibration").getNode(), "button_central_menu");
            webix.html.removeCss( $$("filtering").getNode(), "button_central_menu");
            webix.html.removeCss( $$("button_reference").getNode(), "left_menu_button_reference");
            webix.html.removeCss( $$("button_back").getNode(), "left_menu_button_reference");
            webix.html.removeCss( $$("window_type_1").getNode(), "window_type_1");
            webix.html.removeCss( $$("window_type_2_1").getNode(), "window_type_2");
            webix.html.removeCss( $$("window_type_2_2").getNode(), "window_type_2");
            webix.html.removeCss( $$("window_type_2_3").getNode(), "window_type_2");
            webix.html.removeCss( $$("window_type_2_4").getNode(), "window_type_2");
            webix.html.removeCss( $$("window_type_2_5").getNode(), "window_type_2");
            webix.html.removeCss( $$("window_type_2_6").getNode(), "window_type_2");
            webix.html.removeCss( $$("right_menu_status").getNode(), "right_menu_status");
            webix.html.removeCss( $$("right_menu_setup").getNode(), "right_menu_status");
            webix.html.removeCss( $$("rows_right_1").getNode(), "rows_right");
            webix.html.removeCss( $$("rows_right_2").getNode(), "rows_right");
            webix.html.removeCss( $$("rows_right_3").getNode(), "rows_right");
            webix.html.removeCss( $$("rows_level_right_menu_info_1").getNode(), "rows_level_right_menu_info");
            webix.html.removeCss( $$("rows_level_right_menu_info_2").getNode(), "rows_level_right_menu_info");
            webix.html.removeCss( $$("rows_level_right_menu_info_3").getNode(), "rows_level_right_menu_info");
            webix.html.removeCss( $$("rows_level_right_menu_info_4").getNode(), "rows_level_right_menu_info");
            webix.html.removeCss( $$("button_right_menu_top_1").getNode(), "button_right_menu_top_1");
            webix.html.removeCss( $$("button_right_menu_top_2").getNode(), "button_right_menu_top_1");
            webix.html.removeCss( $$("auto_calibration_set_1").getNode(), "full_window_text");
            webix.html.removeCss( $$("auto_calibration_set_2").getNode(), "full_window_text");
            webix.html.removeCss( $$("auto_calibration_set_3").getNode(), "full_window_text");
            webix.html.removeCss( $$("auto_calibration_set_4").getNode(), "full_window_text");
            webix.html.removeCss( $$("right_menu_status_text").getNode(), "right_menu_status_text");
            webix.html.removeCss( $$("central_cols_button").getNode(), "central_cols_button");
            webix.html.removeCss( $$("right_menu_filter").getNode(), "right_menu_status");
            webix.html.removeCss( $$("button_type_calibration_1").getNode(), "button_type_calibration_1");
            webix.html.removeCss( $$("button_type_calibration_2").getNode(), "button_type_calibration_2");
            webix.html.removeCss( $$("right_menu_calibration_setup").getNode(), "rows_right_menu_calibration_2");
            webix.html.removeCss( $$("right_menu_calibration_drain_2").getNode(), "rows_right_menu_calibration_2");
            webix.html.removeCss( $$("button_add_step_1").getNode(), "set_step_drain_button_2");
            webix.html.removeCss( $$("button_add_step_2").getNode(), "set_step_drain_button_2");
            webix.html.removeCss( $$("button_add_step_3").getNode(), "set_step_drain_button_2");
            webix.html.removeCss( $$("button_add_step_4").getNode(), "set_step_drain_button_2");
            webix.html.removeCss( $$("filter_open_windows").getNode(), "full_window_text");
            webix.html.removeCss( $$("degree_of_filtration_2").getNode(), "filter_rows");
            webix.html.removeCss( $$("text_color_filter_1").getNode(), "text_color_filter");
            webix.html.removeCss( $$("text_color_filter_2").getNode(), "text_color_filter");
            webix.html.removeCss( $$("text_color_filter_3").getNode(), "text_color_filter");
            webix.html.removeCss( $$("text_color_filter_1_0").getNode(), "text_color_filter");
            webix.html.removeCss( $$("text_color_filter_1_1").getNode(), "text_color_filter");
            webix.html.removeCss( $$("window_text_time").getNode(), "full_window_text");
            webix.html.removeCss( $$("window_text_mediana").getNode(), "full_window_text");
            webix.html.removeCss( $$("slider_filter_1").getNode(), "slider_1");
            webix.html.removeCss( $$("slider_filter_2").getNode(), "slider_1");
            webix.html.removeCss( $$("image_button_filter_1").getNode(), "image_button_filter");
            webix.html.removeCss( $$("image_button_filter_2").getNode(), "image_button_filter");
            webix.html.removeCss( $$("image_button_filter_3").getNode(), "image_button_filter");
            webix.html.removeCss( $$("manual_volume_fuel_1").getNode(), "full_window_text");
            webix.html.removeCss( $$("step_liters_1").getNode(), "full_window_text");
            webix.html.removeCss( $$("initial_volume_fuel_1").getNode(), "full_window_text");
            webix.html.removeCss( $$("counts_step").getNode(), "full_window_text");
            webix.html.removeCss( $$("manual_volume_fuel_2").getNode(), "full_window_text");
            webix.html.removeCss( $$("step_liters_2").getNode(), "full_window_text");
            webix.html.removeCss( $$("initial_volume_fuel_2").getNode(), "full_window_text");
            webix.html.removeCss( $$("fuel_filling").getNode(), "rows_right_menu_calibration_2");
            webix.html.removeCss( $$("fuel_filling_2").getNode(), "rows_right_menu_calibration_2");
            webix.html.removeCss( $$("manual_volume_fuel_fuel_filling_1").getNode(), "full_window_text");
            webix.html.removeCss( $$("manual_volume_fuel_fuel_filling_2").getNode(), "full_window_text");
            webix.html.removeCss( $$("step_liters_fuel_filling_2").getNode(), "full_window_text");
            webix.html.removeCss( $$("counts_step_fuel_filling").getNode(), "full_window_text");
            webix.html.removeCss( $$("step_liters_fuel_filling_1").getNode(), "full_window_text");










            if (color == "white") {
                webix.html.addCss( $$("dark").getNode(), "style_body_dark");
                webix.html.addCss( $$("style_left_cols").getNode(), "style_left_cols_dark");
                webix.html.addCss( $$("style_left_cols_2").getNode(), "style_left_cols_dark");
                webix.html.addCss( $$("style_general_rows_1").getNode(), "style_general_rows_dark");
                webix.html.addCss( $$("left_menu_button_1").getNode(), "left_menu_button_dark");
                webix.html.addCss( $$("left_menu_button_2").getNode(), "left_menu_button_dark");
                webix.html.addCss( $$("left_menu_button_3").getNode(), "left_menu_button_dark");
                webix.html.addCss( $$("general").getNode(), "button_central_menu_dark");
                webix.html.addCss( $$("calibration").getNode(), "button_central_menu_dark");
                webix.html.addCss( $$("filtering").getNode(), "button_central_menu_dark");
                webix.html.addCss( $$("button_reference").getNode(), "left_menu_button_reference_dark");
                webix.html.addCss( $$("button_back").getNode(), "left_menu_button_reference_dark");
                webix.html.addCss( $$("window_type_1").getNode(), "window_type_1_dark");
                webix.html.addCss( $$("window_type_2_1").getNode(), "window_type_2_dark");
                webix.html.addCss( $$("window_type_2_2").getNode(), "window_type_2_dark");
                webix.html.addCss( $$("window_type_2_3").getNode(), "window_type_2_dark");
                webix.html.addCss( $$("window_type_2_4").getNode(), "window_type_2_dark");
                webix.html.addCss( $$("window_type_2_5").getNode(), "window_type_2_dark");
                webix.html.addCss( $$("window_type_2_6").getNode(), "window_type_2_dark");
                webix.html.addCss( $$("right_menu_status").getNode(), "right_menu_status_dark");
                webix.html.addCss( $$("right_menu_setup").getNode(), "right_menu_status_dark");
                webix.html.addCss( $$("rows_right_1").getNode(), "rows_right_dark");
                webix.html.addCss( $$("rows_right_2").getNode(), "rows_right_dark");
                webix.html.addCss( $$("rows_right_3").getNode(), "rows_right_dark");
                webix.html.addCss( $$("rows_level_right_menu_info_1").getNode(), "rows_level_right_menu_info_dark");
                webix.html.addCss( $$("rows_level_right_menu_info_2").getNode(), "rows_level_right_menu_info_dark");
                webix.html.addCss( $$("rows_level_right_menu_info_3").getNode(), "rows_level_right_menu_info_dark");
                webix.html.addCss( $$("rows_level_right_menu_info_4").getNode(), "rows_level_right_menu_info_dark");
                webix.html.addCss( $$("button_right_menu_top_1").getNode(), "button_right_menu_top_1_dark");
                webix.html.addCss( $$("button_right_menu_top_2").getNode(), "button_right_menu_top_1_dark");
                webix.html.addCss( $$("auto_calibration_set_1").getNode(), "full_window_text_dark");
                webix.html.addCss( $$("auto_calibration_set_2").getNode(), "full_window_text_dark");
                webix.html.addCss( $$("auto_calibration_set_3").getNode(), "full_window_text_dark");
                webix.html.addCss( $$("auto_calibration_set_4").getNode(), "full_window_text_dark");
                webix.html.addCss( $$("right_menu_status_text").getNode(), "right_menu_status_text_dark");
                webix.html.addCss( $$("central_cols_button").getNode(), "central_cols_button_dark");
                webix.html.addCss( $$("right_menu_filter").getNode(), "right_menu_status_dark");
                webix.html.addCss( $$("button_type_calibration_1").getNode(), "button_type_calibration_1_dark");
                webix.html.addCss( $$("button_type_calibration_2").getNode(), "button_type_calibration_2_dark");
                webix.html.addCss( $$("right_menu_calibration_setup").getNode(), "rows_right_menu_calibration_2_dark");
                webix.html.addCss( $$("right_menu_calibration_drain_2").getNode(), "rows_right_menu_calibration_2_dark");
                webix.html.addCss( $$("button_add_step_1").getNode(), "set_step_drain_button_2_dark");
                webix.html.addCss( $$("button_add_step_2").getNode(), "set_step_drain_button_2_dark");
                webix.html.addCss( $$("button_add_step_3").getNode(), "set_step_drain_button_2_dark");
                webix.html.addCss( $$("button_add_step_4").getNode(), "set_step_drain_button_2_dark");
                webix.html.addCss( $$("filter_open_windows").getNode(), "full_window_text_dark");
                webix.html.addCss( $$("degree_of_filtration_2").getNode(), "filter_rows_dark");
                webix.html.addCss( $$("text_color_filter_1").getNode(), "text_color_filter_dark");
                webix.html.addCss( $$("text_color_filter_2").getNode(), "text_color_filter_dark");
                webix.html.addCss( $$("text_color_filter_3").getNode(), "text_color_filter_dark");
                webix.html.addCss( $$("text_color_filter_1_0").getNode(), "text_color_filter_dark");
                webix.html.addCss( $$("text_color_filter_1_1").getNode(), "text_color_filter_dark");
                webix.html.addCss( $$("window_text_time").getNode(), "full_window_text_dark");
                webix.html.addCss( $$("window_text_mediana").getNode(), "full_window_text_dark");
                webix.html.addCss( $$("slider_filter_1").getNode(), "slider_1_dark");
                webix.html.addCss( $$("slider_filter_2").getNode(), "slider_1_dark");
                webix.html.addCss( $$("image_button_filter_1").getNode(), "image_button_filter_dark");
                webix.html.addCss( $$("image_button_filter_2").getNode(), "image_button_filter_dark");
                webix.html.addCss( $$("image_button_filter_3").getNode(), "image_button_filter_dark");
                webix.html.addCss( $$("manual_volume_fuel_1").getNode(), "full_window_text_dark");
                webix.html.addCss( $$("step_liters_1").getNode(), "full_window_text_dark");
                webix.html.addCss( $$("initial_volume_fuel_1").getNode(), "full_window_text_dark");
                webix.html.addCss( $$("counts_step").getNode(), "full_window_text_dark");
                webix.html.addCss( $$("manual_volume_fuel_2").getNode(), "full_window_text_dark");
                webix.html.addCss( $$("step_liters_2").getNode(), "full_window_text_dark");
                webix.html.addCss( $$("initial_volume_fuel_2").getNode(), "full_window_text_dark");
                webix.html.addCss( $$("fuel_filling").getNode(), "rows_right_menu_calibration_2_dark");
                webix.html.addCss( $$("fuel_filling_2").getNode(), "rows_right_menu_calibration_2_dark");
                webix.html.addCss( $$("manual_volume_fuel_fuel_filling_1").getNode(), "full_window_text_dark");
                webix.html.addCss( $$("manual_volume_fuel_fuel_filling_2").getNode(), "full_window_text_dark");
                webix.html.addCss( $$("step_liters_fuel_filling_2").getNode(), "full_window_text_dark");
                webix.html.addCss( $$("counts_step_fuel_filling").getNode(), "full_window_text_dark");
                webix.html.addCss( $$("step_liters_fuel_filling_1").getNode(), "full_window_text_dark");










            }
            if (color == "black") {
                webix.html.addCss( $$("dark").getNode(), "style_body");
                webix.html.addCss( $$("style_left_cols").getNode(), "style_left_cols");
                webix.html.addCss( $$("style_left_cols_2").getNode(), "style_left_cols");
                webix.html.addCss( $$("style_general_rows_1").getNode(), "style_general_rows");
                webix.html.addCss( $$("left_menu_button_1").getNode(), "left_menu_button");
                webix.html.addCss( $$("left_menu_button_2").getNode(), "left_menu_button");
                webix.html.addCss( $$("left_menu_button_3").getNode(), "left_menu_button");
                webix.html.addCss( $$("general").getNode(), "button_central_menu");
                webix.html.addCss( $$("calibration").getNode(), "button_central_menu");
                webix.html.addCss( $$("filtering").getNode(), "button_central_menu");
                webix.html.addCss( $$("button_reference").getNode(), "left_menu_button_reference");
                webix.html.addCss( $$("button_back").getNode(), "left_menu_button_reference");
                webix.html.addCss( $$("window_type_1").getNode(), "window_type_1");
                webix.html.addCss( $$("window_type_2_1").getNode(), "window_type_2");
                webix.html.addCss( $$("window_type_2_2").getNode(), "window_type_2");
                webix.html.addCss( $$("window_type_2_3").getNode(), "window_type_2");
                webix.html.addCss( $$("window_type_2_4").getNode(), "window_type_2");
                webix.html.addCss( $$("window_type_2_5").getNode(), "window_type_2");
                webix.html.addCss( $$("window_type_2_6").getNode(), "window_type_2");
                webix.html.addCss( $$("right_menu_status").getNode(), "right_menu_status");
                webix.html.addCss( $$("right_menu_setup").getNode(), "right_menu_status");
                webix.html.addCss( $$("rows_right_1").getNode(), "rows_right");
                webix.html.addCss( $$("rows_right_2").getNode(), "rows_right");
                webix.html.addCss( $$("rows_right_3").getNode(), "rows_right");
                webix.html.addCss( $$("rows_level_right_menu_info_1").getNode(), "rows_level_right_menu_info");
                webix.html.addCss( $$("rows_level_right_menu_info_2").getNode(), "rows_level_right_menu_info");
                webix.html.addCss( $$("rows_level_right_menu_info_3").getNode(), "rows_level_right_menu_info");
                webix.html.addCss( $$("rows_level_right_menu_info_4").getNode(), "rows_level_right_menu_info");
                webix.html.addCss( $$("button_right_menu_top_1").getNode(), "button_right_menu_top_1");
                webix.html.addCss( $$("button_right_menu_top_2").getNode(), "button_right_menu_top_1");
                webix.html.addCss( $$("auto_calibration_set_1").getNode(), "full_window_text");
                webix.html.addCss( $$("auto_calibration_set_2").getNode(), "full_window_text");
                webix.html.addCss( $$("auto_calibration_set_3").getNode(), "full_window_text");
                webix.html.addCss( $$("auto_calibration_set_4").getNode(), "full_window_text");
                webix.html.addCss( $$("right_menu_status_text").getNode(), "right_menu_status_text");
                webix.html.addCss( $$("central_cols_button").getNode(), "central_cols_button");
                webix.html.addCss( $$("right_menu_filter").getNode(), "right_menu_status");
                webix.html.addCss( $$("button_type_calibration_1").getNode(), "button_type_calibration_1");
                webix.html.addCss( $$("button_type_calibration_2").getNode(), "button_type_calibration_2");
                webix.html.addCss( $$("right_menu_calibration_setup").getNode(), "rows_right_menu_calibration_2");
                webix.html.addCss( $$("right_menu_calibration_drain_2").getNode(), "rows_right_menu_calibration_2");
                webix.html.addCss( $$("button_add_step_1").getNode(), "set_step_drain_button_2");
                webix.html.addCss( $$("button_add_step_2").getNode(), "set_step_drain_button_2");
                webix.html.addCss( $$("button_add_step_3").getNode(), "set_step_drain_button_2");
                webix.html.addCss( $$("button_add_step_4").getNode(), "set_step_drain_button_2");
                webix.html.addCss( $$("filter_open_windows").getNode(), "full_window_text");
                webix.html.addCss( $$("degree_of_filtration_2").getNode(), "filter_rows");
                webix.html.addCss( $$("text_color_filter_1").getNode(), "text_color_filter");
                webix.html.addCss( $$("text_color_filter_2").getNode(), "text_color_filter");
                webix.html.addCss( $$("text_color_filter_3").getNode(), "text_color_filter");
                webix.html.addCss( $$("text_color_filter_1_0").getNode(), "text_color_filter");
                webix.html.addCss( $$("text_color_filter_1_1").getNode(), "text_color_filter");
                webix.html.addCss( $$("window_text_time").getNode(), "full_window_text");
                webix.html.addCss( $$("window_text_mediana").getNode(), "full_window_text");
                webix.html.addCss( $$("slider_filter_1").getNode(), "slider_1");
                webix.html.addCss( $$("slider_filter_2").getNode(), "slider_1");
                webix.html.addCss( $$("image_button_filter_1").getNode(), "image_button_filter");
                webix.html.addCss( $$("image_button_filter_2").getNode(), "image_button_filter");
                webix.html.addCss( $$("image_button_filter_3").getNode(), "image_button_filter");
                webix.html.addCss( $$("manual_volume_fuel_1").getNode(), "full_window_text");
                webix.html.addCss( $$("step_liters_1").getNode(), "full_window_text");
                webix.html.addCss( $$("initial_volume_fuel_1").getNode(), "full_window_text");
                webix.html.addCss( $$("counts_step").getNode(), "full_window_text");
                webix.html.addCss( $$("manual_volume_fuel_2").getNode(), "full_window_text");
                webix.html.addCss( $$("step_liters_2").getNode(), "full_window_text");
                webix.html.addCss( $$("initial_volume_fuel_2").getNode(), "full_window_text");
                webix.html.addCss( $$("fuel_filling").getNode(), "rows_right_menu_calibration_2");
                webix.html.addCss( $$("fuel_filling_2").getNode(), "rows_right_menu_calibration_2");
                webix.html.addCss( $$("manual_volume_fuel_fuel_filling_1").getNode(), "full_window_text");
                webix.html.addCss( $$("manual_volume_fuel_fuel_filling_2").getNode(), "full_window_text");
                webix.html.addCss( $$("step_liters_fuel_filling_2").getNode(), "full_window_text");
                webix.html.addCss( $$("counts_step_fuel_filling").getNode(), "full_window_text");
                webix.html.addCss( $$("step_liters_fuel_filling_1").getNode(), "full_window_text");























            }

        }











         }
    }






