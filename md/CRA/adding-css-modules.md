# 添加 css 模块

> 注意：此功能在`react-scripts@2.0.0`及更高版本中可用。

该项目使用`[name] .module.css`文件命名约定与常规样式表一起支持[ CSS Modules](https://github.com/css-modules/css-modules)。CSS 模块通过自动创建格式为`[filename] \ _ [classname] \ _ \ _ [hash]`的唯一类名来对 CSS 进行范围界定。

> 提示：如果要使用 Sass 预处理样式表，请确保遵循安装说明，然后按如下所示更改样式表文件扩展名：`[name] .module.scss`或`[name] .module.sass`。

CSS 模块使您可以在不同文件中使用相同的 CSS 类名称，而不必担心命名冲突。在[此处](https://github.com/css-modules/css-modules)了解有关 CSS 模块的更多信息。

## Buttom.module.css

```css
.error {
	background-color: red;
}
```

## another-stylesheet.css

```css
.error {
	color: red;
}
```

## Button.js

```js
import React, { Component } from 'react'
import styles from './Button.module.css' // Import css modules stylesheet as styles
import './another-stylesheet.css' // Import regular stylesheet
class Button extends Component {
	render() {
		// reference as a js object
		return <button className={styles.error}>Error Button</button>
	}
}
```

## 效果

与其他`.error`类名没有冲突

```html
<!-- This button has red background but not red text -->
<button class="Button_error_ax7yz">Error Button</button>
```

**这是一项可选功能**。完全支持常规的`<link>`样式表和 CSS 文件。对于以`.module.css`扩展名结尾的文件，将打开 CSS 模块。
