# 在开发中使用 HTTPS

> 注意：此功能在 `react-scripts@0.4.0`及更高版本中可用

您可能需要开发服务器通过 HTTPS 提供页面。一种可能有用的特殊情况是，当该 API 服务器本身正在为 HTTPS 服务时，使用“代理”功能将该请求代理到该 API 服务器。

为此，请将 HTTPS 环境变量设置为`true`，然后像往常一样使用`npm start`启动开发服务器：

## Windows(cmd.exe)

```
set HTTPS=true&&npm start
```

> （注意：缺少空格是有意的。）

## Windows(Powershell)

```
($env:HTTPS = "true") -and (npm start)
```

## Linux,macOS(Bash)

```
HTTPS=true npm start
```

请注意，服务器将使用自签名证书，因此您的 Web 浏览器几乎肯定会在访问该页面时显示警告。

## 自定义 SSL 证书

要设置自定义证书，请按照与上述 HTTPS 相同的方式，将`SSL_CRT_FILE`和`SSL_KEY_FILE`环境变量设置为证书和密钥文件的路径。请注意，您还需要设置`HTTPS = true`。

### Linux,macOS(Bash)

```
HTTPS=true SSL_CRT_FILE=cert.crt SSL_KEY_FILE=cert.key npm start
```

为了避免每次都必须设置环境变量，您可以在`npm start`脚本中包含如下所示：

```json
{
	"start": "HTTPS=true react-scripts start"
}
```

或者，您可以创建一个`HTTPS = true`设置的`.env`文件。
