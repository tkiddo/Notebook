#### 关于浮动
在标准的文档流中，`div`元素会独占一行，但在实际的布局中经常会遇到让多个`div`显示在一行中的需求，浮动就是解决这个需求的一种方法。**浮动可以理解为让元素脱离标准文档流，漂浮于标准文档流之上，和标准文档流不在一个层次上**。如下图所示：
````html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .wrapper{
            background: #666;
        }

        .box{
            width:50px;
            height: 50px;
            float:left;
        }
        .box:nth-child(odd){
            background: tomato;
        }
        .box:nth-child(even){
            background:wheat;
        }
    </style>
</head>
<body>
    <div class='wrapper'>
        <div class='box'></div>
        <div class='box'></div>
        <div class='box'></div>
        <div class='box'></div>
    </div>
</body>
</html>
````
![float]()
#### 关于清除浮动
清除浮动可以用`clear`属性，取值：
+ `none`：元素不会向下移动清除之前的浮动,即允许两边有浮动对象
+ `left`：元素被向下移动用于清除之前的左浮动，即不允许左边有浮动对象
+ `right`：元素被向下移动用于清除之前的右浮动，即不允许右边有浮动对象
+ `both`：元素被向下移动用于清除之前的左右浮动，即不允许两边有浮动对象
+ `inline-start`：该关键字表示该元素向下移动以清除其包含块的起始侧上的浮动。即在某个区域的左侧浮动或右侧浮动。
+ `inline-end`：该关键字表示该元素向下移动以清除其包含块的末端的浮点，即在某个区域的右侧浮动或左侧浮动。

##### 对于CSS的清除浮动(clear)，一定要牢记：这个规则只能影响使用清除的元素本身，不能影响其他元素。

