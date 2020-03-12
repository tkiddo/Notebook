import React from 'react'
import Son from './son'
import img from '../../images/logo192.png'

let i = 0

export default class Parent extends React.Component{
    constructor(){
        console.log('constructor',i++)
        super(...arguments)
        this.state={
            count:0,
            obj:{
                age:1
            },
            a:{
                name:'a'
            }
        }
    }

    static getDerivedStateFromProps(){
        console.log('getDerivedStateFromProps',i++)
        return {}
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log('shouldComponentUpdate',i++)
        // if(nextState.count===this.state.count && nextState.obj.age===this.state.obj.age){
        //     return false
        // }
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
        this.setState({
            count:3
        })
    }

    handleClick=()=>{
        this.setState({
            a:{
                name:'m'
            },
            obj:{
                age:3
            }
        })
    }

    render(){
        console.log('render',i++)
        // console.log('parent render')
        const {count,obj}=this.state
        return (
            <div>
                <div>parent,{count}</div>
                <Son obj={obj}></Son>
                <button onClick={this.handleClick}>update</button>
                <img src={img} alt=''/>
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
