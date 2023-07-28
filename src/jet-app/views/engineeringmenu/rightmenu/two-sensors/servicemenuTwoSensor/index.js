import {JetView} from "webix-jet";
import ServiceMenuOne from "./servicemenu-one";
import ServiceMenuTwo from "./servicemenu-two";

export default class ServicemenuTwoSensor extends JetView {
    config() {
        return {
            rows: [
                {
                    localId:"firstView",
                    rows: [ServiceMenuOne]
                },
                {
                    localId:"secondView",
                    rows: [ServiceMenuTwo]
                }
            ]
        }
    }

    init(){
        this.on(this.app, "app:select_sensor:number", (value) => {
            switch(value){
                case "first": {
                    this.$$("firstView").show();
                    this.$$("secondView").hide();
                    break;
                }
                case "second": {
                    this.$$("firstView").hide();
                    this.$$("secondView").show();
                    break;
                }
            }
        });
    }
}