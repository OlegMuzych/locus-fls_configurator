const SerialPort = eval(`require('serialport')`);
import LlsProtocol from "./llsprotocol";

class FindPort {
    testLls = null;

    async findLls232(){
        if (this.testLls) {
            await this.testLls.close();
            this.testLls = null;
        }
        this.testLls = new LlsProtocol("com8", 19200, 1, "test DUT");
        this.testLls.open();
        this.testLls.commandSend();
    }


    async list(){
        try {
            let portList =  await SerialPort.list();
            console.log(portList);
        } catch (error) {
            console.log(error);
        }
    }
}

let findPort = new FindPort();
export default findPort;


