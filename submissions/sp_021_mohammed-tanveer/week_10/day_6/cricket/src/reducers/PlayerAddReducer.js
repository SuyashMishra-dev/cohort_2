
let playersStorage = JSON.parse(localStorage.getItem('players'));


export default (state = null, action) => {
    switch(action.type){
        case "PLAYER_ADDED":
            return action.playerData
            break;
    }
    return state;
}