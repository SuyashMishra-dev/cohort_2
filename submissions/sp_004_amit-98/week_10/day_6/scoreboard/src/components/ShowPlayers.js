import React from 'react'
import axios from 'axios'
var data=localStorage.getItem("playerDetails");
var details=JSON.parse(data);
// console.log(details)
let mytext='';
const ShowPlayers=({match}) => {
 const { params: { itemId } } = match;
    // console.log(match)
    var total=Number(details[itemId-1].test)+Number(details[itemId-1].t20)+Number(details[itemId-1].odi);
    // console.log(total)
    axios.get("http://numbersapi.com/"+total+"?json")
    .then(res=>
        {
         mytext=res.data.text
          console.log(mytext)
        })
    return (
      <>
       <div style={{marginTop:"200px",textAlign:"center"}}>
       <h1 className="text-danger">{details[itemId-1].playerName}</h1>
       <h2>Country: {details[itemId-1].country}</h2>
       <h2>T20 Runs: {details[itemId-1].t20} Runs</h2>
       <h2>ODI Runs: {details[itemId-1].odi} Runs</h2>
       <h2>Test Runs: {details[itemId-1].test} Runs</h2>
       <h2>Total Runs: {Number(details[itemId-1].test)+Number(details[itemId-1].t20)+Number(details[itemId-1].odi)} Runs</h2> 
       <h2 className>{mytext}</h2>
      </div>
      </>
    )
}
export default ShowPlayers;
