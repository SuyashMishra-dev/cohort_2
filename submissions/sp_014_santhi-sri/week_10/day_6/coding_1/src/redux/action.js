const ADD_PLAYER = "ADD PLAYER";

// create action creators
const addPlayer = item => {
  console.log("add player called");
  return {
    type: ADD_PLAYER,
    player:item.player,
    T20score :item.T20score,
    odiscore:item.odiscore,
    testscore:item.testscore,
    selectedcountry:item.selectedcountry   
  };
};

export { addPlayer };
