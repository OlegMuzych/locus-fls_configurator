import {JetView} from "webix-jet";
import StatusMenu from "./statusmenu";
import ServiceMenu from "./servicemenu";

import CalibrationSubView from "./subviews/calibrationsubview";
import FullEmptySubView from "./subviews/fullemptysubview";
import configFile from "../../../config-app";
import FiltrationSubView from "./subviews/filteringsubview";

export default class RightMenu extends JetView{
    config(){
        let myMultiview = {
            view: "scrollview",
            scroll: "y",
            maxHeight: 970,
            minWidth: 530,
            id: "rows_right_body",
            css: "rows_right",
            body: {
                view: "multiview",
                cells: [
                    {
                        id: 'calibrationSubView', rows: [CalibrationSubView],
                    },
                    {
                        id: 'fullEmptySubView', rows: [FullEmptySubView],
                    },
                    {
                        id: 'filteringSubView', rows: [FiltrationSubView],
                    }
                ],

                animate: false,
            }
        };

        let body = {
            css: "rows_right",
            id: "rows_right_2",
            cols:[
                {
                    minWidth: 25,
                    maxWidth: 320,
                },
                {
                    rows: [
                        {
                            rows: [
                                ServiceMenu,
                            ]
                        },
                        {
                            height: 50,
                        },
                        {
                            rows: [
                                StatusMenu,
                            ]
                        },
                        {
                            height: 20,
                        },
                        {
                            rows: [
                                myMultiview,
                            ]
                        },
                        {
                            height: 1,
                        },
                        {
                            rows: [
                                //right_menu_filter
                            ]
                        },
                        {
                            rows: [
                                // right_menu_calibration,
                                // right_menu_calibration_setup,
                                // right_menu_calibration_drain_2,
                                // fuel_filling,
                                // fuel_filling_2,
                            ]
                        },
                    ]
                },
                {
                    width: 10,
                }
            ]

        }

        return body;
    }
    init(){
        this.on(this.app, "app:setting:general", ()=>{
                console.log('Click');
                $$('fullEmptySubView').show();
            }
        );

        this.on(this.app, "app:setting:filtering", ()=>{
                $$('filteringSubView').show();
            }
        );

        this.on(this.app, "app:setting:calibration", ()=>{
                $$('calibrationSubView').show();
            }
        );

        $$('fullEmptySubView').show();

        if(configFile.theme == 'light'){
            webix.html.addCss( $$("rows_right_2").getNode(), "rows_right");
            webix.html.addCss( $$("rows_right_body").getNode(), "rows_right");
        }
        if(configFile.theme == 'dark'){
            webix.html.addCss( $$("rows_right_2").getNode(), "rows_right_dark");
            webix.html.addCss( $$("rows_right_body").getNode(), "rows_right_dark");
        }
    }
}
