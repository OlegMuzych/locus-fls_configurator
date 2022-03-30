import {JetView} from "webix-jet";
import llsModel from "../../../models/lls-model";
import configFile from "../../../config-app";

export default class GeneralSettings extends JetView {
    config() {


        // let counterPeriod = {
        //     css: "window_type_2",
        //     rows:[
        //         {
        //             cols:[
        //                 {
        //                     view: "label",
        //                     label: "Задержка выдачи, сек."
        //                 },
        //                 {
        //                     view: "counter",
        //                     localId: 'counterPeriod',
        //                     step: 1,
        //                     value: 5,
        //                     min: 1,
        //                     max: 255,
        //                 }
        //             ]
        //
        //         }
        //     ]
        //
        // }
        let general_config = {
            minWidth: 600,
            maxWidth: 850,
            view: "scrollview",
            scroll: "y",
            maxHeight: 1000,
            body: {
                id: "central_menu_button_1",
                css:"style_general_rows",
                minWidth: 600,
                maxWidth: 850,
                maxHeight: 1000,
                rows: [
                    {
                        rows: [
                            {
                                height: 20,
                            },
                            {
                                view: "text",
                                width: 850,
                                height: 100,
                                label: '<p>Серийный номер</p>',
                                labelWidth: 400,
                                css: "window_type_1",
                                inputAlign: "center",
                                readonly: true,
                                id: "window_type_1",
                            },
                        ]
                    },

                {height: 20,},
                {
                    view: "text",
                    width: 850,
                    height: 100,
                    label: '<p>Сетевой адрес</p>',
                    labelWidth: 400,
                    css: "window_type_2",
                    inputAlign: "center",
                    id: "window_type_2_1"
                },
                {height: 20},
                {
                    view: "text",
                    width: 850,
                    height: 100,
                    label: '<p>Минимальный уровень</p>',
                    labelWidth: 400,
                    css: "window_type_2",
                    inputAlign: "center",
                    type: 'number',
                    title:'0-1024',
                    localId: "textMinLevel"
                },
                {
                    view: "text",
                    width: 850,
                    height: 100,
                    label: '<p>Максимальный уровень</p>',
                    labelWidth: 400,
                    css: "window_type_2",
                    inputAlign: "center",
                    type: 'number',
                    title:'1024-4095',
                    localId: "textMaxLevel"
                },
                {height: 20},
                {
                    view: "combo",
                    width: 850,
                    height: 100,
                    label: '<p>Скорость подключения</p>',
                    labelWidth: 400,
                    css: "window_type_2",
                    inputAlign: "center",
                    id: "window_type_2_4",
                    options: [
                        {value: "9600", id: '2'},
                        {value: "19200", id: '3'},
                        {value: "38400", id: '5'},
                        {value: "57600", id: '6'},
                        {value: "115200", id: '7'},
                    ]
                },
                {height: 20},

                {
                    view: "radio",
                    label: '<p>Выходное сообщение</p>',
                    css: "window_type_2",
                    id: "window_type_2_7",
                    width: 850,
                    height: 60,
                    labelWidth: 400,
                    value: 0,
                    localId: 'outputParametersOfSensor',
                    options: [
                        {id: 0, value: "Уровень"}, // изначально выбранный элемент
                        {id: 1, value: "Объем"}
                    ]
                },
                {
                    view: "combo",
                    width: 850,
                    height: 100,
                    label: '<p>Автоматическая выдача данных</p>',
                    labelWidth: 400,
                    css: "window_type_2",
                    inputAlign: "center",
                    id: "window_type_2_5",
                    options: [
                        {value: "Выключена", id: '0'},
                        {value: "Бинарная", id: '1'},
                        {value: "Символьная", id: '2'},
                    ]
                },
                {
                    height: 20,
                },

                {
                    // width: 850,
                    height: 100,
                    css: "window_type_3",
                    id: "window_type_2_8",
                    cols:[
                        {
                            view:"label",
                            label:'<p>Период выдачи данных, сек.</p>',
                            width: 350,
                            height: 100,
                        },
                        {
                           maxWidth: 44,
                        },
                        {
                            rows:[
                                {
                                    view: "counter",
                                    css: "window_type_3",
                                    id: "window_type_2_9",
                                    localId: 'counterPeriod',
                                    step: 1,
                                    value: 5,
                                    min: 1,
                                    max: 255,
                                    height: 100,
                                    // width: 200,
                                }
                            ]


                        },

                    ]

                },


                    // counterPeriod,

                    {height: 20,},
                    {
                        css: "window_type_2",
                        id: "window_type_2_6",
                        rows: [
                            {
                                cols: [
                                    {
                                        view: "label",
                                        label: "<p>Температурная компенсация</p>",
                                        width: 400,
                                        height: 100,
                                    },
                                    {
                                        width: 50,
                                    },
                                    {view: "switch", value: 0, id: "switch_temp_compensation", width: 68,},
                                    {}
                                    // {
                                    //     width: 100,
                                    // },
                                    // {view: "switch", value: 0, id: "temp_compensation_2", width: 68,}
                                ]
                            },
                        ]
                    },
                    {

                        view: "combo",
                        width: 850,
                        height: 100,
                        label: '<p>Тип топлива</p>',
                        labelWidth: 400,
                        css: "window_type_2",
                        inputAlign: "center",
                        localId: "comboTypeFuel",
                        options: [
                            {value: "Дизельное топливо ( Лето )", id: '5'},
                            {value: "Дизельное топлива ( Зима )", id: '6'},
                            {value: "Бензин", id: '2'},
                        ]
                    },
                    {
                        height: 20,
                    },
                ]
            }
        }
        return general_config;
    }

