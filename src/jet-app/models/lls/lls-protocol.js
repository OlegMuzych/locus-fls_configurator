import {crc8} from "easy-crc";
const {SerialPort} = eval(`require('serialport')`);
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
// myEmitter.on('event', () => {
//     console.log('an event occurred!');
// });
// myEmitter.emit('event');

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
        let buff = await this._parseData(command);
        console.log(buff);
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

        this.port.on('data', function (data) {
            console.log('Data:', data);
            myEmitter.emit('data',data);
        })
    }



    async close(){
        return new Promise((resolve, reject) => {
            if(port.iss){}
            this.port.close(error => {
                console.log(error);
                resolve(error);
            })
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

    async _parseData(commandPrev){
        let data = await this._eventData();
        let [prefix, llsAdr, command, ...buff] = data;
        if(prefix == this.PR_RECEIVE){
            if(command == commandPrev){
                return data;
            }else{
                console.log('command receive: ', command);
            }
        }
    }


    _eventData() {
        return new Promise((resolve, reject) => {
            myEmitter.once('data', (data) => {
                console.log(data);
                resolve(data);
            });
        });
    }
    

    // _parseData(buffer){
    //     let arr = new Uint8Array(buffer);
    //     if(arr[0] == this.PR_RECEIVE){
    //         console.log(arr);
    //         //todo: add check crc and other
    //     }else(console.log('ERROR: 0x3E not found !'));
    // }

}