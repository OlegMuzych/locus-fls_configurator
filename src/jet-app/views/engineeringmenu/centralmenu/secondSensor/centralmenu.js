import {JetView} from "webix-jet";
// import configFile from "../../../../../config-app";
import configFile from "../../../../config-app";
import GeneralSettings from "./generalsettings";
import Calibrationsettings from "./calibrationsettings";
import FiltrationSettings from "./filtaringSettings";

// import globalVariable from "../../../global-variable-app";

export default class CentralMenuSecond extends JetView {
    config() {
        const _ = this.app.getService("locale")._;
        let myMultiview ={
            css: "central_cols_button",
            id: "central_cols_button",
            rows: [
                {
                    view: "segmented",
                    css: "central_cols_button",
                    localId: "style_general_rows_1_two",
                    multiview: true,
                    value: 1,
                    height: 100,
                    options: [
                        {value: _("main_settings"), id: '1',},
                        {value: _("calibration"), id: '2'},
                        {value: _("filtering"), id: '3'},
                    ],
                    hidden: true,
                },
                {
                    localId: "multiview",
                    animate: false,
                    cells: [
                        {
                            id: '1',
                            rows: [
                                {
                                    // id: "general",
                                    rows: [GeneralSettings],
                                },
                            ]
                        },
                        {
                            id: '2',
                            rows: [
                                {
                                    // id: "calibration",
                                    rows: [Calibrationsettings],
                                },
                            ]

                        },
                        {
                            id: '3',
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
        this.on(this.app, "app:setting:general", ()=>{
                this.$$('multiview').setValue("1");
            }
        );

        this.on(this.app, "app:setting:calibration", ()=>{
                this.$$('multiview').setValue("2");
            }
        );

        this.on(this.app, "app:setting:filtering", ()=>{
                this.$$('multiview').setValue("3");
            }
        );

        // this.$$("style_general_rows_1_two").attachEvent("onChange", (newValue, oldValue, config)=>{
        //     switch (newValue) {
        //         case "1":{
        //             this.app.callEvent("app:setting:general",[]);
        //             break;}
        //         case "2":{
        //             this.app.callEvent("app:setting:calibration", []);
        //             break;}
        //         case "3":{
        //             this.app.callEvent("app:setting:filtering", []);
        //             break;}
        //     }
        //     webix.message(
        //         `Value changed from ${oldValue} to ${newValue}. Source: ${config}`
        //     );
        // });

        // if (configFile.theme == 'light') {
        //     webix.html.addCss($$("style_general_rows_1").getNode(), "central_cols_button");
        //     webix.html.addCss($$("central_cols_button").getNode(), "central_cols_button");
        //
        //     $$("style_general_rows_1").refresh();
        // }
        // if (configFile.theme == 'dark') {
        //     webix.html.addCss($$("style_general_rows_1").getNode(), "central_cols_button_dark");
        //     webix.html.addCss($$("central_cols_button").getNode(), "central_cols_button_dark");
        //
        //     $$("style_general_rows_1").refresh();
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