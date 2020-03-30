/* 
promise：
术语：
“promise” is an object or function with a then method whose behavior conforms to this specification.
1.promise是一个包含then方法的对象或者函数
“self.value” is any legal JavaScript self.value (including undefined, a thenable, or a promise).
2. self.value，成功时的值
“self.reason” is a self.value that indicates why a promise was rejected.
3.self.reason ，拒绝时的原因*/

/* self.state:
A promise must be in one of three self.states: pending, fulfilled, or rejected. */


function myPromise(executor) {
    let self = this;
    self.value = undefined;//promise的值
    self.reason = '';//promise的拒因
    self.state = 'pending';//promise的状态
    self.onResolveCallbacks = [];
    self.onRejectedCallbacks = [];


    const resolve = function (res) {
        if (self.state === 'pending') {
            self.state = 'fulfilled'
            self.value = res
            self.onResolveCallbacks.forEach(fn => {
                fn(res)
            })
        }


    }
    const reject = function (err) {
        if (self.state === 'pending') {
            self.state = 'rejected'
            self.reason = err
            self.onRejectedCallbacks.forEach(fn => {
                fn(err)
            })
        }
    }
    /* 
    then方法接收两个可选参数
    1.onFulfilled,onRejected如果不是函数，就忽略
    2.onFulfilled仅在promise成功时调用，self.value是第一个参数 ，仅调用一次
    3.onRejected仅在promise被拒绝时调用，self.reason是第一个参数，仅调用一次
    4.then方法返回一个promise*/
    myPromise.prototype.then = function (onFulfilled, onRejected) {
        // 根据标准，如果then的参数不是function，则我们需要忽略它，此处以如下方式处理
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : function (value) { }
        onRejected = typeof onRejected === 'function' ? onRejected : function (reason) { }
        if (self.state === 'fulfilled') {
            return new myPromise((resolve, reject) => {
                let result = onFulfilled(self.value)
                if (result instanceof myPromise) {
                    result.then(resolve, reject)
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

    try {
        executor(resolve, reject)
    } catch (error) {
        reject(error)
    }

}

console.log('test')
const a = new myPromise((resolve, reject) => {
    setTimeout(() => {
        resolve(1)
    }, 0);
})

a.then(val => {
    console.log("fulfilled", val)
    // return new myPromise()
}, err => {
    console.log("rejected", err)
}).then(val=>{
    console.log(43)
})

