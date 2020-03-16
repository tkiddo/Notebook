import React from 'react'

export default class ErrorTest extends React.Component{
    constructor(){
        throw new Error('sss')
    }
    render(){
        return (
            <div>normal view</div>
        )
    }
}