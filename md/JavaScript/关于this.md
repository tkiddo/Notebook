####this指向什么
+ JavaScript中，任何函数本质上是通过对象来调用的，如果没有直接指定，就是window对象
````
function hi(){
        console.log('hi')
}
hi()  //hi
window.hi() //hi
console.log(hi === window.hi) //true
````
+ 每个函数内部都有一个this，指向调用函数的对象
````
function foo(){
        console.log(this.a)
}
var a=1
foo() //1,this指向window
let obj = {
        a:2,
        foo:foo
}
obj.foo() //2,this指向obj
var c = new foo()  //undefined，this指向c
````
####如何确定this的值
this值的指向基本可以分为以下4种情况：
+ fn():直接调用函数，此时this指向window
+ obj.fn():通过对象调用，此时this指向当前调用该函数的对象
+ new fn():通过new创建对象，此时this指向创建的对象
+ fn.call(obj),fn.apply(obj):call,apply将this指向改成obj

####综合例子
````
function Person(color){
        console.log(this)
        this.color = color
        this.getColor = function(){
            console.log(this)
            return this.color
        }
        this.setColor = function(color){
            console.log(this)
            this.color = color
        }
    }

    Person('red') //this是谁？window
    var p = new Person('Yellow')//this是p
    p.getColor()//this是p

    var obj = {};
    p.setColor.call(obj,'black')//this是obj

    var test = p.setColor;
    test();//this是window

    function fun1(){
        return function fun2(){
            console.log('sss')
        }
        fun2()//this是window
    }
````
如有错误，请批评指正。
