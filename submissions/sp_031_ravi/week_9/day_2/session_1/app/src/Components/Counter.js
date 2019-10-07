import React from "react";
import { connect } from "react-redux"; // (4)
import {
  incrementAction,
  decrementAction,
  oddincrementAction,
  evenincrementAction
} from "./../Store";

// You can use
//  const Counter = ({value, incr, decr})
// if you do the above, you can avoid using props.value and use value directly
const Counter = props => (
  <div>
    <p>
      <b>{props.value}</b>
    </p>
    <button onClick={props.incr}>Increment</button>
    <button onClick={props.decr}>Decrement</button>
    <button onClick={props.oddincr}>Odd Increment</button>
    <button onClick={props.evenincr}>Even Increment</button>
  </div>
);

const mapStateToProps = state => {
  console.log("map state called", state);
  return {
    value: state.counter
  };
};

const mapDispatchToProps = dispatch => {
  console.log("dispatch called");
  return {
    incr: () => dispatch(incrementAction()),
    decr: () => dispatch(decrementAction()),
    oddincr: () => dispatch(oddincrementAction()),
    evenincr: () => dispatch(evenincrementAction())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

// export default connect(arg1,arg2)(Counter)
// arg1 = mapStateToProps
// arg2 = mapDispatchToProps
