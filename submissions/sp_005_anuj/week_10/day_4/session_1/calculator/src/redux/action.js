const EQUAL = "EQUAL"
const SUBTRACT = "SUBTRACT"
const MULTIPLY = "MULTIPLY"
const DIVIDE = "DIVIDE"
const CLEAR = "CLEAR"

export const equal = value =>{
	return{
		type : EQUAL,
		value
	}
}

export const subtract = value =>{
	return{
		type:SUBTRACT,
		value
	}
}

export const multiply = value =>{
	return{
		type:MULTIPLY,
		value
	}
}

export const divide = value =>{
	return{
		type:DIVIDE,
		value
	}
}

export const clear = value =>{
	return{
		type:CLEAR,
		value
	}
}