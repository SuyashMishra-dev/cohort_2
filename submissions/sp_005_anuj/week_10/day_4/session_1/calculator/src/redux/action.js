const ADD = "ADD";
const SUBTRACT = "SUBTRACT";
const MULTIPLY = "MULTIPLY";
const DIVIDE = "DIVIDE";

const additionSum = amount => {
    return {
        type : ADD,
        amount
    };
};

const subtractMinus = amount => {
    return {
        type : SUBTRACT,
        amount
    };
};

const multiplyMul = amount => {
    return {
        type : MULTIPLY,
        amount
    };
};

const divideDiv = amount => {
    return {
        type : DIVIDE,
        amount 
    };
};
export {additionSum,subtractMinus,multiplyMul,divideDiv};