import React from 'react'
const Item =(props)=>{
    return(
      <div>
      <img src={props.inp.avatar_url}></img>
      <p>{props.inp.login}</p>
      <button onClick={()=>props.func(props.inp.repos_url)}>More</button>
      </div>
    )
}
export default Item;