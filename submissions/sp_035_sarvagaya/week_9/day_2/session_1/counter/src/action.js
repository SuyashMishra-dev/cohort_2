const INC_COUNTER = "INC_COUNTER";
const DEC_COUNTER = "DEC_COUNTER";
const INC_ODD = "INC_ODD";
const INC_EVEN = "INC_EVEN";
const MULT = "MULT";
const DIVIDE = "DIVIDE";
const REMAINDER = "REMAINDER";

const incrementCounter = amount =>
{
    return{
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

const multiplication = amount =>
{
    return{
        type: MULT,
        amount
    };
};

const division = amount =>
{
    return{
        type: DIVIDE,
        amount
    };
};

const remainder = amount =>
{
    return{
        type: REMAINDER,
        amount
    };
};

export {incrementCounter , decrementCounter , incrementOdd , incrementEven , multiplication , division , remainder}