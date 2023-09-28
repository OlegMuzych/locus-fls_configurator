import {JetView} from "webix-jet";
import configFile from "../../../../config-app";

export default class ShowSaveSettings extends JetView {
	config() {
		const _ = this.app.getService("locale")._;
		let show_save_settings = {
			view: "label",
			label: `<p style="position: relative; top: -20px;">${_("save_settings_text_show")}</p>`,
			height: 50,
			css: "show_save_settings",
			id: "show_save_settings",
		};

		let body = {
			rows: [
				show_save_settings
			]
		};

		return body;

	}

	init() {

		this.on(this.app, "app:settings:setToLls", () => {
			webix.html.removeCss($$("show_save_settings").getNode(), "show_save_settings");
			webix.html.addCss($$("show_save_settings").getNode(), "show_save_settings_dark_green")
			$$("show_save_settings").refrash();


			webix.message({
				    text:"<p style='font-size:20px;'>test<p/>",
				    type:"success",
				    expire:5000,
				});
		});


		if (configFile.theme == 'light') {
			webix.html.addCss($$("show_save_settings").getNode(), "show_save_settings");

		}
		if (configFile.theme == 'dark') {
			webix.html.addCss($$("show_save_settings").getNode(), "show_save_settings_dark");

		}


	};
}





