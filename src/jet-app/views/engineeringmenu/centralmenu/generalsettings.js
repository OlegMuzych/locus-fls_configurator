import {JetView} from "webix-jet";
import llsModel from "../../../models/lls-model";
import configFile from "../../../config-app";

export default class GeneralSettings extends JetView {
    config() {

        let llsAdr = {
            localId: "llsAdr",
            rows: [
                {
                    css: "window_type_2",
                    cols: [
                        {
                            view: "text",
                            height: 100,
                            inputAlign: "center",
                            inputHeight: 100,
                            label: '<p>Сетевой адрес</p>',
                            labelWidth: 400,
                            css: "window_type_2",
                            readonly: false,
                            minWidth: 60,
                            type: 'number',
                            title: '1-254',
                            localId: "textLlsAdr"
                        },
                        {
                            align: "right",
                            rows: [
                                {

                                },
                                {
                                    view: "button",
                                    css: "button_filter_set",
                                    label: 'Применить',
                                    height: 60,
                                    width: 150,
                                    localId: 'buttonLlsAdr',
                                    hidden: false,
                                },
                                {

                                }
                            ]
                        },
                        {
                            paddingX: -1,
                            rows:[
                                {

                                },
                                {
                                    view: "button",
                                    height: 60,
                                    width: 10,
                                    // css:"status_define_button_yellow",
                                    localId:"statusLlsAdr",
                                    css:"status_define_button" //- скрытая кнопка
                                },
                                {

                                }
                            ]
                        },
                        {width: 10},
                    ]
                },
            ]
        }

        let minLevel = {
            localId: "minLevel",
            rows: [
                {
                    css: "window_type_2",
                    cols: [
                        {
                            view: "text",
                            height: 100,
                            inputAlign: "center",
                            inputHeight: 100,
                            label: '<p>Минимальный уровень</p>',
                            labelWidth: 400,
                            css: "window_type_2",
                            readonly: false,
                            minWidth: 60,
                            type: 'number',
                            title: '0-1024',
                            localId: "textMinLevel"
                        },

                        {
                            align: "right",
                            rows: [
                                {},
                                {
                                    view: "button",
                                    css: "button_filter_set",
                                    label: 'Применить',
                                    height: 60,
                                    width: 150,
                                    localId: 'buttonMinLevel',
                                },
                                {}
                            ]
                        },
                        {
                            paddingX: -1,
                            rows:[
                                {

                                },
                                {
                                    view: "button",
                                    height: 60,
                                    width: 10,
                                    // css:" status_define_button_yellow",
                                    localId:"statusMinLevel",
                                    css:" status_define_button" //- скрытая кнопка
                                },
                                {

                                }
                            ]
                        },
                        {width: 10},
                    ]
                },
            ]
        }

        let maxLevel = {
            localId: "maxLevel",
            rows: [
                {
                    css: "window_type_2",
                    cols: [
                        {
                            view: "text",
                            height: 100,
                            inputAlign: "center",
                            inputHeight: 100,
                            label: '<p>Максимальный уровень</p>',
                            labelWidth: 400,
                            css: "window_type_2",
                            readonly: false,
                            minWidth: 60,
                            type: 'number',
                            title: '0-1024',
                            localId: "textMaxLevel"
                        },

                        {
                            align: "right",
                            rows: [
                                {},
                                {
                                    view: "button",
                                    css: "button_filter_set",
                                    label: 'Применить',
                                    height: 60,
                                    width: 150,
                                    localId: 'buttonMaxLevel',
                                },
                                {}
                            ]
                        },
                        {
                            paddingX: -1,
                            rows:[
                                {

                                },
                                {
                                    view: "button",
                                    height: 60,
                                    width: 10,
                                    // css:" status_define_button_yellow",
                                    localId: 'statusMaxLevel',
                                    css:" status_define_button"  // - скрытая кнопка
                                },
                                {

                                }
                            ]
                        },
                        {width: 10},
                    ]
                },
            ]
        }


        let counterPeriod = {
            height: 100,
            css: "window_type_3",
            localId: "counterPeriod",
            cols: [
                {
                    view: "label",
                    label: '<p>Период выдачи данных, сек.</p>',
                    width: 350,
                    height: 100,
                },
                {
                    maxWidth: 44,
                },
                {
                    rows: [
                        {
                            view: "counter",
                            css: "window_type_3",
                            id: "window_type_2_9",
                            localId: 'counterCounterPeriod',
                            step: 1,
                            value: 5,
                            min: 1,
                            max: 255,
                            height: 100,
                        }
                    ]
                },
            ]
        }

        let fuelTypeSwitch = {
            localId: "fuelTypeSwitch",
            rows: [
                {
                    css: "window_type_2",
                    cols: [
                        {
                            view: "text",
                            height: 100,
                            inputAlign: "center",
                            inputHeight: 100,
                            label: '<p>Тип топлива</p>',
                            labelWidth: 400,
                            css: "window_type_2",
                            readonly: true,
                            minWidth: 60,
                            localId: "textFuelType"
                        },

                        {
                            align: "right",
                            rows: [
                                {},
                                {
                                    view: "button",
                                    css: "button_filter_set",
                                    label: 'Выбрать',
                                    height: 60,
                                    width: 150,
                                    localId: 'buttonFuelType',
                                },
                                {}
                            ]
                        },
                        {
                            paddingX: -1,
                            rows:[
                                {

                                },
                                {
                                    view: "button",
                                    height: 60,
                                    width: 10,
                                    // css:" status_define_button_yellow",
                                    css:" status_define_button", //- скрытая кнопка
                                    localId:"statusFuelType"
                                },
                                {

                                }
                            ]
                        },
                        {width: 10},
                    ]
                },
            ]
        }

        let coefficientK1 = {
            localId: "coefficientK1",
            rows: [
                {
                    css: "window_type_2",
                    cols: [
                        {
                            view: "text",
                            height: 100,
                            inputAlign: "center",
                            inputHeight: 100,
                            label: '<p>Коэффициент К1</p>',
                            labelWidth: 400,
                            css: "window_type_2",
                            readonly: false,
                            minWidth: 60,
                            localId: "textCoefficientK1"
                        },

                        {
                            align: "right",
                            rows: [
                                {},
                                {
                                    view: "button",
                                    css: "button_filter_set",
                                    label: 'Применить',
                                    height: 60,
                                    width: 150,
                                    localId: 'buttonCoefficientK1',
                                },
                                {}
                            ]
                        },
                        {
                            paddingX: -1,
                            rows:[
                                {

                                },
                                {
                                    view: "button",
                                    height: 60,
                                    width: 10,
                                    // css:" status_define_button_yellow",
                                    css:" status_define_button", //- скрытая кнопка
                                    localId:"statusCoefficientK1",

                                },
                                {

                                }
                            ]
                        },
                        {width: 10},
                    ]
                },
            ]
        }

        let coefficientK2 = {
            localId: "coefficientK2",
            rows: [
                {
                    css: "window_type_2",
                    cols: [
                        {
                            view: "text",
                            height: 100,
                            inputAlign: "center",
                            inputHeight: 100,
                            label: '<p>Коэффициент К2</p>',
                            labelWidth: 400,
                            css: "window_type_2",
                            readonly: false,
                            minWidth: 60,
                            localId: "textCoefficientK2"
                        },

                        {
                            align: "right",
                            rows: [
                                {},
                                {
                                    view: "button",
                                    css: "button_filter_set",
                                    label: 'Применить',
                                    height: 60,
                                    width: 150,
                                    localId: 'buttonCoefficientK2',
                                },
                                {}
                            ]
                        },
                        {
                            paddingX: -1,
                            rows:[
                                {

                                },
                                {
                                    view: "button",
                                    height: 60,
                                    width: 10,
                                    // css:" status_define_button_yellow",
                                    css:" status_define_button", //- скрытая кнопка
                                    localId:"statusCoefficientK2",
                                },
                                {

                                }
                            ]
                        },
                        {width: 10},
                    ]
                },
            ]
        }

        let baudRateSwitch = {
            rows: [
                {
                    css: "window_type_2",
                    cols: [
                        {
                            view: "text",
                            height: 100,
                            inputAlign: "center",
                            inputHeight: 100,
                            label: '<p>Скорость подключения</p>',
                            labelWidth: 400,
                            css: "window_type_2",
                            readonly: true,
                            minWidth: 60,
                            localId: "textBaudRate"
                        },

                        {
                            align: "right",
                            rows: [
                                {},
                                {
                                    view: "button",
                                    css: "button_filter_set",
                                    label: 'Выбрать',
                                    height: 60,
                                    width: 150,
                                    localId: 'buttonBaudRate',
                                },
                                {}
                            ]
                        },
                        {
                            paddingX: -1,
                            rows:[
                                {

                                },
                                {
                                    view: "button",
                                    height: 60,
                                    width: 10,
                                    // css:" status_define_button_yellow",
                                    css:" status_define_button", //- скрытая кнопка
                                    localId:"statusBaudRate",
                                },
                                {

                                }
                            ]
                        },
                        {width: 10},
                    ]
                },
            ]
        }

        let autoOutputSwitch = {
            rows: [
                {
                    css: "window_type_2",
                    cols: [
                        {
                            view: "text",
                            height: 100,
                            inputAlign: "center",
                            inputHeight: 100,
                            label: '<p>Автоматическая выдача данных</p>',
                            labelWidth: 400,
                            css: "window_type_2",
                            readonly: true,
                            minWidth: 60,
                            localId: "textAutoGetData"
                        },

                        {
                            align: "right",
                            rows: [
                                {},
                                {
                                    view: "button",
                                    css: "button_filter_set",
                                    label: 'Выбрать',
                                    height: 60,
                                    width: 150,
                                    localId: 'buttonAutoGetData',
                                },
                                {}
                            ]
                        },
                        {
                            paddingX: -1,
                            rows:[
                                {

                                },
                                {
                                    view: "button",
                                    height: 60,
                                    width: 10,
                                    // css:" status_define_button_yellow",
                                    css:" status_define_button", //- скрытая кнопка
                                    localId:"statusAutoGetData",

                                },
                                {

                                }
                            ]
                        },
                        {width: 10},
                    ]
                },
            ]
        }

        let general_config = {
            minWidth: 600,
            maxWidth: 850,
            view: "scrollview",
            scroll: "y",
            maxHeight: 2000,
            body: {
                id: "central_menu_button_1",
                css: "style_general_rows",
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

                    {height: 10,},
                    llsAdr,
                    {height: 20},
                    baudRateSwitch,
                    {height: 20},
                    minLevel,
                    maxLevel,
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
                    {height: 20},
                    autoOutputSwitch,
                    counterPeriod,

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
                                ]
                            },
                        ]
                    },
                    fuelTypeSwitch,
                    coefficientK1,
                    coefficientK2,
                    {
                        height: 20,
                    },
                ]
            }
        }
        return general_config;
    }

    listenerLongData = (longData) => {
        let serialNumber = sn2ascii(longData.serialNumber);
        $$('window_type_1').setValue(serialNumber);
        // this.$$('textLlsAdr').setValue(longData.llsAdr);
        this.setTextValue("textLlsAdr", 'llsAdr', "statusLlsAdr");
        this.$$('textMinLevel').setValue(longData.minLevel);
        this.$$('textMaxLevel').setValue(longData.maxLevel);
        this.$$('outputParametersOfSensor').setValue(longData.outputParametersOfSensor);
        this.setBaudRate(longData.baudRate232);
        this.setAutoGetData(longData.autoGetData);
        this.$$('counterCounterPeriod').setValue(longData.periodOfDataIssuance.toString());
        this.setThermalCompensation(longData.thermalCompensationType);
        this.setTypeFuel(longData.thermalCompensationType);
        this.$$('textCoefficientK1').setValue(longData.coefficientK1.toString());
        this.$$('textCoefficientK2').setValue(longData.coefficientK2.toString());
    }

    listenerConnect = () => {
        llsModel.getLongData();
        llsModel.newLongData = {...llsModel.currentLongData};
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

        // llsAdr
        this.$$('textLlsAdr').attachEvent("onChange", (newValue, oldValue, config) => {
            console.log("change");
            if (config != undefined) {
                console.log(newValue);
                if (newValue >= 1 && newValue <= 254) {
                    llsModel.newLongData.llsAdr = newValue;
                    // if(newValue == llsModel.currentLongData.llsAdr){
                    //     this.setStatusNewValue('statusLlsAdr', false);
                    // }else{
                    //     this.setStatusNewValue('statusLlsAdr', true);
                    // }
                    if (llsModel.newLongData.llsAdr == llsModel.currentLongData.llsAdr) {
                        this.setStatusNewValue('statusLlsAdr', false);
                    } else {
                        this.setStatusNewValue('statusLlsAdr', true);
                    }
                } else {
                    this.$$('textLlsAdr').setValue(oldValue);
                }
            }
        })
        this.$$('buttonLlsAdr').attachEvent("onItemClick", (id, e) => {
            let test = this.$$('textLlsAdr').getValue();
            let value = Number(test);
            llsModel.setLongData({llsAdr: value});
        });

        // baudRate
        const popupBaudRate = {
            // Кнопка выбрать в окне BaudRate -------------------------------//
            view: "popup",
            multi: true,
            css: "service_button",
            width: 300,
            height: 400,
            body: {
                view: "list",
                data: [
                    {id: "2", location: "9600", name: '1', value: 2},
                    {id: "3", location: "19200", name: '2', value: 3},
                    {id: "5", location: "38400", name: '3', value: 5},
                    {id: "6", location: "57600", name: '4', value: 6},
                    {id: "7", location: "115200", name: '5', value: 7},
                ],
                template: "#name# - #location#",
                autoheight: true,
                id: 'listBaudRate',
                select: true
            }
        }
        this.popBaudRate = this.ui(popupBaudRate);
        this.$$('buttonBaudRate').attachEvent("onItemClick", (id, e) => {
            console.log('click');
            this.popBaudRate.show($$(id).getNode());
        });
        $$("listBaudRate").attachEvent("onItemClick", (id, name, e) => {
            console.log("click");
            let obj = $$("listBaudRate").getItem(id);
            console.log(obj);
            llsModel.setLongData({baudRate232: obj.value, baudRate485: obj.value});
        });

        // autoGet
        const popupAutoGetData = {
            // Кнопка выбрать в окне Auto Get data -------------------------------//
            view: "popup",
            multi: true,
            css: "service_button",
            width: 300,
            height: 400,
            body: {
                view: "list",
                data: [
                    {id: "0", location: "Выключена", name: "1", value: 0},
                    {id: "1", location: "Бинарная", name: "2", value: 1},
                    {id: "2", location: "Символьная", name: "3", value: 2},
                ],
                template: "#name# - #location#",
                autoheight: true,
                id: 'listAutoGetData',
                select: true
            }
        }
        this.popAutoGetData = this.ui(popupAutoGetData);
        this.$$('buttonAutoGetData').attachEvent("onItemClick", (id, e) => {
            console.log('click');
            this.popAutoGetData.show($$(id).getNode());
        });
        $$("listAutoGetData").attachEvent("onItemClick", (id, name, e) => {
            console.log("click");
            let obj = $$("listAutoGetData").getItem(id);
            console.log(obj);
            llsModel.setLongData({autoGetData: obj.value});
        });

        // minLevel
        this.$$('textMinLevel').attachEvent("onChange", (newValue, oldValue, config) => {
            console.log("change");
            if (config != undefined) {
                console.log(newValue);
                if (newValue >= 0 && newValue <= 1024) {
                    llsModel.newLongData.minLevel = newValue;
                    if(newValue == llsModel.currentLongData.minLevel){
                        this.setStatusNewValue('statusMinLevel', false);
                    }else{
                        this.setStatusNewValue('statusMinLevel', true);
                    }
                } else {
                    this.$$('textMinLevel').setValue(oldValue);
                }
            }
        })
        this.$$('buttonMinLevel').attachEvent("onItemClick", (id, e) => {
            let test = this.$$('textMinLevel').getValue();
            let value = Number(test);
            this.setStatusNewValue('statusMinLevel', false);
            llsModel.setLongData({minLevel: value});
        });

        // maxLevel
        this.$$('textMaxLevel').attachEvent("onChange", (newValue, oldValue, config) => {
            console.log("change");
            if (config != undefined) {
                console.log(newValue);
                if (newValue >= 1024 && newValue <= 4095) {
                    llsModel.newLongData.maxLevel = newValue;
                    if(newValue == llsModel.currentLongData.maxLevel){
                        this.setStatusNewValue('statusMaxLevel', false);
                    }else{
                        this.setStatusNewValue('statusMaxLevel', true);
                    }
                } else {
                    this.$$('textMaxLevel').setValue(oldValue);
                }
            }
        })
        this.$$('buttonMaxLevel').attachEvent("onItemClick", (id, e) => {
            let test = this.$$('textMaxLevel').getValue();
            let value = Number(test);
            this.setStatusNewValue('statusMaxLevel', false);
            llsModel.setLongData({maxLevel: value});
        });

        this.$$('counterCounterPeriod').attachEvent("onChange", (newValue, oldValue, config) => {
            console.log("change");
            if (config != undefined) {
                console.log(newValue);
                let value = Number(newValue);
                llsModel.setLongData({periodOfDataIssuance: value});
            }
        });

        // outputParametersOfSensor
        this.$$('outputParametersOfSensor').attachEvent("onChange", (newValue, oldValue, config) => {
            console.log("change");
            if (config != undefined) {
                console.log(newValue);
                let value = Number(newValue);
                llsModel.setLongData({outputParametersOfSensor: value});
            }
        });

        // fuelType
        this.$$('switch_temp_compensation').attachEvent("onChange", (newValue, oldValue, config) => {
            console.log("change");
            if (config != undefined) {
                console.log(newValue);;
                if (newValue) {
                    // llsModel.setLongData({thermalCompensationType: 0x05}); //DT winter
                    this.$$("fuelTypeSwitch").show();
                } else {
                    llsModel.setLongData({thermalCompensationType: 0x00});
                    this.$$("fuelTypeSwitch").hide();
                }
            }
        });
        this.$$("fuelTypeSwitch").hide();
        const popupFuelType = {
            // Кнопка выбрать в окне Auto Get data -------------------------------//
            view: "popup",
            multi: true,
            css: "service_button",
            width: 300,
            height: 400,
            body: {
                view: "list",
                data: [
                    {id: "0", location: "Выключена", name: "1", value: 0},
                    {id: "1", location: "АИ-95", name: "2", value: 1},
                    {id: "2", location: "АИ-92", name: "3", value: 2},
                    {id: "3", location: "АИ-80 (Лето)", name: "4", value: 3},
                    {id: "4", location: "АИ-80 (Зима)", name: "5", value: 4},
                    {id: "5", location: "ДТ (Лето)", name: "6", value: 5},
                    {id: "6", location: "ДТ (Зима)", name: "7", value: 6},
                    {id: "7", location: "Свои параметры", name: "8", value: 7},
                ],
                template: "#name# - #location#",
                autoheight: true,
                id: 'listFuelType',
                select: true
            }
        }
        this.popFuelType = this.ui(popupFuelType);
        this.$$('buttonFuelType').attachEvent("onItemClick", (id, e) => {
            console.log('click');
            this.popFuelType.show($$(id).getNode());
        });
        $$("listFuelType").attachEvent("onItemClick", (id, name, e) => {
            console.log("click");
            let obj = $$("listFuelType").getItem(id);
            console.log(obj);
            llsModel.setLongData({thermalCompensationType: obj.value});
        });

        // coefficientK1
        this.$$('textCoefficientK1').attachEvent("onChange", (newValue, oldValue, config) => {
            console.log("change");
            if (config != undefined) {
                console.log(newValue);
                if (newValue >= 0 && newValue < 1000) {
                    llsModel.newLongData.coefficientK1 = newValue;
                    if(newValue == llsModel.currentLongData.coefficientK1){
                        this.setStatusNewValue('statusCoefficientK1', false);
                    }else{
                        this.setStatusNewValue('statusCoefficientK1', true);
                    }
                } else {
                    this.$$('textCoefficientK1').setValue(oldValue);
                }
            }
        })
        this.$$('buttonCoefficientK1').attachEvent("onItemClick", (id, e) => {
            let test = parseFloat(this.$$('textCoefficientK1').getValue());
            this.setStatusNewValue('statusCoefficientK1', false);
            llsModel.setLongData({coefficientK1: test});
        });

        // coefficientK2
        this.$$('textCoefficientK2').attachEvent("onChange", (newValue, oldValue, config) => {
            console.log("change");
            if (config != undefined) {
                console.log(newValue);
                if (newValue >= 0 && newValue < 1000) {
                    llsModel.newLongData.coefficientK2 = newValue;
                    if(newValue == llsModel.currentLongData.coefficientK2){
                        this.setStatusNewValue('statusCoefficientK2', false);
                    }else{
                        this.setStatusNewValue('statusCoefficientK2', true);
                    }
                } else {
                    this.$$('textCoefficientK2').setValue(oldValue);
                }
            }
        })
        this.$$('buttonCoefficientK2').attachEvent("onItemClick", (id, e) => {
            let test = parseFloat(this.$$('textCoefficientK2').getValue());
            this.setStatusNewValue('statusCoefficientK2', false);
            llsModel.setLongData({coefficientK2: test});
        });


        if (configFile.theme.color == 'white') {
            webix.html.addCss($$("window_type_1").getNode(), "window_type_1");
            webix.html.addCss($$("window_type_2_1").getNode(), "window_type_2");
            webix.html.addCss($$("window_type_2_2").getNode(), "window_type_2");
            webix.html.addCss($$("window_type_2_3").getNode(), "window_type_2");
            webix.html.addCss($$("window_type_2_4").getNode(), "window_type_2");
            webix.html.addCss($$("window_type_2_5").getNode(), "window_type_2");
            webix.html.addCss($$("window_type_2_6").getNode(), "window_type_2");
            webix.html.addCss($$("window_type_2_7").getNode(), "window_type_3");
            webix.html.addCss($$("window_type_2_8").getNode(), "window_type_3");
            webix.html.addCss($$("window_type_2_9").getNode(), "window_type_3");
        }

        if (configFile.theme.color == 'black') {
            webix.html.addCss($$("window_type_1").getNode(), "window_type_1_dark");
            webix.html.addCss($$("window_type_2_1").getNode(), "window_type_2_dark");
            webix.html.addCss($$("window_type_2_2").getNode(), "window_type_2_dark");
            webix.html.addCss($$("window_type_2_3").getNode(), "window_type_2_dark");
            webix.html.addCss($$("window_type_2_4").getNode(), "window_type_2_dark");
            webix.html.addCss($$("window_type_2_5").getNode(), "window_type_2_dark");
            webix.html.addCss($$("window_type_2_6").getNode(), "window_type_2_dark");
            webix.html.addCss($$("window_type_2_7").getNode(), "window_type_3_dark");
            webix.html.addCss($$("window_type_2_8").getNode(), "window_type_3_dark");
            webix.html.addCss($$("window_type_2_9").getNode(), "window_type_3_dark");
        }
    }

    setBaudRate(number) {
        switch (number) {
            case 0: {
                this.$$("textBaudRate").setValue("2400");
                break;
            }
            case 1: {
                this.$$("textBaudRate").setValue("4800");
                break;
            }
            case 2: {
                this.$$("textBaudRate").setValue("9600");
                break;
            }
            case 3: {
                this.$$("textBaudRate").setValue("19200");
                break;
            }
            case 4: {
                this.$$("textBaudRate").setValue("28800");
                break;
            }
            case 5: {
                this.$$("textBaudRate").setValue("38400");
                break;
            }
            case 6: {
                this.$$("textBaudRate").setValue("57600");
                break;
            }
            case 7: {
                this.$$("textBaudRate").setValue("115200");
                break;
            }
            default: {
                this.$$("textBaudRate").setValue("undefined");
                break;
            }
        }
    }

    setAutoGetData(number) {
        switch (number) {
            case 0: {
                this.$$("textAutoGetData").setValue("Выключена");
                this.$$("counterPeriod").hide();
                break;
            }
            case 1: {
                this.$$("textAutoGetData").setValue("Бинарная");
                this.$$("counterPeriod").show();
                break;
            }
            case 2: {
                this.$$("textAutoGetData").setValue("Сивольная");
                this.$$("counterPeriod").show();
                break;
            }
            default: {
                this.$$("textAutoGetData").setValue("undefined");
                this.$$("counterPeriod").show();
                break;
            }
        }
    }

    setThermalCompensation(value) {
        switch (value) {
            case 0x00: {
                $$('switch_temp_compensation').setValue(false);
                this.$$("fuelTypeSwitch").hide();

                this.$$("coefficientK1").hide();
                this.$$("coefficientK2").hide();
                break;
            }
            case 0x07: {
                $$('switch_temp_compensation').setValue(true);
                this.$$("fuelTypeSwitch").show();

                this.$$("coefficientK1").show();
                this.$$("coefficientK2").show();
                break;
            }
            default: {
                $$('switch_temp_compensation').setValue(true);
                this.$$("fuelTypeSwitch").show();

                this.$$("coefficientK1").hide();
                this.$$("coefficientK2").hide();
                break;
            }
        }
    }

    setTypeFuel(number) {
        switch (number) {
            case 0: {
                this.$$("textFuelType").setValue("Выключена");
                break;
            }
            case 1: {
                this.$$("textFuelType").setValue("АИ-95");
                break;
            }
            case 2: {
                this.$$("textFuelType").setValue("АИ-92");
                break;
            }
            case 3: {
                this.$$("textFuelType").setValue("АИ-80 (Лето)");
                break;
            }
            case 4: {
                this.$$("textFuelType").setValue("АИ-80 (Зима)");
                break;
            }
            case 5: {
                this.$$("textFuelType").setValue("ДТ (Лето)");
                break;
            }
            case 6: {
                this.$$("textFuelType").setValue("ДТ (Зима)");
                break;
            }
            case 7: {
                this.$$("textFuelType").setValue("Свои параметры");
                break;
            }
            default: {
                this.$$("textFuelType").setValue("undefined");
                break;
            }
        }
    }

    setStatusNewValue(id, status){
        webix.html.removeCss(this.$$(id).getNode(), "status_define_button_yellow");
        webix.html.removeCss(this.$$(id).getNode(), "status_define_button");
        if(status){
            webix.html.addCss(this.$$(id).getNode(), "status_define_button_yellow");
        }else{
            webix.html.addCss(this.$$(id).getNode(), "status_define_button");
        }
    }

    setTextValue(id, name, statusId){
        if(llsModel.currentLongData[name] == llsModel.newLongData[name]){
            this.$$(id).setValue(llsModel.currentLongData[name]);
            this.setStatusNewValue(statusId, false);
        }else{
            this.$$(id).setValue(llsModel.newLongData[name]);
            this.setStatusNewValue(statusId, false);
        }
    }
    setComboValue(id, name){
        if(llsModel.currentLongData[name] == llsModel.newLongData[name]){
            // this.$$(id).setValue(llsModel.currentLongData[name]);
        }else{
            // this.$$(id).setValue(llsModel.newLongData[name]);
        }
    }

}

function sn2ascii(decArray) {
    let newDecArray = [];
    for (let i = 0; i < 8; i++) {
        newDecArray.push(decArray[i]);
    }
    let strAscii = String.fromCharCode(...newDecArray);
    return strAscii;
}
