import {opr} from './actions'

const reducer =(state={ans:0},action)=>{
  if(action.type=="add")
  {
      console.log(state.ans)
      return {
          ans:action.val1+action.val2
      }
  }
  if(action.type=="sub")
  {
      console.log(state.ans)
      return {
          
          ans:action.val1-action.val2
      }
  }
  if(action.type=="mul")
  {
      console.log(state.ans)
      return {
          
          ans:action.val1*action.val2
      }
  }
  if(action.type=="div")
  {
      console.log(state.ans)
      return {
          
          ans:action.val1/action.val2
      }
  }
           return state 
}
export default reducer;
