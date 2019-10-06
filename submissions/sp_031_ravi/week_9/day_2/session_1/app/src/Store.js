// Actions
const incrementAction = () => ({ type: "INC" });
const decrementAction = () => ({ type: "DEC" });
const oddincrementAction = () => ({ type: "INC_ODD" });
const evenincrementAction = () => ({ type: "INC_EVEN" });

const reducer = (state = 0, action) => {
  if (action.type === "INC") {
    return state + 1;
  }

  if (action.type === "DEC") {
    return state - 1;
  }

  if (action.type === "INC_ODD") {
    if (state % 2 !== 0) {
      return state + 1;
    } else {
      return state;
    }
  }
    if (action.type === "INC_EVEN") {
      if (state % 2 === 0) {
        return state + 2;
      } else {
        return state;
      }
    }
  

  return state;
};
// exporting reducer
export default reducer;
// exporting actions
export {
  incrementAction,
  decrementAction,
  oddincrementAction,
  evenincrementAction
};
