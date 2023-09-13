import {JetView} from "webix-jet";
import {llsModelTwo} from "../../../../models/lls-test-models";
import configFile from "../../../../config-app";
import globalVariable from "../../../../global-variable-app";

export default class FiltrationSettings extends JetView {
    config() {
        const _ = this.app.getService("locale")._;
        let filtering = {
            view: "scrollview",
            scroll: "y",
            maxHeight: 1960,
            id: "central_menu_button_3",
            css: "style_general_rows",
            maxWidth: 1420,
            body: {

                rows: [
                    {
                        height: 100,
                        hidden: true,
                        cols: [
                            {
                                view: "label",
                                label: `<p style='font-size: 18px; font-weight: 100; position: relative; top: -20px; left: 105px;'>${_("switch_filtering")}</p>`,
                                css: "text_color_filter",
                                id: "text_color_filter_1_0",
                            },
                            {
                                width: 30,
                            },
                            {
                                view: "switch",
                                value: 1,
                                css: "filter_toggle",
                                id: "filtering_switch_top",
                                width: 70,
                            },
                            {}
                        ]
                    },
                    {
                        height: 20,
                    },
                    {
                        id: "degree of filtration",
                        rows: [
                            {
                                cols: [
                                    {
                                        view: "label",
                                        label: `<p style='font-size: 24px; font-weight: 500; position: relative; top: -20px; left: 30px;'>${_("filtering_preset")}</p>`,
                                        width: 300,
                                        height: 50,
                                        css: "text_color_filter",
                                        id: "text_color_filter_1_1",
                                    },
                                ]
                            }
                        ]
                    },
                    {
                        height: 20,
                    },
                    {

                        id: "degree_of_filtration",
                        rows: [
                            {
                                height: 400,
                                css: "degree_of_filtration",
                                cols: [
                                    {},
                                    {
                                        view: "button",
                                        type: "image",
                                        image: _("button_image_filter_karier"),
                                        css: "image_button_filter",
                                        id: "image_button_filter_1",
                                        minWidth: 240,
                                    },
                                    {
                                    },
                                    {
                                        view: "button",
                                        type: "image",
                                        image: _("button_image_filter_stroit"),
                                        css: "image_button_filter",
                                        id: "image_button_filter_2",
                                        minWidth: 240,
                                    },
                                    {
                                    },
                                    {
                                        view: "button",
                                        type: "image",
                                        image: _("button_image_filter_rovn"),
                                        css: "image_button_filter",
                                        id: "image_button_filter_3",
                                        minWidth: 240,
                                    },
                                    {}
                                ]
                            }
                        ]
                    },
                    {
                        height: 100,
                    },
                    {
                        height: 420,
                        css: "filters_rows_number_2",
                        id: "degree_of_filtration_2",
                        rows: [
                            {
                                rows: [
                                    {
                                        height: 20,
                                    },
                                    {
                                        cols: [
                                            {},
                                            {
                                                view: "label",
                                                label: `<p style='position: relative; top: -20px;'>${_("filtering_type")}</p>`,
                                                width: 240,
                                                css: "text_color_filter",
                                                id: "text_color_filter_1",
                                            },
                                            {},
                                            {
                                                view: "text",
                                                width: 210,
                                                inputAlign: "center",
                                                inputHeight: 54,
                                                css: "full_window_text",
                                                readonly: true,
                                                id: "filter_open_windows"
                                            },
                                            {},
                                            {
                                                paddingY: -50,
                                                view: "toolbar",
                                                css: "toolbar_button",
                                                elements: [{
                                                    view: "button",
                                                    localId: 'buttonFilterType',
                                                    css: "button_slider_gen_value",
                                                    label: _('choose'),
                                                    // popup: "my_pop",
                                                    height: 55,
                                                    width: 150,

                                                }]
                                            },
                                            {
                                                paddingX: -4,
                                                rows: [
                                                    {},
                                                    {
                                                        view: "button",
                                                        height: 56,
                                                        width: 14,
                                                        // css: "status_define_button_yellow",
                                                        localId: "statusFiltrationType",
                                                        css: " status_define_button" //- скрытая кнопка
                                                    },
                                                    {}
                                                ]
                                            },
                                            {width: 10},
                                            {}
                                        ]
                                    },
                                ]
                            },
                            {
                                height: 2,
                            },
                            {

                                id: "degree_of_filtration_3",
                                rows: [
                                    {
                                        height: 100,
                                        minWidth: 100,
                                        cols: [
                                            {},
                                            {
                                                view: "label",
                                                label: `<p>${_("average_time")}</p>`,
                                                width: 280,
                                                css: "text_color_filter",
                                                id: "text_color_filter_2",
                                            },
                                            {},
                                            {
                                                paddingY: 41,

                                                rows: [
                                                    {
                                                        view: "slider",
                                                        value: "0",
                                                        name: "s1",
                                                        minWidth: 120,
                                                        min: 1,
                                                        max: 21,
                                                        css: "slider_1",
                                                        id: "slider_filter_1",
                                                        title: webix.template("#value#"),
                                                    }
                                                ]
                                            },
                                            {
                                                paddingY: 40,
                                                rows: [
                                                    {
                                                        view: "text",
                                                        value: "0",
                                                        name: "s1",
                                                        width: 50,
                                                        inputAlign: "center",
                                                        inputHeight: 50,
                                                        css: "full_window_text",
                                                        id: "window_text_time",
                                                        readonly: true,
                                                        height: 50,
                                                    },
                                                ]
                                            },
                                            {
                                                // width: 30,
                                            },
                                            {
                                                view: "button",
                                                type: "label",
                                                label: _("apply"),
                                                width: 150,
                                                id: "button_slider_gen_value_1",
                                                css: "button_slider_gen_value"
                                            },
                                            {
                                                paddingX: -1,
                                                paddingY: 41,
                                                rows: [
                                                    {},
                                                    {
                                                        view: "button",
                                                        height: 52,
                                                        width: 12,
                                                        // css: " status_define_button_yellow",
                                                        localId: "statusAveragingLength",
                                                        css: " status_define_button" //- скрытая кнопка
                                                    },
                                                    {width: 10},
                                                    {}
                                                ]
                                            },

                                            {}
                                        ]
                                    }
                                ]
                            },
                            {
                                id: "degree_of_filtration_4",
                                rows: [
                                    {
                                        height: 100,
                                        cols: [
                                            {
                                                minWidth: 10,
                                            },
                                            {

                                                view: "label",
                                                label: `<p>${_("median_length")}</p>`,
                                                width: 280,
                                                css: "text_color_filter",
                                                id: "text_color_filter_3",
                                            },
                                            {
                                                // width: 30,
                                            },
                                            {
                                                paddingY: 41,
                                                rows: [
                                                    {
                                                        view: "slider",
                                                        value: "0",
                                                        name: "s2",
                                                        minWidth: 120,
                                                        min: 0,
                                                        max: 7,
                                                        css: "slider_1",
                                                        title: webix.template("#value#"),
                                                        id: "slider_filter_2",
                                                    }
                                                ]
                                            },
                                            {
                                                paddingY: 40,
                                                rows: [
                                                    {
                                                        view: "text",
                                                        value: "0",
                                                        name: "s1",
                                                        width: 50,
                                                        inputAlign: "center",
                                                        inputHeight: 50,
                                                        css: "full_window_text",
                                                        id: "window_text_mediana",
                                                        readonly: true,
                                                        height: 50,
                                                    },
                                                ]
                                            },
                                            {
                                                // width: 30,
                                            },
                                            {
                                                view: "button",
                                                type: "label",
                                                label: _('apply'),
                                                width: 150,
                                                id: "button_slider_gen_value_2",
                                                css: "button_slider_gen_value"
                                            },
                                            {
                                                paddingX: -1,
                                                paddingY: 41,
                                                rows: [
                                                    {},
                                                    {
                                                        view: "button",
                                                        height: 52,
                                                        width: 12,
                                                        // css: " status_define_button_yellow",
                                                        localId: "statusMedianLength",
                                                        css: " status_define_button" //- скрытая кнопка
                                                    },
                                                    {}
                                                ]
                                            },
                                            {width: 10},
                                            {},
                                        ]
                                    }
                                ]
                            },
                            {
                                id: "degree_of_filtration_5",
                                rows: [
                                    {
                                        height: 20,
                                    },
                                    {
                                        height: 100,
                                        cols: [
                                            {},
                                            {
                                                paddingY: 48,
                                                rows: [
                                                    {
                                                        view: "label",
                                                        label: `<p style='position: relative; top: -20px;'>${_("coefficient_q")}</p>`,
                                                        width: 240,
                                                        css: "text_color_filter",
                                                        id: "text_color_filter_4",
                                                    }
                                                ]

                                            },

                                            {},
                                            {
                                                paddingY: 40,
                                                rows: [
                                                    {
                                                        view: "text",
                                                        width: 210,
                                                        inputAlign: "center",
                                                        inputHeight: 64,
                                                        css: "full_window_text",
                                                        readonly: false,
                                                        id: "text_q",
                                                        height: 50,
                                                    }
                                                ]

                                            },
                                            {},
                                            {

                                                view: "button",
                                                type: "label",
                                                label: _("apply"),
                                                width: 150,
                                                id: "button_slider_gen_value_3",
                                                css: "button_slider_gen_value",
                                            },
                                            {
                                                paddingX: -1,
                                                paddingY: 42,
                                                rows: [
                                                    {},
                                                    {
                                                        view: "button",
                                                        height: 52,
                                                        width: 12,
                                                        // css: " status_define_button_yellow",
                                                        localId: "statusCoefficientQ",

                                                        css: " status_define_button" //- скрытая кнопка
                                                    },
                                                    {}
                                                ]
                                            },
                                            {width: 10},
                                            {}
                                        ]
                                    },
                                ]
                            },
                            {
                                id: "degree_of_filtration_6",
                                rows: [
                                    {
                                        height: 20,
                                    },
                                    {
                                        height: 100,
                                        cols: [
                                            {},
                                            {
                                                paddingY: 48,
                                                rows: [
                                                    {
                                                        view: "label",
                                                        label: `<p style='position: relative; top: -20px;'>${_("coefficient_r")}</p>`,
                                                        width: 240,
                                                        css: "text_color_filter",
                                                        id: "text_color_filter_5",
                                                    }
                                                ]

                                            },
                                            {},
                                            {
                                                paddingY: 40,
                                                rows: [
                                                    {
                                                        view: "text",
                                                        width: 210,
                                                        inputAlign: "center",
                                                        inputHeight: 54,
                                                        css: "full_window_text",
                                                        readonly: false,
                                                        id: "text_r",
                                                        height: 50,
                                                    }
                                                ]

                                            },
                                            {},
                                            {
                                                view: "button",
                                                type: "label",
                                                label: _("apply"),
                                                width: 150,
                                                id: "button_slider_gen_value_4",
                                                css: "button_slider_gen_value",

                                            },
                                            {
                                                paddingX: -1,
                                                paddingY: 40,
                                                rows: [
                                                    {},
                                                    {
                                                        view: "button",
                                                        height: 54,
                                                        width: 12,
                                                        // css: " status_define_button_yellow",
                                                        localId: "statusCoefficientR",
                                                        css: " status_define_button" //- скрытая кнопка
                                                    },
                                                    {}
                                                ]
                                            },
                                            {width: 10},
                                            {}
                                        ]
                                    },
                                ]

                            },
                        ]
                    },
                ]
            }
        };
        return filtering;
    }

