
// webix.ui.fullScreen();
import {JetView} from "webix-jet";

export default class Page9View extends JetView {
    config() {


            // Версия прошивки надпись
            var ver = {
                cols: [
                    {
                        width: 10,
                    },
                    {view: "label", label: "Версия Программы v1.1.1", Width: 200, align: "left",}
                ]
            };

            // Логотип
            var logo = {
                view: "button",
                type: "image",
                image: "../sources/models/image/logo_1.png",
                width: 500,
                height: 300,
                css: "logo_1",

            };

            // Кнопка "мастер настройки"
            var button_master_setup = {
                view: "button",
                type: "image",
                image: "../sources/models/image/master.png",
                label: "<span style='color:#000; font-size:26px; position: relative; top:70px; left: -40px;'>Мастер Настройки</span>",
                maxWidth: 480,
                minWidth: 400,
                height: 300,
                css: "button_1",
                id: "master_setup"

            };
            // Кнопка "Инженерное меню"
            var button_engineering_setup = {
                view: "button",
                type: "image",
                image: "../sources/models/image/engineer.png",
                label: "<span style='color:#000; font-size:26px; position: relative; top:70px; left: -40px;'>Инженерное меню</span>",
                maxWidth: 480,
                minWidth: 400,
                height: 300,
                css: "button_2",
                id: "engineering_setup"
            };

            // Кнопка "Справка"
            var button_reference = {
                view: "button",
                type: "image",
                image: "../sources/models/image/info.png",
                label: "<span style='color:#000; font-size:26px; position: relative; top:70px; left: -40px;'>Справка</span>",
                maxWidth: 480,
                minWidth: 400,
                height: 300,
                css: "button_3",
                id: "reference"
            };

            // Кнопка "Настройка приложения"
            var button_application_menu = {
                view: "button",
                type: "image",
                image: "../sources/models/image/konfig.png",
                label: "<span style='color:#000; font-size:26px; position: relative; top:70px; left: -40px;'>Настройки приложения</span>",
                align: "center",
                maxWidth: 480,
                minWidth: 400,
                height: 300,
                css: "button_4",
                id: "application_menu"

            };


            return {
                height: 1100,
                css:"color_rows_page1",
                rows: [
                    ver,
                    {
                        paddingY: -50,
                        cols: [
                            {},
                            logo,
                            {}
                        ]
                    },
                    {
                        rows: [
                            {
                                cols: [
                                    {},
                                    button_master_setup,
                                    {
                                        width: 30,
                                    },
                                    button_engineering_setup,
                                    {}
                                ]
                            },
                            {
                                paddingY: 30,
                                cols: [
                                    {},
                                    button_reference,
                                    {
                                        width: 30,
                                    },
                                    button_application_menu,
                                    {}
                                ]
                            }
                        ]
                    },
                    {
                        rows: [
                            {}
                        ]
                    }

                ]
            }
        }


    init(view){


        $$("engineering_setup").attachEvent("onItemClick", (id, e)=>{
            this.show("2page");
        });


    }

}