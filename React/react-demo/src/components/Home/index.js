import React, { Fragment } from 'react'
import {add} from '../../store/counter/action'
import {store,rootReducer} from '../../store'

console.log(rootReducer)

const {counter} = store.getState()

export default class Home extends React.Component{
    constructor(){
        super(...arguments)
        this.state={
            msg:'hello',
            number:counter.number
        }
    }
    componentDidMount(){
        console.log(store.getState())
    }
    handleClick=()=>{
        store.dispatch(add())
        const {counter} = store.getState()
        this.setState({
            number:counter.number
        })
    }
    render (){
        const {msg,number} = this.state
        
        return (
            <Fragment>
                <div>{msg},{number}</div>
                <button onClick={this.handleClick}>add</button>
            </Fragment>
        )
    }
}