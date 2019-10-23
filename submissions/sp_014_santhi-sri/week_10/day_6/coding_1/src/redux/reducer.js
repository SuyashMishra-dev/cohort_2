
const ADD_PLAYER = "ADD PLAYER";
var details = JSON.parse(localStorage.getItem("players"))
if (details == null) {

}
else {
  var initState = details;
}
// const initState = {
//   orderList: [] 

// };
//
const reducer = (state = initState, action) => {
  console.log("entered reducer");
  switch (action.type) {
    case ADD_PLAYER:
      console.log("ADD PLAYER Called");
      let temp = {
        // orderList:[...state.orderList,action.item]}      
        player: action.player,
        T20score: action.T20score,
        odiscore: action.odiscore,
        testscore: action.testscore,
        selectedcountry: action.selectedcountry
      };
      return {
        ...state,
        state: [...state, temp]
      };

    default:
      console.log("default called", state);
      return state;
  }
};

export default reducer;
