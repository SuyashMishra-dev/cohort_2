import { combineReducers } from "redux";
import playersReducer from "./players/players.reducer";
import countriesReducer from "./countries/countries.reducer";
import numbersReducer from "./numbers-api/numbers.reducer";

export default combineReducers({
    players : playersReducer,
    countries : countriesReducer,
    numbersApi : numbersReducer  
})