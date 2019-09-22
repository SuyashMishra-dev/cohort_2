import React from 'react';
// import '../../App.css';
import styles from'./card.module.css'

export default function Card() {
  return (
      <div className={styles.box1}><br/>
    <div className={styles.box}><br/>
        <p className={styles.para}>PRO</p>
        <img src="http://www.bestfunnies.com/wp-content/uploads/2015/05/TOP-50-Beautiful-Girls-Girl-11-of-50-570x855.jpg"></img>
        <h2>Ricky Park</h2>
        <h4>NEW YORK</h4>
        <h4>User interface designer and <br/> front-end developer</h4>
        <button className={styles.button1}>Message</button>
        <button className={styles.button2}>Following</button>
        <div  className={styles.box3}> 
           
        <p className={styles.para2}>Skills</p>
<br/>

        <button className={styles.front}>UI/UX</button>
        <button className={styles.front1}>  Front End Development</button>
        <button className={styles.front2}> HTML</button><br/>
        <button className={styles.front3}> CSS</button>
        <button className={styles.front4}> JavaScript</button>
        <button className={styles.front5}>React</button>
        <button className={styles.front6}> Node</button>
       

           

        </div>
    </div>
    </div>
  );
}

