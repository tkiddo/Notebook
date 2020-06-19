## 代码规范和代码美化

#### 代码规范

工具：Eslint

- 安装

1. 使用 npm 或者 yarn 安装

```
npm install eslint --save-dev

# or

yarn add eslint --dev
```

2. 然后初始化配置文件

```
npx eslint --init
```

按提示完成后会得到 `Eslint` 的配置文件`.eslintrc.{js,yml,json}`

3. 添加`standard`规范

[github 地址](https://github.com/standard/eslint-config-standard)

```
yarn add --dev eslint-config-standard eslint-plugin-standard eslint-plugin-promise eslint-plugin-import eslint-plugin-node
```

在你的配置文件中添加：

```json
//.eslintrc.json
{
	"extends": "standard"
}
```

4. 添加自定义规则

具体规则内容详见[Eslint 官网](https://eslint.org/docs/rules/)

```json
//.eslintrc.json
"rules": {
		"no-var": "error", // preference for let and const only
		"prefer-const": "error",
		"eqeqeq": "warn" //  warn to use === instead of ==
}
```

5. 检查代码

将命令写到`package.json`中：

```json
//package.json
{
	"scripts": {
		"lint": "./node_modules/.bin/eslint **/*.{js,jsx} --fix"
	}
}
```

`--fix`选项用于自动修复问题

#### 代码美化

工具：Prettier

1. 安装

```
yarn add prettier eslint-plugin-prettier eslint-config-prettier --dev
```

eslint-plugin-prettier：配置 eslint 使用 prettier 对代码进行格式化

eslint-config-prettier：关闭一些不必要的或者是与 prettier 冲突的 lint 选项。

2. 配置文件

在项目根目录创建`.prettierrc.js`:

```js
module.exports = {
	printWidth: 80, //一行的字符数换行
	tabWidth: 2, //一个tab代表几个空格数
	useTabs: false, //是否使用tab进行缩进
	singleQuote: true, //字符串是否使用单引号
	semi: false, //行尾是否使用分号，默认为true
	trailingComma: 'none', //是否使用尾逗号
	bracketSpacing: true, //对象大括号直接是否有空格，默认为true，效果：{ foo: bar }
	endOfLine: 'auto', // 保留在 Windows 和 Unix 下的换行符
}
```

自定义选项详见[prettier 官网](https://prettier.io/docs/en/options.html)

3. 解决和 eslint 的冲突

```json
{
	"extends": ["plugin:prettier/recommended"]
}
```

4. 编写命令

```json
{
	"scripts": {
		"format": "prettier --write src/**/*.{js,jsx}"
	}
}
```
