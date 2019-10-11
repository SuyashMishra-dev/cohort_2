const INC_COUNTER = "INC_COUNTER"; 
const DEC_COUNTER = "DEC_COUNTER";
const MULTIPLY_COUNTER = "MULTIPLY_COUNTER";
const DIVIDE_COUNTER = "DIVIDE_COUNTER";
const REMAINDER_COUNTER="REMAINDER_COUNTER";
const FINAL_COUNTER="FINAL_COUNTER";

const incrementCounter = amount => {
  return {
    type: INC_COUNTER,
    amount
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
  };
};

const finalCounter= amount =>{
    return{
        type:FINAL_COUNTER,
        amount
    };
};


// We export the actions so that we can use in the app
export { incrementCounter, decrementCounter , multiplyCounter, divideCounter, remainderCounter,finalCounter};
