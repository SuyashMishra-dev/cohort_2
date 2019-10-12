import usersListActionType from "./users-list.types";
import axios from 'axios';
import store from "../store";

export const next = () => ({
    type: usersListActionType.NEXT_PAGE
})

export const nextPage = () =>{

    let prevPage = store.getState().usersList.page;

    return dispatch => {
        dispatch(next());
        if (prevPage !== store.getState().usersList.page) {
            return dispatch(fetchUsers(store.getState().usersList.page))    
        } 
        
    }

}

export const previous = () => ({
    type: usersListActionType.PREVIOUS_PAGE
})

export const previousPage = () =>{

    let prevPage = store.getState().usersList.page;

    return dispatch => {
        dispatch(previous());
        if (prevPage !== store.getState().usersList.page) {
            return dispatch(fetchUsers(store.getState().usersList.page))    
        } 
        
    }

}

export const fetchUsersRequest = () => ({
    type : usersListActionType.FETCH_USERS_REQUEST
})

export const fetchUsersSuccess = (data) => ({
    type : usersListActionType.FETCH_USERS_SUCCESS,
    payload : data
})

export const fetchUsersFailure = (errorMessage) => ({
    type : usersListActionType.FETCH_USERS_FAILURE,
    payload : errorMessage
})

export const fetchUsers = (page) => {

    return dispatch => {
        dispatch(fetchUsersRequest);

        return axios({
            method : 'GET',
            url : 'https://reqres.in/api/users',
            params: {
                page
            }
        }).then(res=>{
            // console.log(res)
            return dispatch(fetchUsersSuccess(res.data.data))
        }).catch(err=>{
            console.log(err)
            return dispatch(fetchUsersFailure('there was an error'))
        })
    }

}