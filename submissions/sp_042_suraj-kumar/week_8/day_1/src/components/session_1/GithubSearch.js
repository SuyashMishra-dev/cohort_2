import React from 'react';

const GithubSearch = (props) => {
    return (
        <div>
            <img src={props.imp.avatar_url}></img>
            <p>{props.imp.login}</p>
            <button onClick={() => props.func(props.imp.repos_url)}>Moreinfo</button>
        </div>
    )
}
export default GithubSearch;