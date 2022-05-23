// import {crc8} from "easy-crc";

// const {SerialPort} = eval(`require('serialport')`);
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {
}

const myEmitter = new MyEmitter();

export default class llsProtocol {

    PR_RECEIVE = 0x3E;
    PR_TRANSMIT = 0x31;

    #password = [0, 0, 0, 0, 0, 0, 0, 0];
    set password(str) {
        let arr = str.split('');
        let zeroPass = [0, 0, 0, 0, 0, 0, 0, 0];
        if (arr.length <= 8) {
            zeroPass.splice(0, arr.length, ...arr);
            this.#password = zeroPass;
        }
    };

    setLlsAdr(value) {
        this._settingPort.llsAdr = value;
    }

    #queueWrite = [];
    #timeoutWrite = [];
    #writeMutex = true;

    _settingPort = {
        portName: null,
        baudRate: null,
        llsAdr: null,
        name: null,
    };

    constructor(portName, baudRate, llsAdr, name) {
        this._settingPort.portName = portName;
        this._settingPort.baudRate = baudRate;
        this._settingPort.llsAdr = llsAdr;
        this._settingPort.name = name;

        // this.port = new SerialPort({path: portName, baudRate: baudRate});
        this.port = window.serialPort;
        this.port.new({path: portName, baudRate: baudRate});
        this.#loopPortWrite();
        return new Promise(async (resolve, reject) => {
            this.open().then(() => {
                resolve(this);
            }).catch((e) => {
                // delete this.port;
                this.port.delete();
                reject(e);
            })
        });
    };

    async send(command, data = null, timeout = 3000) {
        let timerId = null;
        return new Promise(async (resolve, reject) => {
            this.port.pause();
            this.#pushQueueWrite({command: command, data: data}, timeout);
            let timeoutSumm = this.#getSummTimeoutWrite();
            timerId = setTimeout(() => {
                reject(`Error command ${command.toString(16)}: timeout response message!`);
                this.port.resume();
            }, timeoutSumm);
            let dataParse = await this._eventDataParse(command);
            clearInterval(timerId);
            this.port.resume();
            resolve(dataParse);
        });
    };

