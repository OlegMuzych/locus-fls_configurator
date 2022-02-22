import {crc8} from "easy-crc";
const {SerialPort} = eval(`require('serialport')`);
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

export default class llsProtocol{

     PR_RECEIVE = 0x3E;
     PR_TRANSMIT =  0x31;

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

        this.port = new SerialPort({path: portName, baudRate: baudRate});
        return new Promise(async (resolve, reject) => {
            this.open().then(() => {
                resolve(this);
            }).catch((e) => {
                delete this.port;
                reject(e);
            })
        });
    }

    async send(command, data = null, timeout = 1000){
        let timerId = null;
        return new Promise(async (resolve, reject)=>{
            let dataBuffer = this._commandCreate(command, this._settingPort.llsAdr, data);
            this.port.write(dataBuffer);
            timerId = setTimeout(()=>{
                reject("Error: timeout response message!");
            }, timeout);
            let dataParse = await this._eventDataParse(command);
            clearInterval(timerId);
            resolve(dataParse);
        });
    };
    _listenerResponseData(){
        this.port.on('readable', ()=> {
            this.port.pause();
            setTimeout(()=>{
                let data = this.port.read();
                if(!data) return;
                console.log('Data:', data);
                let dataPars = this._parseData(data);
                if(dataPars){
                    myEmitter.emit(`data:${dataPars.command}`, dataPars);
                }
                this.port.resume();
            }, 100);
        })

        // this.port.on('data',  (data) =>{
        //     console.log('Data:', data);
        //     // this._checkCrc8(data);
        //     let dataPars = this._parseData(data);
        //     if(dataPars){
        //         myEmitter.emit(`data:${dataPars.command}`, dataPars);
        //     }
        // })
    }
    open(){
        return new Promise(((resolve, reject) => {
            this.port.on('error', function(err) {
                console.log('Error: ', err.message);
                reject(err.message);
            });
            this.port.on('open',  ()=>{
                // open logic
                console.log("serialPort is Open");
                this._listenerResponseData();
                resolve();
            });

        }));
    }

    async close(){
        return new Promise((resolve, reject) => {
            if(this.port.isOpen){
                this.port.close(error => {
                    console.log(error);
                    resolve(error);
                })
            }else{
                resolve();
            }
        });
    }

    _commandCreate(command, llsAdr, data){
        let dataBuffer = [0x31, llsAdr];
        switch(command){
            case "find232":{ //для поиска по rs232
                dataBuffer.splice(1, 1); //удалим llsAdr
                dataBuffer.push(0xFF);
                dataBuffer.push(0x74);
                dataBuffer.push(...this.password);
                break;
            }
            case 0x74:{ //проверить правильность пароля и адреса ДУТ
                dataBuffer.push(command);
                dataBuffer.push(this.password);
                break;
            }
            case 0x47:{ //читать все настройки
                dataBuffer.push(command);
                break;
            }
            case 0x06:{ //читать однократные данные
                dataBuffer.push(command);
                break;
            }
            default: break;
        }

        dataBuffer = new Uint8Array(dataBuffer);
        return new Uint8Array([...dataBuffer, this._getCRC8(dataBuffer)]);
    };

    _getCRC8(buffer){
        let checksum = crc8('MAXIM', buffer);
        // console.log("CRC8: " + checksum.toString(16));
        return checksum;
    };

    _checkCRC8(data){
        let arr = [...data];
        let crc8 = arr.pop();

        if(crc8 == this._getCRC8(arr)){
            return true;
        }else{
            return false;
        };
    }

    _parseData(data){
        let [prefix, llsAdr, command, ...buff] = data;
        if(prefix == this.PR_RECEIVE){
            let buffer = new Uint8Array(data).buffer;
            let dataView = new DataView(buffer);

            switch(command){
                case 0x06:{
                    let shortDataResp = {};
                    shortDataResp.prefix = dataView.getUint8(0);
                    shortDataResp.llsAdr = dataView.getUint8(1);
                    shortDataResp.command = dataView.getUint8(2)
                    shortDataResp.temperature = dataView.getUint8(3);
                    shortDataResp.level = dataView.getUint16(4, true);
                    shortDataResp.cnt = dataView.getUint16(6, true);
                    return shortDataResp;
                    break;
                }
                case 0x47:{
                    let longDataResp = {};
                    longDataResp.prefix = dataView.getUint8(0);
                    longDataResp.llsAdr = dataView.getUint8(1);
                    longDataResp.command = dataView.getUint8(2);
                    longDataResp.typeLls = dataView.getUint8(3);
                    longDataResp.serialNumber = this._createArr(dataView,4,12);
                    longDataResp.softwareVersion = this._createArr(dataView,16,8);
                    longDataResp.bootVersion = this._createArr(dataView, 24,8);
                    longDataResp.sizeOfSettings = dataView.getUint16(32,true);
                    longDataResp.emptyTank = dataView.getUint32(34, true);
                    longDataResp.fullTank = dataView.getUint32(38, true);
                    longDataResp.llsAdr = dataView.getUint8(42);
                    longDataResp.autoGetData = dataView.getUint8(43);
                    longDataResp.periodOfDataIssuance = dataView.getUint8(44);
                    longDataResp.minLevel = dataView.getUint16(45, true);
                    longDataResp.maxLevel = dataView.getUint16(47, true);
                    longDataResp.outputParametersOfSensor = dataView.getUint16(49, true);
                    longDataResp.filtrationType = dataView.getUint8(50);
                    longDataResp.averagingLength = dataView.getUint8(51);
                    longDataResp.medianLength = dataView.getUint8(52);
                    longDataResp.coefficientQ = dataView.getUint32(53, true);
                    longDataResp.coefficientR = dataView.getUint32(57, true);
                    longDataResp.thermalCompensationType = dataView.getUint8(61);
                    longDataResp.coefficientK1 = dataView.getUint32(62, true);
                    longDataResp.coefficientK2 = dataView.getUint32(66, true);
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
                    return longDataResp;
                    break;
                }
                case 0x74:{
                    let checkPassword = {};
                    checkPassword.prefix = dataView.getUint8(0);
                    checkPassword.llsAdr = dataView.getUint8(1);
                    checkPassword.command = dataView.getUint8(2);
                    checkPassword.code = dataView.getUint8(3);
                    return checkPassword;
                    break;
                }
                default: break;
            }
        }
        return null;
    }

    _createArr(dataView,byteOffset, length){
        let arr = [];
        for(let i = 0; i<length; i++ ){
            arr.push(dataView.getUint8((byteOffset + i)));
        }
        return arr;
    }

    _eventDataParse(command) {
        return new Promise((resolve, reject) => {
            myEmitter.once(`data:${command}`, (data) => {
                // console.log(data);
                 resolve(data);
            });
        });
    }

}