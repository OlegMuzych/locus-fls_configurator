import {JetView} from "webix-jet";

export default class CalibrationSettings extends JetView {
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
                                    tooltip: function (obj) {
                                        return "Guests: " + $$(obj.id).getValueHere();
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        };

        return calibration;
    }
}


