# 添加 Sass 样式表

> 注意：此功能在`react-scripts@2.0.0`及更高版本中可用。

通常，我们建议您不要在不同组件之间重复使用相同的 CSS 类。例如，建议不要在`<AcceptButton>`和`<RejectButton>`组件中使用`.Button` CSS 类，而建议使用自己的.Button 样式创建一个`<Button>`组件，`<AcceptButton>`和`<RejectButton>`都可以呈现（但不是[继承](https://reactjs.org/docs/composition-vs-inheritance.html)）。

遵循此规则通常会使 CSS 预处理器的用处不大，因为诸如 mixins 和 nesting 之类的功能已被组件组合所取代。但是，如果发现 CSS 预处理程序很有价值，则可以对其进行集成。

要使用 Sass，请首先安装`node-sass`：

```
$ npm install node-sass --save
$ # or
$ yarn add node-sass
```

现在，您可以将`src/App.css`重命名为`src/App.scss`，并更新`src/App.js`以导入`src/App.scss`。如果使用扩展名`.scss`或`.sass`导入，此文件和任何其他文件将自动编译。

要在 Sass 文件之间共享变量，可以使用 Sass 导入。例如，`src/App.scss`和其他组件样式文件可以包含`@import "./shared.scss"`;具有变量定义。

这将使您可以像

```
@import 'styles/_colors.scss'; // assuming a styles directory under src/
@import '~nprogress/nprogress'; // importing a css file from the nprogress node module
```

> 注意：您必须在 `node_modules` 的导入之前添加`〜`，如上所示。

`node-sass`还支持`SASS_PATH`变量。

要使用相对于您指定的路径的导入，以及从`node_modules`使用导入而不添加`〜`前缀，您可以在项目根目录添加一个`.env`文件，其变量为`SASS_PATH = node_modules：src`。要指定更多目录，可以将它们添加到以：分隔的`SASS_PATH`中，例如`path1：path2：path3`

如果您设置`SASS_PATH = node_modules：src`，这将使您可以像

```
@import 'styles/colors'; // assuming a styles directory under src/, where _colors.scss partial file exists.
@import 'nprogress/nprogress'; // importing a css file from the nprogress node module
```

> 注意：对于 Windows 操作系统，请使用以下语法

```
SASS_PATH=./node_modules;./src
```

> 提示：您也可以选择将此功能与 CSS 模块一起使用！

注意：如果使用的是 Flow，请在`.flowconfig`中覆盖`module.file_ext`设置，以便它可以识别`.sass`或`.scss`文件。您还需要包括`.js`，`.jsx`，`.mjs` 和`.json`文件的 `module.file_ext` 默认设置。

```
[options]
module.file_ext=.js
module.file_ext=.jsx
module.file_ext=.mjs
module.file_ext=.json
module.file_ext=.sass
module.file_ext=.scss
```
