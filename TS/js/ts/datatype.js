"use strict";
console.log('hello');
var str = '111';
function hello(params) {
    console.log(params);
}
// hello(str)
/*2
tsz中代码必须指定类型

 */
//boolean
var flag = true;
flag = false;
//number
//string
//array 2种方式
//1.
var arr = [11];
// console.log(arr)
//2.
var arr2 = [11];
//3.
var arr3 = ['1', 2];
//元祖类型tuple 属于数组的一种
var tup = [123, 'string'];
console.log(tup);
//枚举类型enum 默认从0开始
/*
enum name{
    标识符[=整形常数],
    标识符[=整形常数],
}
 */
var Flag;
(function (Flag) {
    Flag[Flag["success"] = 1] = "success";
    Flag[Flag["error"] = 6] = "error";
    Flag[Flag["no"] = 7] = "no";
})(Flag || (Flag = {}));
var s = Flag.no;
console.log(s);
//any
var box = document.getElementById('box');
box.style.color = 'red';
//null,undefined 其他类型的子类型
//定义未赋值就是undefined
var num;
console.log(num);
var n;
var o; //指定多种类型
//void 方法没有返回值
function run(params) {
    console.log('方法没有返回值');
}
function run1(params) {
    console.log('返回布尔类型');
    return params;
}
//never 其他类型的子类型，代表从不出现的值
//never类型只能被never类型赋值
// let a:never;
// a=(()=>{
//     throw new Error('e')
// })()
// console.log(a)
//3.1 函数的定义
//3.2 可选参数 ts函数中实参和形参必须一样
//可选参数必须配置到最后
//3.3 默认参数
var getInfo = function (name, age, gender) {
    if (gender === void 0) { gender = 'male'; }
    return name + "," + age + "," + gender;
};
console.log(getInfo('l', 10));
console.log(getInfo('l', 11, 'female'));
//3.4剩余参数
var sum = function (a) {
    var result = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        result[_i - 1] = arguments[_i];
    }
    var sum = 0;
    for (var index = 0; index < result.length; index++) {
        var element = result[index];
        sum += element;
    }
    return sum;
};
console.log(sum(1, 2, 3, 4));
function getUser(params) {
    if (typeof params === 'string') {
        return "name--" + params;
    }
    else {
        return "age--" + params;
    }
}
console.log(getUser('king'));
