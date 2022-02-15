import llsProtocol from "./lls-protocol";
import llsData from "./lls-data";

export default class Lls{
    _settingPort = {};
    _llsProtocol = {};

    data = {};
    table = {};
    actions = {};

    constructor(portName, baudRate = 19200, llsAdr = 1, name = "test") {
        this._settingPort.portName = portName;
        this._settingPort.baudRate = baudRate;
        this._settingPort.llsAdr = llsAdr;
        this._settingPort.name = name;

        this._llsProtocol = new llsProtocol(this._settingPort.portName,this._settingPort.baudRate, this._settingPort.llsAdr,this._settingPort.name);
        this.data = new llsData(this._llsProtocol);
        // this.port = new SerialPort(portName, {baudRate: baudRate});
    };

    async close(){
       await this._llsProtocol.close();
    }


}