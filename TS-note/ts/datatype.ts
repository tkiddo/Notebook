console.log('hello')
let str:string ='111'
function hello(params:string) {
    console.log(params)
}

// hello(str)


/*2
tsz中代码必须指定类型

 */
//boolean
var flag:boolean=true;
flag=false;

//number
//string


//array 2种方式
//1.
var arr:number[]=[11]
// console.log(arr)
//2.
var arr2:Array<number>=[11]
//3.
var arr3:any[]=['1',2]



//元祖类型tuple 属于数组的一种
let tup:[number,string]=[123,'string']
console.log(tup)

//枚举类型enum 默认从0开始
/*
enum name{
    标识符[=整形常数],
    标识符[=整形常数],
}
 */
enum Flag{success=1,error=6,'no'}

let s:Flag=Flag.no;
console.log(s)

//any
let box:any=document.getElementById('box')
box.style.color='red'



//null,undefined 其他类型的子类型
//定义未赋值就是undefined
let num:undefined;
console.log(num)

let n:null;

let o:number|null|undefined;//指定多种类型


//void 方法没有返回值
function run(params:boolean):void {
    console.log('方法没有返回值')
}

function run1(params:boolean):boolean {
    console.log('返回布尔类型')
    return params
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
let getInfo=(name:string,age?:number,gender:string='male'):string=>{
    return `${name},${age},${gender}`
}

console.log(getInfo('l',10))

console.log(getInfo('l',11,'female'))

//3.4剩余参数
let sum=(a:number,...result:number[]):number=>{
    let sum=0;
    for (let index = 0; index < result.length; index++) {
        const element = result[index];
        sum+=element
        
    }

    return sum
}

console.log(sum(1,2,3,4))



//3.5函数重载
//通过为同一个函数提供多个函数类型定义来实现多种功能的目的
function getUser(params:string):string;
function getUser(params:number):number;
function getUser(params:any):any {
    if(typeof params==='string'){
        return `name--${params}`
    }else{
        return `age--${params}`
    }
}

console.log(getUser('king'))


