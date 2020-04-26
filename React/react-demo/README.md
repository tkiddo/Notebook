## 代码分割
+ 动态 `import()` 语法
+ `React.lazy` 和 `Suspense`

## Context
+ 应用于很多不同层级的组件需要访问同样的数据，避免`props`的层层传递
+ `React.createContext`创建Context,`Context.Provider`作为提供者，`Context.Consumer`作为消费者
+ 当 Provider 的 `value` 值发生变化时，它内部的所有消费组件都会重新渲染。Provider 及其内部 `consumer` 组件都不受制于 `shouldComponentUpdate` 函数

## 错误边界
+ 可以捕获并打印发生在其子组件树任何位置的 JavaScript 错误，并且，它会渲染出备用 UI，而不是渲染那些崩溃了的子组件树。
+ `static getDerivedStateFromError()`,`componentDidCatch()`
+ 可以将其包装在最顶层的路由组件并为用户展示一个 “Something went wrong” 的错误信息

## Fragment
+ `Fragments` 允许你将子列表分组，而无需向 DOM 添加额外节点。
+ `key` 是唯一可以传递给 `Fragment` 的属性。



