import todoReducer from './todoReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    addTask: todoReducer
}) 

export default rootReducer;