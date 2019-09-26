import React from 'react'

const Gitsearch = (props) => {
    return(
        <div>
            <img src={props.gitDetails.avatar_url}/>
            <p>{props.gitDetails.login}</p>
            <button onClick={() => props.getRepos(props.gitDetails.repos_url)}>Full Profile</button>
        </div>
    )
}

export default Gitsearch;