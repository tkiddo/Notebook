# 分析包大小

[Source map explorer](https://www.npmjs.com/package/source-map-explorer)使用源地图分析 JavaScript 包。这可以帮助您了解代码增多的来源。

要将 Source map 浏览器添加到 Create React App 项目中，请遵循以下步骤：

```
npm install --save source-map-explorer
```

或者，您可以使用`yarn`：

```
yarn add source-map-explorer
```

然后在`package.json`中，将以下行添加到脚本中：

```json
"scripts": {
+    "analyze": "source-map-explorer 'build/static/js/*.js'",
     "start": "react-scripts start",
     "build": "react-scripts build",
     "test": "react-scripts test",
```

运行`build`，然后运行`analyze`，来分析包。
