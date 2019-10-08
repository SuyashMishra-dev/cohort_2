import { todoActionTypes } from "./todo.types";

export const addTodo = (todo) => ({
    type : todoActionTypes.ADD_TODO,
    payload : todo
})

export const removeTodo = todo => ({
    type : todoActionTypes.REMOVE_TODO,
    payload : todo
})

export const toggleIsDone = todo => ({
    type : todoActionTypes.TOGGLE_IS_DONE,
    payload : todo
})