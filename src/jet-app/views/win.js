// webix.ui.fullScreen();
import {JetView} from "webix-jet";
import llsModel from "../models/lls-model";
import configFile from "../config-app";
import globalVariable from "../global-variable-app";
import WindowSettings from "./windows/window-settings";
import trademark from "../../trademark/trademark";
//const SerialPort = eval(`require('serialport')`);
// const findPort = require("../models/lls/findPort");

// return screen > 1210 ? "wide" : (screen > 1060 ? "mid" : "small");

export default class Page9View extends JetView {
    config() {
        const _t = trademark._t;

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
            // image: "assets/images/Logo_1.svg",
            image: _t("image_logo"),
            width: 500,
            height: 600,
            css: "logo_1",
            id: "logo_1",
        };


        // Статус подключения датчика
        var status_gage = {
            width: 400,
            rows: [
                {
                    paddingX: 80,
                    cols: [
                        {

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
                        {

                        }
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
                            image: _("button_image_master"),
                            // image: "assets/images/master.svg",
                            css: "button_1",
                            id: "master_setup",
                            disabled: false,

                        },
                        {
                            width: 20,
                        },
                        {
                            view: "button",
                            type: "image",
                            image: _("button_image_engineering"),
                            // image: "assets/images/ingeneer.svg",
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
                            image: _("button_image_info_win2"),
                            css: "button_1",
                            id: "reference"
                        },
                        {
                            width: 20,
                        },
                        {
                            view: "button",
                            type: "image",
                            image: _("button_image_konfig"),
                            // image: "assets/images/konfig.svg",
                            align: "center",
                            css: "button_1",
                            id: "application_menu"
                        },
                    ]
                },

            ]
        };

        // win.hide();

