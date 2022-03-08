import {JetView} from "webix-jet";
import llsModel from "../../../models/lls-model";

export default class Calibrationsettings extends JetView {
    config() {

        let levels = {
                view:"multitext",
                inputWidth: 200,
                id:'levels',
                icon:'',
                // iconWidth:0,
                //value:"Susan Way, Dirk Gently, Clark Kent",
                subConfig:{
                    icon:''
                },
                tooltip:function(obj){
                    return "Guests: " + $$(obj.id).getValueHere();
                }
            };

        let volumes = {
            view:"multitext",
            inputWidth: 200,
            id:'volumes',
            // icon:'',
            // iconWidth:0,
            //value:"Susan Way, Dirk Gently, Clark Kent",
            subConfig:{
                // label:"Extra",
            },
            tooltip:function(obj){
                return "Guests: " + $$(obj.id).getValueHere();
            }
        };

        let body = {
            minWidth: 600,
            maxWidth: 850,
            // id: "central_menu_button_2",
            cols: [
                {
                    width: 20,
                },
                {rows:[levels,]},
                {rows:[volumes]},
            ]
        };

        return body;
    }
    listenerTable(table){

    }

    destroy() {
        super.destroy();
        llsModel.clearListenerTable(this.listenerTable);
    }

    init(){
        llsModel.addListenerTable(this.listenerTable);

        llsModel.getTable().then();

        $$("volumes").attachEvent("onSectionAdd",(id, number)=>{
             $$('levels').addSection(id + ' ' + number);
        });

        $$("volumes").attachEvent("onSectionRemove", (id, number)=>{
            $$('levels').removeSection();
        });
    }
}


