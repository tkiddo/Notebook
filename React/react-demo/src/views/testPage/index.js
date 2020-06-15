import React from 'react'
import {print} from './module'

export default class TestPage extends React.Component{
    componentDidMount(){
      print()  
    }
    render(){
        console.log(<div className='box'>
            <span>test</span>
        </div>)
        return (
            <div>
                TestPage
            </div>
        )
    }
}