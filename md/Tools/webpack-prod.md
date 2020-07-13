# webpack 生产环境配置

## 提取 css 为单独文件

用到`mini-css-extract-plugin`插件，在之前开发模式已经讲过

## css 兼容性处理

`postcss-loader`+`postcss-preset-env`

```
yarn add postcss-loader postcss-preset-env --dev
```

`postcss-preset-env`会根据配置好的浏览器兼容列表来做相应的兼容性处理，比如`autoprefixer`添加前缀，所以需要先在`package.json`中配置`browserslist`:

```json
//package.json
{
  "browerslist": {
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ],
    "production": [">0.2%", "not dead", "not op_mini all"]
  }
}
```

```js
module.exports = {
  //...
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          //抽离css单独文件
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              //配置路径寻找从当前目录的上一级开始
              publicPath: '../',
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [require('postcss-preset-env')()],
            },
          },
        ],
      },
    ],
  },
};
```

## css 压缩

```
yarn add optimize-css-assets-webpack-plugin --dev
```

```js
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
module.exports = {
  //...
  plugins: [new OptimizeCssAssetsPlugin()],
};
```

## js 语法检查

`eslint-loader`,依赖于`eslint`;主流规则配置：`eslint-config-airbnb`(包含 react) `eslint-config-airbnb-base`(不包含 react)

```
yarn add eslint-loader eslint --dev
yarn add eslint-config-airbnb eslint-plugin-import eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y --dev
```

配置：

1. 在`package.json`中配置`eslintConfig`字段

```json
{
  "eslintConfig": {
    "extends": "airbnb",
    "rules": {
      //对于不同操作系统换行的问题进行修复
      "linebreak-style": ["error", "windows"],
      //修复强制引入到dependencies
      "import/no-extraneous-dependencies": [
        "error",
        {
          "devDependencies": true
        }
      ]
    }
  }
}
```

2. 在`webpack.config.js`中配置规则

```js
module.exports = {
  //...
  module: {
    rule: [
      {
        test: /\.js$/,
        //只检查自己写的js代码
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          //自动修复
          fix: true,
        },
      },
    ],
  },
};
```

## js 兼容性处理

`babel-loader`,`@babel/preset-env`,`core-js`

```
yarn add babel-loader @babel/preset-env core-js --dev
```

配置：

```js
module.exports = {
  //...
  rule: [
    {
      //避免冲突，先进行代码检查
      enforce: 'pre',
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'eslint-loader',
      options: {
        fix: true,
      },
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          //代码预设
          presets: [
            [
              '@babel/preset-env',
              {
                //兼容性按需处理
                useBuiltIns: 'usage',
                corejs: {
                  version: '3.6',
                  proposals: true,
                },
              },
            ],
          ],
        },
      },
    },
  ],
};
```

## js 压缩，html 压缩

`mode:"production"`下自动压缩 js 代码

html 压缩：

```js
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  //...
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
  ],
};
```

## 生产环境基本配置

```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const PostcssPresetEnv = require('postcss-preset-env');

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
    filename: 'js/bundle.js',
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
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          fix: true,
        },
      },
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
      filename: 'css/[name].css',
    }),
    new CleanWebpackPlugin(),
    new OptimizeCssAssetsPlugin(),
  ],
};
```
