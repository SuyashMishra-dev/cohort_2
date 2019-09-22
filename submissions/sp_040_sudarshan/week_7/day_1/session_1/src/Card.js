import React from 'react';
import styles from './card.module.css'

class Card extends React.Component {
    render () {
        return (
            <div className = {styles.cardcontainer}>
                <div className = {styles.cardboc}>
                    <br></br>
                    <p className = {styles.protext}>PRO</p>
                    <img className = {styles.picture} src = "index.png" />
                    <h2 style = {{"color":"white","text-align":"center"}}>Ricky Park</h2>
                    <h4 style = {{"color":"white","text-align":"center"}}>NEW YORK</h4>
                    <h4 style = {{"color":"white","text-align":"center"}}>User interface designer and <br></br> front-end developer</h4>
                    <button className = {styles.msgbutton}>Message</button>
                    <button className = {styles.followingbutton}>Following</button>
                </div>

                <div className = {styles.cardfooter}>
                    <p className = {styles.skills}>skills</p>
                    <div className = {styles.small}>UI/UX</div>
                    <div className = {styles.fronted}>Front End Development</div>
                    <div className = {styles.small}>HTML</div>
                    <br></br>
                    <div className = {styles.small} style={{"margin-left":"20px"}}>CSS</div>
                    <div className = {styles.small}>JavaScript</div>
                    <div className = {styles.small}>React</div>
                    <div className = {styles.small}>Node</div>
                </div>
            </div>
        )
    }
}
export default Card;