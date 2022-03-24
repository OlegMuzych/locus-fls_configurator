import {JetView} from "webix-jet";
import llsModel from "../../../models/lls-model";

export default class PasswordInputWindow extends JetView {
    config() {
        let elements = {
            rows: [
                {
                    view: "segmented",
                    localId: 'tabbar_windows_password',
                    css: "tabbar_windows_password",
                    multiview: true,
                    height: 80,
                    options: [
                        {value: 'Ввести', id: 'rows_11'},
                    ],
                },

                {
                    animate: {type: "show", delay: 10},
                    cells: [
                        {
                            id: "rows_11",
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
                                            width: 14,
                                        },
                                        {
                                            view: "label",
                                            label: "<p style='font-size: 20px; position: relative; top: -17px; font-weight: 100;'>Введите пароль для изменения настроек</p>",
                                            width: 420,
                                            localId: "windows_password_label",
                                            css: "windows_password_label"
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
                                            invalidMessage:"Неверный пароль",
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
                                            label: "OK",
                                            localId: "buttonCurrentPassOk",
                                            css: "set_password_button"
                                        },
                                        {},
                                        {
                                            view: "button",
                                            label: "Отмена",
                                            localId: "buttonCancel_1",
                                            css: "set_password_button"
                                        },
                                        {}
                                    ]
                                },
                            ]
                        },
                        {},
                    ]
                }
            ]
        };

        let form = {
            view:"form",
            scroll:false,
            elements: [elements],
        };

        let body = {
            view: "window",
            position: "center",
            width: 650,
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
            this.show("win");
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

    }

    showWindow() {
        this.getRoot().show();
    }
}