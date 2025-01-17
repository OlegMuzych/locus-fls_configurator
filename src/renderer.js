/**
 * This file will automatically be loaded by webpack and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/tutorial/application-architecture#main-and-renderer-processes
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.js` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */

// import './index.css';
//
//
//import './webix/webix.js';
import './jet-app/assets/libraries/webix/webix.css';
import './jet-app/assets/libraries/webix/webix.js';


// import './test/myapp.js';
// import './test/myapp.css';

//import './test/index.html';
import  './jet-app/myapp.js';

console.log(window.myAPI);
window.serialPort.portList().then((list)=>console.log(list));

window.electron.app('getPath','userData').then(path => console.log(path));
window.electron.app('getLocale').then(str => console.log(str));
window.electron.nativeTheme('shouldUseDarkColors').then(flag => console.log("Theme is dark: "+ flag));


console.log('👋 This message is being logged by "renderer.js", included via webpack');
