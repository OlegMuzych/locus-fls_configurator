// import {JetView} from "webix-jet";
// import configFile from "../../../../../../config-app";
//
// export default class FuelDrainView extends JetView {
//     config() {
//         const _ = this.app.getService("locale")._;
//
//         let passportVolume = {
//             localId:'passportVolume',
//             cols: [
//                 {},
//                 {
//                     view: "label",
//                     label: `<p style='font-weight:100; position: relative; top:-20px;'>${_("passport_volume_tank")}</p>`,
//                     width: 190,
//                     height: 50,
//                     css: "text_filtering_2",
//                     localId:"1"
//                 },
//                 {},
//                 {view: "text", css: "full_window_text", width: 200, localId: "manual_volume_fuel_1"},
//                 {}
//             ]
//         };
//
//         let startVolume = {
//             localId: 'startVolume',
//             cols: [
//                 {},
//                 {
//                     view: "label",
//                     label: `<p style='font-weight:100; position: relative; top:-20px;'>${_("start_volume_tank")}</p>`,
//                     width: 190,
//                     height: 50,
//                     css: "text_filtering_2",
//                     localId:"2"
//                 },
//                 {},
//                 {view: "text", css: "full_window_text", width: 200, localId: "initial_volume_fuel_1"},
//                 {}
//             ]
//         };
//
//         let stepVolume = {
//             localId:'stepVolume',
//             cols: [
//                 {},
//                 {
//                     view: "label",
//                     label: `<p style='font-weight:100; position: relative; top:-20px;'>${_("step_volume")}</p>`,
//                     width: 190,
//                     height: 50,
//                     css: "text_filtering_2",
//                     localId:"3"
//                 },
//                 {},
//                 {view: "text", css: "full_window_text", width: 200, localId: "step_liters_1"},
//                 {}
//             ]
//         };
//
//         let countStep = {
//             localId:'countStep',
//             cols: [
//                 {},
//                 {
//                     view: "label",
//                     label: `<p style='font-weight:100; position: relative; top:-20px;'>${_("step_count")}</p>`,
//                     width: 190,
//                     height: 50,
//                     css: "text_filtering_2",
//                     localId:"4"
//                 },
//                 {},
//                 {view: "text", width: 200, css: "full_window_text", readonly: true, localId: "counts_step"},
//                 {}
//             ]
//         };
//
//         let buttonRemoveStep = {
//             localId:'buttonRemoveStep',
//             cols: [
//                 {},
//                 {
//                     view: "button",
//                     label: _("button_remove_step"),
//                     width: 480,
//                     height: 50,
//                     css: "text_filtering_2",
//                     localId: "button_add_step_2"
//                 },
//                 {}
//
//             ]
//         };
//
//         let buttonAddStep = {
//             localId:'buttonAddStep',
//             cols: [
//                 {},
//                 {
//                     view: "button",
//                     label: _("button_add_step"),
//                     width: 480,
//                     height: 50,
//                     css: "set_step_drain_button_2",
//                     localId: "button_add_step_1"
//                 },
//                 {}
//
//             ]
//         };
//
//         let buttonClearTable = {
//             localId: 'buttonClearTable',
//             cols: [
//                 {},
//                 {
//                     view: "button",
//                     label: _("button_clear_table"),
//                     width: 480,
//                     height: 50,
//                     css: "clear_table_drain_button_2",
//                     localId:'clearTable'
//                 },
//                 {}
//
//             ]
//         };
//
//         let buttonStopCalibrate = {
//             localId: 'buttonStopCalibrate',
//             cols: [
//                 {},
//                 {
//                     view: "button",
//                     label: _("button_finish_calibration"),
//                     width: 480,
//                     height: 50,
//                     localId: "closed_calibration_button_window_2",
//                     css: "button_next_drain_window_1_2"
//                 },
//                 {}
//             ]
//         };
//
//         let buttonNext = {
//             localId:'buttonNext',
//             cols: [
//                 {},
//                 {
//                     view: "button",
//                     label: _("button_start_calibration"),
//                     width: 480,
//                     height: 50,
//                     localId: "central_menu_and_right_menu_calibration_next_window_button",
//                     css: "button_next_drain_window_1_2"
//                 },
//                 {}
//             ]
//         };
//
//         let errorCountStepMessage = {
//             localId: "errorCountStepMessage",
//             rows:[
//                 {height:50},
//                 {cols:[
//                         {gravity: 1},
//                         {
//                             view: "label",
//                             // label: _("error_count_step_message"),
//                             label: `<p style='font-weight:300; position: relative; top:-20px;'>${_("error_count_step_message")}</p>`,
//                             css: "text_error_count_step",
//                             gravity: 3
//                         },
//                         {gravity: 1},
//                     ]}
//             ]
//
//         }
//
//
//         let calibrationFuelDrain = {
//             id: "right_menu_calibration_drain_2",
//             css: "rows_right_menu_calibration_2",
//             height: 570,
//             rows: [
//                 {
//                     height: 50,
//                 },
//                 passportVolume,
//                 startVolume,
//                 stepVolume,
//                 {
//                     height: 30,
//                 },
//                 buttonNext,
//                 errorCountStepMessage,
//                 countStep,
//                 {
//                     height: 20,
//                 },
//                 buttonAddStep,
//                 {
//                     height: 10,
//                 },
//                 buttonRemoveStep,
//                 {
//                     height: 60,
//                 },
//                 buttonClearTable,
//                 {
//                     height: 10,
//                 },
//                 buttonStopCalibrate,
//                 {
//                     height: 10,
//                 },
//
//
//
//             ]
//
//         };
//
//         let body = calibrationFuelDrain;
//
//         return body;
//     }
//
//     init() {
//         this.startShow();
//
//         this.$$("central_menu_and_right_menu_calibration_next_window_button").attachEvent("onItemClick", (id, e) => {
//             let countStep = this.calcCountStep(this.$$("manual_volume_fuel_1").getValue(), this.$$("step_liters_1").getValue());
//             let firsVolume = Number(this.$$("manual_volume_fuel_1").getValue());
//             if(countStep > 0 && countStep <= 30){
//                 this.$$('counts_step').setValue(countStep);
//                 this.app.callEvent("app:calibrationsubview:countStep", [countStep, firsVolume]);
//                 this.nextShow();
//                 this.app.callEvent("app:calibrationSubview:startCalibrate", ['drain']);
//             }else{
//                 this.errorShow();
//             }
//         });
//
//         this.$$("closed_calibration_button_window_2").attachEvent("onItemClick", (id, e) => {
//             this.startShow();
//             this.app.callEvent("app:calibrationSubview:finishCalibrate", []);
//         });
//
//         this.$$("clearTable").attachEvent("onItemClick", (id, e) => {
//             this.app.callEvent("app:calibrationsubview:clearTable", []);
//         });
//
//         this.$$("button_add_step_1").attachEvent("onItemClick", (id, e) => {
//             let  volumeStep = this.$$('step_liters_1').getValue();
//             this.app.callEvent("app:calibrationsubview:drain:addStep", [Number(volumeStep)]);
//         });
//
//         this.$$("button_add_step_2").attachEvent("onItemClick", (id, e) => {
//             this.app.callEvent("app:calibrationsubview:removeRow", []);
//         });
//
//         this.$$("closed_calibration_button_window_2").attachEvent("onItemClick", (id, e) => {
//             this.app.callEvent("app:calibrationsubview:finishCalibrate", []);
//         });
//
//         if(configFile.theme == 'light'){
//             webix.html.addCss( this.$$("manual_volume_fuel_1").getNode(), "full_window_text");
//             webix.html.addCss( this.$$("initial_volume_fuel_1").getNode(), "full_window_text");
//             webix.html.addCss( this.$$("step_liters_1").getNode(), "full_window_text");
//             webix.html.addCss( this.$$("counts_step").getNode(), "full_window_text");
//             webix.html.addCss( this.$$("button_add_step_2").getNode(), "set_step_drain_button_2");
//             webix.html.addCss( this.$$("button_add_step_1").getNode(), "set_step_drain_button_2");
//             webix.html.addCss( this.$$("clearTable").getNode(), "clear_table_drain_button_2");
//             webix.html.addCss( this.$$("closed_calibration_button_window_2").getNode(), "button_next_drain_window_1_2");
//             webix.html.addCss( this.$$("central_menu_and_right_menu_calibration_next_window_button").getNode(), "button_next_drain_window_1_2");
//             webix.html.addCss( $$("right_menu_calibration_drain_2").getNode(), "rows_right_menu_calibration_2");
//             webix.html.addCss(this.$$("3").getNode(), "text_filtering_2");
//             webix.html.addCss(this.$$("2").getNode(), "text_filtering_2");
//             webix.html.addCss(this.$$("1").getNode(), "text_filtering_2");
//             webix.html.addCss(this.$$("4").getNode(), "text_filtering_2");
//         }
//         if(configFile.theme == 'dark'){
//             webix.html.addCss( this.$$("manual_volume_fuel_1").getNode(), "full_window_text_dark");
//             webix.html.addCss( this.$$("initial_volume_fuel_1").getNode(), "full_window_text_dark");
//             webix.html.addCss( this.$$("step_liters_1").getNode(), "full_window_text_dark");
//             webix.html.addCss( this.$$("counts_step").getNode(), "full_window_text_dark");
//             webix.html.addCss( this.$$("button_add_step_2").getNode(), "set_step_drain_button_2_dark");
//             webix.html.addCss( this.$$("button_add_step_1").getNode(), "set_step_drain_button_2_dark");
//             webix.html.addCss( this.$$("clearTable").getNode(), "clear_table_drain_button_2_dark");
//             webix.html.addCss( this.$$("closed_calibration_button_window_2").getNode(), "button_next_drain_window_1_2_dark");
//             webix.html.addCss( this.$$("central_menu_and_right_menu_calibration_next_window_button").getNode(), "button_next_drain_window_1_2_dark");
//             webix.html.addCss( $$("right_menu_calibration_drain_2").getNode(), "rows_right_menu_calibration_2_dark");
//             webix.html.addCss(this.$$("3").getNode(), "text_filtering_2_dark");
//             webix.html.addCss(this.$$("2").getNode(), "text_filtering_2_dark");
//             webix.html.addCss(this.$$("1").getNode(), "text_filtering_2_dark");
//             webix.html.addCss(this.$$("4").getNode(), "text_filtering_2_dark");
//         }
//     }
//
//     startShow(){
//         this.$$('passportVolume').show();
//         this.$$('startVolume').show();
//         this.$$('stepVolume').show();
//         this.$$('countStep').hide();
//         this.$$('buttonNext').show();
//         this.$$('buttonAddStep').hide();
//         this.$$('buttonRemoveStep').hide();
//         this.$$('buttonClearTable').hide();
//         this.$$('buttonStopCalibrate').hide();
//         this.$$("errorCountStepMessage").hide();
//     }
//
//     errorShow(){
//         this.$$("errorCountStepMessage").show();
//         this.$$('step_liters_1').setValue("");
//         this.$$('step_liters_1').refresh();
//     }
//
//
//     nextShow(){
//         this.$$('passportVolume').show();
//         this.$$('startVolume').show();
//         this.$$('stepVolume').show();
//         this.$$('countStep').show();
//         this.$$('buttonNext').hide();
//         this.$$('buttonAddStep').show();
//         this.$$('buttonRemoveStep').show();
//         this.$$('buttonClearTable').show();
//         this.$$('buttonStopCalibrate').show();
//         this.$$("errorCountStepMessage").hide();
//     }
//
//     calcCountStep(volumeTank, volumeStep){
//         let countStep = 0;
//         volumeTank = Number(volumeTank);
//         volumeStep = Number(volumeStep);
//         if(volumeTank > 0 && volumeStep > 0){
//             countStep = Math.floor(volumeTank/volumeStep);
//         }
//         return countStep;
//     }
// }
//
//
