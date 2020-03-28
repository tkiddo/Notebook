import React from 'react'

export default class TestPage extends React.Component{
    componentDidMount(){
        
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