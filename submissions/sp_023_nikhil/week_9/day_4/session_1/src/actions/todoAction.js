const addTodo = (task) => {
    return {
        type: "ADD_TODO",
        task
    };
};

export default addTodo