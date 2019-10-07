const initialState = {
    list: []
}

const todo = (state = initialState, action) => {
    switch (action.type){
        case "ADD_TODO":
            console.log(state)
            return {
                list: [...state.list, action.task]
            }
                default:
                    return state    
    }
}

export default todo;