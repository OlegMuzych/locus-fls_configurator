const fs = require("fs");
export const log_for_develop = (dataArr)=>{
    if(dataArr.length > 0){
        const dataStr = '';
        dataArr.forEach((item)=>{
            dataArr.push(item);
            dataArr.push(',');
        });
        fs.appendFile(`log_${(new  Date()).toDateString()}`, dataStr, function (err) {
            if (err) throw err;
            console.log('Saved!');
        });
    }
}
