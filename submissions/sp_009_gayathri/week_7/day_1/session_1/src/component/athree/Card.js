import React from 'react';
import '../../App.css';
import styles from './card.module.css';

export default function Card() {
    return(
        <div className= {styles.card}>
        <div className= {styles.insetbox}>
         <img src="https://via.placeholder.com/150" height = "50%" width = "50%" className={styles.innercard}/>
         <h2> Ricky Park </h2>
         <h3>New York</h3>
         <p>User Interface designer and </p>
         <p>front-end developer</p>
         <button className={styles.buttonbg}> Message</button>
         <button className={styles.buttonselfbg}>Following </button> 
        <table className={styles.cellproperties}> SKILLS
            
                <tr> 
                    <td className={styles.cellarea}>
                        UI/UX
                    </td>
                    <td className={styles.cellareacol}> Front End Development</td>
                    <td className={styles.cellarea}> HTML </td>
                    <td className={styles.cellareaempty}> </td>
                </tr>
                <tr>
                <td className={styles.cellarea}>
                        CSS
                    </td>
                    <td className={styles.cellarea}> JavaScript</td>
                    <td className={styles.cellarea}>React </td>
                    <td className={styles.cellarea}>Node </td>
                </tr>
            
        </table>
        
         </div>             
        </div>
    );
}