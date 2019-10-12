import registerActionTypes from "./register.types";

const INITIAL_STATE = {
    isLoading : false,
    responseData : null,
    error : null
}


const registerReducer = (state=INITIAL_STATE, action) => {

    switch (action.type) {
        case registerActionTypes.REGISTER_REQUEST:
            return {
                ...state,
                isLoading : true
            }            
            
        case registerActionTypes.REGISTER_SUCCESSFULL : 
            return {
                ...state,
                isLoading : false,
                responseData : action.payload
            }    
        case registerActionTypes.REGISTER_FAILURE : 
            return {
                ...state,
                isLoading : false,
                error : action.payload
            }
        

        default:
            return state;
    }
}

export default registerReducer;