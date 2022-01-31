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

    settingStruct = {
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

    // async commandSend(command, data){
    // };
    commandSend(command, data){
        let pass = [0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00];
        let dataBuffer = new Uint8Array([0x31, 0xFF, 0x74, ...pass,]);
        let checksum = crc8('MAXIM', dataBuffer);
        console.log(checksum.toString(16));
        let buffer = new Uint8Array([...dataBuffer, checksum]);
        console.log(buffer);
        this.port.write(buffer);
    };

    // async open(){
    //     this.port.open(function (err) {
    //         if (err) {
    //             return console.log('Error opening port: ', err.message)
    //         }
    //     })
    //
    //     this.port.on('open', function() {
    //         // open logic
    //         console.log("serialPort is Open");
    //     })
    // }

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

        this.port.on('data', function (data) {
            console.log('Data:', data);
        })
    }

    close(){
        return new Promise((resolve, reject) => {
            this.port.close(error => {
                console.log(error);
                resolve(error);
            })
        });
    }

}