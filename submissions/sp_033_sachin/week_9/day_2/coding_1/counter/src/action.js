import { types } from './types'

export const incrByx = x => ({
    type : types.INCR_X,
    payload : parseInt(x) 
})

export const decrByx = x => ({
    type : types.DECR_X,
    payload : parseInt(x) 
})

export const incrByx1 = x => ({
    type : types.INCR_X1,
    payload : parseInt(x) 
})

export const incrByx2 = x => ({
    type : types.INCR_X2,
    payload : parseInt(x) 
})

export const mulByx = x => ({
    type : types.MUL_X,
    payload : parseInt(x) 
})

export const divByx = x => ({
    type : types.DIV_X,
    payload : parseInt(x) 
})

export const remByx = x => ({
    type : types.REM_X,
    payload : parseInt(x) 
})