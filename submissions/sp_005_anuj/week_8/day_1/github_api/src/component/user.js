import React from 'react';

const User = (props) => {
   var User_data = props.data.map(item => {
       return(
           <div className = "card">
                <img srv = {item.avatar_url} className = "card-img-top"></img>
                <div className = "card-body">
                    <h2 className = "card-title">{item.login}</h2>
                </div>
                <ul>
                    <li>Score : {item.score}</li>
                    <li><a href = {item.html_url}>Visit Github Profile</a></li>
                </ul>
                <a className = "btn btn-primary" onClick = {() => props.func(item.repos_url)} href = "#user-repos">See Repos</a>
           </div>
       )
   })
   return (
       <div>
           {User_data}
       </div>
   )
}

export default User;