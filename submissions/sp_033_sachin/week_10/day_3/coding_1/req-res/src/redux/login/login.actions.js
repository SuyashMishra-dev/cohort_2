import loginActionTypes from "./login.types";
import Axios from "axios";
import { setToken } from "../user/user.actions";

export const loginRequest = () => ({
    type : loginActionTypes.LOGIN_REQUEST
}) 

export const loginSuccessfull = () => ({
    type : loginActionTypes.LOGIN_SUCCESSFULL,

})

export const loginFailure = () => ({
    type : loginActionTypes.LOGIN_FAILURE
})

export const login = (data) => {

    return dispatch => {

        return Axios.post('https:reqres.in/api/login',data)
                .then(res=>{
                    dispatch(setToken(res.data.token))
                    return dispatch(loginSuccessfull())
                })
                .catch(err=>{

                    return dispatch(loginFailure())
                })
    }
}
