// webix.ui.fullScreen();
import {JetView} from "webix-jet";
import llsModel from "../models/lls-model";
import configFile from "../config-app";
import globalVariable from "../global-variable-app";
import WindowSettings from "./windows/window-settings";
//const SerialPort = eval(`require('serialport')`);
// const findPort = require("../models/lls/findPort");

// return screen > 1210 ? "wide" : (screen > 1060 ? "mid" : "small");

export default class Page9View extends JetView {
    config() {

        const _ = this.app.getService("locale")._;
        // Версия прошивки надпись
        var ver = {
            rows: [
                {
                    cols: [
                        {
                            width: 10,
                        },
                        {
                            view: "label",
                            label: _("version") + ": " + VERSION,
                            align: "left",
                            css: "ver_soft",
                            id: "ver_soft"
                        },
                        {}
                    ]
                }
            ]

        };


        // Логотип
        var logo = {
            view: "button",
            type: "image",
            image: "assets/images/Ivanov_Logo_1.svg",
            // width: 500,
            height: 600,
            css: "logo_1",
            id: "logo_1",
        };


        // Статус подключения датчика
        var status_gage = {
            rows: [
                {
                    cols: [
                        {
                            width: 170,
                        },
                        {
                            view: "button",
                            width: 30,
                            height: 30,
                            css: "rows_level_right_menu_switch",
                            id: "button_define_define_1"
                        },
                        {
                            view: "button",
                            width: 30,
                            height: 30,
                            css: "rows_level_right_menu_switch_define",
                            id: "button_define_1"
                        },
                        {width: 20,},
                        {
                            view: "label",
                            label: _("sensor_is_connected"),
                            height: 30,
                            width: 300,
                            css: "label_status_gage_windows_start",
                            id: "label_status_gage_windows_start_1",
                        },
                        {
                            view: "label",
                            // label: "Датчик не подключен",
                            label: _('sensor_is_not_connected'),
                            height: 30,
                            width: 300,
                            css: "label_status_gage_windows_start",
                            id: "label_status_gage_windows_start_2"
                        },
                        {}
                    ]
                }
            ]

        };


        // Кнопки меню
        var button_menu = {

            width: 1000,
            rows: [
                {

                    maxHeight: 400,
                    cols: [
                        {
                            view: "button",
                            type: "image",
                            image: "assets/images/master.svg",
                            css: "button_1",
                            id: "master_setup",
                            disabled: true,

                        },
                        {
                            width: 20,
                        },
                        {
                            view: "button",
                            type: "image",
                            image: "assets/images/ingeneer.svg",
                            css: "button_1",
                            id: "engineering_setup"
                        }
                    ]
                },
                {
                    height: 20,
                },
                {

                    maxHeight: 400,
                    cols: [
                        {
                            view: "button",
                            type: "image",
                            image: "assets/images/info-win2.svg",
                            css: "button_1",
                            id: "reference"
                        },
                        {
                            width: 20,
                        },
                        {
                            view: "button",
                            type: "image",
                            image: "assets/images/konfig.svg",
                            align: "center",
                            css: "button_1",
                            id: "application_menu"
                        },
                    ]
                },

            ]
        };

        // let win = {
        //     view: "window",
        //     position: "center",
        //     width: 850,
        //     height: 500,
        //     id: "window_show",
        //     modal: true,
        //     css: "window_show",
        //     head: {
        //         rows: [
        //             {
        //                 cols: [
        //                     {template: _("settings"), type: "header", borderless: true,},
        //                     {
        //                         view: "icon", icon: "wxi-close", tooltip: "Close window", click: function () {
        //                             $$("window_show").hide()
        //                         }
        //                     }
        //                 ]
        //             },
        //             {
        //                 height: 20,
        //             },
        //             {
        //                 disabled: false,
        //                 height: 80,
        //                 width: 200,
        //                 cols: [
        //                     {
        //                         width: 20,
        //                     },
        //                     {
        //                         view: "combo",
        //                         width: 750,
        //                         height: 100,
        //                         label: `<p>${_("language_selection")}</p>`,
        //                         labelWidth: 500,
        //                         css: "window_type_4",
        //                         inputAlign: "center",
        //                         id: "language",
        //                         options: [
        //                             {value: "Русский", id: 'ru' },
        //                             {value: "English", id: 'en'},
        //
        //                         ]
        //                     },
        //                     {
        //
        //                     }
        //                 ]
        //             },
        //             {
        //                 height: 20,
        //             },
        //             {
        //                 width: 200,
        //                 rows: [
        //                     {
        //
        //                         disabled: true,
        //                         cols: [
        //                             {
        //                                 width: 20,
        //                             },
        //                             {
        //                                 view: "label",
        //                                 label: `<p style='position: relative; top: -20px; text-align: left'>${_("theme_selection")}</p>`,
        //                                 width: 550,
        //                                 id: "light_theme_label",
        //                                 css:"language_windows_modal",
        //                             },
        //                             {view: "switch", value: 0, id: "dark_light_theme", width: 70, height: 100,},
        //                             {
        //                             },
        //                         ]
        //                     },
        //                     {
        //                         height: 20,
        //                     },
        //                     {
        //                         disabled: true,
        //                         height: 90,
        //                         cols:[
        //                             {
        //                                 width: 20,
        //                             },
        //                             {
        //                                 view: "label",
        //                                 label: `<p style='position: relative; top: -30px; text-align: left'>${_("font_size")}</p>`,
        //                                 width: 300,
        //                                 id: "light_theme_label_3",
        //                                 css:"language_windows_modal",
        //                             },
        //                             { view:"slider", value:"0", step:10, min:0, max:30, name:"s1", width: 400, height: 30, title:"%", css:"text_size_slider",
        //                                 on:{
        //                                     onChange:function(){
        //                                         this.define("title","%" + this.getValue());
        //                                         this.refresh(); }
        //                                 }},
        //                             {
        //
        //
        //                             }
        //                         ]
        //                     },
        //                     {
        //                         height: 20,
        //                     },
        //                     {
        //                         disabled: false,
        //                         cols:[
        //                             {
        //                                 width: 20,
        //                             },
        //                             {
        //                                 view: "label",
        //                                 label: `<p style='position: relative; top: -20px; text-align: left'>${_("auto_save_mode")}</p>`,
        //                                 width: 550,
        //                                 id: "light_theme_label_2",
        //                                 css:"language_windows_modal",
        //                             },
        //                             {view: "switch", value: 1, id: "switchAutoSaveMode", width: 70, height: 100,},
        //                             {
        //
        //
        //                             }
        //                         ]
        //                     },
        //
        //
        //
        //                 ]
        //             },
        //         ]
        //     },
        //
        // }


        // win.hide();


        var win_2 = webix.ui({
            view: "window",
            position: "center",
            width: 850,
            height: 500,
            id: "window_show_2",
            modal: true,
            css: "window_show",
            head: {
                rows: [
                    {
                        cols: [
                            {template: _("reference"), type: "header", borderless: true,},
                            {
                                view: "icon", icon: "wxi-close", tooltip: "Close window", click: function () {
                                    $$("window_show_2").hide()
                                }
                            }
                        ]
                    },
                    {
                        height: 10,

                    },
                    {
                        cols: [
                            {},
                            {

                                // hidden: false,
                                height: 400,
                                rows: [
                                    {},
                                    {
                                        view: "label",
                                        label: `<p>${_("trademark")}</p>`,
                                        width: 700,
                                        height: 80,
                                        css: "language_windows_modal",
                                        // id: "language_windows_modal_2"
                                    },
                                    {
                                        view: "label",
                                        label: `<p>${_('developer')}</p>`,
                                        width: 700,
                                        height: 80,
                                        css: "language_windows_modal",
                                        id: "language_windows_modal_3"
                                    },
                                    {
                                        view: "label",
                                        label: `<p>${_('program_version')}: ${VERSION}</p>`,
                                        width: 700,
                                        height: 80,
                                        css: "language_windows_modal",
                                        id: "language_windows_modal_4"
                                    },
                                    {
                                        view: "label",
                                        label: `<p>${_('website')}</p>`,
                                        width: 700,
                                        height: 80,
                                        css: "language_windows_modal",
                                        id: "language_windows_modal_6"
                                    },
                                    {
                                        view: "label",
                                        label: `<p>${_('copyright')}</p>`,
                                        width: 700,
                                        height: 80,
                                        css: "language_windows_modal",
                                        id: "language_windows_modal_5"
                                    },
                                    {},
                                ]
                            },
                            {}
                        ]


                    }
                ]
            },

        });
        win_2.hide();


        return {
            view: "scrollview",
            scroll: "y",
            body: {
                css: "color_rows_star_pages",
                // css: {transform: scale(0.5)},
                id: "color_rows_star_pages",
                rows: [

                    {
                        cols: [
                            {
                                width: 10,
                            },
                            ver,
                            {
                                height: 10,
                            }
                        ]
                    },
                    {
                        maxHeight: 50,
                    },
                    {
                        paddingY: -220,
                        // height: 400,
                        cols: [
                            {

                            },
                            logo,
                            {

                            }
                        ]
                    },
                    {
                        height: 20,
                    },
                    {
                        cols: [
                            {},
                            status_gage,
                            {}
                        ]
                    },
                    {
                        height: 20,
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

    listenerConnect = () => {
        this.setStatusConnect(true);
    }

    listenerDisconnect = () => {
        this.setStatusConnect(false);
    }

    destroy() {
        super.destroy();
        llsModel.clearListenerIsConnect(this.listenerConnect);
        llsModel.clearListenerIsDisconnect(this.listenerDisconnect);
    }

    setStatusConnect(status) {
        if (status) {
            $$("button_define_define_1").show();
            $$("label_status_gage_windows_start_1").show();
            $$("button_define_1").hide();
            $$("label_status_gage_windows_start_2").hide();
        } else {
            $$("button_define_define_1").hide();
            $$("label_status_gage_windows_start_1").hide();
            $$("button_define_1").show();
            $$("label_status_gage_windows_start_2").show();
        }
    };

    init(view) {
        this.setStatusConnect(false);

        // setTheme();


        llsModel.addListenerIsConnect(this.listenerConnect);
        llsModel.addListenerIsDisconnect(this.listenerDisconnect);
        llsModel.getStatusConnect();

        let goEngineering = (code, e) => {
            console.log(e);
            if (e.altKey && e.ctrlKey && e.code == "KeyT") {
                console.log("OPEN ENGINEERING MENU");
                webix.message("OPEN ENGINEERING MENU");
                this.app.show("/testSerialPort");
            }
        }

        $$("logo_1").attachEvent("onKeyPress", goEngineering);

        $$("master_setup").attachEvent("onItemClick", (id, e) => {
            // this.show("1page");

        });


        $$("engineering_setup").attachEvent("onItemClick", (id, e) => {
            this.show("./engineeringmenu/engineeringmenu");
        });

        // $$("button_define_define_1").hide()
        // $$("label_status_gage_windows_start_1").hide()
        this.windowsSettings = this.ui(WindowSettings);

        $$("application_menu").attachEvent("onItemClick", (id, e) => {
            // $$("window_show").show()
            this.windowsSettings.showWindow();
        });

        $$("window_show_2").hide()

        $$("reference").attachEvent("onItemClick", (id, e) => {
            $$("window_show_2").show()
        });

        // $$("dark_theme_label").hide()


        // if (configFile.theme.color == 'white') {
        //     $$("dark_light_theme").setValue(1);
        // }
        //
        // if (configFile.theme.color == 'black') {
        //     $$("dark_light_theme").setValue(0);
        // }
        //
        // globalVariable.autoSaveMode.then(flag => $$("switchAutoSaveMode").setValue(flag));
        // $$("switchAutoSaveMode").attachEvent("onChange",  (newValue, oldValue, config) => {
        //     if (newValue) {
        //         globalVariable.autoSaveMode = true;
        //     } else {
        //         globalVariable.autoSaveMode = false;
        //     }
        // });
        //
        // globalVariable.language.then((locale) => {
        //     $$("language").setValue(locale);
        // });
        // $$("language").attachEvent("onChange",  (newValue, oldValue, config) => {
        //     if(config == "user"){
        //         globalVariable.language = newValue;
        //         this.app.getService("locale").setLang(newValue);
        //     }
        // });

        // $$("dark_light_theme").attachEvent("onChange", function (newValue, oldValue, config) {
        //     if (newValue) {
        //         configFile.theme.color = 'white';
        //         setTheme();
        //     } else {
        //         configFile.theme.color = 'black';
        //         setTheme();
        //     }
        // });
        // $$("dark_light_theme").attachEvent("onItemClick", (id, e )=>{
        //     if ($$("dark_light_theme").getValue()== 1) {
        //         $$("light_theme_label").hide()
        //         $$("dark_theme_label").show()
        //         $$("logo_1").define("image", "assets/images/Logo_2.svg")
        //         $$("master_setup").define("image", "assets/images/master_inverse.svg")
        //         $$("engineering_setup").define("image", "assets/images/ingeneer_inverse.svg")
        //         $$("reference").define("image", "assets/images/info_inverse.svg")
        //         $$("application_menu").define("image", "assets/images/konfig_inverse.svg")
        //         $$("logo_1").refresh()
        //         $$("master_setup").refresh()
        //         $$("engineering_setup").refresh()
        //         $$("reference").refresh()
        //         $$("application_menu").refresh()
        //         setColor("white","white");
        //         configFile.theme.color = 'black';
        //     } else {
        //
        //         $$("dark_theme_label").hide()
        //         $$("light_theme_label").show()
        //         $$("logo_1").define("image", "assets/images/Logo_1.svg")
        //         $$("master_setup").define("image", "assets/images/master.svg")
        //         $$("engineering_setup").define("image", "assets/images/ingeneer.svg")
        //         $$("reference").define("image", "assets/images/info.svg")
        //         $$("application_menu").define("image", "assets/images/konfig.svg")
        //         $$("logo_1").refresh()
        //         $$("master_setup").refresh()
        //         $$("engineering_setup").refresh()
        //         $$("reference").refresh()
        //         $$("application_menu").refresh()
        //         setColor("dark","black");
        //         configFile.theme.color = 'white';
        //     }
        //
        // });

        // function setColor(id, color)
        // {
        //     // webix.html.removeCss( $$("window_show").getNode(), "window_show");
        //     // webix.html.removeCss( $$("window_show_2").getNode(), "window_show");
        //     // webix.html.removeCss( $$("language_windows_modal").getNode(), "language_windows_modal");
        //     // webix.html.removeCss( $$("language_windows_modal_2").getNode(), "language_windows_modal");
        //     // webix.html.removeCss( $$("language_windows_modal_3").getNode(), "language_windows_modal");
        //     // webix.html.removeCss( $$("language_windows_modal_4").getNode(), "language_windows_modal");
        //     // webix.html.removeCss( $$("language_windows_modal_5").getNode(), "language_windows_modal");
        //     // webix.html.removeCss( $$("color_rows_star_pages").getNode(), "color_rows_star_pages");
        //     // webix.html.removeCss( $$("logo_1").getNode(), "logo_1");
        //     // webix.html.removeCss( $$("label_status_gage_windows_start_1").getNode(), "label_status_gage_windows_start");
        //     // webix.html.removeCss( $$("label_status_gage_windows_start_2").getNode(), "label_status_gage_windows_start");
        //     // webix.html.removeCss( $$("ver_soft").getNode(), "ver_soft");
        //     // webix.html.removeCss( $$("master_setup").getNode(), "button_1");
        //     // webix.html.removeCss( $$("engineering_setup").getNode(), "button_1");
        //     // webix.html.removeCss( $$("reference").getNode(), "button_1");
        //     // webix.html.removeCss( $$("application_menu").getNode(), "button_1");
        //
        //     if (color == "white") {
        //         webix.html.addCss( $$("window_show").getNode(), "window_show_dark");
        //         webix.html.addCss( $$("window_show_2").getNode(), "window_show_dark");
        //         webix.html.addCss( $$("language_windows_modal").getNode(), "language_windows_modal_dark");
        //         webix.html.addCss( $$("language_windows_modal_2").getNode(), "language_windows_modal_dark");
        //         webix.html.addCss( $$("language_windows_modal_3").getNode(), "language_windows_modal_dark");
        //         webix.html.addCss( $$("language_windows_modal_4").getNode(), "language_windows_modal_dark");
        //         webix.html.addCss( $$("language_windows_modal_5").getNode(), "language_windows_modal_dark");
        //         webix.html.addCss( $$("color_rows_star_pages").getNode(), "color_rows_star_pages_dark");
        //         webix.html.addCss( $$("logo_1").getNode(), "logo_1_dark");
        //         webix.html.addCss( $$("label_status_gage_windows_start_1").getNode(), "label_status_gage_windows_start_dark");
        //         webix.html.addCss( $$("label_status_gage_windows_start_2").getNode(), "label_status_gage_windows_start_dark");
        //         webix.html.addCss( $$("ver_soft").getNode(), "ver_soft_dark");
        //         webix.html.addCss( $$("master_setup").getNode(), "button_1_dark");
        //         webix.html.addCss( $$("engineering_setup").getNode(), "button_1_dark");
        //         webix.html.addCss( $$("reference").getNode(), "button_1_dark");
        //         webix.html.addCss( $$("application_menu").getNode(), "button_1_dark");
        //
        //     }
        //     if (color == "black") {
        //         webix.html.addCss( $$("window_show").getNode(), "window_show");
        //         webix.html.addCss( $$("window_show_2").getNode(), "window_show");
        //         webix.html.addCss( $$("language_windows_modal").getNode(), "language_windows_modal");
        //         webix.html.addCss( $$("language_windows_modal_2").getNode(), "language_windows_modal");
        //         webix.html.addCss( $$("language_windows_modal_3").getNode(), "language_windows_modal");
        //         webix.html.addCss( $$("language_windows_modal_4").getNode(), "language_windows_modal");
        //         webix.html.addCss( $$("language_windows_modal_5").getNode(), "language_windows_modal");
        //         webix.html.addCss( $$("color_rows_star_pages").getNode(), "color_rows_star_pages");
        //         webix.html.addCss( $$("logo_1").getNode(), "logo_1");
        //         webix.html.addCss( $$("label_status_gage_windows_start_1").getNode(), "label_status_gage_windows_start");
        //         webix.html.addCss( $$("label_status_gage_windows_start_2").getNode(), "label_status_gage_windows_start");
        //         webix.html.addCss( $$("ver_soft").getNode(), "ver_soft");
        //         webix.html.addCss( $$("master_setup").getNode(), "button_1");
        //         webix.html.addCss( $$("engineering_setup").getNode(), "button_1");
        //         webix.html.addCss( $$("reference").getNode(), "button_1");
        //         webix.html.addCss( $$("application_menu").getNode(), "button_1");
        //     }
        //
        // }

        function setTheme() {
            if (configFile.theme.color == 'black') {
                webix.html.addCss($$("window_show").getNode(), "window_show_dark");
                webix.html.addCss($$("window_show_2").getNode(), "window_show_dark");
                webix.html.addCss($$("language_windows_modal").getNode(), "language_windows_modal_dark");
                // webix.html.addCss($$("language_windows_modal_2").getNode(), "language_windows_modal_dark");
                webix.html.addCss($$("language_windows_modal_3").getNode(), "language_windows_modal_dark");
                webix.html.addCss($$("language_windows_modal_4").getNode(), "language_windows_modal_dark");
                webix.html.addCss($$("language_windows_modal_5").getNode(), "language_windows_modal_dark");
                webix.html.addCss($$("color_rows_star_pages").getNode(), "color_rows_star_pages_dark");
                webix.html.addCss($$("logo_1").getNode(), "logo_1_dark");
                webix.html.addCss($$("label_status_gage_windows_start_1").getNode(), "label_status_gage_windows_start_dark");
                webix.html.addCss($$("label_status_gage_windows_start_2").getNode(), "label_status_gage_windows_start_dark");
                webix.html.addCss($$("ver_soft").getNode(), "ver_soft_dark");
                webix.html.addCss($$("master_setup").getNode(), "button_1_dark");
                webix.html.addCss($$("engineering_setup").getNode(), "button_1_dark");
                webix.html.addCss($$("reference").getNode(), "button_1_dark");
                webix.html.addCss($$("application_menu").getNode(), "button_1_dark");

                // $$("light_theme_label").hide()
                // $$("dark_theme_label").show()
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
            }
            if (configFile.theme.color == 'white') {
                webix.html.addCss($$("window_show").getNode(), "window_show");
                webix.html.addCss($$("window_show_2").getNode(), "window_show");
                webix.html.addCss($$("language_windows_modal").getNode(), "language_windows_modal");
                // webix.html.addCss($$("language_windows_modal_2").getNode(), "language_windows_modal");
                webix.html.addCss($$("language_windows_modal_3").getNode(), "language_windows_modal");
                webix.html.addCss($$("language_windows_modal_4").getNode(), "language_windows_modal");
                webix.html.addCss($$("language_windows_modal_5").getNode(), "language_windows_modal");
                webix.html.addCss($$("color_rows_star_pages").getNode(), "color_rows_star_pages");
                webix.html.addCss($$("logo_1").getNode(), "logo_1");
                webix.html.addCss($$("label_status_gage_windows_start_1").getNode(), "label_status_gage_windows_start");
                webix.html.addCss($$("label_status_gage_windows_start_2").getNode(), "label_status_gage_windows_start");
                webix.html.addCss($$("ver_soft").getNode(), "ver_soft");
                webix.html.addCss($$("master_setup").getNode(), "button_1");
                webix.html.addCss($$("engineering_setup").getNode(), "button_1");
                webix.html.addCss($$("reference").getNode(), "button_1");
                webix.html.addCss($$("application_menu").getNode(), "button_1");

                // $$("dark_theme_label").hide()
                // $$("light_theme_label").show()
                $$("logo_1").define("image", "assets/images/Logo_1.svg")
                $$("master_setup").define("image", "assets/images/master.svg")
                $$("engineering_setup").define("image", "assets/images/ingeneer.svg")
                $$("reference").define("image", "assets/images/info-win2.svg")
                $$("application_menu").define("image", "assets/images/konfig.svg")
                $$("logo_1").refresh()
                $$("master_setup").refresh()
                $$("engineering_setup").refresh()
                $$("reference").refresh()
                $$("application_menu").refresh()
            }
        }
    }

}

