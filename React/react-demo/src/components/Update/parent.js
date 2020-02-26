import React from 'react'
import Son from './son'

let i = 0

export default class Parent extends React.Component{
    constructor(){
        console.log('constructor',i++)
        super(...arguments)
        this.state={
            count:0
        }
    }

    static getDerivedStateFromProps(){
        console.log('getDerivedStateFromProps',i++)
        return {}
    }

    shouldComponentUpdate(){
        console.log('shouldComponentUpdate',i++)
        return true
    }

    getSnapshotBeforeUpdate(){
        console.log('getSnapshotBeforeUpdate',i++)
        return {}
    }

    componentDidUpdate(){
        console.log('componentDidUpdate',i++)
    }

    componentDidMount(){
        console.log('didMount',i++)
        this.setState({
            count:2
        })
    }

    handleClick=()=>{
        this.setState({
            count:1
        })
    }

    render(){
        console.log('render',i++)
        // console.log('parent render')
        const {count}=this.state
        return (
            <div>
                <div>parent,{count}</div>
                <Son count={count}></Son>
                <button onClick={this.handleClick}>update</button>
            </div>
        )
    }
}

//生命周期
/* 
挂载：
1.constructor
2.static getDeriveStateFromProps
3.render
4.componentDidMount 

更新：
1.static getDeriveStateFromProps
2.shouldComponentUpdate
3.render
4.getSnapshotBeforeUpdate
5.componentDidUpdate

卸载：
componentWillUnmount()



getDerivedStateFromProps 会在调用 render 方法之前调用，并且在初始挂载及后续更新时都会被调用。它应返回一个对象来更新 state，如果返回 null 则不更新任何内容。
getSnapshotBeforeUpdate() 在最近一次渲染输出（提交到 DOM 节点）之前调用。它使得组件能在发生更改之前从 DOM 中捕获一些信息（例如，滚动位置）。*/
