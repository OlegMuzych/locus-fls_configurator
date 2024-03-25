const {contextBridge, dialog, ipcRenderer} = require('electron');
const {SerialPort} = require('serialport');
const {crc8, crc16} = require("easy-crc");
const {writeFile, readFile, access} = require('fs/promises');
const {writeFileSync, readFileSync} = require('fs');
const CSV = require('csv-string');

const fs = require('fs');
// const {method} = require("@vercel/webpack-asset-relocator-loader");


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

contextBridge.exposeInMainWorld('log_for_develop', {
        pushData: (arr) => log_for_develop(arr),
    }
);


const log_for_develop = (dataArr)=>{
    if(dataArr.length > 0){
        // let dataStr = (new Date()).toISOString();
        let dataStr = (new Date()).toLocaleString();
        dataStr += ','
        dataArr.forEach((item, index)=>{

            dataStr = dataStr + item;
            if(index != dataArr.length -1){
                dataStr += ',';
            }else{
                dataStr += '\n';
            }

        });
        console.log(dataStr);

        /*
         частота
2 байта - счетчик
2 байта - вольтаж на adc
1 знаковый байт - мгновенное значение температуры
1 знаковый байт - медиана температуры
2 байта - мгновенное значение уровня
2 байта - отфильтрованное значение уровня с компенсацией температруты и интерполяцией
2 байта - объем на основе отфильтрованного уровня
4 байта - пустой из конфига
4 байта - полный из конфига
        * */
        const fileName = `log_${(new  Date()).toLocaleDateString()}.csv`;
        const header = "Дата, Время, Счетчик,  вольтаж на adc, мгновенное значение температуры, медиана температуры, мгновенное значение уровня,отфильтрованное значение уровня, объем, пустой, полный\n"
        if (!fs.existsSync(fileName)) {
            fs.appendFile(fileName, header.toString(), function (err) {
                if (err) throw err;
                console.log('Saved!');
            });
        }
        fs.appendFile(fileName, dataStr, function (err) {
            if (err) throw err;
            console.log('Saved!');
        });
    }
}
