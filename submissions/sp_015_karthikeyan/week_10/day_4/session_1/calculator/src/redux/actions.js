const ADD = 'ADD';
const SUBSTRACT = 'SUBSTRACT';
const MULTIPLY = 'MULTIPLY';
const DIVIDE = 'DIVIDE';
const REMAINDER = 'REMAINDER';

const CLEAR = 'CLEAR';

const add = (operandOne, operandTwo) => {
    return {
        type: ADD,
        operandOne,
        operandTwo
    }
}

const substract = (operandOne, operandTwo) => {
    return {
        type: SUBSTRACT,
        operandOne,
        operandTwo
    }
}

const multiply = (operandOne, operandTwo) => {
    return {
        type: MULTIPLY,
        operandOne,
        operandTwo
    }
}

const divide = (operandOne, operandTwo) => {
    return {
        type: DIVIDE,
        operandOne,
        operandTwo
    }
}

const remainder = (operandOne, operandTwo) => {
    return {
        type: REMAINDER,
        operandOne,
        operandTwo
    }
}

const clear = () => {
    return {
        type: CLEAR
    }
}

export { ADD, SUBSTRACT, MULTIPLY, DIVIDE, REMAINDER, CLEAR, add, substract, multiply, divide, remainder, clear }