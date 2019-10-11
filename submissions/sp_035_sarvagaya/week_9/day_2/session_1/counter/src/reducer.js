const INC_COUNTER = "INC_COUNTER";
const DEC_COUNTER = "DEC_COUNTER";
const INC_ODD = "INC_ODD";
const INC_EVEN = "INC_EVEN";
const MULT = "MULT";
const DIVIDE = "DIVIDE";
const REMAINDER = "REMAINDER";

const initialState ={
    count: 0
};

const Counter = (state = initialState, action) =>
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
            if(action.amount %2 ==1)
            {
                return{
                    count: state.count + 1
                };
            }
            else
            {
                return state
            }

        case INC_EVEN:
            if(action.amount %2 ==0)
            {
                return{
                    count: state.count + 2
                };
            }

        case MULT:
            return{
                count: state.count * action.amount
            };

        case DIVIDE:
            return{
                count: state.count / action.amount
            };

        case REMAINDER:
            return{
                count: state.count % action.amount
            };

        default:
        {
            return state
        }
    }
}

export default Counter;