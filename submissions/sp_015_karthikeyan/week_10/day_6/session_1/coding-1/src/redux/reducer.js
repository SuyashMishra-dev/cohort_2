import { ADD_PLAYER, FILTER, SORT } from './actions';

const ls = window.localStorage;
let initState = {}

if(ls.getItem('player-data') != null) {
    let temp = ls.getItem('player-data');
    let tempObj = JSON.parse(temp);
    initState = {
        playerDetails: tempObj.playerDetails,
        currentItems: tempObj.playerDetails,
        sortFlag: false,
        perPage: 5
    }
}
else {
    initState = {
        playerDetails: [],
        currentItems: [],
        sortFlag: false,
        perPage: 5
    };
}


const reducer = (state = initState, action) => {
    console.log('reducer is called');
    console.log(state);
    switch (action.type) {
        case ADD_PLAYER: {
            let temp = { playerDetails: [...state.playerDetails, action.data] }
            let tempString = JSON.stringify(temp);
            ls.setItem('player-data', tempString);
            return { ...state, playerDetails: [...state.playerDetails, action.data], currentItems: [...state.playerDetails, action.data] };
        }
        case FILTER: {
            let temp = state.playerDetails.filter(ele => ele.country === action.country);
            if(action.country === '') {
                return { ...state, filter: action.country, currentItems: state.playerDetails }
            }
            return { ...state, filter: action.country, currentItems: temp };
        }
        case SORT: {
            console.log(state);
            if(action.sortOrder === 'Ascending') {
                let temp;
                if(action.sortType === 't20Score') {
                    console.log('as t20')
                    temp = state.currentItems.sort((a,b) => Number(a.t20Score) - Number(b.t20Score));
                    console.log(temp);
                }
                else if(action.sortType === 'odiScore') {
                    console.log('as t20')
                    temp = state.currentItems.sort((a,b) => Number(a.odiScore) - Number(b.odiScore));
                    console.log(temp);
                }
                else if(action.sortType === 'testScore') {
                    console.log('as t20')
                    temp = state.currentItems.sort((a,b) => Number(a.testScore) - Number(b.testScore));
                    console.log(temp);
                }

                return { ...state, currentItems: temp, flag: !state.flag }
            }
            else if(action.sortOrder === 'Descending') {
                let temp;
                if(action.sortType === 't20Score') {
                    console.log('des t20')
                    temp = state.currentItems.sort((a,b) => Number(b.t20Score) - Number(a.t20Score));
                    console.log(temp);
                }
                else if(action.sortType === 'odiScore') {
                    console.log('as t20')
                    temp = state.currentItems.sort((a,b) => Number(b.odiScore) - Number(a.odiScore));
                    console.log(temp);
                }
                else if(action.sortType === 'testScore') {
                    console.log('as t20')
                    temp = state.currentItems.sort((a,b) => Number(b.testScore) - Number(a.testScore));
                    console.log(temp);
                }
                return { ...state, currentItems: temp, flag: !state.flag }
            }
        }
        // eslint-disable-next-line no-fallthrough
        default: return state;
    }
}

export default reducer;