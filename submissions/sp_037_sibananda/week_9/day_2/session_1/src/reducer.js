const INC_COUNTER = "INC_COUNTER";
const DEC_COUNTER = "DEC_COUNTER";
const EVENORODD_INCREMENT = "EVENORODD_INCREMENT";
const MULTIPLYER_COUNTER = " MULTIPLYER_COUNTER";
const DIVIDER_COUNTER = " DIVIDER_COUNTER";
const REMAINDER_COUNTER="REMAINDER_COUNTER";
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
      case  MULTIPLYER_COUNTER:
        return {
          count: state.count * action.amount
        };
      case DIVIDER_COUNTER:
        if (action.amount == 0)
        return {
          count : "ERROR: Can't Divide by Zero"
        }
        else
        return {
          count: state.count/action.amount
        };
      case REMAINDER_COUNTER:
        return {
          count: state.count % action.amount
        };
      case EVENORODD_INCREMENT:
        if(state.count%2==1)
        return {
          count: state.count + action.amount + 1
        };
        else if (state.count%2==0)
        return {
          count: state.count + action.amount +2
        }
      default:
        return state;
    }
  };

export default counter;
