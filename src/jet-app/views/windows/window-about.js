
export default class WindowAbout extends JetView {
    config() {
        const _ = this.app.getService("locale")._;

        let win = {
            view: "window",
            position: "center",
            width: 850,
            height: 500,
            id: "window_show_2",
            modal: true,
            css: "window_show",
            head: {
                rows: [
                    {
                        cols: [
                            {template: "", type: "header", borderless: true,},
                            {
                                view: "icon", icon: "wxi-close", tooltip: "Close window", click: function () {
                                    $$("window_show_2").hide()
                                }
                            }
                        ]
                    },
                    {
                        height: 10,
                    },
                    {
                        cols: [
                            {},
                            {
                                // hidden: false,
                                height: 400,
                                rows: [
                                    {},
                                    {
                                        view: "label",
                                        label: `<p>${_("trademark")} ${_t("trademark")}</p>`,
                                        width: 700,
                                        height: 80,
                                        css: "language_windows_modal",
                                        localId: "language_windows_modal_2"
                                    },
                                    {
                                        view: "label",
                                        label: `<p>${_('developer')} ${_t("developer")}</p>`,
                                        width: 700,
                                        height: 80,
                                        css: "language_windows_modal",
                                        id: "language_windows_modal_3"
                                    },
                                    {
                                        view: "label",
                                        label: `<p>${_('program_version')}: ${VERSION}</p>`,
                                        width: 700,
                                        height: 80,
                                        css: "language_windows_modal",
                                        id: "language_windows_modal_4"
                                    },
                                    {
                                        view: "label",
                                        label: `<p>${_('website')} ${_t("website")}</p>`,
                                        width: 700,
                                        height: 80,
                                        css: "language_windows_modal",
                                        localId: "language_windows_modal_6"
                                    },
                                    {
                                        view: "label",
                                        label: `<p>${_('copyright')} ${_t('copyright')}</p>`,
                                        width: 700,
                                        height: 80,
                                        css: "language_windows_modal",
                                        id: "language_windows_modal_5"
                                    },
                                    {},
                                ]
                            },
                            {}
                        ]
                    }
                ]
            },
        }

        return win;
    }

    init() {
        this.setTheme();
    }

    showWindow() {
        this.getRoot().show();
    }

    setTheme() {
        if (configFile.theme == 'dark') {
            webix.html.addCss(this.$$("window_show").getNode(), "window_show_dark");
            // webix.html.addCss(this.$$("language_windows_modal").getNode(), "language_windows_modal_dark");
            webix.html.addCss(this.$$("labelFontSize").getNode(), "language_windows_modal_dark");
            webix.html.addCss(this.$$("labelAutoSaveMode").getNode(), "language_windows_modal_dark");
            webix.html.addCss(this.$$("language").getNode(), "window_type_4_dark");
            webix.html.addCss(this.$$("comboTheme").getNode(), "window_type_4_dark");
        }
        if (configFile.theme == 'light') {
            webix.html.addCss(this.$$("window_show").getNode(), "window_show");
            // webix.html.addCss(this.$$("language_windows_modal").getNode(), "language_windows_modal");
            webix.html.addCss(this.$$("labelFontSize").getNode(), "language_windows_modal");
            webix.html.addCss(this.$$("labelAutoSaveMode").getNode(), "language_windows_modal");
            webix.html.addCss(this.$$("language").getNode(), "window_type_4");
            webix.html.addCss(this.$$("comboTheme").getNode(), "window_type_4");
        }
    }
}