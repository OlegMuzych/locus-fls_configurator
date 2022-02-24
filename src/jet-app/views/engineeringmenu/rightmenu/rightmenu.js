import {JetView} from "webix-jet";
import CentralMenu from "../centralmenu/centralmenu";
import StatusMenu from "./statusmenu";
import ServiceMenu from "./servicemenu";
import CalibrationSettings from "../centralmenu/calibrationSettings";
import CalibrationSubView from "./subviews/calibrationsubview";

export default class RightMenu extends JetView{
    config(){
        let myMultiview = {
            view: "multiview",
            cells: [
                {
                    id: 'calibrationSubView', rows: [CalibrationSubView],
                },
                // {
                //     id: "fuelFill", rows: [CalibrationSettings],
                // },
            ],
            animate: false,
        }

        let body = {
            css: "rows_right",
            id: "rows_right_2",
            rows: [
                {
                    rows: [
                        ServiceMenu,
                    ]
                },
                {
                    height: 20,
                },
                {
                    rows: [
                        StatusMenu,
                    ]
                },
                {
                    height: 20,
                },
                {
                    rows: [
                        myMultiview,
                    ]
                },
                {
                    height: 1,
                },
                {
                    rows: [
                        //right_menu_filter
                    ]
                },
                {
                    rows: [
                        // right_menu_calibration,
                        // right_menu_calibration_setup,
                        // right_menu_calibration_drain_2,
                        // fuel_filling,
                        // fuel_filling_2,
                    ]
                }
            ]
        }


        return body;
    }
}
