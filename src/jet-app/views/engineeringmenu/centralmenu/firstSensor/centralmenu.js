import {JetView} from "webix-jet";
import configFile from "../../../../config-app";
import GeneralSettings from "./generalsettings";
import Calibrationsettings from "./calibrationsettings";
import FiltrationSettings from "./filtaringSettings";
import ShowSaveSettings from "./showSaveSettings";

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
                    localId: "style_general_rows_1_one",
                    multiview: true,
                    value: 1,
                    height: 100,
                    options: [
                        {value: _("main_settings"), id: '11',},
                        {value: _("calibration"), id: '21'},
                        {value: _("filtering"), id: '31'},
                    ],
                    hidden:true,
                },
                {
                    animate: false,
                    view: "multiview",
                    localId: "multiview",
                    cells: [
                        {
                            id: '11',
                            rows: [
                                {
                                    id: "general",
                                    rows: [GeneralSettings],
                                },
                            ]
                        },
                        {
                            id: '21',
                            rows: [
                                {
                                    id: "calibration",
                                    rows: [Calibrationsettings],
                                },
                            ],
                        },
                        {
                            id: '31',
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


        // let show_save_settings ={
        //     view: "label",
        //     label: `<p style="position: relative; top: -20px;">${_("save_settings_text_show")}</p>`,
        //     height: 50,
        //     css: "show_save_settings",
        // };



        let body = {
            maxWidth: 1420,
            rows: [
                {
                    height: 20,
                },
                ShowSaveSettings,
                {
                    height: 10,
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
                this.$$('multiview').setValue("11");
            }
        );

        this.on(this.app, "app:setting:calibration", ()=>{
                this.$$('multiview').setValue("21");
            }
        );

        this.on(this.app, "app:setting:filtering", ()=>{
            this.$$('multiview').setValue("31");
            }
        );


        // this.$$("style_general_rows_1_one").attachEvent("onChange", (newValue, oldValue, config)=>{
        //     switch (newValue) {
        //         case "11":{
        //             this.app.callEvent("app:setting:general",[]);
        //             break;}
        //         case "21":{
        //             this.app.callEvent("app:setting:calibration", []);
        //             break;}
        //         case "31":{
        //             this.app.callEvent("app:setting:filtering", []);
        //             break;}
        //     }
        //     webix.message(
        //         `Value changed from ${oldValue} to ${newValue}. Source: ${config}`
        //     );
        // });
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

        // $$("general").attachEvent("onItemClick", (id)=>{
        //     // $$('generalSettings').show();
        //     console.log("click");
        //     this.app.callEvent("app:setting:general",[]);
        // });
        //
        // $$("calibration").attachEvent("onItemClick", (id)=>{
        //     // $$('calibrationSettings').show();
        //     console.log("click2");
        //     this.app.callEvent("app:setting:calibration", []);
        //
        //
        // });
        //
        // $$("filtering").attachEvent("onItemClick", (id)=>{
        //     // $$('filteringSettings').show();
        //     console.log("click3");
        //     this.app.callEvent("app:setting:filtering", []);
        // });
    }
}

// $$("general").attachEvent("onItemClick", (id)=>{
//     // $$('generalSettings').show();
//     console.log("test");
//     this.app.callEvent("app:setting:general",[]);
// });
//
// $$("calibration").attachEvent("onItemClick", (id)=>{
//     // $$('calibrationSettings').show();
//     this.app.callEvent("app:setting:calibration", []);
//
//
// });
//
// $$("filtering").attachEvent("onItemClick", (id)=>{
//     // $$('filteringSettings').show();
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
