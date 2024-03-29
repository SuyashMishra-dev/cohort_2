const INC_COUNTER = "INC_COUNTER";

const DEC_COUNTER = "DEC_COUNTER";

const CONDITION = "CONDITION"

const MULTIPLY = "MULTPLY"

const DIVIDE = "DIVIDE"

const REMAINDER  = "REMAINDER"

const initialState ={
    count:1
}

const counter  = (state = initialState , action) =>{
    switch(action.type) {

        case INC_COUNTER:
            return {
                count : state.count + action.amount
            };
        
        case DEC_COUNTER:
            return {
                count : state.count - action.amount
            };
        case CONDITION:
            if(action.amount%2==0)
            return {
                    count:state.count + Number(action.amount) +2
            }
            else if(action.amount%2!=0)
            return {
                    count:state.count + Number(action.amount) +1
            }
        case MULTIPLY:
            return{
                    count:state.count*Number(action.amount)
            }
        case DIVIDE:
            return{
                    count:state.count/Number(action.amount)
            }

        case REMAINDER:
            return{
                    count:state.count%action.amount
            }

            default:
                return state;
    }
}
export default counter;