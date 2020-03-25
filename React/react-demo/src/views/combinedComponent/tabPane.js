import React from 'react'
import style from './tabPane.module.scss'
export const TabPane = (props)=>{
    const {isActive,onClick} = props
    return (
        <div className={`${style['pane']} ${isActive?style['active']:''}`} onClick={onClick}>
            {props.children}
        </div>
    )
}