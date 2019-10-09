
const Registeruser=(val)=>(
{
  type:"register",
}
)
const registerdata=(val)=>(

{
  type:"registerdata",
  val
}
)


const Login=()=>(
    {
        type:"Login"
        
    }
)

const info=()=>(
    {
        type:"info"
    }
)

const Loginsuccess=(token)=>(
{
        type:"Loginsucess",
        token
    
}
)
const displayinfo=(data)=>(
    {
        type:"display",
        data

    }
)


export {displayinfo,info,Loginsuccess,Login,registerdata,Registeruser}