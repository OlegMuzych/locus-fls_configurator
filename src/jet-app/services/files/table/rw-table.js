const fs = window.fs;
class RwTable{

    async write(){
        let filePath = await this.#saveDialog();
        if(filePath){
            await fs.writeFile(filePath + '.csv', "hello csv");
        }
    }

    async read(){
        let filePath = await this.#openDialog();
        if(filePath){
            let text = await fs.readFile(filePath);
            console.log(text);
            return text;
        }
    }



    async #saveDialog(){
        const dialogConfig = {
            title: 'Выберите папку для сохранения файла с таблцей',
            buttonLabel: 'Сохранить',
        };
        let {filePath} = await window.electron.openDialog('showSaveDialog', dialogConfig);
        console.log(filePath);
        return filePath;
    }

    async #openDialog(){
        const dialogConfig = {
            title: 'Выберите файл с таблицой',
            buttonLabel: 'Импортировать',
            properties: ['openFile'],
            filters: [
                { name: 'Файл таблицы', extensions: ['csv'] },
                { name: 'Все файлы', extensions: ['*'] }
            ]
        };
        let {filePaths} = await window.electron.openDialog('showOpenDialog', dialogConfig);
        console.log(filePaths[0]);
        return filePaths[0];
    }
}

let rwTable = new RwTable();

export default rwTable;