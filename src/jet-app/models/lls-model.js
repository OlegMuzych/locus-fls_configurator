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

    /******* Start Listeners *******/
    /*****************************/

    /*** Event Short Data ***/

    /***/
    addListenerShortData(listener) {
        this._myEmitter.on('shortData', listener);
    }

    clearListenerShortData(listener) {
        this._myEmitter.removeListener('shortData', listener);
    }

    /*** Event is Connect ***/

    /***/
    addListenerIsConnect(listener) {
        this._myEmitter.on("isConnect", listener);
    }

    clearListenerIsConnect(listener) {
        this._myEmitter.removeListener('isConnect', listener);
    }

    /*** Event is Disconnect ***/

    /***/
    addListenerIsDisconnect(listener) {
        this._myEmitter.on("isDisconnect", listener);
    }

    clearListenerIsDisconnect(listener) {
        this._myEmitter.removeListener('isDisconnect', listener);
    }

    /*** Event Long Data ***/

    /***/
    addListenerLongData(listener) {
        this._myEmitter.on("longData", listener);
    }

    clearListenerLongData(listener) {
        this._myEmitter.removeListener('longData', listener);
    }

    /*** Event Table ***/

    /***/
    addListenerTable(listener) {
        this._myEmitter.on("table", listener);
    }

    clearListenerTable(listener) {
        this._myEmitter.removeListener('table', listener);
    }

    /*** Event Read CNT ***/

    /***/
    addListenerReadCnt(listener) {
        this._myEmitter.on("readCnt", listener);
    }

    clearListenerReadCnt(listener) {
        this._myEmitter.removeListener('readCnt', listener);
    }

    /*** Event Command Error ***/

    /***/
    addListenerCommandError(listener) {
        this._myEmitter.on("commandError", listener);
    }

    clearListenerCommandError(listener) {
        this._myEmitter.removeListener('commandError', listener);
    }

    /******* END Listeners *******/

    /*****************************/

    getStatusConnect() {
        if (this.#statusLls == "connect") { //Для момента инициализации
            this._myEmitter.emit('isConnect');
        }
    }

    async getLongData() {
        if (this.#statusLls == 'connect') {
            let dataLong = await this._lls.data.getLong();
            this._myEmitter.emit('longData', dataLong);
        } else {
            return 'LLS not connect';
        }
    }

    async setLongData(data) {
        if (this.#statusLls == 'connect') {
            let resp = await this._lls.data.setLong(data);
            if (resp.status == 0x00) {
                this.getLongData().then();
                this._myEmitter.emit('commandError', resp.status);
            } else if (resp.status == 0x01) {
                console.log('Lls response error!');
                this._myEmitter.emit('commandError', resp.status);
            } else if (resp.status == 0x02) {
                console.log("Lls password error!");
                this._myEmitter.emit('commandError', resp.status);
            }
        } else {
            return 'LLS not connect';
        }
    }

    async setMaximum() {
        if (this.#statusLls == 'connect') {
            let resp = await this._lls.actions.setMaximum();
            if (resp.status == 0x00) {
                this.getLongData().then();
                this._myEmitter.emit('commandError', resp.status);
            } else if (resp.status == 0x01) {
                console.log('Lls response error!');
                this._myEmitter.emit('commandError', resp.status);
            } else if (resp.status == 0x02) {
                console.log("Lls password error!");
                this._myEmitter.emit('commandError', resp.status);
            }
        } else {
            return 'LLS not connect';
        }
    }

    async setMinimum() {
        if (this.#statusLls == 'connect') {
            let resp = await this._lls.actions.setMinimum();
            if (resp.status == 0x00) {
                this.getLongData().then();
                this._myEmitter.emit('commandError', resp.status);
            } else if (resp.status == 0x01) {
                console.log('Lls response error!');
                this._myEmitter.emit('commandError', resp.status);
            } else if (resp.status == 0x02) {
                console.log("Lls password error!");
                this._myEmitter.emit('commandError', resp.status);
            }
        } else {
            return 'LLS not connect';
        }
    }

    async resetLls() {
        if (this.#statusLls == 'connect') {
            let resp = await this._lls.actions.resetLls();
            if (resp.status == 0x00) {
                this.getLongData().then();
            } else if (resp.status == 0x01) {
                console.log('Lls response error!');
            } else if (resp.status == 0x02) {
                console.log("Lls password error!");
            }
        } else {
            return 'LLS not connect';
        }
    }

    async getTable() {
        if (this.#statusLls == 'connect') {
            let table = await this._lls.table.get();
            this._myEmitter.emit('table', table);
        } else {
            return 'LLS not connect';
        }
    }

    setTable(data) {
        return new Promise(async (resolve, reject) => {
            if (this.#statusLls == 'connect') {
                let resp = await this._lls.table.set(data);
                if (resp.status == 0x00) {
                    this._myEmitter.emit('commandError', resp.status);
                    resolve();
                } else if (resp.status == 0x01) {
                    console.log('Lls response error!');
                    this._myEmitter.emit('commandError', resp.status);
                    reject(resp.status);
                } else if (resp.status == 0x02) {
                    console.log("Lls password error!");
                    this._myEmitter.emit('commandError', resp.status);
                    reject(resp.status);
                }
            } else {
                console.log('LLS not connect');
                reject();
            }
        });
    }

    async getCnt() {
        if (this.#statusLls == 'connect') {
            let cnt = await this._lls.data.getCnt();
            this._myEmitter.emit('readCnt', cnt);
        } else {
            return 'LLS not connect';
        }
    }

    checkPassword() {
        return new Promise(async (resolve, reject) => {
            if (this.#statusLls == 'connect') {
                let resp = await this._lls.actions.checkPassword();
                if (resp.status == 0x00) {
                    resolve();
                } else if (resp.status == 0x01) {
                    console.log('Lls response error!');
                    reject(resp.status);
                } else if (resp.status == 0x02) {
                    console.log("Lls password error!");
                    reject(resp.status);
                }
            } else {
                console.log('LLS not connect');
                reject();
            }
        });
    }

    setNewPassword(currentPassword, newPassword) {
        return new Promise(async (resolve, reject) => {
            if (this.#statusLls == 'connect') {
                let resp = await this._lls.actions.setNewPassword(currentPassword, newPassword);
                if (resp.status == 0x00) {
                    this._myEmitter.emit('commandError', resp.status);
                    resolve();
                } else if (resp.status == 0x01) {
                    console.log('Lls response error!');
                    this._myEmitter.emit('commandError', resp.status);
                    reject();
                } else if (resp.status == 0x02) {
                    console.log("Lls password error!");
                    this._myEmitter.emit('commandError', resp.status);
                    reject();
                }
            } else {
                console.log('LLS not connect');
                reject();
            }
        });
    }

    setCurrentPassword(str) {
        return new Promise(async (resolve, reject) => {
            if (this.#statusLls == 'connect') {
                let resp = await this._lls.actions.setCurrentPassword(str);
                if (resp.status == 0x00) {
                    resolve();
                } else if (resp.status == 0x01) {
                    console.log('Lls response error!');
                    reject();
                } else if (resp.status == 0x02) {
                    console.log("Lls password error!");
                    reject();
                }
            } else {
                console.log('LLS not connect');
                reject();
            }
        });
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
                    // await this.getCnt();
                    try {
                        await this.getCnt();
                        let dataShort = await this._lls.data.getShort();
                        console.log(dataShort);
                        if(dataShort.llsAdr){
                            this._myEmitter.emit('shortData', dataShort);
                        }
                    } catch (e) {
                        console.log(e);
                        this.#statusLls = 'noConnect';
                        this._myEmitter.emit('isDisconnect');
                        try {
                            await this._lls.close();
                        } catch (e) {
                            close()
                        }
                        ;
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
