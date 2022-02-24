import {JetView} from "webix-jet";
import CentralMenu from "./centralmenu";
import StatusMenu from "./statusmenu";

export default class RightMenu extends JetView{
    config(){
        let right_menu_button={
            height: 95,
            rows:[
                {
                    //Кнопки сверху в правом меню-----------------------//
                    paddingY: 20,
                    cols: [
                        {

                        },
                        {view: "button", width: 250, height: 70, label: "Сервис",  popup: "my_pop_2", css: "button_right_menu_top_1", id:"button_right_menu_top_1"},
                        {
                            width: 10,
                        },
                        {view: "button", width: 250, height: 70, label: "Пароль", css: "button_right_menu_top_1", id:"button_right_menu_top_2"},
                        {

                        }
                    ]
                }
            ]
        };

        let body = {
            css: "rows_right",
            id: "rows_right_2",
            rows: [
                {
                    rows: [
                        right_menu_button,
                    ]
                },
                {
                    height: 20,
                },
                {
                    rows: [
                        StatusMenu,
                    ]
                },
                {
                    height: 20,
                },
                {
                    rows: [
                        //right_menu_setup
                    ]
                },
                {
                    height: 1,
                },
                {
                    rows: [
                        //right_menu_filter
                    ]
                },
                {
                    rows: [
                        // right_menu_calibration,
                        // right_menu_calibration_setup,
                        // right_menu_calibration_drain_2,
                        // fuel_filling,
                        // fuel_filling_2,
                    ]
                }
            ]
        }
        return body;
    }
}
