import loginActionTypes from "./login.types";

const INITIAL_STATE = {
    token : '',
    isLoading : false,
    errorMessage : '',
    username : '',

}

const loginReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case loginActionTypes.LOGIN_USER_REQUEST:
            
            return {
                ...state,
                isLoading : true
            }            
        case loginActionTypes.LOGIN_USER_SUCCESS: 
            return {
                ...state,
                username : action.payload.username,
                token : action.payload.token,
                isLoading : false
            }
        case loginActionTypes.LOGIN_USER_FAILURE:
            return {
                ...state,
                isLoading : false,
                errorMessage : action.payload
            }
        default:
            return state;
    }
}

export default loginReducer;