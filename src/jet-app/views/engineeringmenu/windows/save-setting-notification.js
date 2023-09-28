
import {JetView} from "webix-jet";

export default class SaveSettingNotificationWindow extends JetView {
    config() {
        const _ = this.app.getService("locale")._;
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
                        label: `<p>${_('window_save-setting-notification_text')}</p>`,
                        css: "save_windows_modal",
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
            }, 1500);
    }
}
