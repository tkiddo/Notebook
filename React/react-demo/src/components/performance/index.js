import React, { Fragment } from 'react'
import './index.scss'

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
            <div className='p-wrapper'>
                {
                    arr.map((item,idx)=>{
                        return (
                            <Fragment key={idx}>
                                <div className={`${cls1} common`}></div>
                                <div className={`${cls2} common`}></div>
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