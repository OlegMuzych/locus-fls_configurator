import {JetView} from "webix-jet";

export default class Page9View extends JetView {
    config() {


            var left_menu={

                rows:[
                    {view: "button", type:"image", image:"../sources/models/image/model101.png", label:'</span>'+
                            '<span style="position: relative; top:60px; left:-55px; color: #000; font-weight: 100;">model101</span>', width: 200, height: 200, css:"left_menu_button"},
                    {view: "button", type:"image", image:"../sources/models/image/model201.png", width: 200, height: 200, label:'</span>'+
                            '<span style="position: relative; top:60px; left:-55px; color: #000; font-weight: 100;">model201</span>', css:"left_menu_button"},
                    {view: "button", type:"image", image:"../sources/models/image/model301_ble.png", width: 200, height: 210, label:'</span>'+
                            '<span style="position: relative; top:70px; left:-55px; color: #000; font-weight: 100;">model301 BLE</span>', css:"left_menu_button_3"},
                    {
                        height: 1,
                    },

                    {view: "button", type:"image", image:"../sources/models/image/back.png", width: 200, height: 120, id:"button_back", label:'</span>'+
                            '<span style="position: relative; top:40px; left: -35px; color: #000; font-weight: 100; font-size: 13px;">Назад</span>', css:"left_menu_button_reference", },
                    {
                        height: 1,
                    },

                    {view: "button", type:"image", image:"../sources/models/image/konfig_small.png", width: 200, height: 120, label:'</span>'+
                            '<span style="position: relative; top:40px; left: 5px; color: #000; font-weight: 100; font-size: 13px;">Настройки</span>'+'<span style="position: relative; top:55px; left: -68px; color: #000; font-weight: 100; font-size: 13px;"> приложения</span>', css:"left_menu_button_setup",},
                    {
                        height: 1,
                    },
                    {view: "button", type:"image",  image:"../sources/models/image/info_small.png", width: 200, height: 120, label:'</span>'+
                            '<span style="position: relative; top:40px; left: -36px; color: #000; font-weight: 100; font-size: 13px;">Справка</span>', css:"left_menu_button_reference_3", },
                ]
        };

            var central_menu_button={
                        paddingY: 0,
                        css:"central_cols_setup",
                        minWidth: 500,
                        maxWidth: 890,
                        rows:[
                            {
                                css:"central_cols_button",
                                cols:[
                                    {view:"button", label:"Основные настройки", maxWidth: 300, minWidth: 120, height: 100, css:"button_central_menu", id:"button_central_menu", value:"Save"},
                                    {view:"button", label:"Тарировка", maxWidth: 300, minWidth: 120, height: 100, css:"button_central_menu", id:"calibration", value:"Save"},
                                    {view:"button", label:"Фильтрация", maxWidth: 300, minWidth: 120, height: 100, css:"button_central_menu", id:"filtering", value:"Save"},
                                ]
                            },
                            {
                                height: 20,
                            },

                            //ОКНО ТАРИРОВКА-----------------------------------------//
                            //--------------------------------------------------------//
                            {
                                id:"central_menu_button_3",
                                cols:[
                                    {
                                        width: 20,
                                    },
                                    {
                                        rows:[
                                            {
                                                rows:[
                                                    {
                                                        view:"multitext",
                                                        inputWidth: 200,
                                                        value:"Susan Way, Dirk Gently, Clark Kent",
                                                        tooltip:function(obj){
                                                            return "Guests: " + $$(obj.id).getValueHere();
                                                        }
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                  ]
                               },
                            //--------------------------------------------------------//


                            //ОКНО ФИЛЬТРАЦИИ-----------------------------------------//
                            //--------------------------------------------------------//

                            {

                                id: "central_menu_button_2",
                                cols: [
                                    {
                                        width: 20,
                                    },
                                    {
                                        rows: [
                                            {
                                                height: 100,
                                                cols: [

                                                    {
                                                        view: "label",
                                                        label: "<p style='font-size: 18px; font-weight: 100; position: relative; top: -20px; left: 105px;'>Фильтрация</p>",
                                                        Width: 300,
                                                        height: 100,
                                                    },
                                                    {
                                                        width: 1,
                                                    },
                                                    {
                                                        view: "switch",
                                                        value: 1,
                                                        css: "filter_toggle",
                                                        id: "filtering_switch_top",
                                                        height: 200,
                                                    }
                                                ]
                                            },
                                            {
                                                height: 10,
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
                                                            {width: 35,},
                                                            {
                                                                view: "button",
                                                                type: "image",
                                                                image: "../sources/models/image/career equipment.png",
                                                                width: 240,
                                                                label: "Карьерная техника",
                                                                css: "image_button_filter"
                                                            },
                                                            {width: 35,},
                                                            {
                                                                view: "button",
                                                                type: "image",
                                                                image: "../sources/models/image/construction equipment.png",
                                                                width: 240,
                                                                height: 300,
                                                            },
                                                            {width: 35,},
                                                            {
                                                                view: "button",
                                                                type: "image",
                                                                image: "../sources/models/image/smooth road.png",
                                                                width: 240,
                                                                height: 300,
                                                            },
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                height: 20,
                                            },
                                            {
                                                id: "degree_of_filtration_2",
                                                css: "filters_rows",
                                                rows: [
                                                    {

                                                        cols: [
                                                            {
                                                                view: "label",
                                                                label: "<p style='font-size: 18px; font-weight: 100; position: relative;  left: 124px;'>Тип фильтрации</p>",
                                                                width: 300,
                                                                height: 100,
                                                            },
                                                            {
                                                                width: 70,
                                                            },
                                                            {
                                                                view: "text",
                                                                value: "Квадратичная",
                                                                width: 200,
                                                                height: 100,
                                                                inputAlign: "center",
                                                                inputHeight: 50,
                                                                css: "slider_text_window_1",
                                                                readonly: true,
                                                            },
                                                            {},
                                                            {
                                                                view: "toolbar",
                                                                css: "toolbar_button_filter_set",
                                                                elements: [{
                                                                    view: "button",
                                                                    width: 150,
                                                                    css: "button_filter_set",
                                                                    label: 'Выбрать',
                                                                    popup: "my_pop"
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
                                                id: "degree_of_filtration_3",
                                                width: 846,
                                                css: "filters_rows",
                                                rows: [
                                                    {
                                                        cols: [
                                                            {
                                                                view: "label",
                                                                label: "<p style='font-size: 18px; font-weight: 100; position: relative; left: 30px;'>Время усреднения (0...21) с</p>",
                                                                width: 300,
                                                                height: 100,
                                                            },
                                                            {
                                                                width: 10,
                                                            },
                                                            {
                                                                view: "slider",
                                                                value: "0",
                                                                name: "s1",
                                                                width: 300,
                                                                min: 0,
                                                                max: 21,
                                                                css: "slider_1",
                                                                id: "slider_1",
                                                                title: webix.template("#value#")
                                                            },
                                                            {
                                                                view: "text",
                                                                value: "0",
                                                                name: "s1",
                                                                width: 50,
                                                                height: 100,
                                                                inputAlign: "center",
                                                                inputHeight: 50,
                                                                css: "slider_text_window_1",
                                                                id: "window_slide_1",
                                                                readonly: true,
                                                            },
                                                            {
                                                                width: 30,
                                                            },
                                                            {
                                                                view: "button",
                                                                type: "label",
                                                                label: "Применить",
                                                                width: 150,
                                                                height: 12,
                                                                id: "button_slider_gen_value_1",
                                                                css: "button_slider_gen_value"
                                                            }


                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                id: "degree_of_filtration_4",
                                                css: "filters_rows",
                                                height: 120,
                                                rows: [
                                                    {
                                                        cols: [
                                                            {
                                                                view: "label",
                                                                label: "<p style='font-size: 18px; font-weight: 100; position: relative; left: 78px;'>Длина медианы (0...7) </p>",
                                                                width: 300,
                                                                height: 100,
                                                            },
                                                            {
                                                                width: 10,
                                                            },
                                                            {
                                                                view: "slider",
                                                                value: "0",
                                                                name: "s2",
                                                                width: 300,
                                                                height: 10,
                                                                min: 0,
                                                                max: 7,
                                                                css: "slider_2",
                                                                title: webix.template("#value#")
                                                            },
                                                            {
                                                                view: "text",
                                                                value: "0",
                                                                name: "s1",
                                                                width: 50,
                                                                height: 100,
                                                                inputAlign: "center",
                                                                inputHeight: 50,
                                                                css: "slider_text_window_1",
                                                                readonly: true,
                                                            },
                                                            {
                                                                width: 30,
                                                            },
                                                            {
                                                                view: "button",
                                                                type: "label",
                                                                label: "Применить",
                                                                width: 150,
                                                                height: 20,
                                                                id: "button_slider_gen_value_2",
                                                                css: "button_slider_gen_value"
                                                            },

                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]

                            },

                            //------------------------------------------------------------------//


                            //ОКНО ОСНОВНЫЕ НАСТРОЙКИ-----------------------------------------//
                            //---------------------------------------------------------------//
                            {

                                id:"central_menu_button",
                                cols:[
                                    {
                                        width: 20,
                                    },
                                    {
                                        rows:[
                                            {
                                                css:"rows_level_min_max",
                                                height: 100,

                                                rows:[
                                                    {view:"text", width: 850, height: 100, label:'<p style="text-align: center; position: relative; top: -23px; left: 54px; font-size: 18px; font-weight: 100; ">Серийный номер</p>', labelWidth:400, css:"window_0",  inputAlign: "left", readonly:true},
                                                ]
                                            },
                                            {
                                               height: 20,
                                            },
                                            {
                                                css:"rows_level_min_max",
                                                height: 100,
                                                rows:[
                                                    {view:"text", width: 850, height: 100, label:'<p style="text-align: center; position: relative; top: -23px; left: 64px; font-size: 18px; font-weight: 100; ">Сетевой адрес</p>', labelWidth:400, css:"window_0",  inputAlign: "left"},
                                                ]
                                            },
                                            {
                                                height: 20,
                                            },
                                            {
                                                css:"rows_level_min_max",
                                                height: 190,
                                                // height: 260,
                                                rows:[
                                                    {view:"text", width: 850, height: 100, label:'<p style="text-align: center; position: relative; top: -23px; left: 30px; font-size: 18px; font-weight: 100; ">Минимальный уровень</p>', labelWidth:400, css:"window_2",  inputAlign: "left"},
                                                    {view:"text", width: 850, height: 100, label:'<p style="text-align: center; position: relative; top: -23px; left: 30px; font-size: 18px; font-weight: 100; ">Максимальный уровень</p>', labelWidth:400, css:"window_2",  inputAlign: "left"},
                                                    // {
                                                    //     cols:[
                                                    //         {
                                                    //             width: 50,
                                                    //         },
                                                    //         {view:"label", label:"<p style='font-size: 18px; font-weight: 100; position: relative; top: -20px; left: 176px;'>Фильтрация</p>", width: 300, },
                                                    //         {
                                                    //             width: 50,
                                                    //         },
                                                    //         {view: "switch", value: 1,css:"filter_toggle", id:"filter", height: 60, width: 500, },
                                                    //
                                                    //     ]
                                                    // }

                                                ]
                                            },
                                            {
                                               height: 20,
                                            },
                                            {
                                                css:"rows_level_min_max",
                                                height: 100,
                                                rows:[
                                                    {view:"text", width: 850, height: 100, label:'<p style="text-align: center; position: relative; top: -23px; left: 30px; font-size: 18px; font-weight: 100; ">Скорость подключения</p>', labelWidth:400, css:"window_2",  inputAlign: "left"},
                                                ]
                                            },
                                            {
                                                height: 20,
                                            },
                                            {
                                                css:"rows_level_min_max",
                                                height: 100,
                                                rows:[
                                                    {view:"text", width: 850, height: 100, label:'<p style="text-align: center; position: relative; top: -23px; left: -10px; font-size: 18px; font-weight: 100; ">Автоматическая выдача данных</p>', labelWidth:400, css:"window_2",  inputAlign: "left"},
                                                ]
                                            },
                                            {
                                                height: 20,
                                            },
                                            {
                                                css:"rows_level_min_max",
                                                height: 100,
                                                rows:[
                                                    {
                                                        height: 100,
                                                        cols:[
                                                            {
                                                              width: 50,
                                                            },
                                                            {view:"label", label:"<p style='font-size: 18px; font-weight: 100; position: relative; top: -20px; left: 30px;'>Температурная компенсация</p>", width: 300, height:100,},
                                                            {
                                                                width: 50,
                                                            },
                                                            {view: "switch", value: 1, css:"filter_toggle", id:"temp_compensation", height: 300,}
                                                        ]
                                                    }
                                                ]
                                            }
                                         ]
                                    }
                                ]
                            }
                            //---------------------------------------------------------------//
                        ]

            };



            //Правое меню-----------------------------------------//
           //----------------------------------------------------//
            var right_menu={
                maxWidth: 500,
                css:"right_menu",
                rows:[
                    {
                        //Кнопки сверху в правом менб-----------------------//
                        paddingY: 20,
                        cols:[
                            {view:"button", width:250, height:70, label:"Сервис", css:"button_right_menu_top_1",},
                            {
                                width: 10,
                            },
                            {view:"button", width:250, height:70, label:"Пароль",css:"button_right_menu_top_2",}
                        ]
                    },
                    //-----------------------------------------------------//
                    {
                        height: 20,
                    },
                    {


                        cols:[
                            {
                                maxWidth:550,
                                minWidth: 500,
                                css:"rows_level_right_menu",
                                height: 190,
                                rows:[
                                    {
                                        height: 20,
                                    },
                                    {

                                        cols:[
                                            {width: 70,},
                                            {view:"button", width: 30, height: 30, css:"rows_level_right_menu_switch",},
                                            {view:"button", width: 30, height: 30, css:"rows_level_right_menu_switch_define", id:"button_define_1",},
                                            {width: 20,},
                                            {view:"label", label:"Датчик подключен", height: 30, css:"rows_level_right_menu_info",}
                                        ]
                                    },
                                    {
                                        height: 10,
                                    },
                                    {
                                        cols:[
                                            {width: 70,},
                                            {view:"button", width: 30, height: 30, css:"rows_level_right_menu_switch",},
                                            {view:"button", width: 30, height: 30, css:"rows_level_right_menu_switch_define", id:"button_define_2",},
                                            {width: 20,},
                                            {view:"label", label:"Топливо стабильно", height: 30, css:"rows_level_right_menu_info",}
                                        ]
                                    },
                                    {
                                        height: 10,
                                    },
                                    {
                                        cols:[
                                            {width: 70,},
                                            {view:"button", width: 30, height: 30, css:"rows_level_right_menu_switch",},
                                            {view:"button", width: 30, height: 30, css:"rows_level_right_menu_switch_define", id:"button_define_3",},
                                            {width: 20,},
                                            {view:"label", label:"Калибровка не требуется", height: 30, css:"rows_level_right_menu_info",}
                                        ]
                                    },
                                    {
                                        height: 10,
                                    },
                                    {
                                        cols:[
                                            {width: 70,},
                                            {view:"button", width: 30, height: 30, css:"rows_level_right_menu_switch", id:"button_define", },
                                            {view:"button", width: 30, height: 30, css:"rows_level_right_menu_switch_define", id:"button_define_4",},
                                            {width: 20,},
                                            {view:"label", label:"Термокомпенсация", height: 30, width:200, css:"rows_level_right_menu_info",},
                                            {
                                                width:50,
                                            },
                                            {view:"button", type:"image", image:"../sources/models/image/temperature.png", width:30, height:30, css:"thermometer_image",},
                                            {view:"text", width: 60, height:30, css:"window_temp", id:"window_temp", readonly:true, value:"25°"},
                                            {
                                                width: 0,
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        height: 20,
                    },





                    //Меню справа Калибровка датчика в "Тарировка" #1-------------------------------//
                    {
                        id:"central_menu_and_right_menu_calibration_button",
                        // css:"rows_right_menu_calibration_1",
                        width: 550,
                        cols: [
                            {

                            },
                            {view: "button", width: 279, height: 70, label: "Слив", css: "button_type_calibration_1", id:"button_type_calibration_1"},
                            {view: "button", width: 279, height: 70, label: "Залив", css: "button_type_calibration_2", id:"button_type_calibration_2"},
                            {

                            }
                        ]
                    },
                    {

                        id:"central_menu_and_right_menu_calibration",
                        css:"rows_right_menu_calibration_2",
                        height: 650,
                        width: 550,
                        rows:[
                            {
                                rows:[

                                ]
                            },
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
                                    {view:"text", css:"drain_button_widow_1", width: 200,},
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
                                    {view:"text", css:"drain_button_widow_1", width: 200,},
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
                                    {view:"text", css:"drain_button_widow_1", width: 200, },
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

                    },

                    //-------------------------------------------------------------//



                    //Меню справа Калибровка датчика в "Тарировка" #2-------------------------------//
                    {
                        id:"central_menu_and_right_menu_calibration_2",
                        css:"rows_right_menu_calibration_2",
                        height: 650,
                        width: 550,
                        rows:[
                            {
                                rows:[

                                ]
                            },
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
                                    {view:"text", width: 200, css:"drain_button_widow_1"},
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
                                    {view:"text", width: 200, css:"drain_button_widow_1"},
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
                                    {view:"text", width: 200, css:"drain_button_widow_1"},
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
                                    {view:"text", width: 200, css:"drain_button_widow_1", readonly:true},
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
                                    {view: "button", label:"Добавить шаг", width: 480, height: 50, css:"set_step_drain_button_2"},
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
                                    {view: "button", label:"Удалить шаг", width: 480, height: 50, css:"set_step_drain_button_2"},
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

                    },

                    //----------------------------------------------------------------------------//




                    //Меню справа Калибровка датчика в "ФИЛЬТРАЦИЯ"----------------------------//
                    {
                        id:"central_menu_and_right_menu_filter",
                        cols:[
                            {
                                css:"rows_level_right_menu",
                                height: 650,
                                width: 550,
                                rows:[
                                    {
                                        cols:[
                                            {
                                                width: 50,
                                            },
                                            {width: 300, height:100,},
                                            {
                                                width: 50,
                                            },
                                            {height: 100,},
                                        ],

                                    },
                                    {
                                        rows:[
                                            {
                                                cols:[
                                                    {
                                                        width: 40,
                                                    },
                                                    {width: 460, height: 50,}
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
                                                                rows:[
                                                                    {view:"text", width: 200, height: 50, css:"full_window_text",readonly:true},
                                                                    {view:"button", type:"label", label:"Полный", width: 200, height: 50, css:"auto_calibration", id:"auto_calibration_1", disabled:true},
                                                                    {
                                                                        height: 130,
                                                                    },
                                                                    {view:"text", width: 200, height: 50,  css:"empty_window_text",readonly:true},
                                                                    {view:"button", type:"label", label:"Пустой", width: 200, height: 50, css:"auto_calibration", id:"auto_calibration_2", disabled:true},
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
                                                    {width: 460, height: 50,}
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]

                    },
                    //--------------------------------------------------//


                    {
                        //Калибровка датчика "Главные настройки"----------------------------//
                        id:"central_menu_and_right_menu",
                        cols:[
                            {
                                css:"rows_level_right_menu",
                                height: 650,
                                width: 550,
                                rows:[
                                    {
                                        cols:[
                                            {
                                                width: 50,
                                            },
                                            {view:"label", label:"<p style='font-size: 18px; font-weight: 100; position: relative; top: -20px; left: 30px;'>Колибровка с топливом</p>", width: 300, height:100,},
                                            {
                                                width: 50,
                                            },
                                            {view: "switch", value: 1,css:"filter_toggle", id:"calibration_fuel", height: 100,},
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
                                                                rows:[
                                                                    {view:"text", width: 200, height: 50, css:"full_window_text"},
                                                                    {view:"button", type:"label", label:"Полный", width: 200, height: 50, css:"auto_calibration", id:"auto_calibration_1"},
                                                                    {
                                                                        height: 130,
                                                                    },
                                                                    {view:"text", width: 200, height: 50,  css:"empty_window_text"},
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
                            }
                        ]
                    }
                    //--------------------------------------------------//

                ]
            };

        webix.ui({
            view:"popup",
            id:"my_pop",
            width:200,
            height: 200,
            body:{
                view:"list",
                data:[
                    {id:"1",  location: "Квадратичная", name:"1"},
                    {id:"2",  location:"Усреднение", name:"2"},
                    {id:"3",  location:"хз", name:"3"}
                ],
                template:"#name# - #location#",
                autoheight:true,
                select:true
            }
        });




        return{
            css:"background_2page",
            rows:[
                {
                    paddingY: 0,
                    cols:[
                        left_menu,
                        {
                          width: 20,
                        },
                        central_menu_button,
                        {
                            width: 30,
                        },
                        right_menu,
                    ]
                },






            ]
        }
    }
    init(view){

    //     $$("button_slider_window_1").attachEvent("onItemClick", (id, e)=>{
    //     $$('slider_1').getValues()
    //     $$('window_slide_1').setValues(data)
    // });

        $$("button_back").attachEvent("onItemClick", (id, e)=>{
            this.show("1page");
        });

        $$("calibration").attachEvent("onItemClick", (id, e)=>{
            $$("central_menu_button").hide()
        });

        $$("button_central_menu").focus()



        // Кнопка Слив/ во вкладке "Фильтрация"----------------------------------------//
        $$('central_menu_and_right_menu_calibration_2').hide()
        $$("button_type_calibration_1").attachEvent("onItemClick", (id, e)=>{
            $$("central_menu_and_right_menu_calibration").show()

        });

                               // Кнопка продолжить в Слив/ во вкладке "Фильтрация"----------------------------------------//
                                $$("central_menu_and_right_menu_calibration_next_window_button").attachEvent("onItemClick",(id, e)=>{
                                    $$("central_menu_and_right_menu_calibration").hide()
                                    $$('central_menu_and_right_menu_calibration_2').show()
                                    $$("button_type_calibration_2").disable()
                                    $$("button_type_calibration_1").disable()
                                    $$("button_central_menu").disable()
                                    $$("filtering").disable()
                                    $$("calibration").focus()

                                });

                               // Кнопка завершить в Слив/ во вкладке "Фильтрация"----------------------------------------//
                                $$("closed_calibration_button_window_2").attachEvent("onItemClick", (id, e)=>{
                                    $$('central_menu_and_right_menu_calibration_2').hide()
                                   $$("central_menu_and_right_menu_calibration").show()
                                    $$("button_type_calibration_2").enable()
                                    $$("button_type_calibration_1").enable()
                                    $$("button_central_menu").enable()
                                    $$("filtering").enable()
                                    $$("calibration").focus()
                                    $$("button_type_calibration_1").focus()
                                });

        //-------------------------------------------------------------------------------------------//




        // Кнопка /Залив во вкладке "Фильтрация"---------------------------------------------------//
        $$("button_type_calibration_2").attachEvent("onItemClick", (id, e)=>{
            $$("central_menu_and_right_menu_calibration").hide()
            $$('central_menu_and_right_menu_calibration_2').hide()
            // $$("calibration").focus()


        });

        //---------------------------------------------------------------- --------------------//


        // Кнопка отключение фильтрации во вкладке "Фильтрация"----------------------------------------//
        $$("filtering_switch_top").attachEvent("onChange", function(newValue, oldValue, config){
            $$("degree_of_filtration").disable()
            $$("degree_of_filtration_2").disable()
            $$("degree_of_filtration_3").disable()
            $$("degree_of_filtration_4").disable()
        });
        //-------------------------------------------------------------------------------------------//




        //Кнопка "Тарировка" ----------------------------------------//
        $$("central_menu_and_right_menu_calibration_button").show()
        $$("central_menu_button_3").hide()
        $$("calibration").attachEvent("onItemClick", (id, e)=>{
            $$("central_menu_button_3").show()
            $$("central_menu_button").hide()
            $$("central_menu_button_2").hide()
            $$("central_menu_and_right_menu").hide()
            $$("central_menu_and_right_menu_filter").hide()
            $$("central_menu_and_right_menu_calibration").show()
            $$("central_menu_and_right_menu_calibration_button").show()
            $$('central_menu_and_right_menu_calibration_2').hide()
            $$("calibration").focus()
            $$("button_type_calibration_1").focus()
        });


        //--------------------------------------------------------//



        //Кнопка "Фильтрация" ----------------------------------------//
        $$("central_menu_and_right_menu_calibration_button").hide()
        $$("central_menu_and_right_menu_calibration").hide()
        $$("central_menu_and_right_menu_filter").hide()
        $$("central_menu_button_2").hide()
        $$("filtering").attachEvent("onItemClick", (id, e)=>{
            $$("central_menu_button_2").show()
            $$("central_menu_button").hide()
            $$("central_menu_and_right_menu").hide()
            $$("central_menu_and_right_menu_filter").show()
            $$("central_menu_button_3").hide()
            $$("central_menu_and_right_menu_calibration").hide()
            $$("central_menu_and_right_menu_calibration_button").hide()
            $$('central_menu_and_right_menu_calibration_2').hide()
            $$("filtering").focus()
        });
        //--------------------------------------------------------//



        //Кнопка "Основные настройки" ------------------------------//
        $$("central_menu_and_right_menu_calibration_button").hide()
        $$("central_menu_and_right_menu_calibration").hide()
        $$("button_central_menu").attachEvent("onItemClick", (id, e)=>{
            $$("central_menu_button").show()
            $$("central_menu_button_2").hide()
            $$("central_menu_and_right_menu_filter").hide()
            $$("central_menu_and_right_menu").show()
            $$("central_menu_button_3").hide()
            $$("central_menu_and_right_menu_calibration").hide()
            $$("central_menu_and_right_menu_calibration_button").hide()
            $$('central_menu_and_right_menu_calibration_2').hide()
            $$("button_central_menu").focus()
        });
        //--------------------------------------------------------//





        // Смена цвета кнопки правого меню ------------------------------/

        $$("button_define_1").hide()
        $$("button_define_2").hide()
        $$("button_define_3").hide()
        $$("button_define_4").hide()


        $$("temp_compensation").attachEvent("onChange", function(newValue, oldValue, config){
            $$("button_define").hide(newValue)
            $$("button_define_4").show(config)

    });




        // Смена цвета кнопки правого меню ------------------------------/





        // Кнопка калибровки с топливом/без ----------------------------/
        $$("auto_calibration").disable()
        $$("calibration_fuel").attachEvent("onChange", function(newValue, oldValue, config){
            $$("auto_calibration").enable()
            $$("auto_calibration_1").disable()
            $$("auto_calibration_2").disable()
        });

        setInterval(function(){
            var value = Math.floor(Math.random()*10);
            $$("progress_bar").setValue(value);
            $$("progress_bar").setValue(10-value);
        }, 2000)






    }
}

// $$("button_define_2").hide()
// $$("temp_compensation").attachEvent("onChange", function(newValue, oldValue, config){
//     {
//         if  ("temp_compensation"  < 1) {
//             $$("button_define").hide()
//             $$("button_define_2").show()
//
//         }  else {
//             $$("button_define_2").hide()
//             $$("button_define").show()
//         }}
//
//
// });


// view: "text",
//     readonly:true, //Отключение фокуса компонента
//     id: "phone_number",
//     label: "+7",
//     css: "phone_number_12page",
//     width: 770,
//     height: 130,
//     inputAlign: "center",
//     pattern: {mask: "(###)###-##-##", allow: /[0-9]/g},
// validate: this.numberValidate,
// label:"25°"

// view:"bullet",
//     id:"b1",
//     value:0,
//     layout:"y",
//     barWidth: 140,
//     css:"fuel_10page",
//     flowTime: 1900,
//     tickSize: 0,
//     bands:[
//     { value:120, color:"#fff"},
//     { value:80, color:"#fff"},
//     { value:60, color:"#fff"},
// ],
//     scale:{
//     step:50,
//         template:"#value#%"
// },
// height: 400,
//     stroke: 220,
//     width: 400,
//     color: warningLevels,