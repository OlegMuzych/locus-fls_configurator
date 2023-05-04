import {JetView} from "webix-jet";
import configFile from "../../../config-app";

export default class FullEmptySubView extends JetView {
	config() {

		const _ = this.app.getService("locale")._;

		let errorStatus ={

			rows:[
				{
					cols:[
						{

						},
						{
							view: "label",
							label: `<p>${_("errorStatus_text")}</p>`,
							height: 60,
							css: "right_menu_fuel_level",
							id: "errorStatus_text"

							// ${_("automatic_calibration")}
						},
						{

						}
					]
				},
				{
					cols:[
						// {
						//
						// },
						{
							view: "text",
							// width: 570,
							height: 70,
							css: "full_window_text_error_windows",
							readonly: true,
							inputAlign: "center",
							value: "Ошибок нет",
							id: "window_status_error"
						},
						// {
						//
						// },
					]
				}

			]
		}

		return errorStatus;


	}

	init(){



		if(configFile.theme == 'light'){
			webix.html.addCss( $$("window_status_error").getNode(), "full_window_text_error_windows");


		}
		if(configFile.theme == 'dark'){
			webix.html.addCss( $$("window_status_error").getNode(), "full_window_text_error_windows_dark");

		}

	}
};





