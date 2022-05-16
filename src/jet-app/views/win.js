// webix.ui.fullScreen();
import {JetView} from "webix-jet";
import llsModel from "../models/lls-model";
import configFile from "../config-app";
import globalVariable from "../global-variable-app";
import WindowSettings from "./windows/window-settings";
import trademark from "../../trademark/trademark";
import WindowAbout from "./windows/window-about";
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
                            id: "ver_soft",
                            width: 200,
                        },
                        {

                        },
                        {
                            view: "button",
                            type: "label",
                            label: "Прошивка ДУТ",
                            width: 200,
                            height: 50,
                            css: "button_reload",
                            localId:"button_reload"
                        },
                        {
                            width: 10,
                        }
                    ]
                },
            ]
        };


        // Логотип
        var logo = {
            view: "button",
            type: "image",
            // image: "assets/images/Logo_1.svg",
            image: _t("image_logo"),
            width: 400,
            height: 400,
            css: "logo_1",
            id: "logo_1",
        };


        // Статус подключения датчика
        var status_gage = {
            width: 400,
            // height: 100,
            rows: [
                {height:10,},
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
                },
                {height:30,}
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
        var win_4 =webix.ui({
            view: "window",
            width: 1000,
            height: 800,
            id: "window_show_4",
            modal: true,
            head:"Обновление прошивки ДУТ",
            css: "window_show",
            position: "center",
            close:true,
            body: {
                width: 1000,
                height: 800,
                rows:[
                    {
                        // height: 100,
                    },
                    {
                        height: 200,
                        rows:[
                            {
                                cols: [
                                    {
                                        width:20,

                                    },
                                    {
                                        view:"label",
                                        label:"<p>1</p>",
                                        css:"label_text_upload_window",
                                        id:"label_text_upload_window_1",
                                    },
                                    {
                                        rows: [
                                            {
                                                view: "uploader",
                                                value: "Загрузить файл",
                                                name:"files",
                                                link:"upload_config_window_1",
                                                upload:"https://docs.webix.com/samples/server/upload",
                                                width: 500,
                                                height: 70,
                                                css: "upload_config",
                                                id:"upload_config"
                                            },
                                            {
                                                height: 5,
                                            },
                                            {
                                                view:"list",
                                                id:"upload_config_window_1",
                                                width: 500,
                                                height: 70,
                                                type:"uploader",
                                                autoheight:false,
                                                css:"upload_config_window"

                                            },
                                        ]
                                    },
                                    {

                                    }
                                ]
                            },
                        ]
                    },
                    {
                        height: 20,
                    },
                    {
                        rows:[
                            {
                                cols:[
                                    {
                                        width: 20,
                                    },
                                    {
                                        view:"label",
                                        label:"<p>2</p>",
                                        css:"label_text_upload_window",
                                        id:"label_text_upload_window_2",
                                    },
                                    {
                                        rows:[

                                            {
                                                view: "button",
                                                type:"label",
                                                label:"Режим перепрошивки ДУТ",
                                                width: 500,
                                                height: 70,
                                                css: "upload_config",
                                                id:"boot_loader",
                                            },
                                            {
                                                height: 5,
                                            },
                                            {
                                                view: "button",
                                                width: 500,
                                                height: 70,
                                                label:"Вкл",
                                                css: "rows_level_right_menu_switch_2",
                                                id: "button_define_define_2"
                                            },
                                            {
                                                view: "button",
                                                width: 500,
                                                height: 70,
                                                label:"Выкл",
                                                css: "rows_level_right_menu_switch_define_2",
                                                id: "button_define_2"
                                            },
                                        ]
                                    },
                                    {
                                        width: 240,
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        height: 70,
                    },
                    {
                        height: 200,
                        rows:[
                            {
                                rows:[
                                    {
                                        cols:[
                                            {
                                                width: 20,
                                            },
                                            {
                                                view:"label",
                                                label:"<p>3</p>",
                                                css:"label_text_upload_window",
                                                id:"label_text_upload_window_3",
                                            },
                                            {
                                                view: "button",
                                                type: "label",
                                                label: "Записать файл в датчик",
                                                width: 500,
                                                height: 70,
                                                css: "upload_config",
                                                id:"load_file"
                                            },
                                            {

                                            }
                                        ]
                                    },
                                    {
                                        height: 5,
                                    },
                                    {
                                        cols:[
                                            {
                                                width: 40,
                                            },
                                            {

                                            },
                                            {
                                                view:"bullet",
                                                id:"b1",
                                                minRange:0,
                                                maxRange:100,
                                                layout: "x",
                                                height: 100,
                                                width: 532,
                                                barWidth: 60,
                                                css: "progress_bar_2",
                                                color:"#35a642",
                                                bands:[
                                                    { value:100, color:"#fff"},
                                                ],
                                                stroke:60,
                                                scale:{
                                                    step:20,
                                                    template:"#value#%"
                                                }
                                            },
                                            {

                                            }
                                        ]
                                    },
                                ]
                            }

                        ]
                    },
                    {

                    }
                ]





            }

        });
        win_4.hide();


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
                                label: `<p style='font-size: 26px;'>${_("function_is_not_available")}</p>`,
                                css: "closed_windows_modal",
                                height: 45,
                            },
                        ]
                //     },
                // ]
            }
        });
        win_3.hide();

        return {

                view: "scrollview",
                scroll: "y",
                css: "color_rows_star_pages",
                id: "color_rows_star_pages",
                // minHeight: 800,
                body: {
                    rows:[
                        {
                            height: 50,
                            cols:[
                                {
                                    width: 10,
                                },
                                ver,
                                {
                                    width: 10,
                                }
                            ]
                        },
                        {
                            rows:[
                                {
                                    height: 300,
                                    paddingY: -50,
                                    rows:[
                                        {
                                            cols:[
                                                {

                                                },
                                                logo,
                                                {

                                                }
                                            ]
                                        },
                                    ]
                                },
                                {
                                    rows: [
                                        {
                                            cols:[
                                                {

                                                },
                                                status_gage,
                                                {

                                                }
                                            ]
                                        },
                                    ]
                                },
                                {
                                    cols:[
                                        {

                                        },
                                        button_menu,
                                        {

                                        }
                                    ]
                                },
                            ]
                        },
                        {
                            height: 20,
                        }


                    ]


                }


        };


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

        setInterval(function(){
            var value = Math.floor(Math.random()*100);
            $$("b1").setValue(value);
        }, 3000);

        // $$("button_define_define_2").hide();


        this.$$("button_reload").attachEvent("onItemClick", (id, e) => {
            $$("window_show_4").show();
        });

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


        $$("master_setup").attachEvent("onItemClick", (id, e) => {
            $$("window_show_3").show();

            setTimeout(() => {
                $$("window_show_3").hide();
            }, 1500);
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

        // $$("window_show_2").hide()
        this.windowsAbout = this.ui(WindowAbout);
        $$("reference").attachEvent("onItemClick", (id, e) => {
           this.windowsAbout.showWindow();
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
    }
    setTheme(){
        const _t = trademark._t;
        const _ = this.app.getService("locale")._;

        if (configFile.theme == 'dark') {
            webix.html.addCss($$("color_rows_star_pages").getNode(), "color_rows_star_pages_dark");
            webix.html.addCss($$("logo_1").getNode(), "logo_1_dark");
            webix.html.addCss($$("label_status_gage_windows_start_1").getNode(), "label_status_gage_windows_start_dark");
            webix.html.addCss($$("label_status_gage_windows_start_2").getNode(), "label_status_gage_windows_start_dark");
            webix.html.addCss($$("ver_soft").getNode(), "ver_soft_dark");
            webix.html.addCss($$("master_setup").getNode(), "button_1_dark");
            webix.html.addCss($$("engineering_setup").getNode(), "button_1_dark");
            webix.html.addCss($$("reference").getNode(), "button_1_dark");
            webix.html.addCss($$("application_menu").getNode(), "button_1_dark");
            webix.html.addCss(this.$$("button_reload").getNode(), "button_reload_dark");
            webix.html.addCss($$("window_show_4").getNode(), "window_show_dark");
            webix.html.addCss($$("upload_config_window_1").getNode(), "upload_config_window_dark");
            webix.html.addCss($$("boot_loader").getNode(), "upload_config_dark");
            webix.html.addCss($$("upload_config").getNode(), "upload_config_dark");
            webix.html.addCss($$("label_text_upload_window_2").getNode(), "label_text_upload_window_dark");
            webix.html.addCss($$("label_text_upload_window_3").getNode(), "label_text_upload_window_dark");
            webix.html.addCss($$("label_text_upload_window_1").getNode(), "label_text_upload_window_dark");
            webix.html.addCss($$("load_file").getNode(), "upload_config_dark");

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
        }
        if (configFile.theme == 'light') {
            webix.html.addCss($$("color_rows_star_pages").getNode(), "color_rows_star_pages");
            webix.html.addCss($$("logo_1").getNode(), "logo_1");
            webix.html.addCss($$("label_status_gage_windows_start_1").getNode(), "label_status_gage_windows_start");
            webix.html.addCss($$("label_status_gage_windows_start_2").getNode(), "label_status_gage_windows_start");
            webix.html.addCss($$("ver_soft").getNode(), "ver_soft");
            webix.html.addCss($$("master_setup").getNode(), "button_1");
            webix.html.addCss($$("engineering_setup").getNode(), "button_1");
            webix.html.addCss($$("reference").getNode(), "button_1");
            webix.html.addCss($$("application_menu").getNode(), "button_1");
            webix.html.addCss(this.$$("button_reload").getNode(), "button_reload");
            webix.html.addCss($$("window_show_4").getNode(), "window_show");
            webix.html.addCss($$("upload_config_window_1").getNode(), "upload_config_window");
            webix.html.addCss($$("boot_loader").getNode(), "upload_config");
            webix.html.addCss($$("upload_config").getNode(), "upload_config");
            webix.html.addCss($$("label_text_upload_window_2").getNode(), "label_text_upload_window");
            webix.html.addCss($$("label_text_upload_window_3").getNode(), "label_text_upload_window");
            webix.html.addCss($$("label_text_upload_window_1").getNode(), "label_text_upload_window");
            webix.html.addCss($$("load_file").getNode(), "upload_config");

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
        }
    }
}

