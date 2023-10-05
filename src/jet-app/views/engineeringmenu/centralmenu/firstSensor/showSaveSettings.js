import {JetView} from "webix-jet";
import configFile from "../../../../config-app";

export default class ShowSaveSettings extends JetView {
	config() {
		const _ = this.app.getService("locale")._;

		let show_save_settings = {
			view: "text",
			height: 70,
			css: "show_save_settings",
			id: "show_save_settings",
			value:"",
			readonly: true,
			inputAlign: "center",
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
			$$("show_save_settings").setValue("Настройки записаны в датчик");
			setTimeout(() => {
						this.$$("show_save_settings").setValue("");
					}, 1500);
		});

			// webix.message({
			// 	    text:"<p style='font-size:20px;'>test<p/>",
			// 	    type:"success",
			// 	    expire:5000,
			// 	}
			// 	);
		// });


		if (configFile.theme == 'light') {
			webix.html.addCss($$("show_save_settings").getNode(), "show_save_settings");

		}
		if (configFile.theme == 'dark') {
			webix.html.addCss($$("show_save_settings").getNode(), "show_save_settings_dark");

		}


	};


	// showWindow() {
	// 	this.getRoot().show();
	// 	setTimeout(() => {
	// 		this.getRoot().hide();
	// 	}, 1500);
	// }
}





