const Zero = () => ({type : "ZERO"})
const One = () => ({type : "ONE"})
const Two = () => ({type : "TWO"})
const Three = () => ({type : "THREE"})
const Four = () => ({type : "FOUR"})
const Five = () => ({type : "FIVE"})
const Six = () => ({type : "SIX"})
const Seven = () => ({type : "SEVEN"})
const Eight = () => ({type : "EIGHT"})
const Nine = () => ({type : "NINE"})
const Plus = () => ({type : "PLUS"})
const Minus = () => ({type : "MINUS"})
const Multiply = () => ({type : "MULTIPLY"})
const Divide = () => ({type : "DIVIDE"})
const Equals = () => ({type : "EQUALS"})
const Clear = () => ({type : "CLEAR"})

const initstate = [];
     
const Action = (state = initstate, action) => {
    if(action.type === "ZERO"){
        console.log(action.type)
        return (initstate.push(0),[...initstate])
    }
    if(action.type === "ONE"){
        console.log(action.type)
        return  (initstate.push(1),[...initstate])
    }
    if(action.type === "TWO") {
        console.log(action.type)
        return  (initstate.push(2),[...initstate])
    }
    if(action.type === "THREE") {
        console.log(action.type)
        return  (initstate.push(3),[...initstate])
    }
    if(action.type === "FOUR") {
        console.log(action.type)
        return  (initstate.push(4),[...initstate])
    }
    if(action.type === "FIVE") {
        console.log(action.type)
        return  (initstate.push(5),[...initstate])
    }
    if(action.type === "SIX") {
        console.log(action.type)
        return  (initstate.push(6),[...initstate])
    }
    if(action.type === "SEVEN") {
        console.log(action.type)
        return  (initstate.push(7),[...initstate])
    }
    if(action.type === "EIGHT") {
        console.log(action.type)
        return  (initstate.push(8),[...initstate])
    }
    if(action.type === "NINE") {
        console.log(action.type)
        return  (initstate.push(9),[...initstate])
    }
    if(action.type === "PLUS") {
        return  (initstate.push("+"),[...initstate])
    }
    if(action.type === "MINUS") {
        return  (initstate.push("-"),[...initstate])
    }
    if(action.type === "MULTIPLY") {
        return  (initstate.push("*"),[...initstate])
    }
    if(action.type === "DIVIDE") {
        return (initstate.push("/"),[...initstate])
    }
    if(action.type === "EQUALS") {
        return (initstate.push("="),[...initstate]) 
    }
    if(action.type === "CLEAR") {
        return state = 0
    }
    return state;
}

export default Action;
export {Zero, One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Plus, Minus, Multiply, Divide, Equals, Clear}