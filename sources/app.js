import "./styles/app.css";
import { JetApp } from "webix-jet";

export default class App extends JetApp{
	constructor(config){
		const defaults = {
			id 		: APPNAME,
			version : VERSION,
			debug 	: !PRODUCTION,
			start 	: "/1page"
		};

		super({ ...defaults, ...config });

		/*wjet::plugin*/
	}
}

export {App};