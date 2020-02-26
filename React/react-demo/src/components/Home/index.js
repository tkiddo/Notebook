import React, { Fragment } from 'react'
import {add} from '../../store/counter/action'
import {store} from '../../store'
import PropTypes from 'prop-types'



const {counter} = store.getState()

export default class Home extends React.Component{
    constructor(){
        super(...arguments)
        //构造函数是唯一可以给 this.state 赋值的地方，state除了拥有并设置了它的组件，其他组件都无法访问。
        this.state={
            msg:'hello',
            number:counter.number
        }
    }
    componentDidMount(){
        console.log(store.getState())
        
    }
    handleClick=()=>{
        store.dispatch(add())
        const {counter} = store.getState()
        //react的setState不会立即更新，出于性能考虑，会把多个更改合并成一个
        this.setState({
            number:counter.number
        })
    }
    handleSet=()=>{
        //如果需要立即获得更新后的值，可以给setState的第二个参数赋值一个回调函数
        this.setState({
            msg:'ads'
        },()=>{
            console.log(this.state.msg)
        })
    }
    handleHref=(e)=>{
        //在 React 中另一个不同点是你不能通过返回 false 的方式阻止默认行为。你必须显式的使用 preventDefault 
        e.preventDefault();
        
    }

    handleThis(){
        //在 JavaScript 中，class 的方法默认不会绑定 this。
        //可以使用箭头函数
        console.log(this)
    }
    render (){
        const {msg,number} = this.state
        const {name} = this.props
        return (
            <Fragment>
                <div>{name}</div>
                <div>{msg},{number}</div>
                <button onClick={this.handleClick}>add</button>
                <button onClick={this.handleSet}>setState</button>
                <a href='http://www.baidu.com' onClick={this.handleHref}>href</a>
                <button onClick={this.handleThis.bind(this)}>this</button>
            </Fragment>
        )
    }
}
//props类型检测
Home.propTypes={
    name:PropTypes.string.isRequired
}

/* 
JSX，是一个javascript的语法扩展，格式比较像模版语言，react用JSX描述用户界面
Babel 会把 JSX 转译成一个名为 React.createElement() 函数调用。
组件无论是使用函数声明还是通过 class 声明，都决不能修改自身的 props ，纯函数不会对入参更改

key 帮助 React 识别哪些元素改变了，比如被添加或删除。因此你应当给数组中的每一个元素赋予一个确定的标识。key 只是在兄弟节点之间必须唯一*/