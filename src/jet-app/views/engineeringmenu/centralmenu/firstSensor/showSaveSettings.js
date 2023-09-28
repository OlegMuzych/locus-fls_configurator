import {JetView} from "webix-jet";
import configFile from "../../../../config-app";

export default class ShowSaveSettings extends JetView {
	config() {
		let show_save_settings = {
			view: "label",
			label: `<p style="position: relative; top: -20px;">${_("save_settings_text_show")}</p>`,
			height: 50,
			css: "show_save_settings",
			id:"show_save_settings",
		};

		let body ={
			rows:[
				show_save_settings
			]
		};

		return body;

	}

	init() {


		if(configFile.theme == 'light'){
			webix.html.addCss( $$("show_save_settings").getNode(), "show_save_settings");

		}
		if(configFile.theme == 'dark'){
			webix.html.addCss( $$("show_save_settings").getNode(), "show_save_settings_dark");

		}


	};
}