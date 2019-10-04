const INC_COUNTER = "INC_COUNTER"; 
const DEC_COUNTER = "DEC_COUNTER"; 
const MULTIPLY_COUNTER = "MULTIPLY_COUNTER";
const DIVIDE_COUNTER = "DIVIDE_COUNTER";
const REMAINDER_COUNTER="REMAINDER_COUNTER"


const initialState = {
  count: 0
};

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

    case MULTIPLY_COUNTER:
      return{
        count:state.count*action.amount
      }
    
    case MULTIPLY_COUNTER:
      return{
        count:state.count*action.amount
      }

    case DIVIDE_COUNTER:
      return{
        count:state.count / action.amount
      } 
      
    case REMAINDER_COUNTER:
      return{
        count:state.count % action.amount
      } 
    
    default:
      return state;
  }
};

export default counter;
