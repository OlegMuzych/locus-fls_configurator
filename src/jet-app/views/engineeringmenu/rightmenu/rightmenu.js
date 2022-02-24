import {JetView} from "webix-jet";
import StatusMenu from "./statusmenu";
import ServiceMenu from "./servicemenu";
import CalibrationSubView from "./subviews/calibrationsubview";
import FullEmptySubView from "./subviews/fullemptysubview";

export default class RightMenu extends JetView{
    config(){
        let myMultiview = {
            view: "multiview",
            cells: [
                {
                    id: 'calibrationSubView', rows: [CalibrationSubView],
                },
                {
                    id: 'fullEmptySubView', rows: [FullEmptySubView],
                },
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
    init(){
        this.on(this.app, "app:setting:general", ()=>{
                console.log('Click');
                $$('fullEmptySubView').show();
            }
        );

        this.on(this.app, "app:setting:filtering", ()=>{
                $$('fullEmptySubView').show();
            }
        );

        this.on(this.app, "app:setting:calibration", ()=>{
                $$('calibrationSubView').show();
            }
        );

        $$('fullEmptySubView').show();
    }
}
