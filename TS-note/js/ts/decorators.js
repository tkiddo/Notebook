"use strict";
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var de;
(function (de) {
    //装饰器
    function logClass(params) {
        console.log(params);
        //params为当前类
        params.prototype.apiUrl = 'xxxx';
        params.prototype.run = function () {
            console.log('running');
        };
    }
    //装饰器工厂
    function log(params) {
        return function (target) {
            //params参数，target为当前类
            console.log(params);
            console.log(target);
        };
    }
    //普通装饰器,无法传参
    var HttpClient = /** @class */ (function () {
        function HttpClient() {
        }
        HttpClient.prototype.getData = function () {
            console.log('getData');
        };
        HttpClient = __decorate([
            logClass
            //装饰器工厂，可以传参
            ,
            log('hello')
        ], HttpClient);
        return HttpClient;
    }());
    var h = new HttpClient();
    console.log(h.apiUrl);
    h.run();
})(de || (de = {}));
//类装饰器,修改当前类的属性和方法
var api;
(function (api) {
    function logClass(target) {
        console.log(target);
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.apiUrl = 'apiurl----fix';
                return _this;
            }
            class_1.prototype.getData = function () {
                console.log(this.apiUrl);
            };
            return class_1;
        }(target));
    }
    var HttpClient = /** @class */ (function () {
        function HttpClient() {
            this.apiUrl = 'apiUrl-----1';
        }
        HttpClient.prototype.getData = function () {
            console.log(this.apiUrl);
        };
        HttpClient = __decorate([
            logClass
        ], HttpClient);
        return HttpClient;
    }());
    var a = new HttpClient();
    a.getData();
})(api || (api = {}));
//属性装饰器
var proxy;
(function (proxy) {
    //类装饰器
    function logClass(params) {
        return function (target) {
            //params参数，target为当前类
            // console.log(params);
            // console.log(target);
        };
    }
    //属性装饰器
    function logProperty(params) {
        return function (target, attr) {
            //params参数,target为当前类，attr为属性名
            // console.log(target);
            // console.log(params);
            target[attr] = params;
        };
    }
    //方法装饰器
    function logMethod(params) {
        return function (target, methodName, desc) {
            //target:静态成员来说是类的构造函数，对于实例成员是类的原型对象
            //methodName:成员的名字
            //desc:成员的属性描述符
            console.log(target, methodName, desc, params);
            target.apiUrl = params;
        };
    }
    var HttpClient = /** @class */ (function () {
        function HttpClient() {
            this.apiUrl = 'apiUrl-----4';
        }
        HttpClient.prototype.getData = function () {
            console.log(this.apiUrl);
        };
        __decorate([
            logProperty('proerty')
        ], HttpClient.prototype, "apiUrl", void 0);
        __decorate([
            logMethod('http://')
        ], HttpClient.prototype, "getData", null);
        HttpClient = __decorate([
            logClass('xxxxx')
        ], HttpClient);
        return HttpClient;
    }());
    var a = new HttpClient();
    a.getData();
})(proxy || (proxy = {}));
