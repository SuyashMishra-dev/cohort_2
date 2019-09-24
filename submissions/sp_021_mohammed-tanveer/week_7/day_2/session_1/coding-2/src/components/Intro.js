import React from 'react';
import styles from './mystyle.module.css'

function Intro(props){

    let skillsTag = props.allProfile.skills.map(skillsData => <button className = {styles.skillbuttons}>{skillsData}</button>)

    return(
        <div className = {styles.main}>
            <div className = {styles.intro}>
            <div>
                <button className = {styles.pro}>PRO</button>
                <img className = {styles.image} src="/tanveer.png" height="150" width="150"/>
            </div>
            <h3>{props.allProfile.name}</h3>
            <p>{props.allProfile.location} </p>
            <p>{props.allProfile.description}</p>
            <div>
                <button className = {styles.message}>Message</button>
                <button className = {styles.following}>Following</button>
            </div>
            <div className = {styles.skillsdiv}>
                <div>
                <p className = {styles.skills}>SKILLS</p>
                <div>
                    {skillsTag}
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Intro;