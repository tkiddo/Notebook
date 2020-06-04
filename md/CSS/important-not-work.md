#### css中!important 无效的问题

````html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
	<style>
		.wrapper{
			color:blue !important;
		}
		.box{
			color:green;
		}
	</style>
</head>
<body>
	<div class='wrapper'>
		<div class='box'>文字</div>
	</div>
</body>
</html>

````

为什么不是蓝色？

color是一个可以继承的属性，也就是如果内部的元素找不到color就从外面一层层找出去，但是内部元素本身就有color的话就使用内部的color，就算外部的color加!important也没用。

如果你希望 `scoped` 样式中的一个选择器能够作用得“更深”，例如影响子组件，你可以使用 `>>>` 操作符

````html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
	<style>
		.wrapper{
			color:blue !important;
		}
		.wrapper >>> .box{
			color:green;
		}
	</style>
</head>
<body>
	<div class='wrapper'>
		<div class='box'>文字</div>
	</div>
</body>
</html>
````