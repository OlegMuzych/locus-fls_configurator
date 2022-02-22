import EventEmitter from "events"
import Lls from "../services/lls/lls";
import findPort from "../services/lls/findPort";

class MyEmitter extends EventEmitter {
}


class LlsModel {
    _statusLlsIsFind = "noConnect"; //"findConnect", "connect"
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

    /* Event Short Data */
    onShortData(listener) {
        this._myEmitter.on('shortData', listener);
    }
    clearOnShortData(listener) {
        this._myEmitter.removeListener('shortData', listener);
    }

    /* Event is Connect */
    addListenerIsConnect(listener){
        this._myEmitter.on("isConnect", listener );
    }
    clearListenerIsConnect(listener) {
        this._myEmitter.removeListener('isConnect', listener);
    }

    /* Event is Disconnect */
    addListenerIsDisconnect(listener){
        this._myEmitter.on("isDisconnect", listener );
    }
    clearListenerIsDisconnect(listener) {
        this._myEmitter.removeListener('isDisconnect', listener);
    }

    async _loop() {
        for (; ;) {
            switch (this._statusLlsIsFind) {
                case 'noConnect': {
                    let settings = await this.#findLls();
                    if (settings != undefined) {
                        this._llsConnectSettings = settings;
                        this._statusLlsIsFind = 'findConnect';
                    }
                    break;
                }
                case 'findConnect': {
                    console.log("Lls is find!");
                    console.log(this._llsConnectSettings);
                    try {
                        this._lls = await new Lls(this._llsConnectSettings);
                        this._statusLlsIsFind = 'connect';
                        this._myEmitter.emit('isConnect');
                        break;
                    } catch (e) {
                        console.log(e);
                        this._statusLlsIsFind = 'noConnect';
                        this._myEmitter.emit('isDisconnect');
                        break;
                    }
                }
                case 'connect': {
                    await this.#delay();
                    console.log('Connect to LLS');
                    try{
                        let dataShort = await this._lls.data.getShort();
                        this._myEmitter.emit('shortData', dataShort);
                    }catch (e) {
                        console.log(e);
                        this._statusLlsIsFind = 'noConnect';
                        this._myEmitter.emit('isDisconnect');
                        await this._lls.close();
                        break;
                    }
                }
                default:
                    break;
            }
        }
    }

    async _init(timeout) {
        await this._loop();
    }

    #delay(timeout = 1000) {
        return new Promise(((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, timeout);
        }));
    }

    async #findLls() {
        try {
            let settings = await findPort.findLls232();
            console.log(settings);
            return settings;
        } catch (e) {
            console.log(e);
        }
    }
}

const llsModel = new LlsModel();

export default llsModel;
