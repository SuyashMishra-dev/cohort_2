import loginActionTypes from "./login.types";
import {setCurrentUser} from "../user/user.actions";
import axios from "axios";

export const loginUserRequest = () => ({
    type: loginActionTypes.LOGIN_USER_REQUEST,    
})

export const loginUserSuccess = ({token,username}) => ({
    type : loginActionTypes.LOGIN_USER_SUCCESS,
    payload : {token,username}
})

export const loginUserFailure = message => ({
    type : loginActionTypes.LOGIN_USER_FAILURE,
    payload : message
})

export const loginUser = (data=null) => {
    console.log(data)
    return dispatch => {

        dispatch(loginUserRequest);

        axios.post('http://localhost:8080/auth/login', data)
            .then(res=>{
                console.log('responselogin',res)
                if (res.data.error) {
                    return dispatch(loginUserFailure(res.data.message))
                } else {
                    dispatch(loginUserSuccess({
                        token : res.data.token,
                        username : data.username
                    }))
                    return dispatch(setCurrentUser({
                        token : res.data.token,
                        username : data.username
                    }))
                }
            })
            .catch(err=>{
                console.log(err,'here')
            })

    }

}