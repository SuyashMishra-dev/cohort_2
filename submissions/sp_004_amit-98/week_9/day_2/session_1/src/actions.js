const INC_COUNTER = "INC_COUNTER"; // This is the type of the action
const DEC_COUNTER = "DEC_COUNTER";
const INC_COUNTEREVEN = "INC_COUNTEREVEN";
const INC_COUNTERODD = "INC_COUNTERODD";
const INC_COUNTERMUL = "INC_COUNTERMUL";
const INC_COUNTERDIV = "INC_COUNTERDIV";

const incrementCounterX = (amount) => {
    return {
        type: INC_COUNTER,
        amount
    }
}
const decrementCounterX = (amount) => {
    return {
        type: DEC_COUNTER,
        amount
    }
}
const incrementbyXodd = (amount) => {
    return {
        type: INC_COUNTERODD,
        amount
    }
}
const incrementbyXeven = (amount) => {
    return {
        type: INC_COUNTEREVEN,
        amount
    }
}
const incrementbyXmul = (amount) => {
    return {
        type: INC_COUNTERMUL,
        amount
    }
}
const incrementbyXdiv = (amount) => {
    return {
        type: INC_COUNTERDIV,
        amount
    }
}
export { incrementCounterX, decrementCounterX, incrementbyXodd, incrementbyXeven, incrementbyXmul, incrementbyXdiv };