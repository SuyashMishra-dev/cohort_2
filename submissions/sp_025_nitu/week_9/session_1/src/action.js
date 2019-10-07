const INC_COUNTER = "INC_COUNTER"; 
const DEC_COUNTER = "DEC_COUNTER";
const INC_ODD="INC_ODD";
const INC_EVEN="INC_EVEN";
const INC_DIV="INC_DIV";
const INC_MUL="INC_MUL";


const incrementODD = amount => {
    return{
        type:INC_ODD,
        amount
    };
};
const incrementMUL = amount => {
    return{
        type:INC_MUL,
        amount
    };
};
const incrementDIV = amount => {
    return{
        type:INC_DIV,
        amount
    };
};
const incrementEVEN = amount => {
    return{
        type:INC_EVEN,
        amount
    };
};
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

// We export the actions so that we can use in the app
export { incrementCounter, decrementCounter , incrementODD,incrementEVEN,incrementDIV ,incrementMUL };
