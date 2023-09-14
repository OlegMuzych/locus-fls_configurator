import {JetView} from "webix-jet";
import configFile from "../../../config-app";
// import llsModel from "../../../models/lls-model";
import {llsModelTwo} from "../../../models/lls-test-models";
import trademark from "../../../../trademark/trademark";

const llsModel = llsModelTwo;
export default class LeftMenuTwo extends JetView{
    config(){
        const _ = this.app.getService("locale")._;
        const _t = trademark._t;

        let left_menu = {
            view:"scrollview",
            localId:"leftMenu",

            body:{


                localId: "style_left_cols",
                css: "style_left_cols",
                cols:[
                    {
                        width: 10,
                    },
                    {
                        rows: [
                            {
                                height: 5,
                            },
                            {
                                view: "button",
                                type:"label",
                                label:_("button_save_setting"),
                                css: "edit_values",
                                width: 160,
                                height: 103,
                                localId:"save_settings"
                            },
                            {
                                height: 10,
                            },
                            {
                                view: "button",
                                type: "image",
                                image: _t('image_button_1'),
                                width: 160,
                                height: 200,
                                css: "left_menu_button",
                                localId: "left_menu_button_1",
                                // hidden: true,
                            },
                            {
                                height: 10,
                            },
                            {
                                view: "button",
                                type: "image",
                                // image: "assets/images/ONE.MAX.svg",
                                image: _t('image_button_2'),
                                width: 160,
                                height: 200,
                                // css: "left_menu_button_2",
                                css: "left_menu_button",
                                localId: "left_menu_button_2",
                                // hidden: true,
                            },
                            {
                                height: 10,
                            },
                            {
                                view: "button",
                                type: "image",
                                image: _t('image_button_3'),
                                width: 160,
                                height: 200,
                                css: "left_menu_button",
                                localId: "left_menu_button_3",
                                // hidden: true,
                            },
                            {
                            },
                            {
                                view: "button",
                                type: "image",
                                image: _("button_image_back"),
                                width: 160,
                                height: 120,
                                id: "button_back",
                                css: "left_menu_button_reference",
                            },
                        ]
                    },
                    {
                        width: 20,
                    },
                    {
                        id: "rows_info",
                        hidden: true,
                        rows:[

                        ]
                    }
                ]
            }

        };

        return left_menu;
    }
    listenerLongData = (longData)=>{
        if(longData.typeLls === 0x01){
            this.setModel201_101(configFile.theme);
        }else if(longData.typeLls === 0x03){
            this.setModel301(configFile.theme);
        }
    }

    destroy() {
        super.destroy();
        llsModel.clearListenerLongData(this.listenerLongData);
    }

