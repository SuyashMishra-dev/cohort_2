import { types } from './types'

const INITIAL_STATE = {
    count : 0
}

const reducer = (state=INITIAL_STATE, action) => {

    switch (action.type) {
        case types.INCR_X:
            return {
                ...state,
                count : state.count + action.payload
            }
            
        case types.DECR_X:
            return {
                ...state,
                count : state.count - action.payload
            }
            
        case types.INCR_X1:
            return {
                ...state,
                count : state.count + action.payload + 1
            }
        
        case types.INCR_X2:
            return {
                ...state,
                count : state.count + action.payload + 2
            }
        
        case types.MUL_X:
            return {
                ...state,
                count : state.count * action.payload
            }
        
        case types.DIV_X:
            return {
                ...state,
                count : state.count / action.payload
            }
        
        case types.REM_X:
            return {
                ...state,
                count : state.count % action.payload
            }
        
        default:
            return state;
    }

}

export default reducer;