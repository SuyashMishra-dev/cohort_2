const INC_COUNTER_BY_X = 'INC_COUNTER_BY_X';
const DEC_COUNTER_BY_X = 'DEC_COUNTER_BY_X';
const MUL_COUNTER_BY_X = 'MUL_COUNTER_BY_X';
const DIV_COUNTER_BY_X = 'DIV_COUNTER_BY_X';
const REM_COUNTER_BY_X = 'REM_COUNTER_BY_X';
const INC_IF_EVEN = 'INC_IF_EVEN';
const INC_IF_ODD = 'INC_IF_ODD';

const incrementCountByX = (amount) => {
    return {
        type: INC_COUNTER_BY_X,
        amount
    }
}

const decrementCountByX = (amount) => {
    return {
        type: DEC_COUNTER_BY_X,
        amount
    }
}

const conditionalInc = (amount) => {
    if(amount % 2 == 0) {
        return {
            type: INC_IF_EVEN,
            amount
        }
    }
    else return {
        type: INC_IF_ODD,
        amount
    }
}

const multiply = (amount) => {
    return {
        type: MUL_COUNTER_BY_X,
        amount
    }
}

const divide = (amount) => {
    return {
        type: DIV_COUNTER_BY_X,
        amount
    }
}

const remainder = (amount) => {
    return {
        type: REM_COUNTER_BY_X,
        amount
    }
}

export { incrementCountByX, decrementCountByX, conditionalInc, multiply, divide, remainder };