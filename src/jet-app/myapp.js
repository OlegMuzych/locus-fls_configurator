import "./styles/app.css";
import {JetApp, EmptyRouter, HashRouter, plugins } from "webix-jet";

export default class MyApp extends JetApp{
	constructor(config){
		const defaults = {
			id 		: APPNAME,
			version : VERSION,
			router 	: BUILD_AS_MODULE ? EmptyRouter : HashRouter,
			debug 	: !PRODUCTION,
			start 	: 'win',//"testSerialPort"//"/win"
			views: {
				"engineeringmenu" : "engineeringmenu.engineeringmenu" // load /views/area/list.js
			}
		};

		super({ ...defaults, ...config });

	}
}

if (!BUILD_AS_MODULE){
	webix.ready(() => new MyApp().render() );
}
