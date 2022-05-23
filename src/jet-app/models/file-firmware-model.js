import Lls from "../services/lls/lls";
import {readFileSync} from "fs";
import MyYModem from "../assets/libraries/my-ymodem/my-ymodem";

const dbPre = "FU";
const Debug = (str) => console.log(dbPre + ": " + str);

class FileFirmwareModel {

    async llsConnect({path, baudRate, llsAdr = 0xFF}) {
        this._lls = await new Lls({path, baudRate, llsAdr});
        Debug(this._lls);
    }

    async runBootMode() {
        let resp = await this._lls.actions.runBootMode();
        if (resp == 0x02) {
            Debug("Boot is success!");
        } else if (resp == 0x01) {
            Debug("Boot error!");
        }
    }

    async runDownloadApp() {
        let resp = await this._lls.actions.runDownloadApp();
        if (resp == 0x02) {
            Debug("Boot is success!");
        } else if (resp == 0x01) {
            Debug("Boot error!");
        }
    }

    async llsClose() {
        await this._lls.close();
    }

    async writeFirmware(firmwarePath, serialPortSettings) {
        let progressCallback = (val) => {
            console.log(Math.round(val.current * 100 / val.total) + '%');
        }
        // YModem1.transfer(firmwarePath, progressCallback, serialPortSettings);
        // YModem2.sendFile(firmwarePath, progressCallback, serialPortSettings);
        let file = window.fs.readFileSync(firmwarePath);
        const ymodem = new MyYModem();
        ymodem.yTransmit(file, serialPortSettings, progressCallback)
            .then((resp) => {
                console.log(resp);
            })
            .catch(e => {
                console.log(e);
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