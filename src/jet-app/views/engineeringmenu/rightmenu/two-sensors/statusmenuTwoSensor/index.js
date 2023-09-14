import {JetView} from "webix-jet";
import StatusMenuOne from "./statusmenu-one";
import StatusMenuTwo from "./statusmenu-two";

export default class StatusMenuTwoSensor extends JetView{
    config(){
        return{
            rows:[
                StatusMenuOne,
                StatusMenuTwo
            ]
        }
    }
}