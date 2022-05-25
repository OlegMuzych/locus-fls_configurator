import {JetView} from "webix-jet";
import configFile from "../../config-app";
import llsModel from "../../models/lls-model";
import fileFirmwareModel from "../../models/file-firmware-model";
import MessageWindow from "./windows/message";

export default class FirmwareUpdatePromise extends JetView {
    config() {
        const _ = this.app.getService("locale")._;
        let body = {
            width: 1000,
            height: 800,
            localId: "body",
            rows: [
                {
                    // height: 100,
                },
                {
                    height: 200,
                    rows: [
                        {
                            cols: [
                                {
                                    width: 20,

                                },
                                {
                                    view: "label",
                                    label: "<p>1</p>",
                                    css: "label_text_upload_window",
                                    id: "label_text_upload_window_1",
                                },
                                {
                                    rows: [
                                        {
                                            view: "button",
                                            value: "Загрузить файл",
                                            name: "files",
                                            width: 500,
                                            height: 70,
                                            css: "upload_config",
                                            localId: "buttonFirmwarePath"
                                        },
                                        // {
                                        //     view: "uploader",
                                        //     value: "Загрузить файл",
                                        //     name: "files",
                                        //     link: "upload_config_window_1",
                                        //     upload: "https://docs.webix.com/samples/server/upload",
                                        //     width: 500,
                                        //     height: 70,
                                        //     css: "upload_config",
                                        //     id: "upload_config"
                                        // },
                                        {
                                            height: 5,
                                        },
                                        {
                                            view: "text",
                                            localId: "textFirmwarePath",
                                            width: 500,
                                            height: 70,
                                            autoheight: false,
                                            css: "upload_config_window"

                                        },
                                        // {
                                        //     view: "list",
                                        //     id: "upload_config_window_1",
                                        //     width: 500,
                                        //     height: 70,
                                        //     type: "uploader",
                                        //     autoheight: false,
                                        //     css: "upload_config_window"
                                        //
                                        // },
                                    ]
                                },
                                {}
                            ]
                        },
                    ]
                },
                {
                    height: 20,
                },
                {
                    rows: [
                        {
                            cols: [
                                {
                                    width: 20,
                                },
                                {
                                    view: "label",
                                    label: "<p>2</p>",
                                    css: "label_text_upload_window",
                                    id: "label_text_upload_window_2",
                                },
                                {
                                    rows: [

                                        {
                                            view: "button",
                                            type: "label",
                                            label: "Режим перепрошивки ДУТ",
                                            width: 500,
                                            height: 70,
                                            css: "upload_config",
                                            localId: "buttonSetBootMode",
                                        },
                                        {
                                            height: 5,
                                        },
                                        {
                                            view: "button",
                                            width: 500,
                                            height: 70,
                                            label: "Режим загрузки включен",
                                            css: "rows_level_right_menu_switch_2",
                                            localId: "buttonBootModeOn"
                                        },
                                        {
                                            view: "button",
                                            width: 500,
                                            height: 70,
                                            label: "Режим загрузки выключен",
                                            css: "rows_level_right_menu_switch_define_2",
                                            localId: "buttonBootModeOff"
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
                    rows: [
                        {
                            rows: [
                                {
                                    cols: [
                                        {
                                            width: 20,
                                        },
                                        {
                                            view: "label",
                                            label: "<p>3</p>",
                                            css: "label_text_upload_window",
                                            id: "label_text_upload_window_3",
                                        },
                                        {
                                            view: "button",
                                            type: "label",
                                            label: "Записать файл в датчик",
                                            width: 500,
                                            height: 70,
                                            css: "upload_config",
                                            localId: "buttonFirmwareWrite"
                                        },
                                        {}
                                    ]
                                },
                                {
                                    height: 5,
                                },
                                {
                                    cols: [
                                        {
                                            width: 40,
                                        },
                                        {},
                                        {
                                            view: "bullet",
                                            localId: "bar",
                                            minRange: 0,
                                            maxRange: 100,
                                            layout: "x",
                                            height: 100,
                                            width: 532,
                                            barWidth: 60,
                                            css: "progress_bar_2",
                                            color: "#35a642",
                                            bands: [
                                                {value: 100, color: "#fff"},
                                            ],
                                            stroke: 60,
                                            scale: {
                                                step: 20,
                                                template: "#value#%"
                                            }
                                        },
                                        {}
                                    ]
                                },
                            ]
                        }
                    ]
                },
                {}
            ]
        }
        return body;
    }

    listenerConnect = () => {
        // this.setStatusConnect(true);
    }

    listenerDisconnect = () => {
        // this.setStatusConnect(false);
    }

    destroy() {
        super.destroy();
        llsModel.clearListenerIsConnect(this.listenerConnect);
        llsModel.clearListenerIsDisconnect(this.listenerDisconnect);
    }

    init() {

        this.setTheme();
        llsModel.addListenerIsConnect(this.listenerConnect);
        llsModel.addListenerIsDisconnect(this.listenerDisconnect);
        llsModel.getStatusConnect();

        this.setModeBootLed(false);
        this.$$("buttonFirmwareWrite").disable();

        const message = this.ui(MessageWindow);

        this.$$('textFirmwarePath').setValue("/Users/oleg/Documents/forTest/прошивки/tmk24_v1_207.bin");
        this.$$('buttonFirmwarePath').attachEvent("onItemClick", (id, e) => {
            fileFirmwareModel.choiceFirmware().then((str) => this.$$('textFirmwarePath').setValue(str));
        })

        this.$$('buttonSetBootMode').attachEvent("onItemClick", (id, e) => {
            llsModel.setStatusLlsStop()
                .then((resp) => {
                    console.log(resp);
                    const {path, baudRate} = resp;
                    this.portSettings = {path, baudRate};
                    return fileFirmwareModel.llsConnect({path, baudRate});
                })
                .then(() => {
                    return fileFirmwareModel.runBootMode();
                })
                .then(() => {
                    return fileFirmwareModel.runDownloadApp();
                })
                .then(() => {
                    return fileFirmwareModel.llsClose();
                })
                .then(() => {
                    webix.message("Boot Mode success!");
                    this.setModeBootLed(true);
                    this.$$("buttonFirmwareWrite").enable();
                    this.getParentView().action(false);
                    this.$$("buttonSetBootMode").disable();
                })
                .catch((e) => {
                    webix.message("Boot Mode failed!");
                });
        })

        this.$$('buttonFirmwareWrite').attachEvent("onItemClick", (id, e) => {
            const path = this.$$("textFirmwarePath").getValue();
            if (!path) {
                return 0;
            }
            // const serialPortSettings = llsModel.getLlsConnectSettings();
            // const serialPortSettings = {path: "/dev/tty.usbserial-0001", baudRate: 19200};
            const serialPortSettings = this.portSettings;

            fileFirmwareModel.writeFirmware(path, serialPortSettings, (progress) => {
                this.$$("bar").setValue(progress);
            }).then(() => {
                webix.message("Success");
                message.showWindow("Файл прошивки успешно записан!");
                this.$$("buttonSetBootMode").disable();
            }).catch((e) => {
                webix.message("Failed: " + e);
                message.showWindow("Сбой записи файла прошивки!");
                this.$$("buttonSetBootMode").disable();
            });
        })
    }

    myRefresh(){
        this.refresh();
        llsModel.setStatusLlsNoConnect();
        this.getParentView().action(true);
    }

    setModeBootLed(flag) {
        if (flag) {
            this.$$("buttonBootModeOn").show();
            this.$$("buttonBootModeOff").hide();
        } else {
            this.$$("buttonBootModeOn").hide();
            this.$$("buttonBootModeOff").show();
        }
    }

    setStatusConnect(status) {
        if (status) {
            this.$$("body").enable();
            console.log(status);
            // $$("button_define_define_1").show();
            // $$("label_status_gage_windows_start_1").show();
            // $$("button_define_1").hide();
            // $$("label_status_gage_windows_start_2").hide();
        } else {
            this.$$("body").disable();
            console.log(status);
            // $$("button_define_define_1").hide();
            // $$("label_status_gage_windows_start_1").hide();
            // $$("button_define_1").show();
            // $$("label_status_gage_windows_start_2").show();
        }
    };

    setTheme() {
        if (configFile.theme == 'dark') {
            // webix.html.addCss(this.$$("window_show").getNode(), "window_show_dark");
            // // webix.html.addCss(this.$$("language_windows_modal").getNode(), "language_windows_modal_dark");
            // webix.html.addCss(this.$$("labelFontSize").getNode(), "language_windows_modal_dark");
            // webix.html.addCss(this.$$("labelAutoSaveMode").getNode(), "language_windows_modal_dark");
            // webix.html.addCss(this.$$("language").getNode(), "window_type_4_dark");
            // webix.html.addCss(this.$$("comboTheme").getNode(), "window_type_4_dark");
        }
        if (configFile.theme == 'light') {
            // webix.html.addCss(this.$$("window_show").getNode(), "window_show");
            // // webix.html.addCss(this.$$("language_windows_modal").getNode(), "language_windows_modal");
            // webix.html.addCss(this.$$("labelFontSize").getNode(), "language_windows_modal");
            // webix.html.addCss(this.$$("labelAutoSaveMode").getNode(), "language_windows_modal");
            // webix.html.addCss(this.$$("language").getNode(), "window_type_4");
            // webix.html.addCss(this.$$("comboTheme").getNode(), "window_type_4");
        }
    }
}