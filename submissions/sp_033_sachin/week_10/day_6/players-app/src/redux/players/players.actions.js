import playersActionTypes from "./players.types";

let storage = window.localStorage;
if (!storage.players) {
    storage.players = JSON.stringify([])
}
let players = JSON.parse(storage.players);

export const addPlayer = (player) => ({
    type : playersActionTypes.ADD_PLAYER,
    payload : player
})

//invoked when comp is loaded
export const updatePlayersFromStorage = () => ({
    type : playersActionTypes.UPDATE_FROM_STORAGE,
    payload : players
})

//always use this to change state - updates local storage and state
export const addAndStore = (player) => {

    return dispatch => {
        let newPlayers = [...players, player];
        storage.players = JSON.stringify(newPlayers)
        return dispatch(addPlayer(player))
    }

}