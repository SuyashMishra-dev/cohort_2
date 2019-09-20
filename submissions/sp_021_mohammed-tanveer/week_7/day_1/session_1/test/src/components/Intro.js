import React from 'react';
import styles from './mystyle.module.css';

export default function Profile(){
    return (
    <div className = {styles.main}>
        <div className = {styles.intro}>
          <div>
            <button className = {styles.pro}>PRO</button>
            <img className = {styles.image} src="/tanveer.png" height="150" width="150"/>
          </div>
          <h3>Mohammed Tanveer</h3>
          <p>BANGALORE </p>
          <p>User interface designer and <br></br> front-end developer</p>
          <div>
            <button className = {styles.message}>Message</button>
            <button className = {styles.following}>Following</button>
          </div>
          <div className = {styles.skillsdiv}>
            <div>
              <p className = {styles.skills}>SKILLS</p>
              <div>
                <button className = {styles.skillbuttons}>UI/UX</button>
                <button className = {styles.skillbuttons}>Front End Development</button>
                <button className = {styles.skillbuttons}>HTML</button>
              </div>  
              <div>
                <button className = {styles.skillbuttons}>CSS</button>
                <button className = {styles.skillbuttons}>JavaScript</button>
                <button className = {styles.skillbuttons}>React</button>
                <button className = {styles.skillbuttons}>Node</button>
              </div>
            </div>
          </div>
        </div>
    </div>
    )
}