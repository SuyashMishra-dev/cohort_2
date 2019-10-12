const INC_COUNTER = "INC_COUNTER";
const DEC_COUNTER = "DEC_COUNTER";

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
}
export { incrementCounter, decrementCounter};
