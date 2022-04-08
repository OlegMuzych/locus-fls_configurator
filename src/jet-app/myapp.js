import "./styles/app.css";
// import "src/jet-app/assets/libraries/webix/webix";
import {JetApp, EmptyRouter, HashRouter, plugins } from "webix-jet";
import globalVariable from "./global-variable-app";
import {getStrLang} from "./services/auxiliary-functions";

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

		this.use(plugins.Locale);

		globalVariable.language.then(async (language)=>{
			if(language == 'like_system' ){
				let systemLangStr = await window.electron.app("getLocale");
				let langStr = getStrLang(systemLangStr);
				this.getService("locale").setLang(langStr);
			}else{
				let langStr = getStrLang(language);
				this.getService("locale").setLang(langStr);
			}
		});
	}
}

if (!BUILD_AS_MODULE){
	webix.ready(() => new MyApp().render() );
}


