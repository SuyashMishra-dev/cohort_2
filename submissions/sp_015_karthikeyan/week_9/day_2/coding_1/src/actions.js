const INC_COUNTER_BY_X = 'INC_COUNTER_BY_X';
const DEC_COUNTER_BY_X = 'DEC_COUNTER_BY_X';
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

export { incrementCountByX, decrementCountByX, conditionalInc };