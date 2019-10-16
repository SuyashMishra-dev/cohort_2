const PLAYER_ADDED = "PLAYER_ADDED"
const FILTER = "FILTER"

const addPlayerAction = data => {
    return {
        type: "PLAYER_ADDED",
        data
    }
}

const filter = country => {
    return {
        type: "FILTER",
        country
    }
}

export {PLAYER_ADDED,FILTER,addPlayerAction,filter}