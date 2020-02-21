//泛型
//

//泛型函数，可以支持不特定的数据类型，要求：传入和返回参数一致
function getData<T>(params:T):T {
    return params
}

console.log(getData<string>('123'))


//泛型类
// class MinClass{
//     public list:number[]=[];
//     add(num:number):void{
//         this.list.push(num)
//     }
//     min():number{
//         var minNum = this.list[0];
//         for (let index = 0; index < this.list.length; index++) {
//             if(this.list[index]<minNum){
//                 minNum=this.list[index]
//             }
            
//         }
//         return minNum
//     }
// }

// var m = new MinClass();
// m.add(1);
// m.add(11);
// m.add(-2);
// console.log(m.min())


class MinClass<T>{
    public list:T[]=[];
    add(num:T):void{
        this.list.push(num)
    }
    min():T{
        var minNum = this.list[0];
        for (let index = 0; index < this.list.length; index++) {
            if(this.list[index]<minNum){
                minNum=this.list[index]
            }
            
        }
        return minNum
    }
}

var m = new MinClass<number>();//实例化类，并指定T代表number类型
m.add(1);
m.add(11);
m.add(-2);
console.log(m.min())


var m2 = new MinClass<string>();//实例化类，并指定T代表string类型
m2.add("k");
m2.add("a");
m2.add("s");
console.log(m2.min())


//泛型接口

//函数接口
// interface ConfigFn{
//     (value1:string,value2:string):string
// }

// var setData:ConfigFn=function (params:string,p:string):string {
//     return params+p
// }

// console.log(setData('s','-----'))


//泛型接口
interface ConfigFn<T>{
    (value1:T,value2:T):T
}

var setData:ConfigFn<string>=function(params:string,p:string):string {
    return params
}

console.log(setData('s','-----'))



class User {
    username:string | undefined;
    password:string | undefined;
    constructor(username?:string,password?:string) {
        this.username=username;
        this.password=password;
    }
}

class Article {
    title:string | undefined;
    desc:string | undefined;
    constructor() {
        
    }
}

class MysqlDb<T> {
    list:T[]=[];
    constructor() {
        
    }

    add(params:T):boolean{
        console.log(params)
        this.list.push(params)
        return true;
    }
}

var u = new User('a','123456');
var Db = new MysqlDb<User>();
Db.add(u)


var arc = new Article();
arc.title='abc';
arc.desc='111222';
var Dbs = new MysqlDb<Article>();
Dbs.add(arc)


console.log(Db,Dbs)

