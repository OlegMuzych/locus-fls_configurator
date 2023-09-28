import {JetView} from "webix-jet";
import {llsModelOne} from "../../../../models/lls-test-models";
import configFile from "../../../../config-app";
import globalVariable from "../../../../global-variable-app";

export default class GeneralSettings extends JetView {
    config() {
        const _ = this.app.getService("locale")._;

        let llsAdr = {
            localId: "llsAdr",
            rows: [
                {
                    css: "window_type_2",
                    id: "rows_number_2",
                    cols: [
                        {
                            view: "text",
                            height: 100,
                            inputAlign: "center",
                            inputHeight: 100,
                            label: `<p>${_('address_lls')}</p>`,
                            labelWidth: 400,
                            // css: "window_type_2_dark",
                            readonly: false,
                            minWidth: 60,
                            type: 'number',
                            title: '1-254',
                            localId: "textLlsAdr",
                            id:"textLlsAdr1"
                            // maxWidth: 600,
                        },
                        {
                            align: "right",
                            rows: [
                                {},
                                {
                                    view: "button",
                                    css: "auto_calibration",
                                    label: _('apply'),
                                    height: 60,
                                    width: 150,
                                    localId: 'buttonLlsAdr',
                                    hidden: false,
                                },
                                {}
                            ]
                        },
                        {
                            paddingX: -1,
                            rows: [
                                {},
                                {
                                    view: "button",
                                    height: 60,
                                    width: 10,
                                    // css:"status_define_button_yellow",
                                    localId: "statusLlsAdr",
                                    css: "status_define_button" //- скрытая кнопка
                                },
                                {}
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
                    id: "rows_number_4",
                    cols: [
                        {
                            view: "text",
                            height: 100,
                            inputAlign: "center",
                            inputHeight: 100,
                            label: `<p>${_("min_level")}</p>`,
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
                                    css: "auto_calibration",
                                    label: _('apply'),
                                    height: 60,
                                    width: 150,
                                    localId: 'buttonMinLevel',
                                },
                                {}
                            ]
                        },
                        {
                            paddingX: -1,
                            rows: [
                                {},
                                {
                                    view: "button",
                                    height: 60,
                                    width: 10,
                                    // css:" status_define_button_yellow",
                                    localId: "statusMinLevel",
                                    css: " status_define_button" //- скрытая кнопка
                                },
                                {}
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
                    id: "rows_number_5",
                    cols: [
                        {
                            view: "text",
                            height: 100,
                            inputAlign: "center",
                            inputHeight: 100,
                            label: `<p>${_("max_level")}</p>`,
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
                                    css: "auto_calibration",
                                    label: _('apply'),
                                    height: 60,
                                    width: 150,
                                    localId: 'buttonMaxLevel',
                                },
                                {}
                            ]
                        },
                        {
                            paddingX: -1,
                            rows: [
                                {},
                                {
                                    view: "button",
                                    height: 60,
                                    width: 10,
                                    // css:" status_define_button_yellow",
                                    localId: 'statusMaxLevel',
                                    css: " status_define_button"  // - скрытая кнопка
                                },
                                {}
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
                    label: `<p>${_("period_of_data_issuance")}</p>`,
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
                            // id: "window_type_2_9",
                            localId: 'counterCounterPeriod_one',
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
                    id:"rows_number_8",
                    cols: [
                        {
                            view: "text",
                            height: 100,
                            inputAlign: "center",
                            inputHeight: 100,
                            label: `<p>${_("fuel_type")}</p>`,
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
                                    css: "auto_calibration",
                                    label: _('choose'),
                                    height: 60,
                                    width: 150,
                                    localId: 'buttonFuelType',
                                },
                                {}
                            ]
                        },
                        {
                            paddingX: -1,
                            rows: [
                                {},
                                {
                                    view: "button",
                                    height: 60,
                                    width: 10,
                                    // css:" status_define_button_yellow",
                                    css: " status_define_button", //- скрытая кнопка
                                    localId: "statusFuelType"
                                },
                                {}
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
                    id:"rows_rows_9",
                    cols: [
                        {
                            view: "text",
                            height: 100,
                            inputAlign: "center",
                            inputHeight: 100,
                            label: `<p>${_("coefficient_k1")}</p>`,
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
                                    css: "auto_calibration",
                                    label: _("apply"),
                                    height: 60,
                                    width: 150,
                                    localId: 'buttonCoefficientK1',
                                },
                                {}
                            ]
                        },
                        {
                            paddingX: -1,
                            rows: [
                                {},
                                {
                                    view: "button",
                                    height: 60,
                                    width: 10,
                                    // css:" status_define_button_yellow",
                                    css: " status_define_button", //- скрытая кнопка
                                    localId: "statusCoefficientK1",

                                },
                                {}
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
                    id:"rows_number_10",
                    cols: [
                        {
                            view: "text",
                            height: 100,
                            inputAlign: "center",
                            inputHeight: 100,
                            label: `<p>${_("coefficient_k2")}</p>`,
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
                                    css: "auto_calibration",
                                    label: _("apply"),
                                    height: 60,
                                    width: 150,
                                    localId: 'buttonCoefficientK2',
                                },
                                {}
                            ]
                        },
                        {
                            paddingX: -1,
                            rows: [
                                {},
                                {
                                    view: "button",
                                    height: 60,
                                    width: 10,
                                    // css:" status_define_button_yellow",
                                    css: " status_define_button", //- скрытая кнопка
                                    localId: "statusCoefficientK2",
                                },
                                {}
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
                    id:"rows_number_3",
                    cols: [
                        {
                            view: "text",
                            height: 100,
                            inputAlign: "center",
                            inputHeight: 100,
                            label: `<p>${_("baud_rate")}</p>`,
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
                                    css: "auto_calibration",
                                    label: _('choose'),
                                    height: 60,
                                    width: 150,
                                    localId: 'buttonBaudRate',
                                },
                                {}
                            ]
                        },
                        {
                            paddingX: -1,
                            rows: [
                                {},
                                {
                                    view: "button",
                                    height: 60,
                                    width: 10,
                                    // css:" status_define_button_yellow",
                                    css: "status_define_button", //- скрытая кнопка
                                    localId: "statusBaudRate",
                                },
                                {}
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
                    id:"rows_number_7",
                    cols: [
                        {
                            view: "text",
                            height: 100,
                            inputAlign: "center",
                            inputHeight: 100,
                            label: `<p>${_("automatic_data_output")}</p>`, labelWidth: 400,
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
                                    css: "auto_calibration",
                                    label: _('choose'),
                                    height: 60,
                                    width: 150,
                                    localId: 'buttonAutoGetData',
                                },
                                {}
                            ]
                        },
                        {
                            paddingX: -1,
                            rows: [
                                {},
                                {
                                    view: "button",
                                    height: 60,
                                    width: 10,
                                    // css:" status_define_button_yellow",
                                    css: " status_define_button", //- скрытая кнопка
                                    localId: "statusAutoGetData",

                                },
                                {}
                            ]
                        },
                        {width: 10},
                    ]
                },
            ]
        }

        let general_config = {
            view: "scrollview",
            scroll: "y",
            // maxHeight: 1050,
            // minHeight: 550,
            body: {
                height: 1480,
                id: "central_menu_button_1",
                css: "style_general_rows",
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
                                label: `<p>${_("serial_number")}</p>`,
                                labelWidth: 400,
                                css: "window_type_1",
                                inputAlign: "center",
                                readonly: true,
                                id: "window_type_1_one",
                            },
                        ]
                    },

                    {height: 20,},
                    llsAdr,
                    {height: 20},
                    baudRateSwitch,
                    {height: 20},
                    minLevel,
                    maxLevel,
                    {height: 20},

                    {
                        height: 100,
                        css: "window_type_2",
                        localId:"rows_number_6_one",
                        rows:[
                            {

                            },

                            {
                                view: "radio",
                                label: `<p>${_("output_message_type")}</p>`,
                                css: "window_type_2",
                                // id: "window_type_2_7",
                                width: 850,
                                // height: 80,
                                labelWidth: 400,
                                value: 0,
                                localId: 'outputParametersOfSensor_one',
                                options: [
                                    {id: 0, value: _("output_message_type_is_level")}, // изначально выбранный элемент
                                    {id: 1, value: _("output_message_type_is_volume")}
                                ]
                            },
                            {

                            }
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
                                        label: `<p>${_("temperature_compensation")}</p>`,
                                        width: 400,
                                        height: 100,
                                        css: "window_type_2",
                                        id: "window_type_4_4",
                                    },
                                    {
                                        width: 50,
                                    },
                                    {view: "switch", value: 0, id: "switch_temp_compensation_one", width: 68, css:"toggle_style" },
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
        $$('window_type_1_one').setValue(serialNumber);

        this.setTextValue("textLlsAdr", 'llsAdr', "statusLlsAdr");

        this.setTextValue("textMinLevel", 'minLevel', "statusMinLevel");
        this.setTextValue("textMaxLevel", 'maxLevel', "statusMaxLevel");

        this.$$('outputParametersOfSensor_one').setValue(longData.outputParametersOfSensor);

        // this.setBaudRate(longData.baudRate232);
        this.setBaudRateValue()

        // this.setAutoGetData(longData.autoGetData);
        this.setAutoGetDataValue();

        this.$$('counterCounterPeriod_one').setValue(longData.periodOfDataIssuance.toString());

        // this.setThermalCompensation(longData.thermalCompensationType);
        // this.setTypeFuel(longData.thermalCompensationType);
        this.setThermalCompensationValue();

        // this.$$('textCoefficientK1').setValue(longData.coefficientK1.toString());
        // this.$$('textCoefficientK2').setValue(longData.coefficientK2.toString());
        this.setFloatValue("textCoefficientK1", 'coefficientK1', "statusCoefficientK1");
        this.setFloatValue("textCoefficientK2", 'coefficientK2', "statusCoefficientK2");
    }

    listenerConnect = () => {
        llsModelOne.getLongData();
    }

    listenerDisconnect = () => {
    }

    destroy() {
        super.destroy();
        llsModelOne.clearListenerIsConnect(this.listenerConnect);
        llsModelOne.clearListenerIsDisconnect(this.listenerDisconnect);
        llsModelOne.clearListenerLongData(this.listenerLongData);
    }

    init() {
        const _ = this.app.getService("locale")._;
        llsModelOne.addListenerIsConnect(this.listenerConnect);
        llsModelOne.addListenerLongData(this.listenerLongData);
        llsModelOne.getStatusConnect();

        // llsAdr
        this.$$('textLlsAdr').attachEvent("onChange", (newValue, oldValue, config) => {
            console.log("change");
            if (config != undefined) {
                console.log(newValue);
                if (newValue >= 1 && newValue <= 254) {
                    llsModelOne.newLongData.llsAdr = newValue;
                    globalVariable.autoSaveMode.then(flag => flag ? llsModelOne.setLongData({llsAdr: llsModelOne.newLongData.llsAdr}) : '');
                    this.setTextValue("textLlsAdr", 'llsAdr', "statusLlsAdr");
                } else {
                    this.$$('textLlsAdr').setValue(oldValue);
                }
            }
        })
        this.$$('buttonLlsAdr').attachEvent("onItemClick", (id, e) => {
            let test = this.$$('textLlsAdr').getValue();
            let value = Number(test);
            llsModelOne.setLongData({llsAdr: value});
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
                id: 'listBaudRate_one',
                select: true
            }
        }
        this.popBaudRate = this.ui(popupBaudRate);
        this.$$('buttonBaudRate').attachEvent("onItemClick", (id, e) => {
            console.log('click');
            this.popBaudRate.show($$(id).getNode());
        });
        $$("listBaudRate_one").attachEvent("onItemClick", (id, name, e) => {
            console.log("click");
            let obj = $$("listBaudRate_one").getItem(id);
            console.log(obj);
            llsModelOne.newLongData.baudRate232 = obj.value;
            llsModelOne.newLongData.baudRate485 = obj.value;
            globalVariable.autoSaveMode.then(flag => flag ? llsModelOne.setLongData({baudRate232: obj.value, baudRate485: obj.value}) : '');
            this.setBaudRateValue();
            // llsModel.setLongData({baudRate232: obj.value, baudRate485: obj.value});
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
                    {id: "0", location: _("automatic_data_output_turned_off"), name: "1", value: 0},
                    {id: "1", location: _("automatic_data_output_binary"), name: "2", value: 1},
                    {id: "2", location: _("automatic_data_output_symbolic"), name: "3", value: 2},
                ],
                template: "#name# - #location#",
                autoheight: true,
                id: 'listAutoGetData_one',
                select: true
            }
        }
        this.popAutoGetData = this.ui(popupAutoGetData);
        this.$$('buttonAutoGetData').attachEvent("onItemClick", (id, e) => {
            console.log('click');
            this.popAutoGetData.show($$(id).getNode());
        });
        $$("listAutoGetData_one").attachEvent("onItemClick", (id, name, e) => {
            console.log("click");
            let obj = $$("listAutoGetData_one").getItem(id);
            console.log(obj);
            llsModelOne.newLongData.autoGetData = obj.value;

            globalVariable.autoSaveMode.then(flag => flag ? llsModelOne.setLongData({autoGetData: obj.value}) : '');
            this.setAutoGetDataValue();
        });

        // minLevel
        this.$$('textMinLevel').attachEvent("onChange", (newValue, oldValue, config) => {
            console.log("change");
            if (config != undefined) {
                console.log(newValue);
                if (newValue >= 0 && newValue <= 1024) {
                    llsModelOne.newLongData.minLevel = newValue;
                    globalVariable.autoSaveMode.then(flag => flag ? llsModelOne.setLongData({minLevel: llsModelOne.newLongData.minLevel}) : '');
                    this.setTextValue("textMinLevel", 'minLevel', "statusMinLevel");
                } else {
                    this.$$('textMinLevel').setValue(oldValue);
                }
            }
        })
        this.$$('buttonMinLevel').attachEvent("onItemClick", (id, e) => {
            let test = this.$$('textMinLevel').getValue();
            let value = Number(test);
            llsModelOne.setLongData({minLevel: value});
        });

        // maxLevel
        this.$$('textMaxLevel').attachEvent("onChange", (newValue, oldValue, config) => {
            console.log("change");
            if (config != undefined) {
                console.log(newValue);
                if (newValue >= 1024 && newValue <= 4095) {
                    llsModelOne.newLongData.maxLevel = newValue;
                    globalVariable.autoSaveMode.then(flag => flag ? llsModelOne.setLongData({maxLevel: llsModelOne.newLongData.maxLevel}) : '');
                    this.setTextValue("textMaxLevel", 'maxLevel', "statusMaxLevel");
                } else {
                    this.$$('textMaxLevel').setValue(oldValue);
                }
            }
        })
        this.$$('buttonMaxLevel').attachEvent("onItemClick", (id, e) => {
            let test = this.$$('textMaxLevel').getValue();
            let value = Number(test);
            llsModelOne.setLongData({maxLevel: value});
        });

        this.$$('counterCounterPeriod_one').attachEvent("onChange", (newValue, oldValue, config) => {
            let value = Number(newValue);
            if (config != undefined) {
                if (value >= 5 && value <= 254) {
                    llsModelOne.newLongData.periodOfDataIssuance = value;

                    this.$$("counterCounterPeriod_one").setValue(value);
                    llsModelOne.setLongData({periodOfDataIssuance: value});
                } else {
                    this.$$("counterCounterPeriod_one").setValue(oldValue);
                }
            }
        });

        // outputParametersOfSensor
        this.$$('outputParametersOfSensor_one').attachEvent("onChange", (newValue, oldValue, config) => {
            console.log("change");
            if (config != undefined) {
                console.log(newValue);
                let value = Number(newValue);
                llsModelOne.newLongData.outputParametersOfSensor = value;
                llsModelOne.setLongData({outputParametersOfSensor: value});
            }
        });

        // fuelType
        this.$$('switch_temp_compensation_one').attachEvent("onChange", (newValue, oldValue, config) => {
            console.log("change");
            if (config != undefined) {
                console.log(newValue);
                if (newValue) {
                    // llsModel.setLongData({thermalCompensationType: 0x05}); //DT winter
                    this.$$("fuelTypeSwitch").show();
                } else {
                    // llsModel.setLongData({thermalCompensationType: 0x00});
                    llsModelOne.newLongData.thermalCompensationType = 0x00;
                    // globalVariable.autoSaveMode.then(flag => flag ? llsModel.setLongData({thermalCompensationType: obj.value}) : '');
                    llsModelOne.setLongData({thermalCompensationType: 0x00});
                    this.setThermalCompensationValue();
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
                    {id: "0", location: _("fuel_type_turned_off"), name: "1", value: 0},
                    {id: "1", location: _("fuel_type_1"), name: "2", value: 1},
                    {id: "2", location: _("fuel_type_2"), name: "3", value: 2},
                    {id: "3", location: _("fuel_type_3"), name: "4", value: 3},
                    {id: "4", location: _("fuel_type_4"), name: "5", value: 4},
                    {id: "5", location: _("fuel_type_5"), name: "6", value: 5},
                    {id: "6", location: _("fuel_type_6"), name: "7", value: 6},
                    {id: "7", location: _("fuel_type_7"), name: "8", value: 7},
                ],
                template: "#name# - #location#",
                autoheight: true,
                id: 'listFuelType_one',
                select: true
            }
        }
        this.popFuelType = this.ui(popupFuelType);
        this.$$('buttonFuelType').attachEvent("onItemClick", (id, e) => {
            console.log('click');
            this.popFuelType.show($$(id).getNode());
        });
        $$("listFuelType_one").attachEvent("onItemClick", (id, name, e) => {
            console.log("click");
            let obj = $$("listFuelType_one").getItem(id);
            console.log(obj);
            llsModelOne.newLongData.thermalCompensationType = obj.value;
            globalVariable.autoSaveMode.then(flag => flag ? llsModelOne.setLongData({thermalCompensationType: obj.value}) : '');
            this.setThermalCompensationValue();
        });

        // coefficientK1
        this.$$('textCoefficientK1').attachEvent("onChange", (newValue, oldValue, config) => {
            console.log("change");
            if (config != undefined) {
                console.log(newValue);
                newValue = Number(newValue).toFixed(6);
                if (newValue >= -1 && newValue < 1) {
                    llsModelOne.newLongData.coefficientK1 = newValue;
                    globalVariable.autoSaveMode.then(flag => flag ? llsModelOne.setLongData({coefficientK1: llsModelOne.newLongData.coefficientK1}) : '');
                    this.setFloatValue("textCoefficientK1", 'coefficientK1', "statusCoefficientK1");
                } else {
                    this.$$('textCoefficientK1').setValue(oldValue);
                }
            }
        })
        this.$$('buttonCoefficientK1').attachEvent("onItemClick", (id, e) => {
            let test = parseFloat(this.$$('textCoefficientK1').getValue());
            llsModelOne.setLongData({coefficientK1: test});
        });

        // coefficientK2
        this.$$('textCoefficientK2').attachEvent("onChange", (newValue, oldValue, config) => {
            console.log("change");
            if (config != undefined) {
                console.log(newValue);
                newValue = Number(newValue).toFixed(6);
                if (newValue >= -1 && newValue < 1) {
                    llsModelOne.newLongData.coefficientK2 = newValue;
                    globalVariable.autoSaveMode.then(flag => flag ? llsModelOne.setLongData({coefficientK2: llsModelOne.newLongData.coefficientK2}) : '');
                    this.setFloatValue("textCoefficientK2", 'coefficientK2', "statusCoefficientK2");
                } else {
                    this.$$('textCoefficientK2').setValue(oldValue);
                }
            }
        })
        this.$$('buttonCoefficientK2').attachEvent("onItemClick", (id, e) => {
            let test = parseFloat(this.$$('textCoefficientK2').getValue());
            llsModelOne.setLongData({coefficientK2: test});
        });


        if (configFile.theme == 'light') {
            webix.html.addCss($$("rows_number_2").getNode(), "window_type_2");
            webix.html.addCss($$("central_menu_button_1").getNode(), "style_general_rows");
            webix.html.addCss($$("window_type_1_one").getNode(), "window_type_1");
            webix.html.addCss($$("rows_number_4").getNode(), "window_type_2");
            webix.html.addCss(this.$$("textMinLevel").getNode(), "window_type_2");
            webix.html.addCss(this.$$("textMaxLevel").getNode(), "window_type_2");
            webix.html.addCss(this.$$("rows_number_5").getNode(), "window_type_2");
            webix.html.addCss(this.$$("counterPeriod").getNode(), "window_type_3");
            webix.html.addCss(this.$$("counterCounterPeriod_one").getNode(), "window_type_3");
            webix.html.addCss(this.$$("textBaudRate").getNode(), "window_type_2");
            webix.html.addCss(this.$$("rows_number_3").getNode(), "window_type_2");
            webix.html.addCss(this.$$("textAutoGetData").getNode(), "window_type_2");
            webix.html.addCss(this.$$("rows_number_7").getNode(), "window_type_2");
            webix.html.addCss(this.$$("outputParametersOfSensor_one").getNode(), "window_type_2");
            webix.html.addCss(this.$$("rows_number_6_one").getNode(), "window_type_2");
            webix.html.addCss(this.$$("window_type_2_6").getNode(), "window_type_2");
            webix.html.addCss(this.$$("window_type_4_4").getNode(), "window_type_2");
            webix.html.addCss(this.$$("rows_number_10").getNode(), "window_type_2");
            webix.html.addCss(this.$$("textCoefficientK2").getNode(), "window_type_2");
            webix.html.addCss(this.$$("rows_rows_9").getNode(), "window_type_2");
            webix.html.addCss(this.$$("textCoefficientK1").getNode(), "window_type_2");
            webix.html.addCss(this.$$("rows_number_8").getNode(), "window_type_2");
            webix.html.addCss(this.$$("textFuelType").getNode(), "window_type_2");
            webix.html.addCss(this.$$("buttonAutoGetData").getNode(), "auto_calibration");
            webix.html.addCss(this.$$("buttonBaudRate").getNode(), "auto_calibration");
            webix.html.addCss(this.$$("buttonLlsAdr").getNode(), "auto_calibration");
            webix.html.addCss(this.$$("buttonMinLevel").getNode(), "auto_calibration");
            webix.html.addCss(this.$$("buttonMaxLevel").getNode(), "auto_calibration");
            webix.html.addCss(this.$$("buttonCoefficientK2").getNode(), "auto_calibration");
            webix.html.addCss(this.$$("buttonCoefficientK1").getNode(), "auto_calibration");
            webix.html.addCss(this.$$("buttonFuelType").getNode(), "auto_calibration");
            webix.html.addCss(this.$$("outputParametersOfSensor_one").getNode(), "window_type_2");
        }

        if (configFile.theme == 'dark') {
            webix.html.addCss($$("rows_number_2").getNode(), "window_type_2_dark");
            webix.html.addCss($$("central_menu_button_1").getNode(), "style_general_rows_dark");
            webix.html.addCss($$("window_type_1_one").getNode(), "window_type_1_dark");
            webix.html.addCss($$("rows_number_4").getNode(), "window_type_2_dark");
            webix.html.addCss(this.$$("textMinLevel").getNode(), "window_type_2_dark");
            webix.html.addCss(this.$$("textMaxLevel").getNode(), "window_type_2_dark");
            webix.html.addCss(this.$$("rows_number_5").getNode(), "window_type_2_dark");
            webix.html.addCss(this.$$("counterPeriod").getNode(), "window_type_3_dark");
            webix.html.addCss(this.$$("counterCounterPeriod_one").getNode(), "window_type_3_dark");
            webix.html.addCss(this.$$("textBaudRate").getNode(), "window_type_2_dark");
            webix.html.addCss(this.$$("rows_number_3").getNode(), "window_type_2_dark");
            webix.html.addCss(this.$$("textAutoGetData").getNode(), "window_type_2_dark");
            webix.html.addCss(this.$$("rows_number_7").getNode(), "window_type_2_dark");
            webix.html.addCss(this.$$("outputParametersOfSensor_one").getNode(), "window_type_2_dark");
            webix.html.addCss(this.$$("rows_number_6_one").getNode(), "window_type_2_dark");
            webix.html.addCss(this.$$("window_type_2_6").getNode(), "window_type_2_dark");
            webix.html.addCss(this.$$("window_type_4_4").getNode(), "window_type_2_dark");
            webix.html.addCss(this.$$("rows_number_10").getNode(), "window_type_2_dark");
            webix.html.addCss(this.$$("textCoefficientK2").getNode(), "window_type_2_dark");
            webix.html.addCss(this.$$("rows_rows_9").getNode(), "window_type_2_dark");
            webix.html.addCss(this.$$("textCoefficientK1").getNode(), "window_type_2_dark");
            webix.html.addCss(this.$$("rows_number_8").getNode(), "window_type_2_dark");
            webix.html.addCss(this.$$("textFuelType").getNode(), "window_type_2_dark");
            webix.html.addCss(this.$$("buttonAutoGetData").getNode(), "auto_calibration_dark");
            webix.html.addCss(this.$$("buttonBaudRate").getNode(), "auto_calibration_dark");
            webix.html.addCss(this.$$("buttonLlsAdr").getNode(), "auto_calibration_dark");
            webix.html.addCss(this.$$("buttonMinLevel").getNode(), "auto_calibration_dark");
            webix.html.addCss(this.$$("buttonMaxLevel").getNode(), "auto_calibration_dark");
            webix.html.addCss(this.$$("buttonCoefficientK2").getNode(), "auto_calibration_dark");
            webix.html.addCss(this.$$("buttonCoefficientK1").getNode(), "auto_calibration_dark");
            webix.html.addCss(this.$$("buttonFuelType").getNode(), "auto_calibration_dark");
            webix.html.addCss(this.$$("outputParametersOfSensor_one").getNode(), "window_type_2_dark");
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
        const _ = this.app.getService("locale")._;

        switch (number) {
            case 0: {
                this.$$("textAutoGetData").setValue(_("automatic_data_output_turned_off"));
                this.$$("counterPeriod").hide();
                break;
            }
            case 1: {
                this.$$("textAutoGetData").setValue(_("automatic_data_output_binary"));
                this.$$("counterPeriod").show();
                break;
            }
            case 2: {
                this.$$("textAutoGetData").setValue(_("automatic_data_output_symbolic"));
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
        const _ = this.app.getService("locale")._;

        switch (value) {
            case 0x00: {
                $$('switch_temp_compensation_one').setValue(false);
                this.$$("fuelTypeSwitch").hide();

                this.$$("coefficientK1").hide();
                this.$$("coefficientK2").hide();
                break;
            }
            case 0x07: {
                $$('outputParametersOfSensor_one').setValue(true);
                this.$$("fuelTypeSwitch").show();

                this.$$("coefficientK1").show();
                this.$$("coefficientK2").show();
                break;
            }
            default: {
                $$('switch_temp_compensation_one').setValue(true);
                this.$$("fuelTypeSwitch").show();

                this.$$("coefficientK1").hide();
                this.$$("coefficientK2").hide();
                break;
            }
        }
    }

    setTypeFuel(number) {
        const _ = this.app.getService("locale")._;

        switch (number) {
            case 0: {
                this.$$("textFuelType").setValue(_("fuel_type_turned_off"));
                break;
            }
            case 1: {
                this.$$("textFuelType").setValue(_("fuel_type_1"));
                break;
            }
            case 2: {
                this.$$("textFuelType").setValue(_("fuel_type_2"));
                break;
            }
            case 3: {
                this.$$("textFuelType").setValue(_("fuel_type_3"));
                break;
            }
            case 4: {
                this.$$("textFuelType").setValue(_("fuel_type_4"));
                break;
            }
            case 5: {
                this.$$("textFuelType").setValue(_("fuel_type_5"));
                break;
            }
            case 6: {
                this.$$("textFuelType").setValue(_("fuel_type_6"));
                break;
            }
            case 7: {
                this.$$("textFuelType").setValue(_("fuel_type_7"));
                break;
            }
            default: {
                this.$$("textFuelType").setValue(_("fuel_type_turned_off"));
                break;
            }
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

    /* setters Values */
    setTextValue(id, name, statusId) {
        if (llsModelOne.currentLongData[name] == llsModelOne.newLongData[name]) {
            this.$$(id).setValue(llsModelOne.currentLongData[name]);
            this.setStatusNewValue(statusId, false);
        } else {
            this.$$(id).setValue(llsModelOne.newLongData[name]);
            this.setStatusNewValue(statusId, true);
        }
    }

    setThermalCompensationValue() {
        if (llsModelOne.currentLongData.thermalCompensationType == llsModelOne.newLongData.thermalCompensationType) {
            this.setTypeFuel(llsModelOne.currentLongData.thermalCompensationType);
            this.setThermalCompensation(llsModelOne.currentLongData.thermalCompensationType);
            this.setStatusNewValue("statusFuelType", false);
        } else {
            this.setTypeFuel(llsModelOne.newLongData.thermalCompensationType);
            this.setThermalCompensation(llsModelOne.newLongData.thermalCompensationType);
            this.setStatusNewValue("statusFuelType", true);
        }
    }

    setAutoGetDataValue() {
        if (llsModelOne.currentLongData.autoGetData == llsModelOne.newLongData.autoGetData) {
            this.setAutoGetData(llsModelOne.currentLongData.autoGetData);
            this.setStatusNewValue("statusAutoGetData", false);
        } else {
            this.setAutoGetData(llsModelOne.newLongData.autoGetData);
            this.setStatusNewValue("statusAutoGetData", true);
        }
    }

    setBaudRateValue() {
        if (llsModelOne.currentLongData.baudRate232 == llsModelOne.newLongData.baudRate232) {
            this.setBaudRate(llsModelOne.currentLongData.baudRate232);
            this.setStatusNewValue("statusBaudRate", false);
        } else {
            this.setBaudRate(llsModelOne.newLongData.baudRate232);
            this.setStatusNewValue("statusBaudRate", true);
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


}

function sn2ascii(decArray) {
    let newDecArray = [];
    for (let i = 0; i < 8; i++) {
        newDecArray.push(decArray[i]);
    }
    let strAscii = String.fromCharCode(...newDecArray);
    // let num = Number(strAscii);
    let num = parseInt(strAscii);
    if(!num){
        // strAscii = "NA";
        return "NA";
    }

    return num.toString();
}
