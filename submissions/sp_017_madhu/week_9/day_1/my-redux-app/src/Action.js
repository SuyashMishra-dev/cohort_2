const INC_COUNTER = "INC_COUNTER"; // This is the type of the action
// We store the text inside a variable to avoid errors
const DEC_COUNTER = "DEC_COUNTER";
const MULTIPLY_COUNTER = "MULTIPLY_COUNTER";
const DIVIDE_COUNTER = "DIVIDE_COUNTER";
const REMAINDER_COUNTER="REMAINDER_COUNTER"
// Actions
// incrementCounter is a function that takes amount as an argument
//  it returns an object, with type and amount as keys inside
const incrementCounter = amount => {
  return {
    type: INC_COUNTER,
    amount
    // Same as amount: amount
  };
};

const decrementCounter = amount => {
  return {
    type: DEC_COUNTER,
    amount
  };
};

const multiplyCounter = amount => {
  return {
    type: MULTIPLY_COUNTER,
    amount
  };
};

const divideCounter= amount =>{
  return {
    type :DIVIDE_COUNTER,
    amount
  };
};

const remainderCounter = amount =>{
  return {
    type :REMAINDER_COUNTER,
    amount
  }
}

// We export the actions so that we can use in the app
export { incrementCounter, decrementCounter , multiplyCounter, divideCounter, remainderCounter};
