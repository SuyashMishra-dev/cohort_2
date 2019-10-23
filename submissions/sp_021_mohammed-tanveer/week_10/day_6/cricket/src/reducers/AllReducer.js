import {combineReducers} from 'redux';
import PlayerAddReducer from './PlayerAddReducer';

const AllReducer = combineReducers({
    players: PlayerAddReducer
})

export default AllReducer;