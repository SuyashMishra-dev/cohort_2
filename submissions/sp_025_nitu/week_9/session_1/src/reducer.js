const INC_COUNTER = "INC_COUNTER"; // This is the type of the action

const DEC_COUNTER = "DEC_COUNTER"; // This is the type of the action

const INC_ODD="INC_ODD";

const INC_EVEN ="INC_EVEN";

const INC_MUL="INC_MUL";

const INC_DIV="INC_DIV";


const initialState = {
  count: 0,
  rem:0
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
      case INC_ODD:
            if(action.amount %2 !=0){
                return{
               count:action.amount+1
               
                }
              
            }
            else{
                return{
              count:state.count
            }
        }
     
    case INC_EVEN:
     if(Number(action.amount) %2 ==0 && state.count==0){
        return{
         count:action.amount+2
         }
         
        }
        else{
            return{
          count:state.count
        }
    }
    case INC_MUL:
        return{
         count:state.count*state.count
         }
         case INC_DIV:
             if(action.amount==0){
        return{
         count:"not possible"
         }
        }
        else{
            return{
            count:Math.floor(state.count/action.amount),
            rem:state.count % action.amount
        }
    }

       
          
    default:
      return state;
  }
};

export default counter;
