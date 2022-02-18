import llsProtocol from "./lls-protocol";

const {SerialPort} = eval(`require('serialport')`);
import LlsProtocol from "./lls-protocol";
import config from "../../config-app";

class FindLls {
    testLls = null;
    async find(){
        let list = await this.list();
        list.forEach((item, i, arr)=>{
            this.enumerationBaudRate(item.path);
        });
    }

    async enumerationBaudRate(path){
        let baudRateArr = [...config.serialPort.baudRateArr];
        baudRateArr.forEach((value, index, array) => {
            this.findLls232(path,value);
        });
    }

    async findLls232(path, baudRate, llsAdr = 0xFF){
        if (this.testLls) {
            await this.testLls.close();
            this.testLls = null;
        }
        this.testLls = new llsProtocol(path, baudRate , llsAdr);
        this.testLls.open(); //todo : convert to promise
        this.testLls.send("find232");//todo : convert to promise

    }


    async list(){
        try {
            let portList =  await SerialPort.list();
            console.log(portList);
            return portList.map((item)=>{
                return item.path;
            });
        } catch (error) {
            console.log(error);
        }
    }
}



let findPort = new FindPort();
export default findPort;


