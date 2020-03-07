import React from '../lib/react'
// import data from '../json/data.json'

export default class Home extends React.Component{
    constructor(){
        super(...arguments)
        this.state={
            age:32
        }
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount(){
        console.log('mounted')
        
    }

    handleClick(){
        this.setState({
            age:45
        })
    }
    
    render(){
        const {age} = this.state
        return (
            <div className={age}>
                <div className={age} onclick={()=>console.log(1)}>{this.props.name}</div>
                <div>{age}</div>
                <button onclick={this.handleClick}>change</button>
            </div>
        )
    }
}




const ele = (
    <div className='123'>
        <div className='456' style={{color:"red"}} onclick={()=>console.log(1)}>456</div>
    </div>
)

// const Ele = ()=>{
//     return (
//         <div className='123'>
//             <div className='456' style={{color:"red"}} onclick={()=>console.log(1)}>456</div>
//         </div>
//     )
// }