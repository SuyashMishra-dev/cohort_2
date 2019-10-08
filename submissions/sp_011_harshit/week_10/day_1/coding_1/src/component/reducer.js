import axios from 'axios'


const Registeruser=(val)=>(
    console.log("im in register"),
{
  type:"register",


}
)

const error=(er)=>(
{
    type:"error"
}

)




const fetchdata = (val) => {
    console.log("im in fetch")
    return dispatch =>{
        console.log("dispatching post request")
        dispatch(Registeruser())
    console.log(val)
   return axios.post('http://localhost:8080/auth/register', val )
        .then(resp => {
            console.log(resp)
        })
        .catch(resp =>{
            console.log("fail"+resp)
        })
    }
}


const reducer =(state={user:[]},action)=>{
        if(action.type=="register")
        {
                    return state
        }
}
export default reducer;
export {fetchdata,Registeruser};