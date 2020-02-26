class Person{
    constructor(name){
        this.name = name
    }

    sayName(){
        console.log(this.name)
    }
}

let a = new Person('king')
a.sayName()
console.log(Person.prototype)
console.log(typeof Person)
console.log(Person.name)

let Person2 = class{
    constructor(name){
        this.name = name
    }
}
console.log(Person2.name)

/* 
1.类声明和let声明一样，不能被提升
2.类中所有代码均运行在严格模式下
3.类中所有方法不可枚举
4.只能通过new调用类的构造函数
5.不能在类中修改类名
 */
//类的es5实现
let PersonType = (function () {
    'use strict';
    const PersonType = function (name) {
        if(typeof new.target === 'undefined'){
            throw new Error('必须通过关键字new调用构造函数')
        }
        this.name = name
    }
    Object.defineProperty(PersonType.prototype,'sayName',{
        value:function () {
            if(typeof new.target !== 'undefined'){
                throw new Error('不可使用关键字new调用该方法')
            }
            console.log(this.name)
        },
        enumerable:false,
        writable:true,
        configurable:true
    })

    return PersonType
}())