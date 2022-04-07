const fs = window.fs;

export default class UserStorage{
    // #path = null;

    constructor(){
        // window.electron.app('getPath', "userData")
        //     .then((path)=>{
        //         this.#path = path;
        //         return fs.access(this.#path + '/' + 'userStorage');
        //     })
        //     .then(()=>{
        //         console.log("file userStorage is find");
        //     })
        //     .catch(async ()=>{
        //         await fs.writeFile(this.#path + '/' + 'userStorage', '{"test":"test_string"}');
        //         console.log("file userStorage is create");
        //     });
    }

    async get(name){
        let userStorage = await this.#getUserStorage();
        return userStorage[name];
    }
    async set(name, data){
        let userStorage = await this.#getUserStorage();
        userStorage[name]= data;
        this.#setUserStorage(userStorage);
    }


    async #getUserStorage(){
        let jsonStr = await this.#readFile();
        return JSON.parse(jsonStr);
    }

    #setUserStorage(userStorage){
        let jsonStr = JSON.stringify(userStorage);
        this.#writeFile(jsonStr).then();
    }

    async #writeFile(file){
        let path = await this.#getPath();
        fs.writeFile(path, file).then();
    }

    async #readFile(){
        let path = await this.#getPath();
        let file = await fs.readFile(path, 'UTF-8');
        return file;
    }

    async #getPath(){
        let path = await window.electron.app('getPath', "userData");
        try{
            await fs.access(path + '/' + 'userStorage');
            console.log("file userStorage is find");
            return path + '/' + 'userStorage';
        }catch(err){
            await fs.writeFile(path + '/' + 'userStorage', '{"test":"test_string"}');
            console.log("file userStorage is create");
            return path + '/' + 'userStorage';
        }}

}
