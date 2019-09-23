import React from 'react'


const Display = (props) =>
{
  console.log('Display called')
  return(
    <div>
      <div>{props.items.map(a=>{
        return (
          <div>
            <div className="col-xl-5">
              <img src={a.avatar_url}></img>
            </div>
            <div>
              <button className="btn btn-success" onClick={(e)=>{props.fun(e,a.repos_url)}}>{a.login}</button>
              </div>
           
            <div>
              <a href={a.repos_url}>{a.login}</a>
          </div>
          
          </div>
          )
      })}</div>
    </div>
  )
}
export default Display;