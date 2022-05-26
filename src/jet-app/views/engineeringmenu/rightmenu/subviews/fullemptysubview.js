import {JetView} from "webix-jet";
import llsModel from "../../../../models/lls-model";
import configFile from "../../../../config-app";
import globalVariable from "../../../../global-variable-app";

export default class FullEmptySubView extends JetView {
    config(){
        const _ = this.app.getService("locale")._;

        let right_menu_setup = {
            css: "right_menu_status",
            id: "right_menu_setup",
            height: 750,
            rows: [
                {
                    disabled:true,
                    // hidden: true,
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
                            id: "right_menu_status_text"
                        },
                        {
                            width: 50,
                        },
                        {view: "switch", value: "1", css: "filter_toggle", id: "calibration_fuel", height: 100,},
                    ],

                },
                {
                    hidden: true,
                    rows: [
                        {
                            cols: [
                                {
                                    // width: 40,
                                },
                                {
                                    view: "button",
                                    type: "label",
                                    label: _("button_automatic_calibration"),
                                    width: 460,
                                    height: 50,
                                    css: "auto_calibration",
                                    id: "auto_calibration"
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
                                    // width: 460,
                                    // height: 100,
                                    css: "right_menu_fuel_level",
                                    id: "right_menu_fuel_level"
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
                            id: "progress_bar",
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
                                                    // readonly: true,
                                                    id: "auto_calibration_set_1"
                                                },
                                                {
                                                    view: "button",
                                                    type: "label",
                                                    label: _("button_set_full_tank"),
                                                    width: 200,
                                                    height: 50,
                                                    css: "auto_calibration",
                                                    id: "auto_calibration_1"
                                                },
                                                {
                                                    height: 130,
                                                },
                                                {
                                                    view: "text",
                                                    width: 200,
                                                    height: 50,
                                                    css: "full_window_text",
                                                    // readonly: true,
                                                    id: "auto_calibration_set_2"
                                                },
                                                {
                                                    view: "button",
                                                    type: "label",
                                                    label: _('button_set_empty_tank'),
                                                    width: 200,
                                                    height: 50,
                                                    css: "auto_calibration",
                                                    id: "auto_calibration_2"

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
                    height: 50,
                },
                {
                    rows: [
                        {
                            cols: [
                                {
                                    width: 40,
                                },
                                {
                                    view: "button",
                                    type: "label",
                                    label: _("button_enable_edit_values"),
                                    width: 460,
                                    height: 50,
                                    css: "edit_values",
                                    id: "button_edit",
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
        llsModel.clearListenerShortData(this.listenerShortData);
        llsModel.clearListenerLongData(this.listenerLongData);
    }

    listenerShortData = (shortData)=>{
        $$("progress_bar").setValue(shortData.level);
        this.$$("status_level_fuel").setValue(shortData.level.toString());
    }

    listenerLongData = (longData) => {
        $$('auto_calibration_set_2').setValue(longData.emptyTank.toString());
        $$('auto_calibration_set_1').setValue(longData.fullTank.toString());
        this.setMinBar(longData.minLevel);
        this.setMaxBar(longData.maxLevel);
    }

    init(){
        this.flagCalibrationEdit = false;
        llsModel.addListenerShortData(this.listenerShortData);
        llsModel.addListenerLongData(this.listenerLongData);

        $$('auto_calibration_1').attachEvent("onItemClick", (id, e)=>{
            console.log('click');
            llsModel.setMaximum().then();

        });

        $$('auto_calibration_2').attachEvent("onItemClick", (id, e)=>{
            console.log('click');
            llsModel.setMinimum().then();

        });

        $$("auto_calibration_1").disable();
        $$("auto_calibration_2").disable();

        $$("calibration_fuel").attachEvent("onChange", (newValue, oldValue, config)=>{
            if(newValue){
                $$("auto_calibration").disable();
                $$("auto_calibration_1").disable();
                $$("auto_calibration_set_1").disable();
                $$("auto_calibration_2").disable();
                $$("auto_calibration_set_2").disable();
                $$("button_edit").enable();
            }else{
                $$("auto_calibration").enable();
                $$("auto_calibration_1").disable();
                $$("auto_calibration_set_1").disable();
                $$("auto_calibration_2").disable();
                $$("auto_calibration_set_2").disable();
                $$("button_edit").disable();
            }
        });

        $$("auto_calibration_set_1").attachEvent("onChange", (newValue, oldValue, config)=>{
            if(newValue == "45000000"){
                this.app.callEvent("app:fullemptysubview:fullTankDefault", [false]);
            }else{
                this.app.callEvent("app:fullemptysubview:fullTankDefault", [true]);
            }
        });

        $$("auto_calibration_set_2").attachEvent("onChange", (newValue, oldValue, config)=>{
            if(newValue == "1000000"){
                this.app.callEvent("app:fullemptysubview:emptyTankDefault", [false]);
            }else{
                this.app.callEvent("app:fullemptysubview:emptyTankDefault", [true]);
            }
        });

        $$('button_edit').attachEvent("onItemClick", (id, e)=>{
            console.log('click');
            if(this.flagCalibrationEdit){
                this.flagCalibrationEdit = false;
                $$("auto_calibration_1").disable();
                $$("auto_calibration_2").disable();
            }else{
                this.flagCalibrationEdit = true;
                $$("auto_calibration_1").enable();
                $$("auto_calibration_2").enable();
            }
        });

        $$('auto_calibration_set_1').attachEvent("onChange", (newValue, oldValue, config) => {
            console.log("change");
            if (config != undefined) {
                console.log(newValue);
                if (newValue >= 0 && newValue <= 4294967295) {
                    llsModel.newLongData.fullTank = newValue;
                    // globalVariable.autoSaveMode.then(flag => flag ? llsModel.setLongData({llsAdr: llsModel.newLongData.llsAdr}) : '');
                    // this.setTextValue("textLlsAdr", 'llsAdr', "statusLlsAdr");
                    llsModel.setLongData({fullTank: newValue }).then();
                } else {
                    $$('auto_calibration_set_1').setValue(oldValue);
                    // llsModel.setLongData({fullTank: oldValue }).then();
                }
            }
        })

        $$('auto_calibration_set_2').attachEvent("onChange", (newValue, oldValue, config) => {
            console.log("change");
            if (config != undefined) {
                console.log(newValue);
                if (newValue >= 0 && newValue <= 4294967295) {
                    llsModel.newLongData.emptyTank = newValue;
                    // globalVariable.autoSaveMode.then(flag => flag ? llsModel.setLongData({llsAdr: llsModel.newLongData.llsAdr}) : '');
                    // this.setTextValue("textLlsAdr", 'llsAdr', "statusLlsAdr");
                    llsModel.setLongData({emptyTank: newValue }).then();
                } else {
                    $$('auto_calibration_set_2').setValue(oldValue);
                    // llsModel.setLongData({fullTank: oldValue }).then();
                }
            }
        })

        if(configFile.theme == 'light'){
            webix.html.addCss( $$("right_menu_setup").getNode(), "right_menu_status");
            webix.html.addCss( $$("right_menu_status_text").getNode(), "right_menu_status_text");
            webix.html.addCss( $$("calibration_fuel").getNode(), "filter_toggle");
            webix.html.addCss( $$("auto_calibration").getNode(), "auto_calibration");
            webix.html.addCss( $$("progress_bar").getNode(), "progress_bar");
            webix.html.addCss( $$("auto_calibration_set_1").getNode(), "full_window_text");
            webix.html.addCss( $$("auto_calibration_1").getNode(), "auto_calibration");
            webix.html.addCss( $$("auto_calibration_set_2").getNode(), "full_window_text");
            webix.html.addCss( $$("auto_calibration_2").getNode(), "auto_calibration");
            webix.html.addCss( $$("button_edit").getNode(), "edit_values");
            webix.html.addCss( this.$$("status_level_fuel").getNode(), "full_window_text");
        }
        if(configFile.theme == 'dark'){
            webix.html.addCss( $$("right_menu_setup").getNode(), "right_menu_status_dark");
            webix.html.addCss( $$("right_menu_status_text").getNode(), "right_menu_status_text_dark");
            webix.html.addCss( $$("calibration_fuel").getNode(), "filter_toggle_dark");
            webix.html.addCss( $$("auto_calibration").getNode(), "auto_calibration_dark");
            webix.html.addCss( $$("progress_bar").getNode(), "progress_bar_dark");
            webix.html.addCss( $$("auto_calibration_set_1").getNode(), "full_window_text_dark");
            webix.html.addCss( $$("auto_calibration_1").getNode(), "auto_calibration_dark");
            webix.html.addCss( $$("auto_calibration_set_2").getNode(), "full_window_text_dark");
            webix.html.addCss( $$("auto_calibration_2").getNode(), "auto_calibration_dark");
            webix.html.addCss( $$("auto_calibration_2").getNode(), "auto_calibration_dark");
            webix.html.addCss( $$("button_edit").getNode(), "edit_values_dark");
            webix.html.addCss( this.$$("status_level_fuel").getNode(), "full_window_text_dark");
        }
    }

    setMaxBar(value){
        this.$$('progress_bar').define({maxRange: value});
        this.$$('progress_bar').config.maxRange;
        this.setScaleBar(this.$$('progress_bar').config.minRange, this.$$('progress_bar').config.maxRange);
        this.$$('progress_bar').refresh();
    }
    setMinBar(value){
        this.$$('progress_bar').define({minRange: value});
        this.setScaleBar(this.$$('progress_bar').config.minRange, this.$$('progress_bar').config.maxRange);
        this.$$('progress_bar').refresh();
    }

    setScaleBar(minRange,maxRange){
        let step = (maxRange - minRange)/10;
        this.$$('progress_bar').define({scale: {step: step}});
        this.$$('progress_bar').refresh();
    }
}