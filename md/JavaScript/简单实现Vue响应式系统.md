Vue的响应式系统是基于`Object.defineProperty`实现的，所以先来了解`Object.defineProperty`是非常有必要的。
在MDN上，可以非常明确地看到其作用和用法。**`Object.defineProperty()` 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性， 并返回这个对象。**
**语法**：`Object.defineProperty(obj, prop, descriptor)`
其中，`obj`是要在其上定义属性的对象。`prop`是要定义或修改的属性的名称。`descriptor`是将被定义或修改的属性描述符。
前两个参数比较好理解，至于第三个参数**属性描述符**，参见MDN：[https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)
Vue中使用的是**存取描述符**,有以下四个属性：
+ `configurable`:为`true`时，该属性能够修改，默认为`false`
+ `enumerable`:当且仅当该属性的`enumerable`为`true`时，该属性才能够出现在对象的枚举属性中。默认为` false`。
+ `get`:给属性提供`getter`方法
+ `set`:给属性提供`setter`方法

知道了`Object.defineProperty`之后，我们来实现Vue的响应式系统。
1. 首先，我们定义Vue函数，以及函数`cb`来模拟视图更新：
````
//test.js
function Vue(options){
}
function cb(){
    console.log('更新啦！')
}
````
引入js,
````
//index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="./test.js"></script>
</head>
<body>
    
</body>
<script>
    const vm = new Vue({
        data:{
            name:'a',
        }
    })
</script>
</html>
````
我们给new的Vue对象传入一个包含`data`属性的对象，我们要达到的效果是当`data`中的任一属性值发生变化时，视图更新，即调用`cb`函数。
2. 接下来，定义`defineReactive`函数,
````
//test.js
function defineReactive(obj,key,val){
    Object.defineProperty(obj,key,{
        configurable:true,
        enumerable:true,
        get:function(){
            return val
        },
        set:function(newVal){
            if(newVal===val){
                return
            }
            val = newVal
            cb()
        }
    })
}
````
这段代码中，形参`obj`表示需要捆绑的对象，`key`表示`obj`的一个属性名，`val`表示属性值。在经过`defineReactive`处理后，我们在访问`obj`的属性时，会调用`getter`方法，在更改属性时会调用`setter`方法。
3. 然后，我们需要为data的每一个属性都进行**响应式**处理。
````
//test.js
function observe(obj){
    Object.keys(obj).forEach(key=>{
        defineReactive(obj,key,obj[key])
    })
}
````
其中，`Object.keys(obj)`返回obj的属性名组成的数组。
4. 整合起来，就是这样的：
````
//test.js
function Vue(options){
    this._data = options.data
    observe(this._data)
}

function cb(){
    console.log('更新啦！')
}

function observe(obj){
    Object.keys(obj).forEach(key=>{
        defineReactive(obj,key,obj[key])
    })
}
function defineReactive(obj,key,val){
    Object.defineProperty(obj,key,{
        configurable:true,
        enumerable:true,
        get:function(){
            return val
        },
        set:function(newVal){
            if(newVal===val){
                return
            }
            val = newVal
            cb()
        }
    })
}
````
5. 测试，我们在`index.html`中更改Vue对象中`name`的值，如果调用了`cb`函数，即为成功。
````
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="./test.js"></script>
</head>
<body>
    
</body>
<script>
    const vm = new Vue({
        data:{
            name:'a',
        }
    })
    vm._data.name='b'
</script>
</html>
````
![控制台.jpg](https://upload-images.jianshu.io/upload_images/13613564-3a76d320de61a285.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
*Bingo!*

