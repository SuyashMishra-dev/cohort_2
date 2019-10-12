import userActionType from "./user.types";

export const setCurrentUser = (userData) => ({
    type : userActionType.SET_CURRENT_USER,
    payload : userData
})

export const setToken = (token) => ({
    type : userActionType.SET_TOKEN,
    payload : token
})

export const logoutUser = () => ({
    type : userActionType.LOGOUT_USER
})