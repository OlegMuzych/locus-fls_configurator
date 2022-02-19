import {JetView} from "webix-jet";
import findPort from "../services/lls/findPort";
import Lls from "../services/lls/lls";
// import llsModel from '../models/lls-model';

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
        let buttonLlsModel = {
            view: "button",
            localId: "buttonLlsModel",
            value: "llsModel",
            inputWidth: 100
        };
        return {
            rows: [
                {type: "header", template: "Dashboard"},
                /*wjet::Settings*/
                comboSerial,
                {
                    cols:[
                        buttonInitPort,buttonShortData,buttonLlsModel
                    ]
                }
            ]
        }
    }
    lls = null;
    init(_$view, _$) {

        let goEngineering = (code, e)=> {
            console.log(e);
            if (e.altKey && e.ctrlKey && e.code == "KeyT") {
                console.log("OPEN ENGINEERING MENU");
                webix.message("OPEN ENGINEERING MENU");
                this.app.show("/win");
            }
        }
        this.$$("comboSerial").attachEvent("onKeyPress", goEngineering);

        this.$$("comboSerial").attachEvent("onItemClick", async (id, e) => {
            let listPort = await findPort.listPath();
            this.$$(id).define({
                options: listPort,
            });
            this.$$(id).refresh();
        });

        this.$$("comboSerial").define({
            options: findPort.listPath(),
        });
        this.$$("comboSerial").refresh();

        this.$$('buttonInitPort').attachEvent("onItemClick", async (id, e) => {
            console.log('click');
            if(this.lls){
                this.lls.close().then();
            }
            try{
                this.lls = await new Lls({portName: this.$$('comboSerial').getValue().toString()});
            }catch(e){
                console.log(e);
            }
        });

        this.$$('buttonShortData').attachEvent("onItemClick", async (id, e) => {
            // let buffer = new Uint8Array([255, 255, 255, 255]).buffer;
            // let dataView = new DataView(buffer);
            // let a = dataView.getUint16(1);

            console.log('click');
            //await this.lls.data.getShort();
            // try{
            //     let res = await this.lls.actions.checkPassword();
            //     console.log(res);
            //     if(res){
            //     }
            // }catch(e){
            //     console.log(e);
            // }
            // await this.lls.close();

            // try{
            //    let settings = await findPort.findLls2();
            //    console.log(settings)
            // }catch(e){
            //     console.log(e);
            // }
            try{
                this.lls = await new Lls({portName: this.$$('comboSerial').getValue().toString()});
                let data = await this.lls.actions.checkPassword();
                console.log(data);
            }catch(e){
                console.log(e);
            }


        });

        this.$$('buttonLlsModel').attachEvent("onItemClick", async (id, e) => {
            console.log('click');
            // llsModel.onShortData((shortData)=>{
            //     console.log(shortData);
            // });

            try{
               let settings = await findPort.findLls232();
               console.log(settings)
            }catch(e){
                console.log(e);
            }
        });
    }

    destroy(){
        if(this.lls){
            this.lls.close().then();
        }
    }
}