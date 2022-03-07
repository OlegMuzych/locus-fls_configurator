import {JetView} from "webix-jet";
import llsModel from "../../../models/lls-model";

export default class GeneralSettings extends JetView {
    config() {
        let counterPeriod = {
            view: "counter",
            label: "Period, sec",
            localId: 'counterPeriod',
            step: 1,
            value: 5,
            min: 1,
            max: 255,
        }
        let general_config = {
            minWidth: 600,
            maxWidth: 850,
            // view:"scrollview",
            // scroll: "y",
            // maxHeight: 860,
            // body: {
            id: "central_menu_button_1",
            rows: [
                {
                    rows: [
                        {
                            view: 'button',
                            id: "test_button_1"
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
                    id: "window_type_2_2"
                },
                {
                    view: "text",
                    width: 850,
                    height: 100,
                    label: '<p>Максимальный уровень</p>',
                    labelWidth: 400,
                    css: "window_type_2",
                    inputAlign: "center",
                    id: "window_type_2_3"
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
                    width: 850,
                    height: 100,
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
                                {view: "switch", value: 0, id: "switch_temp_compensation", width: 68,},
                                {
                                    width: 100,
                                },
                                {view: "switch", value: 0, id: "temp_compensation_2", width: 68,}
                            ]
                        },
                    ]
                },
                {},
            ]
        };
        return general_config;
    }

    listenerLongData = (longData) => {
        $$('window_type_1').setValue(longData.serialNumber.toString());
        $$('window_type_2_1').setValue(longData.llsAdr.toString());
        $$('window_type_2_2').setValue(longData.emptyTank.toString());
        $$('window_type_2_3').setValue(longData.fullTank.toString());
        this.$$('outputParametersOfSensor').setValue(longData.outputParametersOfSensor);
        this.setBaudRate(longData.baudRate232.toString());
        this.setAutoGetData(longData.autoGetData.toString());
        this.$$('counterPeriod').setValue(longData.periodOfDataIssuance.toString());
        this.setThermalCompensation(longData.thermalCompensationType);
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
                    llsModel.setLongData({thermalCompensationType: 0x05}); //DT winter
                } else {
                    llsModel.setLongData({thermalCompensationType: 0x00});
                }
            }
        });
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
                break;
            }
            default: {
                $$('switch_temp_compensation').setValue(true);
                break;
            }
        }
    }

}
