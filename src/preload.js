const {contextBridge, dialog, ipcRenderer} = require('electron');
const {SerialPort} = require('serialport');
const {crc8, crc16} = require("easy-crc");
const {writeFile, readFile, access} = require('fs/promises');
const {writeFileSync, readFileSync} = require('fs');
const CSV = require('csv-string');
// const lightYModem = require('particle-ymodem');
const {method} = require("@vercel/webpack-asset-relocator-loader");
// const {YModem} = require("ymodem");
// const {MyYModem} = require("my-ymodem/my-ymodem");


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
        new: (options) => {
            port = new SerialPort(options);
        },
        // on: (event, callback) => {
        //     port.on(event,callback);
        // },
        onReadable: (callback) => {
            port.on('readable', callback);
        },
        onOpen: (callback) => {
            port.on('open', callback);
        },
        onError: (callback) => {
            port.on('error', callback);
        },
        onData: (callback) => {
            port.on('data', callback);
        },
        onClose: (callback) => {
            port.on('close', callback);
        },
        onceData: (callback) => {
            port.once('data', callback);
        },
        delete: () => {
            delete port;
        },
        pause: () => {
            port.pause();
        },
        resume: () => {
            port.resume;
        },
        write: (buffer) => {
            port.write(buffer);
        },
        read: () => {
            return port.read();
        },
        isOpen: () => {
            return port.isOpen();
        },
        close: (callback) => {
            return port.close(callback);
        }
    }
);

contextBridge.exposeInMainWorld('electron', {
    openDialog: (method, config) => {
        return ipcRenderer.invoke('dialog', method, config);
    },
    app: (method, params) => {
        return ipcRenderer.invoke('app', method, params);
    },
    nativeTheme: (properties) => {
        return ipcRenderer.invoke('nativeTheme', properties);
    },
});

contextBridge.exposeInMainWorld('checkSumm', {
    crc8: (method, data) => {
        return crc8(method, data);
    },
    crc16: (method, data) => {
        return crc16(method, data);
    }
});

contextBridge.exposeInMainWorld('fs', {
        writeFile: (file, data, options) => writeFile(file, data, options),
        readFile: (path, options) => readFile(path, options),
        writeFileSync: (file, data, options) => writeFileSync(file, data, options),
        readFileSync: (path, options) => readFileSync(path, options),
        access: (path, mode) => access(path, mode),
    }
);

contextBridge.exposeInMainWorld('csv-string', {
        parse: (string, options) => CSV.parse(string, options),
        stringify: (arr, separator) => CSV.stringify(arr, separator),
    }
);

contextBridge.exposeInMainWorld('Buffer', {
        concat: (list, totalLength) => Buffer.concat(list, totalLength),
    }
);

// contextBridge.exposeInMainWorld('particle-ymodem', {
//         transfer: (filePath, progressCallback, serialPortSettings, logCallback = console.log) => {
//             let file = readFileSync(filePath, 'utf8');
//             const modem = new lightYModem();
//             const port = new SerialPort(serialPortSettings);
//             modem.transfer(file, port, progressCallback, logCallback);
//         }
//     }
// );

// contextBridge.exposeInMainWorld('my-ymodem', {
//     yTransmit: (filePath, progressCallback, serialPortSettings, logCallback = console.log) => {
//             let file = readFileSync(filePath, 'utf8');
//             const modem = new MyYModem();
//             const port = new SerialPort(serialPortSettings);
//             modem.yTransmit(file, port, progressCallback, logCallback);
//         }
//     }
// );

// contextBridge.exposeInMainWorld('ymodem', {
//         sendFile: (filePath, progressCallback, serialPortSettings, logCallback = console.log) => {
//             const port = new SerialPort(serialPortSettings);
//             let file = readFileSync(filePath);
//             const ymodem = new YModem(port);
//             ymodem.sendFile('MyNameFile', file, null, progressCallback);
//         }
//     }
// );