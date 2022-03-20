import {JetView} from "webix-jet";
import configFile from "../../../config-app";

export default class LeftMenu extends JetView{
    config(){
        let left_menu = {
            view: "scrollview",
            scroll: "y",
            id: "1",
            body: {
                id: "style_left_cols",
                css: "style_left_cols",
                rows: [
                    {
                        view: "button",
                        type: "image",
                        image: "assets/images/model_101.svg",
                        width: 160,
                        height: 200,
                        css: "left_menu_button",
                        id: "left_menu_button_1"
                    },
                    {
                        view: "button",
                        type: "image",
                        image: "assets/images/model_201.svg",
                        width: 160,
                        height: 200,
                        css: "left_menu_button",
                        id: "left_menu_button_2"
                    },
                    {
                        view: "button",
                        type: "image",
                        image: "assets/images/MODEL_301_BLE.svg",
                        width: 160,
                        height: 200,
                        css: "left_menu_button",
                        id: "left_menu_button_3"
                    },
                    {
                        height: 115,
                    },

                    {
                        view: "button",
                        type: "image",
                        image: "assets/images/Back.svg",
                        width: 160,
                        height: 120,
                        localId: "button_back",
                        css: "left_menu_button_reference",
                    },
                    {
                        height: 1,
                    },
                    {
                        view: "button",
                        type: "image",
                        image: "assets/images/info.svg",
                        width: 160,
                        height: 200,
                        id: "button_reference",
                        css: "left_menu_button_reference",
                    },
                    {

                    }

                ]
            }
        };

        return left_menu;
    }

    init(){
        this.$$("button_back").attachEvent("onItemClick", (id, e)=>{
            this.show("win");
        });

        this.on(this.app, "app:calibrationSubview:startCalibrate", (type) => {
            this.$$('button_back').disable();
        });

        this.on(this.app, "app:calibrationSubview:finishCalibrate", () => {
            this.$$('button_back').enable();
        });

        if(configFile.theme.color == 'white'){
            webix.html.addCss( $$("style_left_cols").getNode(), "style_left_cols");
            webix.html.addCss( $$("left_menu_button_1").getNode(), "left_menu_button");
            webix.html.addCss( $$("left_menu_button_2").getNode(), "left_menu_button");
            webix.html.addCss( $$("left_menu_button_3").getNode(), "left_menu_button");
            webix.html.addCss( $$("button_reference").getNode(), "left_menu_button_reference");
            webix.html.addCss( this.$$("button_back").getNode(), "left_menu_button_reference");
        }
        if(configFile.theme.color == 'black'){
            webix.html.addCss( $$("style_left_cols").getNode(), "style_left_cols_dark");
            webix.html.addCss( $$("left_menu_button_1").getNode(), "left_menu_button_dark");
            webix.html.addCss( $$("left_menu_button_2").getNode(), "left_menu_button_dark");
            webix.html.addCss( $$("left_menu_button_3").getNode(), "left_menu_button_dark");
            webix.html.addCss( $$("button_reference").getNode(), "left_menu_button_reference_dark");
            webix.html.addCss( this.$$("button_back").getNode(), "left_menu_button_reference_dark");
        }
    }
}
