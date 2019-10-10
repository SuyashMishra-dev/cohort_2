const INC_COUNTER = "INC_COUNTER";
const DEC_COUNTER = "DEC_COUNTER";
const INC_COUNTERODD = "INC_COUNTERODD";
const INC_COUNTEREVEN = "INC_COUNTEREVEN";
const MULTIPLY = "MULTIPLY";
const DIVIDE = "DIVIDE";
const REMEDER = "REMENDER";
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
const incrementCounterEven = amount => {
    return {
        type: INC_COUNTEREVEN,
        amount
    };
};
const incrementCounterOdd = amount => {
    return {
        type: INC_COUNTERODD,
        amount
    };

};
const multiply = amount => {
    return {
        type : MULTIPLY,
        amount
    };
}
const divide = amount => {
    return {
        type : DIVIDE,
        amount
    };
}
const remender = amount => {
    return {
        type : REMEDER,
        amount
    };
}
export { incrementCounter, decrementCounter, incrementCounterEven, incrementCounterOdd, multiply, divide, remender};
