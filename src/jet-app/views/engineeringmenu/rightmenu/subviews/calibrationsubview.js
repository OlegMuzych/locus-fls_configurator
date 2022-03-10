import {JetView} from "webix-jet";

export default class CalibrationSubView extends JetView {
    config() {
        let passportVolume = {
            localId:'passportVolume',
            cols: [
                {},
                {
                    view: "label",
                    label: "<p style='font-size: 18px; color:#000; font-weight:100; position: relative; top:-20px;'>Паспортный объем бака, л</p>",
                    width: 190,
                    height: 50,
                },
                {},
                {view: "text", css: "full_window_text", width: 200, localId: "manual_volume_fuel_1"},
                {}
            ]
        };

        let startVolume = {
            localId: 'startVolume',
            cols: [
                {},
                {
                    view: "label",
                    label: "<p style='font-size: 18px; color:#000; font-weight:100; position: relative; top:-20px;'>Начальный объем, л</p>",
                    width: 190,
                    height: 50,
                },
                {},
                {view: "text", css: "full_window_text", width: 200, localId: "initial_volume_fuel_1"},
                {}
            ]
        };

        let stepVolume = {
            localId:'stepVolume',
            cols: [
                {},
                {
                    view: "label",
                    label: "<p style='font-size: 18px; color:#000; font-weight:100; position: relative; top:-20px;'>Шаг, л</p>",
                    width: 190,
                    height: 50,
                },
                {},
                {view: "text", css: "full_window_text", width: 200, localId: "step_liters_1"},
                {}
            ]
        };

        let countStep = {
            localId:'countStep',
            cols: [
                {},
                {
                    view: "label",
                    label: "<p style='font-size: 18px; color:#000; font-weight:100; position: relative; top:-20px;'>Количество шагов</p>",
                    width: 190,
                    height: 50,
                },
                {},
                {view: "text", width: 200, css: "full_window_text", readonly: true, localId: "counts_step"},
                {}
            ]
        };

        let buttonRemoveStep = {
            localId:'buttonRemoveStep',
            cols: [
                {},
                {
                    view: "button",
                    label: "Удалить шаг",
                    width: 480,
                    height: 50,
                    css: "set_step_drain_button_2",
                    id: "button_add_step_2"
                },
                {}

            ]
        };

        let buttonAddStep = {
            localId:'buttonAddStep',
            cols: [
                {},
                {
                    view: "button",
                    label: "Добавить шаг",
                    width: 480,
                    height: 50,
                    css: "set_step_drain_button_2",
                    id: "button_add_step_1"
                },
                {}

            ]
        };

        let buttonClearTable = {
            localId: 'buttonClearTable',
            cols: [
                {},
                {
                    view: "button",
                    label: "Очистить таблицу",
                    width: 480,
                    height: 50,
                    css: "clear_table_drain_button_2",
                    localId:'clearTable'
                },
                {}

            ]
        };

        let buttonStopCalibrate = {
            localId: 'buttonStopCalibrate',
            cols: [
                {},
                {
                    view: "button",
                    label: "Завершить тарировку",
                    width: 480,
                    height: 50,
                    id: "closed_calibration_button_window_2",
                    css: "button_next_drain_window_1_2"
                },
                {}
            ]
        };

        let buttonNext = {
            localId:'buttonNext',
            cols: [
                {},
                {
                    view: "button",
                    label: "Продолжить",
                    width: 480,
                    height: 50,
                    id: "central_menu_and_right_menu_calibration_next_window_button",
                    css: "button_next_drain_window_1_2"
                },
                {}
            ]
        };

        let right_menu_calibration = {
            id: "right_menu_calibration_button",
            cols: [
                {},
                {
                    view: "button",
                    width: 254,
                    height: 70,
                    label: "Слив",
                    css: "button_type_calibration_1",
                    localId: "buttonFuelDrain"
                },
                {
                    view: "button",
                    width: 254,
                    height: 70,
                    label: "Залив",
                    css: "button_type_calibration_2",
                    localId: "buttonFuelFill"
                },
                {}
            ]
        };

        let calibrationFuelFill = {
            id: "right_menu_calibration_setup",
            css: "rows_right_menu_calibration_2",
            height: 570,
            rows: [
                {
                    height: 50,
                },
                passportVolume,
                startVolume,
                stepVolume,
                {
                    height: 100,
                },
                buttonNext,
            ]
        };

        let calibrationFuelDrain = {
            id: "right_menu_calibration_drain_2",
            css: "rows_right_menu_calibration_2",
            height: 570,
            rows: [
                {
                    height: 50,
                },
                passportVolume,
                startVolume,
                stepVolume,
                {
                    height: 30,
                },
                buttonNext,
                countStep,
                {
                    height: 20,
                },
                buttonAddStep,
                {
                    height: 10,
                },
                buttonRemoveStep,
                {
                    height: 60,
                },
                buttonClearTable,
                {
                    height: 10,
                },
                buttonStopCalibrate,
            ]
        };

        let myMultiview = {
            view: "multiview",
            cells: [
                {
                    id: 'fuelDrain', rows: [calibrationFuelDrain],
                },
                {
                    id: "fuelFill", rows: [calibrationFuelFill],
                },
            ],
            animate: false,
        }

        let body = {
            rows: [
                right_menu_calibration,
                myMultiview,
            ]
        };

        return body;
    }

