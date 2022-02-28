import {JetView} from "webix-jet";
import llsModel from "../../../models/lls-model";

export default class FiltrationSettings extends JetView {
    config() {
        let filtering = {
            minWidth: 600,
            maxWidth: 850,
            id: "central_menu_button_3",
            rows: [
                {
                    height: 100,
                    cols: [
                        {
                            view: "label",
                            label: "<p style='font-size: 18px; font-weight: 100; position: relative; top: -20px; left: 105px;'>Фильтрация</p>",
                            css:"text_color_filter",
                            id:"text_color_filter_1_0",
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
                        {

                        }
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
                                    label: "<p style='font-size: 18px; font-weight: 100; position: relative; top: -20px; left: 30px;'>Степень фильтрации</p>",
                                    width: 300,
                                    height: 50,
                                    css:"text_color_filter",
                                    id:"text_color_filter_1_1",
                                },
                            ]
                        }
                    ]
                },
                {

                    id: "degree_of_filtration",
                    rows: [
                        {


                            height: 300,
                            css:"degree_of_filtration",
                            cols: [
                                {

                                },
                                {
                                    view: "button",
                                    type: "image",
                                    image: "assets/images/filtr_Karier.svg",
                                    label: "Карьерная техника",
                                    css: "image_button_filter",
                                    id:"image_button_filter_1",
                                    minWidth: 195,
                                },
                                {
                                    // view: "button",  minWidth: 10,
                                },
                                {
                                    view: "button",
                                    type: "image",
                                    image: "assets/images/filtr_Stroit.svg",
                                    css: "image_button_filter",
                                    id:"image_button_filter_2",
                                    minWidth: 195,
                                },
                                {
                                    // view: "button",  minWidth: 10,

                                },
                                {
                                    view: "button",
                                    type: "image",
                                    image: "assets/images/filtr_Rovn.svg",
                                    css: "image_button_filter",
                                    id:"image_button_filter_3",
                                    minWidth: 195,
                                },
                                {

                                }
                            ]
                        }
                    ]
                },
                {
                    minHeight: 10,

                },
                {
                    height: 320,
                    css: "filters_rows",
                    id: "degree_of_filtration_2",
                    rows: [
                        {

                            rows: [
                                {
                                    height: 20,
                                },
                                {
                                    cols: [
                                        {

                                        },
                                        {
                                            view: "label",
                                            label: "<p style='position: relative; top: -20px;'>Тип фильтрации</p>",
                                            width: 240,
                                            css:"text_color_filter",
                                            id:"text_color_filter_1",
                                        },
                                        {

                                        },
                                        {
                                            view: "text",
                                            value: "Квадратичная",
                                            width: 210,
                                            inputAlign: "center",
                                            inputHeight: 54,
                                            css: "full_window_text",
                                            readonly: true,
                                            id:"filter_open_windows"
                                        },
                                        {
                                            //
                                        },
                                        {
                                            view: "toolbar",
                                            css:"toolbar_button",
                                            elements: [{
                                                view: "button",
                                                css: "button_filter_set",
                                                label: 'Выбрать',
                                                popup: "my_pop",
                                                height:54,
                                                width: 150,

                                            }]
                                        },
                                        {

                                        }
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
                                        {

                                        },
                                        {
                                            view: "label",
                                            label: "<p>Время усреднения (0...21) с</p>",
                                            width: 280,
                                            css:"text_color_filter",
                                            id:"text_color_filter_2",
                                        },
                                        {

                                        },
                                        {
                                            paddingY: 41,

                                            rows:[
                                                {
                                                    view: "slider",
                                                    value: "0",
                                                    name: "s1",
                                                    minWidth: 120,
                                                    min: 0,
                                                    max: 21,
                                                    css: "slider_1",
                                                    id: "slider_filter_1",
                                                    title: webix.template("#value#"),
                                                }
                                            ]
                                        },
                                        {
                                            paddingY: 40,
                                            rows:[
                                                {
                                                    view: "text",
                                                    value: "0",
                                                    name: "s1",
                                                    width: 50,
                                                    inputAlign: "center",
                                                    inputHeight: 50,
                                                    css: "full_window_text",
                                                    id: "window_text_time",
                                                    // readonly: true,
                                                    height:50,
                                                },
                                            ]
                                        },
                                        {
                                            // width: 30,
                                        },
                                        {
                                            view: "button",
                                            type: "label",
                                            label: "Применить",
                                            width: 150,
                                            id: "button_slider_gen_value_1",
                                            css: "button_slider_gen_value"
                                        },
                                        {

                                        }
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
                                            label: "<p>Длина медианы (0...7)</p>",
                                            width: 280,
                                            css:"text_color_filter",
                                            id:"text_color_filter_3",
                                        },
                                        {
                                            // width: 30,
                                        },
                                        {
                                            paddingY: 41,
                                            rows:[
                                                {
                                                    view: "slider",
                                                    value: "0",
                                                    name: "s2",
                                                    minWidth: 120,
                                                    min: 0,
                                                    max: 7,
                                                    css: "slider_1",
                                                    title: webix.template("#value#"),
                                                    id:"slider_filter_2",
                                                }
                                            ]
                                        },
                                        {
                                            paddingY: 40,
                                            rows:[
                                                {
                                                    view: "text",
                                                    value: "0",
                                                    name: "s1",
                                                    width: 50,
                                                    inputAlign: "center",
                                                    inputHeight: 50,
                                                    css: "full_window_text",
                                                    id:"window_text_mediana",
                                                    // readonly: true,
                                                    height:50,
                                                },
                                            ]
                                        },
                                        {
                                            // width: 30,
                                        },
                                        {
                                            view: "button",
                                            type: "label",
                                            label: "Применить",
                                            width: 150,
                                            id: "button_slider_gen_value_2",
                                            css: "button_slider_gen_value"
                                        },
                                        {

                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        };
        return filtering;
    }
    listenerLongData = (longData) => {
        $$('slider_filter_1').setValue(longData.averagingLength.toString());
        $$('window_text_time').setValue(longData.averagingLength.toString());
        $$('slider_filter_2').setValue(longData.medianLength.toString());
        $$('window_text_mediana').setValue(longData.medianLength.toString());
    }
    destroy() {
        super.destroy();
        llsModel.clearListenerLongData(this.listenerLongData);
    }
    init(){
        llsModel.addListenerLongData(this.listenerLongData);

        $$('button_slider_gen_value_1').attachEvent("onItemClick", (id, e)=>{
            llsModel.setLongData({averagingLength:$$('slider_filter_1').getValue()});
            // code
        });


    }
}
