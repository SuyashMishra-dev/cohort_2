const INC_COUNTER = "INC_COUNTER";

const DEC_COUNTER = "DEC_COUNTER";

const MULTIPLY_COUNTER = "MULTIPLY_COUNTER"

const DIVIDE_COUNTER = "DIVIDE_COUNTER"

const COND_INC = "COND_INC"

const incrementCounter = (amount) => {
    return {
        type : INC_COUNTER,
        amount
    }
}

const conditionalIncrement = (amount) => {
    return{
        type : COND_INC,
        amount
    }
}

const decrementCounter = (amount) => {
    return{
        type: DEC_COUNTER,
        amount
    }
}

const multiplyCounter = (amount) => {
    return{
        type: MULTIPLY_COUNTER,
        amount
    }
}

const divideCounter = (amount) => {
    return{
        type: DIVIDE_COUNTER,
        amount
    }
}

export { incrementCounter, decrementCounter, multiplyCounter, divideCounter, conditionalIncrement }