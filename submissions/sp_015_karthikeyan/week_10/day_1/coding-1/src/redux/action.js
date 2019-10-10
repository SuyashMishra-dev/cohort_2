import Axios from 'axios';

const REGISTER_REQUEST = 'REGISTER_REQUEST';
const REGISTER_SUCCESS= 'REGISTER_SUCCESS';
const REGISTER_FAILED= 'REGISTER_FAILED';

const LOGIN_REQUEST= 'LOGIN_REQUEST';
const LOGIN_SUCCESS= 'LOGIN_SUCCESS';
const LOGIN_FAILED= 'LOGIN_FAILED';

const SAVE_USERNAME = 'SAVE_USERNAME';

const GET_USER_REQUEST= 'GET_USER_REQUEST';
const GET_USER_SUCCESS= 'GET_USER_SUCCESS';
const GET_USER_FAILED= 'GET_USER_FAILED';

const registerRequest = (query) => {
    console.log('Register is requested');
    console.log(query);
    return {
        type: REGISTER_REQUEST,
        query
    }
}

const registerSuccess = (response) => {
    console.log('Register is successful');
    console.log(response);
    return {
        type: REGISTER_SUCCESS,
        response
    }
}

const registerFailed = (response) => {
    console.log('Register is failed');
    console.log(response);
    return {
        type: REGISTER_FAILED,
        response
    }
}

const loginRequest = (query) => {
    console.log('Login is requested');
    console.log(query);
    return {
        type: LOGIN_REQUEST,
        query
    }
}

const loginSuccess = (response) => {
    console.log('Login is successful');
    console.log(response);
    return {
        type: LOGIN_SUCCESS,
        response
    }
}

const loginFailed = (response) => {
    console.log('Login is failed');
    console.log(response);
    return {
        type: LOGIN_FAILED,
        response
    }
}

const saveUsername = (username) => {
    console.log('UserName saved');
    console.log(username);
    return {
        type: SAVE_USERNAME,
        username
    }
}

const userRequest = (query) => {
    console.log('User info is requested');
    console.log(query);
    return {
        type: GET_USER_REQUEST,
        query
    }
}

const userRequestSuccess = (response) => {
    console.log('User info is successful');
    console.log(response);
    return {
        type: GET_USER_SUCCESS,
        response
    }
}

const userRequestFailed = (response) => {
    console.log('User info is failed');
    console.log(response);
    return {
        type: GET_USER_FAILED,
        response
    }
}

const registerUser = (query) => {
    console.log('registerUser has started');
    return dispatch => {
        console.log('dispatching registerUser');
        dispatch(registerRequest(query));
        return Axios.post('http://localhost:8080/auth/register', query)
                    .then(resp => {
                        console.log('registerUser axios response');
                        console.log(resp);
                        return dispatch(registerSuccess(resp));
                    })
                    .catch(error => {
                        console.log('registerUser axios error');
                        console.log(error);
                        return dispatch(registerFailed(error));
                    })
    }
}

const loginUser = (query) => {
    console.log('loginUser has started');
    return dispatch => {
        console.log('dispatching loginUser');
        dispatch(loginRequest(query));
        return Axios.post('http://localhost:8080/auth/login', query)
                    .then(resp => {
                        console.log('loginUser axios response');
                        console.log(resp);
                        return dispatch(loginSuccess(resp));
                    })
                    .catch(error => {
                        console.log('loginUser axios error');
                        console.log(error);
                        return dispatch(loginFailed(error));
                    })
    }
}

const getUser = (username, token) => {
    console.log('getUser has started');
    return dispatch => {
        console.log('dispatching getUser');
        dispatch(userRequest(username, token));
        return Axios({
            url: `http://localhost:8080/user/${username}`,
            headers: { 'Authorization': `Bearer ${token}` }
        })
        .then(resp => {
            console.log('getUser axios response');
            console.log(resp);
            return dispatch(userRequestSuccess(resp));
        })
        .catch(error => {
            console.log('getUser axios error');
            console.log(error);
            return dispatch(userRequestFailed(error));
        })
    }
}

export { REGISTER_REQUEST, 
         REGISTER_SUCCESS, 
         REGISTER_FAILED,
         LOGIN_REQUEST, 
         LOGIN_SUCCESS, 
         LOGIN_FAILED,
         SAVE_USERNAME,
         GET_USER_REQUEST, 
         GET_USER_SUCCESS, 
         GET_USER_FAILED,
         registerUser, 
         loginUser, 
         saveUsername,
         getUser }