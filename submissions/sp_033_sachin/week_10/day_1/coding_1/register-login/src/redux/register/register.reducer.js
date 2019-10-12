import registerActionTypes from "./register.types";

const INITIAL_STATE = {
    isLoading : false,
    error : '',
    response : '' ,
    data : null
}

const registerReducer = (state=INITIAL_STATE,action) => {

    switch (action.type) {
        case registerActionTypes.REGISTER_USER_REQUEST:
            return {
                ...state,
                isLoading : true,
                data : action.payload
            }
        case registerActionTypes.REGISTER_USER_SUCCESS:
            return {
                ...state,
                isLoading : false,
                response : {...action.payload}
            } 
        case registerActionTypes.REGISTER_USER_FAILURE:
            return {
                ...state,
                isLoading : false,
                error : {...action.payload},
                data : null
            }
    
        default:
            return state
    }
}

export default registerReducer;