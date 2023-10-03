import {JetView} from "webix-jet";
// import CentralMenu from "./centralmenu/centralmenu";
import RightMenu from "./rightmenu/one-sensor/rightmenu";
import LeftMenu from "./leftmenu/leftmenu";
// import llsModel from "../../models/lls-model";
import {llsModelOne, llsModelTwo} from "../../models/lls-test-models";
import PasswordWindow from "./windows/password";
import ContinueCalibrateWindow from "./windows/continuecalibrate";
import configFile from "../../config-app";
import PasswordInputWindow from "./windows/passwordinput";
import LlsNoConnectWindow from "./windows/llsnoconnect";
import TablePreviewWindow from "./windows/table-preview";
import SaveSettingNotificationWindow from "./windows/save-setting-notification";
import TwoSensor from "./centralmenu/twoSensor";
import RightTwoSensor from "./rightmenu/right-two-sensorr";
import globalVariable from "../../global-variable-app";
import PasswordInputTwoWindow from "./windows/passwordinput-two";
import LeftMenuTwo from "./leftmenu/leftmenu-two";

export default class EngineeringMenu extends JetView{
    config() {

        let body = {
            maxWidth: 1300,
            minWidth: 990,
            css: "style_body",
            id: "dark",
            cols: [
                LeftMenu,
                LeftMenuTwo,
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
        llsModelOne.clearListenerCommandError(this.listenerCommandErrorOne);
        llsModelTwo.clearListenerCommandError(this.listenerCommandErrorTwo);
        llsModelOne.clearListenerIsDisconnect(this.listenerIsDisconnectOne);
        llsModelOne.clearListenerIsDisconnect(this.listenerIsDisconnectTwo);
    }

    init(){
        if(globalVariable.twoSensorMode === false){
            llsModelOne.checkPassword()
                .then(()=>{

                })
                .catch((status)=>{
                    switch(status){
                        case 0x01:{
                            this.llsNoConnectWindow.showWindow("1"); //в случае ошибки передачи команды
                            break;
                        }
                        case 0x02:{
                            this.passwordInput.showWindow(llsModelOne);
                            break;
                        }
                        default:{
                            this.llsNoConnectWindow.showWindow("1"); //в случае если датчик не подключен
                            break;
                        }
                    }
                });
        }else{
            llsModelOne.checkPassword()
                .then(()=>{

                })
                .catch((status)=>{
                    switch(status){
                        case 0x01:{
                            this.llsNoConnectWindow.showWindow("1"); //в случае ошибки передачи команды
                            break;
                        }
                        case 0x02:{
                            this.passwordInput.showWindow(llsModelOne, "LLS 1");
                            break;
                        }
                        default:{
                            this.llsNoConnectWindow.showWindow("1"); //в случае если датчик не подключен
                            break;
                        }
                    }
                });

            llsModelTwo.checkPassword()
                .then(()=>{

                })
                .catch((status)=>{
                    switch(status){
                        case 0x01:{
                            this.llsNoConnectWindow.showWindow('2'); //в случае ошибки передачи команды
                            break;
                        }
                        case 0x02:{
                            this.passwordInputTwo.showWindow(llsModelTwo, "LLS 2");
                            break;
                        }
                        default:{
                            this.llsNoConnectWindow.showWindow("2"); //в случае если датчик не подключен
                            break;
                        }
                    }
                });
        }


        llsModelOne.addListenerCommandError(this.listenerCommandErrorOne);
        llsModelOne.addListenerIsDisconnect(this.listenerIsDisconnectOne);

        llsModelTwo.addListenerCommandError(this.listenerCommandErrorTwo);
        llsModelTwo.addListenerIsDisconnect(this.listenerIsDisconnectTwo);

        this.passwordWindow = this.ui(PasswordWindow);
        this.continueWindow = this.ui(ContinueCalibrateWindow);
        this.passwordInput = this.ui(PasswordInputWindow);
        this.passwordInputTwo = this.ui(PasswordInputTwoWindow);
        this.llsNoConnectWindow = this.ui(LlsNoConnectWindow);
        this.tablePreviewWindow = this.ui(TablePreviewWindow);
        this.saveSettingNotification = this.ui(SaveSettingNotificationWindow);

        this.on(this.app, "app:calibrationSettings:continueWindow", () => {
            this.continueWindow.showWindow();
        });

        this.on(this.app, "app:calibrationSettings:openTableFromFile", (table, llsModel) => {
            this.tablePreviewWindow.showWindow(table, llsModel);
        });

        this.on(this.app, "app:settings:setToLls", () => {
            // this.saveSettingNotification.showWindow();
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

    listenerCommandErrorOne = (status)=> {
        switch (status) {
            case 0x00: {
                // this.saveSettingNotification.showWindow();
                this.app.callEvent('app:settings:setToLls', []);
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

    listenerCommandErrorTwo = (status)=> {
        switch (status) {
            case 0x00: {
                // this.saveSettingNotification.showWindow();
                this.app.callEvent('app:settings:setToLls', []);
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

    listenerIsDisconnectOne = ()=>{
        this.llsNoConnectWindow.showWindow('1');
    }
    listenerIsDisconnectTwo = ()=>{
        this.llsNoConnectWindow.showWindow('2');
    }
}



