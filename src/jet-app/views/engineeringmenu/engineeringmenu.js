import {JetView} from "webix-jet";
// import CentralMenu from "./centralmenu/centralmenu";
import RightMenu from "./rightmenu/one-sensor/rightmenu";
import LeftMenu from "./leftmenu/leftmenu";
// import llsModel from "../../models/lls-model";
import {llsModelOne} from "../../models/lls-test-models";
import PasswordWindow from "./windows/password";
import ContinueCalibrateWindow from "./windows/continuecalibrate";
import configFile from "../../config-app";
import PasswordInputWindow from "./windows/passwordinput";
import LlsNoConnectWindow from "./windows/llsnoconnect";
import TablePreviewWindow from "./windows/table-preview";
import SaveSettingNotificationWindow from "./windows/save-setting-notification";
import TwoSensor from "./centralmenu/twoSensor";
import RightTwoSensor from "./rightmenu/right-two-sensorr";

export default class EngineeringMenu extends JetView{
    config() {

        let body = {
            maxWidth: 1300,
            minWidth: 990,
            css: "style_body",
            id: "dark",
            cols: [
                LeftMenu,
                {
                    width: 10,
                },
                // CentralMenu,
                TwoSensor,
                {
                    width: 10,
                },
                // RightMenu,
                RightTwoSensor
            ]
        };

        return body;
    }


    destroy() {
        super.destroy();
        llsModelOne.clearListenerCommandError(this.listenerCommandError);
        llsModelOne.clearListenerIsDisconnect(this.listenerIsDisconnect);
    }

    init(){
        llsModelOne.checkPassword()
            .then(()=>{

            })
            .catch((status)=>{
                switch(status){
                    case 0x01:{
                        this.llsNoConnectWindow.showWindow(); //в случае ошибки передачи команды
                        break;
                    }
                    case 0x02:{
                        this.passwordInput.showWindow();
                        break;
                    }
                    default:{
                        this.llsNoConnectWindow.showWindow(); //в случае если датчик не подключен
                        break;
                    }
            }
            });

        llsModelOne.addListenerCommandError(this.listenerCommandError);
        llsModelOne.addListenerIsDisconnect(this.listenerIsDisconnect);

        this.passwordWindow = this.ui(PasswordWindow);
        this.continueWindow = this.ui(ContinueCalibrateWindow);
        this.passwordInput = this.ui(PasswordInputWindow);
        this.llsNoConnectWindow = this.ui(LlsNoConnectWindow);
        this.tablePreviewWindow = this.ui(TablePreviewWindow);
        this.saveSettingNotification = this.ui(SaveSettingNotificationWindow);

        this.on(this.app, "app:calibrationSettings:continueWindow", () => {
            this.continueWindow.showWindow();
        });

        this.on(this.app, "app:calibrationSettings:openTableFromFile", (table) => {
            this.tablePreviewWindow.showWindow(table);
        });

        this.on(this.app, "app:settings:setToLls", () => {
            this.saveSettingNotification.showWindow();
        });

        if(configFile.theme == 'light'){
            // webix.html.addCss( $$("rows_left_1").getNode(), "style_body");
            // webix.html.addCss( $$("rows_right_2").getNode(), "style_body");
            webix.html.addCss( $$("dark").getNode(), "style_body");
        }
        if(configFile.theme == 'dark'){
            // webix.html.addCss( $$("rows_left_1").getNode(), "style_body_dark");
            // webix.html.addCss( $$("rows_right_2").getNode(), "style_body_dark");
            webix.html.addCss( $$("dark").getNode(), "style_body_dark");
        }
    }

    listenerCommandError = (status)=> {
        switch (status) {
            case 0x00: {
                this.saveSettingNotification.showWindow();
                break;
            }
            case 0x01: {
                break;
            }
            case 0x02: {
                this.passwordWindow.showWindow();
                break;
            }
            default: {

            }
        }
    }

    listenerIsDisconnect = ()=>{
        this.llsNoConnectWindow.showWindow();
    }
}



