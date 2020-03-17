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

/* 
1.宏任务队列中只有一个宏任务，就是整体代码，并开始执行，输出script start
2.遇到setTimeout，将回调函数添加到宏任务队列，即宏任务队列为[console.log("settimeout"),],继续向下执行
3.遇到promise1函数，promise1入栈
4.promise1中，new Promise（fn）中的fn会立即执行，输出async1 start，继续执行
5.遇到promise2函数，promise2入栈
6.执行promise2函数体，new Promise（fn）中函数立即执行，输出async2，返回一个promise，promise2出栈，继续执行promise1
7.promise2().then是微任务，回调函数加入微任务队列，即当前微任务队列[console.log('async1 end')],promise1出栈，继续执行主体代码
8.new Promise（fn）中fn立即执行，输出promise1，then方法中的函数加入微任务队列，则当前微任务队列为[console.log('async1 end')，console.log("promise2")]，继续向下执行
9.setImmediate是宏任务，回调函数加入宏任务队列，即当前宏任务队列为[console.log("settimeout"),console.log("setImmediate")],继续向下执行
10.process.nextTick是微任务，回调函数加入微任务队列，即当前微任务队列为[console.log('async1 end')，console.log("promise2")，console.log("process")]，继续向下执行
11.主体代码执行，输出script end
12.当前宏任务执行完毕，查看微任务队列为[console.log('async1 end')，console.log("promise2")，console.log("process")]
13.因为process.nextTick优先级高于promise，所以先执行，输出process，然后执行其他两个微任务，先后输出async1 end，promise2
14.微任务队列清空后，查看宏任务队列，为[console.log("settimeout"),console.log("setImmediate")]
15.setTimeout的优先级高于setImmediate，所以先取出setTimeout宏任务并执行，输出settimeout
16.当前宏任务执行完毕，查看微任务队列，没有微任务，则继续执行下一个宏任务，输出setImmediate
所以执行结果是：script start，async1 start，async2，promise1，script end，process，async1 end，promise2，settimeout，setImmediate*/


/* 同步代码执行顺序优先级高于异步代码执行顺序优先级；
new Promise(fn)中的fn是同步执行；
process.nextTick()>Promise.then()>setTimeout>setImmediate。 */