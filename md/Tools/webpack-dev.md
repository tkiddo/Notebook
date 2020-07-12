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

`url-loader`

`url-loader`需要和`file-loader`一起安装

```
yarn add file-loader url-loader --dev
```

```js
module: {
	rules: [
		{
			test: /\.(png|jpg|gif|svg)$/,
			use: [
				{
					loader: 'url-loader',
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

`url-loader`可以处理 js 和 css 中的引入文件，不能处理 html 中的引入资源,比如`<img src='a.png' />`,需要用到`html-loader`

```
yarn add html-loader --dev
```

```js
{
	test: /\.html$/,
	loader: 'html-loader',
},
```

## 处理其他资源，如字体

`file-loader`

```js
{
	//排除已经可以处理的资源
	exclude: /\.(css|less|scss|js|html|jpg|png|gif)$/,
	use: [
		{
			loader: 'file-loader',
			options: {
				name: '[name].[ext]',
				outputPath: 'static',
			},
		},
	],
},
```

## 配置开发服务器

```
yarn add webpack-dev-server --dev
```

```js
module.exports = {
	devServer: {
		contentBase: path.resolve(__dirname, 'dist'),
		//gzip压缩
		compress: true,
		port: 3000,
	},
}
```

```json
//package.json
"scripts":{
	"start":"webpack-dev-server --open --config webpack.dev.js"
}
```

## 开发模式基本配置

```js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const CssCommonLoader = [
	{
		loader: MiniCssExtractPlugin.loader,
		options: {
			//配置路径寻找从当前目录的上一级开始
			publicPath: '../',
			hmr: process.env.NODE_ENV === 'development',
		},
	},
	'css-loader',
]

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'js/bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	mode: 'development',
	//配置开发服务器
	devServer: {
		contentBase: path.resolve(__dirname, 'dist'),
		//gzip压缩
		compress: true,
		port: 3000,
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [...CssCommonLoader],
			},
			{
				test: /\.less$/,
				use: [...CssCommonLoader, 'less-loader'],
			},
			{
				test: /\.s[ac]ss$/,
				use: [...CssCommonLoader, 'sass-loader'],
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							name(resourcePath, resourceQuery) {
								// `resourcePath` - `/absolute/path/to/file.js`
								// `resourceQuery` - `?foo=bar`

								if (process.env.NODE_ENV === 'development') {
									return '[path][name].[ext]'
								}
								return '[contenthash].[ext]'
							},
							outputPath: 'media',
							limit: 8 * 1024,
						},
					},
				],
			},
			{
				test: /\.html$/,
				loader: 'html-loader',
			},
			{
				exclude: /\.(css|less|scss|js|html|jpg|png|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'static',
						},
					},
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
		new MiniCssExtractPlugin({
			filename: 'css/[name].css',
		}),
		new CleanWebpackPlugin(),
	],
}
```
