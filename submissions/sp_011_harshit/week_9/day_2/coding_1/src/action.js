const INC_COUNTER = "INC_COUNTER";

const DEC_COUNTER = "DEC_COUNTER";

const CONDTION = "CONDITION"

const MULTIPLY = "MULTPLY"

const DIVIDE = "DIVIDE"

const REMAINDER  = "REMAINDER"
const incrementCounter = amount =>{
return{
    type:INC_COUNTER,
    amount
};
};


const decrementCounter = amount =>{
    return{
        type:DEC_COUNTER,
        amount
    };
    };

    const increment_1 = amount =>{
        return{
            type:CONDTION,
            amount
        }
    }

    const multiply = amount =>{
        return{
            type:MULTIPLY,
            amount
        };
    };
    
    const divide = amount =>{
        return{
            type:DIVIDE,
            amount
        };
    };

    const remainder = amount =>{
        return{
            type:REMAINDER,
            amount
        }
    }

export {incrementCounter,decrementCounter,increment_1,divide,multiply,remainder}