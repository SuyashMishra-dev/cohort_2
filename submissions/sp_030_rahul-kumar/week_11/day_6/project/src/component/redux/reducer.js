var state1 = JSON.parse(window.localStorage.getItem('rahul'))

 if(state1==null)
    {
  state1={ user:[],
  }
}
const reducer =(state=state1,action) =>{
        if(action.type=="add")
        {
            var obj={
                user:[...state.user,action.val],                
            }
            window.localStorage.setItem('rahul',JSON.stringify(obj))
        return obj
        }
        
    return state
}
export default reducer
