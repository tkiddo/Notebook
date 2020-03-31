## JS中的类型转换

### JS数据类型

原始类型:`Number,String,Undefined,Null,Boolean,Symbol`
引用类型：`Object`

### 原始值,对象转Boolean

使用 `Boolean` 函数将类型转换成布尔类型，除了`false,'',0,NaN,undefined,null`可以转换成`false`,其他都转换成`true`
````js
    console.log(Boolean(''))//false
    console.log(Boolean(0))//false
    console.log(Boolean(NaN))//false
    console.log(Boolean(undefined))//false
    console.log(Boolean(null))//false
    console.log(Boolean(false))//false
    console.log(Boolean(' '))//true,空格不算空字符
    console.log(Boolean())//false 注意，当 Boolean 函数不传任何参数时，会返回 false。
    console.log(Boolean({}))//true 所有对象(包括数组和函数)都转换为 true。
````

### 原始值，对象转数值

+ `Number()`

根据参数不同类型，可以分为以下情况：

1. `Boolean`：`true`和`false`对应`1`和`0`
2. `Null`：`null`对应`0`
3. `Undefined`：`undefined`对应`NaN`
4. `Number`：不变
5. `String`：
    
    5.1 字符串只包含数字，将其转化为十进制

    5.2 字符串中包含有效的浮点，则转换为浮点数值

    5.3 字符串中包含有效的十六进制，则转化为相同大小的十进制数

    5.4 字符串为空，转化为`0`

    5.5 其他情况，返回`NaN`

6. 对象，先调用对象`valueOf（）`方法，对返回值按前面的规则转换，如果返回`NaN`，则调用`toString()`方法，再按前面的规则转换

**一元加操作符的操作与 Number()函数相同。**

````js
    //1.Boolean，true和false对应1和0
    console.log(Number(true), Number(false))//1 0
    //2.Null,null对应0
    console.log(Number(null))//0
    //3.Undefined,undefined对应NaN
    console.log(Number(undefined))//NaN
    //4.Number,不变
    console.log(Number(12))//12
    //5.String
    //5.1 字符串只包含数字，将其转化为十进制
    console.log(Number('0123'))//123,前导0忽略
    //5.2 字符串中包含有效的浮点，则转换为浮点数值
    console.log(Number('01.2'))//1.2,前导0忽略
    //5.3 字符串中包含有效的十六进制，则转化为相同大小的十进制数
    console.log(Number('0xF'))//15
    //5.4 字符串为空，转化为0
    console.log(Number(''))//0
    //5.5 其他情况，返回NaN
    console.log(Number('01.2.3'))//NaN
    //6.对象，先调用对象valueOf（）方法，对返回值按前面的规则转换，如果返回NaN，则调用toString()方法，再按前面的规则转换
    console.log(Number({ a: '1' }))//NaN
    console.log(Number(new Date()))//1585637561096,当前时间的毫秒数
````

+ `parseInt()`

用于字符串转`Int`,忽略前导空格，如果第一个非空字符不是数字字符或者负号，返回`NaN`。解析直到遇到一个非数字字符为止
````js
    console.log(parseInt(''))//NaN
    console.log(parseInt(' 23.5'))//23，小数点不是数字字符
    console.log(parseInt('0xA'))//10,十六进制转十进制
````

+ `parseFloat()`

用于字符串转`float`，始终忽略前导`0`，所以只能解析十进制，第一个小数点有效

````js
    console.log(parseFloat('0xA.5'))//0
    console.log(parseFloat('01.2.4'))//1.2
````

### 原始值，对象转字符串

`toString()`:数值，字符串，对象，布尔值都有`toString()`方法，`undefined`和`null`没有

`String()`:对于`null`和`undefined`，可以用`String()`方法

````js
    const num = 10
    console.log(num.toString())//'10'
    console.log({ name: 'a' }.toString())//'[object Object]'
    const bool = true
    console.log(bool.toString())//'true'
    const str = '232'
    console.log(str.toString(str))//'232'
    console.log(String(null))//'null'
    console.log(String(undefined))//'undefined'
````

对象转字符串：

1. 如果对象具有 `toString` 方法，则调用这个方法。如果他返回一个原始值，`JavaScript` 将这个值转换为字符串，并返回这个字符串结果。
2. 如果对象没有 `toString` 方法，或者这个方法并不返回一个原始值，那么 `JavaScript` 会调用 `valueOf` 方法。如果存在这个方法，则 `JavaScript` 调用它。如果返回值是原始值，`JavaScript` 将这个值转换为字符串，并返回这个字符串的结果。
3. 否则，`JavaScript` 无法从 `toString` 或者 `valueOf` 获得一个原始值，这时它将抛出一个类型错误异常。

特殊地：
1. 数组的 `toString` 方法将每个数组元素转换成一个字符串，并在元素之间添加逗号后合并成结果字符串。
2. 函数的 `toString` 方法返回源代码字符串。
3. 日期的 `toString` 方法返回一个可读的日期和时间字符串。
4. `RegExp` 的 `toString` 方法返回一个表示正则表达式直接量的字符串。

````js
    console.log([1, 2, 3].toString()) // 1,2,3
    console.log((function () { var a = 1; }).toString()) // function (){var a = 1;}
    console.log((/\d+/g).toString()) // /\d+/g
    console.log((new Date(2010, 0, 1)).toString()) // Fri Jan 01 2010 00:00:00 GMT+0800 (CST)
````


### 原始值转对象

通过`String，Number，Boolean`构造函数
````js
    const a = 1
    console.log(typeof a)//number
    console.log(typeof new Number(a))//object
````