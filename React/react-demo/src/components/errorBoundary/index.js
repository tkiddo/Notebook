import React from 'react'

export default class ErrorBoundary extends React.Component{
    constructor(){
        super(...arguments)
        this.state={
            hasError:false
        }
    }

    static getDerivedStateFromError(error){
         // 更新 state 使下一次渲染能够显示降级后的 UI
        return {hasError:true}
    }

    componentDidCatch(error){

    }

    render(){
        const {hasError} = this.state
        if(hasError){
            return (
                <h3>Something went wrong</h3>
            )
        }
        return this.props.children
    }
}