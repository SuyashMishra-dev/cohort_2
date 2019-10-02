const initialState = {
    count: 0
}
const INC_COUNTER = "INC_COUNTER"; // This is the type of the action
const DEC_COUNTER = "DEC_COUNTER";
const INC_COUNTEREVEN = "INC_COUNTEREVEN";
const INC_COUNTERODD = "INC_COUNTERODD";
const INC_COUNTERMUL = "INC_COUNTERMUL";
const INC_COUNTERDIV = "INC_COUNTERDIV";

const counter = (state = initialState, action) => {
    switch (action.type) {
        case INC_COUNTER:
            return {
                count: state.count + action.amount
            }
        case DEC_COUNTER:
            return {
                count: state.count - action.amount
            }
        case INC_COUNTEREVEN:
            if (Number(state.count) % 2 == 0) {
                return {
                    count: state.count + 2
                }
            }
            else
            {
                return {
                    count: state.count
                } 
            }
        case INC_COUNTERODD:
                if (Number(state.count) % 2 == 1)
                {
                    return {
                        count: state.count + 1
                    }
                }
                else
                { 
                    return {
                        count: state.count
                    } 
                } 
        case INC_COUNTERMUL:
            return {
                count: state.count * action.amount
            }
        case INC_COUNTERDIV:
            if (action.amount == 0) {
                return {
                    count: "Not Possible"
                }
            }
            else {
                return {
                    count: state.count / action.amount
                }
            }
        default:
            return state
    }
}

export default counter; 