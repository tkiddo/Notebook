在使用简单的skew()进行拉伸后，我们发现其容器的内容也发生了斜向变形，这是我们不希望看到的，解决这个问题的方法主要有嵌套元素法和伪元素法。
+ 方法一：嵌套元素
我们对外层元素skew(45deg)后，再对内层元素skew(-45deg)，使内层元素变为原来的样子。
````
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>平行四边形</title>
    <style>
        div{
            margin:50px;
        }
        .paral{
            width: 100px;
            height: 50px;
            background: lightseagreen;
            color:white;
            font-size: 24px;
            font-weight: bold;
            transform: skew(-45deg);
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .in{
            transform: skew(45deg);
        }
    </style>
</head>
<body>
    <div class="paral">
        <div class="in">hello</div>
    </div>
</html>
````
![嵌套元素法实现平行四边形.jpg](https://upload-images.jianshu.io/upload_images/13613564-8c54f80c01296c50.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
+ 伪元素法
把与内容无关的样式应用到伪元素上，再对伪元素进行变形即可。
````
     .button{
            width:200px;
            height: 100px;
            color:white;
            font-size: 26px;
            font-weight: bold;
            text-align: center;
            line-height: 100px;
            position: relative;
        }
        .button::before{
            content:'';
            transform: skew(-45deg);
            background:lightseagreen;
            position:absolute;
            z-index: -1;
            top:0;
            left: 0;
            bottom: 0;
            right: 0;
        }
````
这个技巧还适用与于**任何想变形一个元素而不想使其内容受到影响的情况**。
