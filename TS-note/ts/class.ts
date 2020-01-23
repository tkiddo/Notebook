//类的修饰符 
//public ;公有，在类里面，子类，类外面可以访问
//protected;保护类型,在类里面，子类里面可以访问，类外面不可以
//pravite;私有；只能在类里面访问，子类和类外面不能访问



class Person{
    name:string; //省略public关键字
    public age:number=30;
    static gender:string='male';
    constructor(name:string){
        //构造函数，实例化类的时候触发的方法
        this.name=name
    }

    run():void{
        console.log(this.name+' run')
    }

    getName():string{
        return this.name
    }

    setName(name:string):void{
        this.name=name;
    }

    private sleep():void {
        console.log(this.name+' sleep')
    }

    protected hello():void{
        this.sleep()
        console.log(this.name+' hello')
    }

    static print():void{
        //静态方法里不能直接调用类里的属性，可以调用静态属性
        console.log('static '+this.gender)
    }

}

let p = new Person('king');
p.run()
p.setName('john')
console.log(p.getName())
Person.print()




//ts继承 extends,super
class Web extends Person{
    constructor(name:string){
        //初始化父类的构造函数
        super(name)
    }
    run():void{
        console.log(this.name+' is running')
    }
    work():void{
        console.log(this.name+' work')
    }
    say():void{
        this.hello()
    }
}

// let w = new Web('sara')
// w.run()
// w.work()
// w.say()

//多态，父类定义一个方法不去实现，让继承它的子类去实现，每个子类有不同的实现,多态是继承的表现

class Animal{
    name:string;
    constructor(name:string){
        this.name=name
    }
    eat(){
        console.log('eating')
    }
}

class Dog extends Animal{
    constructor(name:string){
        super(name)
    }

    eat(){
        console.log(this.name+' is eatting meat')
    }
}


class Cat extends Animal{
    constructor(name:string){
        super(name)
    }

    eat(){
        console.log(this.name+' is eatting fish')
    }
}

var dog=new Dog('dog')
dog.eat()
var cat=new Cat('cat')
cat.eat()


//抽象方法
//抽象类提供其他类的基类，不能直接实例化
//abstract关键字定义的抽象类和抽象方法，抽象类中的抽象方法不包含具体实现并且必须在派生类中实现
//抽象方法只能放在抽象类中
//抽象类和抽象方法用来定义标准


abstract class Animals{
    name:string;
    constructor(name:string){
        this.name=name;
    }
    abstract eat():void;
}

class Dogg extends Animal{
    constructor(name:string){
        super(name)
    }

    eat(){
        console.log(this.name+' eat bones')
    }
}

var d = new Dogg('hdog');
d.eat()








