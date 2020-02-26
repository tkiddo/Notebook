"use strict";
//泛型
//
//泛型函数，可以支持不特定的数据类型，要求：传入和返回参数一致
function getData(params) {
    return params;
}
console.log(getData('123'));
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
var MinClass = /** @class */ (function () {
    function MinClass() {
        this.list = [];
    }
    MinClass.prototype.add = function (num) {
        this.list.push(num);
    };
    MinClass.prototype.min = function () {
        var minNum = this.list[0];
        for (var index = 0; index < this.list.length; index++) {
            if (this.list[index] < minNum) {
                minNum = this.list[index];
            }
        }
        return minNum;
    };
    return MinClass;
}());
var m = new MinClass(); //实例化类，并指定T代表number类型
m.add(1);
m.add(11);
m.add(-2);
console.log(m.min());
var m2 = new MinClass(); //实例化类，并指定T代表string类型
m2.add("k");
m2.add("a");
m2.add("s");
console.log(m2.min());
var setData = function (params, p) {
    return params;
};
console.log(setData('s', '-----'));
var User = /** @class */ (function () {
    function User(username, password) {
        this.username = username;
        this.password = password;
    }
    return User;
}());
var Article = /** @class */ (function () {
    function Article() {
    }
    return Article;
}());
var MysqlDb = /** @class */ (function () {
    function MysqlDb() {
        this.list = [];
    }
    MysqlDb.prototype.add = function (params) {
        console.log(params);
        this.list.push(params);
        return true;
    };
    return MysqlDb;
}());
var u = new User('a', '123456');
var Db = new MysqlDb();
Db.add(u);
var arc = new Article();
arc.title = 'abc';
arc.desc = '111222';
var Dbs = new MysqlDb();
Dbs.add(arc);
console.log(Db, Dbs);
