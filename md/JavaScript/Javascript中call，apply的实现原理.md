#### call，apply应用场景
首先，来看下面这一个例子：
````js
let person = {
    name:'king',
    greet:function(){
            console.log(`hello,${this.name}`)
    }
}
person.greet();   //hello,king

````
现在，有另一个对象person2，`let person2={name:'sara'}`。如果他也想调用greet方法，那么可以这么实现：为person2添加方法，指向person的greet方法，即`person2.greet=person.greet`。然而，person2仅仅是临时需要调用greet方法，这样重新为person2定义greet方法显得不是很有必要，这时候就需要call或者apply出场了。
利用call，apply可以这么实现：
````js
person.greet.call(person2)  //hello,sara
person.greet.apply(person2)  //hello,sara

````
 其实call和apply的用处是一样的，就是让对象临时调用本不属于自己的方法，而不用为自身添加该方法。两者的不同在于调用的时候传参的形式，call以单个参数依次传入，apply以数组的方式传入，以上greet方法没有形参，所以不能体现出不同。以上例子稍作修改即可体现：
````js
let person = {
        name:'king',
        greet:function(str){
                console.log(`${str},${this.name}`)
        }
}
let person2 = {name:'sara'}
person.greet.call(person2,'hi')  //hi,sara
person.greet.apply(person2,['hi']) //hi,sara
````
#### 模拟实现原理
````js
Function.prototype.call2=function(context){
        let ctx = context || window
        ctx.fn = this //此处this指向调用call2函数的函数对象，例子中是peoson.greet
        //传参，call2函数的第一个参数是需要调用函数的对象，函数参数从第二个开始
        let args=[]
        for(let i=1,len=arguments.length;i<len;i++){
                args.push(arguments[i])
        }
        ctx.fn(...args) //es6扩展运算符，相当于ctx.fn(args[0],args[1],...args[args.length-1])
        delete ctx.fn //用完删除，释放空间
}
person.greet.call2(person2,'hi')   //hi,sara
````
````js
Function.prototype.apply2=function(context,arr){
        let ctx = context || window
        ctx.fn = this 
        //判断是否带参数，以及参数是否为数组
        if(!arr){
                ctx.fn()
        }else{
                if(!arr instanceof Array){
                        throw new Error('params must be array')
                }else{
                        ctx.fn(...arr)
                }
        }
        delete ctx.fn 
        
}
person.greet.apply2(person2,['hi']) //hi,sara
````
简单的说，call,apply可以让一个函数临时成为对象的方法，即让函数中的this可以指向该对象。

