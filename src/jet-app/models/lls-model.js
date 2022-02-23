import EventEmitter from "events"
import Lls from "../services/lls/lls";
import findPort from "../services/lls/findPort";

class MyEmitter extends EventEmitter {
}


class LlsModel {
    #statusLls = "noConnect"; //"findConnect", "connect"
    _llsConnectSettings = {
        path: null,
        baudRate: null,
        llsAdr: null,
    }
    _myEmitter = new MyEmitter();
    _lls = null;
    _intervalShortDataId = null;

    constructor(timeout = 1000) {
        this.#init(timeout).then().catch();
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

    /* Event Long Data */
    addListenerLongData(listener){
        this._myEmitter.on("longData", listener );
    }
    clearListenerLongData(listener) {
        this._myEmitter.removeListener('longData', listener);
    }

    async getLongData(){
        if(this.#statusLls = 'connect'){
            let dataLong = await this._lls.data.getLong();
            this._myEmitter.emit('longData', dataLong);
        }else{
            return 'LLS not connect';
        }
    }

    async #loop() {
        for (; ;) {
            switch (this.#statusLls) {
                case 'noConnect': {
                    let settings = await this.#findLls();
                    if (settings != undefined) {
                        this._llsConnectSettings = settings;
                        this.#statusLls = 'findConnect';
                    }
                    break;
                }
                case 'findConnect': {
                    console.log("Lls is find!");
                    console.log(this._llsConnectSettings);
                    try {
                        this._lls = await new Lls(this._llsConnectSettings);
                        this.#statusLls = 'connect';
                        this._myEmitter.emit('isConnect');
                        break;
                    } catch (e) {
                        console.log(e);
                        this.#statusLls = 'noConnect';
                        this._myEmitter.emit('isDisconnect');
                        break;
                    }
                }
                case 'connect': {
                    await this.#delay();
                    console.log('Connect to LLS');
                    try{
                        // let dataShort = await this._lls.data.getShort();
                        // this._myEmitter.emit('shortData', dataShort);
                    }catch (e) {
                        console.log(e);
                        this.#statusLls = 'noConnect';
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

    async #init(timeout) {
        await this.#loop();
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
