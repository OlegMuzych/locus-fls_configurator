import {JetView} from "webix-jet";
import llsModel from "../../../models/lls-model";

export default class PasswordWindow extends JetView {
    config() {

        let body = {
            view: "window",
            position: "center",
            width: 650,
            height: 400,
            id: "window_show_3",
            modal: true,
            css: "window_show_password",
            head: {
                rows: [
                    {
                        view: "segmented",
                        localId: 'tabbar_windows_password',
                        css: "tabbar_windows_password",
                        multiview: true,
                        height: 80,
                        options: [
                            {value: 'Ввести', id: 'rows_11'},
                            {value: 'Задать новый', id: 'rows_21'},
                        ],
                        // on: {
                        //     onChange: function (nextId, prevId) {
                        //         webix.animate($$(prevId).$view, {type: "fade", duration: 250});
                        //     }
                        // }


                    },

                    {
                        animate: {type: "show", delay: 10},
                        // on: {
                        //     onViewChange: function (prevId, nextId) {
                        //         webix.html.addCss($$(nextId).$view, "animated fadeIn");
                        //         webix.delay(function () {
                        //             webix.html.removeCss(this.$view, "animated fadeIn");
                        //         }, $$(nextId), null, 500);
                        //     }
                        // },
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
                                                pattern: {mask: "####", allow: /[0-9]/g}
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


                            {
                                id: "rows_21",
                                cols: [
                                    {
                                        rows: [
                                            {
                                                height: 20,
                                            },
                                            {
                                                cols: [
                                                    {},
                                                    {
                                                        view: "label",
                                                        label: "<p style='font-size: 20px; position: relative; top: -17px; font-weight: 100;'>Старый пароль</p>",
                                                        width: 200,
                                                        localId: "windows_password_label_2",
                                                        css: "windows_password_label"
                                                    },
                                                    {
                                                        view: "text",
                                                        height: 50,
                                                        localId: "textCurrentPass_2",
                                                        css: "password_windows_set",
                                                        inputAlign: "center",
                                                        pattern: {mask: "####", allow: /[0-9]/g},
                                                    },
                                                    {},
                                                ]
                                            },
                                            {
                                                height: 25,
                                            },
                                            {
                                                cols: [
                                                    {},
                                                    {
                                                        view: "label",
                                                        label: "<p style='font-size: 20px; position: relative; top: -17px; font-weight: 100;'>Новый пароль</p>",
                                                        width: 200,
                                                        localId: "windows_password_label_3",
                                                        css: "windows_password_label"
                                                    },
                                                    {
                                                        view: "text",
                                                        height: 50,
                                                        localId: "textNewPass",
                                                        css: "password_windows_set",
                                                        inputAlign: "center",
                                                        pattern: {mask: "####", allow: /[0-9]/g}
                                                    },
                                                    {}
                                                ]
                                            },
                                            {
                                                height: 85,
                                            },
                                            {
                                                cols: [
                                                    {},
                                                    {
                                                        view: "button",
                                                        label: "Изменить",
                                                        localId: "buttonNewPassOk",
                                                        css: "set_password_button"
                                                    },
                                                    {},
                                                    {
                                                        view: "button",
                                                        label: "Отмена",
                                                        localId: "buttonCancel_2",
                                                        css: "set_password_button"
                                                    },
                                                    {}
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
        }

        return body;
    }

    init() {
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

                })
                .catch(()=>{
                    this.$$("textCurrentPass").setValue('');
                })
        });

        this.$$('buttonNewPassOk').attachEvent("onItemClick", (id, e) => {
            console.log('click');
            let currentPass = this.$$("textCurrentPass_2").getValue();
            let newPass = this.$$('textNewPass').getValue();
            llsModel.setNewPassword(currentPass, newPass)
                .then(()=>{

                })
                .catch(()=>{
                    this.$$("textCurrentPass_2").setValue('');
                    this.$$("textNewPass").setValue('');
                })
        });



    }

    showWindow() {
        this.getRoot().show();
    }
}