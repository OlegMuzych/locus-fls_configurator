import llsProtocol from "./lls-protocol";
import llsData from "./lls-data";
import llsAction from "./lls-action";
import llsTable from "./lls-table";

export default class Lls{
    _settingPort = {};
    _llsProtocol = {};

    data = {};
    table = {};
    actions = {};
    _port = null;

    constructor({path, baudRate = 19200, llsAdr = 1, name = "test"},port) {
        this._settingPort.portName = path;
        this._settingPort.baudRate = baudRate;
        this._settingPort.llsAdr = llsAdr;
        this._settingPort.name = name;

        return new Promise((resolve, reject) => {
            new llsProtocol(this._settingPort.portName, this._settingPort.baudRate, this._settingPort.llsAdr, this._settingPort.name, port).then(llsProtocol=>{
                this._llsProtocol = llsProtocol;
                this.data = new llsData(this._llsProtocol);
                this.actions = new llsAction(this._llsProtocol);
                this.table = new llsTable(this._llsProtocol);
                resolve(this);
            }).catch(
                (e)=>{reject(e)}
            );
        });
        // this._llsProtocol = new llsProtocol(this._settingPort.portName, this._settingPort.baudRate, this._settingPort.llsAdr, this._settingPort.name);

        // this.data = new llsData(this._llsProtocol);
        // this.actions = new llsAction(this._llsProtocol);
        //// this.port = new SerialPort(portName, {baudRate: baudRate});
    };

    async close(){
       await this._llsProtocol.close();
    }


}