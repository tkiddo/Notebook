import React,{useState} from 'react'
import './index.scss'

const WordItem =(props)=>{
    const [cls,setCls] = useState('')
    const {info} = props
    return (
        <div className={`word-item ${cls}`} style={{top:`${info.top}px`}} onClick={()=>setCls('active')}>
            <span>{info.content}</span>
        </div>
    )
}
export default WordItem