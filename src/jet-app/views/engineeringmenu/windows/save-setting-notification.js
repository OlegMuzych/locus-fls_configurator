
import {JetView} from "webix-jet";

export default class SaveSettingNotificationWindow extends JetView {
    config() {

        let body = {
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
        }

        return body;
    }

    init(){
    }

    showWindow() {
            this.getRoot().show();
            setTimeout(() => {
                this.getRoot().hide();
            }, 500);
    }
}
