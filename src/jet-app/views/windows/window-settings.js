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
            localId: "window_show",
            modal: true,
            css: "window_show",
            head: {
                rows: [
                    {
                        cols: [
                            {template: _("settings"), type: "header", borderless: true,},
                            {
                                view: "icon", icon: "wxi-close", tooltip: "Close window", click: () => {
                                    this.getRoot().hide();
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
                                localId: "language",
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
                                label: `<p>${_("theme_selection")}</p>`,
                                labelWidth: 500,
                                css: "window_type_4",
                                inputAlign: "center",
                                localId: "comboTheme",
                                options: [
                                    {value: _("dark_theme"), id: 'dark'},
                                    {value: _("light_theme"), id: 'light'},
                                    {value: _("like_system"), id: 'like_system'},
                                ]
                            },
                            {}
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
                                localId: "labelFontSize",
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
                                localId: "labelAutoSaveMode",
                                css: "language_windows_modal",
                            },
                            {view: "switch", value: 1, localId: "switchAutoSaveMode", width: 70, height: 100,},
                            {}
                        ]
                    },


                    // {
                    //     width: 200,
                    //     rows: [
                    //         {
                    //             disabled: false,
                    //             height: 80,
                    //             width: 200,
                    //             cols: [
                    //                 {
                    //                     width: 20,
                    //                 },
                    //                 {
                    //                     view: "combo",
                    //                     width: 750,
                    //                     height: 100,
                    //                     label: `<p>${_("theme_selection")}</p>`,
                    //                     labelWidth: 500,
                    //                     css: "window_type_4",
                    //                     inputAlign: "center",
                    //                     localId: "comboTheme",
                    //                     options: [
                    //                         {value: _("dark_theme"), id: 'dark'},
                    //                         {value: _("light_theme"), id: 'light'},
                    //                         {value: _("like_system"), id: 'like_system'},
                    //                     ]
                    //                 },
                    //                 {}
                    //             ]
                    //         },
                    //         // {
                    //         //
                    //         //     disabled: true,
                    //         //     cols: [
                    //         //         {
                    //         //             width: 20,
                    //         //         },
                    //         //         {
                    //         //             view: "label",
                    //         //             label: `<p style='position: relative; top: -20px; text-align: left'>${_("theme_selection")}</p>`,
                    //         //             width: 550,
                    //         //             id: "light_theme_label",
                    //         //             css: "language_windows_modal",
                    //         //         },
                    //         //         {view: "switch", value: 0, localId: "dark_light_theme", width: 70, height: 100,},
                    //         //         {},
                    //         //     ]
                    //         // },
                    //         {
                    //             height: 20,
                    //         },
                    //         {
                    //             disabled: true,
                    //             height: 90,
                    //             cols: [
                    //                 {
                    //                     width: 20,
                    //                 },
                    //                 {
                    //                     view: "label",
                    //                     label: `<p style='position: relative; top: -30px; text-align: left'>${_("font_size")}</p>`,
                    //                     width: 300,
                    //                     localId: "labelFontSize",
                    //                     css: "language_windows_modal",
                    //                 },
                    //                 {
                    //                     view: "slider",
                    //                     value: "0",
                    //                     step: 10,
                    //                     min: 0,
                    //                     max: 30,
                    //                     name: "s1",
                    //                     width: 400,
                    //                     height: 30,
                    //                     title: "%",
                    //                     css: "text_size_slider",
                    //                     on: {
                    //                         onChange: function () {
                    //                             this.define("title", "%" + this.getValue());
                    //                             this.refresh();
                    //                         }
                    //                     }
                    //                 },
                    //                 {}
                    //             ]
                    //         },
                    //         {
                    //             height: 20,
                    //         },
                    //         {
                    //             disabled: false,
                    //             cols: [
                    //                 {
                    //                     width: 20,
                    //                 },
                    //                 {
                    //                     view: "label",
                    //                     label: `<p style='position: relative; top: -20px; text-align: left'>${_("auto_save_mode")}</p>`,
                    //                     width: 550,
                    //                     localId: "labelAutoSaveMode",
                    //                     css: "language_windows_modal",
                    //                 },
                    //                 {view: "switch", value: 1, localId: "switchAutoSaveMode", width: 70, height: 100,},
                    //                 {}
                    //             ]
                    //         },
                    //     ]
                    // },
                ]
            },

        }
        return win;
    }

    init() {
        /* Theme ****************/
        globalVariable.theme.then(theme => {
            this.$$("comboTheme").setValue(theme);
            // if (theme == 'like_system') {
            //     let systemTheme =
            //         configFile.theme = theme;
            // } else {
            //     configFile.theme = theme;
            // }

        });

        this.setTheme();

        this.$$("comboTheme").attachEvent("onChange", async (newValue, oldValue, config) => {
            globalVariable.theme = newValue;
            if (newValue == 'like_system') {
                let systemIsDark = await window.electron.nativeTheme('shouldUseDarkColors');
                if (systemIsDark){
                    configFile.theme = "dark";
                }else{
                    configFile.theme = 'light';
                }
            } else {
                configFile.theme = newValue;
            }
            this.setTheme();
            this.getParentView().setTheme();
        });

        this.getRoot().attachEvent("onHide", () => {
            this.getParentView().refresh();
        });

        /* Auto Save Mode ***************/
        globalVariable.autoSaveMode.then(flag => this.$$("switchAutoSaveMode").setValue(flag));
        this.$$("switchAutoSaveMode").attachEvent("onChange", (newValue, oldValue, config) => {
            if (newValue) {
                globalVariable.autoSaveMode = true;
            } else {
                globalVariable.autoSaveMode = false;
            }
        });

        /* Language ****************/
        globalVariable.language.then(async (language) => {
            this.setLanguage(language).then();
            this.$$("language").setValue(language);
        });

        this.$$("language").attachEvent("onChange", (newValue, oldValue, config) => {
            if (config == "user") {
                globalVariable.language = newValue;
                this.setLanguage(newValue);
            }
        });

    }

    showWindow() {
        this.getRoot().show();
    }

    async setLanguage(language) {
        let locale = this.app.getService("locale");
        let langStr = null;

        if (language == 'like_system') {
            let systemLangStr = await window.electron.app("getLocale");
            langStr = getStrLang(systemLangStr);
        } else {
            langStr = getStrLang(language);
        }

        if (langStr != locale.getLang()) {
            locale.setLang(langStr);
        }
    }

    setTheme() {
        if (configFile.theme == 'dark') {
            webix.html.addCss(this.$$("window_show").getNode(), "window_show_dark");
            // webix.html.addCss(this.$$("language_windows_modal").getNode(), "language_windows_modal_dark");
            webix.html.addCss(this.$$("labelFontSize").getNode(), "language_windows_modal_dark");
            webix.html.addCss(this.$$("labelAutoSaveMode").getNode(), "language_windows_modal_dark");
        }
        if (configFile.theme == 'light') {
            webix.html.addCss(this.$$("window_show").getNode(), "window_show");
            // webix.html.addCss(this.$$("language_windows_modal").getNode(), "language_windows_modal");
            webix.html.addCss(this.$$("labelFontSize").getNode(), "language_windows_modal");
            webix.html.addCss(this.$$("labelAutoSaveMode").getNode(), "language_windows_modal");

        }
    }
}