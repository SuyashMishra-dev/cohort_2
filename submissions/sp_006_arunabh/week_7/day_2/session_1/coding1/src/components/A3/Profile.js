import React from 'react';

function Profile(props){
    return(
        <div className = "ProfileBody">
            <p className = "Pro">PRO</p>
            <img style = {{borderRadius: "50%"}} src = {props.profileData.url} alt = "Profile Image" height = "150" width = "150" />
            <h2>{props.profileData.name}</h2>
            <p>{props.profileData.location}</p>
            <p>{props.profileData.description}</p>
            <button>Message</button>
            <button>Following</button>
            <div style={{marginLeft: "40px"}}>
                <p style = {{textAlign: "left"}}>SKILLS</p>
                {(props.profileData.skills).map(item => {return <p style ={{float: "left", marginLeft: "10px", padding: "10px 30px", border: "1px solid gray"}}>{item + " "}</p>})}
            </div>
        </div>
    );
}

export default Profile;