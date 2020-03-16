import React from 'react'


export const TabItem =(props)=>{
    const {active,onClick} = props
    const tabStyle = {
        'maxWidth': '150px',
        color: active ? 'red' : 'green',
        border: active ? '1px red solid' : '0px',
    };
    return (
        <h1 style={tabStyle} onClick={onClick}>
            {props.children}
        </h1>
    )
}