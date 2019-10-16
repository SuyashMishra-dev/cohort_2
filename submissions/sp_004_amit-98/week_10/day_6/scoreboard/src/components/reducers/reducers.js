const ADD_PLAYER = "ADD_PLAYER";
var data=localStorage.getItem("playerDetails");
var details=JSON.parse(data);
if(details===null){}
else{
    var initState=details
}
const Reducer=(state=initState,action)=>{
    switch (action.type) {
        case ADD_PLAYER:
          let temp = {
            playerName: action.playerName,
            country: action.country,
            t20: action.t20,
            odi:action.odi,
            test :action.test
          };
          return {
            ...state,
            state: [...state, temp]
          };
    
        default:
          return state;
      }
}
export default Reducer;