const fs = window.fs;
const CSV = window["csv-string"];

class FileTableModel {

    async write(table) {
        return new Promise(async (resolve, reject)=>{
            let tableArr = this.#tableToArray(table);
            if (tableArr == undefined) {
                reject();
            }
            let str = CSV.stringify(tableArr, ';');
            let filePath = await this.#saveDialog();
            if (!filePath) {
                reject();
            }
            filePath = this.#pathAddDotCsv(filePath); //add '.csv' if need
            let ret = await fs.writeFile(filePath, str);

            if(ret == undefined){
                resolve();
            }else{
                reject();
            }
        });
    }

    async writeXML(table) {
        return new Promise(async (resolve, reject)=>{
            let tableArr = this.#tableToArray(table);
            if (tableArr == undefined) {
                reject();
            }
            // let str = CSV.stringify(tableArr, ';');
            let str = this.#createXML(tableArr);
            let filePath = await this.#saveDialog();
            if (!filePath) {
                reject();
            }
            filePath = this.#pathAddDotXml(filePath); //add '.xml' if need
            let ret = await fs.writeFile(filePath, str);

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
            let tableArr = [];
            if(filePath.split('.').pop() === 'csv'){
                let str = await fs.readFile(filePath, 'UTF-8');
                console.log(str);
                tableArr = CSV.parse(str, {comma:';'});
                console.log(tableArr);
            }
            if(filePath.split('.').pop() === 'xml'){
                let strXml = await fs.readFile(filePath, 'UTF-8');
                tableArr = this.#readXML(strXml);
            }

            if(!Array.isArray(tableArr)){
                reject();
            }
            if(tableArr.length > 30){
                reject();
            }
            if(tableArr.length < 2){
                reject();
            }

            let table = this.#arrayToTable(tableArr);

            resolve(table);
        });
    }

    #tableToArray(table){
        //table.countPoint, table.levels, table.volumes
        let arrTable = [];
        for(let i = 0; i< table.countPoint; i++){
            let arrRow = [i+1, table.levels[i], table.volumes[i]];
            arrTable.push(arrRow);
        }
        console.log(arrTable);
        return arrTable;
    }

    #arrayToTable(tableArr){
        let levels = this.#initArray(30);
        let volumes = this.#initArray(30);
        let countPoint = tableArr.length;
        for(let i = 0; i < countPoint; i++){
            levels.splice(i, 1,tableArr[i][1]);
            volumes.splice(i, 1,tableArr[i][2]);
        }
        let table = {
            levels: levels,
            volumes:volumes,
            countPoint:countPoint
        }
        console.log(table);
        return table;
    }

    async #saveDialog() {
        const dialogConfig = {
            title: 'Выберите папку для сохранения файла с таблицей',
            buttonLabel: 'Сохранить',
        };
        let {filePath} = await window.electron.openDialog('showSaveDialog', dialogConfig);
        console.log(filePath);
        return filePath;
    }

    async #openDialog() {
        const dialogConfig = {
            title: 'Выберите файл с таблицой',
            buttonLabel: 'Импортировать',
            properties: ['openFile'],
            filters: [
                {name: 'Файл таблицы JSON', extensions: ['csv']},
                {name: 'Файл таблицы XML', extensions: ['xml']},
                {name: 'Все файлы', extensions: ['*']}
            ]
        };
        let {filePaths} = await window.electron.openDialog('showOpenDialog', dialogConfig);
        console.log(filePaths[0]);
        return filePaths[0];
    }

    #initArray(count){
        let arr = new Array(count);
        for(let i = 0; i < arr.length; i++){
            arr[i] = 0;
        }
        return arr;
    }

    #pathAddDotCsv(path){
        let pathArr = path.split('.');
        if(pathArr[pathArr.length - 1] == 'csv'){
            return path;
        }else{
            return (path + '.csv');
        }
    }

    #pathAddDotXml(path){
        let pathArr = path.split('.');
        if(pathArr[pathArr.length - 1] == 'xml'){
            return path;
        }else{
            return (path + '.xml');
        }
    }
    #createXML(tableArr){
        const doc = document.implementation.createDocument("", "", null);
        const peopleElem = doc.createElement("people");
        tableArr.forEach( item =>{
            const personElem1 = doc.createElement("person");
            personElem1.setAttribute("step", item[0]);
            personElem1.setAttribute("value", item[1]);
            personElem1.setAttribute("volume", item[2]);
            peopleElem.appendChild(personElem1);
        });
        doc.appendChild(peopleElem);
        const serializer = new XMLSerializer();
        const xmlStr = serializer.serializeToString(doc);
        console.log(xmlStr);
        return xmlStr;
    }
    #readXML(xmlStr){
        const oParser = new DOMParser();
        const oDOM = oParser.parseFromString(xmlStr, "application/xml");
        let tableArr = [];
        oDOM.childNodes[0].childNodes.forEach(item=>{
            if(item.localName === 'person'){
                tableArr.push([item.attributes[0].value,item.attributes[1].value,item.attributes[2].value]);
            }
        })
        console.log(tableArr);
        return tableArr;
    }

}



let fileTableModel = new FileTableModel();

export default fileTableModel;
