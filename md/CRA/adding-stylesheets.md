# 添加样式表

该项目设置使用 webpack 处理所有资源。webpack 提供了一种自定义方式，将`import`概念扩展到 JavaScript 之外。要表示 JavaScript 文件依赖于 CSS 文件，您需要**从 JavaScript 文件导入 CSS**：

## Button.css

```css
.Button {
	padding: 20px;
}
```

## Button.js

```js
import React, { Component } from 'react'
import './Button.css' // Tell webpack that Button.js uses these styles
class Button extends Component {
	render() {
		// You can use them as regular CSS styles
		return <div className="Button" />
	}
}
```

**这不是 React 所必需的**，但是许多人发现此功能很方便。您可以在[此处](https://medium.com/seek-blog/block-element-modifying-your-javascript-components-d7f99fcab52b)了解此方法的好处。但是，您应该意识到，这使得您的代码与 Webpack 相比，对其他构建工具和环境的可移植性降低。

在开发过程中，以这种方式表达依赖性可以使您在编辑样式时即时重新加载样式。在生产中，所有 CSS 文件都将在构建输出中合并为单个缩小的`.css`文件。

如果您担心使用特定于 Webpack 的语义，则可以将所有 CSS 正确放入`src / index.css`中。它仍然会从`src / index.js`导入，但是如果以后迁移到其他构建工具，则可以始终删除该导入。
