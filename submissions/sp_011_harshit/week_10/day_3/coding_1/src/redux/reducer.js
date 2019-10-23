import axios from 'axios'

// function for login axios
const login=(val)=>{
console.log("hiim in login")
console.log(val)
}


// function for regsiter axios
const register=(val)=>{
    console.log("hiim in reg")
    console.log(val)
    }


const reducer  =(state={name:''},action)=>{

    return state
}
export default reducer 
export {login,register}