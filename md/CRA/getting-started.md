# 入门

`Create React App`应用程序是创建单页`React`应用的官方支持方式。它提供了无需配置的现代化构建设置。

## 快速开始

```
npx create-react-app my-app
cd my-app
npm start
```

> 如果你之前已经用`npm install -g create-react-app` 全局安装了`create-react-app`,我们建议你使用`npm uninstall -g create-react-app`卸载该应用包，以确保`npx`始终使用最新的版本。

(`npx`需要`npm`5.2 以及更高版本,请参阅旧版 npm 的说明)

然后打开 http://localhost:3000/ 来查看您的应用程序。

当您准备部署到生产环境时，请使用`npm run build`创建一个精简包。

### 立即开始

您无需安装或配置`webpack`或`Babel`之类的工具。它们是预先配置和隐藏的，因此您可以专注于代码。

创建一个项目，一切顺利。

## 创建一个应用

**您需要在本地开发计算机上安装`Node> = 8.10`**（但在服务器上不是必需的）.您可以使用[nvm](https://github.com/nvm-sh/nvm#installation)（macOS / Linux）或[nvm-windows](https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows)在不同项目之间切换 Node 版本。

要创建新应用，您可以选择以下方法之一：

### npx

```
npx create-react-app my-app
```

(`npx`需要`npm`5.2 以及更高版本,请参阅旧版 npm 的说明)

### npm

```
npm init react-app my-app
```

`npm init <initializer>`在 npm 6+中可用

### yarn

```
yarn create react-app my-app
```

`yarn create`在 Yarn 0.25+中可用

### 选择模版

现在，您可以选择通过将`--template [template-name]`附加到创建命令来从模板启动新应用。

如果您不选择模板，我们将使用基本模板创建您的项目。

模板始终以`cra-template- [template-name]`格式命名，但是您只需向创建命令提供`[template-name]`。

```
npx create-react-app my-app --template [template-name]
```

> 您可以通过在 npm 上搜索[“ cra-template- \*”](https://www.npmjs.com/search?q=cra-template-*)来找到可用模板的列表。

我们的[自定义模板]()文档描述了如何构建自己的模板

#### 创建 TypeScript 应用

您可以使用模板启动新的`TypeScript`应用。要使用我们提供的`TypeScript`模板，请将`--template typescript`附加到创建命令。

```
npx create-react-app my-app --template typescript
```

### 选择包管理器

创建新应用程序时，CLI 将使用`Yarn`安装依赖项（如果可用）。如果已安装`Yarn`，但更喜欢使用`npm`，则可以在创建命令后附加`--use-npm`。例如：

```
npx create-react-app my-app --use-npm
```

## 输出

运行这些命令中的任何一个都会在当前文件夹中创建一个名为`my-app`的目录。在该目录内，它将生成初始项目结构并安装可传递依赖项：

```
my-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    └── serviceWorker.js
```

无需配置或复杂的文件夹结构，仅需构建应用程序所需的文件。安装完成后，您可以打开项目文件夹：

```
cd my-app
```

## Scripts

在新创建的项目中，您可以运行一些内置命令：

### `npm start` 或 `yarn start`

在开发模式下运行应用程序。打开[http：// localhost：3000](http://localhost:3000)在浏览器中查看它。

如果更改代码，页面将自动重新加载。您将在控制台中看到构建错误和`lint`警告。

### `npm test` 或 `yarn test`

以交互方式运行测试观察程序。默认情况下，运行与自上次提交以来更改的文件相关的测试。

### `npm run build`或`yarn build`

将要生产的应用程序生成到`build`文件夹。它在生产模式下正确打包了 React，并优化了构建以获得最佳性能。

最小化构建，文件名包含哈希值。

您的应用已准备好进行部署。
