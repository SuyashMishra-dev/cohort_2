const INC_COUNTER_BY_X = 'INC_COUNTER_BY_X';
const DEC_COUNTER_BY_X = 'DEC_COUNTER_BY_X';
const MUL_COUNTER_BY_X = 'MUL_COUNTER_BY_X';
const DIV_COUNTER_BY_X = 'DIV_COUNTER_BY_X';
const REM_COUNTER_BY_X = 'REM_COUNTER_BY_X';
const INC_IF_EVEN = 'INC_IF_EVEN';
const INC_IF_ODD = 'INC_IF_ODD';

const initState = {count: 1};

const count = (state = initState, inp) => {
    switch(inp.type) {
        case INC_COUNTER_BY_X: {
            return {count: state.count + inp.amount}
        }
        case DEC_COUNTER_BY_X: {
            return {count: state.count - inp.amount}
        }
        case INC_IF_ODD: {
            return { count: state.count + inp.amount + 1}
        }
        case INC_IF_EVEN: {
            return { count: state.count + inp.amount + 2}
        }
        case MUL_COUNTER_BY_X: {
            return { count: state.count * inp.amount}
        }
        case DIV_COUNTER_BY_X: {
            return { count: state.count / inp.amount}
        }
        case REM_COUNTER_BY_X: {
            return { count: state.count % inp.amount}
        }
        default: return state;
    }
}

export default count;