# webpack 性能优化

## HMR

## source map

## oneOf

## 缓存

## tree shaking

去除无用代码

条件:必须 es6 module;production 模式

package.json

sideEffets:false
所有代码都没有副作用，都可以 tree shaking

## 代码分割

1. 多入口

2. splitChunks

3. 动态导入

需要 eslint 配合

```json
"eslintConfig": {
    "parser": "babel-eslint",
    "extends": "airbnb",
    "rules": {
      "linebreak-style": [
        "error",
        "windows"
      ],
      "import/no-extraneous-dependencies": [
        "error",
        {
          "devDependencies": true
        }
      ]
    }
	},
```

`babel-loader`添加配置

```js
plugins: ['@babel/plugin-syntax-dynamic-import'],
```
