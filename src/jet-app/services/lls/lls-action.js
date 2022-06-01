export default class llsAction {
    _llsProtocol = {};

    constructor(llsProtocol) {
        this._llsProtocol = llsProtocol;
    };

    // async getShort(){
    //     let shortSettingResponse = await this._llsProtocol.send(0x06);
    //     console.log(shortSettingResponse);
    //     this.shortSetting = shortSettingResponse;
    //     console.log(this.shortSetting);
    //     return this.shortSetting;
    // };

    async setMaximum() {
        let {llsAdr, code: status} = await this._llsProtocol.send(0x09);
        return {
            llsAdr: llsAdr,
            status: status,
        }
    };

    async setMinimum() {
        let {llsAdr, code: status} = await this._llsProtocol.send(0x08);
        return {
            llsAdr: llsAdr,
            status: status,
        }
    };


    async setOnPeriodicData() {
    };

    async setOffPeriodicData() {
    };

    async setTimePeriodicData() {
    };

    async setModePeriodicData() {
    };


    async checkPassword() {
        let {llsAdr, code: status} = await this._llsProtocol.send(0x74, null, 1000);
        return {
            llsAdr: llsAdr,
            status: status
        }
    };

    async setCurrentPassword(value) {
        this._llsProtocol.password = value;
        return await this.checkPassword();
    };

    async setNewPassword(currentPassword, newPassword) {
        let zeroPass1 = [0, 0, 0, 0, 0, 0, 0, 0];
        let zeroPass2 = [0, 0, 0, 0, 0, 0, 0, 0];
        let currentPassArr = currentPassword.split('');
        let newPassArr = newPassword.split('');
        if (currentPassArr.length <= 8) {
            zeroPass1.splice(0, currentPassArr.length, ...currentPassArr);
        } else {
            return 0;
        }

        if (newPassArr.length <= 8) {
            zeroPass2.splice(0, newPassArr.length, ...newPassArr);
        } else {
            return 0;
        }

        let {llsAdr, code: status} = await this._llsProtocol.send(0x16, {
            currentPassword: zeroPass1,
            newPassword: zeroPass2
        });
        if (status == 0x00) {
            this._llsProtocol.password = newPassword;
        }
        return {
            llsAdr: llsAdr,
            status: status,
        }
    };

    async getErrors() {
    };

    async runBootMode() {
        let {llsAdr, code: status} = await this._llsProtocol.send(0x67);
        return {
            llsAdr: llsAdr,
            status: status,
        }
    };

    async runDownloadApp() { //ответа не будет, не совподает стандартному шаблону ответа
        let {code: status} = await this._llsProtocol.send(0x68);
        return {
            status: status,
        }
    }

    async resetLls() {
        let {llsAdr, code: status} = await this._llsProtocol.send("reset");
        return {
            llsAdr: llsAdr,
            status: status,
        }
    };

    // async promiseBootLoad() {
    //     await this._llsProtocol.promiseBootLoad();
    //     return {status: 0x00};
    // }

    async promiseBootLoad() {
        let {llsAdr = 0xff, code: status} = await this._llsProtocol.promiseBootLoad();
        return {
            llsAdr: llsAdr,
            status: status,
        }
    }


    // set shortSetting({llsAdr, temperature, level, cnt}){
    //     this._shortSetting.llsAdr = llsAdr;
    //     this._shortSetting.temperature = temperature;
    //     this._shortSetting.level = level;
    //     this._shortSetting.cnt = cnt;
    // }
    // get shortSetting(){
    //     return this._shortSetting;
    // }
}