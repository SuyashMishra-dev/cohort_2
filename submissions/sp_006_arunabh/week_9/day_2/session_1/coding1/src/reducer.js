const INC_COUNTER = "INC_COUNTER";

const DEC_COUNTER = "DEC_COUNTER";

const ODD_COUNTER = "ODD_COUNTER";

const EVEN_COUNTER = "EVEN_COUNTER";

const MUL_COUNTER = "MUL_COUNTER";

const DIV_COUNTER = "DIV_COUNTER";

const initialState = {
    count: 0
};

const counter = (state = initialState, action) => {
    switch (action.type) {
        case INC_COUNTER:
            return {
                count: state.count + action.value
            };
        case DEC_COUNTER: 
            return {
                count: state.count - action.value
            };
        case ODD_COUNTER:
            {
                if(action.value % 2 === 1){
                    return {
                        count: state.count + 1
                    }
                }
                else {
                    return {
                        count: state.count
                    }
                }
            };
        case EVEN_COUNTER:
            {
                if(action.value % 2 === 0){
                    return {
                        count: state.count + 2
                    };
                }
                else {
                    return {
                        count: state.count
                    };
                }
            };
        case MUL_COUNTER:
            return {
                count: state.count * action.value
            };
        case DIV_COUNTER:
            return {
                count: state.count / action.value
            };
        default:
            return state;
    }
};

export default counter;