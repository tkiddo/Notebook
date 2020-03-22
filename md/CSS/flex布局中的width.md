#### 举个例子：左边元素定宽，右边元素占满余下部分
```` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        *{
            margin:0;
            padding:0;
        }
        .flex{
            display: flex;
            height: 100px;
        }
        .left{
            flex:0 0 100px;
            background: red;
        }
        .right{
            flex:1;
            background: green;
        }
    </style>
</head>
<body>
    <div class="flex">
        <div class="left"></div>
        <div class="right"></div>
    </div>
</body>
</html>
````
#### 关于flex容器内元素的flex属性的解释
flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。
+ flex-grow<br>
flex-grow定义对额外空间的占有量，默认0，即表示有多余的空间也不要。
```` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        *{
            margin:0;
            padding:0;
        }
        .flex{
            display: flex;
            height: 100px;
        }
        .box{
            width:100px;
            background: red;
            margin-right: 10px;
        }
        .flex-box{
            flex:1
        }
    </style>
</head>
<body>
    <div class="flex">
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
    </div>
</body>
</html>
````
![1.png](https://upload-images.jianshu.io/upload_images/13613564-e4d5a82c13789c8d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
      当给最后一个box加上flex-box的类，即设置flex:1，则最后一个box会占据剩下空间，如果给每个box设置不同的flex值，则会按比例分配剩下的空间。
```` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        *{
            margin:0;
            padding:0;
        }
        .flex{
            display: flex;
            height: 100px;
        }
        .box{
            width:100px;
            background: red;
            margin-right: 10px;
        }
        .flex-1{
            flex:1
        }
        .flex-2{
            flex:2
        }
        .flex-3{
            flex:3
        }
    </style>
</head>
<body>
    <div class="flex">
        <div class="box flex-1"></div>
        <div class="box flex-2"></div>
        <div class="box flex-3"></div>
    </div>
</body>
</html>

````
![2.png](https://upload-images.jianshu.io/upload_images/13613564-9df7eea1d34f3ff7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

+ flex-shrink<br>
和flex-grow相反，即当各个元素所占空间之和大于容器时，压缩每个元素的比例，默认是1.如果没有显示定义该属性，将会自动按照默认值1在所有因子相加之后计算比率来进行空间收缩。
```` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        *{
            margin:0;
            left:0;
        }
        .flex{
            width:300px;
            height: 100px;
            display: flex;
            border: 1px solid #111;
            margin:20px;
        }
        .box{
            width: 120px;
            height: 100px;
            background: red;
            margin-right: 10px;
            flex-shrink: 0;
        }
    </style>
</head>
<body>
    <div class="flex">
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
    </div>
</body>
</html>
````
1.当设置box的flex-shrink为0时，即不论超出多少，都不压缩子元素的空间，如下图
![3.png](https://upload-images.jianshu.io/upload_images/13613564-5801f72d239dcdd8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
2.当每个box设置flex-shrink为1时，即三个box压缩同样的比例，如下图
![4.png](https://upload-images.jianshu.io/upload_images/13613564-0208796b24e54aab.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
3.当给每个box设置flex-shrink依次为1,2,3时，子元素会按照比例来压缩，如图
![5.png](https://upload-images.jianshu.io/upload_images/13613564-80fb6f12c9f5faa8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

+ flex-basis<br>
表示在分配额外空间之前，成员占据的空间，默认值为auto，意思就是你本来占多少就是多少。但也可以自己设置长度(px)。这个值的效果就是确定在释放和分配空间的时候，你的初值是多少,即flex items 在被放进一个flex容器之前的大小

+ 常用值<br>
flex：auto；  等同于 flex：1 1 auto; 意思就是占满额外空间，可缩放。<br>
flex:none;  等同于flex：0 0 auto；  意思是不占额外空间，不可缩放。

