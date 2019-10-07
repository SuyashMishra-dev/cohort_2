


const INC_COUNTER = "INC_COUNTER"; 


const DEC_COUNTER = "DEC_COUNTER";
const ODD_INCREMENT = "ODD_INCREMENT";
const EVEN_INCREMENT = "EVEN_INCREMENT";
const MULTIPLY = "MULTIPLY";
const DIVIDE = "DIVIDE";

    const initialState = {
    count: 0
    };



const counter = (state = initialState, action) => {

  switch (action.type) {
    case INC_COUNTER:
      return {
        count: state.count + action.amount };
      break;
    case DEC_COUNTER:
      return {
        count: state.count - action.amount };
        break;

        case EVEN_INCREMENT:
            return {
              count: state.count + action.amount +2};
              break;

              case ODD_INCREMENT:
            return {
              count: state.count + action.amount +1};
              break;

              case MULTIPLY:
                  return {
                    count: state.count * action.amount };
                    break;

                    case DIVIDE:
                  return {
                    count: state.count / action.amount };
                    break;
      
    default:
      return state;
  }
};

export default counter;
