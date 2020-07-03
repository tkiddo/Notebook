# 目录结构

创建后，您的项目应如下所示：

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```

为了构建项目，**这些文件必须使用正确的文件名存在**：

- `public/index.html`是页面模板；

- `src/index.js`是 JavaScript 入口点。

您可以删除或重命名其他文件。

您可以在 src 中创建子目录。为了加快重建速度，`webpack`只处理 src 内部的文件。您需要**将任何 JS 和 CSS 文件放入 src 内**，否则`webpack`将看不到它们。

只能从`public/index.html`使用 public 内部的文件。阅读以下说明，以使用 JavaScript 和 HTML 中的资源。

但是，您可以创建更多顶级目录。它们不会包含在生产版本中，因此您可以将它们用于文档之类的事情。

如果您安装了 Git，并且您的项目不属于较大的存储库，则将初始化一个新的存储库，从而产生一个附加的顶级`.git` 目录。
