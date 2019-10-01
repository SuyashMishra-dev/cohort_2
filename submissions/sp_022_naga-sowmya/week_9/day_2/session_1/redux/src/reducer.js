const INC_COUNTER = "INC_COUNTER";
const DEC_COUNTER = "DEC_COUNTER";
const MUL_COUNTER = "MUL_COUNTER";
const DIV_COUNTER = "DIV_COUNTER";
const REM_COUNTER = "REM_COUNTER";
const ODDEVEN_COUNTER = "ODD_COUNTER";

const initialstate = {
    count : 0,
}

const counter = (state=initialstate, action) => {
    switch(action.type){
        case INC_COUNTER:
            return {
                count : state.count + action.amount
            }

        case DEC_COUNTER:
            return{
                count : state.count - action.amount
            }

        case MUL_COUNTER:
            return {
                count : state.count * action.amount
            }

        case DIV_COUNTER :
            if(action.amount === 0){
                alert('Zero cannot be divided by any number');
            }
            return{
                count : state.count / action.amount
            } 

        case REM_COUNTER :
            return{
                count: state.count % action.amount
            }

        case ODDEVEN_COUNTER :
            if (state.count % 2 === 1) {
                return {
                    count : state.count + action.amount + 1
                }
            }
            else if(state.count % 2 === 0){
                return {
                    count : state.count + action.amount + 2
                }
            }
            
        default :
            return state;
    }
}

export default counter;