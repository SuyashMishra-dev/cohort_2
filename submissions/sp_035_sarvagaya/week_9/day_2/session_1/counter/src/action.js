const INC_COUNTER = "INC_COUNTER";
const DEC_COUNTER = "DEC_COUNTER";
const INC_ODD = "INC_ODD";
const INC_EVEN = "INC_EVEN";
const MULT_COUNTER = "MULT_COUNTER";
const DIV_COUNTER = "DIV_COUNTER";

const incrementCounter = amount =>
{
    return {
        type: INC_COUNTER,
        amount
    };
};

const decrementCounter = amount =>
{
    return{
        type: DEC_COUNTER,
        amount
    };
};

const incrementOdd = amount => 
{
    return{
        type: INC_ODD,
        amount
    };
};

const incrementEven = amount =>
{
    return{
        type: INC_EVEN,
        amount
    };
};

const multCounter = amount =>
{
    return{
        type: MULT_COUNTER,
        amount
    };
};

const divCounter = amount =>
{
    return{
        type: DIV_COUNTER,
        amount
    }
}

export {incrementCounter , decrementCounter , incrementOdd , incrementEven , multCounter , divCounter};