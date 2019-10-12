const ADD_PLAYER = 'ADD_PLAYER';
const FILTER = 'FILTER';
const SORT = 'SORT';

const addPlayer = (data) => {
    return {
        type: ADD_PLAYER,
        data
    }
}

const filterByCountry = (country) => {
    return {
        type: FILTER,
        country
    }
}

const sort = (sortType, sortOrder) => {
    return {
        type: SORT,
        sortType,
        sortOrder
    }
}

export { ADD_PLAYER, addPlayer, FILTER, filterByCountry, SORT, sort };