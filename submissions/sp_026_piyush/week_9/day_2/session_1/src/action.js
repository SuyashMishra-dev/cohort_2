const INC_COUNTER = "INC_COUNTER"; // This is the type of the action
// We store the text inside a variable to avoid errors
const DEC_COUNTER = "DEC_COUNTER";

const MUL_COUNTER = "MUL_COUNTER";

const DIV_COUNTER = "DIV_COUNTER";

const MOD_COUNTER = "MOD_COUNTER";

// Actions
// incrementCounter is a function that takes amount as an argument
//  it returns an object, with type and amount as keys inside
const incrementCounter = amount => {
  return {
    type: INC_COUNTER,
    amount: amount % 2 === 0 ? 2 : 1
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
    type: MUL_COUNTER,
    amount
  };
};

const divideCounter = amount => {
  return {
    type: DIV_COUNTER,
    amount
  };
};

const modulusCounter = amount => {
  return {
    type: MOD_COUNTER,
    amount
  };
};

// We export the actions so that we can use in the app
export { incrementCounter, decrementCounter, multiplyCounter, divideCounter, modulusCounter };
