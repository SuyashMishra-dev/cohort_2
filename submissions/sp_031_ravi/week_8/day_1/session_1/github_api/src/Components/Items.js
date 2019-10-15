import React from 'react';

function Item(props){
    let link = props.input.repos_urlra
    return(
        <div>
            <img src = {props.input.avatar_url} alt=""></img>
            <p>Id :{props.input.login}</p>
            <p>Score : {props.input.score}</p>
            <p>Followers :{props.input.followers_url}</p>
            <p>Following : {props.input.following_url}</p>
        </div>

    )
}

export default Item;