webix.ui.fullScreen();
import {JetView} from "webix-jet";
//const SerialPort = eval(`require('serialport')`);
import findPort from "../services/lls/findPort";
// const findPort = require("../models/lls/findPort");

export default class Page9View extends JetView {
    config() {


        // Версия прошивки надпись
        var ver = {
            cols: [
                {
                    width: 10,
                },
                {view: "label", label: "Версия Программы v1.1.1", Width: 200, align: "left", css:"ver_soft", id:"ver_soft"}
            ]
        };

        // Логотип
        var logo = {
            view: "button",
            type: "image",
            image: "assets/images/Logo_1.svg",
            width: 500,
            height: 300,
            css: "logo_1",
            id:"logo_1",

        };


        // Статус подключения датчика
        var status_gage={
            rows:[
                {
                    cols:[
                        {
                            width: 170,
                        },
                        {view:"button", width: 30, height: 30, css:"rows_level_right_menu_switch", id:"button_define_define_1"},
                        {view:"button", width: 30, height: 30, css:"rows_level_right_menu_switch_define", id:"button_define_1",},
                        {width: 20,},
                        {view:"label", label:"Датчик подключен", height: 30, width: 300, css:"label_status_gage_windows_start", id:"label_status_gage_windows_start_1",},
                        {view:"label", label:"Датчик не подключен", height: 30, width: 300, css:"label_status_gage_windows_start", id:"label_status_gage_windows_start_2"},
                        {

                        }
                    ]
                }
            ]

        };




        // Кнопки меню
        var button_menu={
            rows:[
                {
                    cols: [
                        { view: "button", type: "image", image: "assets/images/master.svg", width: 450, height: 300, css: "button_1", id: "master_setup"},
                        {
                            width: 20,
                        },
                        { view: "button", type: "image", image: "assets/images/ingeneer.svg", width: 450, height: 300, css: "button_1", id: "engineering_setup"}
                    ]
                },
                {
                    height: 20,
                },
                {
                    cols:[
                        { view: "button", type: "image", image: "assets/images/info.svg",  width: 450, height: 300, css: "button_1", id: "reference"},
                        {
                            width: 20,
                        },
                        { view: "button", type: "image", image: "assets/images/konfig.svg",  align: "center", width: 450, height: 300, css: "button_1", id: "application_menu"},
                    ]
                },

            ]
        }

        var win = webix.ui({
            view:"window",
            position:"center",
            width: 500,
            height: 300,
            id:"window_show",
            modal:true,
            css:"window_show",
            head:{
                rows:[
                    {
                        cols:[
                            {template:"Настройки", type:"header", borderless:true,},
                            {view:"icon", icon:"wxi-close", tooltip:"Close window", click: function(){
                                    $$("window_show").hide()
                                }}
                        ]
                    },
                    {
                        height: 20,

                    },
                    {
                        width: 200,

                        rows:[

                            {
                                height: 100,
                                cols:[
                                    {

                                    },
                                    {view: "label", label:"<p style='font-size: 16px; position: relative; top: -10px;'>Выбор темы</p>", width: 130, id:"light_theme_label"},
                                    {view: "label", label:"<p style='font-size: 16px; position: relative; top: -10px; color: #fff;'>Выбор темы</p>", width: 130, id:"dark_theme_label"},
                                    {view: "switch", value: 0, id: "temp_compensation_22", width: 68,},
                                    {

                                    },

                                ]
                            },
                            {
                                height: 20,
                            },
                            {

                                cols:[
                                    {
                                        width: 150,
                                    },
                                    {view:"label", label:"<p>Выбор языка</p>", width: 130, id:"language_windows_modal", css:"language_windows_modal"},
                                    {width: 130, view:"richselect", value:1, id:"language", options:[{ "id":1, "value":"Русский"}, { "id":2, "value":"English"},
                                        ]

                                    },
                                    {

                                    }
                                ]
                            }


                        ]
                    },
                ]
            },

        });
        win.hide();



        var win_2 = webix.ui({
            view:"window",
            position:"center",
            width: 500,
            height: 300,
            id:"window_show_2",
            modal:true,
            css:"window_show",
            head:{
                rows:[
                    {
                        cols:[
                            {template:"Справка", type:"header", borderless:true,},
                            {view:"icon", icon:"wxi-close", tooltip:"Close window", click: function(){
                                    $$("window_show_2").hide()
                                }}
                        ]
                    },
                    {
                        height: 20,

                    },
                    {
                        cols: [
                            {

                            },
                            {

                                height: 200,
                                rows:[
                                    {

                                    },
                                    {view: "label", label:"<p style='font-size: 16px; position: relative; top: -10px; text-align: center;'>Торговая марка: 'Точка Мониторинга'</p>", width: 330, css:"language_windows_modal", id:"language_windows_modal_2"},
                                    {view: "label", label:"<p style='font-size: 16px; position: relative; top: -10px; text-align: center;'>Версия программного обеспечения 1.1.1</p>", width: 330, css:"language_windows_modal", id:"language_windows_modal_3"},
                                    {view: "label", label:"<p style='font-size: 16px; position: relative; top: -10px; text-align: center;'>Производитель: ООО 'Новотек'</p>", width: 330, css:"language_windows_modal", id:"language_windows_modal_4"},

                                    {

                                    },
                                ]
                            },
                            {

                            }
                        ]


                    }
                ]
            },

        });
        win_2.hide();


        return {
            view: "scrollview",
            scroll: "y",
            maxHeight: 1000,
            body: {

                css: "color_rows_star_pages",
                id: "color_rows_star_pages",
                rows: [
                    ver,
                    {
                        paddingY: -50,
                        cols: [
                            {},
                            logo,
                            {}
                        ]
                    },
                    {
                        cols: [
                            {},
                            status_gage,
                            {}
                        ]
                    },
                    {
                        height: 50,
                    },
                    {
                        cols: [
                            {},
                            button_menu,
                            {}
                        ]
                    }


                ]
            }
        }
    }


