import {JetView} from "webix-jet";

export default class ContinueCalibrateWindow extends JetView {
    config() {
        const _ = this.app.getService("locale")._;
        let body = {
            view: "window",
            position: "center",
            width: 650,
            height: 400,
            id: "window_show_4",
            modal: true,
            css: "window_show",
            body: {
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
                                // id: "closed_2",
                                css: "set_password_button_icon",
                                height: 100,
                            },
                            {
                                view: "label",
                                label: `<p style='font-size: 20px; position: relative; top: -10px; text-align: center;'>${_("windows_continue_calibration_text")}</p>`,
                                css: "language_windows_modal",
                                // id: "language_windows_modal_2",
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
            this.app.callEvent("app:calibrationsubview:finishCalibrate", []);
            this.getRoot().hide();
        });

        this.$$('buttonOk').attachEvent("onItemClick", (id, e) => {
            console.log('click');
            this.app.callEvent("app:continueCalibrateWindow:continueCalibrate", []);
            this.getRoot().hide();
        });
    }

    showWindow() {
        this.getRoot().show();
    }
}