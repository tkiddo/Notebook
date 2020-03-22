Javascript中的new操作符实际上做了以下4件事情：
1. 创建一个新的空对象
2. 链接新创建的对象和构造函数的原型对象（就是将新对象的隐式原型`__proto__`指向构造函数的原型对象`prototype`）
3. 执行构造函数，并将构造函数中的this指向新的对象
4. 第三步如果没有返回对象，就返回this
````javascript
     function createNew(){
        //创建新的空对象
        let obj = {};
        //解构获得构造函数和参数
        let  [constructor,...params] = [...arguments];
        //链接对象到函数原型
        obj.__proto__  = constructor.prototype;
        //执行构造函数，将构造函数中的this指向obj对象
        let result = constructor.apply(obj,params);
        //如果函数没有返回对象，就返回新创建的对象
        return typeof result === 'object'?result:obj        
    }


    function Person(name){
        this.name=name;
        Person.prototype.sayName=()=>{
            console.log(this.name)
        }
    }
    let a = new Person('king');
    a.sayName()
    console.log(a)//Person {name: "king"}

    let b = createNew(Person,'sara')
    console.log(b)//Person {name: "sara"}
````
