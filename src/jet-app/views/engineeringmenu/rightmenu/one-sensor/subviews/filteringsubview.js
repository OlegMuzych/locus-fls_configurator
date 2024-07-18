import {JetView} from "webix-jet";
import {llsModelOne} from "../../../../../models/lls-test-models";
import configFile from "../../../../../config-app";

export default class FiltrationSubView extends JetView {
    config() {
        const _ = this.app.getService("locale")._;
        let right_menu_setup = {
            css: "right_menu_status",
            localId: "right_menu_setup",
            height: 750,
            rows: [
                {
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
                                    width: 460,
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
                                    label: `<p style='position: relative; top: -20px;'>${_("current_level")}</p>`,
                                    // width: 460,
                                    // height: 100,
                                    css: "right_menu_fuel_level",
                                    id: "right_menu_fuel_level"
                                },
                                {}
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
                            localId: "progress_bar2",
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

                    ]
                },
                {
                    height: 50,
                },

            ]
        };
        return right_menu_setup;
    }

    destroy() {
        super.destroy();
        llsModelOne.clearListenerShortData(this.listenerShortData);
        llsModelOne.clearListenerLongData(this.listenerLongData);
        llsModelOne.clearListenerTable(this.listenerTableData);
    }

    listenerShortData = (shortData) => {
        let level = shortData.level;
        // console.log(shortData);
        this.$$("status_level_fuel").setValue(level);
        this.$$("progress_bar2").setValue(level);
    }

    outputParametersOfSensor = 0;
    minLevel = 0;
    maxLevel = 0;
    minLevelFromVolume = 0;
    maxLevelFromVolume = 0;
    listenerLongData = (longData) => {
        // this.setMinBar(longData.minLevel);
        // this.setMaxBar(longData.maxLevel);
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

    init() {
        this.$$("status_level_fuel").attachEvent("onAfterRender", webix.once(()=>{
            llsModelOne.addListenerShortData(this.listenerShortData);
            llsModelOne.addListenerLongData(this.listenerLongData);
            // llsModelOne.addListenerTable(this.listenerTableData);
        }));
        llsModelOne.addListenerTable(this.listenerTableData);


        if (configFile.theme == 'light') {
            webix.html.addCss(this.$$("progress_bar2").getNode(), "progress_bar");
            webix.html.addCss(this.$$("status_level_fuel").getNode(), "full_window_text");
            webix.html.addCss(this.$$("right_menu_setup").getNode(), "right_menu_status");
        }
        if (configFile.theme == 'dark') {
            webix.html.addCss(this.$$("progress_bar2").getNode(), "progress_bar_dark");
            webix.html.addCss(this.$$("status_level_fuel").getNode(), "full_window_text_dark");
            webix.html.addCss(this.$$("right_menu_setup").getNode(), "right_menu_status_dark");
        }
    }

    setMaxBar(value){
        this.$$('progress_bar2').define({maxRange: value});
        this.$$('progress_bar2').config.maxRange;
        this.setScaleBar(this.$$('progress_bar2').config.minRange, this.$$('progress_bar2').config.maxRange);
        this.$$('progress_bar2').refresh();
    }
    setMinBar(value){
        this.$$('progress_bar2').define({minRange: value});
        this.setScaleBar(this.$$('progress_bar2').config.minRange, this.$$('progress_bar2').config.maxRange);
        this.$$('progress_bar2').refresh();
    }

    setScaleBar(minRange,maxRange){
        let step = (maxRange - minRange)/10;
        this.$$('progress_bar2').define({scale: {step: step}});
        this.$$('progress_bar2').refresh();
    }
}
