import EventEmitter from "events"
import Lls from "../services/lls/lls";
import findPort from "../services/lls/findPort";

class MyEmitter extends EventEmitter {}


class LlsModel {
    _statusLlsIsFind = false;
    _llsConnectSettings = {
        path: null,
        baudRate: null,
        llsAdr: null,
    }
    _myEmitter = new MyEmitter();
    _lls = null;
    _intervalShortDataId = null;

    constructor(timeout = 1000) {
        this._init(timeout).then().catch();
    }

    onShortData(listener){
        this._myEmitter.on('shortData', listener);
    }

    clearOnShortData(listener){
        this._myEmitter.removeListener('shortData', listener);
    }

    async _loop(){
        switch (this._statusLlsIsFind){
            case false:{
                for(;;){
                    let settings = await this.#findLls();
                    if(settings != undefined){
                        this._llsConnectSettings = settings;
                        this._statusLlsIsFind = true;
                        break;
                    }
                }
                break;
            }
            case true:{
                console.log("Lls is find!");
                console.log(this._llsConnectSettings);
                break;
            }
            default: break;
        }
    }

    async _init(timeout){
        await this._loop();
        // this._lls = await this._findLls();
        // this._intervalShortDataId = setInterval(async () => {
        //     let dataShort = await this._lls.data.getShort();
        //     this._myEmitter.emit('shortData', dataShort);
        // }, timeout);
    }

    async #findLls(){
        try{
            let settings = await findPort.findLls232();
            console.log(settings);
            return settings;
        }catch(e){
            console.log(e);
        }
    }

}

const llsModel = new LlsModel();

export default llsModel;
