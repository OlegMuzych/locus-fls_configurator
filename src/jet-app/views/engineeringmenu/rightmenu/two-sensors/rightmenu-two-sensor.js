import {JetView} from "webix-jet";
// import StatusMenu from "./statusmenu";
// import ServiceMenu from "./servicemenu";
// import errorStatus from "./errorStatus";
//
// import CalibrationsubviewOne from "./subviews/calibrationsubview";
// import FullemptysubviewOne from "./subviews/fullemptysubview";
// import configFile from "../../../../config-app";
// import FiltrationSubView from "./subviews/filteringsubview";
import StatusMenuTwoSensor from "./statusmenuTwoSensor";
import ServiceMenuTwoSensor from "./servicemenuTwoSensor";
// import ErrorStatusTwo from "./errorStatusTwoSensor/errorStatus-two";
import ErrorStatusTwoSensor from "./errorStatusTwoSensor";
import SubviewsTwoSensor from "./subviewsTwoSensor";
import configFile from "../../../../config-app";

export default class RightmenuTwoSensor extends JetView{
    config(){
        let body = {
            width: 570,
            css: "rows_right",
            id: "rows_right_2",
            cols:[
                {

                },
                {
                    rows: [
                        {
                            rows: [
                                // ServiceMenu,
                                ServiceMenuTwoSensor
                            ]
                        },
                        {
                            height: 1,
                        },
                        {
                            rows:[
                                // errorStatus,
                                // ErrorStatusTwo
                                ErrorStatusTwoSensor
                            ]
                        },
                        {
                            height: 8,
                        },
                        {
                            rows: [
                                // StatusMenu,
                                StatusMenuTwoSensor
                            ]
                        },
                        {
                            height: 1,
                        },
                        {
                            height: 30,
                        },
                        {
                            rows: [
                                // myMultiview,
                                SubviewsTwoSensor,
                            ]
                        },
                        {
                            height: 1,
                        },
                    ]
                },
                {
                  width: 8,
                }
            ]

        }

        return body;
    }
    init(){
        // this.on(this.app, "app:setting:general", ()=>{
        //         console.log('Click');
        //         $$('fullEmptySubView').show();
        //     }
        // );
        //
        // this.on(this.app, "app:setting:filtering", ()=>{
        //         $$('filteringSubView').show();
        //     }
        // );
        //
        // this.on(this.app, "app:setting:calibration", ()=>{
        //         $$('calibrationSubView').show();
        //     }
        // );
        //
        // $$('fullEmptySubView').show();
        //
        if(configFile.theme == 'light'){
            webix.html.addCss( $$("rows_right_2").getNode(), "rows_right_dark");
            webix.html.addCss( $$("rows_right_body").getNode(), "rows_right");
        }
        if(configFile.theme == 'dark'){
            webix.html.addCss( $$("rows_right_2").getNode(), "rows_right_dark");
            webix.html.addCss( $$("rows_right_body").getNode(), "rows_right_dark");
        }
    }
}