    #pushQueueWrite({command, data}, timeout) {
        this.#timeoutWrite.push(timeout); //для учета времени задержки ожидания выполнения команды
        let obj = {
            command: command,
            data: data
        }
        this.#queueWrite.push(obj);
    };

    #shiftQueueWrite() {
        this.#timeoutWrite.shift();
        return this.#queueWrite.shift();
    };

    #getSummTimeoutWrite() {
        let timeoutSumm = 0;
        this.#timeoutWrite.forEach((value, index, array) => {
            timeoutSumm += value;
        });
        return timeoutSumm;
    };

    getLengthQueueWrite() {
        return this.#queueWrite.length;
    };

    #loopPortWrite() {
        setInterval(() => {
            if (this.#queueWrite.length) {
                // let obj = this.#queueWrite.shift();
                let obj = this.#shiftQueueWrite();
                let dataBuffer = this._commandCreate(obj.command, obj.data);
                this.port.write(dataBuffer);
            }
        }, 500);
    };

    _listenerResponseData() {
        this.port.onReadable(() => {
            // this.port.pause();
            console.log("readable");
            setTimeout(() => {
                let data = this.port.read();
                if (!data) return;
                console.log('Data:', data);
                let dataPars = this._parseData(data);
                if (dataPars) {
                    myEmitter.emit(`data:${dataPars.command}`, dataPars);
                }
                // this.port.resume();
            }, 200); //100
        })
    };

    open() {
        return new Promise(((resolve, reject) => {
            this.port.onError((err) => {
                // console.log('Error: ', err.message);
                reject(err.message);
            });
            this.port.onOpen(() => {
                // open logic
                console.log(`serialPort [${this._settingPort.portName}: ${this._settingPort.baudRate}] is Open`);
                this._listenerResponseData();
                resolve();
            });

        }));
    };

    async close() {
        return new Promise((resolve, reject) => {
            if (this.port.isOpen) {
                this.port.close(error => {
                    console.log(error);
                    resolve(error);
                })
            } else {
                resolve();
            }
        });
    };

    _commandCreate(command, data) {
        let llsAdr = this._settingPort.llsAdr;
        let dataBuffer = [0x31, llsAdr];
        switch (command) {
            case "find232": { //для поиска по rs232
                dataBuffer.splice(1, 1); //удалим llsAdr
                dataBuffer.push(0xFF);
                dataBuffer.push(0x74);
                dataBuffer.push(...this.password);
                break;
            }
            case 0x74: { //проверить правильность пароля и адреса ДУТ
                dataBuffer.push(command);
                dataBuffer.push(...this.#password);
                break;
            }
            case 0x47: { //читать все настройки
                dataBuffer.push(command);
                break;
            }
            case 0x48: {
                dataBuffer.push(command);
                dataBuffer.push(...this.#password);
                dataBuffer.push(0xff);
                dataBuffer.push(0xff);
                dataBuffer.push(...this.#getUint32(data.emptyTank));
                dataBuffer.push(...this.#getUint32(data.fullTank));
                dataBuffer.push(data.llsAdr);
                dataBuffer.push(data.autoGetData);
                dataBuffer.push(data.periodOfDataIssuance);
                dataBuffer.push(...this.#getUint16(data.minLevel));
                dataBuffer.push(...this.#getUint16(data.maxLevel));
                dataBuffer.push(data.outputParametersOfSensor);
                dataBuffer.push(data.filtrationType);
                dataBuffer.push(data.averagingLength);
                dataBuffer.push(data.medianLength);
                dataBuffer.push(...this.#float2Buffer(data.coefficientQ));
                dataBuffer.push(...this.#float2Buffer(data.coefficientR));
                dataBuffer.push(data.thermalCompensationType);
                dataBuffer.push(...this.#float2Buffer(data.coefficientK1));
                dataBuffer.push(...this.#float2Buffer(data.coefficientK2));
                dataBuffer.push(data.interpolationType);
                dataBuffer.push(data.baudRate232);
                dataBuffer.push(data.baudRate485);
                dataBuffer.push(data.slaveMasterMode);
                dataBuffer.push(data.countSlave);
                dataBuffer.push(data.llsAdrSlave1);
                dataBuffer.push(data.llsAdrSlave2);
                dataBuffer.push(data.llsAdrSlave3);
                dataBuffer.push(data.llsAdrSlave4);
                dataBuffer.push(data.fuelWaterMode);
                dataBuffer.push(0x00);
                dataBuffer.push(0xff);
                dataBuffer.push(0xff);
                console.log(dataBuffer);
                break;
            }
            case 0x06: { //читать однократные данные
                dataBuffer.push(command);
                break;
            }
            case 0x08: { //калибровка на минимум
                dataBuffer.push(command);
                dataBuffer.push(...this.#password);
                break;
            }
            case 0x09: { //калибровка на максимум
                dataBuffer.push(command);
                dataBuffer.push(...this.#password);
                break;
            }
            case 0x67: { //переход в загрузчиик
                dataBuffer.push(command);
                dataBuffer.push(0x19);
                break;
            }
            case 0x68:{ //download_applications
                dataBuffer.push(command);
                break;
            }
            case "reset": { //сброс к заводским настойкам
                dataBuffer.push(0x67);
                dataBuffer.push(0x69);
                break;
            }
            case 0x16: { //новый пароль
                dataBuffer.push(command);
                dataBuffer.push(...data.currentPassword);
                dataBuffer.push(...data.newPassword);
                break;
            }
            case 0x26: { //читать табллицу тарировки
                dataBuffer.push(command);
                break;
            }
            case 0x27: { //записать табллицу тарировки
                dataBuffer.push(command);
                dataBuffer.push(...this.#password);
                dataBuffer.push(data.countPoint);
                for (let i = 0; i < 30; i++) {
                    dataBuffer.push(...this.#getUint16(data.levels[i]));
                    dataBuffer.push(...this.#getUint16(data.volumes[i]));
                }
                dataBuffer.push(0xff);
                dataBuffer.push(0xff);
                break;
            }
            case 0xf7: { //читать cnt
                dataBuffer.push(command);
                break;
            }
            default:
                break;
        }

        dataBuffer = new Uint8Array(dataBuffer);
        return new Uint8Array([...dataBuffer, this._getCRC8(dataBuffer)]);
    };

    _getCRC8(buffer) {
        // let checksum = crc8('MAXIM', buffer);
        let checksum = window.checkSumm.crc8('MAXIM', buffer);
        // console.log("CRC8: " + checksum.toString(16));
        return checksum;
    };

    _checkCRC8(data) {
        let arr = [...data];
        let crc8 = arr.pop();

        if (crc8 == this._getCRC8(arr)) {
            return true;
        } else {
            return false;
        }
        ;
    };

    _parseData(data) {
        let [prefix, llsAdr, command, ...buff] = data;
        if (prefix == this.PR_RECEIVE) {
            let buffer = new Uint8Array(data).buffer;
            let dataView = new DataView(buffer);

            switch (command) {
                case 0x06: {
                    let shortDataResp = {};
                    shortDataResp.prefix = dataView.getUint8(0);
                    shortDataResp.llsAdr = dataView.getUint8(1);
                    shortDataResp.command = dataView.getUint8(2)
                    shortDataResp.temperature = dataView.getUint8(3);
                    shortDataResp.level = dataView.getUint16(4, true);
                    shortDataResp.frequency = dataView.getUint16(6, true);
                    return shortDataResp;
                    break;
                }
                case 0x47: {
                    let longDataResp = {};
                    longDataResp.prefix = dataView.getUint8(0);
                    longDataResp.llsAdr = dataView.getUint8(1);
                    longDataResp.command = dataView.getUint8(2);
                    longDataResp.typeLls = dataView.getUint8(3);
                    longDataResp.serialNumber = this._createArr(dataView, 4, 12);
                    longDataResp.softwareVersion = this._createArr(dataView, 16, 8);
                    longDataResp.bootVersion = this._createArr(dataView, 24, 8);
                    longDataResp.sizeOfSettings = dataView.getUint16(32, true);
                    longDataResp.emptyTank = dataView.getUint32(34, true);
                    longDataResp.fullTank = dataView.getUint32(38, true);
                    longDataResp.llsAdrNet = dataView.getUint8(42);
                    longDataResp.autoGetData = dataView.getUint8(43);
                    longDataResp.periodOfDataIssuance = dataView.getUint8(44);
                    longDataResp.minLevel = dataView.getUint16(45, true);
                    longDataResp.maxLevel = dataView.getUint16(47, true);
                    longDataResp.outputParametersOfSensor = dataView.getUint8(49);
                    longDataResp.filtrationType = dataView.getUint8(50);
                    longDataResp.averagingLength = dataView.getUint8(51);
                    longDataResp.medianLength = dataView.getUint8(52);
                    longDataResp.coefficientQ = dataView.getFloat32(53, true);
                    longDataResp.coefficientR = dataView.getFloat32(57, true);
                    longDataResp.thermalCompensationType = dataView.getUint8(61);
                    longDataResp.coefficientK1 = dataView.getFloat32(62, true);
                    longDataResp.coefficientK2 = dataView.getFloat32(66, true);
                    longDataResp.interpolationType = dataView.getUint8(70);
                    longDataResp.baudRate232 = dataView.getUint8(71);
                    longDataResp.baudRate485 = dataView.getUint8(72);
                    longDataResp.slaveMasterMode = dataView.getUint8(73);
                    longDataResp.countSlave = dataView.getUint8(74);
                    longDataResp.llsAdrSlave1 = dataView.getUint8(75);
                    longDataResp.llsAdrSlave2 = dataView.getUint8(76);
                    longDataResp.llsAdrSlave3 = dataView.getUint8(77);
                    longDataResp.llsAdrSlave4 = dataView.getUint8(78);
                    longDataResp.fuelWaterMode = dataView.getInt8(79);

                    // this.setLlsAdr(longDataResp.llsAdr);
                    return longDataResp;
                    break;
                }
                case 0x48: {
                    let setLongData = {};
                    setLongData.prefix = dataView.getUint8(0);
                    setLongData.llsAdr = dataView.getUint8(1);
                    setLongData.command = dataView.getUint8(2);
                    setLongData.code = dataView.getUint8(3);
                    return setLongData;
                    break;
                }
                case 0x74: {
                    let checkPassword = {};
                    checkPassword.prefix = dataView.getUint8(0);
                    checkPassword.llsAdr = dataView.getUint8(1);
                    checkPassword.command = dataView.getUint8(2);
                    checkPassword.code = dataView.getUint8(3);
                    return checkPassword;
                    break;
                }
                case 0x08: {
                    let setMinimum = {};
                    setMinimum.prefix = dataView.getUint8(0);
                    setMinimum.llsAdr = dataView.getUint8(1);
                    setMinimum.command = dataView.getUint8(2);
                    setMinimum.code = dataView.getUint8(3);
                    return setMinimum;
                    break;
                }

                case 0x09: {
                    let setMaximum = {};
                    setMaximum.prefix = dataView.getUint8(0);
                    setMaximum.llsAdr = dataView.getUint8(1);
                    setMaximum.command = dataView.getUint8(2);
                    setMaximum.code = dataView.getUint8(3);
                    return setMaximum;
                    break;
                }
                case 0x67: {// переход в  загрузчик или зброс к заводскиим настройкам
                    let goBootloader = {};
                    goBootloader.prefix = dataView.getUint8(0);
                    goBootloader.llsAdr = dataView.getUint8(1);
                    goBootloader.command = dataView.getUint8(2);
                    goBootloader.code = dataView.getUint8(3);
                    return goBootloader;
                    break;
                }
                case 0x68: {// download_applications
                    let goBootloader = {};
                    goBootloader.prefix = dataView.getUint8(0);
                    goBootloader.llsAdr = dataView.getUint8(1);
                    goBootloader.command = dataView.getUint8(2);
                    goBootloader.code = dataView.getUint8(3);
                    return goBootloader;
                    break;
                }
                case 0x16: {
                    let newPassword = {};
                    newPassword.prefix = dataView.getUint8(0);
                    newPassword.llsAdr = dataView.getUint8(1);
                    newPassword.command = dataView.getUint8(2);
                    newPassword.code = dataView.getUint8(3);
                    return newPassword;
                    break;
                }

                case 0x26: {
                    let readTable = {};
                    readTable.prefix = dataView.getUint8(0);
                    readTable.llsAdr = dataView.getUint8(1);
                    readTable.command = dataView.getUint8(2);
                    readTable.countPoint = dataView.getUint8(3);
                    readTable.levels = [];
                    readTable.volumes = [];
                    for (let i = 0; i < 30; i++) {
                        readTable.levels.push(dataView.getUint16((4 + i * 4), true));
                        readTable.volumes.push(dataView.getUint16((6 + i * 4), true));
                    }
                    return readTable;
                    break;
                }
                case 0xf7: {
                    let readCnt = {};
                    readCnt.prefix = dataView.getUint8(0);
                    readCnt.llsAdr = dataView.getUint8(1);
                    readCnt.command = dataView.getUint8(2)
                    readCnt.llsType = dataView.getUint8(3);
                    readCnt.cnt = dataView.getUint32(4, true);
                    readCnt.fuel = dataView.getUint16(8);
                    return readCnt;
                    break;
                }
                default: {
                    let defaultResp = {};
                    defaultResp.prefix = dataView.getUint8(0);
                    defaultResp.llsAdr = dataView.getUint8(1);
                    defaultResp.command = dataView.getUint8(2);
                    defaultResp.code = dataView.getUint8(3);
                    return defaultResp;
                    break;
                }
            }
        }
        return null;
    };

    _createArr(dataView, byteOffset, length) {
        let arr = [];
        for (let i = 0; i < length; i++) {
            arr.push(dataView.getUint8((byteOffset + i)));
        }
        return arr;
    };

    #getUint16(value16) {
        let data = value16;
        let arrData = [];
        for (let i = 0; i < 2; i++) {
            let byte = data & 0b11111111;
            arrData.push(byte);
            data = data >>> 8;
        }
        console.log(arrData[0], arrData[1]);
        return arrData;
    };

    #getUint32(value32) {
        let data = value32;
        let arrData = [];
        for (let i = 0; i < 4; i++) {
            let byte = data & 0b11111111;
            arrData.push(byte);
            data = data >>> 8;
        }
        console.log(arrData[0], arrData[1], arrData[2], arrData[3]);
        return arrData;
    };

    #float2Buffer = (float32) => {
        const getHex = i => ('00' + i.toString(16)).slice(-2);
        let view = new DataView(new ArrayBuffer(4));
        view.setFloat32(0, float32);
        // return Array.apply(null, { length: 4 }).map((_, i) => getHex(view.getUint8(i))).join('');
        let arr = Array.apply(null, { length: 4 }).map((_, i) => getHex(view.getUint8(i)));
        let newArr = new Array(4);
        arr.forEach((value, index, array)=>{
            newArr[3 - index] = (parseInt(value, 16));
        });
        return newArr;
    }

    _eventDataParse(command) {
        return new Promise((resolve, reject) => {
            myEmitter.once(`data:${command}`, (data) => {
                // console.log(data);
                resolve(data);
            });
        });
    };

}