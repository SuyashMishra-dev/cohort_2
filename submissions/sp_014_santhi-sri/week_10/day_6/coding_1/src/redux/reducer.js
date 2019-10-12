
const ADD_PLAYER = "ADD PLAYER";
// var temp =JSON.parse(localStorage.getItem("PlayerDetails"))
// if(temp===null){
//   var initState = {
//     orderList: []
//   };
// }
// else{
//   var initState = {
//     orderList=[...temp]
// }
const initState = {
  orderList: []
};
const reducer = (state = initState, action) => {
  console.log("entered reducer");
  switch (action.type) {
    case ADD_PLAYER:
      console.log("ADD PLAYER Called");
      let temp = {
        player: action.player,
        T20score: action.T20score,
        odiscore: action.odiscore,
        testscore: action.testscore,
        selectedcountry: action.selectedcountry             
      };
      // JSON.parse(localStorage.getItem("details"))
      return {
        ...state,
        orderList: [...state.orderList, temp]
      };

    default:
      console.log("default called", state);
      return state;
  }
};

export default reducer;
