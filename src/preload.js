
const { contextBridge, dialog, ipcRenderer } = require('electron');
const {SerialPort} = require('serialport');
const {crc8} = require("easy-crc");

contextBridge.exposeInMainWorld('myAPI', {
    desktop: true
});
let port = {};
contextBridge.exposeInMainWorld(
    'serialPort',
    {
        portList: async () => {
            let portList = await SerialPort.list();
            // console.log(portList);
            return portList;
        },
        new: (options)=> {
            port = new SerialPort(options);
        },
        // on: (event, callback) => {
        //     port.on(event,callback);
        // },
        onReadable: (callback)=>{
            port.on('readable', callback);
        },
        onOpen: (callback)=>{
            port.on('open', callback);
        },
        onError: (callback)=>{
            port.on('error', callback);
        },
        onData: (callback)=>{
            port.on('data', callback);
        },
        delete: ()=>{
            delete port;
        },
        pause: ()=>{
            port.pause();
        },
        resume: ()=>{
            port.resume;
        },
        write: (buffer)=>{
            port.write(buffer);
        },
        read: () =>{
            return port.read();
        },
        isOpen: ()=>{
            return port.isOpen();
        },
        close: (callback)=>{
            return port.close(callback);
        }
    }
);

contextBridge.exposeInMainWorld('electron', {
    openDialog: (method, config) => {return ipcRenderer.invoke('dialog', method, config);}
});

contextBridge.exposeInMainWorld('checkSumm', {
    crc8: (method, data) => {return crc8(method, data)}
});

