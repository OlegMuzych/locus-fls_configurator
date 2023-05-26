import {JetView} from "webix-jet";
import configFile from "../../../config-app";

import llsModel from "../../../models/lls-model";
import configApp from "../../../config-app";

export default class StatusmenuTwoSensor extends JetView{
	config(){
		const _ = this.app.getService("locale")._;

		let right_menu_status_two_sensor={

			css:"right_menu_status_windows",
			id:"right_menu_statusTwo",
			width: 550,
			rows:[
				{
					height: 20,
				},
				{
					cols:[
						{width: 70,},
						{view:"button", width: 30, height: 30, css:"rows_level_right_menu_switch", id:"button_define_define_1"},
						{view:"button", width: 30, height: 30, css:"rows_level_right_menu_switch_define", id:"button_define_1",},
						{width: 20,},
						{view:"label", label:_("status_sensor_is_connected_2"), height: 30, css:"rows_level_right_menu_info", id:"rows_level_right_menu_info_1"}
					]
				},
				{
					height: 10,
				},
				{
					cols:[
						{width: 70,},
						{view:"button", width: 30, height: 30, css:"rows_level_right_menu_switch", id:"button_define_define_2",},
						{view:"button", width: 30, height: 30, css:"rows_level_right_menu_switch_define", id:"button_define_2",},
						{width: 20,},
						{view:"label", label:_("status_fuel_is_stable"), height: 30, css:"rows_level_right_menu_info", id:"rows_level_right_menu_info_2"}
					]
				},
				{
					height: 10,
				},
				{
					cols:[
						{width: 70,},
						{view:"button", width: 30, height: 30, css:"rows_level_right_menu_switch", id:"button_define_define_3"},
						{view:"button", width: 30, height: 30, css:"rows_level_right_menu_switch_define", id:"button_define_3",},
						{width: 20,},
						{view:"label", label:_("status_calibration"), height: 30, css:"rows_level_right_menu_info", id:"rows_level_right_menu_info_3"}
					]
				},
				{
					height: 10,
				},
				{
					cols:[
						{width: 70,},
						{view:"button", width: 30, height: 30, css:"rows_level_right_menu_switch", id:"button_define_4_base", },
						{view:"button", width: 30, height: 30, css:"rows_level_right_menu_switch_define", id:"button_define_4",},
						{width: 20,},
						{view:"label", label:_("status_thermal_compensation"), height: 30, width:200, css:"rows_level_right_menu_info", id:"rows_level_right_menu_info_4"},
						{
							width:5,
						},
						{view:"button", type:"image", image:"assets/images/temperature_2.svg", width:30, height:30, css:"thermometer_image",},
						{view:"text", width: 60, height:30, css:"window_temp", id:"window_temp", readonly:true, value:"__°"},

					]
				},
				{
					height: 13,
				},
				{
					view:"button",
					css: "show_choice_sensor",
					id:"show_choice_sensor_two",
					height:12,
				},
				{
					height: 12,
					id:"empty_rows_two"
				}
			]

		};


		return right_menu_status_two_sensor;
	}

	init(){

		$$("show_choice_sensor_two").hide();


		if(configFile.theme == 'light'){
			webix.html.addCss( $$("right_menu_statusTwo").getNode(), "right_menu_status_windows");
			webix.html.addCss( $$("rows_level_right_menu_info_1").getNode(), "rows_level_right_menu_info");
			webix.html.addCss( $$("rows_level_right_menu_info_2").getNode(), "rows_level_right_menu_info");
			webix.html.addCss( $$("rows_level_right_menu_info_3").getNode(), "rows_level_right_menu_info");
			webix.html.addCss( $$("rows_level_right_menu_info_4").getNode(), "rows_level_right_menu_info");
			webix.html.addCss( $$("window_temp").getNode(), "window_temp");

		}
		if(configFile.theme == 'dark'){
			webix.html.addCss( $$("right_menu_statusTwo").getNode(), "right_menu_status_windows_dark");
			webix.html.addCss( $$("rows_level_right_menu_info_1").getNode(), "rows_level_right_menu_info_dark");
			webix.html.addCss( $$("rows_level_right_menu_info_2").getNode(), "rows_level_right_menu_info_dark");
			webix.html.addCss( $$("rows_level_right_menu_info_3").getNode(), "rows_level_right_menu_info_dark");
			webix.html.addCss( $$("rows_level_right_menu_info_4").getNode(), "rows_level_right_menu_info_dark");
			webix.html.addCss( $$("window_temp").getNode(), "window_temp_dark");

		};





	}
}