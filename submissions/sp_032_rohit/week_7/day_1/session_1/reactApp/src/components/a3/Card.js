import React from 'react';
import styles from './Card.module.css'

export default function Card() {
  return (
    <div>
        <table className= {styles.table}>
            <tr className= {styles.box}>
                <img src="https://via.placeholder.com/150" alt="image"/>
                <h4>Ricky Park</h4>
                <p>NEW YORK</p>
                <p>User interface designer and front-end developer</p>
                <tr className = {styles.box3}>
                    <td className = {styles.box1}>
                        Message
                    </td>
                    <td className = {styles.box2}>
                        Following
                    </td>
                </tr>
                </tr>
                <tr className= {styles.bottom}>
                    <p>SKILLS</p>
                    <tr className = {styles.box3}>
                    <td className = {styles.skillBox}>
                        UI/UX
                    </td>
                    <td className = {styles.skillBox}>
                        Front End Development
                    </td>
                    <td className = {styles.skillBox}>
                        HTML
                    </td>
                    </tr>
                    <tr>
                    <td className = {styles.skillBox}>
                        CSS
                    </td>
                    <td className = {styles.skillBox}>
                        Javascript
                    </td>
                    <td className = {styles.skillBox}>
                        React
                    </td>
                    <td className = {styles.skillBox}>
                        Node
                    </td>
                </tr>
                </tr>

        </table>
    </div>
  );
}