    listenerLongData = (longData) => {
        // $$('slider_filter_1').setValue(longData.averagingLength.toString());
        // $$('window_text_time').setValue(longData.averagingLength.toString());
        this.setSliderValue('window_text_time', 'averagingLength', 'statusAveragingLength');
        this.setSliderValue('slider_filter_1', 'averagingLength', 'statusAveragingLength');

        // $$('slider_filter_2').setValue(longData.medianLength.toString());
        // $$('window_text_mediana').setValue(longData.medianLength.toString());
        this.setSliderValue('window_text_mediana', 'medianLength', 'statusMedianLength');
        this.setSliderValue('slider_filter_2', 'medianLength', 'statusMedianLength');

        // $$('text_q').setValue(longData.coefficientQ.toString());
        this.setFloatValue('text_q', "coefficientQ", "statusCoefficientQ");

        // $$('text_r').setValue(longData.coefficientR.toString());
        this.setFloatValue('text_r', "coefficientR", "statusCoefficientR");

        // this.setFiltrationType(longData.filtrationType);
        this.setFiltrationTypeValue();
    }

    destroy() {
        super.destroy();
        llsModelTwo.clearListenerLongData(this.listenerLongData);
    }

    init() {
        const _ = this.app.getService("locale")._;

        //Выключатель фитрации
        $$("filtering_switch_top").attachEvent("onItemClick", (id, e) => {
            if ($$("filtering_switch_top").getValue() == 0) {
                $$("degree of filtration").disable()
                $$("degree_of_filtration").disable()
                $$("degree_of_filtration_2").disable()
            } else {
                if
                ($$("filtering_switch_top").getValue() == 1) {
                    $$("degree of filtration").enable()
                    $$("degree_of_filtration").enable()
                    $$("degree_of_filtration_2").enable()
                }
            }
        });


        llsModelTwo.addListenerLongData(this.listenerLongData);

        $$('slider_filter_1').attachEvent("onChange", (newValue, oldValue, config) => {
            console.log("change");
            if (config != undefined) {
                console.log(newValue);
                llsModelTwo.newLongData.averagingLength = newValue;
                if (newValue == llsModelTwo.currentLongData.averagingLength) {
                    this.setStatusNewValue('statusAveragingLength', false);
                } else {
                    this.setStatusNewValue('statusAveragingLength', true);
                }
            }
        })
        $$('button_slider_gen_value_1').attachEvent("onItemClick", (id, e) => {
            this.setStatusNewValue('statusAveragingLength', false);
            llsModelTwo.setLongData({averagingLength: $$('slider_filter_1').getValue()});
        });

        $$('slider_filter_2').attachEvent("onChange", (newValue, oldValue, config) => {
            console.log("change");
            if (config != undefined) {
                console.log(newValue);
                llsModelTwo.newLongData.medianLength = newValue;
                if (newValue == llsModelTwo.currentLongData.medianLength) {
                    this.setStatusNewValue('statusMedianLength', false);
                } else {
                    this.setStatusNewValue('statusMedianLength', true);
                }
            }
        })
        $$('button_slider_gen_value_2').attachEvent("onItemClick", (id, e) => {
            this.setStatusNewValue('statusAveragingLength', false);
            llsModelTwo.setLongData({medianLength: $$('slider_filter_2').getValue()});
        });

        $$('text_q').attachEvent("onChange", (newValue, oldValue, config) => {
            console.log("change");
            if (config != undefined) {
                console.log(newValue);
                newValue = Number(newValue).toFixed(6);
                // newValue = this.fixed(Number(newValue));
                if (newValue >= 0 && newValue < 1000) {
                    llsModelTwo.newLongData.coefficientQ = newValue;
                    globalVariable.autoSaveMode.then(flag => flag ? llsModelTwo.setLongData({coefficientQ: llsModelTwo.newLongData.coefficientQ}) : '');
                    this.setFloatValue('text_q', "coefficientQ", "statusCoefficientQ");
                } else {
                    this.$$('text_q').setValue(oldValue);
                }
            }
        })
        $$('button_slider_gen_value_3').attachEvent("onItemClick", (id, e) => {
            this.setStatusNewValue('statusCoefficientQ', false);
            let test = parseFloat($$('text_q').getValue());
            llsModelTwo.setLongData({coefficientQ: test});
        });

        $$('text_r').attachEvent("onChange", (newValue, oldValue, config) => {
            console.log("change");
            if (config != undefined) {
                console.log(newValue);
                newValue = Number(newValue).toFixed(6);
                if (newValue >= 0 && newValue < 1000) {
                    llsModelTwo.newLongData.coefficientR = newValue;
                    globalVariable.autoSaveMode.then(flag => flag ? llsModelTwo.setLongData({coefficientR: llsModelTwo.newLongData.coefficientR}) : '');
                    this.setFloatValue('text_r', "coefficientR", "statusCoefficientR");
                } else {
                    this.$$('text_r').setValue(oldValue);
                }
            }
        })
        $$('button_slider_gen_value_4').attachEvent("onItemClick", (id, e) => {
            this.setStatusNewValue('statusCoefficientR', false);
            let test = parseFloat($$('text_r').getValue());
            llsModelTwo.setLongData({coefficientR: test});
        });

        $$('image_button_filter_1').attachEvent("onItemClick", (id, e) => {
            $$('slider_filter_1').setValue(5);
            llsModelTwo.newLongData.filtrationType = 1;
            llsModelTwo.newLongData.averagingLength = 5;
            this.setSliderValue('window_text_time', 'averagingLength', 'statusAveragingLength');
            this.setFiltrationTypeValue();
            // llsModel.setLongData({filtrationType: 1, averagingLength: $$('slider_filter_1').getValue()});  // усреднение
            globalVariable.autoSaveMode.then(flag => flag ? llsModelTwo.setLongData({filtrationType: 1, averagingLength: 5}) : '');
        });

        $$('image_button_filter_2').attachEvent("onItemClick", (id, e) => {
            $$('slider_filter_2').setValue(3);
            llsModelTwo.newLongData.filtrationType = 2;
            llsModelTwo.newLongData.medianLenght = 3;
            this.setFiltrationTypeValue();
            this.setSliderValue('window_text_mediana', 'medianLength', 'statusMedianLength');
            // llsModel.setLongData({filtrationType: 2, medianLength: $$('slider_filter_2').getValue()}); //медиана
            globalVariable.autoSaveMode.then(flag => flag ? llsModelTwo.setLongData({filtrationType: 2, medianLength: 3}) : '');
        });

        $$('image_button_filter_3').attachEvent("onItemClick", (id, e) => {
            llsModelTwo.newLongData.coefficientR = 1;
            llsModelTwo.newLongData.coefficientQ = 437;
            llsModelTwo.newLongData.filtrationType = 3;
            this.setFiltrationTypeValue();
            this.setFloatValue('text_q', "coefficientQ", "statusCoefficientQ");
            this.setFloatValue('text_r', "coefficientR", "statusCoefficientR");
            // llsModel.setLongData({coefficientR: 1, coefficientQ: 437, filtrationType: 3 });
            globalVariable.autoSaveMode.then(flag => flag ? llsModelTwo.setLongData({coefficientR: 1, coefficientQ: 437, filtrationType: 3 }) : '');
        });


        $$('degree_of_filtration_3').hide();
        const popupFilterType = {
            // Кнопка выбрать в окне фильтрация -------------------------------//
            view: "popup",
            multi: true,
            id: "my_pop",
            css: "service_button",
            width: 300,
            height: 400,
            // data:['123','123','123'],
            body: {
                view: "list",
                data: [
                    {id: "0", location: _("filtering_type_turned_off"), name: "0", value: 0},
                    {id: "1", location: _("filtering_type_averaging"), name: "1", value: 1},
                    {id: "2", location: _("filtering_type_median"), name: "2", value: 2},
                    {id: "3", location: _("filtering_type_adaptive"), name: "3", value: 3},
                ],
                template: "#name# - #location#",
                autoheight: true,
                id: 'listFilterType',
                select: true
            }
        }
        this.pop = this.ui(popupFilterType);
        this.$$('buttonFilterType').attachEvent("onItemClick", (id, e) => {
            console.log('click');
            this.pop.show($$(id).getNode());
        });
        $$("listFilterType").attachEvent("onItemClick", (id, name, e) => {
            console.log("click");
            let obj = $$("listFilterType").getItem(id);
            console.log(obj);
            llsModelTwo.newLongData.filtrationType = obj.value;
            globalVariable.autoSaveMode.then(flag => flag ? llsModelTwo.setLongData({filtrationType: obj.value}) : '');
            this.setFiltrationTypeValue();
        });

        if (configFile.theme == 'light') {
            webix.html.addCss($$("text_color_filter_1").getNode(), "text_color_filter");
            webix.html.addCss($$("text_color_filter_2").getNode(), "text_color_filter");
            webix.html.addCss($$("text_color_filter_3").getNode(), "text_color_filter");
            webix.html.addCss($$("text_color_filter_1_0").getNode(), "text_color_filter");
            webix.html.addCss($$("text_color_filter_1_1").getNode(), "text_color_filter");
            webix.html.addCss($$("text_color_filter_4").getNode(), "text_color_filter");
            webix.html.addCss($$("text_color_filter_5").getNode(), "text_color_filter");
            webix.html.addCss($$("filtering_switch_top").getNode(), "filter_toggle");
            webix.html.addCss($$("degree_of_filtration").getNode(), "filter_toggle");
            webix.html.addCss($$("image_button_filter_1").getNode(), "image_button_filter");
            webix.html.addCss($$("image_button_filter_2").getNode(), "image_button_filter");
            webix.html.addCss($$("image_button_filter_3").getNode(), "image_button_filter");
            webix.html.addCss($$("degree_of_filtration_2").getNode(), "filters_rows_number_2");
            webix.html.addCss($$("filter_open_windows").getNode(), "full_window_text");
            webix.html.addCss($$("text_q").getNode(), "full_window_text");
            webix.html.addCss($$("text_r").getNode(), "full_window_text");
            webix.html.addCss(this.$$("buttonFilterType").getNode(), "button_filter_set");
            webix.html.addCss($$("slider_filter_1").getNode(), "slider_1");
            webix.html.addCss($$("window_text_time").getNode(), "full_window_text");
            webix.html.addCss($$("button_slider_gen_value_1").getNode(), "button_slider_gen_value");
            webix.html.addCss($$("slider_filter_2").getNode(), "slider_1");
            webix.html.addCss($$("window_text_mediana").getNode(), "full_window_text");
            webix.html.addCss($$("button_slider_gen_value_2").getNode(), "button_slider_gen_value");
            webix.html.addCss($$("central_menu_button_3").getNode(), "style_general_rows");
            webix.html.addCss($$("button_slider_gen_value_4").getNode(), "button_slider_gen_value");
            webix.html.addCss($$("button_slider_gen_value_3").getNode(), "button_slider_gen_value");
            webix.html.addCss($$("button_slider_gen_value_2").getNode(), "button_slider_gen_value");
            webix.html.addCss($$("button_slider_gen_value_1").getNode(), "button_slider_gen_value");
            webix.html.addCss(this.$$("buttonFilterType").getNode(), "button_slider_gen_value");



            $$("image_button_filter_1").define("image", _("button_image_filter_karier"));
            $$("image_button_filter_2").define("image", _("button_image_filter_stroit"));
            $$("image_button_filter_3").define("image", _("button_image_filter_rovn"));

            $$("image_button_filter_1").refresh();
            $$("image_button_filter_2").refresh();
            $$("image_button_filter_3").refresh();
        }

        if (configFile.theme == 'dark') {
            webix.html.addCss($$("text_color_filter_1").getNode(), "text_color_filter_dark");
            webix.html.addCss($$("text_color_filter_2").getNode(), "text_color_filter_dark");
            webix.html.addCss($$("text_color_filter_3").getNode(), "text_color_filter_dark");
            webix.html.addCss($$("text_color_filter_1_0").getNode(), "text_color_filter_dark");
            webix.html.addCss($$("text_color_filter_1_1").getNode(), "text_color_filter_dark");
            webix.html.addCss($$("text_color_filter_4").getNode(), "text_color_filter_dark");
            webix.html.addCss($$("text_color_filter_5").getNode(), "text_color_filter_dark");
            webix.html.addCss($$("filtering_switch_top").getNode(), "filter_toggle_dark");
            webix.html.addCss($$("degree_of_filtration").getNode(), "degree_of_filtration_dark");
            webix.html.addCss($$("image_button_filter_1").getNode(), "image_button_filter_dark");
            webix.html.addCss($$("image_button_filter_2").getNode(), "image_button_filter_dark");
            webix.html.addCss($$("image_button_filter_3").getNode(), "image_button_filter_dark");
            webix.html.addCss($$("degree_of_filtration_2").getNode(), "filters_rows_number_2_dark");
            webix.html.addCss($$("filter_open_windows").getNode(), "full_window_text_dark");
            webix.html.addCss($$("text_q").getNode(), "full_window_text_dark");
            webix.html.addCss($$("text_r").getNode(), "full_window_text_dark");
            webix.html.addCss(this.$$("buttonFilterType").getNode(), "button_filter_set_dark");
            webix.html.addCss($$("slider_filter_1").getNode(), "slider_1_dark");
            webix.html.addCss($$("window_text_time").getNode(), "full_window_text_dark");
            webix.html.addCss($$("button_slider_gen_value_1").getNode(), "button_slider_gen_value_dark");
            webix.html.addCss($$("slider_filter_2").getNode(), "slider_1_dark");
            webix.html.addCss($$("window_text_mediana").getNode(), "full_window_text_dark");
            webix.html.addCss($$("button_slider_gen_value_2").getNode(), "button_slider_gen_value_dark");
            webix.html.addCss($$("central_menu_button_3").getNode(), "style_general_rows_dark");
            webix.html.addCss($$("button_slider_gen_value_4").getNode(), "button_slider_gen_value_dark");
            webix.html.addCss($$("button_slider_gen_value_3").getNode(), "button_slider_gen_value_dark");
            webix.html.addCss($$("button_slider_gen_value_2").getNode(), "button_slider_gen_value_dark");
            webix.html.addCss($$("button_slider_gen_value_1").getNode(), "button_slider_gen_value_dark");
            webix.html.addCss(this.$$("buttonFilterType").getNode(), "button_slider_gen_value_dark");




            $$("image_button_filter_1").define("image", _("button_image_filter_karier_dark"));
            $$("image_button_filter_2").define("image", _("button_image_filter_stroit_dark"));
            $$("image_button_filter_3").define("image", _("button_image_filter_rovn_dark"));
            $$("image_button_filter_1").refresh();
            $$("image_button_filter_2").refresh();
            $$("image_button_filter_3").refresh();
        }
    }

