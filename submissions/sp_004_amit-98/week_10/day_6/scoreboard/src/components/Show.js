import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
let arrCountry=["INDIA","AUSTRALIA","ENGLAND","SOUTH AFRICA","PAKISTAN","BANGLADESH","SRI LANKA","NEW ZEALAND","AFGANISTAN","WEST INDIES"];
function Show(props) {
    let playerList=props.details.map((item,index)=>{
        return(
            <div className="mt-4">
            <Link to={`/showPlayes${index + 1}`}> <span style={{marginLeft:"700px"}}>{item.playerName}</span></Link>
            <span className="ml-5">{item.country}</span>
            <span className="ml-5">{item.t20}</span>
            <span className="ml-5">{item.odi}</span>
            <span className="ml-5">{item.test}</span>
            </div>
        )
    })
    let showOption = arrCountry.map(item=>{
      return(
    <option value={item}>{item}</option>
      )})
  return (
    <div style={{marginTop:"200px"}}>
      <div className="float-left offset-3">
      <p>Filter by country</p>
      <select className="form-control color-white float-left" style={{width:"150px",marginLeft:"150px",textAlign:"center"}} name="country">
      {showOption}
      </select>
      </div>
      <div className="float-left ml-5">
      <p>Sort Assending</p>
      <button className="btn btn-primary ml-2">T20</button>
      <button className="btn btn-primary ml-2">ODI</button>
      <button className="btn btn-primary ml-2">Test</button>
      </div>
      <div className="float-left ml-5">
      <p>Sort desending</p>
      <button className="btn btn-primary ml-2">T20</button>
      <button className="btn btn-primary ml-2">ODI</button>
      <button className="btn btn-primary ml-2">Test</button>
      </div>
      <div style={{clear:"both"}}>
      {playerList}
      </div>
     
      <div style={{marginLeft:"700px",marginTop:"200px"}}>
     <Link to="/show1"><button className="btn btn-primary">Page 1</button></Link>
      </div>
    </div>
  )
}
const mapStateToProps = (state)=>{
  return {
    details: state
  }
  
}
export default connect(mapStateToProps,null)(Show);
