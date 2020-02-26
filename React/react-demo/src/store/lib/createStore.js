
//入参reducer其实是一个函数，其中包含了各个reducer
export function createStore(reducer) {
    
    let currentReducer = reducer
    let currentState = {}
    let isDispatching = false

    //这里形成一个闭包，在外部调用dispatch函数时，currentState任然可以访问，生命周期延长，会一直存在，这里的reducer其实是一个函数，根据action值来执行每一个Reducer，如果有匹配，就更改相应reducer的
    //state值，没有就返回原值
    function  dispatch(action) {
        if(!isDispatching){
            currentState = currentReducer(currentState,action)
        }
    }

    //返回当前state值
    function getState() {
        return currentState
    }

    //刚刚创建store时，初始化state，因为没有action.type是'init',所以会更新state值为默认值
    dispatch({type:'init'})

    return{
        dispatch,
        getState
    }
}