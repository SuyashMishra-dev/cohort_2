const INC_COUNTER = "INC_COUNTER";
const DEC_COUNTER = "DEC_COUNTER";
const MULTIPLYER = "MULTIPLYER";
const DIVIDER = "DIVIDER";
const EVENORODD_INCREMENT ="EVENORODD_INCREMENT";
const REMAINDER ="REMAINDER";

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

  const evenoroddIncrement = amount => {
    return {
      type: EVENORODD_INCREMENT,
      amount
    };
  };

  const multiplyer = amount => {
    return {
      type: MULTIPLYER,
      amount
    };
  };

  const divider = amount => {
    return {
      type: DIVIDER,
      amount
    };
  };

  const remainderCounter = amount => {
    return {
      type: REMAINDER,
      amount
    };
  };
export { incrementCounter, decrementCounter, evenoroddIncrement, multiplyer, divider, remainderCounter };
