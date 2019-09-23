import React from 'react';

const Github = (props) => {


    return (
        <div>
            <div className="card mt-4 mx-5" style={{ width: "18rem" }}>
                <img src={props.picture} class="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href={props.repo} class="btn btn-success">Repos</a>
                </div>
            </div>

        </div>
    )
}

export default Github