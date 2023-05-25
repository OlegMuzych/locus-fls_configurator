import {JetView} from "webix-jet";
import configFile from "../../../config-app";
import GeneralSettings from "./generalsettings";
import Calibrationsettings from "./calibrationsettings";
import FiltrationSettings from "./filtaringSettings";
import TwoSensor from "./twoSensor";

import globalVariable from "../../../global-variable-app";

export default class CentralMenu extends JetView {
    config() {
        const _ = this.app.getService("locale")._;


        let myMultiview ={
            css: "central_cols_button",
            id: "central_cols_button",
            rows: [
                {
                    view: "segmented",
                    css: "central_cols_button",
                    id: "style_general_rows_1",
                    multiview: true,
                    value: 1,
                    height: 100,
                    options: [
                        {value: _("main_settings"), id: 'button_1',},
                        {value: _("calibration"), id: 'button_2'},
                        {value: _("filtering"), id: 'button_3'},
                    ],
                },
                {
                    animate: false,
                    cells: [
                        {
                            id: 'button_1',
                            rows: [
                                {
                                    id: "general",
                                    rows: [GeneralSettings],
                                },
                            ]
                        },
                        {
                            id: 'button_2',
                            rows: [
                                {
                                    id: "calibration",
                                    rows: [Calibrationsettings],
                                },
                            ]

                        },
                        {
                            id: 'button_3',
                            rows: [
                                {
                                    id: "filtering",
                                    rows: [FiltrationSettings],
                                }
                            ]
                        },
                    ],
                }

            ]

        };


        let body = {
            maxWidth: 1420,
            rows: [
                {
                    height: 20,
                },
                TwoSensor,
                {
                    height: 20,
                },
                myMultiview
            ],
        }

        return body;

    }

    init() {


        $$("style_general_rows_1").attachEvent("onChange", (newValue, oldValue, config)=>{
            // webix.message(newValue);
            switch(newValue){
                case "button_1":{
                    this.app.callEvent("app:setting:general",[]);
                    break;
                }
                case "button_2":{
                    this.app.callEvent("app:setting:calibration",[]);
                    break;
                }
                case "button_3":{
                    this.app.callEvent("app:setting:filtering",[]);
                    break;
                }
            }
        });



        if (configFile.theme == 'light') {
            webix.html.addCss($$("style_general_rows_1").getNode(), "central_cols_button");
            webix.html.addCss($$("central_cols_button").getNode(), "central_cols_button");

            $$("style_general_rows_1").refresh();

        }
        if (configFile.theme == 'dark') {
            webix.html.addCss($$("style_general_rows_1").getNode(), "central_cols_button_dark");
            webix.html.addCss($$("central_cols_button").getNode(), "central_cols_button_dark");

            $$("style_general_rows_1").refresh();

        }
    }
}

// $$("general_1").attachEvent("onItemClick", (id)=>{
//     $$('generalSettings').show();
//     this.app.callEvent("app:setting:general",[]);
// });
// //
// $$("calibration_2").attachEvent("onItemClick", (id)=>{
//     $$('calibrationSettings').show();
//     this.app.callEvent("app:setting:calibration", []);
//
//
// });
//
// $$("filtering_3").attachEvent("onItemClick", (id)=>{
//     $$('filteringSettings').show();
//     this.app.callEvent("app:setting:filtering", []);
// });
//
// this.on(this.app, "app:continuecalibratewindow:continueCalibrate", () => {
//     $$('calibrationSettings').show();
//     this.app.callEvent("app:setting:calibration", []);
// });
//
// this.on(this.app, "app:calibrationSubview:startCalibrate", (type) => {
//     $$('general').disable();
//     $$('calibration').disable();
//     $$('filtering').disable();
// });
//
// this.on(this.app, "app:calibrationSubview:finishCalibrate", () => {
//     $$('general').enable();
//     $$('calibration').enable();
//     $$('filtering').enable();
// });