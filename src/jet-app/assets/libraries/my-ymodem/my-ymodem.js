const serialPort = window.serialPort;
const Buffer = window.Buffer;

export default class MyYModem {
    port = 0;
    file = 0;
    port = serialPort;
    consoleOutput = () => {
    };
    progressCb = () => {
    };

    async yTransmit(file, portSettings, progressCb = console.log, consoleOutput = console.log) {
        this.seq = 0;
        this.port.new({path: "/dev/tty.usbserial-0001", baudRate: 19200});
        this.file = file;
        this.consoleOutput = consoleOutput;
        this.progressCb = progressCb;

        this.port.onError((msg) => {
            console.log('Error', msg);
        });
        this.port.onClose((msg) => {
            console.log("close");
        });
        this.port.onOpen(() => {
            this.port.onData( async  (data) => {
                if (data.length <= 2) {
                    for (let x = 0; x < data.length; x++) {
                        for (let key in MyYModem) {
                            if (data[x] === MyYModem[key]) {
                                this.consoleOutput('YModem received: ' + key);
                            }
                        }
                    }
                } else {
                    this.consoleOutput('SP received: ' + data.toString().trim())
                }
            })
        });
        return await this.#sendFile();
    }

    async #sendFile() {
        let resp;
        try{
            this.consoleOutput("Send StartPacket");
            resp = await this.#sendStartFrame('my_file_name', this.file.length);

            this.consoleOutput("Send DataPacket");
            resp = await this.#sendData(this.file);

            this.consoleOutput("Send ClosePacket");
            resp = await this.#sendEndFrame();

            this.consoleOutput("File is write !");
            return resp;

        }catch(e){
            this.consoleOutput("SendFile: " + e);
            throw e;
        }
    }

    async #sendStartFrame(name, fileSize) {
        let encoder = new TextEncoder();
        name = encoder.encode(name);
        fileSize = encoder.encode(fileSize);

        let header = new Uint8Array([...name, 0x00, ...fileSize]);
        let resp = 0x00;
        let data = this.#createSendFrame(header);
        for(let errorCount = 0; errorCount < MyYModem.countError; errorCount ++){
            resp = await this.#portWrite(data);
            if (resp[0] == MyYModem.ack) {
                return resp;
                break;
            }
        }
        throw "Start Packet error! ( exceeded the number of attempts)";
    };

    async #sendData(file) {
        let offset = 0;
        let end = false;
        file = new Uint8Array([...file]);
        while (!end) {
            this.seq ++;
            let lower = offset * MyYModem.packet_len;
            let higher = ((offset + 1) * MyYModem.packet_len);
            if (higher >= file.length) {
                higher = file.length;
            }
            this.progressCb({
                current: lower, total: file.length
            });
            if (lower >= file.length) {
                end = true;
            } else {
                let dataFrame = file.slice(lower, higher);
                try{
                    await this.#sendDataFrame(dataFrame);
                }catch (e){
                    console.log(e);
                    throw `Send Data Error! (packet N${this.seq} no receive)`
                }
                offset++;
            }
        }
        return 0;
    };

    #sendDataFrame(dataFrame) {
        return new Promise(async (resolve, reject) => {
            let data = this.#createSendFrame(dataFrame);
            let resp = 0;
            for(let errorCount = 0; errorCount < MyYModem.countError; errorCount ++){
                try{
                    resp = await this.#portWrite(data);
                    if (resp[0] == MyYModem.ack) {
                        resolve(resp);
                        break;
                    };
                }catch (e) {
                    reject(e);
                }
            }
            reject("Data Packet error! ( exceeded the number of attempts)");
        });
    };

    #sendEndFrame() {
        this.seq = 0;
        return new Promise(async (resolve, reject)=>{
            for (;;){
               let resp = await this.#portWrite(new Uint8Array([MyYModem.eot]));
               if(resp[0] == MyYModem.ack){
                   break;
               }
            }
            let data = this.#createSendFrame(new Uint8Array([]));
            let resp = await this.#portWrite(data);
            if(resp[0] == MyYModem.ack ){
                resolve("Success, file is write!");
            }else{
                reject("Failed, file is not write!" );
            }
        });
    };



    #createSendFrame(data) {
        let bufferNull = createArray(0x1A, MyYModem.packet_len - data.length);
        let buff = Buffer.concat([data, bufferNull], MyYModem.packet_len);

        let seqchr = new Uint8Array([this.seq & 0xFF]);
        let seqchr_neg = new Uint8Array([(-this.seq - 1) & 0xFF]);
        let crc16 = mycrc(buff);
        let packet = Buffer.concat([(new Uint8Array([MyYModem.packet_mark])), seqchr, seqchr_neg, buff, crc16]);
        if (packet.length != MyYModem.expected_packet_len) {
            throw('Packet length is wrong!');
        }
        return packet;
    }

    #portWrite(packet) {
        return new Promise((resolve, reject)=>{
            let timer;
            this.port.onceData((data)=>{
                // console.log("once data: " +  data);
                clearTimeout(timer);
                resolve(data);

            });
            this.port.write(packet);
            // console.log("write data: " +  packet);
            timer = setTimeout(()=>{reject("Error: timeout receive OnceData")}, 3000);
        });
    };
}

MyYModem.soh = 1;     // 128 byte blocks
MyYModem.stx = 2;     // 1K blocks
MyYModem.eot = 4;
MyYModem.ack = 6;
MyYModem.nak = 0x15;
MyYModem.ca = 0x18;    // 24
MyYModem.crc16 = 0x43;  // 67
MyYModem.abort1 = 0x41; // 65
MyYModem.abort2 = 0x61; // 97

