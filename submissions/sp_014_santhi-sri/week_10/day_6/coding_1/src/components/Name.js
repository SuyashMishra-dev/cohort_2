import React from 'react';

var data=localStorage.getItem("players");
var detail= JSON.parse(data)
       console.log(detail);
const Playername =({match}) =>{
   const {params :{ itemId } }= match;
       return (
               <div className=" text-dark bg-Success m-5">
                  <p> Player Name:-{detail[itemId].player}</p>
                   <p>Country :- {detail[itemId].selectedcountry}</p>
                      <p>T20 Score :-{detail[itemId].T20score}</p>
                      <p>ODI Score :- {detail[itemId].odiscore}</p>
                       <p>Test Score:-{detail[itemId].testscore}</p>
                       <h5>Total Score:- {Number(detail[itemId].odiscore) + Number(detail[itemId].T20score)+ Number(detail[itemId].testscore)}</h5>
                       </div>
                       
               );
                 }
export default Playername;