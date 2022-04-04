import {JetView} from "webix-jet";
import FuelFillView from "./calibrationsubview/fuelfill";
import FuelDrainView from "./calibrationsubview/fueldrain";

import configFile from "../../../../config-app";
import llsModel from "../../../../models/lls-model";

export default class CalibrationSubView extends JetView {
    config() {
        let currentLevel = {
            rows: [
                {
                    height: 10,
                },
                {
                    cols: [
                        {
                            // width: 40,
                        },
                        {
                            view: "text",
                            width: 470,
                            height: 70,
                            css: "full_level_windows",
                            readonly: true,
                            localId: "status_level_fuel",
                            inputAlign: "center",
                        },
                        {}
                    ]
                },
                {
                    cols: [
                        {},
                        {
                            view: "label",
                            label: "<p style='position: relative; top: -20px; '>Текущий уровень</p>",
                            // width: 460,
                            // height: 100,
                            css: "right_menu_fuel_level",
                            id: "right_menu_fuel_level"
                        },
                        {}
                    ]
                },
            ]
        };
        let tabBarCalibrate = {
            view: "tabbar",
            localId: "tabbar",
            value: "fuelFill",
            css: "button_type_calibration_1",
            height: 70,
            multiview: true,
            options: [
                {value: "Слив", id: "fuelDrain"},
                {value: "Залив", id: "fuelFill"},
            ]
        };

        let myMultiview = {
            view: "multiview",
            cells: [
                {
                    id: 'fuelDrain', rows: [FuelDrainView],
                },
                {
                    id: "fuelFill", rows: [FuelFillView],
                },

            ],
            animate: false,
        };


        let button_table = {
            css: "rows_right_menu_calibration_2",
            rows: [
                {
                    height: 10,
                },
                {
                    cols: [
                        {},
                        {
                            view: "button",
                            type: "label",
                            label: "Экспортировать таблицу тарировки",
                            localId: "button_export",
                            width: 480,
                            height: 50,
                            css: "set_step_drain_button_2"
                        },
                        {}
                    ]
                },
                {
                    height: 5,
                },
                {
                    cols: [
                        {},
                        {
                            view: "button",
                            type: "label",
                            label: "Импортировать таблицу тарировки",
                            localId: "button_import",
                            width: 480,
                            height: 50,
                            css: "set_step_drain_button_2"
                        },

                        {}
                    ]
                },
                {}
            ]
        };


        let body = {
            rows: [
                currentLevel,
                tabBarCalibrate,
                myMultiview,
                button_table
            ]
        };

        return body;
    }

    listenerShortData = (shortData)=>{
        this.$$("status_level_fuel").setValue(shortData.level);
    }

    destroy() {
        super.destroy();
        llsModel.clearListenerShortData(this.listenerShortData);
    }

    init() {
        llsModel.addListenerShortData(this.listenerShortData);
        this.on(this.app, "app:calibrationSettings:continueCalibrate", () => {
            this.$$('tabbar').setValue("fuelFill");
        });

        this.on(this.app, "app:calibrationSubview:startCalibrate", (type) => {
            if (type == 'fill') {
                this.$$('tabbar').disableOption('fuelDrain');
            }

            if (type == 'drain') {
                this.$$('tabbar').disableOption('fuelFill');
            }
        });

        this.on(this.app, "app:calibrationSubview:finishCalibrate", () => {
            this.$$('tabbar').enableOption('fuelFill');
            this.$$('tabbar').enableOption('fuelDrain');
        });

        this.$$('button_import').attachEvent("onItemClick", (id, e) => {
            this.app.callEvent("app:calibrationsubview:readFromFile", []);
        });

        this.$$('button_export').attachEvent("onItemClick", (id, e) => {
            this.app.callEvent("app:calibrationsubview:saveToFile", []);
        });

        if (configFile.theme.color == 'white') {
            webix.html.addCss(this.$$("tabbar").getNode(), "button_type_calibration_1");
        }
        if (configFile.theme.color == 'black') {
            webix.html.addCss(this.$$("tabbar").getNode(), "button_type_calibration_1_dark");
        }
    }
}



