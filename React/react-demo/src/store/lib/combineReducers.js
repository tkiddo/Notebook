//入参reducers是一个包含各个reducer的键值对的对象
export function combineReducers(reducers) {
    //获取reducers属性组成的数组
    let reducerKeys = Object.keys(reducers)
    let finalReducer = {}
    //遍历每一个reducer，并把每一个reducer写入finalReducer
    for(let i=0;i<reducerKeys.length;i++){
        let key = reducerKeys[i]
        finalReducer[key]=reducers[key]
    }

    //判断state是否改变
    let hasChanged = false
    //存储新的state
    let nextState = {}
    //这里形成一个闭包，函数被返回后，在外部调用任然可以访问finalReducer
    return function combination(state={},action) {
        let finalReducerKeys = Object.keys(finalReducer)
        //遍历finalReducer的每个属性，其实就是每一个单独的reducer，并执行reducer
        for(let i=0;i<finalReducerKeys.length;i++){
            let key = finalReducerKeys[i]
            let reducer = finalReducer[key]
            //不同reducer的state分开管理，初始化时为undefined
            let preStateForKey = state[key]
            //执行reducer获取新的state，初始化时入参第一个为undefined，会采用默认参数，即initial state
            let nextStateForKey = reducer(preStateForKey,action)
            //把单独的state写入总的state
            nextState[key]=nextStateForKey
            //flag更改,只要更改一次之后，hasChanged就一直为true，||操作符，如果判断一个就能出结果，就不会执行后一个
            hasChanged = hasChanged || nextStateForKey !== preStateForKey
        }
        //根据是否更改来返回新的state
        return hasChanged?nextState:state
    }
    
}