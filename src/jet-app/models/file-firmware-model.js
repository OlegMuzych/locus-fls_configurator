import Lls from "../services/lls/lls";
import {readFileSync} from "fs";
import MyYModem from "../services/my-ymodem/my-ymodem";

const dbPre = "FU";
const Debug = (str) => console.log(dbPre + ": " + str);

class FileFirmwareModel {

    async llsConnect({path, baudRate, llsAdr = 0xFF}) {
        this._lls = await new Lls({path, baudRate, llsAdr});
        Debug(this._lls);
        return this._lls;
    }

    async promiseBootLoad(){
        let resp = await this._lls.actions.promiseBootLoad();
            // return "BootLoad Welcome Send";
        if (resp == 0x00) {
            Debug("BootLoad Welcome Send");
            return "BootLoad Welcome Send";
        }
    }

    async runBootMode() {
        let resp = await this._lls.actions.runBootMode();
        if (resp == 0x02) {
            Debug("Boot is success!");
            return "Boot is success!";
        } else if (resp == 0x01) {
            Debug("Boot error!");
            throw "Boot error!";
        }
    }

    runDownloadApp() {
        return new Promise((resolve, reject) => {
            this._lls.actions.runDownloadApp().then();
            setTimeout(() => {
                resolve("runDownLoadApp");
            }, 3000); //тк ответа не последует, установлю таймер.
        });
    }

    async llsClose() {
        if(this._lls){
            return await this._lls.close();
            // delete this._lls;
        }
        return;
    }

    async writeFirmware(firmwarePath, serialPortSettings, progressCB) {
        return new Promise((resolve, reject)=>{
            let progressCallback = (val) => {
                // console.log(Math.round(val.current * 100 / val.total) + '%');
                let progress = Math.round(val.current * 100 / val.total);
                console.log(progress + '%');
                progressCB(progress);
            }
            if(firmwarePath == ''){
                throw "firmwarePath is not valid !";
            }
            let file = window.fs.readFileSync(firmwarePath);
            const ymodem = new MyYModem();
            ymodem.yTransmit(file, serialPortSettings, progressCallback)
                .then((resp) => {
                    console.log(resp);
                    resolve(resp);
                })
                .catch(e => {
                    console.log(e);
                    reject(e);
                });
        });
    }

    async choiceFirmware() {
        let filePath = await this.#openDialog();
        return filePath;
    }

    async #openDialog() {
        const dialogConfig = {
            title: 'Выберите файл пошивки',
            buttonLabel: 'Выбрать',
            properties: ['openFile'],
            filters: [
                {name: 'Файл прошивки', extensions: ['bin']},
                {name: 'Все файлы', extensions: ['*']}
            ]
        };
        let {filePaths} = await window.electron.openDialog('showOpenDialog', dialogConfig);
        console.log(filePaths[0]);
        return filePaths[0];
    }
}

let fileFirmwareModel = new FileFirmwareModel();
export default fileFirmwareModel;