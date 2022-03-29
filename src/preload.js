
const { contextBridge, dialog, ipcRenderer } = require('electron');
const {SerialPort} = require('serialport');

contextBridge.exposeInMainWorld('myAPI', {
    desktop: true
});

contextBridge.exposeInMainWorld(
    'serialPort',
    {
        portList: async() => {
            let portList = await SerialPort.list();
            // console.log(portList);
            return portList;
        },
        get: require('serialport'),
    }
);

contextBridge.exposeInMainWorld('electron', {
    openDialog: (method, config) => {return ipcRenderer.invoke('dialog', method, config);}
});

