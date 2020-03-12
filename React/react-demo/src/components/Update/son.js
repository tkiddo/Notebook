import React from 'react'

export default class Son extends React.PureComponent{
    constructor(){
        super(...arguments)
        this.state={
            name:'son',
            a:0
        }
    }

    // shouldComponentUpdate(nextProps,nextState){
    //     console.log(this.props,nextProps)
    //     if(nextProps.obj.age===this.props.obj.age){
    //         return false
    //     }else{
    //         return true
    //     }
    // }
    componentDidUpdate(){
        console.log('son update')
    }
    componentDidMount(){
        this.setState({
            a:this.state.a+1
        })
        console.log('1--',this.state.a)
        this.setState({
            a:this.state.a+1
        })
        console.log('2--',this.state.a)
        this.setState({
            a:this.state.a+1
        })
        console.log('3--',this.state.a)
        setTimeout(() => {
            this.setState({
                a:this.state.a+1
            })
            console.log('4--',this.state.a)
            this.setState({
                a:this.state.a+1
            })
            console.log('5--',this.state.a)
        }, 0);
    }

    render(){
        // console.log('son render')
        const {obj} = this.props
        return (
        <div>son,{obj.age},a:{this.state.a}</div>
        )
    }
}