#### 1.默认情况下，背景会延伸至边框所在的区域下层。
**案例**：半透明边框没有出现
````css
  .clip{
            width:100px;
            height: 100px;
            border:10px dashed hsla(0, 0%, 100%, .5);
            background: white;
             /* background-clip: padding-box; */
        }
````
以上css样式在浏览器上的展示是这样子的，并没有出现半透明的边框：
![半透明未出现.jpg](https://upload-images.jianshu.io/upload_images/13613564-bda3d69e5427546a.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
**解决办法**：`background-clip`,初始值为`border-box`,即背景会被元素的`border-box`裁切掉，如果不希望背景入侵边框所在的范围，就把它的值设定为`padding-box`,以上代码取消注释即可，效果是这样的：
![半透明边框出现.jpg](https://upload-images.jianshu.io/upload_images/13613564-c33ef44d9860f4e2.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### 2.多重边框
**实现方法**：`box-shadow`,`outline`(仅两层边框)
+ box-shadow
````css
box-shadow: h-shadow v-shadow blur spread color inset;
````
        h-shadow	必需。水平阴影的位置。允许负值。	
        v-shadow	必需。垂直阴影的位置。允许负值。	
        blur	可选。模糊距离。	
        spread	可选。阴影的尺寸。	
        color	可选。阴影的颜色。	
        inset	可选。将外部阴影 (outset) 改为内部阴影。
**box-shadow的好处在于可以用逗号分隔，可以创建任意数量的投影。**
例如：
````css
.shadow{
            width:100px;
            height: 100px;
            background:green;
            padding:10px;
            box-shadow: 0 0 10px 10px burlywood inset,0 0 0 10px deeppink,0 0 0 20px darkblue;
        }
````
![多重边框.jpg](https://upload-images.jianshu.io/upload_images/13613564-f58e0577522dbd0c.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
**注意**：
1. 投影的行为和边框不完全一致，它不会影响布局，也不会收到box-sizing的影响
2. `box-shadow`属性中的`inset`关键字来使投影绘制在元素的内圈，此时需要设置额外的内边距来腾出足够的空间
3. `box-shadow`是层层叠加的，多层边框时需要按规律调整扩张半径，例如例子中，第一层为内边框，第二层尺寸为10px，第三层尺寸为20px
+ outline
`outline`属性用于描边，产生额外的外层边框
**好处**：可以通过`outline-offset`来控制描边与元素边缘之间的距离。
**注意**：
1.只能用于双层边框，因为不能加逗号分隔
 2.不能贴合圆角
````css
.outline{
            width:100px;
            height: 100px;
            border:10px solid darkgrey;
            outline: 5px solid deeppink;
            background:white;
        }
 .dashoutline{
            width:100px;
            height: 100px;
            border-radius: 10px;
            background:white;
            outline: 1px dashed #111;
            outline-offset: -10px;
        }
````
![outline实现双边框和缝线效果.jpg](https://upload-images.jianshu.io/upload_images/13613564-3087b0b193674961.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### 3.边框内圆角
**实现：**利用outline不会跟着元素的圆角走，但box-shadow会跟着圆角走来实现。
````css
.inradius{
            width:100px;
            height: 100px;
            background:lightcoral;
            border-radius: 10px;
            box-shadow: 0 0 0 10px deeppink;
            outline:10px solid deeppink;
        }
````
![边框内圆角.png](https://upload-images.jianshu.io/upload_images/13613564-5eab729d8fca3062.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)



