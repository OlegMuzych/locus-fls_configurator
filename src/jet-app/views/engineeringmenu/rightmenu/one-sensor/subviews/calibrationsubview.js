import {JetView} from "webix-jet";
import FuelFillView from "./calibrationsubview/fuelfill";
import FuelDrainView from "./calibrationsubview/fueldrain";

import configFile from "../../../../../config-app";
import {llsModelOne} from "../../../../../models/lls-test-models";

export default class CalibrationSubView extends JetView {
    config() {
        const _ = this.app.getService("locale")._;

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
                            css: "full_window_text",
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
                            label: `<p style='position: relative; top: -20px; '>${_("current_level")}</p>`,
                            // width: 460,
                            // height: 100,
                            css: "right_menu_fuel_level",
                            id: "right_menu_fuel_level"
                        },
                        {}
                    ]
                },
                {
                    cols: [
                        {},
                        {
                            view: "bullet",
                            layout: "x",
                            localId: "progress_bar3",
                            css: "progress_bar",
                            value: 0,
                            // width: 120,
                            width: 470,
                            minRange: 0,
                            maxRange: 4095,
                            bands: [
                                {value: 4095, color: "#f0f0f0"},
                            ],
                            scale: {
                                step: 450,
                                // template: "#value#%"
                            },
                            stroke: 40,
                            color: "#628cbb",
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
                {value: _("tabbar_drain"), id: "fuelDrain"},
                {value: _("tabbar_fill"), id: "fuelFill"},
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
            id:"rows_export_import",
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
                            label: _("button_save_table_file"),
                            localId: "button_export",
                            width: 480,
                            height: 50,
                            css: "set_step_drain_button_2"
                        },
                        {}
                    ]
                },
                {
                    height: 8,
                },
                {
                    cols: [
                        {},
                        {
                            view: "button",
                            type: "label",
                            label: _("button_save_table_file_xml"),
                            localId: "button_export_xml",
                            width: 480,
                            height: 50,
                            css: "set_step_drain_button_2"
                        },
                        {}
                    ]
                },
                {
                    height: 8,
                },
                {
                    cols: [
                        {},
                        {
                            view: "button",
                            type: "label",
                            label: _("button_read_table_file"),
                            localId: "button_import",
                            width: 480,
                            height: 50,
                            css: "set_step_drain_button_2"
                        },
                        {
                        }
                    ]
                },
                {
                    height: 18,
                }
            ]
        };


        let body = {
            rows: [
                currentLevel,
                tabBarCalibrate,
                myMultiview,
                button_table,
                {
                    height: 16,
                }
            ]
        };

        return body;
    }

    listenerShortData = (shortData)=>{
        this.$$("status_level_fuel").setValue(shortData.level);
        this.$$("progress_bar3").setValue(shortData.level);
    }

    listenerLongData = (longData) => {
        this.setMinBar(longData.minLevel);
        this.setMaxBar(longData.maxLevel);
    }

    destroy() {
        super.destroy();
        llsModelOne.clearListenerShortData(this.listenerShortData);
        llsModelOne.clearListenerLongData(this.listenerLongData);
    }

    init() {
        this.$$("right_menu_fuel_level").attachEvent("onAfterRender", webix.once(()=>{
            llsModelOne.addListenerShortData(this.listenerShortData);
            llsModelOne.addListenerLongData(this.listenerLongData);
        }));
        // llsModel.addListenerLongData(this.listenerLongData);
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
            this.app.callEvent("app:calibrationsubview:one:readFromFile", []);
        });

        this.$$('button_export').attachEvent("onItemClick", (id, e) => {
            this.app.callEvent("app:calibrationsubview:one:saveToFile", []);
        });

        this.$$('button_export_xml').attachEvent("onItemClick", (id, e) => {
            this.app.callEvent("app:calibrationsubview:one:saveToFile:xml", []);
        });

        if (configFile.theme == 'light') {
            webix.html.addCss(this.$$("tabbar").getNode(), "button_type_calibration_1");
            webix.html.addCss(this.$$("rows_export_import").getNode(), "rows_right_menu_calibration_2");
            webix.html.addCss(this.$$("status_level_fuel").getNode(), "full_window_text");
            webix.html.addCss(this.$$("progress_bar3").getNode(), "edit_values");
        }
        if (configFile.theme == 'dark') {
            webix.html.addCss(this.$$("tabbar").getNode(), "button_type_calibration_1_dark");
            webix.html.addCss(this.$$("rows_export_import").getNode(), "rows_right_menu_calibration_2_dark");
            webix.html.addCss(this.$$("status_level_fuel").getNode(), "full_window_text_dark");
            webix.html.addCss(this.$$("progress_bar3").getNode(), "edit_values_dark");
        }
    }

    setMaxBar(value){
        this.$$('progress_bar3').define({maxRange: value});
        this.setScaleBar(this.$$('progress_bar3').config.minRange, this.$$('progress_bar3').config.maxRange);
        this.$$('progress_bar3').refresh();
    }
    setMinBar(value){
        this.$$('progress_bar3').define({minRange: value});
        this.setScaleBar(this.$$('progress_bar3').config.minRange, this.$$('progress_bar3').config.maxRange);
        this.$$('progress_bar3').refresh();
    }

    setScaleBar(minRange,maxRange){
        let step = (maxRange - minRange)/10;
        this.$$('progress_bar3').define({scale: {step: step}});
        this.$$('progress_bar3').refresh();
    }
}



