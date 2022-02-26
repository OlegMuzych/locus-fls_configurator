import {JetView} from "webix-jet";
import llsModel from "../../../models/lls-model";

export default class StatusMenu extends JetView{
    config(){
        let right_menu_status={
            css:"right_menu_status",
            id:"right_menu_status",
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
                        {view:"label", label:"Датчик подключен", height: 30, css:"rows_level_right_menu_info", id:"rows_level_right_menu_info_1"}
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
                        {view:"label", label:"Топливо стабильно", height: 30, css:"rows_level_right_menu_info", id:"rows_level_right_menu_info_2"}
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
                        {view:"label", label:"Калибровка не требуется", height: 30, css:"rows_level_right_menu_info", id:"rows_level_right_menu_info_3"}
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
                        {view:"label", label:"Термокомпенсация", height: 30, width:200, css:"rows_level_right_menu_info", id:"rows_level_right_menu_info_4"},
                        {
                            width:50,
                        },
                        {view:"button", type:"image", image:"assets/images/temperature.png", width:30, height:30, css:"thermometer_image",},
                        {view:"text", width: 60, height:30, css:"window_temp", id:"window_temp", readonly:true, value:"25°"},

                    ]
                },
                {
                    height: 20,
                }
            ]
        };

        return right_menu_status;
    }

    destroy() {
        super.destroy();
        llsModel.clearListenerIsConnect(this.listenerConnect);
        llsModel.clearListenerIsDisconnect(this.listenerDisconnect);
        llsModel.clearListenerShortData(this.listenerDisconnect);
    }

    listenerShortData = (shortData)=>{
        console.log(shortData);
        $$("window_temp").setValue(shortData.temperature.toString());
    }

    listenerConnect = ()=>{
        setStatusConnect(true);
        llsModel.getLongData();
    }

    listenerDisconnect = ()=>{
        setStatusConnect(false);
    }

    init(){
        llsModel.addListenerIsConnect(this.listenerConnect);
        llsModel.addListenerIsDisconnect(this.listenerDisconnect);
        llsModel.addListenerShortData(this.listenerShortData);
        llsModel.getStatusConnect();

        setStatusConnect(false);
        setFuelState(false);
        setCalibrateState(false);
        setTermoState(false);
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