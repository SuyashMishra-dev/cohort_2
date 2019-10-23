import React from 'react';
import Back from "./Back"

var data=localStorage.getItem("ScoreDetails");
var detail= JSON.parse(data)
        console.log(detail); 

const Name =({match}) =>{
    const {params :{ itemId } }= match;

   
        return (
                <div class="card text-white bg-Success m-5">
                    
                    <div class="card-header bg-dark text-light"><h3> Player Name:-{detail[itemId].Name}</h3></div>
                        <div class="card-body bg-dark">
                        <h5 class="card-title ">Country :- {detail[itemId].Country}</h5>
                        <h5 class="card-title ">T20 Score :-{detail[itemId].T20Score}</h5>
                        <h5 class="card-title">ODI Score :- {detail[itemId].ODIScore}</h5>
                        <h5 class="card-title">Test Score:-{detail[itemId].TestScore}</h5>
                        <h5 class="card-title text-danger">Total Score:- {Number(detail[itemId].ODIScore) + Number(detail[itemId].T20Score)+ Number(detail[itemId].TestScore)}</h5>
                        </div>
                        <Back />
                    </div>
                );
                         
                  }

            
   
export default Name;