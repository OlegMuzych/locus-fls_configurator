import {JetView} from "webix-jet";
// import {CalibrationsubviewOne} from "./subview-one/calibrationsubview-one"
import FiltrationSubViewOne from "./subview-one/filteringsubview-one"
import FullemptysubviewOne from "./subview-one/fullemptysubview-one"
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
                    // {
                    //     // id: 'calibrationSubView', rows: [ColibrationsubviewOne],
                    // },
                    {
                        id: 'fullEmptySubView', rows: [FiltrationSubViewOne],
                    },
                    {
                        id: 'filteringSubView', rows: [FullemptysubviewOne],
                    }
                ],
                animate: false,
            }
        }
        // const multiviewTwo = {view: "scrollview",
        //     scroll: "y",
        //     id: "rows_right_body",
        //     css: "rows_right",
        //     body: {
        //         view: "multiview",
        //         // cells: [
        //         //     {
        //         //         id: 'calibrationSubView', rows: [CalibrationsubviewOne],
        //         //     },
        //         //     {
        //         //         id: 'fullEmptySubView', rows: [FullemptysubviewOne],
        //         //     },
        //         //     {
        //         //         id: 'filteringSubView', rows: [FiltrationSubView],
        //         //     }
        //         // ],
        //
        //         animate: false,
        //     }}
        return {
            rows: [
                {
                    localId:"firstView",
                    rows: [multiviewOne]
                },
                {
                    localId:"secondView",
                    // rows: [multiviewTwo]
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

        this.on(this.app, "app:setting:general", ()=>{
                console.log('Click1');
                $$('fullEmptySubView').show();
            }
        );

        this.on(this.app, "app:setting:filtering", ()=>{
                console.log('Click2');
                $$('filteringSubView').show();
            }
        );

        // this.on(this.app, "app:setting:calibration", ()=>{
        //         console.log('Click3');
        //         $$('calibrationSubView').show();
        //     }
        // );

        $$('fullEmptySubView').show();
    }
}