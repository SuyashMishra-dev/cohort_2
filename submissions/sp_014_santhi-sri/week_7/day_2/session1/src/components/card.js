import React from 'react'
import styles from './app.module.css'
export default function card(props){
    const skillset = props.skills.map(ele =>(<li>{ele}</li>))
    return(
        <div className= {styles.background}>            
            <div>
                <img src = "/index.png"></img>
            </div>
            <div className = {styles.text}>
               <h2>{props.name}</h2> 
                <p>{props.location}</p>
                <p>{props.des}</p>
                <button style={{backgroundColor:"skyblue"}}>Message</button>
                <button style={{backgroundColor:"rgb(17, 17, 37)"}}>Following</button>                  
            </div>
            <div className={styles.box} >                
                <ul className={styles.skill}>
                    {skillset}
                </ul>
            </div>
        </div>        
    )

}