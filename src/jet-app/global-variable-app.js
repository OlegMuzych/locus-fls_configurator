class globalVariableApp {
    #globalVariableDefault = {
        theme: 'white', // 'black',
        language:  'rus', // eng, ...
        autoSaveMode: true // false
    }

    get autoSaveMode(){
        let globalVariable = this.#readGlobal();
        if(globalVariable){
            return globalVariable.autoSaveMode
        }else{
            this.#saveGlobal(this.#globalVariableDefault);
            return this.#globalVariableDefault;
        }
    }
    set autoSaveMode(value){
        this.#globalVariableDefault.autoSaveMode = value;
        this.#saveGlobal(this.#globalVariableDefault);
    }

    get theme(){
        let globalVariable = this.#readGlobal();
        if(globalVariable){
            return globalVariable.theme
        }else{
            this.#saveGlobal(this.#globalVariableDefault);
            return this.#globalVariableDefault;
        }
    }
    set theme(value){
        this.#globalVariableDefault.theme = value;
        this.#saveGlobal(this.#globalVariableDefault);
    }

    get language(){
        let globalVariable = this.#readGlobal();
        if(globalVariable){
            return globalVariable.language
        }else{
            this.#saveGlobal(this.#globalVariableDefault);
            return this.#globalVariableDefault;
        }
    }
    set language(value){
        this.#globalVariableDefault.language = value;
        this.#saveGlobal(this.#globalVariableDefault);
    }

    #saveGlobal(globalVariable){
        webix.storage.cookie.put("global-variable", globalVariable);
    }

    #readGlobal(){
        let strJson = webix.storage.cookie.get("global-variable");
        if(strJson){
            return strJson;
        }
        return null;
    }
}
let globalVariable = new globalVariableApp();

export default globalVariable;