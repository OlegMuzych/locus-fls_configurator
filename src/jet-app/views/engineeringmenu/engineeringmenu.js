import {JetView} from "webix-jet";
import CentralMenu from "./centralmenu/centralmenu";
import RightMenu from "./rightmenu/rightmenu";
import LeftMenu from "./leftmenu/leftmenu";
import llsModel from "../../models/lls-model";
import PasswordWindow from "./windows/password";
import PasswordWindow2 from "./windows/password-2";
import ContinueCalibrateWindow from "./windows/continuecalibrate";

export default class EngineeringMenu extends JetView{
    config() {

        let body = {
            view: "scrollview",
            scroll: "y",
            maxHeight: 1000,
            css: "style_body",
            id: "dark",
            body: {
                cols: [LeftMenu, CentralMenu, RightMenu],
            }
        }

        return body;s
    }


    destroy() {
        super.destroy();
        llsModel.clearListenerCommandError(this.listenerCommandError);
    }

    init(){
        llsModel.addListenerCommandError(this.listenerCommandError);

        this.passwordWindow = this.ui(PasswordWindow);

        this.continueWindow = this.ui(ContinueCalibrateWindow);

        this.on(this.app, "app:calibrationsubview:continue", () => {
            this.continueWindow.showWindow();
        });
    }

    listenerCommandError = (status)=>{
        if(status == 0x01){

        }
        if(status == 0x02){
            this.passwordWindow.showWindow();
        }
    }
}
