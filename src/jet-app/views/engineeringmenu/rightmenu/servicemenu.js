import {JetView} from "webix-jet";
import ResetLlsWindow from "../windows/reset-lls";
import llsModel from "../../../models/lls-model";
import PasswordWindow from "../windows/password";

export default class ServiceMenu extends JetView {
    config() {
        let right_menu_button = {
            height: 95,
            rows: [
                {
                    //Кнопки сверху в правом меню-----------------------//
                    paddingY: 20,
                    cols: [
                        {},
                        {
                            view: "button",
                            width: 250,
                            height: 70,
                            label: "Сервис",
                            css: "button_right_menu_top_1",
                            id: "buttonService"
                        },
                        {
                            width: 10,
                        },
                        {
                            view: "button",
                            width: 250,
                            height: 70,
                            label: "Пароль",
                            css: "button_right_menu_top_1",
                            id: "buttonPassword"
                        },
                        {}
                    ]
                }
            ]
        };
        return right_menu_button;
    }

    init() {
        // Кнопка Сервис -------------------------------//
        let service = {
            view: "popup",
            id: "popService",
            css: "service_button",
            width: 245,
            height: 400,
            body: {
                view: "list",
                data: [
                    {id: "updateFramework", location: "Обновить прошивку", name: ""},
                    {id: "resetLls", location: "Сброс всех настроек", name: ""},
                ],
                id: "list",
                template: "#name# - #location#",
                autoheight: true,
                select: true
            }
        };

        this.popService = this.ui(service);

        this.$$('buttonService').attachEvent("onItemClick", (id, e) => {
            console.log('click');
            this.popService.show($$(id).getNode());
        });

        this.resetLlsWindow = this.ui(ResetLlsWindow);
        $$("list").attachEvent("onItemClick", (id, name, e) => {
            console.log("click");
            if (id == 'resetLls') {
                this.resetLlsWindow.showWindow();
            }

            if (id == 'updateFramework') {
                //todo: show update framework window
            }
        });

        this.passwordWindow = this.ui(PasswordWindow);
        $$("buttonPassword").attachEvent("onItemClick", (id, name, e) => {
            console.log("click");
            this.passwordWindow.showWindow();
        });
    }
}