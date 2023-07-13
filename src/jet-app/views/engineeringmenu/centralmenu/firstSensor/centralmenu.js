import {JetView} from "webix-jet";
// import configFile from "../../../../../config-app";
import configFile from "../../../../config-app";
import GeneralSettings from "./generalsettings";
import Calibrationsettings from "./calibrationsettings";
import FiltrationSettings from "./filtaringSettings";

// import globalVariable from "../../../global-variable-app";

export default class CentralMenuFirst extends JetView {
    config() {
        const _ = this.app.getService("locale")._;
        let myMultiview ={
            css: "central_cols_button",
            id: "central_cols_button_one",
            rows: [
                {
                    view: "segmented",
                    css: "central_cols_button_one",
                    id: "style_general_rows_1_one",
                    multiview: true,
                    value: 1,
                    height: 100,
                    options: [
                        {value: _("main_settings"), id: '11',},
                        {value: _("calibration"), id: '21'},
                        {value: _("filtering"), id: '31'},
                    ],
                },
                {
                    animate: false,
                    cells: [
                        {
                            id: '11',
                            rows: [
                                {
                                    // id: "general",
                                    rows: [GeneralSettings],
                                },
                            ]
                        },
                        {
                            id: '21',
                            rows: [
                                {
                                    // id: "calibration",
                                    rows: [Calibrationsettings],
                                },
                            ]

                        },
                        {
                            id: '31',
                            rows: [
                                {
                                    // id: "filtering",
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
                // TwoSensor,
                {
                    height: 20,
                },
                myMultiview
            ],
        }

        return body;

    }

    init() {
        // if (configFile.theme == 'light') {
        //     webix.html.addCss($$("style_general_rows_1_one").getNode(), "central_cols_button");
        //     webix.html.addCss($$("central_cols_button_one").getNode(), "central_cols_button");
        //
        //     $$("style_general_rows_1_one").refresh();
        // }
        // if (configFile.theme == 'dark') {
        //     webix.html.addCss($$("style_general_rows_1_one").getNode(), "central_cols_button_dark");
        //     webix.html.addCss($$("central_cols_button_one").getNode(), "central_cols_button_dark");
        //
        //     $$("style_general_rows_1_one").refresh();
        // }
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