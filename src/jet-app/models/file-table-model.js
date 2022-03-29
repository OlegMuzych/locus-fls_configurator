const fs = window.fs;
const CSV = window["csv-string"];

class FileTableModel {

    async write(table) {
        return new Promise(async (resolve, reject)=>{
            let tableArr = this.#tableToArray(table);
            if (!tableArr) {
                reject();
            }
            let str = CSV.stringify(tableArr, ';');
            let filePath = await this.#saveDialog();
            if (!filePath) {
                reject();
            }
            let ret = await fs.writeFile(filePath + '.csv', str);

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
            let str = await fs.readFile(filePath, 'UTF-8');
            console.log(str);
            let tableArr = CSV.parse(str, {comma:';'});
            console.log(tableArr);
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
            title: 'Выберите папку для сохранения файла с таблцей',
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
                {name: 'Файл таблицы', extensions: ['csv']},
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
}



let fileTableModel = new FileTableModel();

export default fileTableModel;