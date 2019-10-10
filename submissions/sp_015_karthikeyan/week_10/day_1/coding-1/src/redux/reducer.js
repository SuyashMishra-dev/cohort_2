import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILED, 
         LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILED, SAVE_USERNAME,
         GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_FAILED } from './action';

const initStore = {
    isAuth: false,
    isLoading: false,
    username: '',
    token: '',
    userInfo: '',
    registerError: '',
    loginError: '',
    getUserError: ''
}

const reducer = (state = initStore, action) => {
    console.log('reducer is called');
    switch (action.type) {
        case REGISTER_REQUEST: {
            console.log('Register Request Reducer is called');
            return { ...state, isLoading: true }
        }
        case REGISTER_SUCCESS: {
            console.log('Register Success Reducer is called');
            return { ...state, isLoading: false }
        }
        case REGISTER_FAILED: {
            console.log('Register Failed Reducer is called');
            return { ...state, isLoading: false, registerError: action.response.message }
        }
        case LOGIN_REQUEST: {
            console.log('Login Request Reducer is called');
            return { ...state, isLoading: true }
        }
        case LOGIN_SUCCESS: {
            console.log('Login Success Reducer is called');
            return { ...state, isLoading: false, isAuth: true, token: action.response.data.token }
        }
        case LOGIN_FAILED: {
            console.log('Login Failed Reducer is called');
            return { ...state, isLoading: false, loginError: action.response.message }
        }
        case SAVE_USERNAME: {
            console.log('Save Username Reducer is called');
            return { ...state, username: action.username }
        }
        case GET_USER_REQUEST: {
            console.log('GetUser Request Reducer is called');
            return { ...state, isLoading: true }
        }
        case GET_USER_SUCCESS: {
            console.log('GetUser Request Reducer is called');
            return { ...state, isLoading: false, userInfo: action.response.data }
        }
        case GET_USER_FAILED: {
            console.log('GetUser Failed Reducer is called');
            return { ...state, isLoading: false, getUserError: action.response.data }
        }
        default: return state;
    }
}

export default reducer;