class Trademark{
    #currentTrademark = "p-m";
    setTradeMark(name){
        this.#currentTrademark = name;
    }

    _t(valueTrade){
        let trademarkData = require('./' + "p-m");
        // console.log(trademarkData.default);
        // console.log(trademarkData.default[valueTrade]);
        if(trademarkData.default[valueTrade] == undefined){
            return valueTrade;
        }
        return trademarkData.default[valueTrade];
    }

    getLocale(){
        return this.#currentTrademark;
    }
}

let trademark = new Trademark;
export default trademark;