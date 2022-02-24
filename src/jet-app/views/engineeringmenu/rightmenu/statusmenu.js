import {JetView} from "webix-jet";

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
}
