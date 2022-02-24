import {JetView} from "webix-jet";

export default class ServiceMenu extends JetView {
    config() {
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
        return right_menu_button;
    }
}