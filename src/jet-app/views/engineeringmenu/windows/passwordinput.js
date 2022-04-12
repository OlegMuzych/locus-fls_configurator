import {JetView} from "webix-jet";
import llsModel from "../../../models/lls-model";
import configFile from "../../../config-app";

export default class PasswordInputWindow extends JetView {
    config() {
        const _ = this.app.getService("locale")._;

        let elements = {
            rows: [
                {
                    view: "segmented",
                    localId: 'tabbar_windows_password',
                    css: "tabbar_windows_password_1",
                    multiview: true,
                    height: 80,
                    options: [
                        {value: _("window_passwordinput_segmented_current"), id:'input_password'},
                        // {value: _("window_passwordinput_segmented_reset"), id:'reset_password'},
                    ],
                },

                {
                    animate: {type: "show", delay: 10},
                    height: 300,
                    width: 400,
                    css:"window_show_password",
                    id: "rows_11",
                    cells: [
                        {
                            id: "input_password",
                            rows:[
                                {
                                    height: 30,
                                },
                                {
                                    height: 70,
                                    cols: [
                                        {
                                            width: 18,
                                        },
                                        {
                                            view: "button",
                                            type: "image",
                                            image: "assets/images/info_black.svg",
                                            localId: "closed_1",
                                            css: "set_password_button_icon",
                                            width: 100,
                                            height: 100,
                                        },

                                        {
                                            view: "label",
                                            label: `<p style='position: relative; font-size: 26px; top: -25px'>${_("window_passwordinput_segmented_current_text")}</p>`,
                                            width: 590,
                                            localId: "windows_password_label",
                                            css: "language_windows_modal"
                                        },
                                        {
                                        }
                                    ]
                                },
                                {
                                    cols: [
                                        {

                                        },
                                        {
                                            view: "text",
                                            height: 60,
                                            localId: "textCurrentPass",
                                            css: "password_windows_set",
                                            inputAlign: "center",
                                            pattern: {mask: "########", allow: /[0-9]/g},
                                            invalidMessage: _("window_password_invalid_message"),
                                            name: 'test',
                                            validate: ()=>{return this.passValidFlag},
                                        },
                                        {}
                                    ]
                                },
                                {
                                    height: 50,
                                },
                                {
                                    cols: [
                                        {},
                                        {
                                            view: "button",
                                            label: _("button_ok"),
                                            localId: "buttonCurrentPassOk",
                                            css: "set_password_button"
                                        },
                                        {
                                        },
                                        {
                                            view: "button",
                                            label: _("button_cancel"),
                                            localId: "buttonCancel_1",
                                            css: "set_password_button"
                                        },
                                        {}
                                    ]
                                },
                            ]
                        },
                        {

                        },

                        {
                            id: "reset_password",
                            height: 500,
                             rows: [
                                 {
                                     view: "button",
                                     type: "image",
                                     image: "assets/images/Warning.png",
                                     id: "closed_3",
                                     css: "set_password_button_icon",
                                     height: 100,
                                 },
                                 {
                                    width: 300,
                                 },
                                 {
                                     view: "label",
                                     label: `<p style='position: relative; top: -30px; color: #eb2323;'>${_("window_passwordinput_segmented_reset_text")}</p>`,
                                     css: "language_windows_modal",
                                     height: 200,
                                     width: 100,
                                 },
                                 {

                                 },
                        {
                            cols: [
                                {

                                },
                                {
                                    view: "button",
                                    label: _("button_ok"),
                                    localId: "buttonResetOk",
                                    css: "set_password_button"
                                },
                                {

                                },
                                {
                                    view: "button",
                                    label: _("button_cancel"),
                                    localId: "buttonResetCancel",
                                    css: "set_password_button"
                                },
                                {

                                }
                            ]
                        }
                    ]
                 }
                ]

                }
            ]
        };

        let form = {
            view:"form",
            scroll:false,
            elements: [elements],
            css: "form_win",
            id:"form_pass_1",
            width: 850,
            height: 400,
        };

        let body = {
            view: "window",
            position: "center",
            width: 850,
            height: 400,
            id: "window_show_3",
            modal: true,
            css: "window_show_password",
            head: form,
        }

        return body;
    }

    init() {
        this.passValidFlag = true;

        this.setTheme();

        this.$$('buttonCancel_1').attachEvent("onItemClick", (id, e) => {
            console.log('click');
            this.getRoot().hide();
            this.show("win");
        });

        this.$$('buttonResetCancel').attachEvent("onItemClick", (id, e) => {
            console.log('click');
            this.getRoot().hide();
            this.show("win");
        });

        this.$$('buttonResetOk').attachEvent("onItemClick", (id, e) => {
            console.log('click');
            llsModel.resetLls().then();
            this.getRoot().hide();
            //todo: command resetLls
        });

        this.$$('textCurrentPass').attachEvent("onEnter",(ev)=>{
            this.pressOk();
        });

        this.$$('buttonCurrentPassOk').attachEvent("onItemClick", (id, e) => {
            console.log('click');
            this.pressOk();
        });

        this.$$('textCurrentPass').focus();

    }

    pressOk = ()=>{
        let pass = this.$$("textCurrentPass").getValue();
        llsModel.setCurrentPassword(pass)
            .then(()=>{
                this.passValidFlag = true;
                this.$$('textCurrentPass').validate();
                this.getRoot().hide();
            })
            .catch(()=>{
                this.passValidFlag = false;
                this.$$('textCurrentPass').validate();
                this.$$("textCurrentPass").setValue('');
            })

    }


    showWindow() {
        this.getRoot().show();
    }


    setTheme() {
        if (configFile.theme == 'dark') {
            webix.html.addCss(this.$$("tabbar_windows_password").getNode(), "tabbar_windows_password_1_dark");
            // webix.html.addCss(this.$$("tabbar_windows_password").getNode(), "tabbar_windows_password_1_dark");




        }
        if (configFile.theme == 'light') {
            webix.html.addCss(this.$$("tabbar_windows_password").getNode(), "tabbar_windows_password_1");



        }
    }
}