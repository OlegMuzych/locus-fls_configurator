import {JetView} from "webix-jet";
import CentralMenu from "./centralmenu";
import RightMenu from "./rightmenu";
import LeftMenu from "./leftmenu";

export default class EngineeringMenu extends JetView{
    config(){

        let body = {
            cols: [LeftMenu, CentralMenu, RightMenu],
        }

        return body;
    }
}