MyYModem.countError = 3;

// 1K blocks does not seem to work
MyYModem.packet_len = 1024;
MyYModem.expected_packet_len = MyYModem.packet_len + 5;
MyYModem.packet_mark = MyYModem.stx;

// MyYModem.packet_len = 128;
// MyYModem.packet_mark = MyYModem.soh;
// MyYModem.expected_packet_len = MyYModem.packet_len+5;
let crc16_table = [0x0000, 0x1021, 0x2042, 0x3063, 0x4084, 0x50a5, 0x60c6, 0x70e7, 0x8108, 0x9129, 0xa14a, 0xb16b, 0xc18c, 0xd1ad, 0xe1ce, 0xf1ef, 0x1231, 0x0210, 0x3273, 0x2252, 0x52b5, 0x4294, 0x72f7, 0x62d6, 0x9339, 0x8318, 0xb37b, 0xa35a, 0xd3bd, 0xc39c, 0xf3ff, 0xe3de, 0x2462, 0x3443, 0x0420, 0x1401, 0x64e6, 0x74c7, 0x44a4, 0x5485, 0xa56a, 0xb54b, 0x8528, 0x9509, 0xe5ee, 0xf5cf, 0xc5ac, 0xd58d, 0x3653, 0x2672, 0x1611, 0x0630, 0x76d7, 0x66f6, 0x5695, 0x46b4, 0xb75b, 0xa77a, 0x9719, 0x8738, 0xf7df, 0xe7fe, 0xd79d, 0xc7bc, 0x48c4, 0x58e5, 0x6886, 0x78a7, 0x0840, 0x1861, 0x2802, 0x3823, 0xc9cc, 0xd9ed, 0xe98e, 0xf9af, 0x8948, 0x9969, 0xa90a, 0xb92b, 0x5af5, 0x4ad4, 0x7ab7, 0x6a96, 0x1a71, 0x0a50, 0x3a33, 0x2a12, 0xdbfd, 0xcbdc, 0xfbbf, 0xeb9e, 0x9b79, 0x8b58, 0xbb3b, 0xab1a, 0x6ca6, 0x7c87, 0x4ce4, 0x5cc5, 0x2c22, 0x3c03, 0x0c60, 0x1c41, 0xedae, 0xfd8f, 0xcdec, 0xddcd, 0xad2a, 0xbd0b, 0x8d68, 0x9d49, 0x7e97, 0x6eb6, 0x5ed5, 0x4ef4, 0x3e13, 0x2e32, 0x1e51, 0x0e70, 0xff9f, 0xefbe, 0xdfdd, 0xcffc, 0xbf1b, 0xaf3a, 0x9f59, 0x8f78, 0x9188, 0x81a9, 0xb1ca, 0xa1eb, 0xd10c, 0xc12d, 0xf14e, 0xe16f, 0x1080, 0x00a1, 0x30c2, 0x20e3, 0x5004, 0x4025, 0x7046, 0x6067, 0x83b9, 0x9398, 0xa3fb, 0xb3da, 0xc33d, 0xd31c, 0xe37f, 0xf35e, 0x02b1, 0x1290, 0x22f3, 0x32d2, 0x4235, 0x5214, 0x6277, 0x7256, 0xb5ea, 0xa5cb, 0x95a8, 0x8589, 0xf56e, 0xe54f, 0xd52c, 0xc50d, 0x34e2, 0x24c3, 0x14a0, 0x0481, 0x7466, 0x6447, 0x5424, 0x4405, 0xa7db, 0xb7fa, 0x8799, 0x97b8, 0xe75f, 0xf77e, 0xc71d, 0xd73c, 0x26d3, 0x36f2, 0x0691, 0x16b0, 0x6657, 0x7676, 0x4615, 0x5634, 0xd94c, 0xc96d, 0xf90e, 0xe92f, 0x99c8, 0x89e9, 0xb98a, 0xa9ab, 0x5844, 0x4865, 0x7806, 0x6827, 0x18c0, 0x08e1, 0x3882, 0x28a3, 0xcb7d, 0xdb5c, 0xeb3f, 0xfb1e, 0x8bf9, 0x9bd8, 0xabbb, 0xbb9a, 0x4a75, 0x5a54, 0x6a37, 0x7a16, 0x0af1, 0x1ad0, 0x2ab3, 0x3a92, 0xfd2e, 0xed0f, 0xdd6c, 0xcd4d, 0xbdaa, 0xad8b, 0x9de8, 0x8dc9, 0x7c26, 0x6c07, 0x5c64, 0x4c45, 0x3ca2, 0x2c83, 0x1ce0, 0x0cc1, 0xef1f, 0xff3e, 0xcf5d, 0xdf7c, 0xaf9b, 0xbfba, 0x8fd9, 0x9ff8, 0x6e17, 0x7e36, 0x4e55, 0x5e74, 0x2e93, 0x3eb2, 0x0ed1, 0x1ef0];


function mycrc(buf) {
    let data = new Uint8Array(buf);
    let dataView = new DataView(data.buffer);
    let crc =  0x00;  // 0xff - not working
    let j, i;

    for (i = 0; i < data.length; i++) {

        let c = dataView.getUint8(i);
        j = (c ^ (crc >> 8)) & 0xFF;
        crc = crc16_table[j] ^ (crc << 8);
    }
    crc = ((crc ^ 0) & 0xFFFF);
    // console.log("crc: " + crc, " len = " + data.length);
    // console.log(data);
    return new Uint8Array([(crc >> 8) & 0xFF, crc & 0xFF]);
}

function createArray(element, length){
    let arr = [];
    while(length--){
        arr.push(element);
    }
    return new Uint8Array(arr);
}
