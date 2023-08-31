import {JetView} from "webix-jet";
// import CentralMenu from "./centralmenu";
import CentralMenuSecond from "./secondSensor/centralmenu";
import CentralMenuFirst from "./firstSensor/centralmenu";
import globalVariable from "../../../global-variable-app";
import configFile from "../../../config-app";
export default class TwoSensor extends JetView {
	config() {
		const _ = this.app.getService("locale")._;
		const segmentedCentralMenu = {
				view: "segmented",
				css: "central_cols_button",
				localId: "style_general_rows",
				multiview: true,
				value: 1,
				height: 100,
				options: [
					{value: _("main_settings"), id: '1',},
					{value: _("calibration"), id: '2'},
					{value: _("filtering"), id: '3'},
				],
			};

		let configurationTwoSensor = {
			rows: [
				{
					view: "segmented",
					id: "configuration_general_settings_sensor",
					multiview: true,
					css: "configuration_two_sensor_button",
					value: 1,
					height: 80,
					options: [
						{value: _("one_sensor_button"), id: 'one_sensor',},
						{value: _("two_sensor_button"), id: 'two_sensor'},
					],
				},
				segmentedCentralMenu,
				{
					animate:false,
					keepViews:true,
					cells: [
						{
							id: "one_sensor",
							rows:[
								CentralMenuFirst
							]
						},
						{
							id: "two_sensor",
							rows: [
								CentralMenuSecond
							]
						}
					]
				}
			]
		};
		return configurationTwoSensor
	};

	init() {
		if(globalVariable.twoSensorMode){
			console.log();
			$$("configuration_general_settings_sensor").define({hidden:false});
		}else{
			$$("configuration_general_settings_sensor").define({hidden:true});
		}

		$$("configuration_general_settings_sensor").setValue("one_sensor");
		// this.app.callEvent("app:select_sensor:number", ["first"]);

		$$("configuration_general_settings_sensor").attachEvent("onChange", (newValue, oldValue, config)=>{
			webix.message(newValue);
			switch(newValue) {

				case "one_sensor": {
					this.app.callEvent("app:select_sensor:number", ["first"]);
					// $$("show_choice_sensor").show();
					// $$("show_choice_sensor_two").hide();
					// $$("empty_rows").hide();
					// $$("empty_rows_two").show()

					break;
				}
				case "two_sensor": {
					this.app.callEvent("app:select_sensor:number", ["second"]);
					// $$("show_choice_sensor").hide();
					// $$("show_choice_sensor_two").show();
					// $$("empty_rows_two").hide()
					// $$("empty_rows").show()

					break;
				}
			}
		});

		this.$$("style_general_rows").attachEvent("onChange", (newValue, oldValue, config)=>{
			switch (newValue) {
				case "1":{
					this.app.callEvent("app:setting:general",[]);
					break;}
				case "2":{
					this.app.callEvent("app:setting:calibration", []);
					break;}
				case "3":{
					this.app.callEvent("app:setting:filtering", []);
					break;}
			}
			// webix.message(
			// 	`Value changed from ${oldValue} to ${newValue}. Source: ${config}`
			// );
		});


		if(configFile.theme == 'light'){
			webix.html.addCss( $$("configuration_general_settings_sensor").getNode(), "configuration_two_sensor_button");


		}
		if(configFile.theme == 'dark'){
			webix.html.addCss( $$("configuration_general_settings_sensor").getNode(), "configuration_two_sensor_button_dark");

		}

	}
}
