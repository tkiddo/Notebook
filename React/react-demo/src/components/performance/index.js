import React, { Fragment } from 'react'
import style from './index.module.scss'


class Modal extends React.Component{
    constructor(){
        super(...arguments)
        this.state={
            name:'',
            count:0,
            
        }
    }
    componentDidMount(){
        this.setState({
            count:Math.random()
        })
    }
    render(){
        const {count} = this.state
        return (
            <div>{count}</div>
        )
    }
}
export default class Performance extends React.Component{
    constructor(){
        super(...arguments)
        this.state={
            cls1:'',
            cls2:'',
            modalShow:false,
            selected:{},
            arr:[{id:1,name:'a'},{id:2,name:'b'},{id:3,name:'c'}],
            key:'a'
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
    handlePick=(item)=>{
        this.setState({
            modalShow:true,
            selected:item,
            key:'b'
        })
    }
    render(){
        const {cls1,cls2,modalShow,selected,arr} = this.state
        return (
            <div className={`${style['wrapper']}`}>
                {
                    arr.map((item,idx)=>{
                        return (
                            <Fragment key={item.id}>
                                <div className={`${style[cls1]} ${style['common']}`} onClick={this.handlePick.bind(this,item)}></div>
                                <div className={`${style[cls2]} ${style['common']}`} onClick={this.handlePick.bind(this,item)}></div>
                            </Fragment>
                        )
                    })
                }
                {
                    modalShow && (
                        <Modal name={selected.name}/>
                    )
                }
                <button onClick={this.testMargin}>testMargin</button>
                <button onClick={this.testTransform}>testTransform</button>
                <input type='file' onChange={this.handleChoose} name='file' ref={this.fileRef}/>
                <button onClick={this.handleUpload}>upload</button>
            </div>
        )
    }
}


