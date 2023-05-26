// webix.ui.fullScreen();
import {JetView} from "webix-jet";
import llsModel from "../models/lls-model";
import configFile from "../config-app";
import globalVariable from "../global-variable-app";
import WindowSettings from "./windows/window-settings";
import trademark from "../../trademark/trademark";
import WindowAbout from "./windows/window-about";
import WindowFirmwareUpdate from "./windows/window-firmware-update";
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
                    paddingY: 10, //test comment
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
                            label: _("firmware_lls"),
                            width: 300,
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
            image: _t("image_logo"),
            width: 400,
            height: 400,
            css: "logo_1",
            id: "logo_1",
        };


        // Статус подключения датчика
        var status_gage = {
            height: 100,
            rows: [
                {
                },
                {
                    cols: [
                        {
                        },
                        {
                            view: "button",
                            width: 50,
                            height: 50,
                            css: "rows_level_right_menu_switch",
                            id: "button_define_define_1"
                        },
                        {
                            view: "button",
                            width: 50,
                            height: 50,
                            css: "rows_level_right_menu_switch_define",
                            id: "button_define_1"
                        },
                        {
                            width: 20,
                        },
                        {
                            // label: "Датчик подключен",
                            view: "label",
                            label: _("sensor_is_connected"),
                            height: 30,
                            width: 300,
                            css: "label_status_gage_windows_start",
                            id: "label_status_gage_windows_start_1",
                        },
                        {
                            // label: "Датчик не подключен",
                            view: "label",
                            label: _('sensor_is_not_connected'),
                            height: 30,
                            width: 300,
                            css: "label_status_gage_windows_start",
                            id: "label_status_gage_windows_start_2"
                        },

                             //Режим работы двух датчиков
                        {
                            id:"status_gage_show",
                            cols:[
                                {
                                    width: 250,
                                },
                                {
                                    view: "button",
                                    width: 50,
                                    height: 50,
                                    css: "rows_level_right_menu_switch",
                                    id: "button_define_define_2"
                                },
                                {
                                    view: "button",
                                    width: 50,
                                    height: 50,
                                    css: "rows_level_right_menu_switch_define",
                                    id: "button_define_2"
                                },
                                {
                                    width: 20,
                                },

                                {
                                    // label: "Датчик подключен",
                                    view: "label",
                                    label: _("sensor_is_connected_2"),
                                    height: 30,
                                    width: 300,
                                    css: "label_status_gage_windows_start",
                                    id: "label_status_gage_windows_start_3",
                                },
                                {
                                    // label: "Датчик не подключен",
                                    view: "label",
                                    label: _('sensor_is_not_connected_2'),
                                    height: 30,
                                    width: 300,
                                    css: "label_status_gage_windows_start",
                                    id: "label_status_gage_windows_start_4"
                                },
                            ]},

                        {

                        }
                    ]
                },
                {

                }
            ]

        };


        // Кнопки меню
        var button_menu = {

            width: 1100,
            rows: [
                {
                    width: 1119,
                    height: 70,
                    css: "button_text_config_two_gage",
                    id: "rows_config_status_gage",
                    cols:[
                        {
                            width: 30,
                        },
                        {
                            view: "label",
                            width: 400,
                            label: `<p style='position: relative; top:-20px;'>${_('text_two_gage')}</p>`,
                            css: "text_two_gage",
                            id:"status_config_two_gage_3",
                        },
                        {
                            width: 90,
                        },
                        {
                            view: "switch",
                            id:"switcher_config_gage"
                        },
                        {
                            view: "label",
                            label: `<p style='position: relative; top:-20px;'>${_('number_gage_1')}</p>`,
                            css: "text_two_gage",
                            id:"status_config_two_gage_1"

                        },
                        {
                            view: "label",
                            label: `<p style='position: relative; top:-20px; color: #35a642;'>${_('number_gage_2')}</p>`,
                            css: "text_two_gage",
                            id:"status_config_two_gage_2"

                        },
                        {
                            view: "button",
                            type: "label",
                            label: "?",
                            css: "text_label_question",
                            id:"text_label_question",
                            width: 60,
                        },
                        {
                            width: 30,
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
                            image: _("button_image_engineering"),
                            css: "button_1",
                            id: "engineering_setup",
                            width: 1119,
                        },
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
                        cols:[
                            {
                                view: "label",
                                label: `<p style='font-size: 26px;'>${_("function_is_not_available")}</p>`,
                                css: "closed_windows_modal",
                                height: 45,
                            },
                        ]
            }
        });

        win_3.hide();



        var win_5 =webix.ui({
            view: "window",
            width: 1000,
            height: 500,
            id: "window_show_5",
            modal: true,
            head:"Режим работы конфигуратора",
            css: "window_show",
            position: "center",
            close:true,
            body: {


                cols:[
                    {
                        width:30,
                    },
                    {
                        rows:[
                            {

                            },
                            {
                                view: "label",
                                label: `<p>${_("warning_text_configurator_mode")}</p>`,
                                css: "closed_windows_modal",
                                id: "closed_windows_modal",
                                height: 80,
                            },
                            {
                                view: "label",
                                label: `<p>${_("warning_text_configurator_mode_2")}</p>`,
                                css: "closed_windows_modal",
                                id: "closed_windows_modal_2",
                                height: 80,
                            },
                            {
                                view: "label",
                                label: `<p>${_("warning_text_configurator_mode_3")}</p>`,
                                css: "closed_windows_modal",
                                id: "closed_windows_modal_3",
                                height: 80,
                            },
                            {
                                view: "label",
                                label: `<p>${_("warning_text_configurator_mode_4")}</p>`,
                                css: "closed_windows_modal",
                                id: "closed_windows_modal_4",
                                height: 80,
                            },
                            {

                            }
                        ]
                    },
                    {
                        width:10,
                    }
                ]
            }
        });


        win_5.hide();



        return {

                view: "scrollview",
                scroll: "y",
                css: "color_rows_star_pages",
                id: "color_rows_star_pages",
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


        clearTimeout(this.timeoutMasterSettup);
    }

    setStatusConnect(status) {
        if (status) {
            $$("button_define_define_1").show();
            $$("button_define_define_2").show()
            $$("label_status_gage_windows_start_1").show();
            $$("label_status_gage_windows_start_2").hide();
            $$("label_status_gage_windows_start_3").show();
            $$("label_status_gage_windows_start_4").hide();
            $$("button_define_1").hide();
            $$("button_define_2").hide()
        } else {
            $$("button_define_define_1").hide();
            $$("button_define_define_2").hide()
            $$("label_status_gage_windows_start_1").hide();
            $$("label_status_gage_windows_start_2").show();
            $$("label_status_gage_windows_start_3").hide();
            $$("label_status_gage_windows_start_4").show();
            $$("button_define_1").show();
            $$("button_define_2").show()
        }
    };


    init(view) {




        $$("switcher_config_gage").attachEvent("onChange", (newValue, oldValue, config)=>{
            webix.message(newValue);
            if(newValue) {

            }else{

            }


        });

        $$("text_label_question").attachEvent("onItemClick", (id, e) => {
            $$("window_show_5").show()
         });

        $$("status_gage_show").hide();
        $$("status_config_two_gage_1").show()
        $$("status_config_two_gage_2").hide();


        $$("switcher_config_gage").attachEvent("onChange", (newValue, oldValue, config)=>{


            // $$("switcher_config_gage").bind($$("configuration_general_settings_sensor"));

            if(newValue) {
                $$("status_config_two_gage_2").show();
                $$("status_config_two_gage_1").hide()
                $$("status_gage_show").show();
                $$("configuration_general_settings_sensor").hide();


            }else{
                $$("status_config_two_gage_1").show()
                $$("status_config_two_gage_2").hide();
                $$("status_gage_show").hide();
                $$("configuration_general_settings_sensor").hide();



            }
        });


        setInterval(function(){
            var value = Math.floor(Math.random()*100);
            $$("b1").setValue(value);
        }, 3000);

        // $$("button_define_define_2").hide();

        this.windowFirmwareUpdate = this.ui(WindowFirmwareUpdate);
        this.$$("button_reload").attachEvent("onItemClick", (id, e) => {
            // $$("window_show_4").show();
            this.refresh();
            this.windowFirmwareUpdate.showWindow();
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
            this.refresh();
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
            webix.html.addCss($$("label_status_gage_windows_start_3").getNode(), "label_status_gage_windows_start_dark");
            webix.html.addCss($$("label_status_gage_windows_start_4").getNode(), "label_status_gage_windows_start_dark");
            webix.html.addCss($$("ver_soft").getNode(), "ver_soft_dark");
            webix.html.addCss($$("engineering_setup").getNode(), "button_1_dark");
            webix.html.addCss($$("reference").getNode(), "button_1_dark");
            webix.html.addCss($$("application_menu").getNode(), "button_1_dark");
            webix.html.addCss(this.$$("button_reload").getNode(), "button_reload_dark");
            webix.html.addCss($$("window_show_4").getNode(), "window_show_dark");
            webix.html.addCss($$("window_show_5").getNode(), "window_show_dark");
            webix.html.addCss($$("upload_config_window_1").getNode(), "upload_config_window_dark");
            webix.html.addCss($$("boot_loader").getNode(), "upload_config_dark");
            webix.html.addCss($$("upload_config").getNode(), "upload_config_dark");
            webix.html.addCss($$("label_text_upload_window_2").getNode(), "label_text_upload_window_dark");
            webix.html.addCss($$("label_text_upload_window_3").getNode(), "label_text_upload_window_dark");
            webix.html.addCss($$("label_text_upload_window_1").getNode(), "label_text_upload_window_dark");
            webix.html.addCss($$("load_file").getNode(), "upload_config_dark");
            webix.html.addCss($$("rows_config_status_gage").getNode(), "button_text_config_two_gage_dark");
            webix.html.addCss($$("status_config_two_gage_1").getNode(), "text_two_gage_dark");
            webix.html.addCss($$("status_config_two_gage_2").getNode(), "text_two_gage_dark");
            webix.html.addCss($$("status_config_two_gage_3").getNode(), "text_two_gage_dark");
            webix.html.addCss($$("text_label_question").getNode(), "text_label_question_dark");
            webix.html.addCss($$("closed_windows_modal").getNode(), "closed_windows_modal_dark");
            webix.html.addCss($$("closed_windows_modal_2").getNode(), "closed_windows_modal_dark");
            webix.html.addCss($$("closed_windows_modal_3").getNode(), "closed_windows_modal_dark");
            webix.html.addCss($$("closed_windows_modal_4").getNode(), "closed_windows_modal_dark");

            $$("logo_1").define("image", _t("image_logo_dark"));
            $$("logo_1").refresh();
            $$("engineering_setup").define("image", _("button_image_engineering_dark"));
            $$("reference").define("image", _("button_image_info_win2_dark"));
            $$("application_menu").define("image", _("button_image_konfig_dark"));
            $$("engineering_setup").refresh();
            $$("reference").refresh();
            $$("application_menu").refresh();
            $$("window_show_5").refresh();


            //////////////////////////////////


        }
        if (configFile.theme == 'light') {
            webix.html.addCss($$("color_rows_star_pages").getNode(), "color_rows_star_pages");
            webix.html.addCss($$("logo_1").getNode(), "logo_1");
            webix.html.addCss($$("label_status_gage_windows_start_1").getNode(), "label_status_gage_windows_start");
            webix.html.addCss($$("label_status_gage_windows_start_2").getNode(), "label_status_gage_windows_start");
            webix.html.addCss($$("label_status_gage_windows_start_3").getNode(), "label_status_gage_windows_start");
            webix.html.addCss($$("label_status_gage_windows_start_4").getNode(), "label_status_gage_windows_start");
            webix.html.addCss($$("ver_soft").getNode(), "ver_soft");
            webix.html.addCss($$("engineering_setup").getNode(), "button_1");
            webix.html.addCss($$("reference").getNode(), "button_1");
            webix.html.addCss($$("application_menu").getNode(), "button_1");
            webix.html.addCss(this.$$("button_reload").getNode(), "button_reload");
            webix.html.addCss($$("window_show_4").getNode(), "window_show");
            webix.html.addCss($$("window_show_5").getNode(), "window_show");
            webix.html.addCss($$("upload_config_window_1").getNode(), "upload_config_window");
            webix.html.addCss($$("boot_loader").getNode(), "upload_config");
            webix.html.addCss($$("upload_config").getNode(), "upload_config");
            webix.html.addCss($$("label_text_upload_window_2").getNode(), "label_text_upload_window");
            webix.html.addCss($$("label_text_upload_window_3").getNode(), "label_text_upload_window");
            webix.html.addCss($$("label_text_upload_window_1").getNode(), "label_text_upload_window");
            webix.html.addCss($$("load_file").getNode(), "upload_config");
            webix.html.addCss($$("rows_config_status_gage").getNode(), "button_text_config_two_gage");
            webix.html.addCss($$("status_config_two_gage_1").getNode(), "text_two_gage");
            webix.html.addCss($$("status_config_two_gage_2").getNode(), "text_two_gage");
            webix.html.addCss($$("status_config_two_gage_3").getNode(), "text_two_gage");
            webix.html.addCss($$("text_label_question").getNode(), "text_label_question");
            webix.html.addCss($$("closed_windows_modal").getNode(), "closed_windows_modal");
            webix.html.addCss($$("closed_windows_modal_2").getNode(), "closed_windows_modal");
            webix.html.addCss($$("closed_windows_modal_3").getNode(), "closed_windows_modal");
            webix.html.addCss($$("closed_windows_modal_4").getNode(), "closed_windows_modal");

            $$("logo_1").define("image", _t("image_logo"));
            $$("logo_1").refresh();
            $$("engineering_setup").define("image", _("button_image_engineering"));
            $$("reference").define("image", _("button_image_info_win2"));
            $$("application_menu").define("image", _("button_image_konfig"));
            $$("engineering_setup").refresh();
            $$("reference").refresh();
            $$("application_menu").refresh();
            $$("window_show_5").refresh();
        }
    }
}

