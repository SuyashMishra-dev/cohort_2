import registerActionTypes from './register.types';
import axios from 'axios';

export const registerUserRequest = data => ({
    type : registerActionTypes.REGISTER_USER_REQUEST,
    payload : data
})

export const registerUserSuccess = response => ({
    type : registerActionTypes.REGISTER_USER_SUCCESS,
    payload : response
})

export const registerUserFailure = error => ({
    type : registerActionTypes.REGISTER_USER_FAILURE,
    payload: error
})

export const registerUser = (data=null) => {
    let dataStr = ''
    if (data) {
        dataStr = JSON.stringify(data)
    }

    return dispatch => {

        dispatch(registerUserRequest(data))
        console.log('here')
        return axios.post('http://localhost:8080/auth/register',data)
                    .then(res=>{
                        console.log('why not here',res)
                        return dispatch(registerUserSuccess(res.data))
                    })
                    .catch(err=>dispatch(registerUserFailure(err.data)))
    }

}