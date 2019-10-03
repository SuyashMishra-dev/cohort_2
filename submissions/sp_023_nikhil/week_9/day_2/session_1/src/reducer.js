const INC_COUNTER = "INC_COUNTER";

const DEC_COUNTER = "DEC_COUNTER";

const MULTIPLY_COUNTER = "MULTIPLY_COUNTER"

const DIVIDE_COUNTER = "DIVIDE_COUNTER"

const initialState = {
    count: Number(0)
}

const counter = (state = initialState, action) => {
    switch (action.type) {
        case INC_COUNTER:
            case state.count % 2 !== 0: 
                return {
                    count: state.count + action.amount + 1
                }
            case state.count % 2 === 0 :
                return {
                    count: state.count + action.amount + 2
                }
        case DEC_COUNTER:
            return {
                count: state.count - action.amount
            }
        case MULTIPLY_COUNTER:
            return {
                count: state.count * action.amount
            }
        case DIVIDE_COUNTER:
            case state.count % action.amount === 0:
                return {
                    count: state.coount / action.amount
                }
            case state.count % action.amount !== 0:
                return {
                    count: state.count % action.amount
                }
        default:
            return state
    }
}

export default counter;