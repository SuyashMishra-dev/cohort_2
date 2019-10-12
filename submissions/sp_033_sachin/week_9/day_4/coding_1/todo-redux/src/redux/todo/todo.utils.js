export const removeTodo = (todos, todoToRemove) => {
    const existingTodo = todos.find(todo=>todo.id === todoToRemove.id);

    if (existingTodo) {
        return todos.filter(todo=>todo.id!==todoToRemove.id);
    } else {
        return todos;
    }
}

export const toggleIsDone = (todos, todoToChange) => {
    const existingTodo = todos.find(todo=>todo.id === todoToChange.id);

    if (existingTodo) {
        return todos.map(todo=>todo.id===todoToChange.id?{...todo,isDone : !todo.isDone} : todo);
    } else {
        return todos;
    }
}