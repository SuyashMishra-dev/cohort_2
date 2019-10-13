const FILTER  = "FILTER";
const SORT = "SORT";
const filterByCountry = (country) => {
    return FILTER,
    country
}
const sort = (sortType, sortOrder) => {
    return{
        type : sort,
        sortType,
        sortOrder
    }
}
export {FILTER, filterByCountry, SORT, sort}