const INC_COUNTER = "INC_COUNTER";
const DEC_COUNTER = "DEC_COUNTER";
const EVENORODD_INCREMENT = "EVENORODD_INCREMENT";
const MULTIPLYER_COUNTER = " MULTIPLYER_COUNTER";
const DIVIDER_COUNTER = " DIVIDER_COUNTER";
const REMAINDER_COUNTER="REMAINDER_COUNTER";

const incrementCounter = amount => {
  return {
    type: INC_COUNTER,
    amount
  };
};
const decrementCounter = amount =>{
  return {
    type: DEC_COUNTER,
    amount
  };
};
const evenoroddIncrement = amount => {
  return {
    type: EVENORODD_INCREMENT,
    amount
  };
};
const multiplyerCounter = amount => {
  return {
    type: MULTIPLYER_COUNTER,
    amount
  };
};
const dividerCounter = amount => {
  return {
    type: DIVIDER_COUNTER,
    amount
  };
};
const remainderCounter = amount => {
  return {
    type: REMAINDER_COUNTER,
    amount
  };
};
export {incrementCounter,decrementCounter,evenoroddIncrement,multiplyerCounter,dividerCounter,remainderCounter};
