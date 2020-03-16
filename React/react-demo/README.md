## 代码分割
+ 动态 `import()` 语法
+ `React.lazy` 和 `Suspense`

## Context
+ 应用于很多不同层级的组件需要访问同样的数据，避免`props`的层层传递
+ `React.createContext`创建Context,`Context.Provider`作为提供者，`Context.Consumer`作为消费者
+ 当 Provider 的 `value` 值发生变化时，它内部的所有消费组件都会重新渲染。Provider 及其内部 `consumer` 组件都不受制于 `shouldComponentUpdate` 函数，

