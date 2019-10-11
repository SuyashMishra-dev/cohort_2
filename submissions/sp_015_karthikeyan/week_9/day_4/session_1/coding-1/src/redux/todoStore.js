const addToDoAction = (content) => ({
    type: 'ADD_TODO',
    content
});

const checkItem = (index) => ({
    type: 'CHECK_ITEM',
    index
})

const initState = {
    savedItems: [],
    inComplete: 0
}
const todoReducer = (state = initState, action) => {
    console.log('todo reducer called')
    if(action.type === 'ADD_TODO') {
        return { savedItems: [...state.savedItems, {item: action.content, isChecked: false}], inComplete: state.inComplete + 1 }
    }
    else if(action.type === 'CHECK_ITEM') {
        console.log("Hey, I'm checked", action.index)
        let temp;
        let countState;
        temp = state.savedItems.map((ele, i) => {
            if(action.index === i) {
                console.log(i, ele.isChecked)
                ele.isChecked = !ele.isChecked
                countState = ele.isChecked
            }
            return ele
        })
        if(countState) {
            return { savedItems: temp, inComplete: state.inComplete - 1}
        }
        else if(!countState) {
            return { savedItems: temp, inComplete: state.inComplete + 1}
        }
        
    }
    return state;
}

export default todoReducer;
export { addToDoAction, checkItem };