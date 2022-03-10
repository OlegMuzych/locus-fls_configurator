import {JetView} from "webix-jet";
import llsModel from "../../../models/lls-model";

export default class CalibrationSettings extends JetView {
    config() {
        let table = {
            cols: [
                {
                    gravity: 1,
                    rows: [
                        {view: 'label', label: 'Step N', align: 'center'},
                        {localId: 'rowNumber', rows: []}
                    ]
                },
                {
                    gravity: 3,
                    rows: [
                        {view: 'label', label: 'Level', align: 'center'},
                        {localId: 'rowLevel', rows: []}
                    ]
                },
                {
                    gravity: 3,
                    rows: [
                        {view: 'label', label: 'Volume', align: 'center'},
                        {localId: 'rowVolume', rows: []}
                    ]
                }
            ],
        }

        let body = {
            // minWidth: 600,
            // maxWidth: 850,
            // id: "central_menu_button_2",
            rows: [
                // {cols:[
                //         {view:'button', label:'addNumber',click:()=>this.addNumber('number')},
                //         {view:'button', label:'addLevel',click:()=>this.addLevel('level')},
                //         {view:'button', label:'addVolume',click:()=>this.addVolume('volume')},
                //     ]},
                // {cols:[
                //         {view:'button', label:'deleteNumber',click:()=>this.removeNumber()},
                //         {view:'button', label:'deleteLevel',click:()=>this.removeLevel()},
                //         {view:'button', label:'deleteVolume',click:()=>this.removeVolume()},
                //     ]},
                {
                    cols: [
                        {view: 'button', label: 'addRow', click: () => this.addRow(123, 123, 123)},
                        {view: 'button', label: 'deleteRow', click: () => this.removeRow()},
                        {view: 'button', label: 'delAll', click: () => this.removeAll()},
                        {view: 'button', label: 'parseAll', click: () => {
                            let table = this.parseTable();
                            llsModel.setTable(table).then();
                            console.log(table);
                            }},
                    ]
                },
                table
            ],

        };

        return body;
    }

    listenerTable = (table) => {
        console.log(table);
        this.removeAll();
        this.createTable(table.countPoint, table.levels, table.volumes);
    }

    listenerConnect = () => {
        llsModel.getTable().then();
    }

    listenerShortData = (shortData) => {
        console.log(shortData);
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

        this.on(this.app, "app:calibrationsubview:addStep", (volumeStep) => {
            if(this.#volume.length){
                let volumes = [ ...this.#volume];
                let lastVolumeStep = this.$$(volumes.pop()).getValue();
                let nextVolumes  = Number(lastVolumeStep) + Number(volumeStep);
                this.addStep(this.currenLevel ,nextVolumes);
            }else{
                this.addStep(0,0);
            }
        });

        this.on(this.app, "app:calibrationsubview:removeRow", () => {
            this.removeStep();
        });

        this.on(this.app, "app:calibrationsubview:clearTable", () => {
            this.removeAll();
        });

        this.on(this.app, "app:calibrationsubview:countStep", (countStep) => {
            this.removeAll();
            this.addRow(1,0,0);
            for(let i = 0; i < (countStep); i++){
                let number = this.#number.length + 1;
                this.addNumber(number);
            }
        });
    }

    #number = [];
    #level = [];
    #volume = [];

    addNumber(value, number = null) {
        let id = this.$$('rowNumber').addView({
            view: 'label',
            align: 'center',
            label: value,
        });
        this.#number.push(id);
    }

    addLevel(value, number = null) {
        let id = this.$$('rowLevel').addView({
            view: 'text',
            align: 'center',
            value: value,
        });
        this.#level.push(id);
    }

    addVolume(value, number = null) {
        let id = this.$$('rowVolume').addView({
            view: 'text',
            align: 'center',
            value: value,
        });
        this.#volume.push(id);
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



}