    setStatusNewValue(id, status) {
        webix.html.removeCss(this.$$(id).getNode(), "status_define_button_yellow");
        webix.html.removeCss(this.$$(id).getNode(), "status_define_button");
        if (status) {
            webix.html.addCss(this.$$(id).getNode(), "status_define_button_yellow");
        } else {
            webix.html.addCss(this.$$(id).getNode(), "status_define_button");
        }
    }

    setFiltrationTypeValue() {
        if (llsModelTwo.currentLongData.filtrationType == llsModelTwo.newLongData.filtrationType) {
            this.setFiltrationType(llsModelTwo.currentLongData.filtrationType);
            this.setStatusNewValue("statusFiltrationType", false);
        } else {
            this.setFiltrationType(llsModelTwo.newLongData.filtrationType);
            this.setStatusNewValue("statusFiltrationType", true);
        }
    }

    setSliderValue(id, name, statusId) {
        if (llsModelTwo.currentLongData[name] == llsModelTwo.newLongData[name]) {
            this.$$(id).setValue(llsModelTwo.currentLongData[name]);
            this.setStatusNewValue(statusId, false);
        } else {
            this.$$(id).setValue(llsModelTwo.newLongData[name]);
            this.setStatusNewValue(statusId, true);
        }
    }

    setFloatValue(id, name, statusId) {
        let oldFloat = Number(llsModelTwo.currentLongData[name]).toFixed(4);
        let newFloat = Number(llsModelTwo.newLongData[name]).toFixed(4);
        if (oldFloat == newFloat) {
            this.$$(id).setValue(llsModelTwo.currentLongData[name]);
            this.setStatusNewValue(statusId, false);
        } else {
            this.$$(id).setValue(llsModelTwo.newLongData[name]);
            this.setStatusNewValue(statusId, true);
        }
    }

