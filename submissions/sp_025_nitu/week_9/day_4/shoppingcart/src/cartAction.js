import {CART_ADD} from './action_type.js'

export const addCard =(id) => {
    return {
        type:CART_ADD,
        id
    }
}
