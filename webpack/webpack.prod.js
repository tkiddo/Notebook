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
	mode: 'production',
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
			//html压缩
			minify: {
				collapseWhitespace: true,
				removeComments: true,
				removeRedundantAttributes: true,
				removeScriptTypeAttributes: true,
				removeStyleLinkTypeAttributes: true,
				useShortDoctype: true,
			},
		}),
		new MiniCssExtractPlugin({
			filename: 'css/[name].css',
		}),
		new CleanWebpackPlugin(),
	],
}
