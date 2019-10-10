import {createstore} from 'redux'

const INC_COUNTER = "INC_COUNTER"; // This is the type of the action

const DEC_COUNTER = "DEC_COUNTER";
const ODD_COUNTER = "ODD_COUNTER";
const EVEN_COUNTER = "EVEN_COUNTER";
const MUL = "MUL";
const DIV = "DIV";

const initialState = {
  count: 1
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
   

      case EVEN_COUNTER:
      if(Number(state.count) %2 === 0){
        return{
          count: state.count +2
        }
      }
      else{
        return{
          count:state.count
        }
      }

      case ODD_COUNTER:
      if(Number(state.count) %2 === 1){
        return{
          count: state.count +1
        }
      }
      else{
        return{
          count:state.count
        }
      }
      case MUL:
      return{
        count: state.count * action.amount
      }
      case DIV:
      if(action.amount == 0){
        return{
          count: 'action not possible'
        }
      }
      else {
         return{
          count:state.count / action.amount
         }
      }
       
      default:
      return state;
  }
};

export default counter;
