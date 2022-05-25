import findPort from "../services/lls/findPort";

export async function pathOptions(){
    let listPath = await findPort.listPath();
    console.log(listPath);
    return listPath;
}