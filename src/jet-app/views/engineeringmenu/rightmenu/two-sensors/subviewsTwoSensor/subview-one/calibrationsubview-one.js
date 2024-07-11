import {JetView} from "webix-jet";
import FuelFillView from "./calibrationsubview/fuelfill";
import FuelDrainView from "./calibrationsubview/fueldrain";
import {llsModelOne} from "../../../../../../models/lls-test-models";
import configFile from '../../../../../../config-app'


const llsModel = llsModelOne;

export default class CalibrationsubviewOne extends JetView {
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
                {value: _("tabbar_drain"), id: "fuelDrain_one"},
                {value: _("tabbar_fill"), id: "fuelFill_one"},
            ]
        };

        let myMultiview = {
            view: "multiview",
            cells: [
                {
                    id: 'fuelDrain_one', rows: [FuelDrainView],
                },
                {
                    id: "fuelFill_one", rows: [FuelFillView],
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

                        {}
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

    // listenerLongData = (longData) => {
    //     this.setMinBar(longData.minLevel);
    //     this.setMaxBar(longData.maxLevel);
    // }
    outputParametersOfSensor = 0;
    minLevel = 0;
    maxLevel = 0;
    minLevelFromVolume = 0;
    maxLevelFromVolume = 0;
    listenerLongData = (longData) => {
        this.outputParametersOfSensor = longData.outputParametersOfSensor;
        this.minLevel = longData.minLevel;
        this.maxLevel = longData.maxLevel;
        console.log(longData.outputParametersOfSensor);
        if(longData.outputParametersOfSensor === 0){
            this.setMinBar(longData.minLevel);
            this.setMaxBar(longData.maxLevel);
        }else{
            this.setMinBar(this.minLevelFromVolume);
            this.setMaxBar(this.maxLevelFromVolume);
        }
    }

    listenerTableData = (tableData)=>{
        this.minLevelFromVolume = 0;
        this.maxLevelFromVolume = tableData.volumes[[tableData.countPoint - 1]];
        if (this.outputParametersOfSensor === 1 && tableData.countPoint >= 2 ){
            this.setMinBar(0);
            this.setMaxBar(tableData.volumes[[tableData.countPoint - 1]]);
        }
    }

    destroy() {
        super.destroy();
        llsModel.clearListenerShortData(this.listenerShortData);
        llsModel.clearListenerLongData(this.listenerLongData);
        llsModel.clearListenerTable(this.listenerTableData);
    }

    init() {
        // this.$$("right_menu_fuel_level").attachEvent("onAfterRender", webix.once(()=>{
        //     llsModel.addListenerShortData(this.listenerShortData);
            // llsModel.addListenerLongData(this.listenerLongData);
            // llsModel.addListenerTable(this.listenerTableData);
        // }));
        llsModel.addListenerShortData(this.listenerShortData);
        llsModel.addListenerLongData(this.listenerLongData);
        llsModel.addListenerTable(this.listenerTableData);
        // llsModel.addListenerLongData(this.listenerLongData);
        this.on(this.app, "app:calibrationSettings:continueCalibrate", () => {
            this.$$('tabbar').setValue("fuelFill_one");
        });

        this.on(this.app, "app:calibrationSubview:startCalibrate", (type) => {
            if (type == 'fill') {
                this.$$('tabbar').disableOption('fuelDrain_one');
            }

            if (type == 'drain') {
                this.$$('tabbar').disableOption('fuelFill_one');
            }
        });

        this.on(this.app, "app:calibrationSubview:finishCalibrate", () => {
            this.$$('tabbar').enableOption('fuelFill_one');
            this.$$('tabbar').enableOption('fuelDrain_one');
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
        if(this.$$("progress_bar3").getNode()) {
            this.$$('progress_bar3').define({maxRange: value});
            this.setScaleBar(this.$$('progress_bar3').config.minRange, this.$$('progress_bar3').config.maxRange);
            this.$$('progress_bar3').refresh();
        }
    }
    setMinBar(value){
        if($("progress_bar3").getNode()) {
            this.$$('progress_bar3').define({minRange: value});
            this.setScaleBar(this.$$('progress_bar3').config.minRange, this.$$('progress_bar3').config.maxRange);
            this.$$('progress_bar3').refresh();
        }
    }

    setScaleBar(minRange,maxRange){
        let step = (maxRange - minRange)/10;
        this.$$('progress_bar3').define({scale: {step: step}});
        this.$$('progress_bar3').refresh();
    }
}


