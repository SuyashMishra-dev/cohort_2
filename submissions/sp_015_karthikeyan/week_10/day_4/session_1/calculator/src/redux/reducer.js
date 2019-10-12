import { ADD, SUBSTRACT, MULTIPLY, DIVIDE, REMAINDER, CLEAR } from './actions';

const initStore = {
    operandOne: 0,
    operandTwo: 0,
    answer: 0,
    history: []
}

const reducer = (state = initStore, action) => {
    console.log('reducer is called');
    switch (action.type) {
        case ADD: {
            console.log('added');
            console.log(action)
            return { ...state, 
                answer: Number(action.operandOne) + Number(action.operandTwo), 
                history: [...state.history, `${action.operandOne} + ${action.operandTwo} = ${Number(action.operandOne) + Number(action.operandTwo)}`] }
        }
        case SUBSTRACT: {
            console.log('substracted')
            return { ...state, 
                answer: Number(action.operandOne) - Number(action.operandTwo), 
                history: [...state.history, `${action.operandOne} - ${action.operandTwo} = ${Number(action.operandOne) - Number(action.operandTwo)}`]
             }
        }
        case MULTIPLY: {
            console.log('multiplied')
            return { ...state, 
                answer: Number(action.operandOne) * Number(action.operandTwo), 
                history: [...state.history, `${action.operandOne} * ${action.operandTwo} = ${Number(action.operandOne) * Number(action.operandTwo)}`] }
        }
        case DIVIDE: {
            console.log('divided');
            return { ...state, 
                answer: Number(action.operandOne) / Number(action.operandTwo), 
                history: [...state.history, `${action.operandOne} / ${action.operandTwo} = ${Number(action.operandOne) / Number(action.operandTwo)}`] }
        }
        case REMAINDER: {
            console.log('remainder');
            return { ...state, answer: Number(action.operandOne) % Number(action.operandTwo), 
                history: [...state.history, `${action.operandOne} % ${action.operandTwo} = ${Number(action.operandOne) % Number(action.operandTwo)}`] }
        }
        case CLEAR: {
            return { ...state, answer: 0 }
        }
        default: return state;
    }
}

export default reducer;