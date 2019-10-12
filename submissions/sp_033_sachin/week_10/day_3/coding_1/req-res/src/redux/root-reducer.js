import { combineReducers } from "redux";
import usersListReducer from "./users-list/users-list.reducer";
import registerReducer from "./register/register.reducer";
import loginReducer from "./login/login.reducer";

export default combineReducers({
    usersList : usersListReducer,
    register : registerReducer,
    login : loginReducer
})