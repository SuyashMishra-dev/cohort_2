import React from 'react';
// import '../../App.css';
import styles from'./cards.module.css'

export default class Card extends React.Component{
    render() {
  return (
      <div className={styles.box1}><br/>
    <div className={styles.box}><br/>
        <p className={styles.para}>PRO</p>
        <img src="http://www.bestfunnies.com/wp-content/uploads/2015/05/TOP-50-Beautiful-Girls-Girl-11-of-50-570x855.jpg"></img>
        <h2>{this.props.headerTwo}</h2>
        <h4>{this.props.headerfour}</h4>
        <h4>{this.props.headerNext} <br/>{this.props.headerNew} </h4>
        <button className={styles.button1}>{this.props.mess}</button>
        <button className={styles.button2}>{this.props.foll}</button>
        <div  className={styles.box3}> 
           
        <p className={styles.para2}>{this.props.skill}</p>
<br/>

        <button className={styles.front}>{this.props.ux}</button>
        <button className={styles.front1}> {this.props.front} </button>
        <button className={styles.front2}>{this.props.front1} </button><br/>
        <button className={styles.front3}> {this.props.front2}</button>
        <button className={styles.front4}>{this.props.front3} </button>
        <button className={styles.front5}>{this.props.front4}</button>
        <button className={styles.front6}> {this.props.front5}</button>
       

           

        </div>
    </div>
    </div>
  );
}
}