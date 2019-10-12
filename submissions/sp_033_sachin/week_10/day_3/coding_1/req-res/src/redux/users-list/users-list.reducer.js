import usersListActionTypes from './users-list.types';
import { nextPage, previousPage } from "./users-list.utils";

const INITIAL_STATE = {
    page : 1,
    data : null,
    isLoading : false,
    errorMessage : ''
}


const usersListReducer = (state=INITIAL_STATE, action) => {

    switch (action.type) {
        case usersListActionTypes.NEXT_PAGE :
            
            return {
                ...state,
                page : nextPage(state.page)
            }    
        
        case usersListActionTypes.PREVIOUS_PAGE :

            return {
                ...state,
                page : previousPage(state.page)
            }
        
        case usersListActionTypes.FETCH_USERS_REQUEST : 
            
            return {
                ...state,
                isLoading : true,
            }    
        
        case usersListActionTypes.FETCH_USERS_SUCCESS : 
            
            return {
                ...state,
                isLoading : false,
                data : action.payload
            }
        case usersListActionTypes.FETCH_USERS_FAILURE : 
            
            return {
                ...state,
                isLoading : false,
                errorMessage : action.payload
            }

        default:
            return state;
    }


}

export default usersListReducer;