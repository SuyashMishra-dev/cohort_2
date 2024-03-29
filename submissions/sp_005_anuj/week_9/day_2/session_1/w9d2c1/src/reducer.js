const INC_COUNTER = "INC_COUNTER";

const DEC_COUNTER = "DEC_COUNTER";

const INC_COUNTERODD= "INC_COUNTERODD";

const INC_COUNTEREVEN = "INC_COUNTEREVEN";

const MULTIPLY = "MULTIPLY";

const DIVIDE = "DIVIDE";

const REMENDER = "REMENDER";

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
        case INC_COUNTEREVEN:
            if(state.count % 2 === 0) {
                return { 
                    count : state.count + 2
                };
            } 
        case INC_COUNTERODD:
            if(state.count % 2 !== 0) {
                return {
                    count : state.count + 1
                };
            }
            
        default:
            return state;

        case DIVIDE:
            return {
                count: state.count / action.amount
            };
        case MULTIPLY:
            return {
                count: state.count * action.amount
            };
        case REMENDER:
            return {
                count: state.count % action.amount
            };
      
    }

};

export default counter;
