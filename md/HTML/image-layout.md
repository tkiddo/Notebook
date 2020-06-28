## HTML 中有关图片处理的几种情况

#### 背景大图

场景：主页背景图，沾满全屏。

```css
<style>
	.bg {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-image: url('./a.png');
		background-size: cover;
		background-position: center 0;
	}
</style>
```

#### 图片在固定宽高的框中居中显示

场景：列表项展示图，外容器固定宽高，但图片尺寸不一，需要在同样的框中显示，图片保持宽高比。

- 方法一：`object-fit`+`object-position`

`object-fit` 属性指定**可替换元素**的内容应该如何适应到其使用的高度和宽度确定的框。取值参见[MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/object-fit)

`object-position`属性用于指定**可替换元素**在内容框中的位置。取值参见[MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/object-position)

所谓可替换元素，简单地说，这种元素一般有固定的尺寸，`CSS`可以影响该元素的样式，但不能影响元素内容的样式，比如`img`标签，浏览器会根据`src`属性来渲染该标签，尺寸根据图片内容而定。`CSS`可以改变其尺寸，位置，但不能改变其内容的样式。相对的，比如`div`元素，`CSS`不仅可以影响其本身，也能影响`div`里的内容，这样的元素就是非替换元素。

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Document</title>
		<style>
			.img-wrapper {
				width: 300px;
				height: 200px;
				border: 1px solid lightblue;
				padding: 20px;
				margin: 10px 0;
			}
			.img-wrapper img {
				width: 100%;
				height: 100%;
				object-fit: scale-down;
				object-position: center;
			}
		</style>
	</head>
	<body>
		<div class="img-wrapper">
			<img src="./a.png" />
		</div>
		<div class="img-wrapper">
			<img src="./b.png" />
		</div>
		<div class="img-wrapper">
			<img src="./c.png" />
		</div>
	</body>
</html>
```

- 方法二：作为背景图，利用`background-size`规定背景绘制的尺寸,`background-position`规定背景位置,`background-clip`规定背景绘制的区域

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Document</title>
		<style>
			.float {
				float: left;
				margin-right: 20px;
			}
			.img-bg {
				width: 300px;
				height: 200px;
				border: 1px solid lightblue;
				padding: 20px;
				margin: 10px 0;
				box-sizing: border-box;
				background-size: contain;
				background-position: center;
				background-repeat: no-repeat;
				background-clip: content-box;
			}
			.img-bg:nth-child(1) {
				background-image: url('./a.png');
			}
			.img-bg:nth-child(2) {
				background-image: url('./b.png');
			}
			.img-bg:nth-child(3) {
				background-image: url('./c.png');
			}
			.img-bg:nth-child(4) {
				background-image: url('./d.png');
			}
		</style>
	</head>
	<body>
		<div class="float">
			<div class="img-bg"></div>
			<div class="img-bg"></div>
			<div class="img-bg"></div>
			<div class="img-bg"></div>
		</div>
	</body>
</html>
```

两种方法的实际效果根据图片尺寸不同会略有差别，第一列为方法一效果，第二列为方法二效果。根据实际情况选取合适的方法。推荐方法一。

![demo.jpg](https://github.com/justforfunmy/Notebook/blob/master/md/HTML/image-layout/demo.jpg)
