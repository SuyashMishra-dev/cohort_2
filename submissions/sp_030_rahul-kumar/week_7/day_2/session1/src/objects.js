import React from "react"
import App from "./App"
function Obj (props){
    console.log(props)
   return(
     <div>
       <h1>{props.list.Header}</h1>
       <ul>
         <li>{props.list.name1}</li>
         <li>{props.list.name2}</li>
         <li>{props.list.name3}</li>
         <li>{props.list.name4}</li>
       </ul>
     </div>
   )
  }
  
  export default Obj;