import {JetView} from "webix-jet";
import {llsModelTwo} from "../../../../../models/lls-test-models";
import configFile from "../../../../../config-app";
import configApp from "../../../../../config-app";

export default class StatusMenuTwo extends JetView{
    config(){
        const _ = this.app.getService("locale")._;

        let right_menu_status={
            css:"right_menu_status",
            id:"right_menu_status_two",
            width: 550,
            rows:[
                {
                    height: 20,

                },
                {
                    cols:[
                        {width: 70,},
                        {view:"button", width: 30, height: 30, css:"rows_level_right_menu_switch", localId:"round_for_select_green"},
                        {view:"button", width: 30, height: 30, css:"rows_level_right_menu_switch_define", localId:"round_for_select_red",},
                        {width: 20,},
                        {view:"label", label:_("status_sensor_select_sensor"), height: 30, css:"rows_level_right_menu_info", id:"status_sensor_select_sensor"}
                    ]
                },
                {
                    height: 20,
                },
                {
                    cols:[
                        {width: 70,},
                        {view:"button", width: 30, height: 30, css:"rows_level_right_menu_switch", id:"button_define_define_1"},
                        {view:"button", width: 30, height: 30, css:"rows_level_right_menu_switch_define", id:"button_define_1",},
                        {width: 20,},
                        {view:"label", label:_("status_sensor_is_connected_2"), height: 30, css:"rows_level_right_menu_info", id:"rows_level_right_menu_info_1"}
                    ]
                },
                {
                    height: 10,
                },
                {
                    cols:[
                        {width: 70,},
                        {view:"button", width: 30, height: 30, css:"rows_level_right_menu_switch", localId:"button_define_define_2",},
                        {view:"button", width: 30, height: 30, css:"rows_level_right_menu_switch_define", localId:"button_define_2",},
                        {width: 20,},
                        {view:"label", label:_("status_fuel_is_stable"), height: 30, css:"rows_level_right_menu_info", id:"rows_level_right_menu_info_2"}
                    ]
                },
                {
                    height: 10,
                },
                {
                    cols:[
                        {width: 70,},
                        {view:"button", width: 30, height: 30, css:"rows_level_right_menu_switch", localId:"button_define_define_3"},
                        {view:"button", width: 30, height: 30, css:"rows_level_right_menu_switch_define", localId:"button_define_3",},
                        {width: 20,},
                        {view:"label", label:_("status_calibration"), height: 30, css:"rows_level_right_menu_info", id:"rows_level_right_menu_info_3"}
                    ]
                },
                {
                    height: 10,
                },
                {
                    cols:[
                        {width: 70,},
                        {view:"button", width: 30, height: 30, css:"rows_level_right_menu_switch", localId:"button_define_4_base", },
                        {view:"button", width: 30, height: 30, css:"rows_level_right_menu_switch_define", localId:"button_define_4",},
                        {width: 20,},
                        {view:"label", label:_("status_thermal_compensation"), height: 30, width:200, css:"rows_level_right_menu_info", id:"rows_level_right_menu_info_4"},
                        {
                            width:5,
                        },
                        {view:"button", type:"image", image:"assets/images/temperature_2.svg", width:30, height:30, css:"thermometer_image",},
                        {view:"text", width: 60, height:30, css:"window_temp", localId:"window_temp", readonly:true, value:"__°"},

                    ]
                },
                {
                    height: 10,
                },
                {
                    // disabled: true,
                    height: 60,
                    hidden: true,
                    rows:[
                        {
                            height: 30,
                            disabled: true,
                            cols:[
                                {
                                    width: 70,
                                },
                                {view:"button", width: 30, height: 30, css:"rows_level_right_menu_switch", id:"button_define_5_base", },
                                {
                                    width: 20,
                                },
                                {
                                    cols:[
                                        {
                                            view: "text",
                                            width: 300,
                                            height: 60,
                                            css: "full_level_windows_status",
                                            readonly: true,
                                            localId: "status_level_fuel",
                                            inputAlign: "center",
                                            value: "Ошибок нет",
                                        },
                                    ]
                                }
                            ]
                        }


                    ]
                },
                {
                    height: 13,
                },
                //
                // {
                //     view:"button",
                //     css: "show_choice_sensor",
                //     localId:"show_choice_sensor_two",
                //     height:12,
                // },
                // {
                //     height: 12,
                //     id:"empty_rows_two"
                // }

            ]
        };

        return right_menu_status;
    }

    destroy() {
        super.destroy();
        llsModelTwo.clearListenerIsConnect(this.listenerConnect);
        llsModelTwo.clearListenerIsDisconnect(this.listenerDisconnect);
        llsModelTwo.clearListenerShortData(this.listenerShortData);
        llsModelTwo.clearListenerLongData(this.listenerLongData);
        llsModelTwo.clearListenerReadCnt(this.listenerReadCnt);
        // llsModelTwo.clear;
    }

    listenerShortData = (shortData)=>{
        // console.log(shortData);
        this.$$("window_temp").setValue(shortData.temperature.toString());
    }

    listenerLongData = (longData)=>{
        if(longData.thermalCompensationType){
            this.setTermoState(true);
        }else{
            this.setTermoState(false);
        }
    }

    listenerConnect = ()=>{
        this.setStatusConnect(true);
        llsModelTwo.getLongData();
    }

    listenerDisconnect = ()=>{
        this.setStatusConnect(false);
    }

    listenerReadCnt= (readCnt)=>{
        this.cntStableComputing(readCnt.cnt);
    }

