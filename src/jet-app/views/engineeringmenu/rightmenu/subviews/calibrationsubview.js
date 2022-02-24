import {JetView} from "webix-jet";

export default class CalibrationSubView extends JetView {
    config() {
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
                {
                    cols: [
                        {},
                        {
                            view: "label",
                            label: "<p style='font-size: 18px; color:#000; font-weight:100; position: relative; top:-20px;'>Паспортный объем бака, л</p>",
                            width: 190,
                            height: 50,
                        },
                        {},
                        {view: "text", css: "full_window_text", width: 200, id: "manual_volume_fuel_1"},
                        {}
                    ]
                },
                {
                    cols: [
                        {},
                        {
                            view: "label",
                            label: "<p style='font-size: 18px; color:#000; font-weight:100; position: relative; top:-20px;'>Начальный объем, л</p>",
                            width: 190,
                            height: 50,
                        },
                        {},
                        {view: "text", css: "full_window_text", width: 200, id: "initial_volume_fuel_1"},
                        {}
                    ]

                },
                {
                    cols: [
                        {},
                        {
                            view: "label",
                            label: "<p style='font-size: 18px; color:#000; font-weight:100; position: relative; top:-20px;'>Шаг, л</p>",
                            width: 190,
                            height: 50,
                        },
                        {},
                        {view: "text", css: "full_window_text", width: 200, id: "step_liters_1"},
                        {}
                    ]
                },
                {
                    height: 100,
                },
                {
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
                }
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
                {
                    cols: [
                        {},
                        {
                            view: "label",
                            label: "<p style='font-size: 18px; color:#000; font-weight:100; position: relative; top:-20px;'>Паспортный объем бака, л</p>",
                            width: 190,
                            height: 50,
                        },
                        {},
                        {view: "text", width: 200, css: "full_window_text", readonly: true, id: "manual_volume_fuel_2"},
                        {}
                    ]
                },
                {
                    cols: [
                        {},
                        {
                            view: "label",
                            label: "<p style='font-size: 18px; color:#000; font-weight:100; position: relative; top:-20px;'>Начальный объем, л</p>",
                            width: 190,
                            height: 50,
                        },
                        {},
                        {
                            view: "text",
                            width: 200,
                            css: "full_window_text",
                            readonly: true,
                            id: "initial_volume_fuel_2"
                        },
                        {}
                    ]

                },
                {
                    cols: [
                        {},
                        {
                            view: "label",
                            label: "<p style='font-size: 18px; color:#000; font-weight:100; position: relative; top:-20px;'>Шаг, л</p>",
                            width: 190,
                            height: 50,
                        },
                        {},
                        {view: "text", width: 200, css: "full_window_text", readonly: true, id: "step_liters_2"},
                        {}
                    ]
                },
                {
                    height: 30,
                },
                {
                    cols: [
                        {},
                        {
                            view: "label",
                            label: "<p style='font-size: 18px; color:#000; font-weight:100; position: relative; top:-20px;'>Количество шагов</p>",
                            width: 190,
                            height: 50,
                        },
                        {},
                        {view: "text", width: 200, css: "full_window_text", readonly: true, id: "counts_step"},
                        {}
                    ]
                },
                {
                    height: 20,
                },
                {
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
                },
                {
                    height: 10,
                },
                {
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
                },
                {
                    height: 60,
                },
                {
                    cols: [
                        {},
                        {
                            view: "button",
                            label: "Очистить таблицу",
                            width: 480,
                            height: 50,
                            css: "clear_table_drain_button_2"
                        },
                        {}

                    ]
                },
                {
                    height: 10,
                },
                {
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
                }


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
            rows:[
                right_menu_calibration,
                myMultiview,
            ]
        };

        return body;
    }

    init() {
        this.$$("buttonFuelDrain").attachEvent("onItemClick", (id, e) => {
            $$('fuelDrain').show();
        });

        this.$$("buttonFuelFill").attachEvent("onItemClick", (id, e) => {
            $$('fuelFill').show();
        });
    }

}


