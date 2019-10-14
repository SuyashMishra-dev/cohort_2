import countriesActionType from "./countries.types";

const INITIAL_STATE = {
    total : 8,
    countries : ['India','Australia','England','New Zealand','West Indies','Sri Lanka','Ireland','South Africa']
}

const countriesReducer = (state=INITIAL_STATE, action) => {

    switch (action.type) {
        case countriesActionType.ADD_COUNTRY:
            return {
                ...state,
                total : state.total + 1,
                countries : [...state.countries, action.payload]
            }            
    
        default:
            return state;
    }
}

export default countriesReducer;