    init(){
        this.setStatusConnect(false);
        this.setFuelState(false);
        this.setCalibrateState(false);
        this.setTermoState(false);

        llsModelTwo.addListenerIsConnect(this.listenerConnect);
        llsModelTwo.addListenerIsDisconnect(this.listenerDisconnect);
        llsModelTwo.addListenerShortData(this.listenerShortData);
        llsModelTwo.addListenerLongData(this.listenerLongData);
        llsModelTwo.addListenerReadCnt(this.listenerReadCnt);
        llsModelTwo.getStatusConnect();

        this.fullLevelDefault = false;
        this.emptyLevelDefault = false;

        this.on(this.app, "app:fullemptysubview:fullTankDefault", (status) => {
            this.fullLevelDefault = status;
            this.setCalibrateState(this.fullLevelDefault && this.emptyLevelDefault);
        });

        this.on(this.app, "app:fullemptysubview:emptyTankDefault", (status) => {
            this.emptyLevelDefault = status;
            this.setCalibrateState(this.fullLevelDefault && this.emptyLevelDefault);
        });

        this.$$("round_for_select_green").hide();
        this.$$("round_for_select_red").show();
        // this.$$("show_choice_sensor_two").hide();
        this.on(this.app, "app:select_sensor:number", (value) => {
            console.log(value);
            switch(value){
                case "first": {
                    // this.$$("show_choice_sensor_two").hide();
                    this.$$("round_for_select_green").hide();
                    this.$$("round_for_select_red").show();
                    break;
                }
                case "second": {
                    // this.$$("show_choice_sensor_two").show();
                    this.$$("round_for_select_green").show();
                    this.$$("round_for_select_red").hide();
                    break;
                }
            }
        });

        if(configFile.theme == 'light'){
            webix.html.addCss( $$("right_menu_status_two").getNode(), "right_menu_status");
            webix.html.addCss( $$("rows_level_right_menu_info_1").getNode(), "rows_level_right_menu_info");
            webix.html.addCss( $$("rows_level_right_menu_info_2").getNode(), "rows_level_right_menu_info");
            webix.html.addCss( $$("rows_level_right_menu_info_3").getNode(), "rows_level_right_menu_info");
            webix.html.addCss( $$("rows_level_right_menu_info_4").getNode(), "rows_level_right_menu_info");
            webix.html.addCss( this.$$("window_temp").getNode(), "window_temp");
            webix.html.addCss( $$("status_sensor_select_sensor").getNode(), "rows_level_right_menu_info");
        }
        if(configFile.theme == 'dark'){
            webix.html.addCss( $$("right_menu_status_two").getNode(), "right_menu_status_dark");
            webix.html.addCss( $$("rows_level_right_menu_info_1").getNode(), "rows_level_right_menu_info_dark");
            webix.html.addCss( $$("rows_level_right_menu_info_2").getNode(), "rows_level_right_menu_info_dark");
            webix.html.addCss( $$("rows_level_right_menu_info_3").getNode(), "rows_level_right_menu_info_dark");
            webix.html.addCss( $$("rows_level_right_menu_info_4").getNode(), "rows_level_right_menu_info_dark");
            webix.html.addCss( this.$$("window_temp").getNode(), "window_temp_dark");
            webix.html.addCss( $$("status_sensor_select_sensor").getNode(), "rows_level_right_menu_info_dark");
        }
    }

    lastCnt = 0;
    cntStableComputing(currentLevel){
        let difference = Math.abs(this.lastCnt - currentLevel);
        this.lastCnt = currentLevel;
        if(difference > configApp.settings.differenceFuelForStable){
            this.setFuelState(false);
        }else{
            this.setFuelState(true);
        }
    }

    setStatusConnect(status){
        if(status){
            $$("button_define_define_1").show();
            $$("button_define_1").hide();
        }else{
            $$("button_define_define_1").hide();
            $$("button_define_1").show();
        }
    };

    setFuelState(status){
        if(status){
            this.$$("button_define_define_2").show();
            this.$$("button_define_2").hide();
        }else{
            this.$$("button_define_define_2").hide();
            this.$$("button_define_2").show();
        }
    };

    setCalibrateState(status){
        if(status){
            this.$$("button_define_define_3").show();
            this.$$("button_define_3").hide();
        }else{
            this.$$("button_define_define_3").hide();
            this.$$("button_define_3").show();
        }
    };


    setTermoState(status){
        if(status){
            this.$$("button_define_4_base").show();
            this.$$("button_define_4").hide();
        }else{
            this.$$("button_define_4_base").hide();
            this.$$("button_define_4").show();
        }
    };

}

// function setStatusConnect(status){
//     if(status){
//         $$("button_define_define_1").show();
//         $$("button_define_1").hide();
//     }else{
//         $$("button_define_define_1").hide();
//         $$("button_define_1").show();
//     }
// };
//
// function setFuelState(status){
//     if(status){
//         $$("button_define_define_2").show();
//         $$("button_define_2").hide();
//     }else{
//         $$("button_define_define_2").hide();
//         $$("button_define_2").show();
//     }
// };
//
// function setCalibrateState(status){
//     if(status){
//         $$("button_define_define_3").show();
//         $$("button_define_3").hide();
//     }else{
//         $$("button_define_define_3").hide();
//         $$("button_define_3").show();
//     }
// };
//
//
// function setTermoState(status){
//     if(status){
//         $$("button_define_4_base").show();
//         $$("button_define_4").hide();
//     }else{
//         $$("button_define_4_base").hide();
//         $$("button_define_4").show();
//     }
// };
