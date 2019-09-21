import React from 'react';
import './App.css';
import styles from './style.module.css';

export default function Button(){
    return(
        <div>
           <button className = {styles.joinButton}>  JION US </button>
           <button className = {styles.settingButton}> SETTINGS </button><br></br>
           <button className = {styles.loginButton}>  LOGIN </button>
           <button className = {styles.contactButton}>  CONTACT US </button><br></br>
           <button className = {styles.searchButton}>  SEARCH </button>
           <button className = {styles.helpButton}>  HELP </button><br></br>
           <button className = {styles.homeButton}>  HOME </button>
           <button className = {styles.downloadButton}>  DOWNLOAD </button>
        </div>
        
            
    )
}