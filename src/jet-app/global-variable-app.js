import UserStorage from "./services/user-storage/user-storage";

class GlobalVariableApp {
    #globalVariable = {
        autoSaveMode: "true",
        theme: "like_system",
        language: "like_system"

    }
    #userStorage = null;
    constructor() {
         this.#userStorage = new UserStorage();
    }

    get autoSaveMode(){
        return new Promise(async (resolve, reject)=>{
            let autoSaveMode = await this.#readGlobal('autoSaveMode');
            if(autoSaveMode != null){
                this.#globalVariable.autoSaveMode = autoSaveMode;
                resolve(autoSaveMode);
            }else{
                this.#saveGlobal('autoSaveMode',this.#globalVariable.autoSaveMode);
                resolve(this.#globalVariable.autoSaveMode);
            }
        });
    }

    set autoSaveMode(value){
        this.#globalVariable.autoSaveMode = value;
        this.#saveGlobal('autoSaveMode',this.#globalVariable.autoSaveMode);
    }

    get language(){
        return new Promise(async (resolve, reject)=>{
            let language = await this.#readGlobal('language');
            if(language){
                this.#globalVariable.language = language;
                resolve(language);
            }else{
                this.#saveGlobal('language',this.#globalVariable.language);
                resolve(this.#globalVariable.language);
            }
        });
    }

    set language(value){
        this.#globalVariable.language = value;
        this.#saveGlobal('language',this.#globalVariable.language);
    }

    get theme(){
        return new Promise(async (resolve, reject)=>{
            let theme = await this.#readGlobal('theme');
            if(theme){
                this.#globalVariable.theme = theme;
                resolve(theme);
            }else{
                this.#saveGlobal('theme',this.#globalVariable.theme);
                resolve(this.#globalVariable.theme);
            }
        });
    }

    set theme(value){
        this.#globalVariable.theme = value;
        this.#saveGlobal('theme',this.#globalVariable.theme);
    }

    async #readGlobal(nameKey){
        try{
            return await this.#userStorage.get(nameKey);
        }catch (e) {
            return null;
        }
    }

    #saveGlobal(nameKey, data){
        console.log(nameKey +": "+ data);
        this.#userStorage.set(nameKey, data);
    }

    // #userStorage = null;
    // constructor() {
    //      this.#userStorage = new UserStorage();
    // }
    //
    // #globalVariableDefault = {
    //     theme: 'like_system', // 'dark','light'
    //     language:  'like_system', // eng, ...
    //     autoSaveMode: true // false
    // }
    //
    // get autoSaveMode(){
    //     return new Promise(async (resolve, reject)=>{
    //         let globalVariable = await this.#readGlobal();
    //         if(globalVariable){
    //             this.#globalVariableDefault = globalVariable;
    //             resolve(globalVariable.autoSaveMode);
    //         }else{
    //             this.#saveGlobal(this.#globalVariableDefault);
    //             resolve(this.#globalVariableDefault.autoSaveMode);
    //         }
    //     });
    // }
    // set autoSaveMode(value){
    //     this.#globalVariableDefault.autoSaveMode = value;
    //     this.#saveGlobal(this.#globalVariableDefault);
    // }
    //
    // get theme(){
    //     return new Promise(async (resolve, reject)=>{
    //         let globalVariable = await this.#readGlobal();
    //         if(globalVariable){
    //             this.#globalVariableDefault = globalVariable;
    //             resolve(globalVariable.theme);
    //         }else{
    //             this.#saveGlobal(this.#globalVariableDefault);
    //             resolve(this.#globalVariableDefault.theme);
    //         }
    //     });
    // }
    // set theme(value){
    //     this.#globalVariableDefault.theme = value;
    //     this.#saveGlobal(this.#globalVariableDefault);
    // }
    //
    // get language(){
    //     return new Promise(async (resolve, reject)=>{
    //         let globalVariable = await this.#readGlobal();
    //         if(globalVariable){
    //             this.#globalVariableDefault = globalVariable;
    //             resolve(globalVariable.language);
    //         }else{
    //             this.#saveGlobal(this.#globalVariableDefault);
    //             resolve(this.#globalVariableDefault.language);
    //         }
    //     });
    // }
    // set language(value){
    //     this.#globalVariableDefault.language = value;
    //     this.#saveGlobal(this.#globalVariableDefault);
    // }
    //
    // #saveGlobal(globalVariable){
    //     console.log(globalVariable);
    //     this.#userStorage.set("global-variable", globalVariable);
    // }
    //
    // async #readGlobal(){
    //     try{
    //         return this.#userStorage.get("global-variable");
    //     }catch (e) {
    //         return null;
    //     }
    // }
}
let globalVariable = new GlobalVariableApp();

export default globalVariable;