import {JetView} from "webix-jet";
import llsModel from "../../../models/lls-model";
import configFile from "../../../config-app";
import fileTableModel from "../../../models/file-table-model";

export default class CalibrationSettings extends JetView {
    config() {
        const _ = this.app.getService("locale")._;

        let table = {
            view:"scrollview",
            scroll: "y",
            css:"calib_rows",
            id:"calib_rows",
            // minWidth: 900,
            // maxWidth: 1300,
            body: {
                cols: [
                    {

                    },
                    {

                        gravity: 2,
                        rows: [
                            {view: 'label', label: `<p>${_("column_steps_header")}</p>`, css: "rowNumber_style_1", align: 'center', id:"top_text_1", height: 70,},
                            {localId: 'rowNumber', css: "rowNumber_style_1", rows: []}
                        ]
                    },
                    {
                        gravity: 3,
                        rows: [
                            {view: 'label', label: `<p>${_("column_level_header")}</p>`, align: 'center', css: "rowNumber_style_1", id:"top_text_2", height: 70,},
                            {localId: 'rowLevel', css: "rowNumber_style", rows: []}
                        ]
                    },
                    {
                        gravity: 3,
                        rows: [
                            {view: 'label', label: `<p>${_("column_volume_header")}</p>`, align: 'center', css: "rowNumber_style_1", id:"top_text_3", height: 70,},
                            {localId: 'rowVolume', css: "rowNumber_style",  rows: []}
                        ]
                    },
                    {

                    }
                ],
            }
        }

        let body = {
            rows: [
                table
            ],
        };

        return body;
    }
    currentTable = {};
    listenerTable = (table) => {
        console.log(table);
        this.currentTable = table;
        this.removeAll();
        this.createTable(table.countPoint, table.levels, table.volumes);
        // this.checkContinueCalibrate();
    }

    listenerConnect = () => {
        llsModel.getTable().then();
    }

    listenerShortData = (shortData) => {
        this.currenLevel = shortData.level;
    }

    destroy() {
        super.destroy();
        llsModel.clearListenerTable(this.listenerTable);
        llsModel.clearListenerIsConnect(this.listenerConnect);
        llsModel.clearListenerShortData(this.listenerShortData);
    }

