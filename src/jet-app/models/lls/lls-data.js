export default class llsData{
    _llsProtocol = {};
    password = [0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00];

    shortSetting = {
        llsAdr: null,
        temperature: null,
        level: null,
        cnt: null
    };

    constructor(llsProtocol){
        this._llsProtocol = llsProtocol;
    };

    async getShort(){
        this._llsProtocol.send(0x06);
        // let shortSetting = await this._llsProtocol.send(0x06);
        return this.shortSetting;
    };
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