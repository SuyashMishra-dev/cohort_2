const CREATEPLAYER = 'CREATEPLAYER';

const initialInfoState = {
    playersList: []
}

const reducer = (state = initialInfoState, action) => {
    console.log(state.playersList)
    switch(action.type) {
        case CREATEPLAYER:
            const player =  {
                name: action.info.name,
                country: action.info.country,
                t20Score: action.info.t20Score,
                odiScore: action.info.odiScore,
                testScore: action.info.testScore
            };
            return {
                playersList: [...state.playersList, player]
            };
        default:
            return state;
    }
}

export default reducer;