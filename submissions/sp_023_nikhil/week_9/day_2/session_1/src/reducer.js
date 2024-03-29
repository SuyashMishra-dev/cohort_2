const INC_COUNTER = "INC_COUNTER";

const DEC_COUNTER = "DEC_COUNTER";

const MULTIPLY_COUNTER = "MULTIPLY_COUNTER"

const DIVIDE_COUNTER = "DIVIDE_COUNTER"

const COND_INC = "COND_INC"

const initialState = {
    count: 0
}

const counter = (state = initialState, action) => {
    switch (action.type) {
        case INC_COUNTER:
            return {
                count: state.count + action.amount
            }
        case COND_INC:
            if (state.count % 2 !== 0) {
                return {
                    count: state.count + 1
                }
            }
            else if (state.count % 2 === 0) {
                return {
                    count: state.count + 2
                }
            }
            break;
        case DEC_COUNTER:
            return {
                count: state.count - action.amount
            }
        case MULTIPLY_COUNTER:
            return {
                count: state.count * action.amount
            }
        case DIVIDE_COUNTER:
            if (state.count % action.amount === 0) {
                return {
                    count: state.count / action.amount
                }
            }
            else if (state.count % action.amount !== 0) {
                return {
                    count: state.count % action.amount
                }
            }
            break;
        default:
            return state
    }
}

export default counter;