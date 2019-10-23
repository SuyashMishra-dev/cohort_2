import {todoActionTypes} from "./todo.types";
import { removeTodo, toggleIsDone } from "./todo.utils";

const INITIAL_STATE = {
    count : 0,
    todos : []
}

const todoReducer = (state=INITIAL_STATE,action) => {

    switch (action.type) {
        case todoActionTypes.ADD_TODO:
            
            return {
                ...state,
                count : state.count + 1,                
                todos : [...state.todos, action.payload]
            }
        case todoActionTypes.REMOVE_TODO:
        
            return {
                ...state,
                count : state.count - 1,
                todos : removeTodo(state.todos,action.payload)
            }
        case todoActionTypes.TOGGLE_IS_DONE:
        
            return {
                ...state,
                todos : toggleIsDone(state.todos, action.payload)
            }
    
        default:
            return state;
    }
} 

export default todoReducer;