import {JetView} from "webix-jet";
import configFile from "../../../config-app";
import llsModel from "../../../models/lls-model";
// import {setTheme} from "@vercel/webpack-asset-relocator-loader";

export default class AutoLevelWindow extends JetView {
    config() {
        const _ = this.app.getService("locale")._;

        let elements = {
            rows: [
                {},
                {
                   cols:[
                       {},
                       {
                           view: "label",
                           label: `<p style='font-size: 26px; position: relative; top: -26px; font-weight: 100;'>${_("level_auto_calculate")}</p>`,
                           width: 550,
                           localId: "header_label",
                           css: "windows_password_label",
                       },
                       {}
                   ]
                },
                {},
                {
                    cols: [
                        {},

                        {
                            view: "label",
                            label: `<p style='font-size: 26px; position: relative; top: -26px; font-weight: 100;'>${_("length_measuring_part")}</p>`,
                            width: 550,
                            localId: "windows_password_label",
                            css: "windows_password_label",
                        },
                        {
                            view: "text",
                            width: 100,
                            height:60,
                            css: "password_windows_set",
                            validate: ()=>{return this.passValidFlag},
                            invalidMessage: _("window_password_invalid_message"),
                            localId: "lengthLabel",
                            pattern:{ mask:"###", allow:/[0-9]/g}
                        },
                        {}
                    ]
                },
                {},
                {
                    view: "template",
                    localId: "templateMessage",
                    height:100,
                    template: `<p style='font-size: 20px; position: relative; top: -26px; font-weight: 100;'>&nbsp;&nbsp;&nbsp;&nbsp;${_('message_auto_level_alert')}</p>`,
                    // template: '123',
                    css: "mytemplate"
                },
                {},
                {
                    cols: [
                        {},
                        {
                            view: "button",
                            label: _('calculate'),
                            localId: "buttonCalculate",
                            css: "set_password_button",
                            hotkey: "enter",
                        },
                        {},
                        {
                            view: "button",
                            label: _('button_cancel'),
                            localId: "buttonCancel",
                            css: "set_password_button",
                            hotkey: "esc",
                        },
                        {
                            height: 80,
                        }
                    ]
                },
            ]
        };

        let form = {
            view: "form",
            scroll: false,
            elements: [elements],
            // rules:{
            //     "lengthText":webix.rules.isEmail,
            // },
            css: "form_win",
            localId: "form",
            width: 850,
            height: 400,

        };

        let body = {
            view: "window",
            position: "center",
            width: 850,
            height: 400,
            id: "window_show_5",
            modal: true,
            css: "window_show_password",
            head: form,
        }

        return body;
    }

    init() {
        this.passValidFlag = true;
        // this.setTheme();
        this.$$('buttonCancel').attachEvent("onItemClick", (id, e) => {
            console.log('click');
            this.getRoot().hide();
        });

        this.$$('buttonCalculate').attachEvent("onItemClick", (id, e) => {
            console.log('click');
            webix.message({
                text:"<p style='font-size:18px;'>Калибровка выполнена<p/>",
                type:"success",
                expire:5000,
            });

            this.$$("lengthLabel").validate();

            let length = this.$$("lengthLabel").getValue();
            length =  Number(length);
            if( this.validLength(length) ) {
                let cntFull = calculateCntFull(length);
                // this.$$("cntFullText").setValue(cntFull);
                llsModel.newLongData.fullTank = cntFull;

                let cntEmpty =  calculateCntEmpty(length);
                // this.$$("cntEmptyText").setValue(cntEmpty);
                llsModel.newLongData.emptyTank = cntEmpty;

                llsModel.setLongData(llsModel.newLongData);
                this.getRoot().hide();
            }
        });

        this.$$("lengthLabel").attachEvent("onChange", (newValue, oldValue, config)=>{
           if( newValue < 10 || newValue > 100){
               this.$$("lengthLabel").setValue(oldValue);
           }else{
               this.$$("lengthLabel").setValue(Math.trunc(newValue));
           }
        });

        this.setTheme();
    }

