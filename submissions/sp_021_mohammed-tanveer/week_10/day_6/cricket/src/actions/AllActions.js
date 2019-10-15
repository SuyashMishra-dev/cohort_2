export const addPlayerAction = playerData => {
    // console.log(playerData)
    return {
        type: "PLAYER_ADDED",
        playerData
    }
}