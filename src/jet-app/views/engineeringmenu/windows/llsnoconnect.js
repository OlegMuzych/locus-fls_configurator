import {JetView} from "webix-jet";
import llsModel from "../../../models/lls-model";
import configFile from "../../../config-app";
import {getStrLang} from "../../../services/auxiliary-functions";

export default class LlsNoConnectWindow extends JetView {
    config() {
        const _ = this.app.getService("locale")._;

        let body = {
            view: "window",
            position: "center",
            width: 850,
            height: 400,
            id: "window_show_4",
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
                                label: `<p style='font-size: 26px; position: relative; top: -20px; text-align: center;'>${_("windows_lls_no_connect_text")}</p>`,
                                css: "language_windows_modal",
                                localId: "language_windows_modal_2",
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
                            {view: "button", label: _("button_ok") , localId: "buttonOk", css: "set_password_button",},
                            {view: "button", label: _("button_test_mode"), localId: "buttonCancel", css: "set_password_button",
                                disabled: false,
                                hidden: false,
                                hotkey: "shift+q+w",
                                width: 1,
                                height: 1,
                            },
                            {},

                        ]
                    },
                    {}
                ]
            },
        }

        return body;
    }

    init() {

        this.$$('buttonCancel').attachEvent("onItemClick", (id, e) => {
            console.log('click');
            this.getRoot().hide();
        });

        this.$$('buttonOk').attachEvent("onItemClick", (id, e) => {
            console.log('click');
            this.getRoot().hide();
            this.show("win");
        });

        this.setTheme();
    }

    showWindow() {
        this.getRoot().show();
    }



    setTheme() {
        if (configFile.theme == 'dark') {
            webix.html.addCss($$("window_show_4").getNode(), "window_show_dark");
            webix.html.addCss(this.$$("language_windows_modal_2").getNode(), "language_windows_modal_dark");
            webix.html.addCss(this.$$("buttonOk").getNode(), "set_password_button_dark");
            // webix.html.addCss(this.$$("buttonCancel").getNode(), "set_password_button_dark");

        }
        if (configFile.theme == 'light') {
            webix.html.addCss($$("window_show_4").getNode(), "window_show");
            webix.html.addCss(this.$$("language_windows_modal_2").getNode(), "language_windows_modal");
            webix.html.addCss(this.$$("buttonOk").getNode(), "set_password_button");
            // webix.html.addCss(this.$$("buttonCancel").getNode(), "set_password_button");


        }
    }
}
