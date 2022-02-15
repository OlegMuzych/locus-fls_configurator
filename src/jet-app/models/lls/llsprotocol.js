const SerialPort = eval(`require('serialport')`);
const { crc8, crc16 } = require('easy-crc');

export default class LlsProtocol {
    constructor(portName, baudRate, llsAdr, name) {
        this.settingPort.portName = portName;
        this.settingPort.baudRate = baudRate;
        this.settingPort.llsAdr = llsAdr;
        this.settingPort.name = name;

        this.port = new SerialPort(portName, {baudRate: baudRate});
    };

    settingPort = {
        portName: null,
        baudRate: null,
        llsAdr: null,
        name: null,
    };
    smallSettingStruct = {};
    password = [0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00];
    shortSetting = {
        llsAdr: null,
        temp: null,
        level: null,
        cnt: null,
    };
    longSetting = {
        llsAdr: null,
        fuelType: null,
        serialNumber: [12],
        SoftwareVersion: [8],
        bootVersion: [8],
        sizeSettings: null,
        /* */
        emptyTank: null,
        fullTank: null,
        outputType: null,
        periodOfDataIssuance: null,
        minValue: null,
        maxValue: null,
        outputParametersOfSensor: null,
        filtrationType: null,
        averagingLength: null,
        medianLength: null,
        coefficientQ: null,
        coefficientR: null,
        thermalCompensationType: null,
        coefficientK1: null,
        coefficientK2: null,
        interpolationType: null,
        baudRate232: null,
        baudRate585: null,
        slaveMasterMode: null,
        countSlave: null,
        llsAdrSlave1: null,
        llsAdrSlave2: null,
        llsAdrSlave3: null,
        llsAdrSlave4: null,
        fuelWaterMode: null,
    };


    send(command){
        let dataBuffer = this.commandCreate(command, 1);
        this.port.write(dataBuffer);
    }

    commandCreate(command, llsAdr, data ){
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
        return new Uint8Array([...dataBuffer, this.getCRC8(dataBuffer)]);
    }


    getCRC8(buffer){
        let checksum = crc8('MAXIM', buffer);
        console.log("CRC8: " + checksum.toString(16));
        return checksum;
    }


    open() {
        this.port.open(function (err) {
            if (err) {
                return console.log('Error opening port: ', err.message);
            }
        })

        this.port.on('open', function () {
            // open logic
            console.log("serialPort is Open");
        })

        this.port.on('error', function(err) {
            console.log('Error: ', err.message);
        })

        this.port.on('readable', function (data) {
            console.log('Data:', data);
        })
    }

    async receiveBuffer(data){
    }

    async close(){
        return new Promise((resolve, reject) => {
            this.port.close(error => {
                console.log(error);
                resolve(error);
            })
        });
    }

}