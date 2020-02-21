//5.1属性接口 对json 的约束


//接口：行为和动作的规范,对批量方法参数的约束

interface FullName{

    firstName:string;//分号结束

    secondName:string;

    lastName?:string;
}

function printName(name:FullName) {
    console.log(`${name.firstName} ${name.secondName} ${name.lastName?name.lastName:''}`)
}

function printInfo(params:FullName) {
    console.log(`hi,${params.firstName}`)
}

printName({firstName:'king',secondName:'wang'})
printInfo({firstName:'sara',secondName:'l'})

//example
interface Config{

    type:string;

    url:string;
    
    data?:string;

    dataType:string;
}

function ajax(params:Config) {

    var xhr=new XMLHttpRequest();

    xhr.open(params.type,params.url,true);

    xhr.send(params.data);

    xhr.onreadystatechange=function () {
        if(xhr.readyState===4 && xhr.status===200){
            console.log('success')
            if(params.dataType==='json'){
                console.log(JSON.parse(xhr.responseText))
            }else{
                console.log(xhr.responseText)
            }
        }
    }
    
}

//函数类型接口；对方法传入的参数以及返回值进行约束
interface encrypt{
    (key:string,value:string):string
}

var md5:encrypt=function (key:string,value:string):string {
    return key+value
}

var sha:encrypt=function (key:string,value:string):string {
    return key+'-----'+value
}

console.log(md5('11','22'))
console.log(sha('11','22'))


//可索引接口；数组，对象的约束

interface UserArr{
    [index:number]:string
}

var ar:UserArr=['king']
console.log(ar[0])

interface UserObj{
    [index:string]:string
}

var ob:UserObj={name:'king'}
console.log(ob)

//类类型接口：对类的约束,和抽象类相似

interface Animal{

    name:string;
    
    eat(str:string):void;
}

class HDog implements Animal{
    name:string;
    constructor(name:string){
        this.name=name;
    }

    eat(){
        console.log(this.name+' eat bones')
    }
}

var hei = new HDog('xiaohei');
hei.eat()

class HCat implements Animal{
    name:string;
    constructor(name:string){
        this.name=name;
    }

    eat(){
        console.log(this.name+' eat fish')
    }
}

var hat = new HCat('xiaohua');
hat.eat()

//接口的扩展,接口可以继承接口

interface AnimalT{
    eat():void;
}
interface PersonT extends AnimalT{
    work():void;
}

class WebWorker implements PersonT{
    name:string;
    constructor(name:string){
        this.name=name;
    }

    //实现PersonT接口的方法
    work(){
        console.log(this.name+' is working')
    }

    //实现AnimalT接口的方法
    eat(){
        console.log(this.name+' is eatting')
    }
}

var wW=new WebWorker('xiaoli')
wW.eat()
wW.work()

class Programmer {
    name:string;
    constructor(name:string){
        this.name=name
    }
    coding(){
        console.log(this.name+' is coding')
    }
}
class webFront extends Programmer implements PersonT{
    
    constructor(name:string){
        super(name)
    }
    
    //实现PersonT接口的方法
    work(){
        console.log(this.name+' is working')
    }

    //实现AnimalT接口的方法
    eat(){
        console.log(this.name+' is eatting')
    }
}

var xiaohe = new webFront('xiaohe');
xiaohe.coding()







