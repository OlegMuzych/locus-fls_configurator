import EventEmitter from "events"
import Lls from "../services/lls/lls";

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
                await this._findLls();
                break;
            }
            case true:{
                break;
            }
            default: break;
        }
    }

    async _init(timeout){
        this._lls = await this._findLls();
        this._intervalShortDataId = setInterval(async () => {
            let dataShort = await this._lls.data.getShort();
            this._myEmitter.emit('shortData', dataShort);
        }, timeout);
    }

    async _findLls(){

        return new Lls({portName:"/dev/tty.usbserial-1430"}); ///dev/tty.usbserial-0001"});
    };
}

const llsModel = new LlsModel();

export default llsModel;
