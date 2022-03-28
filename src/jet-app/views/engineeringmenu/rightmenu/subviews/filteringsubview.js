import {JetView} from "webix-jet";
import llsModel from "../../../../models/lls-model";
import configFile from "../../../../config-app";

export default class FiltrationSubView extends JetView {
    config() {
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
                                    css: "full_level_windows",
                                    readonly: false,
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
        llsModel.clearListenerShortData(this.listenerShortData);
    }

    listenerShortData = (shortData) => {
        let level = shortData.level;
        // console.log(shortData);
        this.$$("status_level_fuel").setValue(level);
        this.$$("progress_bar2").setValue(level);
    }



    init() {
        this.$$("status_level_fuel").attachEvent("onAfterRender", webix.once(()=>{
            llsModel.addListenerShortData(this.listenerShortData);
        }));

        if (configFile.theme.color == 'white') {
            webix.html.addCss(this.$$("progress_bar2").getNode(), "progress_bar");
        }
        if (configFile.theme.color == 'black') {
            webix.html.addCss(this.$$("progress_bar2").getNode(), "progress_bar_dark");
        }
    }
}