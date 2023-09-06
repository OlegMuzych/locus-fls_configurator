import {JetView} from "webix-jet";
// import llsModel from "../../../models/lls-model";

export default class TablePreviewWindow extends JetView {
    llsModel = null;
    config() {
        const _ = this.app.getService("locale")._;

        let table = {
            view: "scrollview",
            scroll: "y",
            minWidth: 600,
            maxWidth: 850,
            css: "calib_rows",
            localId: "calib_rows",
            body: {
                cols: [
                    {
                        maxWidth: 10,
                    },
                    {
                        gravity: 2,
                        rows: [
                            {
                                view: 'label',
                                label: `<p>${_("column_steps_header")}</p>`,
                                css: "rowNumber_style_1",
                                align: 'center',
                                localId: "top_text_1",
                                height: 70,
                            },
                            {localId: 'rowNumber', css: "rowNumber_style_1", rows: []}
                        ]
                    },
                    {
                        gravity: 3,
                        rows: [
                            {
                                view: 'label',
                                label: `<p>${_("column_level_header")}</p>`,
                                align: 'center',
                                css: "rowNumber_style_1",
                                localId: "top_text_2",
                                height: 70,
                            },
                            {localId: 'rowLevel', css: "rowNumber_style", rows: []}
                        ]
                    },
                    {
                        gravity: 3,
                        rows: [
                            {
                                view: 'label',
                                label: `<p>${_("column_volume_header")}</p>`,
                                align: 'center',
                                css: "rowNumber_style_1",
                                localId: "top_text_3",
                                height: 70,
                            },
                            {localId: 'rowVolume', css: "rowNumber_style", rows: []}
                        ]
                    },
                    {}
                ],
            }
        }

        let elements = {
            rows: [
                table,
                {
                    cols: [
                        {},
                        {
                            view: "button",
                            label: _("button_ok"),
                            localId: "buttonOk",
                            css: "set_password_button"
                        },
                        {},
                        {
                            view: "button",
                            label: _("button_cancel"),
                            localId: "buttonCancel",
                            css: "set_password_button"
                        },
                        {}
                    ]
                },
            ]
        };

        let form = {
            view: "form",
            scroll: false,
            height: 800,
            elements: [elements],
        };


        let body = {
            view: "window",
            position: "center",
            width: 600,
            height: 800,
            id: "window_show_3",
            modal: true,
            css: "window_show_password",
            head: form,
        }

        return body;

    }

    init() {
        this.$$('buttonCancel').attachEvent("onItemClick", (id, e) => {
            console.log('click');
            this.getRoot().hide();
        });

        this.$$('buttonOk').attachEvent("onItemClick", (id, e) => {
            console.log('click');
            this.saveTable()
            this.getRoot().hide();
        });
    }

    showWindow(table, llsModel) {
        this.llsModel = llsModel;
        this.getRoot().show();
        if (table) {
            this.removeAll();
            this.createTable(table.countPoint, table.levels, table.volumes);
        }
    }

    #number = [];
    #level = [];
    #volume = [];

    addNumber(value, number = null) {
        if (this.#number.length < 30) {
            let id = this.$$('rowNumber').addView({
                view: 'label',
                align: 'center',
                label: value,
                // css: "rowNumber_style_1",

            });
            this.addChangeEvent(id);
            this.#number.push(id);
        }
    }

    addLevel(value, number = null) {
        if (this.#level.length < 30) {
            let id = this.$$('rowLevel').addView({
                view: 'text',
                align: 'center',
                value: value,
            });
            this.addChangeEvent(id);
            this.#level.push(id);
        }
    }

    addVolume(value, number = null) {
        if (this.#volume.length < 30) {
            let id = this.$$('rowVolume').addView({
                view: 'text',
                align: 'center',
                value: value,
            });
            this.addChangeEvent(id);
            this.#volume.push(id);
        }
    }

    removeNumber(id = null) {
        if (id == null) {
            id = this.#number.pop();
        }
        this.$$('rowNumber').removeView(id);
    }

    removeLevel(id = null) {
        if (id == null) {
            id = this.#level.pop();
        }
        this.$$('rowLevel').removeView(id);
    }

    removeVolume(id = null) {
        if (id == null) {
            id = this.#volume.pop();
        }
        this.$$('rowVolume').removeView(id);
    }

    addRow(number, level, volume) {
        this.addNumber(number);
        this.addLevel(level);
        this.addVolume(volume);

    }

    addStep(level, volume) {
        if (this.#level.length < this.#number.length) {
            this.addLevel(level);
            this.addVolume(volume);
        } else {
            let number = this.#number.length + 1;
            this.addRow(number, level, volume);
        }
    }

    removeRow() {
        this.removeNumber();
        this.removeLevel();
        this.removeVolume();
    }

    removeAll() {
        this.$$('rowNumber').reconstruct();
        this.$$('rowLevel').reconstruct();
        this.$$('rowVolume').reconstruct();
        this.#number = [];
        this.#level = [];
        this.#volume = [];
    }

    removeStep() {
        if (this.#level.length < this.#number.length) {
            this.removeLevel();
            this.removeVolume();
        } else {
            this.removeRow();
        }
    }

    createTable(countStep, levels, volumes) {
        for (let i = 0; i < countStep; i++) {
            this.addRow(i + 1, levels[i], volumes[i]);
        }
    }

    parseTable() {
        let levels = this.initArray(30);
        let volumes = this.initArray(30);
        let countPoint = this.#number.length;

        this.#level.forEach((value, index, array) => {
            value = Number($$(value).getValue());
            levels.splice(index, 1, value);
        });

        this.#volume.forEach((value, index, array) => {
            value = Number($$(value).getValue());
            volumes.splice(index, 1, value);
        });

        return {
            levels: levels,
            volumes: volumes,
            countPoint: countPoint
        }
    }

    initArray(count) {
        let arr = new Array(count);
        for (let i = 0; i < arr.length; i++) {
            arr[i] = 0;
        }
        return arr;
    }

    addChangeEvent(id) {
        this.$$(id).attachEvent("onChange", (newValue, oldValue, config) => {
            console.log("change");
            if (config != undefined) {
                console.log(newValue);
                this.saveTable();
            }
        });
    }

    saveTable() {
        let table = this.parseTable();
        this.llsModel.setTable(table)
            .then(() => {
                return this.llsModel.getTable();
            })
            .then()
        console.log(table);
    }
}
