import {JetView} from "webix-jet";
import GeneralSettings from "./generalsettings";
import Calibrationsettings from "./calibrationsettings";
import FiltrationSettings from "./filtaringSettings";
import configFile from "../../../config-app";
export default class CentralMenu extends JetView{
    config(){
        let central_menu_button = {

            rows: [
                {
                    css: "central_cols_button",
                    id: "central_cols_button",
                    cols: [
                        {
                            view: "button",
                            label: "Основные настройки",
                            // maxWidth: 400,
                            // minWidth: 120,
                            height: 100,
                            css: "button_central_menu",
                            id: "general",
                            value: "Save",
                        },
                        {
                            view: "button",
                            label: "Тарировка",
                            // maxWidth: 400,
                            // minWidth: 120,
                            height: 100,
                            css: "button_central_menu",
                            id: "calibration",
                            value: "Save",
                        },
                        {
                            view: "button",
                            label: "Фильтрация",
                            // maxWidth: 400,
                            // minWidth: 120,
                            height: 100,
                            css: "button_central_menu",
                            id: "filtering",
                            value: "Save",
                        },
                    ]
                },
            ]
        };

        // let generalSettings = {
        //     id: 'generalSettings',
        //     rows: [GeneralSettings],
        // }

        let myMultiview = {
            // minWidth: 900,
            // maxWidth: 1300,
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



        if(configFile.theme.color == 'white'){
            webix.html.addCss( $$("central_cols_button").getNode(), "central_cols_button");
            webix.html.addCss( $$("general").getNode(), "button_central_menu");
            webix.html.addCss( $$("calibration").getNode(), "button_central_menu");
            webix.html.addCss( $$("filtering").getNode(), "button_central_menu");
            webix.html.addCss( $$("style_general_rows_1").getNode(), "style_general_rows");
        }
        if(configFile.theme.color == 'black'){
            webix.html.addCss( $$("central_cols_button").getNode(), "central_cols_button_dark");
            webix.html.addCss( $$("general").getNode(), "button_central_menu_dark");
            webix.html.addCss( $$("calibration").getNode(), "button_central_menu_dark");
            webix.html.addCss( $$("filtering").getNode(), "button_central_menu_dark");
            webix.html.addCss( $$("style_general_rows_1").getNode(), "style_general_rows_dark");
        }
    }

}
