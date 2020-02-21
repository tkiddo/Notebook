import {counter} from './counter/reducer'
import {combineReducers,createStore} from './lib'

export const rootReducer = combineReducers({
    counter
})

export const store = createStore(rootReducer)

