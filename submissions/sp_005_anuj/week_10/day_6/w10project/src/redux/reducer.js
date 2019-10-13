import {FILTER, SORT } from './action.js'
var data =  JSON.parse(localStorage.getItem("arr"));
if(data === null) {}
else{
    var initialState = data;
}
console.log(data)
const Reduce = (state = initialState, action) => {
    return state;
}
export default Reduce;