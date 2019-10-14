import playersActionTypes from "./players.types";


const INITIAL_STATE = {
    total : 0,
    players : []
}

const playersReducer = (state=INITIAL_STATE, action) => {

    switch (action.type) {
        case playersActionTypes.ADD_PLAYER:
            return {
                ...state,
                total : state.total + 1,
                players : [...state.players, action.payload]
            }
        
        case playersActionTypes.UPDATE_FROM_STORAGE : 
            return {
                ...state,
                players : [...action.payload],
                total : action.payload.length
            }
    
        default:
            return state;
    }

}

export default playersReducer;