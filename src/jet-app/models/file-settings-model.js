const fs = window.fs;

class FileSettingsModel {

    async write(settings) {
        return new Promise(async (resolve, reject)=>{
            let stringJson = JSON.stringify(settings);
            if (stringJson == undefined) {
                reject();
            }
            let filePath = await this.#saveDialog();
            if (!filePath) {
                reject();
            }
            filePath = this.#pathAddDotJson(filePath); //add '.json' if need
            let ret = await fs.writeFile(filePath, stringJson);

            if(ret == undefined){
                resolve();
            }else{
                reject();
            }
        });
    }

    async read() {
        return new Promise(async (resolve, reject)=>{
            let filePath = await this.#openDialog();
            if (!filePath) {
                reject();
            }
            let strJson = await fs.readFile(filePath, 'UTF-8');
            // console.log(strJson);
            let settings = JSON.parse(strJson);
            // console.log(settings);
            if(!settings.llsAdr){
                reject();
            }

            resolve(settings);
        });
    }

    async #saveDialog() {
        const dialogConfig = {
            title: 'Выберите папку для сохранения файла с настройками',
            buttonLabel: 'Сохранить',
        };
        let {filePath} = await window.electron.openDialog('showSaveDialog', dialogConfig);
        console.log(filePath);
        return filePath;
    }

    async #openDialog() {
        const dialogConfig = {
            title: 'Выберите файл с настройками',
            buttonLabel: 'Импортировать',
            properties: ['openFile'],
            filters: [
                {name: 'Файл настройки', extensions: ['json']},
                {name: 'Все файлы', extensions: ['*']}
            ]
        };
        let {filePaths} = await window.electron.openDialog('showOpenDialog', dialogConfig);
        console.log(filePaths[0]);
        return filePaths[0];
    }


    #pathAddDotJson(path){
        let pathArr = path.split('.');
        if(pathArr[pathArr.length - 1] == 'json'){
            return path;
        }else{
            return (path + '.json');
        }
    }
}

let fileSettingsModel = new FileSettingsModel();

export default fileSettingsModel;