    init() {
        this.startShow();

        this.$$("buttonFuelDrain").attachEvent("onItemClick", (id, e) => {
            $$('fuelDrain').show();
        });

        this.$$("buttonFuelFill").attachEvent("onItemClick", (id, e) => {
            $$('fuelFill').show();
        });

        $$("central_menu_and_right_menu_calibration_next_window_button").attachEvent("onItemClick", (id, e) => {
            let countStep = this.calcCountStep(this.$$("manual_volume_fuel_1").getValue(), this.$$("step_liters_1").getValue());
            if(countStep > 0){
                this.$$('counts_step').setValue(countStep);
                this.app.callEvent("app:calibrationsubview:countStep", [countStep]);
                this.nextShow();
            }
        });

        $$("closed_calibration_button_window_2").attachEvent("onItemClick", (id, e) => {
            this.startShow();
        });

        this.$$("clearTable").attachEvent("onItemClick", (id, e) => {
            this.app.callEvent("app:calibrationsubview:clearTable", []);
        });

        this.$$("button_add_step_1").attachEvent("onItemClick", (id, e) => {
            this.app.callEvent("app:calibrationsubview:addStep", []);
        });

        this.$$("button_add_step_2").attachEvent("onItemClick", (id, e) => {
            this.app.callEvent("app:calibrationsubview:removeRow", []);
        });
    }

    startShow(){
        this.$$('passportVolume').show();
        this.$$('startVolume').show();
        this.$$('stepVolume').show();
        this.$$('countStep').hide();
        this.$$('buttonNext').show();
        this.$$('buttonAddStep').hide();
        this.$$('buttonRemoveStep').hide();
        this.$$('buttonClearTable').hide();
        this.$$('buttonStopCalibrate').hide();
    }

    nextShow(){
        this.$$('passportVolume').show();
        this.$$('startVolume').show();
        this.$$('stepVolume').show();
        this.$$('countStep').show();
        this.$$('buttonNext').hide();
        this.$$('buttonAddStep').show();
        this.$$('buttonRemoveStep').show();
        this.$$('buttonClearTable').show();
        this.$$('buttonStopCalibrate').show();
    }

    calcCountStep(volumeTank, volumeStep){
        let countStep = 0;
        volumeTank = Number(volumeTank);
        volumeStep = Number(volumeStep);
        if(volumeTank > 0 && volumeStep > 0){
            countStep = Math.floor(volumeTank/volumeStep);
        }
        return countStep;
    }
}


