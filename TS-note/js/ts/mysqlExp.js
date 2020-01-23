"use strict";
//实现泛型接口的类必须是泛型类
var MysqlDbs = /** @class */ (function () {
    function MysqlDbs() {
    }
    MysqlDbs.prototype.add = function (info) {
        console.log(info);
        return true;
    };
    MysqlDbs.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    MysqlDbs.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    MysqlDbs.prototype.get = function (id) {
        throw new Error("Method not implemented.");
    };
    return MysqlDbs;
}());
//实现泛型接口的类必须是泛型类
var MssqlDb = /** @class */ (function () {
    function MssqlDb() {
    }
    MssqlDb.prototype.add = function (info) {
        console.log(info);
        return true;
    };
    MssqlDb.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    MssqlDb.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    MssqlDb.prototype.get = function (id) {
        throw new Error("Method not implemented.");
    };
    return MssqlDb;
}());
//操作用户表 定义一个user类和数据库表做映射
var Usera = /** @class */ (function () {
    function Usera(username, password) {
        this.username = username;
        this.password = password;
    }
    return Usera;
}());
var abc = new Usera('abc', '123456');
var oMysql = new MysqlDbs();
oMysql.add(abc);
// var abc = new Usera('abc','123456')
var oMssql = new MssqlDb();
oMssql.add(abc);
