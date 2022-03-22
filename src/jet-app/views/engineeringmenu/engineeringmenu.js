import {JetView} from "webix-jet";
import CentralMenu from "./centralmenu/centralmenu";
import RightMenu from "./rightmenu/rightmenu";
import LeftMenu from "./leftmenu/leftmenu";
import llsModel from "../../models/lls-model";
import PasswordWindow from "./windows/password";
import PasswordWindow2 from "./windows/password-2";
import ContinueCalibrateWindow from "./windows/continuecalibrate";
import configFile from "../../config-app";

export default class EngineeringMenu extends JetView{
    config() {

        let body = {
            view: "scrollview",
            scroll: "y",
            maxHeight: 1000,
            css: "style_body",
            id: "dark",
            body: {
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

            }
        }

        return body;
    }


    destroy() {
        super.destroy();
        llsModel.clearListenerCommandError(this.listenerCommandError);
    }

    init(){
        llsModel.addListenerCommandError(this.listenerCommandError);

        this.passwordWindow = this.ui(PasswordWindow);

        this.continueWindow = this.ui(ContinueCalibrateWindow);

        this.on(this.app, "app:calibrationSettings:continueWindow", () => {
            this.continueWindow.showWindow();
        });


        // if(configFile.theme.color == 'white'){
        //     webix.html.addCss( $$("rows_left_1").getNode(), "style_body");
        //     webix.html.addCss( $$("rows_left_2").getNode(), "style_body");
        // }
        // if(configFile.theme.color == 'black'){
        //     webix.html.addCss( $$("rows_left_1").getNode(), "style_body_dark");
        //     webix.html.addCss( $$("rows_right_2").getNode(), "style_body_dark");
        //
        // }

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



