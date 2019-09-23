import React from 'react';

// class Github extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state= {
//         picture: props.picture,
//         name: props.name,
//         repos: props.repo,
//         }
//     }
//     render() {
    const Github = (props) =>{
        return (
            <div>
                <div className="card mt-4 mx-5" style={{ width: "18rem" }}>
                    <img src={props.picture} className="card-img-top" alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        {/* <p className="card-text"></p> */}
                        <a href={props.repo} className="btn btn-success">Repos</a>
                    </div>
                </div>
            </div>
        )
    }


export default Github