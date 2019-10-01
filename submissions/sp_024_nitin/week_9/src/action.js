const inc_counter = "countinc";             //this is a type of action.
const dec_counter = "countdec";
const inc_oddcounter = "counteveninc";
const inc_evencounter = "countoddinc";

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

const countoddincrementer = (amount) => {
    if(amount % 2 != 0) {
    return {
        type: inc_oddcounter,
        amount
    };
  }
};

const countevenincrementer = (amount) => {
    if(amount % 2 == 0) {
    return {
        type: inc_evencounter,
        amount
    };
  }
};

export {countincrementer, countdecrementer, countoddincrementer, countevenincrementer};