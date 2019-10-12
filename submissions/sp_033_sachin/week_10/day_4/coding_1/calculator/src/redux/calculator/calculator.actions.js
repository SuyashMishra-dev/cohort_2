import calculatorActionTypes from './calculator.types';
const operators = ['+','-','/','='];

export const addOperation = (character) => ({
    type : calculatorActionTypes.ADD_OPERATION,
    payload : character
})

export const calculate = () => {   

    return {

        type : calculatorActionTypes.CALCULATE,       
    }
}

export const getAnswer = () => ({
    type : calculatorActionTypes.GET_ANSWER
})

export const joinAndCalculate = (character) => {
    console.log(character)
    return dispatch => {
        if(operators.includes(character)) {
            
            return dispatch(addOperation(character))
        } else {
            dispatch(addOperation(character))
            
            return dispatch(calculate())           

        }
    }

}

export const deleteLast = () => ({
    type : calculatorActionTypes.DELETE_LAST
})