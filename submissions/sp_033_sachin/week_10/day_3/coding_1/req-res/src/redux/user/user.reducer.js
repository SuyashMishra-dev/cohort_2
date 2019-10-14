import userActionTypes from "./user.types";

const INITIAL_STATE = {
    token : null,
    currentUser : null,

}


const userReducer = (state=INITIAL_STATE, action) => {

    switch (action.type) {
        case userActionTypes.SET_TOKEN :
            return {
                ...state,
                token : action.payload
            }
        
        case userActionTypes.SET_CURRENT_USER : 
            return {
                ...state,
                currentUser : action.payload
            }
        
        case userActionTypes.LOGOUT_USER :
            return {
                ...state,
                token : null,
                currentUser : null
            }

        default:
            return state;
    }
}

export default userReducer;