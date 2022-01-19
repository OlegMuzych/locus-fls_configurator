
// webix.ui.fullScreen();
import {JetView} from "webix-jet";

export default class Page9View extends JetView {
    config() {


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
                        image: "../sources/models/image/model_101.svg",
                        width: 180,
                        height: 200,
                        css: "left_menu_button",
                        id: "left_menu_button_1"
                    },
                    {
                        view: "button",
                        type: "image",
                        image: "../sources/models/image/model_201.svg",
                        width: 180,
                        height: 200,
                        css: "left_menu_button",
                        id: "left_menu_button_2"
                    },
                    {
                        view: "button",
                        type: "image",
                        image: "../sources/models/image/model_301_BLE.svg",
                        width: 180,
                        height: 200,
                        css: "left_menu_button",
                        id: "left_menu_button_3"
                    },
                    {
                        height: 120,
                    },

                    {
                        view: "button",
                        type: "image",
                        image: "../sources/models/image/Back.svg",
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
                        image: "../sources/models/image/info.svg",
                        width: 180,
                        height: 120,
                        id: "button_reference",
                        css: "left_menu_button_reference",
                    },
                ]
            }
        };






        var central_button = {
            rows: [
                {
                    height: 100,
                    view: "segmented",
                    id: 'tabbar',
                    multiview: true,
                    options: [
                        {value: 'Основные настройки', id: 'central_setup_rows',click:function(id,event){$$("right_menu_setup").show()} },
                        {value: 'Тарировка', id: 'calibration_setup_rows'},
                        {value: 'Фильтрация', id: 'page3'}
                    ],

                    on: {
                        onChange: function (nextId, prevId) {
                            webix.animate($$(prevId).$view, {type: "fade", duration: 250});
                        }
                    }
                },
                {
                    animate: {type: "show", delay: 200},
                    on: {
                        onViewChange: function (prevId, nextId) {
                            webix.html.addCss($$(nextId).$view, "animated fadeIn");


                            webix.delay(function () {
                                webix.html.removeCss(this.$view, "animated fadeIn");
                            }, $$(nextId), null, 200);

                        }
                    },


                    width: 900,
                    cells: [
                        {
                            id: "central_setup_rows",
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
                                  {height: 20,},
                               {
                                    view: "text",
                                    width: 850,
                                    height: 100,
                                    label: '<p style="text-align: center; position: relative; top: -20px; left: 64px; font-size: 18px; font-weight: 100; ">Сетевой адрес</p>',
                                    labelWidth: 400,
                                    css: "window_type_2",
                                    inputAlign: "center",
                                    id: "window_type_2_1"
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
                                 width: 900,
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
                            id: "calibration_setup_rows",
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
                        },
                        {
                            minWidth: 500,
                            maxWidth: 890,
                            id: "page3",
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
                                                    image: "../sources/models/image/filtr_Karier.svg",
                                                    width: 240,
                                                    label: "Карьерная техника",
                                                    css: "image_button_filter",
                                                    id:"image_button_filter_1"
                                                },
                                                {width: 35,},
                                                {
                                                    view: "button",
                                                    type: "image",
                                                    image: "../sources/models/image/filtr_Stroit.svg",
                                                    width: 240,
                                                    height: 300,
                                                    css: "image_button_filter",
                                                    id:"image_button_filter_2"
                                                },
                                                {width: 35,},
                                                {
                                                    view: "button",
                                                    type: "image",
                                                    image: "../sources/models/image/filtr_Rovn.svg",
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
                        {view:"button", type:"image", image:"../sources/models/image/temperature.png", width:30, height:30, css:"thermometer_image",},
                        {view:"text", width: 60, height:30, css:"window_temp", id:"window_temp", readonly:true, value:"25°"},

                    ]
                },
                {
                    height: 20,
                },


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



        return {

            view: "scrollview",
            scroll: "y",
            maxHeight: 1000,
            css: "style_body",
            id: "dark",
            body: {
                cols: [
                    {
                        rows: [
                            left_menu,
                        ]

                    },
                    {
                        id: "style_left_cols_2",
                        css: "style_left_cols",
                        width: 10,
                    },
                    {
                        id: "style_general_rows_1",
                        css: "style_general_rows",
                        rows: [
                            central_button,

                        ]
                    },
                    {

                    },
                    {
                        rows:[
                            right_menu_button,
                            {
                                height: 20,
                            },
                            right_menu_status,
                            {
                                height: 20,
                            },
                            right_menu_setup
                        ]
                    },
                    {

                    }
                ]
            }

        }



        }





    init(view){



        $$("right_menu_setup").hide()
        //
        // $$("central_setup_rows").attachEvent("onItemClick", function() {
        //
        //         $$("right_menu_setup").show()
        //
        //
        // });








    }



}

