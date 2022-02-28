export default class llsData {
    _llsProtocol = {};
    password = [0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00];

    #longSettingsReceive = {
        // llsAdr: null,
        // fuelType: null,
        // serialNumber: [12],
        // softwareVersion: [8],
        // bootVersion: [8],
        // sizeOfSettings: null,
        // /* */
        // emptyTank: null,
        // fullTank: null,
        // autoGetData: null,
        // periodOfDataIssuance: null,
        // minValue: null,
        // maxValue: null,
        // outputParametersOfSensor: null,
        // filtrationType: null,
        // averagingLength: null,
        // medianLength: null,
        // coefficientQ: null,
        // coefficientR: null,
        // thermalCompensationType: null,
        // coefficientK1: null,
        // coefficientK2: null,
        // interpolationType: null,
        // baudRate232: null,
        // baudRate585: null,
        // slaveMasterMode: null,
        // countSlave: null,
        // llsAdrSlave1: null,
        // llsAdrSlave2: null,
        // llsAdrSlave3: null,
        // llsAdrSlave4: null,
        // fuelWaterMode: null,
    }

    _shortSetting = {
        _llsAdr: null,
        _temperature: null,
        _level: null,
        _cnt: null,
        get llsAdr() {
            return this._llsAdr;
        },
        set llsAdr(value) {
            this._llsAdr = value;
        },

        get temperature() {
            return this._temperature;
        },
        set temperature(value) {
            this._temperature = value;
        },

        get level() {
            return this._level;
        },
        set level(value) {
            this._level = value;
        },

        get cnt() {
            return this._cnt;
        },
        set cnt(value) {
            this._cnt = value;
        },
    };

    constructor(llsProtocol) {
        this._llsProtocol = llsProtocol;
    };

    async getShort() {
        let shortSettingResponse = await this._llsProtocol.send(0x06);
        console.log(shortSettingResponse);
        this.shortSetting = shortSettingResponse;
        console.log(this.shortSetting);
        return this.shortSetting;
    };

    async getLong() {
        let longSettingResponse = await this._llsProtocol.send(0x47);
        console.log(longSettingResponse);
        this.longSettings = longSettingResponse;
        return this.longSettings;
    };

    async setLong(longData) {
        let {
            llsAdr = this.#longSettingsReceive.llsAdr,
            fuelType = this.#longSettingsReceive.fuelType,
            serialNumber = this.#longSettingsReceive.serialNumber,
            softwareVersion = this.#longSettingsReceive.softwareVersion,
            bootVersion = this.#longSettingsReceive.bootVersion,
            emptyTank = this.#longSettingsReceive.emptyTank,
            fullTank = this.#longSettingsReceive.fullTank,
            autoGetData = this.#longSettingsReceive.autoGetData,
            periodOfDataIssuance = this.#longSettingsReceive.periodOfDataIssuance,
            minValue = this.#longSettingsReceive.minValue,
            maxValue = this.#longSettingsReceive.maxValue,
            outputParametersOfSensor = this.#longSettingsReceive.outputParametersOfSensor,
            filtrationType = this.#longSettingsReceive.filtrationType,
            averagingLength = this.#longSettingsReceive.averagingLength,
            medianLength = this.#longSettingsReceive.medianLength,
            coefficientQ = this.#longSettingsReceive.coefficientQ,
            coefficientR = this.#longSettingsReceive.coefficientR,
            thermalCompensationType = this.#longSettingsReceive.thermalCompensationType,
            coefficientK1 = this.#longSettingsReceive.coefficientK1,
            coefficientK2 = this.#longSettingsReceive.coefficientK2,
            interpolationType = this.#longSettingsReceive.interpolationType,
            baudRate232 = this.#longSettingsReceive.baudRate232,
            baudRate585 = this.#longSettingsReceive.baudRate585,
            slaveMasterMode = this.#longSettingsReceive.slaveMasterMode,
            countSlave = this.#longSettingsReceive.countSlave,
            llsAdrSlave1 = this.#longSettingsReceive.llsAdrSlave1,
            llsAdrSlave2 = this.#longSettingsReceive.llsAdrSlave2,
            llsAdrSlave3 = this.#longSettingsReceive.llsAdrSlave3,
            llsAdrSlave4 = this.#longSettingsReceive.llsAdrSlave4,
            fuelWaterMode = this.#longSettingsReceive.fuelWaterMode,
        } = longData;

        let newLongData = {
            llsAdr: llsAdr,
            fuelType: fuelType,
            serialNumber: serialNumber,
            softwareVersion: softwareVersion,
            bootVersion: bootVersion,
            emptyTank: emptyTank,
            fullTank: fullTank,
            autoGetData: autoGetData,
            periodOfDataIssuance: periodOfDataIssuance,
            minValue: minValue,
            maxValue: maxValue,
            outputParametersOfSensor: outputParametersOfSensor,
            filtrationType: filtrationType,
            averagingLength: averagingLength,
            medianLength: medianLength,
            coefficientQ: coefficientQ,
            coefficientR: coefficientR,
            thermalCompensationType: thermalCompensationType,
            coefficientK1: coefficientK1,
            coefficientK2: coefficientK2,
            interpolationType: interpolationType,
            baudRate232: baudRate232,
            baudRate585: baudRate585,
            slaveMasterMode: slaveMasterMode,
            countSlave: countSlave,
            llsAdrSlave1: llsAdrSlave1,
            llsAdrSlave2: llsAdrSlave2,
            llsAdrSlave3: llsAdrSlave3,
            llsAdrSlave4: llsAdrSlave4,
            fuelWaterMode: fuelWaterMode,
        }

        let {code: status} = await this._llsProtocol.send(0x48, newLongData);
        return {
            status: status,
        }
    }

    set shortSetting({llsAdr, temperature, level, cnt}) {
        this._shortSetting.llsAdr = llsAdr;
        this._shortSetting.temperature = temperature;
        this._shortSetting.level = level;
        this._shortSetting.cnt = cnt;
    };

    get shortSetting() {
        return this._shortSetting;
    };

    set longSettings({
                         llsAdr,
                         fuelType,
                         serialNumber,
                         softwareVersion,
                         bootVersion,
                         emptyTank,
                         fullTank,
                         autoGetData,
                         periodOfDataIssuance,
                         minValue,
                         maxValue,
                         outputParametersOfSensor,
                         filtrationType,
                         averagingLength,
                         medianLength,
                         coefficientQ,
                         coefficientR,
                         thermalCompensationType,
                         coefficientK1,
                         coefficientK2,
                         interpolationType,
                         baudRate232,
                         baudRate585,
                         slaveMasterMode,
                         countSlave,
                         llsAdrSlave1,
                         llsAdrSlave2,
                         llsAdrSlave3,
                         llsAdrSlave4,
                         fuelWaterMode,
                     }) {
        this.#longSettingsReceive.llsAdr = llsAdr;
        this.#longSettingsReceive.fuelType = fuelType;
        this.#longSettingsReceive.serialNumber = serialNumber;
        this.#longSettingsReceive.softwareVersion = softwareVersion;
        this.#longSettingsReceive.bootVersion = bootVersion;
        this.#longSettingsReceive.emptyTank = emptyTank;
        this.#longSettingsReceive.fullTank = fullTank;
        this.#longSettingsReceive.autoGetData = autoGetData;
        this.#longSettingsReceive.periodOfDataIssuance = periodOfDataIssuance;
        this.#longSettingsReceive.minValue = minValue;
        this.#longSettingsReceive.maxValue = maxValue;
        this.#longSettingsReceive.outputParametersOfSensor = outputParametersOfSensor;
        this.#longSettingsReceive.filtrationType = filtrationType;
        this.#longSettingsReceive.averagingLength = averagingLength;
        this.#longSettingsReceive.medianLength = medianLength;
        this.#longSettingsReceive.coefficientQ = coefficientQ;
        this.#longSettingsReceive.coefficientR = coefficientR;
        this.#longSettingsReceive.thermalCompensationType = thermalCompensationType;
        this.#longSettingsReceive.coefficientK1 = coefficientK1;
        this.#longSettingsReceive.coefficientK2 = coefficientK2;
        this.#longSettingsReceive.interpolationType = interpolationType;
        this.#longSettingsReceive.baudRate232 = baudRate232;
        this.#longSettingsReceive.baudRate585 = baudRate585;
        this.#longSettingsReceive.slaveMasterMode = slaveMasterMode;
        this.#longSettingsReceive.countSlave = countSlave;
        this.#longSettingsReceive.llsAdrSlave1 = llsAdrSlave1;
        this.#longSettingsReceive.llsAdrSlave2 = llsAdrSlave2;
        this.#longSettingsReceive.llsAdrSlave3 = llsAdrSlave3;
        this.#longSettingsReceive.llsAdrSlave4 = llsAdrSlave4;
        this.#longSettingsReceive.fuelWaterMode = fuelWaterMode;
    };

    get longSettings() {
        return this.#longSettingsReceive;
    }
}

