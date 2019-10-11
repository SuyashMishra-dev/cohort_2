import todo from './todoReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    addTask: todo
}) 

export default rootReducer;