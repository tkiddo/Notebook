interface DBI<T>{
    add(info:T):boolean;
    update(info:T,id:number):boolean;
    delete(id:number):boolean;
    get(id:number):any[]
}

//实现泛型接口的类必须是泛型类
class MysqlDbs<T> implements DBI<T> {
    add(info: T): boolean {
        console.log(info);
        return true
    }
    update(info: T, id: number): boolean {
        throw new Error("Method not implemented.");
    }
    delete(id: number): boolean {
        throw new Error("Method not implemented.");
    }
    get(id: number): any[] {
        throw new Error("Method not implemented.");
    }  
    constructor() {
        
    }
}

//实现泛型接口的类必须是泛型类
class MssqlDb<T> implements DBI<T> {
    add(info: T): boolean {
        console.log(info);
        return true
    }
    update(info: T, id: number): boolean {
        throw new Error("Method not implemented.");
    }
    delete(id: number): boolean {
        throw new Error("Method not implemented.");
    }
    get(id: number): any[] {
        throw new Error("Method not implemented.");
    }  
    constructor() {
        
    }
}


//操作用户表 定义一个user类和数据库表做映射
class Usera {

    username:string|undefined;
    password:string|undefined;
    constructor(username:string,password:string) {
        this.username=username;
        this.password=password;
        
    }
}

var abc = new Usera('abc','123456')
var oMysql = new MysqlDbs<Usera>();
oMysql.add(abc)


// var abc = new Usera('abc','123456')
var oMssql = new MssqlDb<Usera>();
oMssql.add(abc)


