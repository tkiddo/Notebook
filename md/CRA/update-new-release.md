# 更新到新版本

Create React App 分为两个包：

- `create-react-app`是用于创建新项目的全局命令行实用程序。

- `react-scripts`是所生成项目（包括此项目）中的开发依赖项。

当您运行`npx create-react-app my-app`时，它将自动安装最新版本的`Create React App`。

> 如果您先前已通过`npm install -g create-react-app`全局安装了`create-react-app`，请访问“入门”以了解当前的安装步骤。

`Create React App`使用最新版本的`react-scripts`创建项目，因此您将自动获得新创建的应用程序中的所有新功能和改进。

要将现有项目更新为新版本的`react-scripts`，请打开[更改日志](https://github.com/facebook/create-react-app/blob/master/CHANGELOG.md)，找到您当前使用的版本（如果不确定，请检查此文件夹中的`package.json`），然后为较新版本应用迁移说明版本。

在大多数情况下，更改`package.json`中的`react-scripts`版本并在此文件夹中运行`npm install`（或`yarn install`）就足够了，但是最好参考更改日志以了解潜在的重大更改

我们致力于将重大更改保持在最小限度，以便您可以轻松升级`react-scripts`
