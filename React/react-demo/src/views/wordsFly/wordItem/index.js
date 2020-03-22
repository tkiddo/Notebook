import React from 'react'
import './index.scss'

const WordItem =(props)=>{
    const {info} = props
        return (
            <div className='word-item' style={{top:`${info.top}px`}}>
                <span>{info.content}</span>
            </div>
        )
}
export default WordItem