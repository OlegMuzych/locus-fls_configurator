import {JetView} from "webix-jet";
// import CentralMenu from "./centralmenu";
import globalVariable from "../../../global-variable-app";
import RightMenu from "./one-sensor/rightmenu";
export default class RightTwoSensor extends JetView {
    config() {
        return {
            rows:[
                {
                    localId: "oneSensor",
                    rows:[RightMenu]
                },
                {
                    localId: "twoSensor",
                    rows:[]
                },
                // RightMenu,
            ]
        }
    };

    init() {
        if(globalVariable.twoSensorMode){
            this.$$("oneSensor").define({hidden:false});
            this.$$("twoSensor").define({hidden:true});
        }else{
            this.$$("oneSensor").define({hidden:true});
            this.$$("twoSensor").define({hidden:false});
        }
    }
}