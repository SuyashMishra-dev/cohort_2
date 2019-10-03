const INC_COUNTER = "INC_COUNTER";
const DEC_COUNTER = "DEC_COUNTER";
const INC_ODD = "INC_ODD";
const INC_EVEN = "INC_EVEN";
const MULT_COUTER = "MULT_COUNTER";
const DIV_COUNTER = "DIV_COUNTER";

const initialState = {
    count: 0
};

const counter = (state = initialState , action) =>
{
    switch(action.type)
    {
        case INC_COUNTER:
            return{
                count: state.count + action.amount
            };
        case DEC_COUNTER:
            return{
                count: state.count - action.amount
            };
        case INC_ODD:
            {
            if(action.amount % 2 ===1)
            {
                return{
                    count: state.count + 1
                };
            }
        };
        case INC_EVEN:
            {
            if(action.amount % 2 ==0)
            {

            
            return{
                count: state.count + 2
            };
        }
    };
        case MULT_COUTER:
            return{
                count: state.count * action.amount
            };
        case DIV_COUNTER:
            return{
                count: state.count / action.amount
            };
        default:
            return state;
    }
};

export default counter;