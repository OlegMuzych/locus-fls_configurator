import {JetView} from "webix-jet";
import ResetLlsWindow from "../../../windows/reset-lls";
import fileSettingsModel from "../../../../../models/file-settings-model";
import {llsModelOne} from "../../../../../models/lls-test-models";
const llsModel = llsModelOne;
import PasswordWindow from "../../../windows/password";
import configFile from "../../../../../config-app";

export default class ServiceMenuOne extends JetView {
    config() {
        const _ = this.app.getService("locale")._;
        let right_menu_button = {
            height: 95,
            rows: [
                {
                    //Кнопки сверху в правом меню-----------------------//
                    paddingY: 20,
                    cols: [
                        {},
                        {
                            view: "button",
                            width: 251,
                            height: 70,
                            label: _("service_service"),
                            css: "button_right_menu_top_1",
                            localId: "buttonService"
                        },
                        {
                            width: 30,
                        },
                        {
                            view: "button",
                            width: 251,
                            height: 70,
                            label: _("service_password"),
                            css: "button_right_menu_top_1",
                            localId: "buttonPassword"
                        },
                        {}
                    ]
                }
            ]
        };
        return right_menu_button;
    }

    init() {
        const _ = this.app.getService("locale")._;
        // Кнопка Сервис -------------------------------//
        let service = {
            view: "popup",
            id: "popService",
            css: "service_button",
            width: 400,//245
            height: 400,
            body: {
                view: "list",
                data: [
                    // {id: "updateFramework", location: "Обновить прошивку", name: ""},
                    {id: "resetLls", location: _("service_service_reset_sensor"), name: ""},
                    {id: "saveSettings", location: _("service_service_save_setting_file"), name: ""},
                    {id: "readSettings", location: _("service_service_read_setting_file"), name: ""},
                ],
                id: "list",
                template: "#name# - #location#",
                autoheight: true,
                select: true
            }
        };

        this.popService = this.ui(service);

        this.$$('buttonService').attachEvent("onItemClick", (id, e) => {
            console.log('click');
            this.popService.show(this.$$(id).getNode());
        });

        this.resetLlsWindow = this.ui(ResetLlsWindow);
        $$("list").attachEvent("onItemClick", (id, name, e) => {
            console.log("click");
            if (id == 'resetLls') {
                // this.resetLlsWindow.showWindow();
                this.resetLlsWindow.showWindow(llsModel);
            }

            if (id == 'updateFramework') {
                //todo: show update framework window
            }

            if (id == 'saveSettings') {
                fileSettingsModel.write(llsModel.currentLongData).then();
            }

            if (id == 'readSettings') {
                fileSettingsModel.read().then((settings)=>{
                    llsModel.newLongData = {...settings};
                    llsModel.getLongData().then();
                });
            }
        });

        this.passwordWindow = this.ui(PasswordWindow);
        this.$$("buttonPassword").attachEvent("onItemClick", (id, name, e) => {
            console.log("click");
            this.passwordWindow.showWindow(llsModel);
        });

        this.on(this.app, "app:calibrationSubview:startCalibrate", (type) => {
            this.$$('buttonService').disable();
            this.$$('buttonPassword').disable();
        });

        this.on(this.app, "app:calibrationSubview:finishCalibrate", () => {
            this.$$('buttonService').enable();
            this.$$('buttonPassword').enable();
        });

        if(configFile.theme == 'light'){
            webix.html.addCss( this.$$("buttonService").getNode(), "button_right_menu_top_1");
            webix.html.addCss( this.$$("buttonPassword").getNode(), "button_right_menu_top_1");
            webix.html.addCss( $$("popService").getNode(), "service_button");
        }
        if(configFile.theme == 'dark'){
            webix.html.addCss( this.$$("buttonService").getNode(), "button_right_menu_top_1_dark");
            webix.html.addCss( this.$$("buttonPassword").getNode(), "button_right_menu_top_1_dark");
            webix.html.addCss( $$("popService").getNode(), "service_button_dark");
        }
    }
}
