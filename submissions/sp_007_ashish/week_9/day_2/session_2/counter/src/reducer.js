const INC_COUNTER = "INC_COUNTER"; 
const ADD_VAL ="ADD_VAL";
const DEC_COUNTER = "DEC_COUNTER";
const TAKE_VAL ="TAKE_VAL";
const CON_ONE="CON_ONE";
const MUL_COUNTER ="MUL_COUNTER";
const DIV_COUNTER ="DIV_COUNTER";
const REM_COUNTER ="REM_COUNTER"
const initialState = {
  count:0,
  val:0,
  unit:0,
  mulc:1,
};

const counter =(state =initialState,action)=>{
    console.log(action,state.val,state.count);
    switch(action.type){
      case INC_COUNTER:
          return{
           val:state.val,
           count: action.amount+state.count,
          };
      case ADD_VAL:{
          return{
            val:action.val,
            count:state.count
          }
      };
      case TAKE_VAL:{
          return{
            unit:action.unit,
            count:state.count
          }
      };
      case DEC_COUNTER:
         return{
          val:state.val,
          count: state.count-action.amount,
         
      };
      case MUL_COUNTER:
         return{
          val:state.val,
          count: Number(state.count)*action.amount,
         
      };
      case DIV_COUNTER:
         return{
          val:state.val,
          count: Number(state.count)/action.amount,
         
      };
      case REM_COUNTER:
         return{
          val:state.val,
          count: Number(state.count)%action.amount,
         
      };
      case CON_ONE:{
        if(action.amount%2!=0){
          return{
            val:state.val,
            count: action.amount+1,
          }
        }
        else{
          return{
            val:state.val,
            count: action.amount+2,
          }
        }
      }
          default:
              return state;
    }
        
}
export default counter;