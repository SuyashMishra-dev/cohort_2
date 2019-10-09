import Axios from 'axios'

import {Registeruser,registerdata,Login,info,Loginsuccess,displayinfo} from './actions'

const fetchdata = (val) => {
   
    return dispatch =>{       
        dispatch(Registeruser())
  
   return Axios.post('http://localhost:8080/auth/register', val )
        .then(resp => {   
         dispatch(registerdata(resp.config.data))
        })
        .catch(resp =>{
            console.log(resp)
        })
    }
}

const fetchlogin = (value)=>{
    return dispatch=>{
        dispatch(Login())
        return Axios.post('http://localhost:8080/auth/login',value)
        .then(resp =>{
            dispatch(Loginsuccess(resp.data.token))
        })
        .catch(resp=>{
            console.log(resp)
        })
    }
}

const fetchinfo=(user,token)=>{
    return dispatch=>{ 
        dispatch(info())
        return Axios({
            url:`http://localhost:8080/user/${user}`,
            method: 'get',
            headers:{'Authorization':`Bearer ${token}`}
        })
        .then(resp=>{
            dispatch(displayinfo(resp.data))
        })
        .catch(resp=>{
            console.log(resp)
        })
    }
}


const reducer =( state={user:[],token:null,flag:false,name:null,info:null,displaylast:false} ,action)=>{
        if(action.type=="register")
        {
                    return state
        }
        if(action.type=="registerdata")
        {
                    return {
                            name:action.val,
                            flag:state.flag,
                            token:state.token,
                            user:state.user,
                            info:state.info,
                            displaylast:state.displaylast

                    }
        }
        if(action.type=="Login")
        {
                     return state
        }
        if(action.type=="Loginsucess")
        {
            //console.log(state)
                        return{ 
                            user:state.user,
                            token:action.token,
                            flag:true,
                            name:state.name,
                            info:state.info,
                            displaylast:state.displaylast
                        }             
        }
        if(action.type=="info")
        {
            return state;
        }
        if(action.type=="display")
        {
            return{
                name:state.name,
                flag:false,
                token:state.token,
                user:state.user,
                info:action.data,
                displaylast:true
            }
        }
        return state;
}
export default reducer;
export {fetchdata,Registeruser,fetchlogin,Login,fetchinfo};