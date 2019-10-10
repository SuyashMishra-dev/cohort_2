const ADD = "ADD";
const SUBTRACT = "SUBTRACT";
const MULTIPLY = "MULTIPLY";
const DIVIDE = "DIVIDE";
const initialState = {
   result : 0
};
const addition = (state = initialState, action) => {
    switch (action.type) {
        case ADD : 
        return {
           result: state.result + action.amount
        };
        case SUBTRACT :
            return {
               result : state.result - action.amount
            }
        case MULTIPLY :
        return {
            result : state.result * action.amount
        }
        case DIVIDE :
        return {
            result : state.result / action.amount
        }
        default:
            return state;
    }
}
export default addition;