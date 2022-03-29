import {JetView} from "webix-jet";
import FuelFillView from "./calibrationsubview/fuelfill";
import FuelDrainView from "./calibrationsubview/fueldrain";

import configFile from "../../../../config-app";
import rwTable from "../../../../services/files/table/rw-table";

export default class CalibrationSubView extends JetView {
    config() {
        let tabBarCalibrate = {
            view: "tabbar",
            localId: "tabbar",
            value: "fuelFill",
            css: "button_type_calibration_1",
            height: 70,
            multiview: true,
            options: [
                {value: "Слив", id: "fuelDrain"},
                {value: "Залив", id: "fuelFill"},
            ]
        };

        let myMultiview = {
            view: "multiview",
            cells: [
                {
                    id: 'fuelDrain', rows: [FuelDrainView],
                },
                {
                    id: "fuelFill", rows: [FuelFillView],
                },

            ],
            animate: false,
        };


        let button_table = {
            css: "rows_right_menu_calibration_2",
            rows:[
                {

                },
                {
                    cols:[
                        {

                        },
                        {
                            view: "button",
                            type: "label",
                            label: "Экспортировать таблицу тарировки",
                            localId:"button_export",
                            width: 480,
                            height: 50,
                            css: "set_step_drain_button_2"
                        },
                        {

                        }
                    ]
                },
                {
                    height: 5,
                },
                {
                    cols:[
                        {

                        },
                        {
                            view: "button",
                            type: "label",
                            label:"Импортировать таблицу тарировки",
                            localId:"button_import",
                            width: 480,
                            height: 50,
                            css: "set_step_drain_button_2"
                        },

                        {

                        }
                    ]
                },
                {

                }
            ]
        };


        let body = {
            rows: [
                tabBarCalibrate,
                myMultiview,
                button_table
            ]
        };

        return body;
    }

    init() {
        this.on(this.app, "app:calibrationSettings:continueCalibrate", () => {
            this.$$('tabbar').setValue("fuelFill");
        });

        this.on(this.app, "app:calibrationSubview:startCalibrate", (type) => {
            if(type == 'fill'){
                this.$$('tabbar').disableOption('fuelDrain');
            }

            if(type == 'drain'){
                this.$$('tabbar').disableOption('fuelFill');
            }
        });

        this.on(this.app, "app:calibrationSubview:finishCalibrate", () => {
            this.$$('tabbar').enableOption('fuelFill');
            this.$$('tabbar').enableOption('fuelDrain');
        });

        this.$$('button_import').attachEvent("onItemClick", (id, e)=>{
            rwTable.read().then();
        //     const dialogConfig = {
        //         title: 'Выберите файл с таблицой',
        //         buttonLabel: 'Импортировать',
        //         properties: ['openFile'],
        //         filters: [
        //             { name: 'Файл таблицы', extensions: ['csv'] },
        //             { name: 'Все файлы', extensions: ['*'] }
        //         ]
        //     };
        //     window.electron.openDialog('showOpenDialog', dialogConfig).then((result) => console.log(result));
        });

        this.$$('button_export').attachEvent("onItemClick", (id, e)=>{
            rwTable.write().then();
        });

        if(configFile.theme.color == 'white'){
            webix.html.addCss( this.$$("tabbar").getNode(), "button_type_calibration_1");
        }
        if(configFile.theme.color == 'black'){
            webix.html.addCss( this.$$("tabbar").getNode(), "button_type_calibration_1_dark");
        }
    }
}



