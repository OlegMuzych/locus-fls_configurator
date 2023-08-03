import {JetView} from "webix-jet";
import ErrorStatusOne from "./errorStatus-one";
import ErrorStatusTwo from "./errorStatus-two";

export default class ErrorStatusTwoSensor extends JetView {
    config() {
        return {
            rows: [
                {
                    localId:"firstView",
                    rows: [ErrorStatusOne]
                },
                {
                    localId:"secondView",
                    rows: [ErrorStatusTwo]
                }
            ]
        }
    }

    init(){
        this.$$("firstView").show();
        this.$$("secondView").hide();
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