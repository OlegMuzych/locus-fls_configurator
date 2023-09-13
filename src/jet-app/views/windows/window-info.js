import {JetView} from "webix-jet";
import trademark from "../../../trademark/trademark";
import configFile from "../../config-app";


export default class WindowInfo extends JetView {
    config() {
        const _t = trademark._t;
        const _ = this.app.getService("locale")._;
        let win = {
            view: "window",
            width: 1000,
            height: 500,
            localId: "window_show_5",
            modal: true,
            head: "Режим работы конфигуратора",
            css: "window_show",
            position: "center",
            close: true,
            body: {
                cols: [
                    {
                        width: 30,
                    },
                    {
                        rows: [
                            {},
                            {
                                view: "label",
                                label: `<p>${_("warning_text_configurator_mode")}</p>`,
                                css: "closed_windows_modal",
                                localId: "closed_windows_modal",
                                height: 80,
                            },
                            {
                                view: "label",
                                label: `<p>${_("warning_text_configurator_mode_2")}</p>`,
                                css: "closed_windows_modal",
                                localId: "closed_windows_modal_2",
                                height: 80,
                            },
                            {
                                view: "label",
                                label: `<p>${_("warning_text_configurator_mode_3")}</p>`,
                                css: "closed_windows_modal",
                                localId: "closed_windows_modal_3",
                                height: 80,
                            },
                            {
                                view: "label",
                                label: `<p>${_("warning_text_configurator_mode_4")}</p>`,
                                css: "closed_windows_modal",
                                localId: "closed_windows_modal_4",
                                height: 80,
                            },
                            {}
                        ]
                    },
                    {
                        width: 10,
                    }
                ]
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
        if (configFile.theme == 'light') {
            webix.html.addCss(this.$$("window_show_5").getNode(), "window_show");
            webix.html.addCss(this.$$("closed_windows_modal").getNode(), "closed_windows_modal");
            webix.html.addCss(this.$$("closed_windows_modal_2").getNode(), "closed_windows_modal");
            webix.html.addCss(this.$$("closed_windows_modal_3").getNode(), "closed_windows_modal");
            webix.html.addCss(this.$$("closed_windows_modal_4").getNode(), "closed_windows_modal");
        }
        if (configFile.theme == 'dark') {
            webix.html.addCss(this.$$("window_show_5").getNode(), "window_show_dark");
            webix.html.addCss(this.$$("closed_windows_modal").getNode(), "closed_windows_modal_dark");
            webix.html.addCss(this.$$("closed_windows_modal_2").getNode(), "closed_windows_modal_dark");
            webix.html.addCss(this.$$("closed_windows_modal_3").getNode(), "closed_windows_modal_dark");
            webix.html.addCss(this.$$("closed_windows_modal_4").getNode(), "closed_windows_modal_dark");
        }
    }
}
