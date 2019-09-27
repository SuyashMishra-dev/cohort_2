import React from 'react';

function Item(props){
    return(
        <div>
            <img src = {props.input.avatar_url} alt=""></img>
            <p>{props.input.login}</p>
            <button>More</button>
        </div>

    )
}

export default Item;