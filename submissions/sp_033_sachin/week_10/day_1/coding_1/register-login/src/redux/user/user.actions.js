import userActionTypes from './user.types';
import Axios from 'axios';

export const setUserRequest = () => ({
    type : userActionTypes.SET_USER_REQUEST
})

export const userRequestSuccess = (data) => ({
    type : userActionTypes.USER_REQUEST_SUCCESS,
    payload : data
})

export const userRequestFailure = (message) => ({
    type : userActionTypes.USER_REQUEST_FAILURE,
    payload : message
}) 

export const setCurrentUser = ({username,token}) => {
    return dispatch => {

        dispatch(setUserRequest());

        return Axios({
            method: "GET",
            url : "http://localhost:8080/user/"+username,
            headers: {Authorization: "Bearer "+token,}
        })
        .then(res=> {
            console.log(res.data)
            return dispatch(userRequestSuccess(res.data))
        })
        .catch(err=> {
            return dispatch(userRequestFailure(err.error))
            
        })
    }
}