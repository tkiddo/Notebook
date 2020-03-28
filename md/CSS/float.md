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
            line-height: 50px;
            text-align: center;
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
        <div class='box'>1</div>
        <div class='box'>2</div>
        <div class='box'>3</div>
        <div class='box'>4</div>
    </div>
</body>
</html>
````
![float](https://github.com/justforfunmy/Notebook/blob/master/CSS/%E6%B5%AE%E5%8A%A8/float.jpg)
#### 关于清除浮动
清除浮动可以用`clear`属性，取值：
+ `none`：元素不会向下移动清除之前的浮动,即允许两边有浮动对象
+ `left`：元素被向下移动用于清除之前的左浮动，即不允许左边有浮动对象
+ `right`：元素被向下移动用于清除之前的右浮动，即不允许右边有浮动对象
+ `both`：元素被向下移动用于清除之前的左右浮动，即不允许两边有浮动对象
+ `inline-start`：该关键字表示该元素向下移动以清除其包含块的起始侧上的浮动。即在某个区域的左侧浮动或右侧浮动。
+ `inline-end`：该关键字表示该元素向下移动以清除其包含块的末端的浮点，即在某个区域的右侧浮动或左侧浮动。

##### 对于CSS的清除浮动(clear)，一定要牢记：这个规则只能影响使用清除的元素本身，不能影响其他元素。

那么，如果清除第二个`div`左浮动，则：
````css
.box:nth-child(2){
    clear:left;
}
````
![float](https://github.com/justforfunmy/Notebook/blob/master/CSS/%E6%B5%AE%E5%8A%A8/2-clear-left.png)
因为清除浮动只能影响元素本身，为了使第二个`div`左边没有浮动元素，又不能让第一个`div`改变位置，所以只能使自己向下移动一行。这里注意，即使给这个`div`清除右浮动，并不会有效果，因为它不能使后一个`div`改变位置，只能作用在自己身上。

#### 关于父元素高度塌陷
同上的布局，可以发现，父元素`.wrapper`虽然设置了`background`,却依然没有效果，因为浮动元素脱离了文档流，即对父元素而言，并没有元素占用了空间，所以高度无法撑开。通常有两种方法可以解决，清除浮动和BFC：
+ 清除浮动
````css
.wrapper::after{
    content: '';
    display: block;
    clear: both;
}
````
这样做的原理相当于在最后一个子元素后边添加一个空`div`，因为清除了浮动，所以会到浮动元素的下面一行，高度就撑开了。
+ BFC
触发BFC的方法有很多，详见我写的[BFC](https://github.com/justforfunmy/Notebook/blob/master/md/CSS/%E5%9D%97%E6%A0%BC%E5%BC%8F%E5%8C%96%E4%B8%8A%E4%B8%8B%E6%96%87%EF%BC%88Block-Formatting-Context%EF%BC%8CBFC%EF%BC%89.md)章节，常见的方式可以是：
````css
.wrapper{
    overflow:hidden
}
````
![height](https://github.com/justforfunmy/Notebook/blob/master/CSS/%E6%B5%AE%E5%8A%A8/height.jpg)



