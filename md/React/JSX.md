#### JSX
`JSX`是一种`JavaScript`的语法扩展，运用于`React`架构中，其格式比较像是模版语言，但事实上完全是在`JavaScript`内部实现的。我们能在`React`中直接编写`JSX`代码，得益于[babel](https://www.babeljs.cn/)的转译,比如：
````html
<div className='box'>
  <span>test</span>
  <span>{test}</span>
</div>
````
转译后：
````js
/*#__PURE__*/
React.createElement("div", {
  className: "box"
}, /*#__PURE__*/React.createElement("span", null, "test"), /*#__PURE__*/React.createElement("span", null, test));
````
也就是说转译之后默认会调用`React.createElement()`方法。这也侧面说明了即使你再写函数组件的时候没有显示地引用`React`,也必须先`import React from 'react'`
#### `React.createElement()`
这里精简了方法的实现原理，并作了相关注释
````js

const hasOwnProperty = Object.prototype.hasOwnProperty;

/*
*@param {*} type 元素类型，或是组件类名
*@param {*} config 元素属性
*@param {*} children 子元素
*/

function createElement(type, config, children) {
  let propName;

  const props = {};

  //循环遍历config中的属性，并添加为props的属性
  if (config != null) {
    for (propName in config) {
      if (
        hasOwnProperty.call(config, propName) &&
        !RESERVED_PROPS.hasOwnProperty(propName)
      ) {
        props[propName] = config[propName];
      }
    }
  }

  //这段代码主要是为了将子元素作为一个数组，保存到props的children属性中。
  //虽然形参只有一个children，但实参可能有多个，除了第一个是type和第二个是config，其他都是children，即实参列表的长度减2就是children的个数
  const childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    //如果只有一个children，直接赋值
    props.children = children;
  } else if (childrenLength > 1) {
    //如果children大于一个，就把所有children保存到数组中，赋值给props.children
    const childArray = Array(childrenLength);
    for (let i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    if (__DEV__) {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }
    props.children = childArray;
  }

  //这里主要针对type是class类名的情况
  //JSX中以大写字母开头的组件会被认为是自定义组件，以小写字母开头的会被认为是标签。自定义组件可能会有defaultProps
  if (type && type.defaultProps) {
    const defaultProps = type.defaultProps;
    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }

  //ReactElement可以认为是包含了这些属性的一个对象,类似这样的结构
  /* {
    type:'div',
    props:{
      className:'box',
      children:{
        type:'span',
        props:{
          children:'test'
        }
      }
    }
  } */
  return ReactElement(
    type,
    props,
  );
}
````
小结：`JSX`转译之后其实是一个`ReactElement`对象，虚拟DOM其实就是这样的一个JS对象。
