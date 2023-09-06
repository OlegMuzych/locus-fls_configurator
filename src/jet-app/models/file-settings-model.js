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

    async writeXML(settings) {
        return new Promise(async (resolve, reject)=>{
            let stringXML = this.#createXML(settings);
            if (stringXML == undefined) {
                reject();
            }
            let filePath = await this.#saveDialog();
            if (!filePath) {
                reject();
            }
            filePath = this.#pathAddDotXML(filePath); //add '.json' if need
            let ret = await fs.writeFile(filePath, stringXML);

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
            let settings = {};
            if(filePath.split('.').pop() === 'xml'){
                let xmlString = await fs.readFile(filePath, 'UTF-8');
                settings = this.#readXML(xmlString);
            }
            if(filePath.split('.').pop() === 'json'){
                let strJson = await fs.readFile(filePath, 'UTF-8');
                // console.log(strJson);
                settings = JSON.parse(strJson);
            }
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
                {name: 'Файл настройки JSON', extensions: ['json']},
                {name: 'Файл настройки XML', extensions: ['XML']},
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
    #pathAddDotXML(path){
        let pathArr = path.split('.');
        if(pathArr[pathArr.length - 1] == 'xml'){
            return path;
        }else{
            return (path + '.xml');
        }
    }

    #createXML(obj){
        const doc = document.implementation.createDocument("", "", null);
        const peopleElem = doc.createElement("people");
        for (let key in obj) {
            // ключи
            const personElem1 = doc.createElement("person");
            personElem1.setAttribute("key", key);
            personElem1.setAttribute("value", obj[key]);
            peopleElem.appendChild(personElem1);
        }
        doc.appendChild(peopleElem);
        const serializer = new XMLSerializer();
        const xmlStr = serializer.serializeToString(doc);
        console.log(xmlStr);
        return xmlStr;
    }

    #readXML(xmlStr){
        const oParser = new DOMParser();
        const oDOM = oParser.parseFromString(xmlStr, "application/xml");
        let settingsObj = {};
        oDOM.childNodes[0].childNodes.forEach(item=>{
            if(item.localName === 'person'){
                settingsObj[item.attributes[0].value] = item.attributes[1].value;
            }
        })
        console.log(settingsObj);
        let settings = {};
        for(let key in settingsObj){
            let value = settingsObj[key].split(",");
            if(value.length === 1){
                settings[key] = Number(value[0]);
            }else if(value.length > 1){
                settings[key] = value.map(item=>Number(item));
            }
        }
        console.log(settings);
        return settings;
    }
}

let fileSettingsModel = new FileSettingsModel();

export default fileSettingsModel;
