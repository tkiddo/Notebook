# webpack 入门

## 主要概念

1. entry:构建入口文件

2. output:构建输出

3. module:配置 loader 处理资源

4. plugin:配置插件

5. mode:构建模式，开发模式'development',生产模式'production'

## 资源处理

**注意：对同一资源的 loader 的处理顺序是从后往前**

- 处理 `css`资源

1. css 资源

```
yarn add css-loader style-loader --dev
```

`css-loader`+`style-loader`：`css-loader`将`css`文件处理成`commonjs`格式，`style-loader`将`commonjs`格式处理成`style节点格式`

```js
module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
```

2. less 资源

```
yarn add less-loader --dev
```

`less-loader`+`css-loader`+`style-loader`：其中`less-loader`将`less`文件处理成`css`文件

```js
module: {
		rules: [
			{
				test: /\.less$/,
				use: ['style-loader', 'css-loader', 'less-loader'],
			},
		],
	},
```

3. sass 资源

需要同时安装`sass-loader`和`sass`

```
yarn add sass sass-loader --dev
```

`sass-loader`+`css-loader`+`style-loader`：其中`sass-loader`将`sass`文件处理成`css`文件

```js
module: {
		rules: [
			{
				test: /\.s[ac]ss$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			}
	},
```

4. 分离 css 资源为单独文件

以上的处理会把 css 样式以`style节点`的形式加入到 html 标签中，实际开发中可能需要将 css 分离成单独文件，需要用到`mini-css-extract-plugin`插件

```
yarn add mini-css-extract-plugin --dev
```

```js
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
```

用法:将所有`style-loader`替换成`MiniCssExtractPlugin.loader`,并在`plugins`中添加该插件

```js
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			},
			{
				test: /\.less$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'],
			},
			{
				test: /\.s[ac]ss$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
			},
		],
	},
	plugins: [new MiniCssExtractPlugin()],
}
```

## 处理图片资源

`file-loader`

```
yarn add file-loader --dev
```

```js
module: {
	rules: [
		{
			test: /\.(png|jpg|gif|svg)$/,
			use: [
				{
					loader: 'file-loader',
					options: {
						name(resourcePath, resourceQuery) {
							//文件命名
							if (process.env.NODE_ENV === 'development') {
								return '[path][name].[ext]'
							}

							return '[contenthash].[ext]'
						},
						//目标文件夹
						outputPath: 'media',
					},
				},
			],
		},
	]
}
```

## 处理 html 中资源

`file-loader`可以处理 js 和 css 中的引入文件，不能处理 html 中的引入资源,比如`<img src='a.png' />`,需要用到`html-loader`

```
yarn add html-loader --dev
```
