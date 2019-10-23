const initState = {
    playerData: []
}

const PlayerAddReducer = (state = initState, action) => {
    switch(action.type){
        case "PLAYER_ADDED":
            let Info= {
                Name : action.data.Name,
                country : action.data.country,
                t20 : action.data.t20,
                odi : action.data.odi,
                test : action.data.test
            }
        
            return {
                data : window.localStorage.setItem(('players'),JSON.stringify(state.playerData)),
                playerData:[...state.playerData, Info]
            }
            case "FILTER" :
                let temp = state.playerData.filter(ele => ele.country === action.country);
                if(action.country === '') {
                    return{
                        ...state, filter: action.country, currentItems: state.playerData
                    }
                }

                return{
                    ...state, filter: action.country, currentItems : temp
                }
                default: 
                return state;
        }
    
}

export default PlayerAddReducer;