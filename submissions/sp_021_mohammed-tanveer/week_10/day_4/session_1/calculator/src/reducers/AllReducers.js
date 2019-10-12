import {combineReducers} from 'redux';
import FirstNumberReducer from './FirstNumberReducer';

const AllReducers = combineReducers({
    firstNumberAdded: FirstNumberReducer
})

export default AllReducers