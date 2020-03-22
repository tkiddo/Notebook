JSON(Javascript Object Notation,Javascript 对象表示法),是JavaScript的一个严格的子集，利用了JavaScript中的一些模式来表示结构化数据结构。**JSON是一种数据格式，不是一种编程语言。**
JSON的语法可以表示以下三种类型的值：
+ 简单值：包括字符串，数值，布尔值和`null`,但不支持`undefined`。
+ 对象：每个键值对的值可以是简单值，也可以是对象，数组。
+ 数组：数组的值也可以是简单值，对象，数组。
JSON中所有字符串必须使用**双引号**，JSON中对象的属性也需要加引号。
JSON对象有两个方法：`stringify()`,`parse()`
+ `JSON.stringify()`
该方法用于把JSON对象序列化为JSON字符串。在序列化过程中，函数及原型都会被有意忽略，值为`undefined`的属性也会被跳过。`JSON.stringify()`可以接收三个参数：第一个是要序列化的Javascript对象；第二个是过滤器，可以是一个数组，也可以是一个函数；第三个是一个选项，表示是否在字符串中保留缩进。
关于过滤器:如果是一个数组，则返回的字符串中只包含过滤器中包含的属性；如果是一个函数，入参时属性名和属性值，返回处理后的属性值，**在开始时, 过滤器函数会被传入一个空字符串作为 key 值，代表着要被 stringify 的这个对象。随后每个对象或数组上的属性会被依次传入。**
````javascript
       let data ={
            name:'king',
            age:12
        }
        let str = JSON.stringify(data,function(key,value){
            switch(key){
                case "name":
                    return `${key}-${value}`
                default:
                    return value
            }
        })
        console.log(str) //{"name":"name-king","age":12}
````
+ `JSON.parse()`
`JSON.parse()`用于将JSON字符串解析成原生JavaScript值。可以接收两个参数，第一个是需要解析的字符串；第二个是一个还原函数，将在每个键值对上使用，传入一个键和一个值，返回一个值。
````javascript
       let obj = JSON.parse(str,(key,value)=>{
            if(key==='age'){
                return value+1
            }
            return value
        })
        console.log(obj)  //{name: "name-king", age: 13}
````
