const inc_counter = "countinc";
const dec_counter = "countdec";
const inc_oddcounter = "countoddinc";
const inc_evencounter = "counteveninc";

const initialState = {
    count : 0
}

const counter = (state = initialState, action) => {
    switch (action.type) {
        case inc_counter:
            return {
                count : state.count + action.amount
            };
        case dec_counter:
            return {
                count: state.count - action.amount
            };
        case inc_oddcounter:
            return {
                count : state.count + action.amount + 1
            };
        case inc_evencounter:
            return {
                count : state.count + action.amount + 2
            };
        default:
            return state;
    }
}

export default counter; 