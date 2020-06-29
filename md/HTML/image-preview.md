## 前端实现图片预览

需求：在选择图片文件后，能即时预览图片

`html`结构：

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Document</title>
		<style>
			.container {
				width: 800px;
				margin: 0 auto;
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;
			}

			.img-wrapper {
				width: 600px;
				height: 400px;
				border: 1px solid lightblue;
				padding: 30px;
				border-radius: 5px;
				margin-bottom: 30px;
			}

			.img-wrapper img {
				width: 100%;
				height: 100%;
				object-fit: scale-down;
			}
		</style>
	</head>
	<body>
		<div class="container">
			<div class="img-wrapper">
				<img src="" alt="图片预览" id="preview" />
			</div>
			<input
				type="file"
				accept="image/jpg,image/jpeg,image/png"
				id="fileInput"
			/>
		</div>
	</body>
</html>
```

- 利用`URL.createObjectURL`实现

`URL.createObjectURL()` 静态方法会创建一个 `DOMString`，其中包含一个表示参数中给出的对象的`URL`。这个 `URL` 的生命周期和创建它的窗口中的 document 绑定。这个新的`URL` 对象表示指定的 `File` 对象或 `Blob` 对象。

```js
const fileInput = document.getElementById('fileInput')
const preview = document.getElementById('preview')
fileInput.addEventListener('change', function (e) {
	const file = this.files[0]
	preview.src = file ? URL.createObjectURL(file) : ''
})
```

- 利用`fileReader`实现

`FileReader` 对象允许 Web 应用程序异步读取存储在用户计算机上的文件（或原始数据缓冲区）的内容，使用 `File` 或 `Blob` 对象指定要读取的文件或数据。

`FileReader.result`:文件的内容。该属性仅在读取操作完成后才有效，数据的格式取决于使用哪个方法来启动读取操作。

```js
const fileInput = document.getElementById('fileInput')
const preview = document.getElementById('preview')
fileInput.addEventListener('change', function (e) {
	const file = this.files[0]
	const reader = new FileReader()
	reader.addEventListener('load', (e) => {
		preview.src = reader.result
	})
	if (file) {
		reader.readAsDataURL(file)
	}
})
```
