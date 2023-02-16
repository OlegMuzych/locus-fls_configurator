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
            // maxHeight: 970,
            // minWidth: 530,
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
            width: 550,
            css: "rows_right",
            id: "rows_right_2",
            cols:[
                {

                },
                {
                    rows: [
                        {
                            rows: [
                                ServiceMenu,
                            ]
                        },
                        {
                            height: 40,
                        },
                        {
                            rows: [
                                StatusMenu,
                            ]
                        },
                        {
                            height: 40,
                        },
                        {
                            rows: [
                                myMultiview,
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