    listenerLongData = (longData) => {
        // $$('window_type_1').setValue(longData.serialNumber.toString());
        let serialNumber = longData.serialNumber.map((item)=>{
            return item.toString(16);
        });
        $$('window_type_1').setValue(serialNumber);
        $$('window_type_2_1').setValue(longData.llsAdr.toString());
        this.$$('textMinLevel').setValue(longData.minLevel);
        this.$$('textMaxLevel').setValue(longData.maxLevel);
        this.$$('outputParametersOfSensor').setValue(longData.outputParametersOfSensor);
        this.setBaudRate(longData.baudRate232.toString());
        this.setAutoGetData(longData.autoGetData.toString());
        this.$$('counterPeriod').setValue(longData.periodOfDataIssuance.toString());
        this.setThermalCompensation(longData.thermalCompensationType);
        this.$$('comboTypeFuel').setValue(longData.thermalCompensationType);
    }

    listenerConnect = () => {
        llsModel.getLongData();
    }

    listenerDisconnect = () => {
    }

    destroy() {
        super.destroy();
        llsModel.clearListenerIsConnect(this.listenerConnect);
        llsModel.clearListenerIsDisconnect(this.listenerDisconnect);
        llsModel.clearListenerLongData(this.listenerLongData);
    }

    init() {
        llsModel.addListenerIsConnect(this.listenerConnect);
        llsModel.addListenerLongData(this.listenerLongData);

        $$('window_type_2_1').attachEvent("onChange", (newValue, oldValue, config) => {
            console.log("change");
            if (config != undefined) {
                console.log(newValue);
                let value = Number(newValue);
                llsModel.setLongData({llsAdr: value});
            }

        });

        $$('window_type_2_4').attachEvent("onChange", (newValue, oldValue, config) => {
            console.log("change");
            if (config != undefined) {
                console.log(newValue);
                let value = Number(newValue);
                llsModel.setLongData({baudRate232: value, baudRate485: value});
            }

        });

        $$('window_type_2_5').attachEvent("onChange", (newValue, oldValue, config) => {
            console.log("change");
            if (config != undefined) {
                console.log(newValue);
                let value = Number(newValue);
                llsModel.setLongData({autoGetData: value});
            }

        })

        this.$$('textMinLevel').attachEvent("onChange", (newValue, oldValue, config) => {
            console.log("change");
            if (config != undefined) {
                console.log(newValue);
                let value = Number(newValue);
                if(newValue >= 0 && newValue  <= 1024){
                    llsModel.setLongData({minLevel: value});
                }else{
                    this.$$('textMinLevel').setValue(oldValue);
                }
            }
        })

        this.$$('textMaxLevel').attachEvent("onChange", (newValue, oldValue, config) => {
            console.log("change");
            if (config != undefined) {
                console.log(newValue);
                let value = Number(newValue);
                if(newValue >= 1024 && newValue  <= 4095){
                    llsModel.setLongData({maxLevel: value});
                }else{
                    this.$$('textMaxLevel').setValue(oldValue);
                }
            }
        })

        this.$$('counterPeriod').attachEvent("onChange", (newValue, oldValue, config) => {
            console.log("change");
            if (config != undefined) {
                console.log(newValue);
                let value = Number(newValue);
                llsModel.setLongData({periodOfDataIssuance: value});
            }
        });

        this.$$('outputParametersOfSensor').attachEvent("onChange", (newValue, oldValue, config) => {
            console.log("change");
            if (config != undefined) {
                console.log(newValue);
                let value = Number(newValue);
                llsModel.setLongData({outputParametersOfSensor: value});
            }
        });

        this.$$('switch_temp_compensation').attachEvent("onChange", (newValue, oldValue, config) => {
            console.log("change");
            if (config != undefined) {
                console.log(newValue);
                if (newValue) {
                    // llsModel.setLongData({thermalCompensationType: 0x05}); //DT winter
                    this.$$("comboTypeFuel").show();
                } else {
                    llsModel.setLongData({thermalCompensationType: 0x00});
                    this.$$("comboTypeFuel").hide();
                }
            }
        });

        this.$$("comboTypeFuel").hide();
        this.$$('comboTypeFuel').attachEvent("onChange", (newValue, oldValue, config) => {
            console.log("change");
            if (config != undefined) {
                console.log(newValue);
                let value = Number(newValue);
                llsModel.setLongData({thermalCompensationType: value});
            }
        });




        if(configFile.theme.color == 'white'){
            webix.html.addCss( $$("window_type_1").getNode(), "window_type_1");
            webix.html.addCss( $$("window_type_2_1").getNode(), "window_type_2");
            webix.html.addCss( $$("window_type_2_2").getNode(), "window_type_2");
            webix.html.addCss( $$("window_type_2_3").getNode(), "window_type_2");
            webix.html.addCss( $$("window_type_2_4").getNode(), "window_type_2");
            webix.html.addCss( $$("window_type_2_5").getNode(), "window_type_2");
            webix.html.addCss( $$("window_type_2_6").getNode(), "window_type_2");
            webix.html.addCss( $$("window_type_2_7").getNode(), "window_type_3");
            webix.html.addCss( $$("window_type_2_8").getNode(), "window_type_3");
            webix.html.addCss( $$("window_type_2_9").getNode(), "window_type_3");
        }

        if(configFile.theme.color == 'black'){
            webix.html.addCss( $$("window_type_1").getNode(), "window_type_1_dark");
            webix.html.addCss( $$("window_type_2_1").getNode(), "window_type_2_dark");
            webix.html.addCss( $$("window_type_2_2").getNode(), "window_type_2_dark");
            webix.html.addCss( $$("window_type_2_3").getNode(), "window_type_2_dark");
            webix.html.addCss( $$("window_type_2_4").getNode(), "window_type_2_dark");
            webix.html.addCss( $$("window_type_2_5").getNode(), "window_type_2_dark");
            webix.html.addCss( $$("window_type_2_6").getNode(), "window_type_2_dark");
            webix.html.addCss( $$("window_type_2_7").getNode(), "window_type_3_dark");
            webix.html.addCss( $$("window_type_2_8").getNode(), "window_type_3_dark");
            webix.html.addCss( $$("window_type_2_9").getNode(), "window_type_3_dark");
        }
    }

    setBaudRate(value) {
        $$('window_type_2_4').setValue(value);
    }

    setAutoGetData(value) {
        $$('window_type_2_5').setValue(value);
    }

    setThermalCompensation(value) {
        switch (value) {
            case 0x00: {
                $$('switch_temp_compensation').setValue(false);
                this.$$("comboTypeFuel").hide();
                break;
            }
            default: {
                $$('switch_temp_compensation').setValue(true);
                this.$$("comboTypeFuel").show();
                break;
            }
        }
    }

}
