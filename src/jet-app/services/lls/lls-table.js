export default class llsTable {
    _llsProtocol = {};

    #table = {};

    constructor(llsProtocol) {
        this._llsProtocol = llsProtocol;
    };

    async get() {
        let tableResponse = await this._llsProtocol.send(0x26);
        console.log(tableResponse);
        // this.table = tableResponse;
        // return this.table;
    };
}

