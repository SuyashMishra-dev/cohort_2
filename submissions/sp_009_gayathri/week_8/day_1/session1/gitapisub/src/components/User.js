import React from 'react';

const User = (props)=> {
 return(
     <div> 
         <img src={props.inp.avatar_url} ></img>
         <p>{props.inp.login} </p>
         <button onClick={() => props.fData(props.inp.repos_url)}> Details</button>
     </div>
 )
     }
export default User; 