import userActionTypes from "./user.types";
import { getUserData } from "./user.utils";
const INITIAL_STATE = {
    currentUser : null,
    isLoading : false,
    errorMessage : ''
}


const userReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case userActionTypes.SET_USER_REQUEST :
            return {
                ...state,
               isLoading : true
            }            
        case userActionTypes.USER_REQUEST_SUCCESS : 
            return {
                ...state,
                isLoading : false,
                currentUser : action.payload
            }
        case userActionTypes.USER_REQUEST_FAILURE :
            return {
                ...state,
                isLoading : false,
                errorMessage : action.payload
            }
        default:
            return state;
    }
}

export default userReducer;