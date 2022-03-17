import {JetView} from "webix-jet";
import GeneralSettings from "./generalsettings";
import Calibrationsettings from "./calibrationsettings";
import FiltrationSettings from "./filtaringSettings";
export default class CentralMenu extends JetView{
    config(){
        let central_menu_button = {
            paddingY: 0,
            minWidth: 500,
            rows: [
                {
                    css: "central_cols_button",
                    id: "central_cols_button",
                    cols: [
                        {
                            view: "button",
                            label: "Основные настройки",
                            maxWidth: 300,
                            minWidth: 120,
                            height: 100,
                            css: "button_central_menu",
                            id: "general",
                            value: "Save",
                        },
                        {
                            view: "button",
                            label: "Тарировка",
                            maxWidth: 300,
                            minWidth: 120,
                            height: 100,
                            css: "button_central_menu",
                            id: "calibration",
                            value: "Save",
                        },
                        {
                            view: "button",
                            label: "Фильтрация",
                            maxWidth: 300,
                            minWidth: 120,
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
                central_menu_button, myMultiview
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
    }

}
