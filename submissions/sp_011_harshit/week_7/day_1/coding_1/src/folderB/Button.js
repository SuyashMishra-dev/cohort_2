import React from 'react';

function Button(props){
  
      return (
        <div>
        <div className="row">
        <button className="btn btn-primary col-xl-1 rounded-pill">JOIN US</button>
        <button className="btn col-xl-1 rounded-pill" style={{backgroundColor:"cyan",marginLeft:"20px"}}>SETTINGS</button>
        </div>
        <div className="row mt-2">
        <button className="btn btn-warning col-xl-1 rounded-pill">LOGIN</button>
        <button className="btn btn-danger col-xl-1 rounded-pill" style={{marginLeft:"20px"}}>CONTACT US</button>
        </div>
        <div className="row mt-2">
        <button className="btn btn-success col-xl-1 rounded-pill">SEARCH</button>
        <button className="btn col-xl-1 rounded-pill" style={{backgroundColor:"purple",marginLeft:"20px"}}>HELP</button>
        </div>
        <div className="row mt-2">
        <button className="btn col-xl-1 rounded-pill" style={{backgroundColor:"pink"}}>HOME</button>
        <button className="btn col-xl-1 rounded-pill" style={{backgroundColor:"brown",marginLeft:"20px"}}>DOWNLOAD</button>
        </div>  
        </div>
      )
  
}


export default Button;   
