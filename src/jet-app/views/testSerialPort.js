import {JetView} from "webix-jet";
import findPort from "../models/lls/findPort";
import Lls from "../models/lls/lls";
import DataView from "./data";

export default class StartView extends JetView {
    config() {
        let comboSerial = {
            localId: "comboSerial",
            view: "combo",
            label: 'Combo',
            options: ["One", "Two", "Three"]
        };
        let buttonInitPort = {
            view: "button",
            localId: "buttonInitPort",
            value: "Init Port",
            inputWidth: 100
        }
        let buttonShortData = {
            view: "button",
            localId: "buttonShortData",
            value: "Short Data",
            inputWidth: 100
        };
        return {
            rows: [
                {type: "header", template: "Dashboard"},
                /*wjet::Settings*/
                comboSerial,
                {
                    cols:[
                        buttonInitPort,buttonShortData
                    ]
                }
            ]
        }
    }
    lls = null;
    init(_$view, _$) {
        this.$$("comboSerial").attachEvent("onItemClick", async (id, e) => {
            let listPort = await findPort.list();
            this.$$(id).define({
                options: listPort,
            });
            this.$$(id).refresh();
        });

        this.$$("comboSerial").define({
            options: findPort.list(),
        });
        this.$$("comboSerial").refresh();

        this.$$('buttonInitPort').attachEvent("onItemClick", async (id, e) => {
            console.log('click');
            if(this.lls){
                this.lls.close().then();
            }
            this.lls = new Lls(this.$$('comboSerial').getValue().toString());
        });

        this.$$('buttonShortData').attachEvent("onItemClick", async (id, e) => {
            // let buffer = new Uint8Array([255, 255, 255, 255]).buffer;
            // let dataView = new DataView(buffer);
            // let a = dataView.getUint16(1);

            console.log('click');
            this.lls.data.getShort().then();
        });
    }

    destroy(){
        if(this.lls){
            this.lls.close().then();
        }
    }
}