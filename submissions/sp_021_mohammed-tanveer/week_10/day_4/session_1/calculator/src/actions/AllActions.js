export const firstNumberAdded = firstNumberAdded => {
    // console.log(firstNumberAdded)
    return {
        type: "FIRST_NUMBER_ADDED",
        firstNumberAdded
    }
}

export const operatorAdded = operator => {
    console.log(operator)
    return{
        type: "OPERATOR_SELECTED",
        operator
    }
}