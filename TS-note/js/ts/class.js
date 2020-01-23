"use strict";
//类的修饰符 
//public ;公有，在类里面，子类，类外面可以访问
//protected;保护类型,在类里面，子类里面可以访问，类外面不可以
//pravite;私有；只能在类里面访问，子类和类外面不能访问
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name) {
        this.age = 30;
        //构造函数，实例化类的时候触发的方法
        this.name = name;
    }
    Person.prototype.run = function () {
        console.log(this.name + ' run');
    };
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.setName = function (name) {
        this.name = name;
    };
    Person.prototype.sleep = function () {
        console.log(this.name + ' sleep');
    };
    Person.prototype.hello = function () {
        this.sleep();
        console.log(this.name + ' hello');
    };
    Person.print = function () {
        //静态方法里不能直接调用类里的属性，可以调用静态属性
        console.log('static ' + this.gender);
    };
    Person.gender = 'male';
    return Person;
}());
var p = new Person('king');
p.run();
p.setName('john');
console.log(p.getName());
Person.print();
//ts继承 extends,super
var Web = /** @class */ (function (_super) {
    __extends(Web, _super);
    function Web(name) {
        //初始化父类的构造函数
        return _super.call(this, name) || this;
    }
    Web.prototype.run = function () {
        console.log(this.name + ' is running');
    };
    Web.prototype.work = function () {
        console.log(this.name + ' work');
    };
    Web.prototype.say = function () {
        this.hello();
    };
    return Web;
}(Person));
// let w = new Web('sara')
// w.run()
// w.work()
// w.say()
//多态，父类定义一个方法不去实现，让继承它的子类去实现，每个子类有不同的实现,多态是继承的表现
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.eat = function () {
        console.log('eating');
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.eat = function () {
        console.log(this.name + ' is eatting meat');
    };
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        return _super.call(this, name) || this;
    }
    Cat.prototype.eat = function () {
        console.log(this.name + ' is eatting fish');
    };
    return Cat;
}(Animal));
var dog = new Dog('dog');
dog.eat();
var cat = new Cat('cat');
cat.eat();
//抽象方法
//抽象类提供其他类的基类，不能直接实例化
//abstract关键字定义的抽象类和抽象方法，抽象类中的抽象方法不包含具体实现并且必须在派生类中实现
//抽象方法只能放在抽象类中
//抽象类和抽象方法用来定义标准
var Animals = /** @class */ (function () {
    function Animals(name) {
        this.name = name;
    }
    return Animals;
}());
var Dogg = /** @class */ (function (_super) {
    __extends(Dogg, _super);
    function Dogg(name) {
        return _super.call(this, name) || this;
    }
    Dogg.prototype.eat = function () {
        console.log(this.name + ' eat bones');
    };
    return Dogg;
}(Animal));
var d = new Dogg('hdog');
d.eat();
