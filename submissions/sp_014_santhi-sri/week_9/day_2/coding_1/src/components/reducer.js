import React from 'react'
const INC_COUNTER = "INC_COUNTER"
const DEC_COUNTER = "DEC_COUNTER"
const INC_EVEN_ODD = "INC_EVEN_ODD"
const MULTIPLY = "MULTIPLY"
const DIVIDE = "DIVIDE"
const REMAINDER = "REMAINDER"

const initialState = {
    count: 0
}

const counter = (state = initialState, action) => {
    switch (action.type) {
        case INC_COUNTER:
            return {
                count: state.count + action.amount
            }
        case DEC_COUNTER:
            return {
                count: state.count - action.amount
            }
        case INC_EVEN_ODD:
            if (action.amount % 2 == 0) {
                return {
                    count: state.count + action.amount + 2
                }
            }
            if (action.amount % 2 == 1) {
                return {
                    count: state.count + action.amount + 1
                }
            }
        case MULTIPLY:
            return {
                count: state.count * action.amount
            }
        case DIVIDE:
            return {
                count: state.count / action.amount
            }
        case REMAINDER:
            return {
                count: state.count % action.amount
            }

        default:
            return state
    }
}
export default counter