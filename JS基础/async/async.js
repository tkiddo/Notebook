const fs = require('fs')

function read(file) {
    return new Promise((resolve,reject)=>{
        fs.readFile(file,'utf8',(err,data)=>{
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}

async function readResult() {
    try {
        const r1 = await read('./data.json') //await后跟一个promise实例
        console.log(r1)
    } catch (error) {
        console.log(error)
    }
}

readResult()

