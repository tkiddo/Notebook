## WEB 缓存

#### 为什么要缓存

- 请求更快：通过将内容缓存在本地浏览器或距离最近的缓存服务器（如 CDN），在不影响网站交互的前提下可以大大加快网站加载速度。

- 节省带宽：对于已缓存的文件，可以减少请求带宽甚至无需请求网络。

- 降低服务器压力：在大量用户并发请求的情况下，服务器的性能受到限制，此时将一些静态资源放置在网络的多个节点，可以起到均衡负载的作用，降低服务器的压力。

## 缓存类型

1. 强缓存：浏览器在加载资源时，先根据这个资源的一些 http header 判断它是否命中强缓存，强缓存如果命中，浏览器直接从自己的缓存中读取资源，不会发请求到服务器。
2. 协商缓存：当强缓存没有命中的时候，浏览器一定会发送一个请求到服务器，通过服务器端依据资源的另外一些 http header 验证这个资源是否命中协商缓存，如果协商缓存命中，服务器会将这个请求返回（304），但是不会返回这个资源的数据，而是告诉客户端可以直接从缓存中加载这个资源，于是浏览器就又会从自己的缓存中去加载这个资源；若未命中请求，则将资源返回客户端，并更新本地缓存数据（200）

强缓存与协商缓存区别：强缓存不发请求到服务器，协商缓存会发请求到服务器。

## 缓存设置

1. HTML Meta 标签控制缓存（非 HTTP 协议定义）

```html
<meta http-equiv="Pragma" content="no-cache" />
```

这种方法使用上很简单，但只有部分浏览器可以支持，而且所有缓存代理服务器都不支持，因为代理不解析 HTML 内容本身。

2. HTTP 头信息控制缓存
   HTTP 头信息控制缓存是通过 Expires（强缓存）、Cache-control（强缓存）、Last-Modified/If-Modified-Since（协商缓存）、Etag/If-None-Match（协商缓存）实现.

- Expires 是 http1.0 提出的一个表示资源过期时间的 header，它描述的是一个绝对时间，由服务器返回，用 GMT 格式的字符串表示，如：Expires:Thu, 31 Dec 2016 23:55:55 GMT，

```
读取缓存数据条件：缓存过期时间（服务器的）< 当前时间（客户端的)
```

- Cache-Control 描述的是一个相对时间，在进行缓存命中的时候，都是利用客户端时间进行判断，所以相比较 Expires，Cache-Control 的缓存管理更有效，安全一些。

```
读取缓存数据条件：上次缓存时间（客户端的）+max-age < 当前时间（客户端的）
```

`Cache-Control`值可以是`public`、`private`、`no-cache`、`no-store`、`no-transform`、`must-revalidate`、`proxy-revalidate`、`max-age`

各个消息中的指令含义如下：
Public 指示响应可被任何缓存区缓存。
Private 指示对于单个用户的整个或部分响应消息，不能被共享缓存处理。这允许服务器仅仅描述当前用户的部分响应消息，此响应消息对于其他用户的请求无效。
no-cache 指示请求或响应消息不能缓存，该选项并不是说可以设置”不缓存“，而是需要和服务器确认
no-store 在请求消息中发送将使得请求和响应消息都不使用缓存，完全不存下來。
max-age 指示客户机可以接收生存期不大于指定时间（以秒为单位）的响应。上次缓存时间（客户端的）+max-age（64200s）<客户端当前时间
min-fresh 指示客户机可以接收响应时间小于当前时间加上指定时间的响应。
max-stale 指示客户机可以接收超出超时期间的响应消息。如果指定 max-stale 消息的值，那么客户机可以接收超出超时期指定值之内的响应消息。

**当 response header 中，Expires 和 Cache-Control 同时存在时，Cache-Control 优先级高于 Expires**

- Last-Modified/If-Modified-Since：Last-Modified/If-Modified-Since 要配合 Cache-Control 使用。

Last-Modified：标示这个响应资源的最后修改时间。web 服务器在响应请求时，告诉浏览器资源的最后修改时间。
If-Modified-Since：当资源过期时（强缓存失效），发现资源具有 Last-Modified 声明，则再次向 web 服务器请求时带上头 If-Modified-Since，表示请求时间。web 服务器收到请求后发现有头 If-Modified-Since 则与被请求资源的最后修改时间进行比对。若最后修改时间较新，说明资源又被改动过，则响应整片资源内容（写在响应消息包体内），HTTP 200；若最后修改时间较旧，说明资源无新修改，则响应 HTTP 304 (无需包体，节省浏览)，告知浏览器继续使用所保存的 cache。
缺点：

Last-Modified 标注的最后修改只能精确到秒级，如果某些文件在 1 秒钟以内，被修改多次的话，它将不能准确标注文件的修改时间（无法及时更新文件）

如果某些文件会被定期生成，当有时内容并没有任何变化，但 Last-Modified 却改变了，导致文件没法使用缓存，有可能存在服务器没有准确获取文件修改时间，或者与代理服务器时间不一致等情形（无法使用缓存）。

HTTP1.1 中 Etag 解决了上述问题。

- Etag/If-None-Match：Etag/If-None-Match 也要配合 Cache-Control 使用。
  Etag：web 服务器响应请求时，告诉浏览器当前资源在服务器的唯一标识（生成规则由服务器决定）。Apache 中，ETag 的值，默认是对文件的索引节（INode），大小（Size）和最后修改时间（MTime）进行 Hash 后得到的。
  If-None-Match：当资源过期时（使用 Cache-Control 标识的 max-age），发现资源具有 Etage 声明，则再次向 web 服务器请求时带上头 If-None-Match （Etag 的值）。web 服务器收到请求后发现有头 If-None-Match 则与被请求资源的相应校验串进行比对，决定返回 200 或 304。
  Etag 是服务器自动生成或者由开发者生成的对应资源在服务器端的唯一标识符，能够更加准确的控制缓存。Last-Modified 与 ETag 一起使用时，服务器会优先验证 ETag。

## 浏览器请求流程图

第一次请求：
![first-request.png](https://github.com/justforfunmy/Notebook/blob/master/md/Web/images/first-request.png)
再次请求：
![request-again.png](https://github.com/justforfunmy/Notebook/blob/master/md/Web/images/request-again.png)

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

![cache.jpg](https://github.com/justforfunmy/Notebook/blob/master/md/Web/images/cache.jpg)

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

```
Cache-Control: no-cache
```
