import {JetView} from "webix-jet";
import configFile from "../../config-app";
import llsModel from "../../models/lls-model";
import fileFirmwareModel from "../../models/file-firmware-model";
import MessageWindow from "./windows/message";
import {pathOptions} from "../../models/combo-model";

export default class FirmwareUpdate extends JetView {
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
                    view: "label",
                    label: "<p>Current firmware version: </p>",
                    // label: "Version Firmware:",
                    align: "center",
                    css: "label_text_upload_window",
                    localId: 'labelCurrentFirmwareVersion',
                    hidden: true
                    // css: "upload_config",
                },
                {},
                {
                    height: 200,
                    rows: [
                        {
                            view: "label",
                            label: "<p> ДУТ 301 Test Y-Modem </p>",
                            css: "label_text_upload_window",
                            id: "label_text_upload_window_1",
                            align: "center",
                        },
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
                                            value: _('upload_file'),
                                            name: "files",
                                            width: 500,
                                            height: 70,
                                            css: "upload_config",
                                            localId: "buttonFirmwarePath"
                                        },
                                        {
                                            height: 5,
                                        },
                                        {
                                            view: "text",
                                            localId: "textFirmwarePath",
                                            width: 500,
                                            height: 70,
                                            inputAlign:"left",
                                            autoheight: false,
                                            css: "my_text",
                                            // css: "window_type_2",


                                        },
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
                                            label: _("mode_download"),
                                            width: 500,
                                            height: 70,
                                            css: "upload_config",
                                            localId: "buttonSetBootMode",
                                        },
                                        {
                                            localId: "manualBoot",
                                            cols: [
                                                {
                                                    view: "richselect",
                                                    id: "comport",
                                                    placeholder:"COM Port",
                                                    // label: 'Path',
                                                    labelPosition: "top",
                                                    labelAlign: 'center',
                                                    name: "comport",
                                                    // css: "upload_config",
                                                    css: "my_richselect",
                                                    value: 1,
                                                    options: []
                                                },
                                                {
                                                    view: "button",
                                                    id: "buttonPromise",
                                                    height: 70,
                                                    label: _('promise'),
                                                    css: "upload_config",
                                                }
                                            ]
                                        },
                                        {
                                            height: 5,
                                        },
                                        {
                                            view: "button",
                                            width: 500,
                                            height: 70,
                                            label: _("mode_download_turn_on"),
                                            css: "rows_level_right_menu_switch_2",
                                            localId: "buttonBootModeOn"
                                        },
                                        {
                                            view: "button",
                                            width: 500,
                                            height: 70,
                                            label: _("mode_download_turn_off"),
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
                                            label: _("to_write_file_in_device"),
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
        llsModel.getLongData();
        this.$$("manualBoot").disable();
        this.$$("buttonSetBootMode").enable();
        // this.setStatusConnect(true);
    }

    listenerDisconnect = () => {
        this.$$("manualBoot").enable();
        this.$$("buttonSetBootMode").disable();
        // this.setStatusConnect(false);
    }

    listenerLongData = (longData) => {
        let strVersion = new TextDecoder().decode(new Uint8Array(longData.softwareVersion));
        this.$$('labelCurrentFirmwareVersion').setValue(`<p>Current firmware version: ${strVersion}</p>`);
    }

    destroy() {
        super.destroy();
        llsModel.clearListenerIsConnect(this.listenerConnect);
        llsModel.clearListenerIsDisconnect(this.listenerDisconnect);
        llsModel.clearListenerLongData(this.listenerLongData);
        webix.UIManager.removeHotKey("shift-d", this.devModeTurnOn);
        // fileFirmwareModel.llsClose().then();
        // llsModel.setStatusLlsNoConnect();
    }

    devModeTurnOn = () => {
        webix.message("DevMode");
        this.devModeFlag = true;
        this.$$('labelCurrentFirmwareVersion').show();

        // this.$$('buttonPromise').define({hotkey: "space",});
        // this.$$('buttonFirmwareWrite').define({hotkey: "space",});
    }

    init() {

        this.devModeFlag = false;
        webix.UIManager.addHotKey("shift-d", this.devModeTurnOn);

        this.$$("manualBoot").enable();
        this.$$("buttonSetBootMode").disable();

        const _ = this.app.getService("locale")._;

        this.setTheme();
        llsModel.addListenerIsConnect(this.listenerConnect);
        llsModel.addListenerIsDisconnect(this.listenerDisconnect);
        llsModel.addListenerLongData(this.listenerLongData);
        llsModel.getStatusConnect();

        this.setModeBootLed(false);
        this.$$("buttonFirmwareWrite").disable();

        this.getRoot().attachEvent("onViewShow", function () {
            webix.message("Shhowwww");
        });

        pathOptions().then((list) => {
            this.$$("comport").define({options: list});
        });

        this.$$("comport").attachEvent("onItemClick", () => {
            pathOptions().then((list) => {
                this.$$("comport").define({options: list});
            });
        });

        this.$$('buttonPromise').attachEvent('onItemClick', () => {
            this.$$("buttonSetBootMode").disable();
            this.$$("manualBoot").disable();
            llsModel.setStatusLlsStopPromise()
                .then((resp) => {
                    this.$$("manualBoot").disable();
                    let path = this.$$("comport").getValue();
                    this.portSettings = {path, baudRate: 19200};
                    return fileFirmwareModel.llsConnect({path, baudRate: 19200});
                })
                .then(() => {
                    return fileFirmwareModel.promiseBootLoad();
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
                    this.$$("manualBoot").disable();
                })
                .catch((e) => {
                    console.log(e);
                    message.showWindow(_("fail_entry_in_mode_download"));
                    webix.message("Boot Mode failed!");
                    fileFirmwareModel.llsClose().then();
                    this.$$("manualBoot").enable();
                    this.getParentView().action(true);
                });
        });

        const message = this.ui(MessageWindow);

        // this.$$('textFirmwarePath').setValue("/Users/oleg/Documents/forTest/прошивки/tmk24_v1_207.bin");
        this.$$('buttonFirmwarePath').attachEvent("onItemClick", (id, e) => {
            fileFirmwareModel.choiceFirmware().then((str) => this.$$('textFirmwarePath').setValue(str));
        })

        this.$$('buttonSetBootMode').attachEvent("onItemClick", (id, e) => {
            this.$$("buttonSetBootMode").disable();
            this.$$("manualBoot").disable();
            llsModel.setStatusLlsStop()
                .then((resp) => {
                    console.log(resp);
                    this.$$("manualBoot").disable(); //что бы не активироваль с EventConnect
                    const {path, baudRate} = resp;
                    this.portSettings = {path, baudRate};
                    return fileFirmwareModel.llsConnect({path, baudRate, llsAdr: 0x01});
                })
                // .then(() => {
                //     this.$$("manualBoot").disable(); //что бы не активироваль с EventConnect
                //     return fileFirmwareModel.runBootMode();
                // })
                .then(() => {
                    this.$$("manualBoot").disable(); //что бы не активироваль с EventConnect
                    return fileFirmwareModel.runDownloadApp();
                })
                .then(() => {
                    this.$$("manualBoot").disable(); //что бы не активироваль с EventConnect
                    return fileFirmwareModel.llsClose();
                })
                .then(() => {
                    webix.message("Boot Mode success!");
                    this.setModeBootLed(true);
                    this.$$("buttonFirmwareWrite").enable();
                    this.getParentView().action(false);
                    this.$$("buttonSetBootMode").disable();
                    this.$$("manualBoot").disable();
                })
                .catch((e) => {
                    message.showWindow(_("fail_entry_in_mode_download"));
                    webix.message("Boot Mode failed!");
                    fileFirmwareModel.llsClose().then();
                    this.$$("buttonSetBootMode").enable();
                    this.getParentView().action(true);
                });
        })

        this.$$('buttonFirmwareWrite').attachEvent("onItemClick", (id, e) => {
            this.$$("buttonFirmwareWrite").disable();
            const path = this.$$("textFirmwarePath").getValue();
            if (!path) {
                webix.message("Failed: " + e);
                message.showWindow(_("fail_write_file"));
                this.$$("buttonSetBootMode").enable();
                // return 0;
                return fileFirmwareModel.llsClose();
            }
            const serialPortSettings = this.portSettings;

            fileFirmwareModel.writeFirmware(path, serialPortSettings, (progress) => {
                this.$$("bar").setValue(progress);
            })
                .then(() => {
                    return fileFirmwareModel.llsClose();
                })
                .then(() => {
                    webix.message("Success");
                    message.showWindow(_("success_write_file"));
                    this.$$("buttonSetBootMode").enable();
                }).catch((e) => {
                webix.message("Failed: " + e);
                message.showWindow(_("fail_write_file"));
                this.$$("buttonSetBootMode").enable();
            });
        })
    }

    myRefresh() {
        if (this.devModeFlag) {
            this.$$("bar").setValue(0);
            this.$$("bar").refresh();
            this.$$("manualBoot").enable();
            this.$$("buttonSetBootMode").disable();
            this.$$("labelCurrentFirmwareVersion").setValue("<p>Current firmware version: </p>");
            this.setModeBootLed(false);
        } else {
            this.refresh();
        }
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