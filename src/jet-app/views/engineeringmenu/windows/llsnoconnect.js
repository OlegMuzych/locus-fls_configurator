import {JetView} from "webix-jet";
import llsModel from "../../../models/lls-model";

export default class LlsNoConnectWindow extends JetView {
    config() {

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
                                label: "<p>Датчик не подключен</p>",
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
                            {view: "button", label: "OK" , localId: "buttonOk", css: "set_password_button",},
                            {},
                            // {view: "button", label: "Тестовый Режим", localId: "buttonCancel", css: "set_password_button", disabled: true},
                            // {}
                        ]
                    },
                    {}
                ]
            },
        }

        return body;
    }

    init() {
        // this.$$('buttonCancel').attachEvent("onItemClick", (id, e) => {
        //     console.log('click');
        //     this.getRoot().hide();
        // });

        this.$$('buttonOk').attachEvent("onItemClick", (id, e) => {
            console.log('click');
            this.getRoot().hide();
            this.show("win");
        });
    }

    showWindow() {
        this.getRoot().show();
    }
}