    init() {
        llsModel.addListenerTable(this.listenerTable);
        llsModel.addListenerIsConnect(this.listenerConnect);
        llsModel.addListenerShortData(this.listenerShortData);
        llsModel.getTable().then();



        if(configFile.theme == 'light'){
            webix.html.addCss(this.$$("rowNumber").getNode(), "rowNumber_style_1");
            webix.html.addCss(this.$$("top_text_1").getNode(), "rowNumber_style_1");
            webix.html.addCss(this.$$("top_text_2").getNode(), "rowNumber_style_1");
            webix.html.addCss(this.$$("top_text_3").getNode(), "rowNumber_style_1");
            webix.html.addCss(this.$$("calib_rows").getNode(), "calib_rows");
            webix.html.addCss(this.$$("rowLevel").getNode(), "rowNumber_style");
            webix.html.addCss(this.$$("rowVolume").getNode(), "rowNumber_style");

        }
        if(configFile.theme == 'dark'){
            webix.html.addCss(this.$$("rowNumber").getNode(), "rowNumber_style_1_dark");
            webix.html.addCss(this.$$("top_text_1").getNode(), "rowNumber_style_1_dark");
            webix.html.addCss(this.$$("top_text_2").getNode(), "rowNumber_style_1_dark");
            webix.html.addCss(this.$$("top_text_3").getNode(), "rowNumber_style_1_dark");
            webix.html.addCss(this.$$("calib_rows").getNode(), "calib_rows_dark");
            webix.html.addCss(this.$$("rowLevel").getNode(), "rowNumber_style_dark");
            webix.html.addCss(this.$$("rowVolume").getNode(), "rowNumber_style_dark");

        }

        
        this.on(this.app, "app:calibrationsubview:addStep", (volumeStep) => {
            if(this.#volume.length){
                let volumes = [ ...this.#volume];
                let lastVolumeStep = this.$$(volumes.pop()).getValue();
                let nextVolumes  = Number(lastVolumeStep) + Number(volumeStep);
                this.addStep(this.currenLevel ,nextVolumes);
            }else{
                this.addStep(0,0);
            }
            this.saveTable();
        });

        this.on(this.app, "app:calibrationsubview:drain:addStep", (volumeStep) => {
            if(this.#volume.length){
                let volumes = [ ...this.#volume];
                let lastVolumeStep = this.$$(volumes.pop()).getValue();
                let nextVolumes  = Number(lastVolumeStep) - Number(volumeStep);
                if(nextVolumes <= 0){
                    nextVolumes = 0;
                }
                this.addStep(this.currenLevel ,nextVolumes);
            }else{
                this.addStep(0,0);
            }
            this.saveTable();
        });

        this.on(this.app, "app:calibrationsubview:removeRow", () => {
            this.removeStep();
            this.saveTable();
        });

        this.on(this.app, "app:calibrationsubview:clearTable", () => {
            this.removeAll();
            this.saveTable();
        });

        this.on(this.app, "app:calibrationsubview:countStep", (countStep, firstVolume) => {
            this.removeAll();
            this.addRow(1,0, firstVolume);
            for(let i = 0; i < (countStep); i++){
                let number = this.#number.length + 1;
                this.addNumber(number);
            }
            this.saveTable();

        });

        this.on(this.app, "app:calibrationsubview:finishCalibrate", () => {
            let  count = this.#number.length
            for(let i = 0; i < count; i++){
                if(this.#number.length > this.#level.length){
                    // this.$$(this.#number.pop()).destructor();
                    this.$$(this.#number.pop()).hide();
                }else{
                    break;
                }
            }
            this.saveTable();
            llsModel.getTable().then();

        });

        this.on(this.app, "app:continueCalibrateWindow:continueCalibrate", () => {
            let countStep = this.#number.length;
            let maxVolume = 0;
            for(let i = 1; i< countStep; i++){
                if(maxVolume < Number(this.$$(this.#volume[i]).getValue())){
                    maxVolume = Number(this.$$(this.#volume[i]).getValue());
                }
            }
            let countStepNoEmpty = 0;
            for(let i = 1; i < countStep; i++){
                if(Number(this.$$(this.#volume[i]).getValue()) == 0){
                    countStepNoEmpty += 1;
                    break;
                }
            }
            if(countStepNoEmpty != 0){
                let volumeStep = maxVolume/countStepNoEmpty;
                let volume = volumeStep * countStep;
            }
            let volumeStep = maxVolume/countStepNoEmpty;
            let volume = volumeStep * countStep;

            for(let i = 0; i < (countStep - countStepNoEmpty); i++){

            }
            this.app.callEvent("app:calibrationSettings:continueCalibrate", [volume, volumeStep]);
        });

        this.on(this.app, "app:calibrationsubview:saveToFile", async() => { //save to file
            await llsModel.getTable();
            fileTableModel.write(this.currentTable).then();
        });

        this.on(this.app, "app:calibrationsubview:readFromFile", () => { // read from file
            fileTableModel.read()
                .then((table)=>{
                    this.app.callEvent("app:calibrationSettings:openTableFromFile", [table]);
                })
                .catch((err)=>{console.log(err)});
        });
    }

    #number = [];
    #level = [];
    #volume = [];

    addNumber(value, number = null) {
        if(this.#number.length < 30){
            let id = this.$$('rowNumber').addView({
                view: 'label',
                align: 'center',
                label: value,


            });
            this.addChangeEvent(id);
            this.#number.push(id);
        }
    }

    addLevel(value, number = null) {
        if(this.#level.length < 30) {
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
        if(this.#volume.length < 30) {
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

    addStep(level, volume){
        if(this.#level.length < this.#number.length){
            this.addLevel(level);
            this.addVolume(volume);
        }else{
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
    removeStep(){
        if(this.#level.length < this.#number.length){
            this.removeLevel();
            this.removeVolume();
        }else{
            this.removeRow();
        }
    }

    createTable(countStep, levels, volumes) {

        for (let i = 0; i < countStep; i++) {
            this.addRow(i + 1, levels[i], volumes[i]);

        }
    }

    parseTable(){
        let levels = this.initArray(30);
        let volumes = this.initArray(30);
        let countPoint = this.#number.length;

        this.#level.forEach((value, index, array)=>{
            value = Number($$(value).getValue());
            levels.splice(index, 1,value);
        });

        this.#volume.forEach((value, index, array)=>{
            value = Number($$(value).getValue());
            volumes.splice(index, 1,value);
        });

        return {
            levels: levels,
            volumes: volumes,
            countPoint: countPoint
        }
    }

    initArray(count){
        let arr = new Array(count);
        for(let i = 0; i < arr.length; i++){
            arr[i] = 0;
        }
        return arr;
    }

    addChangeEvent(id){
        this.$$(id).attachEvent("onChange", (newValue, oldValue, config) => {
            console.log("change");
            if (config != undefined) {
                console.log(newValue);
                this.saveTable();
                llsModel.getTable().then();
            }
        });
    }

    saveTable(){
        let table = this.parseTable();
        llsModel.setTable(table).then();
        console.log(table);
    }

    checkContinueCalibrate(){
        let level =  [...this.#level];
        if(this.#level.length > 0) {
            if (this.$$(level.pop()).getValue() == "0") {
                //todo: emit 'Are you continue calibration?'
                // webix.message('Are you continue calibration?');
                // this.app.callEvent("app:calibrationSettings:continueWindow", []);
            }
        }
    }
}


