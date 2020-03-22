#### JavaScript中的异步回调
   在JavaScript中，所有代码都是单线程执行的。由于这个原因，很多情况下都需要异步操作。比如一些耗时的操作，无需等待操作完成，即可运行接下来的代码，等操作完成时执行相应的回调操作，ajax就是典型的例子
```` javascript
    console.log('before setTimeout');
    setTimeout(()=>{
        console.log('callback done')
    },1000);//1秒后执行回调
    console.log('after setTimeout')
````
#### Promise
根据MDN的解释，一个 `Promise` 就是一个代表了异步操作最终完成或者失败的对象。
**语法**
`promise`本质上是一个绑定了回调的对象，而不是将回调传进函数内部。resolve 和 reject 函数被调用时，分别将`promise`的状态改为fulfilled（完成）或rejected（失败）。executor 内部通常会执行一些异步操作，一旦完成，可以调用resolve函数来将`promise`状态改成fulfilled，或者在发生错误时将它的状态改为rejected。
```` javascript
    let p = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let num = Math.random()*10;
            if(num>5){
                resolve('success')
            }else{
                reject('fail')
            }
        },)
    })
    p.then(res=>{
        console.log(res)
    }).catch(err=>{
        console.log(err)
    })
````
**将普通异步函数封装成Promise**
1.原生ajax封装成`promise`
```` javascript
let jsGetAjaxPromise = (params)=>{
        return new Promise((resolve,reject)=>{
            let xhr = new XMLHttpRequest();
            xhr.open('get',params.url,true);
            xhr.onload = resolve;
            xhr.onerror = reject;
            xhr.send();
        })
    }

    let p1 = jsGetAjaxPromise({
        url:`${baseUrl}/api/Shops`
    })
    
    p1.then(res=>{
        console.log(res)
    }).catch(error=>{
        console.log(error)
    })
````
2.小程序`wx.request`封装成`promise`
```` javascript
/* wx.js */
export const wxPromise = (params)=>{
    return new Promise((resolve,reject)=>{
        wx.request({
            url:params.url,
            data:params.data,
            header:params.header,
            method:params.method,
            dataType:params.dataType,
            responseType:params.responseType,
            success:resolve,
            fail:reject
        })
    })
}

            /* 使用 */
            import {wxPromise} from 'wx.js'
            wxPromise({
                url:`${baseUrl}/api/Shops`
            }).then(res=>{
                console.log(res)
            }).catch(error=>{
                console.log(error)
            })
````



