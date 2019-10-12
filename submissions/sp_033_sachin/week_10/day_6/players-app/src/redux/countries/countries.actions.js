import countriesActionTypes from "./countries.types";

export const addCountry = (country) => ({
    type : countriesActionTypes.ADD_COUNTRY,
    payload : country
})