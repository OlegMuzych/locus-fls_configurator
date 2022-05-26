import {JetView} from "webix-jet";
import configFile from "../../config-app";
import FirmwareUpdate from "../firmware-update/firmware-update";

export default class WindowFirmwareUpdate extends JetView {
    config() {
        const _ = this.app.getService("locale")._;

        let win = {
            view: "window",
            width: 1000,
            height: 800,
            localId: "window_show",
            modal: true,
            // head: "Обновление прошивки ДУТ",
            head: {
                rows: [
                    {
                        cols: [
                            {template: _("window_firmware_header"), type: "header", borderless: true,},
                            {
                                view: "icon", icon: "wxi-close", tooltip: "Close window", localId: 'iconClose', click: () => {
                                    this.getRoot().hide();
                                    // this.getParentView().refresh();
                                }
                            }
                        ]
                    }
                ]
            },
            css: "window_show",
            position: "center",
            // close: true,
            body: {
                rows: [FirmwareUpdate]
            }
        }
        return win;
    }

    init() {

        this.setTheme();
    }

    showWindow() {
        this.getRoot().show();
        this.setTheme();
    }

    setTheme() {
        if (configFile.theme == 'dark') {
            webix.html.addCss(this.$$("window_show").getNode(), "window_show_dark");
        }
        if (configFile.theme == 'light') {
            webix.html.addCss(this.$$("window_show").getNode(), "window_show");
        }
    }

    action(flag) {
        console.log("ACTION");
        if (flag) {
            this.$$("iconClose").show();
        } else {
            this.$$("iconClose").hide();
        }
    }
}