import React, { Fragment } from 'react'

export const Login = (props)=>{
    const userName = null
    if(userName){
        return (
            <Fragment>
                {props.login(userName)}
            </Fragment>
        )
    }else{
        return (
            <Fragment>
                {props.nologin()}
            </Fragment>
        )
    }
}