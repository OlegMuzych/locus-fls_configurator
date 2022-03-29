import {JetView} from "webix-jet";
import CentralMenu from "./centralmenu/centralmenu";
import RightMenu from "./rightmenu/rightmenu";
import LeftMenu from "./leftmenu/leftmenu";
import llsModel from "../../models/lls-model";
import PasswordWindow from "./windows/password";
import ContinueCalibrateWindow from "./windows/continuecalibrate";
import configFile from "../../config-app";
import PasswordInputWindow from "./windows/passwordinput";
import LlsNoConnectWindow from "./windows/llsnoconnect";

export default class EngineeringMenu extends JetView{
    config() {

        let body = {
            // view: "scrollview",
            // scroll: "y",
            // maxHeight: 1000,
            // css: "style_body",
            // id: "dark",
            // body: {
                cols:[
                    LeftMenu,
                    {
                        css: "style_body",
                        id:"rows_left_1",
                        width: 20,
                    },
                    CentralMenu,
                    {
                        css: "style_body",
                        id:"rows_right_2",
                        width: 25,
                    },
                    RightMenu,


                ],

            // }
        }

        return body;
    }


    destroy() {
        super.destroy();
        llsModel.clearListenerCommandError(this.listenerCommandError);
    }

    init(){
        llsModel.checkPassword()
            .then(()=>{

            })
            .catch((status)=>{
                switch(status){
                    case 0x01:{
                        this.llsNoConnectWindow.showWindow(); //в случае ошибки передачии команды
                        break;
                    }
                    case 0x02:{
                        this.passwordInput.showWindow();
                        break;
                    }
                    default:{
                        // this.llsNoConnectWindow.showWindow(); //в случае если датчик не поключен
                        this.passwordInput.showWindow();

                        break;
                    }
            }
            });

        llsModel.addListenerCommandError(this.listenerCommandError);

        this.passwordWindow = this.ui(PasswordWindow);
        this.continueWindow = this.ui(ContinueCalibrateWindow);
        this.passwordInput = this.ui(PasswordInputWindow);
        this.llsNoConnectWindow = this.ui(LlsNoConnectWindow);

        this.on(this.app, "app:calibrationSettings:continueWindow", () => {
            this.continueWindow.showWindow();
        });

        if(configFile.theme.color == 'white'){
            webix.html.addCss( $$("rows_left_1").getNode(), "style_body");
            webix.html.addCss( $$("rows_right_2").getNode(), "style_body");
        }
        if(configFile.theme.color == 'black'){
            webix.html.addCss( $$("rows_left_1").getNode(), "style_body_dark");
            webix.html.addCss( $$("rows_right_2").getNode(), "style_body_dark");
        }
    }

    listenerCommandError = (status)=>{
        if(status == 0x01){

        }
        if(status == 0x02){
            this.passwordWindow.showWindow();
        }
    }
}



