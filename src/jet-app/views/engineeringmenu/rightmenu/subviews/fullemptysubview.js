import {JetView} from "webix-jet";
import llsModel from "../../../../models/lls-model";

export default class FullEmptySubView extends JetView {
    config(){
        let right_menu_setup = {
            css: "right_menu_status",
            id: "right_menu_setup",
            height: 650,
            rows: [
                {
                    cols: [
                        {
                            width: 50,
                        },
                        {
                            view: "label",
                            label: "<p style='font-size: 18px; font-weight: 100; position: relative; top: -20px; left: 30px; '>Колибровка с топливом</p>",
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
                    rows: [
                        {
                            cols: [
                                {
                                    width: 40,
                                },
                                {
                                    view: "button",
                                    type: "label",
                                    label: "Откалибровать",
                                    width: 460,
                                    height: 50,
                                    css: "auto_calibration",
                                    id: "auto_calibration"
                                }
                            ]
                        }
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
                                {value: 100, color: "#f0f0f0"},
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
                                                    readonly: false,
                                                    id: "auto_calibration_set_1"
                                                },
                                                {
                                                    view: "button",
                                                    type: "label",
                                                    label: "Полный",
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
                                                    readonly: false,
                                                    id: "auto_calibration_set_2"
                                                },
                                                {
                                                    view: "button",
                                                    type: "label",
                                                    label: "Пустой",
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
                                    label: "Редактировать значения",
                                    width: 460,
                                    height: 50,
                                    css: "edit_values"
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
    }

    listenerLongData = (longData) => {
        $$('auto_calibration_set_2').setValue(longData.emptyTank.toString());
        $$('auto_calibration_set_1').setValue(longData.fullTank.toString());
    }

    init(){
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
    }

}