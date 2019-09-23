import React from 'react';

const Github = (props) => {
    let name = props.info.map(elm => <h4>User Name: {elm.login}</h4>)
    let profilePicture = props.info.map(elm => <img src={elm.avatar_url} style={{ weight: "50px", height: "50px" }} alt="" />)
    console.log(props.info)
    return (
        <div>
            <div>
                {profilePicture}
                {name}
            </div>

            <div class="card" style={{ width: "18rem" }}>
                <img src={profilePicture} class="card-img-top" alt="" />
                <div class="card-body">
                    <h5 class="card-title"></h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>

        </div>
    )
}

export default Github