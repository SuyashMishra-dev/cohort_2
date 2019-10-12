import registerActionTypes from './register.types'
import Axios from 'axios'
import { setToken } from "../user/user.actions";
import { loginSuccessfull } from '../login/login.actions';

export const registerRequest = () => ({
    type : registerActionTypes.REGISTER_REQUEST
})

export const registerSuccessfull = (data) => ({
    type : registerActionTypes.REGISTER_SUCCESSFULL,
    payload : data
})

export const registerFailure = (errorMessage) => ({
    type : registerActionTypes.REGISTER_FAILURE,
    payload : errorMessage
})

export const register = (data) => {

    return dispatch => {
        dispatch(registerRequest())
        return Axios.post('https://reqres.in/api/register',data)
                .then(res=> {
                    dispatch(setToken(res.data.token))
                    dispatch(loginSuccessfull())
                    return dispatch(registerSuccessfull(res.data))
                })
                .catch(err=>{
                    return dispatch(registerFailure(err))
                })
    }
}