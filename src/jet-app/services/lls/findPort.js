// import llsProtocol from "./lls-protocol";

// const {SerialPort} = eval(`require('serialport')`);
import config from "../../config-app";
import Lls from "./lls";

class FindLls {
    testLls = null;
    flag = false;

    async setStop() {
        this.stopFlag = true;
        return new Promise(resolve => {
            let interval = setInterval(async () => {
                if (!this.flag) {
                    clearInterval(interval);
                    if (this.testLls) {
                        await this.testLls.close();
                        this.testLls = null;
                    }
                    resolve();
                }
            }, 1000);
        });
    }

    async findLls232() {
        this.stopFlag = false;
        let listPath = await this.listPath();
        return await this.sortingPath(listPath);
    }

    async sortingPath(listPath) {
        for (let i = 0; i < listPath.length; i++) {
            if(this.stopFlag) break;
            let data = await this.sortingBaudrate(listPath[i]);
            if (data) return data;
        }
    }

    async sortingBaudrate(path) {
        let baudRateArr = [...config.serialPort.baudRateArr];
        for (let i = 0; i < baudRateArr.length; i++) {
            if(this.stopFlag) break;
            let data = await this.checkCommand(path, baudRateArr[i]);
            if (data) return data;
        }

    }

    async checkCommand(path, baudRate) {
        if (!this.stopFlag) {
            this.flag = false;
            if (this.testLls) {
                await this.testLls.close();
                this.testLls = null;
            }
            try {
                this.testLls = await new Lls({path: path, baudRate: baudRate, llsAdr: 0xFF});
                let data = await this.testLls.actions.checkPassword();
                let settingPort = {
                    llsAdr: data.llsAdr,
                    path: path,
                    baudRate: baudRate
                };
                await this.testLls.close();
                this.testLls = null;

                this.flag = false;
                return settingPort;
            } catch (e) {
                this.flag = false;
                // console.log(e);
            }
        }
    }

    async listPath() {
        try {
            // let portList = await SerialPort.list();
            let portList = await window.serialPort.portList();
            // console.log(portList);
            return portList.map((item) => {
                return item.path;
            });
        } catch (error) {
            console.log(error);
        }
    }
}

// let findPort = new FindLls();

export default FindLls;


