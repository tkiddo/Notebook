import React, { Fragment,useState } from 'react'
import style from './index.module.scss'

const CirclePrize = () => {
    const [deg,setDeg] = useState(0)
    const [flag,setFlag] = useState(false)
    const start = ()=>{
        if(!flag){
            setFlag(true)
            const i = Math.ceil(Math.random()*6)
            const left = deg%360
            setDeg(deg+360-left+360*3+(i-1)*60)
        }else{
            alert('running !')
        }
    }
    return (
        <Fragment>
            <div className={`${style['box']}`}>
                <div className={`${style['wrapper']}`} style={{'transform':`rotate(${deg}deg)`}} onTransitionEnd={()=>setFlag(false)}>
                    <div className={`${style['item']}`}><div>3</div></div>
                    <div className={`${style['item']}`}><div>2</div></div>
                    <div className={`${style['item']}`}><div>1</div></div>
                    <div className={`${style['item']}`}><div>6</div></div>
                    <div className={`${style['item']}`}><div>5</div></div>
                    <div className={`${style['item']}`}><div>4</div></div>
                </div>
                <div className={`${style['pointer']}`} onClick={()=>start()}>start</div>
            </div>
        </Fragment>
    )
}

export default CirclePrize