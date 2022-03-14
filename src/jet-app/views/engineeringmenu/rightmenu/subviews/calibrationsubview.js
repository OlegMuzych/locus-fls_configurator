import {JetView} from "webix-jet";
import FuelFillView from "./calibarationsubview/fuelfill";
import FuelDrainView from "./calibarationsubview/fueldrain";

export default class CalibrationSubView extends JetView {
    config() {
        let tabBarCalibrate = {
            view: "tabbar",
            id: "tabbar",
            value: "fuelFill",
            css: "button_type_calibration_1",
            height: 70,
            multiview: true, options: [
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
        }

        let body = {
            rows: [
                tabBarCalibrate,
                myMultiview,
            ]
        };

        return body;
    }

    init() {

    }
}


