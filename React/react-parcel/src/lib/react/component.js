import ReactDOM from '../react-dom'


export default class Component{
    constructor(props={}){
        this.state={}
        this.props=props
    }

    setState(data){
        const state = this.state
        this.state={...state,...data}
        ReactDOM.renderComponent(this)
    }
}