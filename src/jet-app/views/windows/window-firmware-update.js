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
            head: "Обновление прошивки ДУТ",
            css: "window_show",
            position: "center",
            close: true,
            body: {
                rows:[FirmwareUpdate]
            }
        }
        return win;
    }

    init() {

        this.setTheme();
    }

    showWindow() {
        this.getRoot().show();
    }

    setTheme() {
        if (configFile.theme == 'dark') {
            webix.html.addCss(this.$$("window_show").getNode(), "window_show_dark");
        }
        if (configFile.theme == 'light') {
            webix.html.addCss(this.$$("window_show").getNode(), "window_show");
        }
    }
}