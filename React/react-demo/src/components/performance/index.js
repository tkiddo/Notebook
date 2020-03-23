import React, { Fragment } from 'react'
import style from './index.module.scss'

export default class Performance extends React.Component{
    constructor(){
        super(...arguments)
        this.state={
            cls1:'',
            cls2:''
        }
    }
    testMargin=()=>{
        this.setState({
            cls1:'by-margin'
        })
    }
    testTransform=()=>{
        this.setState({
            cls2:'by-transform'
        })
    }
    render(){
        const {cls1,cls2} = this.state
        const arr = [1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9]
        return (
            <div className={`${style['wrapper']}`}>
                {
                    arr.map((item,idx)=>{
                        return (
                            <Fragment key={idx}>
                                <div className={`${style[cls1]} ${style['common']}`}></div>
                                <div className={`${style[cls2]} ${style['common']}`}></div>
                            </Fragment>
                        )
                    })
                }
                
                <button onClick={this.testMargin}>testMargin</button>
                <button onClick={this.testTransform}>testTransform</button>
            </div>
        )
    }
}