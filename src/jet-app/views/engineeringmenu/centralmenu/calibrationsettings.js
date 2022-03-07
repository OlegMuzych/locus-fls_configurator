import {JetView} from "webix-jet";
import llsModel from "../../../models/lls-model";

export default class Calibrationsettings extends JetView {
    config() {

        let calibration = {
            minWidth: 600,
            maxWidth: 850,
            id: "central_menu_button_2",
            cols: [
                {
                    width: 20,
                },
                {
                    rows: [
                        {
                            rows: [
                                {
                                    view: "multitext",
                                    inputWidth: 200,
                                    value: "Susan Way, Dirk Gently, Clark Kent",
                                    // tooltip: function (obj) {
                                    //     return "Guests: " + $$(obj.id).getValueHere();
                                    // }
                                }
                            ]
                        }
                    ]
                }
            ]
        };

        return calibration;
    }
    listenerTable(table){

    }

    destroy() {
        super.destroy();
        llsModel.clearListenerTable(this.listenerTable);
    }

    init(){
        llsModel.addListenerTable(this.listenerTable);

        llsModel.getTable().then();
    }
}


