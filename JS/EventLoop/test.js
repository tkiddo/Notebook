// async function async1() {
//     console.log("async1 start");              
//     await  async2();                          
//     console.log("async1 end");
// }
// async  function async2() {
//     console.log( 'async2');
// }

function promise1(){
    return new Promise((resolve)=>{
        console.log('async1 start')          //4.promise立即执行，输出async1 start
        promise2().then(()=>{                //6.回调函数添加到微任务，微1
            console.log('async1 end')        //13.微1执行，输出async1 end
            resolve()
        })
    })
}
function promise2() {
    return new Promise((resolve)=>{
        console.log('async2')               //5.promise立即执行，输出async2
        resolve()
    })
    
}
console.log("script start");                  //1.整体代码宏任务执行，输出script start
setTimeout(function () {                      //2.回调函数添加到宏任务队列，宏1
    console.log("settimeout");                                                                     //15.宏1执行，输出settimeout
});
// async1()
promise1()                                    //3.执行函数promise1
new Promise(function (resolve) {
    console.log("promise1");                  //7.promise立即执行，输出promise1
    resolve();
}).then(function () {                         //8.回调函数加入微任务队列，微2
    console.log("promise2");                  //14.微2执行，输出promise2
});
setImmediate(()=>{                           //9.回调函数加入宏任务队列，宏2
    console.log("setImmediate")                                                                     //16.宏2执行，输出setImmediate
})
process.nextTick(()=>{                       //10.回调函数加入微任务队列，微3
    console.log("process")                   //12.process.nextTick优先级高于promise，微3执行，输出process
})
console.log('script end');                   //11.整体代码执行，输出script end 




/* 同步代码执行顺序优先级高于异步代码执行顺序优先级；
new Promise(fn)中的fn是同步执行；
process.nextTick()>Promise.then()>setTimeout>setImmediate。 */