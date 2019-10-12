import React from "react";

var data = localStorage.getItem("ScoreDetails");
var detail = JSON.parse(data);
const Name = ({match}) => {
    const {params:{itemId}} = match;
    return (
        <div style={{marginTop:100}}>
            <p>Name: {detail[itemId].name}</p>
            <p>Country: {detail[itemId].country}</p>
            <p>ODI Score: {detail[itemId].ODIScore}</p>
            <p>T20 Score: {detail[itemId].T20Score}</p>
            <p>Test Score: {detail[itemId].TestScore}</p>
            <p>Total Run: {Number(detail[itemId].ODIScore) + Number(detail[itemId].T20Score)+ Number(detail[itemId].TestScore)}</p>

        </div>
    )
}
export default Name;