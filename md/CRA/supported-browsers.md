# 支持的浏览器和功能

## 支持的浏览器

默认情况下，生成的项目支持所有现代浏览器。对 Internet Explorer 9、10 和 11 的支持需要 polyfill。对于一组支持旧版浏览器的 polyfill，请使用[react-app-polyfill](https://github.com/facebook/create-react-app/blob/master/packages/react-app-polyfill/README.md)。

## 支持的语言功能

该项目支持最新 JavaScript 标准的超集。除[ES6](https://github.com/lukehoban/es6features)语法功能外，它还支持：

- [Exponentiation Operator](https://github.com/tc39/proposal-exponentiation-operator)幂等运算符(ES2016).

- [Async/await](https://github.com/tc39/ecmascript-asyncawait)(ES2017)

- [Object Rest/Spread Properties](https://github.com/tc39/proposal-object-rest-spread)对象剩余/扩展属性(ES2018).

- [Dynamic import()](https://github.com/tc39/proposal-dynamic-import)(第四阶段提案)

- [Class Fields and Static Properties](https://github.com/tc39/proposal-class-public-fields)（第 3 阶段提案的一部分）

- [JSX](https://reactjs.org/docs/introducing-jsx.html), Flow 和 TypeScript.

详细了解不同的[提案阶段](https://tc39.es/process-document/)。

尽管我们建议谨慎使用实验性建议，但 Facebook 会在产品代码中大量使用这些功能，因此，如果将来任何这些建议发生更改，我们打算提供 codemod。

请注意，此项目**默认情况下不包含任何 polyfill**。

如果您使用任何其他需要运行时支持的 ES6 +功能（例如`Array.from()`或`Symbol`），请确保手动添加了适当的[polyfill](https://github.com/facebook/create-react-app/blob/master/packages/react-app-polyfill/README.md)，或者要使用的浏览器已经支持它们。

## 配置支持的浏览器

默认情况下，生成的项目在`package.json`文件中包含一个`browserslist`配置，以针对基于全球使用情况（> 0.2％）的广泛浏览器（用于生产构建）和用于开发的现代浏览器。这提供了良好的开发体验，尤其是在使用诸如`async/await`之类的语言功能时，但仍与生产中的许多浏览器保持高度兼容性。

`browserslist`配置控制输出的`JavaScript`，以使发出的代码与指定的浏览器兼容。通过运行构建脚本创建生产构建时，将使用`production`列表，而在运行启动脚本时，将使用`development`列表。您可以使用[https://browserl.ist](https://browserl.ist/?q=%3E+0.2%25%2C+not+dead%2C+not+op_mini+all)查看配置的浏览器列表支持的浏览器。

这是`package.json`中指定的示例浏览器列表：

```json
"browserslist": {
  "production": [
    ">0.2%",
    "not dead",
    "not op_mini all"
  ],
  "development": [
    "last 1 chrome version",
    "last 1 firefox version",
    "last 1 safari version"
  ]
}
```

> 请注意，这不会自动为您包括 polyfills。您仍然需要根据所支持的浏览器来添加语言功能（请参见上文）。

> 在编辑`browserslist`配置时，您可能会注意到您的更改没有立即被获取.这是由于[babel-loader](https://github.com/babel/babel-loader/issues/690)中的一个问题未检测到`package.json`中的更改。一种快速的解决方案是删除`node_modules/.cache`文件夹，然后重试。
