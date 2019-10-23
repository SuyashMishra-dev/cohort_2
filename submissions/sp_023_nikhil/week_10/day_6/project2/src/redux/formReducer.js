const FORM_INPUT = "FORM_INPUT"

const initialState = {
    data: []
}

let num = 0
const details = (state = initialState, action) => {
    switch (action.type) {
        case FORM_INPUT:
            console.log(state)
            const obj = {
                id: num++,
                name: action.details.name,
                country: action.details.country,
                t20: action.details.t20,
                odi: action.details.odi,
                test: action.details.test
            }
            return {
                set: window.localStorage.setItem('player', JSON.stringify(state.data)),
                data: [...state.data, obj]
            }
            default:
                return state
            }
        }


export default details