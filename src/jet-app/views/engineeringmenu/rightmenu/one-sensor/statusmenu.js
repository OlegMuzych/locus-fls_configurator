import {JetView} from "webix-jet";
import {llsModelOne} from "../../../../models/lls-test-models";
import configFile from "../../../../config-app";
import configApp from "../../../../config-app";

export default class StatusMenu extends JetView{
    config(){
        const _ = this.app.getService("locale")._;

        let right_menu_status={
            css:"right_menu_status",
            id:"right_menu_status",
            width: 550,
            rows:[
                {
                    height: 20,

                },
                {
                    cols:[
                        {width: 70,},
                        {view:"button", width: 30, height: 30, css:"rows_level_right_menu_switch", id:"button_define_define_1"},
                        {view:"button", width: 30, height: 30, css:"rows_level_right_menu_switch_define", id:"button_define_1",},
                        {width: 20,},
                        {view:"label", label:_("status_sensor_is_connected"), height: 30, css:"rows_level_right_menu_info", id:"rows_level_right_menu_info_1"}
                    ]
                },
                {
                    height: 10,
                },
                {
                    cols:[
                        {width: 70,},
                        {view:"button", width: 30, height: 30, css:"rows_level_right_menu_switch", id:"button_define_define_2",},
                        {view:"button", width: 30, height: 30, css:"rows_level_right_menu_switch_define", id:"button_define_2",},
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
                        {view:"button", width: 30, height: 30, css:"rows_level_right_menu_switch", id:"button_define_define_3"},
                        {view:"button", width: 30, height: 30, css:"rows_level_right_menu_switch_define", id:"button_define_3",},
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
                        {view:"button", width: 30, height: 30, css:"rows_level_right_menu_switch", id:"button_define_4_base", },
                        {view:"button", width: 30, height: 30, css:"rows_level_right_menu_switch_define", id:"button_define_4",},
                        {width: 20,},
                        {view:"label", label:_("status_thermal_compensation"), height: 30, width:200, css:"rows_level_right_menu_info", id:"rows_level_right_menu_info_4"},
                        {
                            width:5,
                        },
                        {view:"button", type:"image", image:"assets/images/temperature_2.svg", width:30, height:30, css:"thermometer_image",},
                        {view:"text", width: 60, height:30, css:"window_temp", id:"window_temp", readonly:true, value:"__°"},

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
                    height: 18,
                },
            ]
        };

        return right_menu_status;
    }

    destroy() {
        super.destroy();
        llsModelOne.clearListenerIsConnect(this.listenerConnect);
        llsModelOne.clearListenerIsDisconnect(this.listenerDisconnect);
        llsModelOne.clearListenerShortData(this.listenerShortData);
        llsModelOne.clearListenerLongData(this.listenerLongData);
        llsModelOne.clearListenerReadCnt(this.listenerReadCnt);
        // llsModelOne.clear;
    }

    listenerShortData = (shortData)=>{
        // console.log(shortData);
        $$("window_temp").setValue(shortData.temperature.toString());
    }

    listenerLongData = (longData)=>{
        if(longData.thermalCompensationType){
            setTermoState(true);
        }else{
            setTermoState(false);
        }
    }

    listenerConnect = ()=>{
        setStatusConnect(true);
        llsModelOne.getLongData();
    }

    listenerDisconnect = ()=>{
        setStatusConnect(false);
    }

    listenerReadCnt= (readCnt)=>{
        this.cntStableComputing(readCnt.cnt);
    }

    init(){
        setStatusConnect(false);
        setFuelState(false);
        setCalibrateState(false);
        setTermoState(false);

        llsModelOne.addListenerIsConnect(this.listenerConnect);
        llsModelOne.addListenerIsDisconnect(this.listenerDisconnect);
        llsModelOne.addListenerShortData(this.listenerShortData);
        llsModelOne.addListenerLongData(this.listenerLongData);
        llsModelOne.addListenerReadCnt(this.listenerReadCnt);
        llsModelOne.getStatusConnect();

        this.fullLevelDefault = false;
        this.emptyLevelDefault = false;

        this.on(this.app, "app:fullemptysubview:one:fullTankDefault", (status) => {
            this.fullLevelDefault = status;
            setCalibrateState(this.fullLevelDefault && this.emptyLevelDefault);
        });

        this.on(this.app, "app:fullemptysubview:one:emptyTankDefault", (status) => {
            this.emptyLevelDefault = status;
            setCalibrateState(this.fullLevelDefault && this.emptyLevelDefault);
        });




        if(configFile.theme == 'light'){
            webix.html.addCss( $$("right_menu_status").getNode(), "right_menu_status");
            webix.html.addCss( $$("rows_level_right_menu_info_1").getNode(), "rows_level_right_menu_info");
            webix.html.addCss( $$("rows_level_right_menu_info_2").getNode(), "rows_level_right_menu_info");
            webix.html.addCss( $$("rows_level_right_menu_info_3").getNode(), "rows_level_right_menu_info");
            webix.html.addCss( $$("rows_level_right_menu_info_4").getNode(), "rows_level_right_menu_info");
            webix.html.addCss( $$("window_temp").getNode(), "window_temp");

        }
        if(configFile.theme == 'dark'){
            webix.html.addCss( $$("right_menu_status").getNode(), "right_menu_status_dark");
            webix.html.addCss( $$("rows_level_right_menu_info_1").getNode(), "rows_level_right_menu_info_dark");
            webix.html.addCss( $$("rows_level_right_menu_info_2").getNode(), "rows_level_right_menu_info_dark");
            webix.html.addCss( $$("rows_level_right_menu_info_3").getNode(), "rows_level_right_menu_info_dark");
            webix.html.addCss( $$("rows_level_right_menu_info_4").getNode(), "rows_level_right_menu_info_dark");
            webix.html.addCss( $$("window_temp").getNode(), "window_temp_dark");

        }
    }

    lastCnt = 0;
    cntStableComputing(currentLevel){
        let difference = Math.abs(this.lastCnt - currentLevel);
        this.lastCnt = currentLevel;
        if(difference > configApp.settings.differenceFuelForStable){
            setFuelState(false);
        }else{
            setFuelState(true);
        }
    }
}

function setStatusConnect(status){
    if(status){
        $$("button_define_define_1").show();
        $$("button_define_1").hide();
    }else{
        $$("button_define_define_1").hide();
        $$("button_define_1").show();
    }
};

function setFuelState(status){
    if(status){
        $$("button_define_define_2").show();
        $$("button_define_2").hide();
    }else{
        $$("button_define_define_2").hide();
        $$("button_define_2").show();
    }
};

function setCalibrateState(status){
    if(status){
        $$("button_define_define_3").show();
        $$("button_define_3").hide();
    }else{
        $$("button_define_define_3").hide();
        $$("button_define_3").show();
    }
};


function setTermoState(status){
    if(status){
        $$("button_define_4_base").show();
        $$("button_define_4").hide();
    }else{
        $$("button_define_4_base").hide();
        $$("button_define_4").show();
    }
};