    init(view){

        let goEngineering = (code, e)=> {
            console.log(e);
            if (e.altKey && e.ctrlKey && e.code == "KeyT") {
                console.log("OPEN ENGINEERING MENU");
                webix.message("OPEN ENGINEERING MENU");
                this.app.show("/testSerialPort");
            }
        }
        $$("logo_1").attachEvent("onKeyPress", goEngineering);

        findPort.list().then(value => {console.log(value)});
        findPort.find();

        $$("master_setup").attachEvent("onItemClick", (id, e)=>{
            $$("color_rows_page22").define(color)
        });


        $$("engineering_setup").attachEvent("onItemClick", (id, e)=>{
            this.show("1page");
        });



        $$("button_define_define_1").hide()
        $$("label_status_gage_windows_start_1").hide()



        $$("application_menu").attachEvent("onItemClick", (id, e )=>{
            $$("window_show").show()
        });



        $$("window_show_2").hide()
        $$("reference").attachEvent("onItemClick", (id, e )=>{
            $$("window_show_2").show()
        });



        $$("dark_theme_label").hide()
        $$("temp_compensation_22").attachEvent("onItemClick", (id, e )=>{
            if ($$("temp_compensation_22").getValue()== 1) {
                $$("light_theme_label").hide()
                $$("dark_theme_label").show()
                $$("logo_1").define("image", "assets/images/Logo_2.svg")
                $$("master_setup").define("image", "assets/images/master_inverse.svg")
                $$("engineering_setup").define("image", "assets/images/ingeneer_inverse.svg")
                $$("reference").define("image", "assets/images/info_inverse.svg")
                $$("application_menu").define("image", "assets/images/konfig_inverse.svg")
                $$("logo_1").refresh()
                $$("master_setup").refresh()
                $$("engineering_setup").refresh()
                $$("reference").refresh()
                $$("application_menu").refresh()
                setColor("white","white");
            } else {

                $$("dark_theme_label").hide()
                $$("light_theme_label").show()
                $$("logo_1").define("image", "assets/images/Logo_1.svg")
                $$("master_setup").define("image", "assets/images/master.svg")
                $$("engineering_setup").define("image", "assets/images/ingeneer.svg")
                $$("reference").define("image", "assets/images/info.svg")
                $$("application_menu").define("image", "assets/images/konfig.svg")
                $$("logo_1").refresh()
                $$("master_setup").refresh()
                $$("engineering_setup").refresh()
                $$("reference").refresh()
                $$("application_menu").refresh()
                setColor("dark","black");

            }

        });

        function setColor(id, color)
        {
            webix.html.removeCss( $$("window_show").getNode(), "window_show");
            webix.html.removeCss( $$("window_show_2").getNode(), "window_show");
            webix.html.removeCss( $$("language_windows_modal").getNode(), "language_windows_modal");
            webix.html.removeCss( $$("language_windows_modal_2").getNode(), "language_windows_modal");
            webix.html.removeCss( $$("language_windows_modal_3").getNode(), "language_windows_modal");
            webix.html.removeCss( $$("language_windows_modal_4").getNode(), "language_windows_modal");
            webix.html.removeCss( $$("color_rows_star_pages").getNode(), "color_rows_star_pages");
            webix.html.removeCss( $$("logo_1").getNode(), "logo_1");
            webix.html.removeCss( $$("label_status_gage_windows_start_1").getNode(), "label_status_gage_windows_start");
            webix.html.removeCss( $$("label_status_gage_windows_start_2").getNode(), "label_status_gage_windows_start");
            webix.html.removeCss( $$("ver_soft").getNode(), "ver_soft");
            webix.html.removeCss( $$("master_setup").getNode(), "button_1");
            webix.html.removeCss( $$("engineering_setup").getNode(), "button_1");
            webix.html.removeCss( $$("reference").getNode(), "button_1");
            webix.html.removeCss( $$("application_menu").getNode(), "button_1");




            if (color == "white") {
                webix.html.addCss( $$("window_show").getNode(), "window_show_dark");
                webix.html.addCss( $$("window_show_2").getNode(), "window_show_dark");
                webix.html.addCss( $$("language_windows_modal").getNode(), "language_windows_modal_dark");
                webix.html.addCss( $$("language_windows_modal_2").getNode(), "language_windows_modal_dark");
                webix.html.addCss( $$("language_windows_modal_3").getNode(), "language_windows_modal_dark");
                webix.html.addCss( $$("language_windows_modal_4").getNode(), "language_windows_modal_dark");
                webix.html.addCss( $$("color_rows_star_pages").getNode(), "color_rows_star_pages_dark");
                webix.html.addCss( $$("logo_1").getNode(), "logo_1_dark");
                webix.html.addCss( $$("label_status_gage_windows_start_1").getNode(), "label_status_gage_windows_start_dark");
                webix.html.addCss( $$("label_status_gage_windows_start_2").getNode(), "label_status_gage_windows_start_dark");
                webix.html.addCss( $$("ver_soft").getNode(), "ver_soft_dark");
                webix.html.addCss( $$("master_setup").getNode(), "button_1_dark");
                webix.html.addCss( $$("engineering_setup").getNode(), "button_1_dark");
                webix.html.addCss( $$("reference").getNode(), "button_1_dark");
                webix.html.addCss( $$("application_menu").getNode(), "button_1_dark");





            }
            if (color == "black") {
                webix.html.addCss( $$("window_show").getNode(), "window_show");
                webix.html.addCss( $$("window_show_2").getNode(), "window_show");
                webix.html.addCss( $$("language_windows_modal").getNode(), "language_windows_modal");
                webix.html.addCss( $$("language_windows_modal_2").getNode(), "language_windows_modal");
                webix.html.addCss( $$("language_windows_modal_3").getNode(), "language_windows_modal");
                webix.html.addCss( $$("language_windows_modal_4").getNode(), "language_windows_modal");
                webix.html.addCss( $$("color_rows_star_pages").getNode(), "color_rows_star_pages");
                webix.html.addCss( $$("logo_1").getNode(), "logo_1");
                webix.html.addCss( $$("label_status_gage_windows_start_1").getNode(), "label_status_gage_windows_start");
                webix.html.addCss( $$("label_status_gage_windows_start_2").getNode(), "label_status_gage_windows_start");
                webix.html.addCss( $$("ver_soft").getNode(), "ver_soft");
                webix.html.addCss( $$("master_setup").getNode(), "button_1");
                webix.html.addCss( $$("engineering_setup").getNode(), "button_1");
                webix.html.addCss( $$("reference").getNode(), "button_1");
                webix.html.addCss( $$("application_menu").getNode(), "button_1");

            }

        }







    }

}

