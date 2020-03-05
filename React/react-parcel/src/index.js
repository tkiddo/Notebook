import React from './lib/react'
import ReactDOM from './lib/react-dom'

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

class Ele extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className='123'>
                <div className='456' style={{color:"red"}} onclick={()=>console.log(1)}>{this.props.name}</div>
            </div>
        )
    }
}

console.log(<Ele name='123'/>)

ReactDOM.render(<Ele name='123'/>,document.querySelector("#root"))