    setFiltrationType(number) {
        const _ = this.app.getService("locale")._;

        switch (number) {
            case 0: {
                $$("filter_open_windows").setValue(_("filtering_type_turned_off"));
                $$('degree_of_filtration_3').hide();
                $$('degree_of_filtration_4').hide();
                $$('degree_of_filtration_5').hide();
                $$('degree_of_filtration_6').hide();
                break;
            }
            case 1: {
                $$("filter_open_windows").setValue(_("filtering_type_averaging"));
                $$('degree_of_filtration_3').show();
                $$('degree_of_filtration_4').hide();
                $$('degree_of_filtration_5').hide();
                $$('degree_of_filtration_6').hide();
                break;
            }
            case 2: {
                $$("filter_open_windows").setValue(_("filtering_type_median"));
                $$('degree_of_filtration_3').hide();
                $$('degree_of_filtration_4').show();
                $$('degree_of_filtration_5').hide();
                $$('degree_of_filtration_6').hide();
                break;
            }
            case 3: {
                $$("filter_open_windows").setValue(_("filtering_type_adaptive"));
                $$('degree_of_filtration_3').hide();
                $$('degree_of_filtration_4').hide();
                $$('degree_of_filtration_5').show();
                $$('degree_of_filtration_6').show();
                break;
            }
            default: {
                $$("filter_open_windows").setValue("ВЫКЛЮЧЕНА");
                break;
            }
        }
    }
}


