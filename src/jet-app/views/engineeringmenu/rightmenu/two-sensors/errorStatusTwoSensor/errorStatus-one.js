import {JetView} from "webix-jet";
import {
    ERROR_FULL_EMPTY,
    ERROR_SHORT_CIRCUIT,
    ERROR_SIZE_TABLE, ERROR_UNDEFINED,
    ERROR_VALUE_TABLE,
    NO_ERROR
} from "../../../../../error-codes";
import {llsModelOne} from "../../../../../models/lls-test-models";
import configFile from "../../../../../config-app";

export default class ErrorStatusOne extends JetView {
    errorCollections = new Array();

    config() {

        const _ = this.app.getService("locale")._;

        let errorStatus = {
            rows: [
                {
                    cols: [
                        {},
                        {
                            view: "label",
                            label: `<p>${_("errorStatus_text")}</p>`,
                            height: 60,
                            css: "right_menu_fuel_level",
                            id: "errorStatus_text"

                            // ${_("automatic_calibration")}
                        },
                        {}
                    ]
                },
                {
                    cols: [
                        // {
                        //
                        // },
                        {
                            view: "text",
                            // width: 570,
                            height: 70,
                            css: "full_window_text_error_windows",
                            readonly: true,
                            inputAlign: "center",
                            value: "Ошибок нет",
                            localId: "window_status_error"
                        },
                        // {
                        //
                        // },
                    ]
                }
            ]
        }
        return errorStatus;
    }

    listenerLongData = (longData) => {
        // if (longData.emptyTank > longData.fullTank) {
        //     this.addError(ERROR_FULL_EMPTY);
        // } else {
        //     this.deleteError(ERROR_FULL_EMPTY);
        // }
        if(longData.typeLls === 0x01){
            if (longData.emptyTank > longData.fullTank) {
                this.addError(ERROR_FULL_EMPTY);
            } else {
                this.deleteError(ERROR_FULL_EMPTY);
            }
        }else if(longData.typeLls >= 0x02){
            if (longData.emptyTank < longData.fullTank) {
                this.addError(ERROR_FULL_EMPTY);
            } else {
                this.deleteError(ERROR_FULL_EMPTY);
            }
        }
    }

    listenerShortData = (shortData) => {
        // console.log(shortData);
        // if (shortData.level == 65531 || shortData.level == 65532) {
        //     this.addError(ERROR_SHORT_CIRCUIT);
        // } else {
        //     this.deleteError(ERROR_SHORT_CIRCUIT);
        // }

        // if (shortData.level == 65533) {
        //     this.addError(ERROR_SIZE_TABLE);
        // } else {
        //     this.deleteError(ERROR_SIZE_TABLE);
        // }

        // if (shortData.level > 4095 && shortData.level < 65535) {
        //     this.addError(ERROR_UNDEFINED);
        // } else {
        //     this.deleteError(ERROR_UNDEFINED);
        // }

        if ((shortData.level == 65532 || shortData.level == 65531) && !this.errorCollections.includes(ERROR_FULL_EMPTY)) { //&& !this.errorCollections.includes(ERROR_FULL_EMPTY) --> Это наша заплатка на случай двойной ошибки
            this.addError(ERROR_SHORT_CIRCUIT);
        } else {
            this.deleteError(ERROR_SHORT_CIRCUIT);
        }

        if ((shortData.frequency <= 30)) { //&& !this.errorCollections.includes(ERROR_FULL_EMPTY) --> Это наша заплатка на случай двойной ошибки
            this.addError(ERROR_SHORT_CIRCUIT);
        } else {
            this.deleteError(ERROR_SHORT_CIRCUIT);
        }

        this.setErrors(); // Выполняю здесь, так этот колбэк происходит раз в 1 сек
    }

    listenerTable = (table) => {
        console.log(table);
        if(table.countPoint >= 1)
            for (let i = 0; i < (table.countPoint - 1); i++) {
                if ((table.volumes[i] >= table.volumes[i + 1]) || table.levels[i] >= table.levels[i + 1]) {
                    this.addError(ERROR_VALUE_TABLE);
                    break;
                }else{
                    this.deleteError(ERROR_VALUE_TABLE);
                }
            }

        if(table.countPoint >0 && table.countPoint <=2){
            this.addError(ERROR_SIZE_TABLE);
        }else{
            this.deleteError(ERROR_SIZE_TABLE);
        }
    }

    destroy() {
        super.destroy();
        llsModelOne.clearListenerLongData(this.listenerLongData);
        llsModelOne.clearListenerShortData(this.listenerShortData);
        llsModelOne.clearListenerTable(this.listenerTable);
    }

    init() {
        llsModelOne.addListenerLongData(this.listenerLongData);
        llsModelOne.addListenerShortData(this.listenerShortData);
        llsModelOne.addListenerTable(this.listenerTable);

        this.setErrorStatus(NO_ERROR);

        if (configFile.theme == 'light') {
            webix.html.addCss(this.$$("window_status_error").getNode(), "full_window_text_error_windows");
        }
        if (configFile.theme == 'dark') {
            webix.html.addCss(this.$$("window_status_error").getNode(), "full_window_text_error_windows_dark");
        }
    }

    setErrors() {
        console.log(this.errorCollections);
        if (this.errorCollections.length === 0) {
            this.setErrorStatus(NO_ERROR);
        } else {
            this.errorCollections.forEach((item) => {
                this.setErrorStatus(item);
            });
        }
    }

    setErrorStatus(code) {
        const _ = this.app.getService("locale")._;
        switch (code) {
            case NO_ERROR: {
                this.$$("window_status_error").setValue(_("no_error"));
                break;
            }
            case ERROR_FULL_EMPTY: {
                this.$$("window_status_error").setValue(_("error_full_empty"));
                break;
            }
            case ERROR_SHORT_CIRCUIT: {
                this.$$("window_status_error").setValue(_("error_short_circuit"));
                break;
            }
            case ERROR_SIZE_TABLE: {
                this.$$("window_status_error").setValue(_("error_size_table"));
                break;
            }
            case ERROR_VALUE_TABLE: {
                this.$$("window_status_error").setValue(_("error_value_table"));
                break;
            }
            case ERROR_UNDEFINED:{
                this.$$("window_status_error").setValue(_("error_undefined"));
                break;
            }
            default: {
                break;
            }
        }
        this.$$("window_status_error").refresh();
    }

    addError(code) {
        if (!this.errorCollections.includes(code)) {
            this.errorCollections.push(code);
        }
    }

    deleteError(code) {
        let index = this.errorCollections.indexOf(code);
        if (index != -1) {
            this.errorCollections.splice(index, 1);
        }
    }
};





