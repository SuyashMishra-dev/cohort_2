const INC_COUNTER = "INC_COUNTER"
const DEC_COUNTER = "DEC_COUNTER"
const EVEN_ODD= "EVEN_ODD"
const MUL = "MUL"
const DIV = "DIV"


const incrementCounter = (amount) => {
	return {
		type: INC_COUNTER,
        amount
	}
}

const decrementCounter = (amount) => {

	return {
		type: DEC_COUNTER,
		amount
	}
}



const even_odd= (amount) => {
	
	return {
		type: EVEN_ODD,
		amount
	}
}

const multiply  = (amount) => {
	
	return {
		type: MUL,
		amount
	}
}

const divide = (amount) => {
	console.log(divide)
	return {
		type: DIV,
		amount
	}
}



// const even_num= (even) => {
// 	return {
// 		type: EVEN,
// 		even
// 	}

export { incrementCounter, decrementCounter, even_odd, multiply, divide}