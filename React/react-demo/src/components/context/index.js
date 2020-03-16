import React from 'react'
import { StageOne } from './stageOne'
import { MyContext } from './context'

export default class ContextComponent extends React.Component {
    constructor() {
        super(...arguments)
        this.state = {
            theme: 'dark'
        }
    }
    handleClick=()=>{
        this.setState({
            theme:'light'
        })
    }
    render() {
        const { theme } = this.state
        return (
            <MyContext.Provider value={theme}>
                <div>
                    <div>provider:{theme}</div>
                    <StageOne />
                    <button onClick={this.handleClick}>change</button>
                </div>
            </MyContext.Provider>
        )
    }
}