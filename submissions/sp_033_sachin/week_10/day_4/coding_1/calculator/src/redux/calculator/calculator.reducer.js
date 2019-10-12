import calculatorActionTypes from './calculator.types';
import {evaluate, deleteLast} from './calculator.utils';

const INITIAL_STATE = {
    history : [],
    operation : '',
    answer : ''
}

const calculatorReducer = (state=INITIAL_STATE, action) => {
    //write util for . validation in add operation
    switch (action.type) {
        case calculatorActionTypes.ADD_OPERATION :

            return {
                ...state,
                operation : state.operation + action.payload
            }            
        case calculatorActionTypes.CALCULATE :             
            return {
                ...state,
                answer : evaluate(state.operation)
            }
        case calculatorActionTypes.GET_ANSWER : 
            return {
                ...state,
                operation : ''+state.answer,
                answer : '',
                history : [...state.history, `${state.operation}=${state.answer}`],
            }
        case calculatorActionTypes.DELETE_LAST :
            return {
                ...state,
                operation : deleteLast(state.operation)
            }
        default:
            return state
    }
}

export default calculatorReducer;