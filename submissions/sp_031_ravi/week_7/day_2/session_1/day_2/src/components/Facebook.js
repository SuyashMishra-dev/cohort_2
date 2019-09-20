import React from 'react';
import './../App.css';

const Facebook = (props) => {
    let list = props.Data.skills.map((el,i)=><button key={i.toString()+'id'}>{el}</button>)
    return(
        <div className="card">
            <div className="template" style={{background:'#435880',width:"50%",height:'500px',marginLeft:"25%",marginTop:"20%"}}>
                <a><img src="https://via.placeholder.com/150" style={{borderRadius:"50%", marginLeft:"100px",marginTop:"50px"}}></img></a>
                <h3 style={{textAlign:"center"}}>Ricky Park</h3>
                <h5 style={{textAlign:"center"}}>NEW YORK</h5>
                <p style={{textAlign:"center"}}>User interface designer and front-end developer</p>
                <div>{list}</div>
            </div>

        </div>
    )
}
export default Facebook;