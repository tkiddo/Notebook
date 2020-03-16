import React, { Fragment } from 'react'
import { MyContext } from './context'

// export const Button = (props) => {
//     return (
//         <MyContext.Consumer>
//             {
//                 (context) => (
//                     <Fragment>
//                         <button>{context}</button>
//                     </Fragment>
//                 )
//             }
//         </MyContext.Consumer>

//     )
// }

export class Button extends React.Component{
    shouldComponentUpdate(){
        return false
    }
    componentDidUpdate(){
        console.log('consumer update')
    }
    render(){
        return (
            <MyContext.Consumer>
                {
                    (context) => (
                        <Fragment>
                            <button>{context}</button>
                        </Fragment>
                    )
                }
            </MyContext.Consumer>
    
        )
    }
}