        var win_3 =webix.ui({
            view: "window",
            width: 1000,
            // height: 160,
            id: "window_show_3",
            modal: false,
            css: "window_show_closed_master",
            position: "top",
            body: {
                // rows:[
                //     {
                        cols:[
                            {
                                view: "label",
                                label: "<p style='font-size: 26px;'>Функция временно не доступна</p>",
                                css: "closed_windows_modal",
                                height: 45,
                            },
                        ]
                //     },
                // ]
            }
        });
        win_3.hide();




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
                            {template: "", type: "header", borderless: true,},
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
                                        label: `<p>${_("trademark")} ${_t("trademark")}</p>`,
                                        width: 700,
                                        height: 80,
                                        css: "language_windows_modal",
                                        localId: "language_windows_modal_2"
                                    },
                                    {
                                        view: "label",
                                        label: `<p>${_('developer')} ${_t("developer")}</p>`,
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
                                        label: `<p>${_('website')} ${_t("website")}</p>`,
                                        width: 700,
                                        height: 80,
                                        css: "language_windows_modal",
                                        localId: "language_windows_modal_6"
                                    },
                                    {
                                        view: "label",
                                        label: `<p>${_('copyright')} ${_t('copyright')}</p>`,
                                        width: 700,
                                        height: 80,
                                        css: "language_windows_modal",
                                        thisId: "language_windows_modal_5"
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

        // $$("master_setup").attachEvent("onItemClick", (id, e) => {
        //     // this.show("1page");
        //
        // });

        $$("master_setup").attachEvent("onItemClick", (id, e) => {
            $$("window_show_3").show()

            setTimeout(() => {
                $$("window_show_3").hide();
            }, 400);
        });



        $$("engineering_setup").attachEvent("onItemClick", (id, e) => {
            this.show("./engineeringmenu/engineeringmenu");
        });

        // $$("button_define_define_1").hide()
        // $$("label_status_gage_windows_start_1").hide()
        this.windowsSettings = this.ui(WindowSettings);

        $$("application_menu").attachEvent("onItemClick", (id, e) => {
            this.windowsSettings.showWindow();
        });

        $$("window_show_2").hide()

        $$("reference").attachEvent("onItemClick", (id, e) => {
            $$("window_show_2").show()
        });


        globalVariable.theme.then(async theme => {
            if (theme == 'like_system') {
                let systemIsDark = await window.electron.nativeTheme('shouldUseDarkColors');
                if (systemIsDark){
                    configFile.theme = "dark";
                }else{
                    configFile.theme = 'light';
                }
                this.setTheme();
            } else {
                configFile.theme = theme;
                this.setTheme();
            }
        });

        //     function setTheme() {
        //         if (configFile.theme == 'dark') {
        //             // webix.html.addCss($$("window_show").getNode(), "window_show_dark");
        //             webix.html.addCss($$("window_show_2").getNode(), "window_show_dark");
        //             // webix.html.addCss($$("language_windows_modal").getNode(), "language_windows_modal_dark");
        //             // webix.html.addCss($$("language_windows_modal_2").getNode(), "language_windows_modal_dark");
        //             webix.html.addCss($$("language_windows_modal_3").getNode(), "language_windows_modal_dark");
        //             webix.html.addCss($$("language_windows_modal_4").getNode(), "language_windows_modal_dark");
        //             webix.html.addCss($$("language_windows_modal_5").getNode(), "language_windows_modal_dark");
        //             webix.html.addCss($$("color_rows_star_pages").getNode(), "color_rows_star_pages_dark");
        //             webix.html.addCss($$("logo_1").getNode(), "logo_1_dark");
        //             webix.html.addCss($$("label_status_gage_windows_start_1").getNode(), "label_status_gage_windows_start_dark");
        //             webix.html.addCss($$("label_status_gage_windows_start_2").getNode(), "label_status_gage_windows_start_dark");
        //             webix.html.addCss($$("ver_soft").getNode(), "ver_soft_dark");
        //             webix.html.addCss($$("master_setup").getNode(), "button_1_dark");
        //             webix.html.addCss($$("engineering_setup").getNode(), "button_1_dark");
        //             webix.html.addCss($$("reference").getNode(), "button_1_dark");
        //             webix.html.addCss($$("application_menu").getNode(), "button_1_dark");
        //
        //             // $$("light_theme_label").hide()
        //             // $$("dark_theme_label").show()
        //             $$("logo_1").define("image", "assets/images/Logo_2.svg")
        //             $$("master_setup").define("image", "assets/images/master_inverse.svg")
        //             $$("engineering_setup").define("image", "assets/images/ingeneer_inverse.svg")
        //             $$("reference").define("image", "assets/images/info_inverse.svg")
        //             $$("application_menu").define("image", "assets/images/konfig_inverse.svg")
        //             $$("logo_1").refresh()
        //             $$("master_setup").refresh()
        //             $$("engineering_setup").refresh()
        //             $$("reference").refresh()
        //             $$("application_menu").refresh()
        //         }
        //         if (configFile.theme == 'light') {
        //             // webix.html.addCss($$("window_show").getNode(), "window_show");
        //             webix.html.addCss($$("window_show_2").getNode(), "window_show");
        //             // webix.html.addCss($$("language_windows_modal").getNode(), "language_windows_modal");
        //             // webix.html.addCss($$("language_windows_modal_2").getNode(), "language_windows_modal");
        //             webix.html.addCss($$("language_windows_modal_3").getNode(), "language_windows_modal");
        //             webix.html.addCss($$("language_windows_modal_4").getNode(), "language_windows_modal");
        //             webix.html.addCss($$("language_windows_modal_5").getNode(), "language_windows_modal");
        //             webix.html.addCss($$("color_rows_star_pages").getNode(), "color_rows_star_pages");
        //             webix.html.addCss($$("logo_1").getNode(), "logo_1");
        //             webix.html.addCss($$("label_status_gage_windows_start_1").getNode(), "label_status_gage_windows_start");
        //             webix.html.addCss($$("label_status_gage_windows_start_2").getNode(), "label_status_gage_windows_start");
        //             webix.html.addCss($$("ver_soft").getNode(), "ver_soft");
        //             webix.html.addCss($$("master_setup").getNode(), "button_1");
        //             webix.html.addCss($$("engineering_setup").getNode(), "button_1");
        //             webix.html.addCss($$("reference").getNode(), "button_1");
        //             webix.html.addCss($$("application_menu").getNode(), "button_1");
        //
        //             // $$("dark_theme_label").hide()
        //             // $$("light_theme_label").show()
        //             $$("logo_1").define("image", "assets/images/Logo_1.svg")
        //             $$("master_setup").define("image", "assets/images/master.svg")
        //             $$("engineering_setup").define("image", "assets/images/ingeneer.svg")
        //             $$("reference").define("image", "assets/images/info-win2.svg")
        //             $$("application_menu").define("image", "assets/images/konfig.svg")
        //             $$("logo_1").refresh()
        //             $$("master_setup").refresh()
        //             $$("engineering_setup").refresh()
        //             $$("reference").refresh()
        //             $$("application_menu").refresh()
        //         }
        //     }
        // }
    }
    setTheme(){
        const _t = trademark._t;
        const _ = this.app.getService("locale")._;

        if (configFile.theme == 'dark') {
            webix.html.addCss($$("window_show_2").getNode(), "window_show_dark");
            webix.html.addCss($$("language_windows_modal_3").getNode(), "language_windows_modal_dark");
            webix.html.addCss($$("language_windows_modal_4").getNode(), "language_windows_modal_dark");
            webix.html.addCss(this.$$("language_windows_modal_5").getNode(), "language_windows_modal_dark");
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
            $$("logo_1").define("image", _t("image_logo_dark"));
            $$("logo_1").refresh();
            $$("master_setup").define("image", _("button_image_master_dark"));
            $$("engineering_setup").define("image", _("button_image_engineering_dark"));
            $$("reference").define("image", _("button_image_info_win2_dark"));
            $$("application_menu").define("image", _("button_image_konfig_dark"));
            // $$("logo_1").refresh();
            $$("master_setup").refresh();
            $$("engineering_setup").refresh();
            $$("reference").refresh();
            $$("application_menu").refresh();

            webix.html.addCss(this.$$("language_windows_modal_2").getNode(), "language_windows_modal_dark");
            webix.html.addCss(this.$$("language_windows_modal_6").getNode(), "language_windows_modal_dark");

        }
        if (configFile.theme == 'light') {
            webix.html.addCss($$("window_show_2").getNode(), "window_show");
            webix.html.addCss($$("language_windows_modal_3").getNode(), "language_windows_modal");
            webix.html.addCss($$("language_windows_modal_4").getNode(), "language_windows_modal");
            webix.html.addCss(this.$$("language_windows_modal_5").getNode(), "language_windows_modal");
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
            $$("logo_1").define("image", _t("image_logo"));
            $$("logo_1").refresh();
            $$("master_setup").define("image", _("button_image_master"));
            $$("engineering_setup").define("image", _("button_image_engineering"));
            $$("reference").define("image", _("button_image_info_win2"));
            $$("application_menu").define("image", _("button_image_konfig"));
            // $$("logo_1").refresh();
            $$("master_setup").refresh();
            $$("engineering_setup").refresh();
            $$("reference").refresh();
            $$("application_menu").refresh();

            webix.html.addCss(this.$$("language_windows_modal_2").getNode(), "language_windows_modal");
            webix.html.addCss(this.$$("language_windows_modal_6").getNode(), "language_windows_modal");
        }
    }

    // showWindow() {
    //     this.$$("window_show_3").show();
    //     setTimeout(() => {
    //         this.$$("window_show_3").hide();
    //     }, 1000);
    // }
}

