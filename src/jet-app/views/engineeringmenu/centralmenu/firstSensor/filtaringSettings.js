import {JetView} from "webix-jet";
import {llsModelOne} from "../../../../models/lls-test-models";
import configFile from "../../../../config-app";
import globalVariable from "../../../../global-variable-app";

export default class FiltrationSettings extends JetView {
    config() {
        const _ = this.app.getService("locale")._;
        let filtering = {
            view: "scrollview",
            scroll: "y",
            maxHeight: 1960,
            id: "central_menu_button_3_one",
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
                                // label: `<p style='font-size: 18px; font-weight: 100; position: relative; top: -20px; left: 105px;'>${_("switch_filtering")}</p>`,
                                label: `hello`,
                                css: "text_color_filter",
                                id: "text_color_filter_1_01_one",
                            },
                            {
                                width: 30,
                            },
                            {
                                view: "switch",
                                value: 1,
                                css: "filter_toggle",
                                id: "filtering_switch_top_one",
                                width: 70,
                            },
                            {}
                        ]
                    },
                    {
                        height: 20,
                    },
                    {
                        id: "degree of filtration_one",
                        rows: [
                            {
                                cols: [
                                    {
                                        view: "label",
                                        label: `<p style='font-size: 24px; font-weight: 500; position: relative; top: -20px; left: 30px;'>${_("filtering_preset")}</p>`,
                                        width: 300,
                                        height: 50,
                                        css: "text_color_filter",
                                        id: "text_color_filter_1_1_one",
                                    },
                                ]
                            }
                        ]
                    },
                    {
                        height: 20,
                    },
                    {

                        id: "degree_of_filtration_one",
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
                                        id: "image_button_filter_1_one",
                                        minWidth: 240,
                                    },
                                    {
                                    },
                                    {
                                        view: "button",
                                        type: "image",
                                        image: _("button_image_filter_stroit"),
                                        css: "image_button_filter",
                                        id: "image_button_filter_2_one",
                                        minWidth: 240,
                                    },
                                    {
                                    },
                                    {
                                        view: "button",
                                        type: "image",
                                        image: _("button_image_filter_rovn"),
                                        css: "image_button_filter",
                                        id: "image_button_filter_3_one",
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
                        id: "degree_of_filtration_2_one",
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
                                                id: "text_color_filter_1_one",
                                            },
                                            {},
                                            {
                                                view: "text",
                                                width: 210,
                                                inputAlign: "center",
                                                inputHeight: 54,
                                                css: "full_window_text",
                                                readonly: true,
                                                id: "filter_open_windows_one"
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

                                id: "degree_of_filtration_3_one",
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
                                                        id: "slider_filter_1_one",
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
                                                        width: 70,
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
                                                id: "button_slider_gen_value_1_one",
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
                                id: "degree_of_filtration_4_one",
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
                                                id: "text_color_filter_3_one",
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
                                                        max: 20,
                                                        css: "slider_1",
                                                        title: webix.template("#value#"),
                                                        id: "slider_filter_2_one",
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
                                                        width: 70,
                                                        inputAlign: "center",
                                                        inputHeight: 50,
                                                        css: "full_window_text",
                                                        id: "window_text_mediana_one",
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
                                                id: "button_slider_gen_value_2_one",
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
                                id: "degree_of_filtration_5_one",
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
                                                        id: "text_color_filter_4_one",
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
                                                        id: "text_q_one",
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
                                                id: "button_slider_gen_value_3_one",
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
                                id: "degree_of_filtration_6_one",
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
                                                        id: "text_color_filter_5_one",
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
                                                        id: "text_r_one",
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
                                                id: "button_slider_gen_value_4_one",
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
        this.setSliderValue('slider_filter_1_one', 'averagingLength', 'statusAveragingLength');

        // $$('slider_filter_2').setValue(longData.medianLength.toString());
        // $$('window_text_mediana').setValue(longData.medianLength.toString());
        this.setSliderValue('window_text_mediana_one', 'medianLength', 'statusMedianLength');
        this.setSliderValue('slider_filter_2_one', 'medianLength', 'statusMedianLength');

        // $$('text_q').setValue(longData.coefficientQ.toString());
        this.setFloatValue('text_q_one', "coefficientQ", "statusCoefficientQ");

        // $$('text_r').setValue(longData.coefficientR.toString());
        this.setFloatValue('text_r_one', "coefficientR", "statusCoefficientR");

        // this.setFiltrationType(longData.filtrationType);
        this.setFiltrationTypeValue();
    }

    destroy() {
        super.destroy();
        llsModelOne.clearListenerLongData(this.listenerLongData);
    }

    init() {
        const _ = this.app.getService("locale")._;

        //Выключатель фитрации
        $$("filtering_switch_top_one").attachEvent("onItemClick", (id, e) => {
            if ($$("filtering_switch_top_one").getValue() == 0) {
                $$("degree of filtration_one").disable()
                $$("degree_of_filtration_one").disable()
                $$("degree_of_filtration_2_one").disable()
            } else {
                if
                ($$("filtering_switch_top_one").getValue() == 1) {
                    $$("degree of filtration_one").enable()
                    $$("degree_of_filtration_one").enable()
                    $$("degree_of_filtration_2_one").enable()
                }
            }
        });


        llsModelOne.addListenerLongData(this.listenerLongData);

        $$('slider_filter_1_one').attachEvent("onChange", (newValue, oldValue, config) => {
            console.log("change");
            if (config != undefined) {
                console.log(newValue);
                llsModelOne.newLongData.averagingLength = newValue;
                if (newValue == llsModelOne.currentLongData.averagingLength) {
                    this.setStatusNewValue('statusAveragingLength', false);
                } else {
                    this.setStatusNewValue('statusAveragingLength', true);
                }
            }
        })
        $$('button_slider_gen_value_1_one').attachEvent("onItemClick", (id, e) => {
            this.setStatusNewValue('statusAveragingLength', false);
            llsModelOne.setLongData({averagingLength: $$('slider_filter_1_one').getValue()});
        });

        $$('slider_filter_2_one').attachEvent("onChange", (newValue, oldValue, config) => {
            console.log("change");
            if (config != undefined) {
                console.log(newValue);
                llsModelOne.newLongData.medianLength = newValue;
                if (newValue == llsModelOne.currentLongData.medianLength) {
                    this.setStatusNewValue('statusMedianLength', false);
                } else {
                    this.setStatusNewValue('statusMedianLength', true);
                }
            }
        })
        $$('button_slider_gen_value_2_one').attachEvent("onItemClick", (id, e) => {
            this.setStatusNewValue('statusAveragingLength', false);
            llsModelOne.setLongData({medianLength: $$('slider_filter_2_one').getValue()});
        });

        $$('text_q_one').attachEvent("onChange", (newValue, oldValue, config) => {
            console.log("change");
            if (config != undefined) {
                console.log(newValue);
                newValue = Number(newValue).toFixed(6);
                // newValue = this.fixed(Number(newValue));
                if (newValue >= 0 && newValue < 1000) {
                    llsModelOne.newLongData.coefficientQ = newValue;
                    globalVariable.autoSaveMode.then(flag => flag ? llsModelOne.setLongData({coefficientQ: llsModelOne.newLongData.coefficientQ}) : '');
                    this.setFloatValue('text_q_one', "coefficientQ", "statusCoefficientQ");
                } else {
                    this.$$('text_q_one').setValue(oldValue);
                }
            }
        })
        $$('button_slider_gen_value_3_one').attachEvent("onItemClick", (id, e) => {
            this.setStatusNewValue('statusCoefficientQ', false);
            let test = parseFloat($$('text_q_one').getValue());
            llsModelOne.setLongData({coefficientQ: test});
        });

        $$('text_r_one').attachEvent("onChange", (newValue, oldValue, config) => {
            console.log("change");
            if (config != undefined) {
                console.log(newValue);
                newValue = Number(newValue).toFixed(6);
                if (newValue >= 0 && newValue < 1000) {
                    llsModelOne.newLongData.coefficientR = newValue;
                    globalVariable.autoSaveMode.then(flag => flag ? llsModelOne.setLongData({coefficientR: llsModelOne.newLongData.coefficientR}) : '');
                    this.setFloatValue('text_r_one', "coefficientR", "statusCoefficientR");
                } else {
                    this.$$('text_r_one').setValue(oldValue);
                }
            }
        })
        $$('button_slider_gen_value_4_one').attachEvent("onItemClick", (id, e) => {
            this.setStatusNewValue('statusCoefficientR', false);
            let test = parseFloat($$('text_r_one').getValue());
            llsModelOne.setLongData({coefficientR: test});
        });

        $$('image_button_filter_1_one').attachEvent("onItemClick", (id, e) => {
            $$('slider_filter_1_one').setValue(5);
            llsModelOne.newLongData.filtrationType = 1;
            llsModelOne.newLongData.averagingLength = 5;
            this.setSliderValue('window_text_time', 'averagingLength', 'statusAveragingLength');
            this.setFiltrationTypeValue();
            // llsModel.setLongData({filtrationType: 1, averagingLength: $$('slider_filter_1').getValue()});  // усреднение
            globalVariable.autoSaveMode.then(flag => flag ? llsModelOne.setLongData({filtrationType: 1, averagingLength: 5}) : '');
        });

        $$('image_button_filter_2_one').attachEvent("onItemClick", (id, e) => {
            $$('slider_filter_2_one').setValue(3);
            llsModelOne.newLongData.filtrationType = 2;
            llsModelOne.newLongData.medianLenght = 3;
            this.setFiltrationTypeValue();
            this.setSliderValue('window_text_mediana_one', 'medianLength', 'statusMedianLength');
            // llsModel.setLongData({filtrationType: 2, medianLength: $$('slider_filter_2').getValue()}); //медиана
            globalVariable.autoSaveMode.then(flag => flag ? llsModelOne.setLongData({filtrationType: 2, medianLength: 3}) : '');
        });

        $$('image_button_filter_3_one').attachEvent("onItemClick", (id, e) => {
            llsModelOne.newLongData.coefficientR = 1;
            llsModelOne.newLongData.coefficientQ = 437;
            llsModelOne.newLongData.filtrationType = 3;
            this.setFiltrationTypeValue();
            this.setFloatValue('text_q_one', "coefficientQ", "statusCoefficientQ");
            this.setFloatValue('text_r_one', "coefficientR", "statusCoefficientR");
            // llsModel.setLongData({coefficientR: 1, coefficientQ: 437, filtrationType: 3 });
            globalVariable.autoSaveMode.then(flag => flag ? llsModelOne.setLongData({coefficientR: 1, coefficientQ: 437, filtrationType: 3 }) : '');
        });


        $$('degree_of_filtration_3_one').hide();
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
                id: 'listFilterType_one',
                select: true
            }
        }
        this.pop = this.ui(popupFilterType);
        this.$$('buttonFilterType').attachEvent("onItemClick", (id, e) => {
            console.log('click');
            this.pop.show($$(id).getNode());
        });
        $$("listFilterType_one").attachEvent("onItemClick", (id, name, e) => {
            console.log("click");
            let obj = $$("listFilterType_one").getItem(id);
            console.log(obj);
            llsModelOne.newLongData.filtrationType = obj.value;
            globalVariable.autoSaveMode.then(flag => flag ? llsModelOne.setLongData({filtrationType: obj.value}) : '');
            this.setFiltrationTypeValue();
        });

        if (configFile.theme == 'light') {
            webix.html.addCss($$("text_color_filter_1_one").getNode(), "text_color_filter");
            webix.html.addCss($$("text_color_filter_2").getNode(), "text_color_filter");
            webix.html.addCss($$("text_color_filter_3_one").getNode(), "text_color_filter");
            webix.html.addCss($$("text_color_filter_1_01_one").getNode(), "text_color_filter");
            webix.html.addCss($$("text_color_filter_1_1_one").getNode(), "text_color_filter");
            webix.html.addCss($$("text_color_filter_4_one").getNode(), "text_color_filter");
            webix.html.addCss($$("text_color_filter_5_one").getNode(), "text_color_filter");
            webix.html.addCss($$("filtering_switch_top_one").getNode(), "filter_toggle");
            webix.html.addCss($$("degree_of_filtration_one").getNode(), "filter_toggle");
            webix.html.addCss($$("image_button_filter_1_one").getNode(), "image_button_filter");
            webix.html.addCss($$("image_button_filter_2_one").getNode(), "image_button_filter");
            webix.html.addCss($$("image_button_filter_3_one").getNode(), "image_button_filter");
            webix.html.addCss($$("degree_of_filtration_2_one").getNode(), "filters_rows_number_2");
            webix.html.addCss($$("filter_open_windows_one").getNode(), "full_window_text");
            webix.html.addCss($$("text_q_one").getNode(), "full_window_text");
            webix.html.addCss($$("text_r_one").getNode(), "full_window_text");
            webix.html.addCss(this.$$("buttonFilterType").getNode(), "button_filter_set");
            webix.html.addCss($$("slider_filter_1_one").getNode(), "slider_1");
            webix.html.addCss($$("window_text_time").getNode(), "full_window_text");
            webix.html.addCss($$("button_slider_gen_value_1_one").getNode(), "button_slider_gen_value");
            webix.html.addCss($$("slider_filter_2_one").getNode(), "slider_1");
            webix.html.addCss($$("window_text_mediana_one").getNode(), "full_window_text");
            webix.html.addCss($$("button_slider_gen_value_2_one").getNode(), "button_slider_gen_value");
            webix.html.addCss($$("central_menu_button_3_one").getNode(), "style_general_rows");
            webix.html.addCss($$("button_slider_gen_value_4_one").getNode(), "button_slider_gen_value");
            webix.html.addCss($$("button_slider_gen_value_3_one").getNode(), "button_slider_gen_value");
            webix.html.addCss($$("button_slider_gen_value_2_one").getNode(), "button_slider_gen_value");
            webix.html.addCss($$("button_slider_gen_value_1_one").getNode(), "button_slider_gen_value");
            webix.html.addCss(this.$$("buttonFilterType").getNode(), "button_slider_gen_value");



            $$("image_button_filter_1_one").define("image", _("button_image_filter_karier"));
            $$("image_button_filter_2_one").define("image", _("button_image_filter_stroit"));
            $$("image_button_filter_3_one").define("image", _("button_image_filter_rovn"));

            $$("image_button_filter_1_one").refresh();
            $$("image_button_filter_2_one").refresh();
            $$("image_button_filter_3_one").refresh();
        }

        if (configFile.theme == 'dark') {
            webix.html.addCss($$("text_color_filter_1_one").getNode(), "text_color_filter_dark");
            webix.html.addCss($$("text_color_filter_2").getNode(), "text_color_filter_dark");
            webix.html.addCss($$("text_color_filter_3_one").getNode(), "text_color_filter_dark");
            webix.html.addCss($$("text_color_filter_1_01_one").getNode(), "text_color_filter_dark");
            webix.html.addCss($$("text_color_filter_1_1_one").getNode(), "text_color_filter_dark");
            webix.html.addCss($$("text_color_filter_4_one").getNode(), "text_color_filter_dark");
            webix.html.addCss($$("text_color_filter_5_one").getNode(), "text_color_filter_dark");
            webix.html.addCss($$("filtering_switch_top_one").getNode(), "filter_toggle_dark");
            webix.html.addCss($$("degree_of_filtration_one").getNode(), "degree_of_filtration_dark");
            webix.html.addCss($$("image_button_filter_1_one").getNode(), "image_button_filter_dark");
            webix.html.addCss($$("image_button_filter_2_one").getNode(), "image_button_filter_dark");
            webix.html.addCss($$("image_button_filter_3_one").getNode(), "image_button_filter_dark");
            webix.html.addCss($$("degree_of_filtration_2_one").getNode(), "filters_rows_number_2_dark");
            webix.html.addCss($$("filter_open_windows_one").getNode(), "full_window_text_dark");
            webix.html.addCss($$("text_q_one").getNode(), "full_window_text_dark");
            webix.html.addCss($$("text_r_one").getNode(), "full_window_text_dark");
            webix.html.addCss(this.$$("buttonFilterType").getNode(), "button_filter_set_dark");
            webix.html.addCss($$("slider_filter_1_one").getNode(), "slider_1_dark");
            webix.html.addCss($$("window_text_time").getNode(), "full_window_text_dark");
            webix.html.addCss($$("button_slider_gen_value_1_one").getNode(), "button_slider_gen_value_dark");
            webix.html.addCss($$("slider_filter_2_one").getNode(), "slider_1_dark");
            webix.html.addCss($$("window_text_mediana_one").getNode(), "full_window_text_dark");
            webix.html.addCss($$("button_slider_gen_value_2_one").getNode(), "button_slider_gen_value_dark");
            webix.html.addCss($$("central_menu_button_3_one").getNode(), "style_general_rows_dark");
            webix.html.addCss($$("button_slider_gen_value_4_one").getNode(), "button_slider_gen_value_dark");
            webix.html.addCss($$("button_slider_gen_value_3_one").getNode(), "button_slider_gen_value_dark");
            webix.html.addCss($$("button_slider_gen_value_2_one").getNode(), "button_slider_gen_value_dark");
            webix.html.addCss($$("button_slider_gen_value_1_one").getNode(), "button_slider_gen_value_dark");
            webix.html.addCss(this.$$("buttonFilterType").getNode(), "button_slider_gen_value_dark");




            $$("image_button_filter_1_one").define("image", _("button_image_filter_karier_dark"));
            $$("image_button_filter_2_one").define("image", _("button_image_filter_stroit_dark"));
            $$("image_button_filter_3_one").define("image", _("button_image_filter_rovn_dark"));
            $$("image_button_filter_1_one").refresh();
            $$("image_button_filter_2_one").refresh();
            $$("image_button_filter_3_one").refresh();
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
        if (llsModelOne.currentLongData.filtrationType == llsModelOne.newLongData.filtrationType) {
            this.setFiltrationType(llsModelOne.currentLongData.filtrationType);
            this.setStatusNewValue("statusFiltrationType", false);
        } else {
            this.setFiltrationType(llsModelOne.newLongData.filtrationType);
            this.setStatusNewValue("statusFiltrationType", true);
        }
    }

    setSliderValue(id, name, statusId) {
        if (llsModelOne.currentLongData[name] == llsModelOne.newLongData[name]) {
            this.$$(id).setValue(llsModelOne.currentLongData[name]);
            this.setStatusNewValue(statusId, false);
        } else {
            this.$$(id).setValue(llsModelOne.newLongData[name]);
            this.setStatusNewValue(statusId, true);
        }
    }

    setFloatValue(id, name, statusId) {
        let oldFloat = Number(llsModelOne.currentLongData[name]).toFixed(4);
        let newFloat = Number(llsModelOne.newLongData[name]).toFixed(4);
        if (oldFloat == newFloat) {
            this.$$(id).setValue(llsModelOne.currentLongData[name]);
            this.setStatusNewValue(statusId, false);
        } else {
            this.$$(id).setValue(llsModelOne.newLongData[name]);
            this.setStatusNewValue(statusId, true);
        }
    }

    setFiltrationType(number) {
        const _ = this.app.getService("locale")._;

        switch (number) {
            case 0: {
                $$("filter_open_windows_one").setValue(_("filtering_type_turned_off"));
                $$('degree_of_filtration_3_one').hide();
                $$('degree_of_filtration_4_one').hide();
                $$('degree_of_filtration_5_one').hide();
                $$('degree_of_filtration_6_one').hide();
                break;
            }
            case 1: {
                $$("filter_open_windows_one").setValue(_("filtering_type_averaging"));
                $$('degree_of_filtration_3_one').show();
                $$('degree_of_filtration_4_one').hide();
                $$('degree_of_filtration_5_one').hide();
                $$('degree_of_filtration_6_one').hide();
                break;
            }
            case 2: {
                $$("filter_open_windows_one").setValue(_("filtering_type_median"));
                $$('degree_of_filtration_3_one').hide();
                $$('degree_of_filtration_4_one').show();
                $$('degree_of_filtration_5_one').hide();
                $$('degree_of_filtration_6_one').hide();
                break;
            }
            case 3: {
                $$("filter_open_windows_one").setValue(_("filtering_type_adaptive"));
                $$('degree_of_filtration_3_one').hide();
                $$('degree_of_filtration_4_one').hide();
                $$('degree_of_filtration_5_one').show();
                $$('degree_of_filtration_6_one').show();
                break;
            }
            default: {
                $$("filter_open_windows_one").setValue("ВЫКЛЮЧЕНА");
                break;
            }
        }
    }
}


