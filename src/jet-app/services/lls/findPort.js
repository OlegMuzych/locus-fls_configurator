import llsProtocol from "./lls-protocol";

const {SerialPort} = eval(`require('serialport')`);
import config from "../../config-app";
import Lls from "./lls";

class FindLls {
    testLls = null;

    async findLls232() {
        let listPath = await this.listPath();
        return await this.sortingPath(listPath);
    }

    async sortingPath(listPath) {
        for(let i = 0; i < listPath.length; i++){
            let data = await this.sortingBaudrate(listPath[i]);
            if(data) return data;
        }
    }

    async sortingBaudrate(path) {
        let baudRateArr = [...config.serialPort.baudRateArr];
        for(let i = 0; i < baudRateArr.length; i++){
           let data = await this.checkCommand(path,baudRateArr[i]);
           if(data) return data;
        }
    }

    async checkCommand(path, baudRate) {
        if (this.testLls) {
            await this.testLls.close();
            this.testLls = null;
        }
        try {
            this.testLls = await new Lls({portName: path, baudRate: baudRate, llsData: 0xFF});
            let data = await this.testLls.actions.checkPassword();
            let settingPort = {
                llsAdr: data.llsAdr,
                path: path,
                baudRate: baudRate
            }
            return settingPort;
        } catch (e) {
            console.log(e);
        }
    }

    async listPath() {
        try {
            let portList = await SerialPort.list();
            console.log(portList);
            return portList.map((item) => {
                return item.path;
            });
        } catch (error) {
            console.log(error);
        }
    }
}

let findPort = new FindLls();
export default findPort;


