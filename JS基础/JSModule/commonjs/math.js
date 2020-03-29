const add=()=>{
    let sum=0,i=0,args = arguments,len = args.length
    while(i<len){
        sum = sum+args[i++]
    }
    return sum
}
module.exports={
    add
}