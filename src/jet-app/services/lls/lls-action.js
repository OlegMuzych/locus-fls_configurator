export default class llsAction{
    _llsProtocol = {};

    constructor(llsProtocol){
        this._llsProtocol = llsProtocol;
    };

    async getShort(){
        let shortSettingResponse = await this._llsProtocol.send(0x06);
        console.log(shortSettingResponse);
        this.shortSetting = shortSettingResponse;
        console.log(this.shortSetting);
        return this.shortSetting;
    };

    async setMaximum(){};
    async setMinimum(){};


    async setOnPeriodicData(){};
    async setOffPeriodicData(){};
    async setTimePeriodicData(){};
    async setModePeriodicData(){};


    async checkPassword(){
        // this._llsProtocol.send(0x74)
        //     .then((dataResponse)=>{
        //     return dataResponse;
        // })
        let{llsAdr, code:status} =  await this._llsProtocol.send(0x74);
        return {
            llsAdr: llsAdr,
            status: status
        }
    };
    async setNewPassword(){};

    async getErrors(){};

    async setBootMode(){};




    set shortSetting({llsAdr, temperature, level, cnt}){
        this._shortSetting.llsAdr = llsAdr;
        this._shortSetting.temperature = temperature;
        this._shortSetting.level = level;
        this._shortSetting.cnt = cnt;
    }
    get shortSetting(){
        return this._shortSetting;
    }
}