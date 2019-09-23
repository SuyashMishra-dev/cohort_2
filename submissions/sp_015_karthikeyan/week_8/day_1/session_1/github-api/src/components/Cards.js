import React from 'react';

const Cards = props => {
    let cardsData = props.data.map(ele => {
        return (
            <div className = "card col-lg-4 my-2">
                <img src={ele.avatar_url} className = "card-img-top" />
                <div className = "card-body">
                    <h5 className = "card-title">{ele.login}</h5>
                </div>  
                <ul className = "list-group list group-flush my-1">
                    <li className = "list-group-item">Score : {ele.score}</li>
                    <li className = "list-group-item"><a href={ele.html_url}>Link to Github</a></li>
                </ul>
                <a className = "btn btn-primary my-2" onClick={() => props.func(ele.repos_url)} href="#user-repos">See Repositories</a>
            </div>
        )
    })
    return (
        <div className = "row my-3">
            {cardsData}
        </div>
    );
}

export default Cards;