import React from 'react'


const Display = (props) => {
  console.log(props)
  return (
    <div>
      <div>{props.items.map(a => {
        return (
          <div>
            <div className="col-xl-12 ">

              <img className="mt-3" src={a.avatar_url}></img>
            </div>
            <div>
              <button className="btn btn-success mt-2 col-xl-8" onClick={() => props.repofun(a.repos_url)}>{a.login}</button>
            </div>

            <div className="mt-2 row">
              <h3 className="text-danger">View Profile Click On Link</h3>
              <a href={a.html_url}><h3 className="text-primary" >{a.login}</h3></a>

            </div>

          </div>
        )
      })}</div>
    </div>
  )

}
export default Display;