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
        this.open();
    };

    async send(command, data = null){
        let dataBuffer = this._commandCreate(command, this._settingPort.llsAdr, data);
        this.port.write(dataBuffer);
        let dataParse = await this._eventDataParse(command);
        return dataParse;
    };

    open(){

        this.port.open(function (err) {
            if (err) {
                return console.log(err.message);
            }
        })

        this.port.on('open', function () {
            // open logic
            console.log("serialPort is Open");
        })

        this.port.on('error', function(err) {
            console.log('Error: ', err.message);
        })

        this.port.on('data',  (data) =>{
            console.log('Data:', data);
            let dataPars = this._parseData(data);
            myEmitter.emit(`data:${dataPars.command}`, dataPars);
        })
    }

    async close(){
        return new Promise((resolve, reject) => {
            if(this.port.isOpen){
                this.port.close(error => {
                    console.log(error);
                    resolve(error);
                })
            }
        });
        // return await this.port.close();
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
            case 0x74:{ //проверить правильность пароля
                dataBuffer.push(command);
                dataBuffer.push(this.password);
                break;
            }
            case 0x06:{
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
        console.log("CRC8: " + checksum.toString(16));
        return checksum;
    };

    _parseData(data){
        let [prefix, llsAdr, command, ...buff] = data;
        if(prefix == this.PR_RECEIVE){
            let buffer = new Uint8Array(data).buffer;
            let dataView = new DataView(buffer);

            switch(command){
                case 0x06:{
                    let shortDataResp = {prefix: null};
                    shortDataResp.prefix = dataView.getUint8(0);
                    shortDataResp.llsAdr = dataView.getUint8(1);
                    shortDataResp.command = dataView.getUint8(2)
                    shortDataResp.temperature = dataView.getUint8(3);
                    shortDataResp.level = dataView.getUint16(4);
                    shortDataResp.cnt = dataView.getUint16(6);
                    return shortDataResp;
                    break;
                }
                default: break;
            }
        }
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