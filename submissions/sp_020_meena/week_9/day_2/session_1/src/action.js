const INC_COUNTER = "INC_COUNTER";

const DEC_COUNTER = "DEC_COUNTER";

const EVEN_COUNTER = "EVEN_COUNTER";

const ODD_COUNTER = "ODD_COUNTER";

const MULTIPLY_BY_X = "MULTIPLY_BY_X";

const DIVIDE_BY_X = "DIVIDE_BY_X";

const incrementCounter = (amount) => {
    return{
        type:INC_COUNTER,
        amount
    };
};
const decrementCounter = (amount) => {
    return{
        type:DEC_COUNTER,
        amount
    };
};

    
const conditionalIncrement = (amount) => {
    if(amount %2 ===0){
        return{
            type:EVEN_COUNTER,
            amount
        };
    }
    else{
        return{
            type:ODD_COUNTER,
            amount
        }
    }
};   
const multiplyByX = (amount) =>{
    return{
        type:MULTIPLY_BY_X,
        amount
    };
};

const divideByX = (amount) => {
    return{
        type:DIVIDE_BY_X,
        amount
    };
} 

export{incrementCounter,decrementCounter, conditionalIncrement,multiplyByX,divideByX};