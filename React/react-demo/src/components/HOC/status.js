import React, { Fragment } from 'react'

export const status=(props)=>{
    const flag = false
    if(flag){
        return (
            <Fragment>
                {props.children}
            </Fragment>
        )
    }
}