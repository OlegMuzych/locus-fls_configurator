import {JetView, plugins} from "webix-jet";
import configFile from "../../config-app";
import globalVariable from "../../global-variable-app";
import {getStrLang} from "../../services/auxiliary-functions";

export default class WindowSettings extends JetView {
    config() {
        const _ = this.app.getService("locale")._;

        let win = {
            view: "window",
            position: "center",
            width: 850,
            height: 500,
            id: "window_show",
            modal: true,
            css: "window_show",
            head: {
                rows: [
                    {
                        cols: [
                            {template: _("settings"), type: "header", borderless: true,},
                            {
                                view: "icon", icon: "wxi-close", tooltip: "Close window", click: function () {
                                    $$("window_show").hide()
                                }
                            }
                        ]
                    },
                    {
                        height: 20,
                    },
                    {
                        disabled: false,
                        height: 80,
                        width: 200,
                        cols: [
                            {
                                width: 20,
                            },
                            {
                                view: "combo",
                                width: 750,
                                height: 100,
                                label: `<p>${_("language_selection")}</p>`,
                                labelWidth: 500,
                                css: "window_type_4",
                                inputAlign: "center",
                                id: "language",
                                options: [
                                    {value: "Русский", id: 'ru'},
                                    {value: "English", id: 'en'},
                                    {value: "Как в системе", id: 'like_system'},
                                ]
                            },
                            {}
                        ]
                    },
                    {
                        height: 20,
                    },
                    {
                        width: 200,
                        rows: [
                            {

                                disabled: true,
                                cols: [
                                    {
                                        width: 20,
                                    },
                                    {
                                        view: "label",
                                        label: `<p style='position: relative; top: -20px; text-align: left'>${_("theme_selection")}</p>`,
                                        width: 550,
                                        id: "light_theme_label",
                                        css: "language_windows_modal",
                                    },
                                    {view: "switch", value: 0, id: "dark_light_theme", width: 70, height: 100,},
                                    {},
                                ]
                            },
                            {
                                height: 20,
                            },
                            {
                                disabled: true,
                                height: 90,
                                cols: [
                                    {
                                        width: 20,
                                    },
                                    {
                                        view: "label",
                                        label: `<p style='position: relative; top: -30px; text-align: left'>${_("font_size")}</p>`,
                                        width: 300,
                                        id: "light_theme_label_3",
                                        css: "language_windows_modal",
                                    },
                                    {
                                        view: "slider",
                                        value: "0",
                                        step: 10,
                                        min: 0,
                                        max: 30,
                                        name: "s1",
                                        width: 400,
                                        height: 30,
                                        title: "%",
                                        css: "text_size_slider",
                                        on: {
                                            onChange: function () {
                                                this.define("title", "%" + this.getValue());
                                                this.refresh();
                                            }
                                        }
                                    },
                                    {}
                                ]
                            },
                            {
                                height: 20,
                            },
                            {
                                disabled: false,
                                cols: [
                                    {
                                        width: 20,
                                    },
                                    {
                                        view: "label",
                                        label: `<p style='position: relative; top: -20px; text-align: left'>${_("auto_save_mode")}</p>`,
                                        width: 550,
                                        id: "light_theme_label_2",
                                        css: "language_windows_modal",
                                    },
                                    {view: "switch", value: 1, id: "switchAutoSaveMode", width: 70, height: 100,},
                                    {}
                                ]
                            },


                        ]
                    },
                ]
            },

        }
        return win;
    }
    init(){
        if (configFile.theme.color == 'white') {
            $$("dark_light_theme").setValue(1);
        }

        if (configFile.theme.color == 'black') {
            $$("dark_light_theme").setValue(0);
        }

        globalVariable.autoSaveMode.then(flag => $$("switchAutoSaveMode").setValue(flag));
        $$("switchAutoSaveMode").attachEvent("onChange",  (newValue, oldValue, config) => {
            if (newValue) {
                globalVariable.autoSaveMode = true;
            } else {
                globalVariable.autoSaveMode = false;
            }
        });


        globalVariable.language.then(async (language)=>{
            this.setLanguage(language).then();
            $$("language").setValue(language);
        });

        $$("language").attachEvent("onChange",  (newValue, oldValue, config) => {
            if(config == "user"){
                globalVariable.language = newValue;
                this.setLanguage(newValue);
            }
        });

    }
    showWindow() {
        this.getRoot().show();
    }

    async setLanguage(language){
        let locale = this.app.getService("locale");
        let langStr = null;

        if(language == 'like_system' ){
            let systemLangStr = await window.electron.app("getLocale");
            langStr = getStrLang(systemLangStr);
        }else{
            langStr = getStrLang(language);
        }

        if(langStr != locale.getLang()){
            locale.setLang(langStr);
        }
    }
}