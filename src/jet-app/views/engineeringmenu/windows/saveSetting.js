import {JetView} from "webix-jet";
import llsModel from "../../../models/lls-model";

export default class LlsNoConnectWindow extends JetView {
    config() {

        let save = webix.ui({
            view: "window",
            position: "top",
            width: 1000,
            height: 40,
            id: "save_settings_windows",
            css: "window_show_save",
            head: {
                rows: [
                    {
                        view: "label",
                        label: "<p>Настройки записаны в датчик</p>",
                        css: "save_windows_modal",
                        // localId: "language_windows_modal_2",
                        width: 1000,
                        height: 50,
                    },

                ]
            },
        });

        return body;
    }

    init() {
        // this.$$('buttonCancel').attachEvent("onItemClick", (id, e) => {
        //     console.log('click');
        //     this.getRoot().hide();
        // });

    //     this.$$('buttonOk').attachEvent("onItemClick", (id, e) => {
    //         console.log('click');
    //         this.getRoot().hide();
    //         this.show("win");
    //     });
    // }
    //
    // showWindow() {
    //     this.getRoot().show();
  }
}
