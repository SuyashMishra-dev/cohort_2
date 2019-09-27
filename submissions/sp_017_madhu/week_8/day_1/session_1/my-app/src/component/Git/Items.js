import React from 'react';

const Items = (props) => {
    return(
        <div className="row mt-5">
            <div className="col-md-2">

            </div>
            <div className="col-md-4">
                <img height="200px" width="200px" src ={props.inp.avatar_url}></img>
            </div>
           
            <div className="col-md-4"  >
            <button className="text-left" height="10px"onClick={()=> props.func(props.inp.repos_url)}>More </button>
                <p className="text-left">Name:- {props.inp.login}</p>
                <p className="text-left">ID:- {props.inp.id}</p>
                <p className="text-left">Git-URL:- {props.inp.html_url}</p>
                <p className="text-left">Score:-{props.inp.score}</p>

            </div>
                    
        </div>
        
    )
}
export default Items;