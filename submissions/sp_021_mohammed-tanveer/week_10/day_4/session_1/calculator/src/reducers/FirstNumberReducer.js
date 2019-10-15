export default (state = null, action) => {
    switch(action.type){
        case "FIRST_NUMBER_ADDED":
            return action.firstNumberAdded;
            break;
    }
    return state;
}