
async function listPort() {
    try {
        // let portList = await SerialPort.list();
        let portList = await window.serialPort.portList();
        // console.log(portList);
        return portList.map((item) => {
            return item.path;
        });
    } catch (error) {
        console.log(error);
    }
}
export async function pathOptions(){
    let listPath = await listPort()
    console.log(listPath);
    return listPath;
}

