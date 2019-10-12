import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAIL,
         LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL,
         LOGOUT, PATCH_REQUEST, PATCH_SUCCESS, PATCH_FAIL} from './actions';

const initStore = {
    isAuth: false,
    registerError: false,
    registerToken: '',
    loginError: false,
    loginToken: '',
    patchDate: ''
}

const reducer = (state = initStore, action) => {
    console.log('reducer is called');
    switch (action.type) {
        case REGISTER_REQUEST: {
            return { ...state, registerError: false }
        }
        case REGISTER_SUCCESS: {
            return { ...state, registerToken: action.response }
        }
        case REGISTER_FAIL: {
            return { ...state, registerError: true }
        }
        case LOGIN_REQUEST: {
            return { ...state, loginError: false }
        }
        case LOGIN_SUCCESS: {
            return { ...state, loginToken: action.response }
        }
        case LOGIN_FAIL: {
            return { ...state, loginError: true }
        }
        case LOGOUT: {
            return { ...state, loginToken: '' }
        }
        case PATCH_REQUEST: {
            return { ...state }
        }
        case PATCH_SUCCESS: {
            return { ...state, patchDate: action.response }
        }
        default: return state;
    }
}

export default reducer;
