import {JetView} from "webix-jet";
import CalibrationsubviewOne from "./subview-one/calibrationsubview-one"
import FiltrationSubViewOne from "./subview-one/filteringsubview-one"
import FullemptysubviewOne from "./subview-one/fullemptysubview-one"
import CalibrationsubviewTwo from "./subview-two/calibrationsubview-two";
import FullemptysubviewTwo from "./subview-two/fullemptysubview-two";
import FiltrationSubViewTwo from "./subview-two/filteringsubview-two";
import configFile from "../../../../../config-app";
export default class SubviewsTwoSensor extends JetView {

    config() {
        const multiviewOne = {
            view: "scrollview",
            scroll: "y",
            id: "rows_right_body",
            css: "rows_right",
            body: {
                view: "multiview",
                cells: [
                    {
                        id: 'calibrationSubView', rows: [CalibrationsubviewOne],
                    },
                    {
                        id: 'fullEmptySubView', rows: [FullemptysubviewOne],
                    },
                    {
                        id: 'filteringSubView', rows: [FiltrationSubViewOne],
                    }
                ],
                animate: false,
            }
        }
        const multiviewTwo = {
            view: "scrollview",
            scroll: "y",
            id: "rows_right_body_two",
            css: "rows_right",
            body: {
                view: "multiview",
                cells: [
                    {
                        id: 'calibrationSubViewTwo', rows: [CalibrationsubviewTwo],
                    },
                    {
                        id: 'fullEmptySubViewTwo', rows: [FullemptysubviewTwo],
                    },
                    {
                        id: 'filteringSubViewTwo', rows: [FiltrationSubViewTwo],
                    }
                ],

                animate: false,
            }}
        return {
            rows: [
                {
                    localId:"firstView",
                    rows: [multiviewOne]
                },
                {
                    localId:"secondView",
                    rows: [multiviewTwo]
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

        this.on(this.app, "app:setting:general", ()=>{
                console.log('Click1');
                $$('fullEmptySubView').show();
                $$('fullEmptySubViewTwo').show();
            }
        );

        this.on(this.app, "app:setting:filtering", ()=>{
                console.log('Click2');
                $$('filteringSubView').show();
                $$('filteringSubViewTwo').show();
            }
        );

        this.on(this.app, "app:setting:calibration", ()=>{
                console.log('Click3');
                $$('calibrationSubView').show();
                $$('calibrationSubViewTwo').show();
            }
        );

        $$('fullEmptySubView').show();
        $$('fullEmptySubViewTwo').show();

        if(configFile.theme == 'light'){
            webix.html.addCss( $$("rows_right_body").getNode(), "rows_right");
            webix.html.addCss( $$("rows_right_body_two").getNode(), "rows_right");
        }
        if(configFile.theme == 'dark'){
            webix.html.addCss( $$("rows_right_body").getNode(), "rows_right_dark");
            webix.html.addCss( $$("rows_right_body_two").getNode(), "rows_right_dark");
        }
    }
}
