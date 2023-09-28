import {JetView} from "webix-jet";
import {llsModelOne} from "../../../../../../models/lls-test-models";
import AutoLevelWindow from "../../../../windows/auto-level";
import configFile from '../../../../../../config-app'

// const llsModel = llsModelOne;

export default class FullemptysubviewOne extends JetView {
    llsModel = llsModelOne;
    config(){
        const _ = this.app.getService("locale")._;

        let right_menu_setup = {
            css: "right_menu_status",
            id: "right_menu_setup_one",
            height: 750,
            rows: [
                {
                    disabled:true,
                    hidden: true,
                    cols: [
                        {
                            width: 50,
                        },
                        {
                            view: "label",
                            label: `<p style='font-size: 18px; font-weight: 100; position: relative; top: -20px; left: 30px; '>${_("automatic_calibration")}</p>`,
                            width: 300,
                            height: 100,
                            css: "right_menu_status_text",
                            id: "right_menu_status_text_one"
                        },
                        {
                            width: 50,
                        },
                        {view: "switch", value: "1", css: "filter_toggle", id: "calibration_fuel_one", height: 100,},
                    ],

                },
                {
                    height: 12,
                },
                {
                    hidden: false,
                    rows: [
                        {
                            cols: [
                                {
                                 height: 10,
                                },
                                {
                                    view: "button",
                                    type: "label",
                                    label: _("button_automatic_calibration"),
                                    width: 460,
                                    height: 50,
                                    css: "auto_calibration",
                                    id: "auto_calibration_one"
                                },
                                {

                                },
                            ]
                        }
                    ]
                },
                {
                    rows:[
                        {
                            height: 10,
                        },
                        {
                            cols:[
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
                                {

                                }
                            ]
                        },
                        {
                            cols:[
                                {

                                },
                                {
                                    view: "label",
                                    label: `<p style='position: relative; top: -20px; '>${_("current_level")}</p>`,
                                    css: "right_menu_fuel_level",
                                    id: "right_menu_fuel_level_one"
                                },
                                {

                                }
                            ]
                        },



                    ]
                },
                {
                    height: 50,
                },
                {

                    cols: [
                        {
                            width: 30,
                        },
                        {
                            view: "bullet",
                            layout: "y",
                            localId: "progress_bar_one",
                            css: "progress_bar",
                            value: 0,
                            width: 120,
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
                            // color: "linear-gradient(to top, #628cbb, #b6c7dd)",
                            // gradientColor: ("#628cbb", "#b6c7dd", 6),

                        },
                        {
                            width: 150,
                        },
                        {
                            rows: [
                                {
                                    cols: [
                                        {

                                            rows: [
                                                {
                                                    view: "text",
                                                    width: 200,
                                                    height: 50,
                                                    css: "full_window_text",
                                                    localId: "auto_calibration_set_1_one",
                                                    readonly: true,
                                                },
                                                {
                                                    view: "button",
                                                    type: "label",
                                                    label: _("button_set_full_tank"),
                                                    width: 200,
                                                    height: 50,
                                                    css: "auto_calibration",
                                                    id: "auto_calibration_1_one",
                                                    hotkey: "shift+pitch-up",
                                                },
                                                {
                                                    height: 130,
                                                },
                                                {
                                                    view: "text",
                                                    width: 200,
                                                    height: 50,
                                                    css: "full_window_text",
                                                    localId: "auto_calibration_set_2_one",
                                                    readonly: true,
                                                },
                                                {
                                                    view: "button",
                                                    type: "label",
                                                    label: _('button_set_empty_tank'),
                                                    width: 200,
                                                    height: 50,
                                                    css: "auto_calibration",
                                                    id: "auto_calibration_2_one",
                                                    hotkey: "shift+pitch-down",

                                                },
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    height: 10,
                },
                {
                    height: 200,
                    rows: [

                        {
                            view: "label",
                            label: `<p style=' font-size:20px; text-align: center; '>${_("button_enable_edit_values")}</p>`,
                            wight: 300,
                            height: 80,
                            // css: "right_menu_fuel_level",
                            id: "right_menu_fuel_level_one",
                            css:"rows_level_right_menu_info",
                        },
                        {
                            height: 20,
                        },

                        {

                            height: 50,
                            cols: [
                                {
                                    view: "label",
                                    label: `<p style=' font-size:20px; text-align: center; position:relative; top:-15px; '>${_("Label_enable_calibration_mode_auto")}</p>`,
                                    wight: 300,
                                    // height: 100,
                                    // css: "right_menu_fuel_level",
                                    id: "status_mode_auto_one",
                                    css:"rows_level_right_menu_info",
                                    hidden: true,
                                },
                                {
                                    view: "label",
                                    label: `<p style=' font-size:20px; text-align: center; position:relative; top:-15px; '>${_("Label_enable_calibration_mode_auto")}</p>`,
                                    wight: 300,
                                    // height: 100,
                                    // css: "right_menu_fuel_level",
                                    id: "status_mode_auto_hidden_one",
                                    css:"rows_level_right_menu_info_hidden",
                                    hidden: false,
                                },
                                {
                                    view: "switch",
                                    value: 0,
                                    id: "button_edit_one",
                                    width: 66,
                                    height: 50,
                                    css:"toggle_style",
                                    paddingX: 100,

                                },
                                {
                                    view: "label",
                                    label: `<p style=' font-size:20px; text-align: center; position:relative; top:-15px;'>${_("Label_enable_calibration_mode_manual")}</p>`,
                                    wight: 300,
                                    // height: 100,
                                    id: "status_mode_manual_one",
                                    css:"rows_level_right_menu_info",
                                    hidden: false,

                                },
                                {
                                    view: "label",
                                    label: `<p style=' font-size:20px; text-align: center; position:relative; top:-15px;'>${_("Label_enable_calibration_mode_manual")}</p>`,
                                    wight: 300,
                                    // height: 100,
                                    id: "status_mode_manual_hidden_one",
                                    css:"rows_level_right_menu_info_hidden",
                                    hidden: true,
                                }

                            ]
                        }
                    ]
                }
            ]
        };
        return right_menu_setup;
    }

    destroy() {
        super.destroy();
        this.llsModel.clearListenerShortData(this.listenerShortData);
        this.llsModel.clearListenerLongData(this.listenerLongData);
    }

    listenerShortData = (shortData)=>{
        this.$$("progress_bar_one").setValue(shortData.level);
        this.$$("status_level_fuel").setValue(shortData.level.toString());
    }

    listenerLongData = (longData) => {
        // $$('auto_calibration_set_2').setValue(longData.emptyTank.toString());
        // $$('auto_calibration_set_1').setValue(longData.fullTank.toString());
        this.setEmptyTank(longData.emptyTank.toString());
        this.setFullTank(longData.fullTank.toString());
        this.setMinBar(longData.minLevel);
        this.setMaxBar(longData.maxLevel);
    }

    init(){
        this.flagCalibrationEdit = false;
        this.llsModel.addListenerShortData(this.listenerShortData);
        this.llsModel.addListenerLongData(this.listenerLongData);

        $$('auto_calibration_1_one').attachEvent("onItemClick", (id, e)=>{
            console.log('click');
            this.llsModel.setMaximum().then();

        });

        $$('auto_calibration_2_one').attachEvent("onItemClick", (id, e)=>{
            console.log('click');
            this.llsModel.setMinimum().then();

        });

        $$("auto_calibration_1_one").disable();
        $$("auto_calibration_2_one").disable();

        $$("calibration_fuel_one").attachEvent("onChange", (newValue, oldValue, config)=>{
            if(newValue){
                $$("auto_calibration_one").disable();
                $$("auto_calibration_1_one").disable();
                this.$$("auto_calibration_set_1_one").disable();
                $$("auto_calibration_2_one").disable();
                this.$$("auto_calibration_set_2_one").disable();
                $$("button_edit_one").enable();
            }else{
                $$("auto_calibration_one").enable();
                $$("auto_calibration_1_one").disable();
                this.$$("auto_calibration_set_1_one").disable();
                $$("auto_calibration_2_one").disable();
                this.$$("auto_calibration_set_2_one").disable();
                $$("button_edit_one").disable();
            }
        });

        this.$$("auto_calibration_set_1_one").attachEvent("onChange", (newValue, oldValue, config)=>{
            if(newValue == "45000000"){
                this.app.callEvent("app:fullemptysubview:one:fullTankDefault", [false]);
            }else{
                this.app.callEvent("app:fullemptysubview:one:fullTankDefault", [true]);
            }
        });

        this.$$("auto_calibration_set_2_one").attachEvent("onChange", (newValue, oldValue, config)=>{
            if(newValue == "1000000"){
                this.app.callEvent("app:fullemptysubview:one:emptyTankDefault", [false]);
            }else{
                this.app.callEvent("app:fullemptysubview:one:emptyTankDefault", [true]);
            }
        });

        $$('button_edit_one').attachEvent("onChange", (id, e)=>{
            console.log('click');
            if(this.flagCalibrationEdit){
                this.flagCalibrationEdit = false;

                $$("auto_calibration_1_one").disable();
                $$("auto_calibration_2_one").disable();
                this.$$("auto_calibration_set_1_one").define("readonly", true);
                this.$$("auto_calibration_set_2_one").define("readonly", true);
                $$("auto_calibration_one").enable();
                $$("status_mode_manual_hidden_one").hide()
                $$("status_mode_manual_one").show()
                $$("status_mode_auto_hidden_one").show()
                $$("status_mode_auto_one").hide()

            }else{
                this.flagCalibrationEdit = true;
                $$("auto_calibration_1_one").enable();
                $$("auto_calibration_2_one").enable();
                this.$$("auto_calibration_set_1_one").define("readonly", false);
                this.$$("auto_calibration_set_2_one").define("readonly", false);
                $$("auto_calibration_one").disable();
                $$("status_mode_manual_hidden_one").show()
                $$("status_mode_manual_one").hide()
                $$("status_mode_auto_hidden_one").hide()
                $$("status_mode_auto_one").show()

            }

            this.$$("auto_calibration_set_1_one").refresh();
            this.$$("auto_calibration_set_2_one").refresh();
        });





        this.$$('auto_calibration_set_1_one').attachEvent("onChange", (newValue, oldValue, config) => {
            console.log("change");
            if (config != undefined) {
                console.log(newValue);
                if (newValue >= 0 && newValue <= 4294967295) {
                    this.llsModel.newLongData.fullTank = newValue;
                    // globalVariable.autoSaveMode.then(flag => flag ? llsModel.setLongData({llsAdr: llsModel.newLongData.llsAdr}) : '');
                    // this.setTextValue("textLlsAdr", 'llsAdr', "statusLlsAdr");
                    this.llsModel.setLongData({fullTank: newValue }).then();
                } else {
                    this.$$('auto_calibration_set_1_one').setValue(oldValue);
                    // llsModel.setLongData({fullTank: oldValue }).then();
                }
            }
        })

        this.$$('auto_calibration_set_2_one').attachEvent("onChange", (newValue, oldValue, config) => {
            console.log("change");
            if (config != undefined) {
                console.log(newValue);
                if (newValue >= 0 && newValue <= 4294967295) {
                    this.llsModel.newLongData.emptyTank = newValue;
                    // globalVariable.autoSaveMode.then(flag => flag ? llsModel.setLongData({llsAdr: llsModel.newLongData.llsAdr}) : '');
                    // this.setTextValue("textLlsAdr", 'llsAdr', "statusLlsAdr");
                    this.llsModel.setLongData({emptyTank: newValue }).then();
                } else {
                    this.$$('auto_calibration_set_2_one').setValue(oldValue);
                    // llsModel.setLongData({fullTank: oldValue }).then();
                }
            }
        })

        // add window auto-level
        this.windowAutoLevel = this.ui(AutoLevelWindow);
        // this.windowAutoLevel.showWindow();

        $$('auto_calibration_one').attachEvent("onItemClick", (id, e)=>{
            console.log('click');
            this.windowAutoLevel.showWindow(llsModelOne);
        });

        if(configFile.theme == 'light'){
            webix.html.addCss( $$("right_menu_setup_one").getNode(), "right_menu_status");
            webix.html.addCss( $$("right_menu_status_text_one").getNode(), "right_menu_status_text");
            webix.html.addCss( $$("calibration_fuel_one").getNode(), "filter_toggle");
            webix.html.addCss( $$("auto_calibration_one").getNode(), "auto_calibration");
            webix.html.addCss( this.$$("progress_bar_one").getNode(), "progress_bar");
            webix.html.addCss( this.$$("auto_calibration_set_1_one").getNode(), "full_window_text");
            webix.html.addCss( $$("auto_calibration_1_one").getNode(), "auto_calibration");
            webix.html.addCss( this.$$("auto_calibration_set_2_one").getNode(), "full_window_text");
            webix.html.addCss( $$("auto_calibration_2_one").getNode(), "auto_calibration");
            webix.html.addCss( $$("button_edit_one").getNode(), "edit_values");
            webix.html.addCss( this.$$("status_level_fuel").getNode(), "full_window_text");
            webix.html.addCss( $$("right_menu_fuel_level_one").getNode(), "rows_level_right_menu_info");

            webix.html.addCss( $$("status_mode_auto_one").getNode(), "rows_level_right_menu_info");
            webix.html.addCss( $$("status_mode_manual_one").getNode(), "rows_level_right_menu_info");

        }
        if(configFile.theme == 'dark'){
            webix.html.addCss( $$("right_menu_setup_one").getNode(), "right_menu_status_dark");
            webix.html.addCss( $$("right_menu_status_text_one").getNode(), "right_menu_status_text_dark");
            webix.html.addCss( $$("calibration_fuel_one").getNode(), "filter_toggle_dark");
            webix.html.addCss( $$("auto_calibration_one").getNode(), "auto_calibration_dark");
            webix.html.addCss( this.$$("progress_bar_one").getNode(), "progress_bar_dark");
            webix.html.addCss( this.$$("auto_calibration_set_1_one").getNode(), "full_window_text_dark");
            webix.html.addCss( $$("auto_calibration_1_one").getNode(), "auto_calibration_dark");
            webix.html.addCss( this.$$("auto_calibration_set_2_one").getNode(), "full_window_text_dark");
            webix.html.addCss( $$("auto_calibration_2_one").getNode(), "auto_calibration_dark");
            webix.html.addCss( $$("auto_calibration_2_one").getNode(), "auto_calibration_dark");
            webix.html.addCss( $$("button_edit_one").getNode(), "edit_values_dark");
            webix.html.addCss( this.$$("status_level_fuel").getNode(), "full_window_text_dark");
            webix.html.addCss( $$("right_menu_fuel_level_one").getNode(), "rows_level_right_menu_info_dark");

            webix.html.addCss( $$("status_mode_auto_one").getNode(), "rows_level_right_menu_info_dark");
            webix.html.addCss( $$("status_mode_manual_one").getNode(), "rows_level_right_menu_info_dark");
        }
    }

    setEmptyTank(newValue){
        this.$$('auto_calibration_set_2_one').setValue(newValue);
        this.llsModel.newLongData.emptyTank = newValue;
    }

    setFullTank(newValue){
        this.$$('auto_calibration_set_1_one').setValue(newValue);
        this.llsModel.newLongData.fullTank = newValue;
    }

    setMaxBar(value){
        this.$$('progress_bar_one').define({maxRange: value});
        this.$$('progress_bar_one').config.maxRange;
        this.setScaleBar(this.$$('progress_bar_one').config.minRange, this.$$('progress_bar_one').config.maxRange);
        this.$$('progress_bar_one').refresh();
    }
    setMinBar(value){
        this.$$('progress_bar_one').define({minRange: value});
        this.setScaleBar(this.$$('progress_bar_one').config.minRange, this.$$('progress_bar_one').config.maxRange);
        this.$$('progress_bar_one').refresh();
    }

    setScaleBar(minRange,maxRange){
        let step = (maxRange - minRange)/10;
        this.$$('progress_bar_one').define({scale: {step: step}});
        this.$$('progress_bar_one').refresh();
    }
}
