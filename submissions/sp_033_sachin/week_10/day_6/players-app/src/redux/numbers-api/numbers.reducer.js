import numbersActionTypes from "./numbers.types";

const INITIAL_STATE = {
    isLoading : false,
    data : '',
    error : ''
}

const numbersReducer = (state=INITIAL_STATE, action) => {

    switch (action.type) {
        case numbersActionTypes.FETCH_REQUEST :
            return {
                ...state,
                isLoading : true,
            }
        case numbersActionTypes.FETCH_SUCCESS : 
            return {
                ...state,
                isLoading : false,
                data : action.payload
            }
        case numbersActionTypes.FETCH_FAILURE :
            return {
                ...state,
                isLoading:false,
                error : action.payload
            }
    
        default:
            return state
    }

}

export default numbersReducer;