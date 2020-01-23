//用于组织代码，避免命名冲突

namespace A{
    export class Animal{
        name:string | undefined;
        constructor(name:string){
            this.name=name
        }
    }
}

namespace B{
    class Dog extends A.Animal{
        constructor(name:string){
            super(name)
        }
    }
    var a = new A.Animal('a');
    var b = new Dog('b')
}