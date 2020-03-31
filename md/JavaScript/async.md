#### JS异步编程
`Javascript`语言的执行环境是"单线程"。也就是指一次只能完成一件任务。如果有多个任务，就必须排队，前面一个任务完成，再执行后面一个任务。如果某个任务耗时过长，就会导致后续的任务一直等着，拖延了整个程序的执行，常见的就是浏览器无响应（假死）。为了解决这个问题，`Javascript`出现了异步编程的模式。通俗地讲，异步任务就是当执行到某个耗时很长的任务时，后续任务不用等待异步任务执行完毕再执行，等到异步任务完成，浏览器再对异步任务作出响应，即异步任务不会阻塞后续任务。异步任务最好的例子就是`Ajax`操作。

#### 异步编程方案

+ 回调函数
````js
ajax(url,()=>{
    //todo...
})
````
简单，容易实现，但多个回调函数嵌套会使得结构复杂，难以维护。

+ 事件监听
````js
const div = document.getElementById('div')
div.addEventListener('cilck',()=>{
    //todo...
})
````
事件驱动型会使得程序的运行流程变得不清晰

+ 发布/订阅
````js
    function O(){
        this.subs=[]
    }
    O.prototype.publish=function (event) {
        this.subs.forEach(item=>{
            if(item.event===event){
                item.callback()
            }
        })
    }
    O.prototype.subscribe=function(event,callback){
        this.subs.push({
            event,callback
        })
    }
    
    function f2(){
        console.log('f2 start')
    }
    function f1(){
        setTimeout(() => {
            //todo...
            origin.publish('done')
        }, 1000);
    }
    const origin = new O()
    origin.subscribe('done',f2)
    f1()
````
我们假设存在信息中心origin,f2向信息中心订阅'done'信号，当f1执行完之后，发布'done'信号,从而引发f2的执行。

+ `Promise`

[Fetch](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API)就是使用`Promise`的例子

````js
    fetch('./data.json').then(res=>{
        return res.json()
    }).then(res=>{
        console.log(res)
    })
````

`Promise`通过链式调用解决了回调地域的问题，也能很好地捕获错误，细节参见我的博客[根据`Promises/A+`规范实现`Promise`](https://github.com/justforfunmy/Notebook/blob/master/md/JavaScript/promiseA+.md)

+ 生成器Generators/ yield

````js
function f1() {
    setTimeout(() => {
        console.log('f1 done')
    }, 1000);
}

function f2() {
    setTimeout(() => {
        console.log('f2 done')
    }, 2000);
}

function f3() {
    setTimeout(() => {
        console.log('f3 done')
    }, 3000);
}

function* controller() {
    yield f1()
    yield f2()
    yield f3()
}

const c = controller()
c.next()//f1 done
c.next()//f2 done
c.next()//f3 done
````

`Generator`可以控制函数的执行，`yield`暂停，`next`启动

+ async/await

`async/await`其实是基于`promise`实现的语法糖，其真正的魔力在于能使得异步代码看起来像同步代码。

**`async`函数执行会返回一个`promise`**
````js
async function f(params) {
    return 1
}

console.log(f())//Promise {<resolved>: 1}
````

实现一个读取文件的async函数：
````js
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
````