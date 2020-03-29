#### Error类型
+ `EvalError`<br>
创建一个`error`实例，表示错误的原因：与 `eval() `有关。
+ `RangeError`<br>
创建一个`error`实例，表示错误的原因：数值变量或参数超出其有效范围。
````js
try{
    new Array(-1)
}catch(e){
    console.log(e) //RangeError: Invalid array length
}
````
+ `ReferenceError`<br>
创建一个`error`实例，表示错误的原因：无效引用。
````js
try{
    let a = t+1
}catch(e){
    console.log(e) //ReferenceError: t is not defined
}
````
+ `SyntaxError`<br>
创建一个`error`实例，表示错误的原因：`eval()`在解析代码的过程中发生的语法错误。
````js
let 1a=1;
// Uncaught SyntaxError: Invalid or unexpected token
````
+ `TypeError`<br>
创建一个`error`实例，表示错误的原因：变量或参数不属于有效类型。
````js
try{
    let a =1
    a.push(1)
}catch(e){
    console.log(e) //TypeError: a.push is not a function
}
````
+ `URIError`<br>
创建一个`error`实例，表示错误的原因：给 `encodeURI()`或  `decodeURl()`传递的参数无效。