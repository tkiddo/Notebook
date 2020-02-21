"use strict";
//5.1属性接口 对json 的约束
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
function printName(name) {
    console.log(name.firstName + " " + name.secondName + " " + (name.lastName ? name.lastName : ''));
}
function printInfo(params) {
    console.log("hi," + params.firstName);
}
printName({ firstName: 'king', secondName: 'wang' });
printInfo({ firstName: 'sara', secondName: 'l' });
function ajax(params) {
    var xhr = new XMLHttpRequest();
    xhr.open(params.type, params.url, true);
    xhr.send(params.data);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log('success');
            if (params.dataType === 'json') {
                console.log(JSON.parse(xhr.responseText));
            }
            else {
                console.log(xhr.responseText);
            }
        }
    };
}
var md5 = function (key, value) {
    return key + value;
};
var sha = function (key, value) {
    return key + '-----' + value;
};
console.log(md5('11', '22'));
console.log(sha('11', '22'));
var ar = ['king'];
console.log(ar[0]);
var ob = { name: 'king' };
console.log(ob);
var HDog = /** @class */ (function () {
    function HDog(name) {
        this.name = name;
    }
    HDog.prototype.eat = function () {
        console.log(this.name + ' eat bones');
    };
    return HDog;
}());
var hei = new HDog('xiaohei');
hei.eat();
var HCat = /** @class */ (function () {
    function HCat(name) {
        this.name = name;
    }
    HCat.prototype.eat = function () {
        console.log(this.name + ' eat fish');
    };
    return HCat;
}());
var hat = new HCat('xiaohua');
hat.eat();
var WebWorker = /** @class */ (function () {
    function WebWorker(name) {
        this.name = name;
    }
    //实现PersonT接口的方法
    WebWorker.prototype.work = function () {
        console.log(this.name + ' is working');
    };
    //实现AnimalT接口的方法
    WebWorker.prototype.eat = function () {
        console.log(this.name + ' is eatting');
    };
    return WebWorker;
}());
var wW = new WebWorker('xiaoli');
wW.eat();
wW.work();
var Programmer = /** @class */ (function () {
    function Programmer(name) {
        this.name = name;
    }
    Programmer.prototype.coding = function () {
        console.log(this.name + ' is coding');
    };
    return Programmer;
}());
var webFront = /** @class */ (function (_super) {
    __extends(webFront, _super);
    function webFront(name) {
        return _super.call(this, name) || this;
    }
    //实现PersonT接口的方法
    webFront.prototype.work = function () {
        console.log(this.name + ' is working');
    };
    //实现AnimalT接口的方法
    webFront.prototype.eat = function () {
        console.log(this.name + ' is eatting');
    };
    return webFront;
}(Programmer));
var xiaohe = new webFront('xiaohe');
xiaohe.coding();