    init(){
        const _t = trademark._t;

        llsModel.addListenerLongData(this.listenerLongData);

        this.$$("leftMenu").hide();
        this.on(this.app, "app:select_sensor:number", (value) => {
            switch(value){
                case "first": {
                    this.$$("leftMenu").hide();
                    break;
                }
                case "second": {
                    this.$$("leftMenu").show();
                    break;
                }
            }
        });

        this.$$("save_settings").attachEvent("onItemClick", (id, e) => {
            llsModel.setLongData(llsModel.newLongData);
            // this.app.callEvent("app:settings:setToLls", []);
        });


        this.$$("button_back").attachEvent("onItemClick", (id, e)=>{
            this.show("win");
        });

        this.on(this.app, "app:calibrationSubview:startCalibrate", (type) => {
            this.$$('button_back').disable();
        });

        this.on(this.app, "app:calibrationSubview:finishCalibrate", () => {
            this.$$('button_back').enable();
        });
        const _ = this.app.getService("locale")._;

        // $$("button_reference").attachEvent("onItemClick", (id, e) => {
        //     if ($$("rows_info").isVisible()){
        //         $$("rows_info").hide();
        //     } else {
        //         $$("rows_info").show();
        //     }
        // })

        if(configFile.theme == 'light'){
            webix.html.addCss( this.$$("style_left_cols").getNode(), "style_left_cols");
            webix.html.addCss( this.$$("left_menu_button_1").getNode(), "left_menu_button_2");
            webix.html.addCss( this.$$("left_menu_button_2").getNode(), "left_menu_button_2");
            webix.html.addCss( this.$$("left_menu_button_3").getNode(), "left_menu_button_2");
            // webix.html.addCss( $$("button_reference").getNode(), "left_menu_button_reference");
            webix.html.addCss( this.$$("button_back").getNode(), "left_menu_button_reference");
            // webix.html.addCss( this.$$("left_menu_button_3").getNode(), "left_menu_button_2");
            webix.html.addCss( this.$$("save_settings").getNode(), "edit_values");



            this.$$("left_menu_button_1").define("image", _t("image_button_1"));
            // $$("left_menu_button_2").define("image", "assets/images//MODEL_201.svg");
            this.$$("left_menu_button_2").define("image", _t("image_button_2"));
            // $$("left_menu_button_3").define("image", "assets/images//MODEL_301_BLE.svg");
            this.$$("left_menu_button_3").define("image", _t("image_button_3"));
            $$("button_back").define("image", _("button_image_back"));
            // $$("button_reference").define("image", _("button_image_info"));

            this.$$("left_menu_button_1").refresh();
            this.$$("left_menu_button_2").refresh();
            this.$$("left_menu_button_3").refresh();
            $$("button_back").refresh();
            // $$("button_reference").refresh();


        }
        if(configFile.theme == 'dark'){
            webix.html.addCss( this.$$("style_left_cols").getNode(), "style_left_cols_dark");
            webix.html.addCss( this.$$("left_menu_button_1").getNode(), "left_menu_button_2_dark");
            webix.html.addCss( this.$$("left_menu_button_2").getNode(), "left_menu_button_2_dark");
            // webix.html.addCss( $$("left_menu_button_2").getNode(), "left_menu_button_2_dark");
            webix.html.addCss( this.$$("left_menu_button_3").getNode(), "left_menu_button_2_dark");
            // webix.html.addCss( $$("button_reference").getNode(), "left_menu_button_reference_dark");
            webix.html.addCss( this.$$("button_back").getNode(), "left_menu_button_reference_dark");
            // webix.html.addCss( this.$$("left_menu_button_3").getNode(), "left_menu_button_2_dark");
            webix.html.addCss( this.$$("save_settings").getNode(), "edit_values_dark");



            this.$$("left_menu_button_1").define("image", _t("image_button_1_dark"));
            // $$("left_menu_button_2").define("image", "assets/images/MODEL_201_inverse.svg")
            this.$$("left_menu_button_2").define("image", _t("image_button_2_dark"));
            // $$("left_menu_button_3").define("image", "assets/images/MODEL_301_BLE_inverse.svg")
            this.$$("left_menu_button_3").define("image", _t("image_button_3_dark"));
            $$("button_back").define("image", _("button_image_back_dark"));
            // $$("button_reference").define("image", _("button_image_info_dark"));

            this.$$("left_menu_button_1").refresh();
            this.$$("left_menu_button_2").refresh();
            this.$$("left_menu_button_3").refresh();
            $$("button_back").refresh();
            // $$("button_reference").refresh();
        }
    }
    setModel201_101(theme){
        if(theme === 'dark'){
            webix.html.removeCss( this.$$("left_menu_button_1").getNode(), "left_menu_button_2_dark");
            webix.html.removeCss( this.$$("left_menu_button_2").getNode(), "left_menu_button_2_dark");
            webix.html.removeCss( this.$$("left_menu_button_3").getNode(), "left_menu_button_2_dark");
            webix.html.addCss( this.$$("left_menu_button_1").getNode(), "left_menu_button_dark");
            webix.html.addCss( this.$$("left_menu_button_2").getNode(), "left_menu_button_dark");
            webix.html.addCss( this.$$("left_menu_button_3").getNode(), "left_menu_button_2_dark");
        }else{
            webix.html.removeCss( this.$$("left_menu_button_1").getNode(), "left_menu_button_2");
            webix.html.removeCss( this.$$("left_menu_button_2").getNode(), "left_menu_button_2");
            webix.html.removeCss( this.$$("left_menu_button_3").getNode(), "left_menu_button_2");
            webix.html.addCss( this.$$("left_menu_button_1").getNode(), "left_menu_button");
            webix.html.addCss( this.$$("left_menu_button_2").getNode(), "left_menu_button");
            webix.html.addCss( this.$$("left_menu_button_3").getNode(), "left_menu_button_2");
        }
        this.$$("left_menu_button_1").refresh();
        this.$$("left_menu_button_2").refresh();
        this.$$("left_menu_button_3").refresh();
    }
    setModel301(theme){
        if(theme === 'dark'){
            webix.html.removeCss( this.$$("left_menu_button_1").getNode(), "left_menu_button_2_dark");
            webix.html.removeCss( this.$$("left_menu_button_2").getNode(), "left_menu_button_2_dark");
            webix.html.removeCss( this.$$("left_menu_button_3").getNode(), "left_menu_button_2_dark");
            webix.html.addCss( this.$$("left_menu_button_1").getNode(), "left_menu_button_2_dark");
            webix.html.addCss( this.$$("left_menu_button_2").getNode(), "left_menu_button_2_dark");
            webix.html.addCss( this.$$("left_menu_button_3").getNode(), "left_menu_button_dark");
        }else{
            webix.html.removeCss( this.$$("left_menu_button_1").getNode(), "left_menu_button_2");
            webix.html.removeCss( this.$$("left_menu_button_2").getNode(), "left_menu_button_2");
            webix.html.removeCss( this.$$("left_menu_button_3").getNode(), "left_menu_button_2");
            webix.html.addCss( this.$$("left_menu_button_1").getNode(), "left_menu_button_2");
            webix.html.addCss( this.$$("left_menu_button_2").getNode(), "left_menu_button_2");
            webix.html.addCss( this.$$("left_menu_button_3").getNode(), "left_menu_button");
        }
        this.$$("left_menu_button_1").refresh();
        this.$$("left_menu_button_2").refresh();
        this.$$("left_menu_button_3").refresh();
    }
}