// Object.defineProperties(llsData.prototype.shortSetting, {
//     llsAdr: {
//         get: () => {
//             return this.llsAdr;
//         },
//         set: () => {
//             return this.llsAdr;
//         },
//         enumerable: true,
//         value: null
//     },
//     temperature: {
//         get: () => {
//             return this.temperature;
//         },
//         set: () => {
//             return this.temperature;
//         },
//         enumerable: true,
//         value: null
//     },
//     level: {
//         get: () => {
//             return this.level;
//         },
//         set: () => {
//             return this.level;
//         },
//         enumerable: true,
//         value: null
//     },
//     cnt: {
//         get: () => {
//             return this._cnt;
//         },
//         set: () => {
//             return this._cnt;
//         },
//         enumerable: true,
//         value: null
//     },
// });


// let shortSetting = {
//     _llsAdr: null,
//     _temp: null,
//     _level: null,
//     _cnt: null,
// };
//
// Object.defineProperty(shortSetting, "llsAdr", {
//     get : () => {return this._llsAdr},
//     set : (value) => {this._llsAdr = value}}
// );
// Object.defineProperty(shortSetting, "temp", {
//     get : () => {return this._temp},
//     set : (value) => {this._temp = value}}
// );
// Object.defineProperty(shortSetting, "level", {
//     get : () => {return this._level},
//     set : (value) => {this._level = value}}
// );
// Object.defineProperty(shortSetting, "cnt", {
//     get : () => {return this._cnt},
//     set : (value) => {this._cnt = value}}
// );
//
// let longSetting = {
//     llsAdr: null,
//     fuelType: null,
//     serialNumber: [12],
//     SoftwareVersion: [8],
//     bootVersion: [8],
//     sizeSettings: null,
//     /* */
//     emptyTank: null,
//     fullTank: null,
//     outputType: null,
//     periodOfDataIssuance: null,
//     minValue: null,
//     maxValue: null,
//     outputParametersOfSensor: null,
//     filtrationType: null,
//     averagingLength: null,
//     medianLength: null,
//     coefficientQ: null,
//     coefficientR: null,
//     thermalCompensationType: null,
//     coefficientK1: null,
//     coefficientK2: null,
//     interpolationType: null,
//     baudRate232: null,
//     baudRate585: null,
//     slaveMasterMode: null,
//     countSlave: null,
//     llsAdrSlave1: null,
//     llsAdrSlave2: null,
//     llsAdrSlave3: null,
//     llsAdrSlave4: null,
//     fuelWaterMode: null,
// };
//
// let longData = {
//     get llsAdr(){
//         return this._llsAdr;
//     },
//     set llsAdr(value){
//         this._llsAdr = value;
//     },
// };
//
// async function getShort(){
//
//     return shortSetting;
// };
//
// function setShort(data){
//     shortSetting = data;
//     console.log(shortSetting);
// };
//
// function on(){
//
// };