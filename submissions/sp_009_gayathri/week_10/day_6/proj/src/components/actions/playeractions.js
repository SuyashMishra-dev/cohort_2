import { ADD_PLAYER ,ADD_TOTAL}from './action-types/player-actions.js'

//add cart action
export const addPlayer= (id)=>{
    return{
        type: ADD_PLAYER,
        id
    }
}

export const addTotal=(id)=>{
    return{
        type: ADD_TOTAL,
        id
    }

}
