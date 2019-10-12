// import React from 'react'
const INC_COUNTER = "INC_COUNTER"
const DEC_COUNTER = "DEC_COUNTER"
const INC_EVEN_ODD = "INC_EVEN_ODD"
const MULTIPLY = "MULTIPLY"
const DIVIDE = "DIVIDE"
const REMAINDER = "REMAINDER"

const incrementcounter = (amount)=>{
    return {
        type:INC_COUNTER,
        amount
    }
}
const decrementcounter = (amount)=>{
    return{
        type:DEC_COUNTER,
        amount
    }
}
const incrementEvenOdd = (amount)=>{
    return{
        type :INC_EVEN_ODD,
        amount
    }
}
const multiplyByX = (amount)=>{
    return {
        type:MULTIPLY,
        amount

    }
}
const dividedByX = (amount)=>{
    return {
        type:DIVIDE,
        amount

    }
}
const remainderX = (amount)=>{
    return {
        type:REMAINDER,
        amount

    }
}
export {incrementcounter,decrementcounter,incrementEvenOdd, multiplyByX,dividedByX,remainderX }
