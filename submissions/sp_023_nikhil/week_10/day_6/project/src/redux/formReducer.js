const FORM_INPUT = "FORM_INPUT"

const initialState = {
    data: []
}

const details = (state = initialState, action) => {
    switch (action.type) {
        case FORM_INPUT:
            const obj = {
                name: action.details.name,
                t20: action.details.t20,
                odi: action.details.odi,
                test: action.details.test
            }
            return {
                content: [...state.data, obj]
            }
        default:
            return state
    }
}

export default details