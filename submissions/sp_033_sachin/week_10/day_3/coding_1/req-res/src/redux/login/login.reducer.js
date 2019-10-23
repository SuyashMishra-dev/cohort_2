import loginActionTypes from './login.types'


const INITIAL_STATE = {
    isLoading : false,
    loggedIn : false,
}

const loginReducer = (state= INITIAL_STATE, action) => {

    switch (action.type) {
        case loginActionTypes.LOGIN_REQUEST:
            return {
                ...state,
                isLoading : true
            }
        case loginActionTypes.LOGIN_SUCCESSFULL:
            return {
                ...state,
                isLoading:false,
                loggedIn : true,
            }            
        case loginActionTypes.LOGIN_FAILURE:
            return {
                ...state,
                isLoading:false,
                loggedIn:false
            }
        default:
            return state;
    }
}

export default loginReducer;