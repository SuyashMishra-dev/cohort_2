const INC_COUNTER = "INC_COUNTER";
const DEC_COUNTER = "DEC_COUNTER";
const MUL_COUNTER = "MUL_COUNTER";
const DIV_COUNTER = "DIV_COUNTER";
const REM_COUNTER = "REM_COUNTER";
const ODDEVEN_COUNTER = "ODD_COUNTER";

const IncrementCounter = (amount) => {
    return {
        type : INC_COUNTER,
        amount
    }
}

const DecrementCounter = (amount) => {
    return {
        type:DEC_COUNTER,
        amount
    }
}

const MultiplyCounter = (amount) => {
    return {
        type: MUL_COUNTER,
        amount
    }
} 

const DivideCounter = (amount) => {
    return {
        type : DIV_COUNTER,
        amount
    }
}

const ReminderCounter = (amount) => {
    return {
        type : REM_COUNTER,
        amount
    }
}

const OddEvenCounter = (amount) => {
    return {
        type : ODDEVEN_COUNTER,
        amount
    }
}

export {IncrementCounter, DecrementCounter, MultiplyCounter, DivideCounter, ReminderCounter, OddEvenCounter};