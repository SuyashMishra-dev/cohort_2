import { combineReducers } from "redux";
import registerReducer from "./register/register.reducer";
import loginReducer from "./login/login.reducer";
import userReducer from "./user/user.reducer";

export default combineReducers({
    register : registerReducer,
    login : loginReducer,
    user : userReducer
})