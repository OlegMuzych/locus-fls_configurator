import {JetView} from "webix-jet";
import CentralMenu from "./centralmenu/centralmenu";
import RightMenu from "./rightmenu/rightmenu";
import LeftMenu from "./leftmenu/leftmenu";

export default class EngineeringMenu extends JetView{
    config(){

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

        return body;
    }
}
