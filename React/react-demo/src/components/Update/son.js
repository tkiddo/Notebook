import React from 'react'

export default class Son extends React.PureComponent{
    constructor(){
        super(...arguments)
        this.state={
            name:'son'
        }
    }

    

    render(){
        // console.log('son render')
        const {count} = this.props
        return (
        <div>son,{count}</div>
        )
    }
}