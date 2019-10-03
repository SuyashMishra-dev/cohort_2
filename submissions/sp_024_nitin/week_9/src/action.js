const inc_counter = "countinc";             //this is a type of action.
const dec_counter = "countdec";
const inc_oddevencounter = "countoddeveninc";
const mul_counter = "countmul";
const div_counter = "countdiv";
const rem_counter = "countrem";

const countincrementer = (amount) => {
    return {
        type: inc_counter,
        amount 
    };
};

const countdecrementer = (amount) => {
    return {
        type: dec_counter,
        amount
    };
};

const countoddevenincrementer = (amount) => {
    return {
        type: inc_oddevencounter,
        amount
    };
};

const countmulincrementer = (amount) => {
    return {
        type: mul_counter,
        amount
    };
};

const countdivincrementer = (amount) => {
    return {
        type: div_counter,
        amount
    };
};
const countremainder = (amount) => {
    return {
        type: rem_counter,
        amount
    };
};
export {countincrementer, countdecrementer, countoddevenincrementer, countmulincrementer, countdivincrementer, countremainder};