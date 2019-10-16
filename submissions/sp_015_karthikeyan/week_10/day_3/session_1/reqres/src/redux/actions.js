import Axios from 'axios';

const REGISTER_REQUEST = 'REGISTER_REQUEST';
const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
const REGISTER_FAIL = 'REGISTER_FAIL';

const LOGIN_REQUEST = 'LOGIN_REQUEST';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAIL = 'LOGIN_FAIL';

const LOGOUT = 'LOGOUT';

const PATCH_REQUEST = "PATCH_REQUEST";
const PATCH_SUCCESS = "PATCH_SUCCESS";
const PATCH_FAIL = "PATCH_FAIL";

const registerRequest = () => {
    return {
        type: REGISTER_REQUEST,
    }
}

const registerSuccess = (response) => {
    return {
        type: REGISTER_SUCCESS,
        response
    }
}

const registerFail = () => {
    return {
        type: REGISTER_FAIL
    }
}

const loginRequest = () => {
    return {
        type: LOGIN_REQUEST,
    }
}

const loginSuccess = (response) => {
    return {
        type: LOGIN_SUCCESS,
        response
    }
}

const loginFail = () => {
    return {
        type: LOGIN_FAIL
    }
}

const logout = () => {
    return {
        type: LOGOUT
    }
}

const patchRequest = () => {
    return {
        type: PATCH_REQUEST
    }
}

const patchSuccess = (response) => {
    return {
        type: PATCH_SUCCESS,
        response
    }
}

const patchFail = () => {
    return {
        type: PATCH_FAIL
    }
}

const registerUser = (query) => {
    console.log('Register user has started');
    return dispatch => {
        console.log('requesting register user');
        dispatch(registerRequest());
        return Axios.post('https://reqres.in/api/register', query)
                    .then(resp => {
                        console.log('register user is success');
                        dispatch(registerSuccess(resp.data.token));
                    })
                    .catch(error => {
                        console.log('register user is fail');
                        console.log(error);
                        dispatch(registerFail());
                    })
    }
}

const loginUser = (query) => {
    return dispatch => {
        console.log('requesting login user');
        dispatch(loginRequest());
        return Axios.post('https://reqres.in/api/login', query)
                    .then(resp => {
                        console.log('login is success');
                        dispatch(loginSuccess(resp.data.token))
                    })
                    .catch(error => {
                        console.log('login failed');
                        console.log(error);
                        dispatch(loginFail());
                    })
    }
}

const patch = (query) => {
    return dispatch => {
        console.log('requesting patch');
        dispatch(patchRequest());
        return Axios({
            method: 'put',
            url: 'https://reqres.in/api/users/2',
            data: query
        }).then(response => {
            console.log('patch success');
            console.log(response);
            dispatch(patchSuccess(response.data.updatedAt))
        }).catch(error => {
            console.log(error);
            dispatchEvent(patchFail())
        });
    }
}

export { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAIL, registerUser,
         LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, loginUser,
         LOGOUT, logout, PATCH_REQUEST, PATCH_SUCCESS, PATCH_FAIL, patch }