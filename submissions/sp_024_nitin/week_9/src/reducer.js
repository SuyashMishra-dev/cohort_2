const inc_counter = "countinc";
const dec_counter = "countdec";
const inc_oddevencounter = "countoddeveninc";
const mul_counter = "countmul";
const div_counter = "countdiv";
const rem_counter = "countrem";

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
        case inc_oddevencounter:
          if(state.count % 2 !== 0) 
            return {
                count : state.count + action.amount + 1
            };
          else if(state.count % 2 === 0) 
            return {
                count : state.count + action.amount + 2
            };
        break;
        case mul_counter:
            return {
                count : state.count * action.amount
            };
        case div_counter:
            if (action.amount === 0) {
                return {
                    count: state.count
                }
            }
            else {
                return {
                    count : state.count / action.amount
            };
        }
        case rem_counter: 
            return {
                count : state.count % action.amount
            };
        default:
            return state;
    }
}

export default counter; 