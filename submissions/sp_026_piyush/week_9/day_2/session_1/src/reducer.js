const INC_COUNTER = "INC_COUNTER"; // This is the type of the action

const DEC_COUNTER = "DEC_COUNTER"; // This is the type of the action

const MUL_COUNTER = "MUL_COUNTER"; // This is the type of the action

const DIV_COUNTER = "DIV_COUNTER";

const MOD_COUNTER = "MOD_COUNTER";


const initialState = {
  count: 2
};

// We define state with initial state as default value
// This is called when we call createStore.
// When we call it the first time, without any arguments,
// The state takes initial value of count as 0
const counter = (state = initialState, action) => {
  switch (action.type) {
    case INC_COUNTER:
        
        return {
            count: state.count + action.amount
        };
    case DEC_COUNTER:
        return {
            count: state.count - action.amount
        };
    case MUL_COUNTER:
        return {
            count: state.count * action.amount
        };
    case DIV_COUNTER:
        return {
            count: state.count / action.amount
        };
    case MOD_COUNTER:
        return {
            count: state.count % action.amount
        };
    default:
        return state;
  }
};

export default counter;