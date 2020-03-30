#### 根据`Promises/A+`规范实现`Promise`

##### 创建`Promise`
````js
new Promise((resolve,reject)=>{
    ...
})
````
`promise`构造器接收一个被称为执行器的函数，该函数会被传递两个函数作为参数，一个是成功时调用的函数`resolve`,一个是失败是调用的函数`reject`。

##### `Promise`中的术语
+ 解决（fulfill）：指一个 promise 成功时进行的一系列操作，如状态的改变、回调的执行。也就是`resolve`
+ 拒绝（reject）：指一个 promise 失败时进行的一系列操作。
+ 终值（eventual value）：所谓终值，指的是 promise 被解决时传递给解决回调的值。
+ 据因（reason）：也就是拒绝原因，指在 promise 被拒绝时传递给拒绝回调的值。

##### `Promise`的状态
一个 Promise 的当前状态必须为以下三种状态中的一种：**等待态（Pending）、执行态（Fulfilled）和拒绝态（Rejected）**。
`Promise`的初始状态为`Pending`,并且只会进入执行态（`Fulfilled`）或者拒绝态（`Rejected`）,之后不能更改状态，即（`Pending -> Fulfilled` 或者 `Pending -> Rejected`）

````js
function myPromise(executor) {
    let self = this;
    self.value = undefined;//promise的值
    self.reason = '';//promise的拒因
    self.state = 'pending';//promise的状态
    self.onResolvedCallback = [] // Promise resolve时的回调函数集，因为在Promise结束之前有可能有多个回调添加到它上面
    self.onRejectedCallback = [] // Promise reject时的回调函数集，因为在Promise结束之前有可能有多个回调添加到它上面

    const resolve = (val)=>{
        //成功时的操作
    }

    const reject = (reason) =>{
        //失败时的操作
    }

    //executor是一个立即执行函数，可能会出错，这里用trycatch来捕获错误，并传递给reject函数
    try {
        executor(resolve, reject)
    } catch (error) {
        reject(error)
    }
}
````
这样就把`Promise`的主体结构给完成了，接下来要实现`resolve`和`reject`方法
````js
    const resolve = function (res) {
        //判断状态是否为执行态
        if (self.state === 'pending') {
            //更新状态为完成态
            self.state = 'fulfilled'
            //更新Promise的值
            self.value = res
            //依次调用完成时的回调函数，并将值传递过去
            self.onResolveCallbacks.forEach(fn => {
                fn(res)
            })
        }


    }
    const reject = function (err) {
        //判断状态是否为执行态
        if (self.state === 'pending') {
            //更新状态为拒绝态
            self.state = 'rejected'
            //更新Promise的拒因
            self.reason = err
            //依次调用拒绝时的回调函数，并将拒因传递过去
            self.onRejectedCallbacks.forEach(fn => {
                fn(err)
            })
        }
    }
````
##### Then方法
一个 promise 必须提供一个 `then` 方法以访问其当前值、终值和据因。
````js
promise.then(onFulfilled,onRejected)
````
1. 如果`onFulfilled`和`onRejected`不是函数，必须忽略
2. `onFulfilled`仅在`Promise`成功时调用，`value`是第一个参数 ，仅调用一次
3. `onRejected`仅在`Promise`被拒绝时调用，`reason`是第一个参数，仅调用一次
4. `then`方法返回一个`Promise`
````js
myPromise.prototype.then = function (onFulfilled, onRejected) {
        // 根据标准，如果then的参数不是function，则我们需要忽略它，此处以如下方式处理
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : function (value) { }
        onRejected = typeof onRejected === 'function' ? onRejected : function (reason) { }

        if (self.state === 'fulfilled') {
            return new myPromise((resolve, reject) => {
                let result = onFulfilled(self.value)
                if (result instanceof myPromise) {
                    result.then(resolve, reject)//如果resolve的返回值是一个Promise，直接取它的结果
                }
                resolve(result)
            })
        } else if (self.state === 'rejected') {
            return new myPromise((resolve, reject) => {
                let result = onRejected(self.reason)
                if (result instanceof myPromise) {
                    result.then(resolve, reject)
                }
                reject(result)
            })

        } else if (self.state === 'pending') {
            return new myPromise((resolve, reject) => {
                self.onResolveCallbacks.push(() => {
                    let result = onFulfilled(self.value)
                    if (result instanceof myPromise) {
                        result.then(resolve, reject)
                    }
                    resolve(result)
                })
                self.onRejectedCallbacks.push(() => {
                    let result = onRejected(self.reason)
                    if (result instanceof myPromise) {
                        result.then(resolve, reject)
                    }
                    reject(result)
                })
            })

        }

    }
````