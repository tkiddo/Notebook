import {ADD} from './constants'

const initialState = {
    number:0
}

export const counter = function (state=initialState,action) {
    switch (action.type) {
        case ADD:
            return {
                ...state,
                number:state.number+1
            }
                
        default:
            return state;
    }
}