## 缓存最佳实践

- 模式一：不变的内容+长寿命（`long max-age`）

一般，我们会设置`Cache-Control`的值为`max-age=xxx`，表示在 xxx 秒内再次访问该资源，均使用本地的缓存，不再向服务器发起请求。

以[expressjs](http://expressjs.com/)开发为例：

1. 对静态文件设置缓存:

```js
const express = require('express')
const app = express()
app.use(
	express.static(path.join(__dirname, 'public'), {
		maxAge: 31536000,
	})
)
```

此处需要在更新静态资源内容的同时更新`URL`，`webpack`可以让我们在打包的时候，在文件的命名上带上`hash`值,就像这样：

![cache.jpg](https://github.com/justforfunmy/Notebook/blob/master/md/Web/cache.jpg)

2. 对单一请求设置缓存：

```js
const express = require('express')
const router = express.Router()
router.get('/major_news', async function (req, res, next) {
  res.header('Cache-Control', 'Max-Age=180000')
	//...
}
```

- 模式二：变化的内容，始终需要服务器验证