    showWindow() {
        this.getRoot().show();
    }

    validLength(length){
        if(length < 10 || length > 100){
            this.passValidFlag = false;
            return false;
        }
        this.passValidFlag = true;
        return true;
    }

    setEmptyTank(newValue){
        // $$('auto_calibration_set_2').setValue(newValue);
        llsModel.newLongData.emptyTank = newValue;
    }

    setFullTank(newValue){
        // $$('auto_calibration_set_1').setValue(newValue);
        llsModel.newLongData.fullTank = newValue;
    }



    setTheme() {
        if (configFile.theme == 'dark') {
            webix.html.addCss(this.$$("windows_password_label").getNode(), "windows_password_label_dark");
            webix.html.addCss(this.$$("header_label").getNode(), "windows_password_label_dark");
            webix.html.addCss(this.$$("lengthLabel").getNode(), "windows_password_label_dark");
            webix.html.addCss(this.$$("buttonCalculate").getNode(), "set_password_button_dark");
            webix.html.addCss(this.$$("buttonCancel").getNode(), "set_password_button_dark");
            webix.html.addCss($$("window_show_5").getNode(), "window_show_password_dark");
            webix.html.addCss(this.$$("form").getNode(), "form_win_dark");
            webix.html.addCss(this.$$("templateMessage").getNode(), "my_template_dark");

            // $$("closed_35").define("image", "assets/images/info_black_inverse.svg");
            // $$("closed_35").refresh();
        }

        if (configFile.theme == 'light') {
            webix.html.addCss(this.$$("windows_password_label").getNode(), "windows_password_label");
            webix.html.addCss(this.$$("header_label").getNode(), "windows_password_label");
            webix.html.addCss(this.$$("lengthLabel").getNode(), "windows_password_label");
            webix.html.addCss(this.$$("buttonCalculate").getNode(), "set_password_button");
            webix.html.addCss(this.$$("buttonCancel").getNode(), "set_password_button");
            webix.html.addCss($$("window_show_5").getNode(), "window_show_password");
            webix.html.addCss(this.$$("form").getNode(), "form_win");
            webix.html.addCss(this.$$("templateMessage").getNode(), "my_template");

            // $$("closed_35").define("image", "assets/images/info_black.svg");
            // $$("closed_35").refresh();
        }
    }
}

const lengthArr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const cntFullArr = [2068933, 3140500, 4183911, 5222500, 6286201, 7352000, 8335320, 9346500, 10413800, 11389531];
const cntEmptyArr = [1699377, 2220200, 2706500, 3214000, 3725450, 4255000, 4717110, 5202610, 5730470, 6207000];

function calculateCntFull(length) {
    let myIndex = 0;
    lengthArr.forEach((value, index, array)=>{
        if( value <= length && length <= array[ index+1 ]){
            if( Math.abs(value - length) <= Math.abs(length - array[index + 1]) ){
                myIndex = index;
            }else{
                myIndex = index + 1;
            }
        }
    })
    console.log(cntFullArr[myIndex], '*', length, '/', lengthArr[myIndex]);

    let cnt = (cntFullArr[myIndex] * length) / lengthArr[myIndex];
    return cnt;
}

function calculateCntEmpty(length) {
    let myIndex = 0;
    lengthArr.forEach((value, index, array)=>{
        if( value <= length && length <= array[ index+1 ]){
            if( Math.abs(value - length) <= Math.abs(length - array[index + 1]) ){
                myIndex = index;
            }else{
                myIndex = index + 1;
            }
        }
    })
    console.log(cntEmptyArr[myIndex], '*', length, '/', lengthArr[myIndex]);

    let cnt = (cntEmptyArr[myIndex] * length) / lengthArr[myIndex];
    return cnt;
}
