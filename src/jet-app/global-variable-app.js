import UserStorage from "./services/user-storage/user-storage";

class GlobalVariableApp {
    #userStorage = null;
    constructor() {
         this.#userStorage = new UserStorage();
    }

    #globalVariableDefault = {
        theme: 'like_system', // 'dark','light'
        language:  'like_system', // eng, ...
        autoSaveMode: true // false
    }

    get autoSaveMode(){
        return new Promise(async (resolve, reject)=>{
            let globalVariable = await this.#readGlobal();
            if(globalVariable){
                resolve(globalVariable.autoSaveMode);
            }else{
                this.#saveGlobal(this.#globalVariableDefault);
                resolve(this.#globalVariableDefault.autoSaveMode);
            }
        });
    }
    set autoSaveMode(value){
        this.#globalVariableDefault.autoSaveMode = value;
        this.#saveGlobal(this.#globalVariableDefault);
    }

    get theme(){
        return new Promise(async (resolve, reject)=>{
            let globalVariable = await this.#readGlobal();
            if(globalVariable){
                resolve(globalVariable.theme);
            }else{
                this.#saveGlobal(this.#globalVariableDefault);
                resolve(this.#globalVariableDefault.theme);
            }
        });
    }
    set theme(value){
        this.#globalVariableDefault.theme = value;
        this.#saveGlobal(this.#globalVariableDefault);
    }

    get language(){
        return new Promise(async (resolve, reject)=>{
            let globalVariable = await this.#readGlobal();
            if(globalVariable){
                resolve(globalVariable.language);
            }else{
                this.#saveGlobal(this.#globalVariableDefault);
                resolve(this.#globalVariableDefault.language);
            }
        });
    }
    set language(value){
        this.#globalVariableDefault.language = value;
        this.#saveGlobal(this.#globalVariableDefault);
    }

    #saveGlobal(globalVariable){
        console.log(globalVariable);
        this.#userStorage.set("global-variable", globalVariable);
    }

    async #readGlobal(){
        try{
            return this.#userStorage.get("global-variable");
        }catch (e) {
            return null;
        }
    }
}
let globalVariable = new GlobalVariableApp();

export default globalVariable;