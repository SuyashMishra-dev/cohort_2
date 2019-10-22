var state1 = JSON.parse(window.localStorage.getItem('data'))
if (state1=null){
    state1 = {
        playerDetails:[],
    } 
}
const reducer = (state= state1,action)=>{
 if (action.type==='Add'){
     var obj ={
         playerDetails:[...state.playerDetails,action.player]
     }
     window.localStorage.setItem('data',JSON.stringify(obj))
     return obj
    }
    return state    
}
export default reducer;