import {JetView} from "webix-jet";
// import CentralMenu from "./centralmenu";
import CentralMenuSecond from "./secondSensor/centralmenu";
import CentralMenuFirst from "./firstSensor/centralmenu";
import globalVariable from "../../../global-variable-app";
export default class TwoSensor extends JetView {
	config() {
		const _ = this.app.getService("locale")._;
		let configurationTwoSensor = {
			rows: [
				{
					view: "segmented",
					id: "configuration_general_settings_sensor",
					multiview: true,
					value: 1,
					height: 50,
					options: [
						{value: _("one_sensor_button"), id: 'one_sensor',},
						{value: _("two_sensor_button"), id: 'two_sensor'},
					],
				},
				{
					// animate:true,
					animate:false,
					keepViews:true,
					cells: [
						{
							id: "one_sensor",
							// view: "label",
							// label: "Test"
							// CentralMenu
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
	}
}