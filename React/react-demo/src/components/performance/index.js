import React, { Fragment } from 'react'
import style from './index.module.scss'

export default class Performance extends React.Component{
    constructor(){
        super(...arguments)
        this.state={
            cls1:'',
            cls2:''
        }
        this.fileRef=React.createRef()
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
    handleChoose=(e)=>{
        console.log(e.target.value)
    }
    handleUpload=()=>{
        const data = new FormData()
        console.log(this.fileRef.current.files)
        data.append('file',this.fileRef.current.files[0])
    }
    render(){
        const {cls1,cls2} = this.state
        const arr = [1,2]
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
                <input type='file' onChange={this.handleChoose} name='file' ref={this.fileRef}/>
                <button onClick={this.handleUpload}>upload</button>
            </div>
        )
    }
}