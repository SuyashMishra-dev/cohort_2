const EQUAL = "EQUAL"
const SUBTRACT = "SUBTRACT"
const MULTIPLY = "MULTIPLY"
const DIVIDE = "DIVIDE"
const CLEAR = "CLEAR"

const initialState = {
	result : 0,
	// results : []
}

const reduce = (state = initialState,action) =>{
	switch(action.type){
		case EQUAL:
			return{
				result:eval(action.value),
				// results:[...state.results,action.value]
			}
		
		case SUBTRACT:
			return{
				result:state.result - action.value,
				// results:[...state.results,state.result - action.value]
			}
		
		case MULTIPLY:
			return{
				result:state.result * action.value,
				// results:[...state.results, state.result * action.value]
			}		

		case DIVIDE:
			return{
				result:state.result / action.value,
				// results:[...state.results, state.result / action.value]
			}

		case CLEAR:
			return{
                result:state.result = 0,
                // results:[...state.results,action.value]
				
			}
		
		default:
			return state
		
	}
}

export default reduce;