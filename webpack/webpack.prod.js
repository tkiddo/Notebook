const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const PostcssPresetEnv = require('postcss-preset-env');

// 决定browerslist用哪个模式
process.env.NODE_ENV = 'production';

const CssCommonLoader = [
  {
    loader: MiniCssExtractPlugin.loader,
    options: {
      // 配置路径寻找从当前目录的上一级开始
      publicPath: '../',
      hmr: process.env.NODE_ENV === 'development',
    },
  },
  'css-loader',
  {
    loader: 'postcss-loader',
    options: {
      ident: 'postcss',
      plugins: () => [PostcssPresetEnv()],
    },
  },
];

module.exports = {
  entry: './src/index.js',
  output: {
    // chunkhash:如果打包来源于同一个chunk，那么hash值一样
    // contenthash:根据文件内容是否变化，来改变hash值
    filename: 'js/[name].[contenthash:10].js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'production',
  // 配置开发服务器
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    // gzip压缩
    compress: true,
    port: 3000,
  },
  // source-map / cheap-module-source-map
  devtool: 'cheap-module-source-map',
  // 可以将node_modules中代码单独打包一个chunk输出
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        // 优先执行
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          fix: true,
        },
      },
      {
        // 所有文件只会有一个loader处理一个，注意：不能有两个配置处理同一个文件
        oneOf: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  [
                    '@babel/preset-env',
                    {
                      useBuiltIns: 'usage',
                      corejs: {
                        version: '3.6',
                        proposals: true,
                      },
                    },
                  ],
                ],
                // 第二次构建时会读取缓存
                cacheDirectory: true,
                // 动态导入语法
                plugins: ['@babel/plugin-syntax-dynamic-import'],
              },
            },
          },
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
                  // eslint-disable-next-line no-unused-vars
                  name(resourcePath, resourceQuery) {
                    // `resourcePath` - `/absolute/path/to/file.js`
                    // `resourceQuery` - `?foo=bar`
                    if (process.env.NODE_ENV === 'development') {
                      return '[path][name].[ext]';
                    }
                    return '[contenthash].[ext]';
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
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      // html压缩
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
      filename: 'css/[name].[contenthash:10].css',
    }),
    new CleanWebpackPlugin(),
    new OptimizeCssAssetsPlugin(),
  ],
};
