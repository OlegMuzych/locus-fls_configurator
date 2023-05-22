import {JetView} from "webix-jet";
import GeneralSettings from "./generalsettings";
import Calibrationsettings from "./calibrationsettings";
import FiltrationSettings from "./filtaringSettings";
import configFile from "../../../config-app";
export default class CentralMenu extends JetView{
    config(){
        const _ = this.app.getService("locale")._;

        // let central_menu_button = {
        //     paddingY: 0,
        //     rows: [
        //         {
        //             css: "central_cols_button",
        //             id: "central_cols_button",
        //             cols: [
        //                 {
        //                     view: "button",
        //                     label: _("main_settings"),
        //                     height: 100,
        //                     css: "button_central_menu",
        //                     id: "general",
        //                     value: "Save",
        //                 },
        //                 {
        //                     view: "button",
        //                     label: _("calibration"),
        //                     height: 100,
        //                     css: "button_central_menu",
        //                     id: "calibration",
        //                     value: "Save",
        //                 },
        //                 {
        //                     view: "button",
        //                     label: _("filtering"),
        //                     height: 100,
        //                     css: "button_central_menu",
        //                     id: "filtering",
        //                     value: "Save",
        //                 },
        //             ]
        //         },
        //     ]
        // };
        // let central_menu_button = {
        //     view: "tabview",
        //     cells:[
        //         {
        //             // header: "List",
        //             body: {
        //                 view: "button",
        //                 label: _("main_settings"),
        //                 height: 100,
        //                 // css: "button_central_menu",
        //                 id: "general",
        //                 value: "Save",
        //                 select:true,
        //             }
        //           },
        //         {
        //             view: "button",
        //             label: _("calibration"),
        //             height: 100,
        //             // css: "button_central_menu",
        //             id: "calibration",
        //             value: "Save",
        //             select:true,
        //         },
        //         {
        //             view: "button",
        //             label: _("filtering"),
        //             height: 100,
        //             // css: "button_central_menu",
        //             id: "filtering",
        //             value: "Save",
        //             select:true,
        //         },
        //
        //         ]
        //
        // };



        let myMultiview = {
            css:"central_cols_button",
            rows:[
                {
                    view: "segmented",
                    css:"central_cols_button",
                    id:"style_general_rows_1",
                    multiview:true,
                    value:1,
                    height: 100,
                    options:[
                        {value: _("main_settings"), id: '1',},
                        {value: _("calibration"), id: '2'},
                        {value: _("filtering"), id: '3'},
                    ],
                },

                {
                    cells: [

                        {
                            id: '1',
                            rows: [
                                {
                                    id: "general",
                                    rows: [GeneralSettings],
                                },
                            ]
                        },
                        {
                            id: '2',
                            rows: [
                                {
                                    id: "calibration",
                                    rows: [Calibrationsettings],
                                },
                            ]

                        },
                        {
                            id: '3',
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
        }

        let body = {
            maxWidth: 1420,
            rows: [
                // central_menu_button,
                myMultiview
            ],
        }

        return body;
    }

    init(){

        // $$("general_1").attachEvent("onItemClick", (id)=>{
        //     $$('generalSettings').show();
        //     this.app.callEvent("app:setting:general",[]);
        // });
        //
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



        if(configFile.theme == 'light'){
            // webix.html.addCss( $$("general").getNode(), "button_central_menu");
            // webix.html.addCss( $$("calibration").getNode(), "button_central_menu");
            // webix.html.addCss( $$("filtering").getNode(), "button_central_menu");
            webix.html.addCss( $$("style_general_rows_1").getNode(), "central_cols_button");
        }
        if(configFile.theme == 'dark'){
            // webix.html.addCss( $$("general").getNode(), "button_central_menu_dark");
            // webix.html.addCss( $$("calibration").getNode(), "button_central_menu_dark");
            // webix.html.addCss( $$("filtering").getNode(), "button_central_menu_dark");
            webix.html.addCss( $$("style_general_rows_1").getNode(), "central_cols_button_dark");
        }
    }

}
