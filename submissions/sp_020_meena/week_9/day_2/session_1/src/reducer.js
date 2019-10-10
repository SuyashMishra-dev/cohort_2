const INC_COUNTER = "INC_COUNTER";

const DEC_COUNTER = "DEC_COUNTER";

const EVEN_COUNTER = "EVEN_COUNTER";

const ODD_COUNTER = "ODD_COUNTER";

const MUL_COUNTER = "MUL_COUNTER";

const DIV_COUNTER = "DIV_COUNTER";

const intialState = {
    count:1
};

const counter = (state = intialState, action) =>{
    switch (action.type){
            case INC_COUNTER:
            return {
            count :state.count + action.amount
        };
        case DEC_COUNTER:
            return {
            count :state.count - action.amount
        };
        case EVEN_COUNTER:
            return {
            count :state.count + action.amount + 2
        };
        case ODD_COUNTER:
            return {
            count :state.count + action.amount + 1
        };
        case MUL_COUNTER:
            return{
                count:(state.count) * (action.amount)
            };
        case DIV_COUNTER:
            return{
                count:(state.count) / (action.amount)
            }    
        default :
        return state;
    }

}
export default counter;