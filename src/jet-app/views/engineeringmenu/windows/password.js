import {JetView} from "webix-jet";
import llsModel from "../../../models/lls-model";
import configFile from "../../../config-app";

export default class PasswordWindow extends JetView {
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
                    width: 810,
                    options: [
                        {value: _("window_password_segmented_current"), id: 'rows_22'},
                        {value: _("window_password_segmented_new"), id: 'rows_21'},
                    ],
                },

                {
                    animate: {type: "show", delay: 10},
                    css:"window_show_password",
                    id: "rows_11",
                    cells: [
                        {
                            id: "rows_22",
                            rows: [
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
                                            width: 36,
                                        },
                                        {
                                            view: "label",
                                            label: `<p style='font-size: 26px; position: relative; top: -26px; font-weight: 100;'>${_("window_password_text")}</p>`,
                                            width: 550,
                                            localId: "windows_password_label",
                                            css: "windows_password_label",
                                        },
                                        {}
                                    ]
                                },
                                {
                                    height: 15,
                                },
                                {
                                    cols: [
                                        {},
                                        {
                                            view: "text",
                                            height: 50,
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
                                    height: 65,
                                },
                                {
                                    cols: [
                                        {},
                                        {
                                            view: "button",
                                            label: _('button_ok'),
                                            localId: "buttonCurrentPassOk",
                                            css: "set_password_button"
                                        },
                                        {},
                                        {
                                            view: "button",
                                            label: _('button_cancel'),
                                            localId: "buttonCancel_1",
                                            css: "set_password_button"
                                        },
                                        {
                                            height: 80,
                                        }
                                    ]
                                },
                            ]
                        },
                        {

                        },

                        {
                            id: "rows_21",
                            cols: [
                                {
                                    rows: [
                                        {
                                            height: 50,
                                        },
                                        {
                                            cols: [
                                                {},
                                                {
                                                    view: "label",
                                                    label: `<p style='font-size: 26px; position: relative; top: -26px; font-weight: 100;'>${_('window_password_old_password')}</p>`,
                                                    width: 200,
                                                    localId: "windows_password_label_2",
                                                    css: "windows_password_label"
                                                },
                                                {
                                                    view: "text",
                                                    height: 50,
                                                    width: 300,
                                                    localId: "textCurrentPass_2",
                                                    css: "password_windows_set",
                                                    inputAlign: "center",
                                                    pattern: {mask: "########", allow: /[0-9]/g},
                                                    invalidMessage: _("window_password_invalid_message"),
                                                    name: "test2",
                                                    validate: ()=>{return this.passValidFlag},
                                                },
                                                {},
                                            ]
                                        },
                                        {
                                            height: 25,
                                            // height: 50,
                                        },
                                        {
                                            cols: [
                                                {
                                                    height: 20,
                                                },
                                                {
                                                    view: "label",
                                                    label: `<p style='font-size: 20px; position: relative; top: -17px; font-weight: 100;'>${_('window_password_new_password')}</p>`,
                                                    width: 200,
                                                    localId: "windows_password_label_3",
                                                    css: "windows_password_label"
                                                },
                                                {
                                                    view: "text",
                                                    height: 50,
                                                    width: 300,
                                                    localId: "textNewPass",
                                                    css: "password_windows_set",
                                                    inputAlign: "center",
                                                    pattern: {mask: "########", allow: /[0-9]/g}
                                                },
                                                {}
                                            ]
                                        },
                                        {
                                            height: 55,
                                        },
                                        {
                                            cols: [
                                                {},
                                                {
                                                    view: "button",
                                                    label: _("window_password_button_edit"),
                                                    localId: "buttonNewPassOk",
                                                    css: "set_password_button"
                                                },
                                                {},
                                                {
                                                    view: "button",
                                                    label: _("button_cancel"),
                                                    localId: "buttonCancel_2",
                                                    css: "set_password_button"
                                                },
                                                {
                                                    height: 80,
                                                }
                                            ]
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


        this.$$('buttonCancel_1').attachEvent("onItemClick", (id, e) => {
            console.log('click');
            this.getRoot().hide();
        });

        this.$$('buttonCancel_2').attachEvent("onItemClick", (id, e) => {
            console.log('click');
            this.getRoot().hide();
        });

        this.$$('buttonCurrentPassOk').attachEvent("onItemClick", (id, e) => {
            console.log('click');

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
        });

        this.$$('buttonNewPassOk').attachEvent("onItemClick", (id, e) => {
            console.log('click');
            let currentPass = this.$$("textCurrentPass_2").getValue();
            let newPass = this.$$('textNewPass').getValue();
            llsModel.setNewPassword(currentPass, newPass)
                .then(()=>{
                    this.passValidFlag = true;
                    this.$$('textCurrentPass_2').validate();
                    this.getRoot().hide();
                })
                .catch(()=>{
                    this.passValidFlag = false;
                    this.$$('textCurrentPass_2').validate();
                    this.$$("textCurrentPass_2").setValue('');
                    this.$$("textNewPass").setValue('');
                })
        });

        this.setTheme();
    }


    showWindow() {
        this.getRoot().show();
    }


    setTheme() {
        if (configFile.theme == 'dark') {
            webix.html.addCss(this.$$("tabbar_windows_password").getNode(), "tabbar_windows_password_1_dark");
            webix.html.addCss(this.$$("window_show_3").getNode(), "window_show_password_dark");
            webix.html.addCss(this.$$("windows_password_label").getNode(), "windows_password_label_dark");
            webix.html.addCss(this.$$("windows_password_label_2").getNode(), "windows_password_label_dark");
            webix.html.addCss(this.$$("windows_password_label_3").getNode(), "windows_password_label_dark");
            webix.html.addCss(this.$$("buttonCurrentPassOk").getNode(), "set_password_button_dark");
            webix.html.addCss(this.$$("buttonCancel_1").getNode(), "set_password_button_dark");
            webix.html.addCss(this.$$("buttonCancel_2").getNode(), "set_password_button_dark");
            webix.html.addCss(this.$$("buttonNewPassOk").getNode(), "set_password_button_dark");
            webix.html.addCss(this.$$("textCurrentPass").getNode(), "password_windows_set_dark");
            webix.html.addCss(this.$$("textCurrentPass_2").getNode(), "password_windows_set_dark");
            webix.html.addCss(this.$$("textNewPass").getNode(), "password_windows_set_dark");
            webix.html.addCss(this.$$("rows_11").getNode(), "window_show_password_dark");
            webix.html.addCss(this.$$("form_pass_1").getNode(), "form_win_dark");



        }
        if (configFile.theme == 'light') {
            webix.html.addCss(this.$$("tabbar_windows_password").getNode(), "tabbar_windows_password_1");
            webix.html.addCss(this.$$("window_show_3").getNode(), "window_show_password");
            webix.html.addCss(this.$$("windows_password_label").getNode(), "windows_password_label");
            webix.html.addCss(this.$$("windows_password_label_2").getNode(), "windows_password_label");
            webix.html.addCss(this.$$("windows_password_label_3").getNode(), "windows_password_label");
            webix.html.addCss(this.$$("buttonCurrentPassOk").getNode(), "set_password_button");
            webix.html.addCss(this.$$("buttonCancel_1").getNode(), "set_password_button");
            webix.html.addCss(this.$$("buttonCancel_2").getNode(), "set_password_button");
            webix.html.addCss(this.$$("buttonNewPassOk").getNode(), "set_password_button");
            webix.html.addCss(this.$$("textCurrentPass").getNode(), "password_windows_set");
            webix.html.addCss(this.$$("textCurrentPass_2").getNode(), "password_windows_set");
            webix.html.addCss(this.$$("textNewPass").getNode(), "password_windows_set");
            webix.html.addCss(this.$$("rows_11").getNode(), "window_show_password");
            webix.html.addCss(this.$$("form_pass_1").getNode(), "form_win");




        }
    }
}

