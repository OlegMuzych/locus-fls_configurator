const SerialPort = eval(`require('serialport')`);
import LlsProtocol from "./llsprotocol";
import config from "../../config-app";

class FindPort {
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
            this.findLls232(path,value,1);
        });
    }

    async findLls232(port, baudRate, llsAdr){
        if (this.testLls) {
            await this.testLls.close();
            this.testLls = null;
        }
        this.testLls = new LlsProtocol(port, baudRate, llsAdr, "test DUT");
        this.testLls.open(); //todo : convert to promise
        this.testLls.send("find232");//todo : convert to promise
    }

    async list(){
        try {
            let portList =  await SerialPort.list();
            console.log(portList);
            return portList;
        } catch (error) {
            console.log(error);
        }
    }
}



let findPort = new FindPort();
export default findPort;


