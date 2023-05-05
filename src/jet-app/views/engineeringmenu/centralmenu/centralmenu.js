import {JetView} from "webix-jet";
import GeneralSettings from "./generalsettings";
import Calibrationsettings from "./calibrationsettings";
import FiltrationSettings from "./filtaringSettings";
import configFile from "../../../config-app";
export default class CentralMenu extends JetView{
    config(){
        const _ = this.app.getService("locale")._;

        let central_menu_button = {
            paddingY: 0,
            rows: [
                {
                    css: "central_cols_button",
                    id: "central_cols_button",
                    cols: [
                        {
                            view: "button",
                            label: _("main_settings"),
                            height: 100,
                            css: "button_central_menu",
                            id: "general",
                            value: "Save",
                        },
                        {
                            view: "button",
                            label: _("calibration"),
                            height: 100,
                            css: "button_central_menu",
                            id: "calibration",
                            value: "Save",
                        },
                        {
                            view: "button",
                            label: _("filtering"),
                            height: 100,
                            css: "button_central_menu",
                            id: "filtering",
                            value: "Save",
                        },
                    ]
                },
            ]
        };

        let myMultiview = {
            view: "multiview",
            css:"style_general_rows",
            id:"style_general_rows_1",
            cells: [
                {
                    id: 'generalSettings', rows: [GeneralSettings],
                },
                {
                    id:"calibrationSettings", rows: [Calibrationsettings],
                },
                {
                    id:"filteringSettings", rows: [FiltrationSettings],
                },
            ],
            animate: false,
        }

        let body = {
            maxWidth: 1420,
            rows: [
                central_menu_button,
                myMultiview
            ],
        }

        return body;
    }

    init(){
        $$("general").attachEvent("onItemClick", (id)=>{
            $$('generalSettings').show();
            this.app.callEvent("app:setting:general",[]);
        });

        $$("calibration").attachEvent("onItemClick", (id)=>{
            $$('calibrationSettings').show();
            this.app.callEvent("app:setting:calibration", []);


        });

        $$("filtering").attachEvent("onItemClick", (id)=>{
            $$('filteringSettings').show();
            this.app.callEvent("app:setting:filtering", []);
        });

        this.on(this.app, "app:continuecalibratewindow:continueCalibrate", () => {
            $$('calibrationSettings').show();
            this.app.callEvent("app:setting:calibration", []);
        });

        this.on(this.app, "app:calibrationSubview:startCalibrate", (type) => {
            $$('general').disable();
            $$('calibration').disable();
            $$('filtering').disable();
        });

        this.on(this.app, "app:calibrationSubview:finishCalibrate", () => {
            $$('general').enable();
            $$('calibration').enable();
            $$('filtering').enable();
        });



        if(configFile.theme == 'light'){
            webix.html.addCss( $$("central_cols_button").getNode(), "central_cols_button");
            webix.html.addCss( $$("general").getNode(), "button_central_menu");
            webix.html.addCss( $$("calibration").getNode(), "button_central_menu");
            webix.html.addCss( $$("filtering").getNode(), "button_central_menu");
            webix.html.addCss( $$("style_general_rows_1").getNode(), "style_general_rows");
        }
        if(configFile.theme == 'dark'){
            webix.html.addCss( $$("central_cols_button").getNode(), "central_cols_button_dark");
            webix.html.addCss( $$("general").getNode(), "button_central_menu_dark");
            webix.html.addCss( $$("calibration").getNode(), "button_central_menu_dark");
            webix.html.addCss( $$("filtering").getNode(), "button_central_menu_dark");
            webix.html.addCss( $$("style_general_rows_1").getNode(), "style_general_rows_dark");
        }
    }

}
