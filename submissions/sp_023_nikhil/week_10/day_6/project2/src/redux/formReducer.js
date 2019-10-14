const FORM_INPUT = "FORM_INPUT"

const initialState = {
    data: []
}

const details = (state = initialState, action) => {
    switch (action.type) {
        case FORM_INPUT:
            console.log(state)
            const obj = {
                name: action.details.name,
                country: action.details.country,
                t20: action.details.t20,
                odi: action.details.odi,
                test: action.details.test
            }
            window.localStorage.setItem('Player', JSON.stringify(obj))
            return {
                data: [...state.data, obj]
            }
        default:
            return state
    }
}


export default details