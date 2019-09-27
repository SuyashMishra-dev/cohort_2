import React from 'react';
const List =(props)=> {
    return(
        <div class="card mb-3">
  <div class="row no-gutters">
    <div class="col-md-4">
      <img src={props.inp.avatar_url} class="card-img" alt="Avator"/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">>Name:- {props.inp.login}</h5>
        <p class="card-text">Git-URL:- {props.inp.html_url}</p>
        <p class="card-text">Git-URL:- {props.inp.html_url}</p>
        <p class="card-text"><small class="text-muted">Score:-{props.inp.score}</small></p>
      </div>
    </div>
  </div>
</div>


        // <div className="bg-dark text-light mt-5">
        
        //     <p> {props.inp.name}</p>

            
        // </div>
    )
}
export default List;