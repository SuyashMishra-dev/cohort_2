const INC_COUNTER = "INC_COUNTER";

const DEC_COUNTER = "DEC_COUNTER";

const ODD_COUNTER = "ODD_COUNTER";

const EVEN_COUNTER = "EVEN_COUNTER";

const MUL_COUNTER = "MUL_COUNTER";

const DIV_COUNTER = "DIV_COUNTER";

const incrementCounter = value => {
    return {
        type: INC_COUNTER,
        value
    };
};

const decrementCounter = value => {
    return {
        type: DEC_COUNTER,
        value
    };
};

const oddCounter = value => {
    return {
        type: ODD_COUNTER,
        value
    };
};

const evenCounter = value => {
    return {
        type: EVEN_COUNTER,
        value
    };
};

const multiplyCounter = value => {
    return {
        type: MUL_COUNTER,
        value
    }
}

const divideCounter = value => {
    return {
        type: DIV_COUNTER,
        value
    }
}

export { incrementCounter, decrementCounter, oddCounter, evenCounter, multiplyCounter, divideCounter };