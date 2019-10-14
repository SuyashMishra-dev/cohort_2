const ADD_PLAYER = "ADD_PLAYER";
var data =  JSON.parse(localStorage.getItem("arr"));
if(data === null) {}
else{
    var initialState = data;
}
console.log(data)
const Reduce = (state = initialState, action) => {  
  console.log('entered reducer')
    switch (action.type) {
        case ADD_PLAYER:
          let temp = {
            playername: action.playername,
            country: action.country,
            t20: action.t20,
            odi:action.odi,
            test :action.test
          };
          console.log('adding success')
          return {
            state: [...state, temp]
          };
    
        default:
          return state;
        }
}
export default Reduce;