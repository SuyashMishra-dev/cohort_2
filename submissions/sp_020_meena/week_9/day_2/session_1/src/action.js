const INC_COUNTER = "INC_COUNTER";

const DEC_COUNTER = "DEC_COUNTER";

const EVEN_COUNTER = "EVEN_COUNTER";

const ODD_COUNTER = "ODD_COUNTER";

const incrementCounter = amount => {
    return{
        type:INC_COUNTER,
        amount
    };
};
const decrementCounter = amount => {
    return{
        type:DEC_COUNTER,
        amount
    };
};
const incrementEven = amount =>{
    return{
        type:EVEN_COUNTER,
        amount
    };
};
const incrementOdd = amount =>{
    return{
        type:ODD_COUNTER,
        amount
    };
};

export{incrementCounter,decrementCounter,incrementEven,incrementOdd};