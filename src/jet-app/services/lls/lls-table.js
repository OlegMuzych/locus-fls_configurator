export default class llsTable {
    _llsProtocol = {};

    #table = {};

    constructor(llsProtocol) {
        this._llsProtocol = llsProtocol;
    };

    async get() {
        let tableResponse = await this._llsProtocol.send(0x26,null,3000);
        console.log(tableResponse);
        this.table = tableResponse;
        return this.table;
    };

    async set({levels, volumes, countPoint}) {

        let newTable = {
            levels: levels,
            volumes: volumes,
            countPoint: countPoint
        }

        let {code: status} = await this._llsProtocol.send(0x27, newTable, 3000); //3000
        return {
            status: status,
        }
    }

    set table({countPoint, levels, volumes}){
        this.#table.countPoint = countPoint;
        this.#table.levels = levels;
        this.#table.volumes = volumes;
    }

    get table(){
        return this.#table;
    }
}

