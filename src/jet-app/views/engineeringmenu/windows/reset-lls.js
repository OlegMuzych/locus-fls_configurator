import {JetView} from "webix-jet";
import llsModel from "../../../models/lls-model";
import configFile from "../../../config-app";

export default class ResetLlsWindow extends JetView {

    config() {
        const _ = this.app.getService("locale")._;

        let body = {
            view: "window",
            position: "center",
            width: 850,
            height: 400,
            id: "window_show_5",
            modal: true,
            css: "window_show",
            head: {
                height: 400,
                rows: [
                    {},
                    {
                        cols: [
                            {
                                width: 50,
                            },
                            {
                                view: "button",
                                type: "image",
                                image: "assets/images/Warning.png",
                                id: "closed_2",
                                css: "set_password_button_icon",
                                height: 200,
                            },
                            {
                                view: "label",
                                label: `<p style='font-size: 26px; position: relative; top: -20px; text-align: center;'>${_("windows_reset-lls_text")}</p>`,
                                // label: `<p style='font-size: 20px; position: relative; top: -10px; text-align: center;'>Все настройки будут сброшены</p>`,
                                css: "language_windows_modal",
                                id: "language_windows_modal_3",
                                height: 100,
                                width: 420,
                            },
                            {}
                        ]
                    },
                    {
                        height: 65,
                    },
                    {
                        cols: [
                            {},
                            {view: "button", label: _("button_ok"), localId: "buttonOk", css: "set_password_button"},
                            {},
                            {view: "button", label: _("button_cancel"), localId: "buttonCancel", css: "set_password_button"},
                            {}
                        ]
                    },
                    {}
                ]
            },
        }

        return body;
    }

    init(){
        this.$$('buttonCancel').attachEvent("onItemClick", (id, e) => {
            console.log('click');
            this.getRoot().hide();
        });

        this.$$('buttonOk').attachEvent("onItemClick", (id, e) => {
            console.log('click');
            this.getRoot().hide();
            //todo: command resetLls
        });

        this.setTheme();
    }

    showWindow() {
        this.getRoot().show();
    }

    setTheme() {
        if (configFile.theme == 'dark') {
            webix.html.addCss(this.$$("window_show_5").getNode(), "window_show_dark");
            webix.html.addCss(this.$$("language_windows_modal_3").getNode(), "language_windows_modal_dark");
            webix.html.addCss(this.$$("buttonOk").getNode(), "set_password_button_dark");
            webix.html.addCss(this.$$("buttonCancel").getNode(), "set_password_button_dark");

        }
        if (configFile.theme == 'light') {
            webix.html.addCss(this.$$("window_show_5").getNode(), "window_show");
            webix.html.addCss(this.$$("language_windows_modal_3").getNode(), "language_windows_modal");
            webix.html.addCss(this.$$("buttonOk").getNode(), "set_password_button");
            webix.html.addCss(this.$$("buttonCancel").getNode(), "set_password_button");



        }
    }
}