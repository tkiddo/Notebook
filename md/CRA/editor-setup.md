# 设置编辑器

如果配置正确，`Create React App`会提供很多工具来改善编辑体验。这里有一些技巧，可以最大程度地提高您的生产力：

## 语法高亮

要在您喜欢的文本编辑器中配置语法突出显示，请转到相关的[Babel 文档](https://babeljs.io/docs/en/editors/)页面并按照说明进行操作。包括一些最受欢迎的编辑器。

## 在编辑器中显示 Lint 输出

> 注意：此功能在 `react-scripts@0.2.0`及更高版本中可用。

> 对于具有 `react-scripts@2.0.3`及更高版本的新创建项目，它开箱即用。

> 它也仅适用于 npm 3 或更高版本。

一些编辑器，包括 Sublime Text，Atom 和 Visual Studio Code，都提供了 ESLint 的插件。

lint 检查不是必需的。您应该在终端以及浏览器控制台中看到 linter 输出。如果您希望将 lint 结果显示在编辑器中，请确保安装了 ESLint 插件/扩展。请注意，即使您自定义 ESLint 配置，这些更改也**只会影响编辑器集成**。它们不会影响终端和浏览器内的 lint 输出。这是因为 Create React App 有意提供了最小的规则集来查找常见错误。

如果要为项目强制使用编码样式，请考虑使用[Prettier](https://github.com/prettier/prettier)而不是 ESLint 样式规则。

## 实验性：扩展 ESLint 配置

我们认识到在某些情况下需要进一步的自定义。现在可以通过将`EXTEND_ESLINT`环境变量设置为`true`来扩展基本 ESLint 配置。有关可用环境变量的更多信息，请参见高级配置。

请注意，任何设置为“error”的规则都将阻止项目的构建。

有几件事要记住：

1. 我们强烈建议扩展基本配置，因为删除它可能会导致难以发现的问题。

2. 使用 TypeScript 时，您需要为仅应以 TypeScript 文件为目标的规则提供替代对象。

在以下示例中:

- 基本配置已通过共享的 ESLint 配置扩展，

- 设置了一条适用于所有 JavaScript 和 TypeScript 文件的新规则，并且

- 设置了仅针对 TypeScript 文件的新规则。

```json
{
	"eslintConfig": {
		"extends": ["react-app", "shared-config"],
		"rules": {
			"additional-rule": "warn"
		},
		"overrides": [
			{
				"files": ["**/*.ts?(x)"],
				"rules": {
					"additional-typescript-only-rule": "warn"
				}
			}
		]
	}
}
```

## 在编辑器中调试

当前仅 Visual Studio Code 和 WebStorm 支持此功能。

Visual Studio Code 和 WebStorm 支持使用 Create React App 进行开箱即用的调试。这使您作为开发人员无需离开编辑器即可编写和调试 React 代码，最重要的是，它使您能够拥有一个连续的开发工作流，其中上下文切换最少，因为您不必在工具之间进行切换。

### Visual Studio Code

您需要安装最新版本的 VS Code 和 [VS Code Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome) 调试器扩展。

然后将下面的代码块添加到`launch.json`文件中，并将其放在应用程序根目录下的`.vscode`文件夹中。

```json
{
	"version": "0.2.0",
	"configurations": [
		{
			"name": "Chrome",
			"type": "chrome",
			"request": "launch",
			"url": "http://localhost:3000",
			"webRoot": "${workspaceFolder}/src",
			"sourceMapPathOverrides": {
				"webpack:///src/*": "${webRoot}/*"
			}
		}
	]
}
```

> 注意：如果您通过 HOST 或 PORT 环境变量进行了调整，则 URL 可能会有所不同。

通过运行`npm start`来启动您的应用程序，然后按 F5 或单击绿色的调试图标在 VS Code 中开始调试。现在，您可以在编辑器中编写代码，设置断点，更改代码以及调试新修改的代码。

VS Code 调试有问题吗？请参阅其故障排除指南。

### WebStorm

您需要安装 WebStorm 和 JetBrains IDE Support Chrome 扩展。

在 WebStorm 菜单中，运行选择编辑配置...。然后单击+并选择 JavaScript 调试。将 http：// localhost：3000 粘贴到 URL 字段中并保存配置。

> 注意：如果您通过 HOST 或 PORT 环境变量进行了调整，则 URL 可能会有所不同。

通过运行`npm start`来启动您的应用，然后在 macOS 上按^ D 或在 Windows 和 Linux 上按 F9 或单击绿色的调试图标以在 WebStorm 中启动调试。

您可以在 IntelliJ IDEA Ultimate，PhpStorm，PyCharm Pro 和 RubyMine 中调试应用程序的方式相同。

## 自动格式化代码

Prettier 是一个自以为是的代码格式化程序，支持 JavaScript，CSS 和 JSON。使用 Prettier，您可以格式化自动编写的代码，以确保项目中的代码样式。

有关更多信息，请参见[Prettier 的 GitHub 页面](https://github.com/prettier/prettier)，并查看此页面以了解其运行情况。

要在 git 中进行提交时格式化代码，我们需要安装以下依赖项：

```
npm install --save husky lint-staged prettier
```

或者，您可以使用 yarn:

```
yarn add husky lint-staged prettier
```

- `husky`使像`githooks`一样使用 npm 脚本成为可能。

- `lint-staged`允许我们在 git 中的暂存文件上运行脚本。请参阅[有关 Lint-staged 的博客文章]()，以了解有关它的更多信息。

- prettiere 是我们在提交之前将运行的 JavaScript 格式化程序。

现在，通过在项目根目录的`package.json`中添加几行，可以确保每个文件的格式正确。

将以下字段添加到`package.json`部分：

```
+  "husky": {
+    "hooks": {
+      "pre-commit": "lint-staged"
+    }
+  }
```

接下来，我们在`package.json`中添加一个`'lint-staged'`字段，例如：

```
"dependencies": {
    // ...
  },
+ "lint-staged": {
+   "src/**/*.{js,jsx,ts,tsx,json,css,scss,md}": [
+     "prettier --write"
+   ]
+ },
  "scripts": {
```

现在，无论何时提交，Prettier 都会自动格式化更改的文件。您也可以运行`./node_modules/.bin/prettier --write "src / ** / *.{js，jsx，ts，tsx，json，css，scss，md}"`来第一次格式化整个项目。

接下来，您可能需要将Prettier集成到您喜欢的编辑器中。阅读Prettier GitHub页面上有关编辑器集成的部分。
