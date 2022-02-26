import {JetView} from "webix-jet";
import llsModel from "../../../models/lls-model";

export default class GeneralSettings extends JetView {
    config() {
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
                            id:"test_button_1"
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
                    view: "text",
                    width: 850,
                    height: 100,
                    label: '<p>Скорость подключения</p>',
                    labelWidth: 400,
                    css: "window_type_2",
                    inputAlign: "center",
                    id: "window_type_2_4"
                },
                {
                    view: "text",
                    width: 850,
                    height: 100,
                    label: '<p>Скорость подключения</p>',
                    labelWidth: 400,
                    css: "window_type_2",
                    inputAlign: "center",
                    id: "window_type_2_4"
                },
                {height: 20},
                {
                    view: "text",
                    width: 850,
                    height: 100,
                    label: '<p>Автоматическая выдача данных</p>',
                    labelWidth: 400,
                    css: "window_type_2 ",
                    inputAlign: "center",
                    id: "window_type_2_5"
                },
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
                {
                },
            ]
        };
        return general_config;
    }

    listenerLongData = (longData) => {
        $$('window_type_1').setValue(longData.serialNumber.toString());
        $$('window_type_2_1').setValue(longData.llsAdr.toString());
        $$('window_type_2_2').setValue(longData.emptyTank.toString());
        $$('window_type_2_3').setValue(longData.fullTank.toString());
        $$('window_type_2_4').setValue(longData.baudRate232.toString());
        $$('window_type_2_5').setValue(longData.autoGetData.toString());
        $$("switch_temp_compensation").setValue(longData.te);
    }

    listenerConnect = ()=>{
        llsModel.getLongData();
    }

    listenerDisconnect = ()=>{
    }

    destroy() {
        super.destroy();
        llsModel.clearListenerIsConnect(this.listenerConnect);
        llsModel.clearListenerIsDisconnect(this.listenerDisconnect);
        llsModel.clearListenerLongData(this.listenerLongData);
    }


    init(){
        llsModel.addListenerIsConnect(this.listenerConnect);
        llsModel.addListenerLongData(this.listenerLongData);
    }
}
